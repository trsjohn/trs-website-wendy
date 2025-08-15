import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trs.example"; // update on deploy
  const routes = ["", "/apply", "/services", "/about", "/contact", "/privacy", "/terms"];
  return routes.map(p => ({ url: `${base}${p || "/"}`, changeFrequency: "weekly", priority: p === "" ? 1 : 0.6 }));
}


