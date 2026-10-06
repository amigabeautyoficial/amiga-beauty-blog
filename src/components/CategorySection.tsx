import Link from "next/link";
import PostCard from "./PostCard";
import { PostMeta } from "@/lib/posts";
import { getCategory } from "@/lib/categories";

export default function CategorySection({
  categorySlug,
  posts,
}: {
  categorySlug: string;
  posts: PostMeta[];
}) {
  if (posts.length === 0) return null;
  const category = getCategory(categorySlug);
  const [main, ...rest] = posts;
  const grid = rest.slice(0, 4);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold" style={{ color: category.color }}>
          {category.name}
        </h2>
        <Link
          href={`/categoria/${category.slug}`}
          className="text-sm font-bold text-foreground/60 hover:text-primary"
        >
          Ver tudo →
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PostCard post={main} size="large" />
        <div className="grid grid-cols-2 gap-6">
          {grid.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
