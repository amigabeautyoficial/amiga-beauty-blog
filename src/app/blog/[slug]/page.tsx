import Image from "next/image";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import CategoryPill from "@/components/CategoryPill";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getCategoryChain } from "@/lib/categories";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const categoryChain = getCategoryChain(post.category);
  const breadcrumbItems = [
    { label: "Início", href: "/" },
    ...categoryChain.map((cat) => ({
      label: cat.name,
      href: `/categoria/${cat.slug}`,
    })),
    { label: post.title },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: [post.coverImage],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

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

      <RelatedPosts currentPost={post} />
    </article>
  );
}
