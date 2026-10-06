import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import CategoryPill from "@/components/CategoryPill";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <CategoryPill slug={post.category} />
      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Por {post.author} ·{" "}
        {new Date(post.date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="relative w-full aspect-[16/9] mt-8 overflow-hidden rounded-3xl bg-nude">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div
        className="prose prose-lg max-w-none mt-10 prose-headings:font-extrabold prose-a:text-[var(--primary)]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
