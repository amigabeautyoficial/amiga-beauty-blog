import Link from "next/link";
import { getCategory } from "@/lib/categories";

export default function CategoryPill({ slug }: { slug: string }) {
  const category = getCategory(slug);
  return (
    <Link
      href={`/categoria/${category.slug}`}
      className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full"
      style={{ backgroundColor: category.bg, color: category.color }}
    >
      {category.name}
    </Link>
  );
}
