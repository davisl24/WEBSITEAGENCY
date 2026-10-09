import KestrelHeader from "../../components/KestrelHeader";
import KestrelFooter from "../../components/KestrelFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "SEO | Kestrel", description: "Palīdzam sakārtot mājaslapas tehnisko pamatu un saturu, lai to būtu vieglāk atrast un saprast meklētājprogrammās." };

export default function ServicePage() {
  return (
    <main className="ks-detail-page"><div className="ks-detail-inner">
      <KestrelHeader />\n      <nav className="ks-detail-breadcrumb" aria-label="Lapas atrašanās vieta"><a href="/">Sākums</a><span> / </span><a href="/#services">Pakalpojumi</a><span> / </span><span aria-current="page">SEO</span></nav>
      <section className="ks-detail-hero"><p className="ks-detail-eyebrow">PAKALPOJUMI</p><h1>SEO</h1><p>Palīdzam sakārtot mājaslapas tehnisko pamatu un saturu, lai to būtu vieglāk atrast un saprast meklētājprogrammās.</p></section>
      <section className="ks-detail-section"><h2>Ko piedāvājam?</h2><div className="ks-detail-list">
        <div><h3>Tehniskais SEO</h3><p>Lapu nosaukumi, virsrakstu struktūra, indeksēšanas un ātrdarbības pamatproblēmas.</p></div>
        <div><h3>Satura optimizācija</h3><p>Skaidrāka pakalpojumu informācija un atbilstoša lapu struktūra.</p></div>
        <div><h3>SEO audits</h3><p>Esošās mājaslapas problēmu un iespējamo uzlabojumu izvērtēšana.</p></div>
      </div></section>
      <section className="ks-detail-section"><h2>Pastāsti par savu projektu.</h2><p>Noskaidrosim, kāds risinājums nepieciešams, un pirms darba vienosimies par apjomu un cenu.</p><a className="ks-detail-link" href="/kontakti">Sazināties ↗</a></section>
    </div><KestrelFooter /></main>
  );
}
