import type { MetadataRoute } from "next";
import { siteUrlString } from "@/lib/site-config";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/franquia", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bio", priority: 0.6, changeFrequency: "monthly" },
  { path: "/bio/cliente", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bio/franqueado", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bio/apresentador", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrlString}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
