import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mājaslapu izstrāde Latvijas uzņēmumiem",
  description:
    "Veidojam modernas un ātras mājaslapas Latvijas mazajiem uzņēmumiem — no idejas līdz gatavai lapai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  );
}
