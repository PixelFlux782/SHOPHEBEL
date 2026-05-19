import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/siteConfig";
import { shophebelTools } from "@/lib/tools";

const staticRoutes = [
  "",
  "/analyse",
  "/analyse-system",
  "/datenschutz",
  "/impressum",
  "/ki-sichtbarkeit",
  "/leistungen",
  "/preise",
  "/shophebel",
  "/shophebel/optimierung",
  "/tools",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const toolRoutes = shophebelTools.map((tool) => `/tools/${tool.slug}`);

  return [...staticRoutes, ...toolRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
