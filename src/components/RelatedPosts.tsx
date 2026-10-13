import PostCard from "./PostCard";
import { getRelatedPosts, type PostMeta } from "@/lib/posts";

export default function RelatedPosts({
  currentPost,
}: {
  currentPost: PostMeta;
}) {
  const related = getRelatedPosts(currentPost, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-border-soft">
      <h2 className="text-xl font-extrabold mb-6">Leia também</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
