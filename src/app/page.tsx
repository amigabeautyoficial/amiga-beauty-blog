import type { Metadata } from "next";
import FeaturedHero from "@/components/FeaturedHero";
import CategorySection from "@/components/CategorySection";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import { getTopLevelCategories } from "@/lib/categories";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-horizontal-official.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
];

export default function Home() {
  const allPosts = getAllPosts();
  const featured = [...allPosts].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeaturedHero posts={featured} />
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
