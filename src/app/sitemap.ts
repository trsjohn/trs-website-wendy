import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trsolutions.io";
  const routes = [
    { path: "",            priority: 1.0 },
    { path: "/about",      priority: 0.8 },
    { path: "/services",   priority: 0.8 },
    { path: "/contact",    priority: 0.8 },
    { path: "/roles",      priority: 0.7 },
    { path: "/apply",      priority: 0.7 },
    { path: "/newsletter", priority: 0.6 },
    { path: "/privacy",    priority: 0.3 },
    { path: "/terms",      priority: 0.3 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${base}${path || "/"}`,
    changeFrequency: "weekly" as const,
    priority,
  }));
}