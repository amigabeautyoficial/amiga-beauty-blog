import Link from "next/link";
import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Todos os artigos do Amiga Beauty: beleza, comportamento, relacionamentos, carreira, fé e achadinhos.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold" style={{ color: "var(--primary)" }}>
        Blog
      </h1>
      <p className="mt-2 text-foreground/70">
        Todos os artigos do Amiga Beauty, em ordem do mais recente pro mais
        antigo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Paginação"
          className="flex items-center justify-center gap-2 mt-12"
        >
          {safePage > 1 && (
            <Link
              href={safePage - 1 === 1 ? "/blog" : `/blog?page=${safePage - 1}`}
              className="text-sm font-bold px-4 py-2 rounded-full border border-border-soft hover:text-primary"
            >
              ← Anterior
            </Link>
          )}
          <span className="text-sm text-foreground/60 px-2">
            Página {safePage} de {totalPages}
          </span>
          {safePage < totalPages && (
            <Link
              href={`/blog?page=${safePage + 1}`}
              className="text-sm font-bold px-4 py-2 rounded-full border border-border-soft hover:text-primary"
            >
              Próxima →
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
