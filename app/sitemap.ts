import type { MetadataRoute } from "next";
import { siteUrlString } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/franquia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/bio", priority: 0.6, changeFrequency: "monthly" },
  { path: "/bio/cliente", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bio/franqueado", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bio/apresentador", priority: 0.5, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = (await getAllPosts()).map((p) => ({
    url: `${siteUrlString}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00-03:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrlString}${path}`,
    lastModified,
    changeFrequency,
    priority,
  })), ...posts];
}
