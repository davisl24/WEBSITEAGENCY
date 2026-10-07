import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mājaslapu izstrāde Latvijas uzņēmumiem",
  description:
    "Veidojam skaidras un ātras mājaslapas Latvijas mazajiem uzņēmumiem.",
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
        const theme = saved === "light" || saved === "dark"
          ? saved
          : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        document.documentElement.dataset.theme = theme;
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
        <SmoothScroll />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
