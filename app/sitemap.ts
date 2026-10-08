import type { MetadataRoute } from "next";
import { localizedRoutes } from "./lib/localizedSeo";

export default function sitemap(): MetadataRoute.Sitemap {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return [];
  let origin: string;
  try {
    const url = new URL(configured);
    if (!["https:", "http:"].includes(url.protocol) || url.hostname === "localhost") return [];
    origin = url.origin;
  } catch { return []; }

  // Index only the editorial pages; booking is currently just a preview.
  const keys = ["home", "about", "landing", "company", "upgrade"] as const;
  return keys.flatMap((key) =>
    (["lv", "en", "ru"] as const).map((lang) => ({
      url: new URL(localizedRoutes[key][lang], origin).toString(),
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : 0.7,
    }))
  );
}
