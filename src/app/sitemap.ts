import type { MetadataRoute } from "next";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import { categories } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/sobre`, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${SITE_URL}/blog`, changeFrequency: "daily", priority: 0.8 },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Só inclui categorias que têm pelo menos um post — evita indexar páginas 404.
  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((cat) => getPostsByCategory(cat.slug).length > 0)
    .map((cat) => {
      const latestPost = getPostsByCategory(cat.slug)[0];
      return {
        url: `${SITE_URL}/categoria/${cat.slug}`,
        lastModified: latestPost ? new Date(latestPost.date) : undefined,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    });

  return [...staticPages, ...postPages, ...categoryPages];
}
