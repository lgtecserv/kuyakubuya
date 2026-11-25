import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/motorista",
    "/cidades",
    "/parceiros",
    "/empresa",
    "/suporte",
    "/privacidade",
    "/permissoes",
    "/termos",
    "/eliminar-conta",
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route}`,
    lastModified: new Date("2026-11-25"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacidade" ? 0.9 : 0.7,
  }));
}
