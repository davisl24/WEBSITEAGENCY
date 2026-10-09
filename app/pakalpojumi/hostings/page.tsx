import KestrelHeader from "../../components/KestrelHeader";
import KestrelFooter from "../../components/KestrelFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hostings un uzturēšana | Kestrel", description: "Pēc mājaslapas izstrādes varam izvērtēt izvietošanas un tehniskā atbalsta iespējas." };

export default function ServicePage() {
  return (
    <main className="ks-detail-page"><div className="ks-detail-inner">
      <KestrelHeader />\n      <nav className="ks-detail-breadcrumb" aria-label="Lapas atrašanās vieta"><a href="/">Sākums</a><span> / </span><a href="/#services">Pakalpojumi</a><span> / </span><span aria-current="page">Hostings un uzturēšana</span></nav>
      <section className="ks-detail-hero"><p className="ks-detail-eyebrow">PAKALPOJUMI</p><h1>Hostings un uzturēšana</h1><p>Pēc mājaslapas izstrādes varam izvērtēt izvietošanas un tehniskā atbalsta iespējas.</p></section>
      <section className="ks-detail-section"><h2>Ko piedāvājam?</h2><div className="ks-detail-list">
        <div><h3>Hostings</h3><p>Mājaslapas izvietošana izvēlētajā infrastruktūrā.</p></div>
        <div><h3>Tehniskā uzraudzība</h3><p>Saskaņotas darbības uzturēšanai un kļūdu novēršanai.</p></div>
        <div><h3>Atjauninājumi</h3><p>Nelieli satura un tehniskie labojumi pēc vienošanās.</p></div>
      </div></section>
      <section className="ks-detail-section"><h2>Pastāsti par savu projektu.</h2><p>Noskaidrosim, kāds risinājums nepieciešams, un pirms darba vienosimies par apjomu un cenu.</p><a className="ks-detail-link" href="/kontakti">Sazināties ↗</a></section>
    </div><KestrelFooter /></main>
  );
}
