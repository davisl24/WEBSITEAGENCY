import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteOrigin = (() => {
  if (!siteUrl) return undefined;
  try {
    const url = new URL(siteUrl);
    if (!["http:", "https:"].includes(url.protocol) || url.hostname === "localhost") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
})();

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: {
    default: "Mājaslapu izstrāde Latvijas uzņēmumiem | Kestrel",
    template: "%s",
  },
  description: "Veidojam skaidras un ātras mājaslapas Latvijas mazajiem uzņēmumiem.",
  openGraph: {
    type: "website",
    locale: "lv_LV",
    siteName: "Kestrel",
    title: "Mājaslapu izstrāde Latvijas uzņēmumiem | Kestrel",
    description: "Veidojam skaidras un ātras mājaslapas Latvijas mazajiem uzņēmumiem.",
  },
  twitter: { card: "summary", title: "Kestrel — mājaslapu izstrāde" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        const saved = localStorage.getItem("kestrel-theme");
        const mode = saved === "light" || saved === "dark" || saved === "system"
          ? saved
          : "system";
        const theme = mode === "system"
          ? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
          : mode;
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.themeMode = mode;
        document.documentElement.style.colorScheme = theme;
      } catch (_) {}
    })();
  `;

  return (
    <html lang="lv" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={manrope.variable}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
