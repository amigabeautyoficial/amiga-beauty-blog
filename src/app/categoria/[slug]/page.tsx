import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { categories, getCategory, getChildCategories } from "@/lib/categories";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  const posts = getPostsByCategory(slug);
  const children = getChildCategories(slug);

  if (posts.length === 0) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold" style={{ color: category.color }}>
        {category.name}
      </h1>

      {children.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {children.map((child) => (
            <Link
              key={child.slug}
              href={`/categoria/${child.slug}`}
              className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full"
              style={{ backgroundColor: child.bg, color: child.color }}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
