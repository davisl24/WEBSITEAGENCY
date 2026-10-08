import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return [];
  let origin: string;
  try {
    const url = new URL(configured);
    if (!["https:", "http:"].includes(url.protocol) || url.hostname === "localhost") return [];
    origin = url.origin;
  } catch {
    return [];
  }

  const routes = [
    "/",
    "/par-mums",
    "/pakalpojumi/landing-lapa",
    "/pakalpojumi/uznemuma-majaslapa",
    "/pakalpojumi/majaslapas-uzlabosana",
  ];
  return routes.map((route) => ({
    url: new URL(route, origin).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
