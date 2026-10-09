import type { Metadata } from "next";

export const metadata: Metadata = { title: "Web izstrāde | Kestrel", description: "Izstrādājam mājaslapas uzņēmumiem — no vienas lapas līdz plašākai vietnei." };

export default function ServicePage() {
  return (
    <main className="ks-detail-page"><div className="ks-detail-inner">
      <header className="ks-detail-header"><a className="ks-detail-brand" href="/">Kestrel</a><a className="ks-detail-back" href="/#services">← Visi pakalpojumi</a></header>
      <section className="ks-detail-hero"><p className="ks-detail-eyebrow">PAKALPOJUMI</p><h1>Web izstrāde</h1><p>Izstrādājam mājaslapas uzņēmumiem — no vienas lapas līdz plašākai vietnei.</p></section>
      <section className="ks-detail-section"><h2>Ko piedāvājam?</h2><div className="ks-detail-list">
        <a href="/pakalpojumi/landing-lapa"><h3>Landing lapa ↗</h3><p>Vienam piedāvājumam vai pakalpojumam. Sākuma cena no 200 €.</p></a>
        <a href="/pakalpojumi/uznemuma-majaslapa"><h3>Uzņēmuma mājaslapa ↗</h3><p>Vairākas lapas uzņēmuma pakalpojumiem un informācijai. No 450 €.</p></a>
        <a href="/pakalpojumi/majaslapas-uzlabosana"><h3>Mājaslapas uzlabošana ↗</h3><p>Esošās lapas struktūras, dizaina vai lietojamības uzlabošana.</p></a>
      </div></section>
      <section className="ks-detail-section"><h2>Pastāsti par savu projektu.</h2><p>Noskaidrosim, kāds risinājums nepieciešams, un pirms darba vienosimies par apjomu un cenu.</p><a className="ks-detail-link" href="/kontakti">Sazināties ↗</a></section>
    </div></main>
  );
}
