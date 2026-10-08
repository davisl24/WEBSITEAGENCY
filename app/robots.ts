import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  let origin: string | null = null;
  if (site) {
    try {
      const url = new URL(site);
      if (["https:", "http:"].includes(url.protocol) && url.hostname !== "localhost") {
        origin = url.origin;
      }
    } catch {
      origin = null;
    }
  }
  if (!origin) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: new URL("/sitemap.xml", origin).toString(),
  };
}
