import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="lv">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
