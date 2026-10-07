import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { getChildCategories } from "./categories";

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

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { slug, contentHtml, ...(data as Omit<PostMeta, "slug">) };
}
