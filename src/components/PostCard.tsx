import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import { PostMeta } from "@/lib/posts";

export default function PostCard({
  post,
  size = "default",
}: {
  post: PostMeta;
  size?: "default" | "large";
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-nude ${
          size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <CategoryBadge slug={post.category} />
      </div>
      <h3
        className={`mt-2 font-bold leading-snug group-hover:text-primary transition-colors ${
          size === "large" ? "text-xl md:text-2xl" : "text-base"
        } line-clamp-2`}
      >
        {post.title}
      </h3>
      <p className="mt-1 text-xs text-foreground/60">{post.author}</p>
    </Link>
  );
}
