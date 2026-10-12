import type { Metadata } from "next";
import FeaturedHero from "@/components/FeaturedHero";
import SocialBar from "@/components/SocialBar";
import CategorySection from "@/components/CategorySection";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import { getTopLevelCategories } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  const allPosts = getAllPosts();
  const featured = [...allPosts].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div>
      <FeaturedHero posts={featured} />
      <SocialBar />
      {getTopLevelCategories().map((cat) => (
        <CategorySection
          key={cat.slug}
          categorySlug={cat.slug}
          posts={getPostsByCategory(cat.slug)}
        />
      ))}
    </div>
  );
}
