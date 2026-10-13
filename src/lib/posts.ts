import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {
  getChildCategories,
  getTopLevelCategories,
  getCategory,
  type Category,
} from "./categories";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  coverImage: string;
  featured?: boolean;
  /** Título otimizado para <title>/SEO, quando diferente do título exibido como H1. */
  seoTitle?: string;
  /** Meta description otimizada, quando diferente do excerto exibido no site. */
  seoDescription?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = readSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...(data as Omit<PostMeta, "slug">) };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Posts de uma categoria. Quando `categorySlug` é uma categoria "pai"
 * (ex: "beleza"), também inclui os posts de todas as suas subcategorias
 * (ex: "maquiagem", "skincare", "cabelo").
 */
export function getPostsByCategory(categorySlug: string): PostMeta[] {
  const childSlugs = getChildCategories(categorySlug).map((c) => c.slug);
  const slugs = [categorySlug, ...childSlugs];
  return getAllPosts().filter((p) => slugs.includes(p.category));
}

/**
 * Categorias de primeiro nível que têm ao menos um post (direto ou em
 * alguma subcategoria). Use para montar menus sem links que dão 404.
 */
export function getTopLevelCategoriesWithPosts(): Category[] {
  return getTopLevelCategories().filter(
    (cat) => getPostsByCategory(cat.slug).length > 0
  );
}

/**
 * Subcategorias de `parentSlug` que têm ao menos um post próprio.
 */
export function getChildCategoriesWithPosts(parentSlug: string): Category[] {
  return getChildCategories(parentSlug).filter(
    (child) => getPostsByCategory(child.slug).length > 0
  );
}

/**
 * Posts "afins" de um artigo, pra blocos de "Leia também". Alarga a busca
 * em camadas até juntar `limit` posts:
 * 1. Mesma subcategoria (excluindo o próprio post);
 * 2. Outras subcategorias da mesma categoria-pai (irmãs);
 * 3. Posts mais recentes de qualquer categoria, como último recurso.
 * Nunca repete um post já incluído numa camada anterior.
 */
export function getRelatedPosts(
  currentPost: PostMeta,
  limit = 3
): PostMeta[] {
  const seen = new Set([currentPost.slug]);
  const related: PostMeta[] = [];

  function addFrom(candidates: PostMeta[]) {
    for (const post of candidates) {
      if (related.length >= limit) break;
      if (seen.has(post.slug)) continue;
      seen.add(post.slug);
      related.push(post);
    }
  }

  // 1. Mesma subcategoria.
  addFrom(getPostsByCategory(currentPost.category));

  // 2. Categorias irmãs (mesmo pai).
  if (related.length < limit) {
    const parentSlug = getCategory(currentPost.category).parent;
    if (parentSlug) {
      addFrom(getPostsByCategory(parentSlug));
    }
  }

  // 3. Mais recentes de qualquer categoria, como último recurso.
  if (related.length < limit) {
    addFrom(getAllPosts());
  }

  return related;
}

// Domínios de loja/afiliados: links pra eles no corpo do artigo recebem
// rel="sponsored nofollow" automaticamente, sem afetar outros links externos
// (como parcerias editoriais, que devem continuar dofollow).
const AFFILIATE_HOSTS = ["ofertas.amigabeauty.com.br"];

function addAffiliateLinkAttributes(contentHtml: string): string {
  return AFFILIATE_HOSTS.reduce((html, host) => {
    const pattern = new RegExp(
      `<a href="(https?:\\/\\/${host.replace(/\./g, "\\.")}[^"]*)"`,
      "g"
    );
    return html.replace(
      pattern,
      '<a href="$1" target="_blank" rel="sponsored nofollow noreferrer"'
    );
  }, contentHtml);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = addAffiliateLinkAttributes(processed.toString());
  return { slug, contentHtml, ...(data as Omit<PostMeta, "slug">) };
}
