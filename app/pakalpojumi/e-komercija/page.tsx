import KestrelHeader from "../../components/KestrelHeader";
import KestrelFooter from "../../components/KestrelFooter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "E-komercija | Kestrel", description: "Izvērtējam interneta veikala vajadzības un sagatavojam piedāvājumu atbilstoši nepieciešamajām funkcijām." };

export default function ServicePage() {
  return (
    <main className="ks-detail-page"><div className="ks-detail-inner">
      <KestrelHeader />\n      <nav className="ks-detail-breadcrumb" aria-label="Lapas atrašanās vieta"><a href="/">Sākums</a><span> / </span><a href="/#services">Pakalpojumi</a><span> / </span><span aria-current="page">E-komercija</span></nav>
      <section className="ks-detail-hero"><p className="ks-detail-eyebrow">PAKALPOJUMI</p><h1>E-komercija</h1><p>Izvērtējam interneta veikala vajadzības un sagatavojam piedāvājumu atbilstoši nepieciešamajām funkcijām.</p></section>
      <section className="ks-detail-section"><h2>Ko piedāvājam?</h2><div className="ks-detail-list">
        <div><h3>Produktu katalogs</h3><p>Produktu attēlošana ar kategorijām un aprakstiem.</p></div>
        <div><h3>Pasūtījumi un maksājumi</h3><p>Iepirkumu grozs, norēķini un pasūtījumu apstrāde atbilstoši izvēlētajai platformai.</p></div>
        <div><h3>Piegādes iespējas</h3><p>Piegādes veidu un nepieciešamo integrāciju izvērtēšana.</p></div>
      </div></section>
      <section className="ks-detail-section"><h2>Pastāsti par savu projektu.</h2><p>Noskaidrosim, kāds risinājums nepieciešams, un pirms darba vienosimies par apjomu un cenu.</p><a className="ks-detail-link" href="/kontakti">Sazināties ↗</a></section>
    </div><KestrelFooter /></main>
  );
}
