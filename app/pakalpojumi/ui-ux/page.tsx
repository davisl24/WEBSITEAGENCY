import type { Metadata } from "next";

export const metadata: Metadata = { title: "UI/UX dizains | Kestrel", description: "Sakārtojam mājaslapas informāciju un lietošanas ceļu, lai apmeklētājs varētu vieglāk atrast vajadzīgo." };

export default function ServicePage() {
  return (
    <main className="ks-detail-page"><div className="ks-detail-inner">
      <header className="ks-detail-header"><a className="ks-detail-brand" href="/">Kestrel</a><a className="ks-detail-back" href="/#services">← Visi pakalpojumi</a></header>
      <section className="ks-detail-hero"><p className="ks-detail-eyebrow">PAKALPOJUMI</p><h1>UI/UX dizains</h1><p>Sakārtojam mājaslapas informāciju un lietošanas ceļu, lai apmeklētājs varētu vieglāk atrast vajadzīgo.</p></section>
      <section className="ks-detail-section"><h2>Ko piedāvājam?</h2><div className="ks-detail-list">
        <div><h3>Dizaina audits</h3><p>Pārbaudām lapas skaidrību, hierarhiju un galvenās darbības.</p></div>
        <div><h3>Informācijas struktūra</h3><p>Sakārtojam sadaļas pēc apmeklētāja vajadzībām.</p></div>
        <div><h3>Saskarnes dizains</h3><p>Izstrādājam lapas un komponentu vizuālo risinājumu.</p></div>
      </div></section>
      <section className="ks-detail-section"><h2>Pastāsti par savu projektu.</h2><p>Noskaidrosim, kāds risinājums nepieciešams, un pirms darba vienosimies par apjomu un cenu.</p><a className="ks-detail-link" href="/kontakti">Sazināties ↗</a></section>
    </div></main>
  );
}
