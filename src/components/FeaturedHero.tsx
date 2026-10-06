import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import { PostMeta } from "@/lib/posts";

export default function FeaturedHero({ posts }: { posts: PostMeta[] }) {
  const [main, ...rest] = posts;
  if (!main) return null;
  const side = rest.slice(0, 4);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <Link href={`/blog/${main.slug}`} className="lg:col-span-3 group block">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-nude">
            <Image
              src={main.coverImage}
              alt={main.title}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span
                className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Destaque
              </span>
            </div>
          </div>
          <div className="mt-4">
            <CategoryBadge slug={main.category} />
            <h1 className="mt-3 text-2xl md:text-3xl font-extrabold leading-tight group-hover:text-primary transition-colors">
              {main.title}
            </h1>
            <p className="mt-2 text-foreground/70 line-clamp-2">{main.excerpt}</p>
            <p className="mt-3 text-sm font-semibold text-foreground/60">
              {main.author}
            </p>
          </div>
        </Link>

        <div className="lg:col-span-2 flex flex-col gap-5">
          {side.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex gap-4 items-start"
            >
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-nude">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <CategoryBadge slug={post.category} />
                <h3 className="mt-1.5 font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
