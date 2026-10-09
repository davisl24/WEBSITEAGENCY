import KestrelHeader from "../../components/KestrelHeader";
import KestrelFooter from "../../components/KestrelFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mājaslapu izstrāde uzņēmumiem | Kestrel",
  description: "Landing lapas no 200 € un uzņēmuma mājaslapas no 450 €. Iepazīsties ar risinājumiem un izstrādes procesu.",
};

const included = [
  ["Struktūra", "Sakārtojam saturu un sadaļu secību."],
  ["Dizains", "Pielāgojam noformējumu uzņēmumam."],
  ["Mobilā versija", "Lapa darbojas datorā un telefonā."],
  ["SEO pamati", "Sakārtojam virsrakstus un metadatus."],
  ["Saziņa", "Pievienojam saskaņotu kontaktēšanās iespēju."],
  ["Publicēšana", "Pārbaudām un palaižam mājaslapu."],
];
const stages = [
  ["01", "Izrunājam"],
  ["02", "Saskaņojam"],
  ["03", "Izstrādājam"],
  ["04", "Publicējam"],
];
const faq = [
  ["Cik ilgā laikā būs gatava mājaslapa?", "Termiņu nosakām pēc apjoma un saskaņojam pirms darba sākšanas."],
  ["Vai man jāsagatavo teksti un attēli?", "Vari iesniegt esošos materiālus. Tos sakārtojam; pilna satura izstrāde tiek vērtēta atsevišķi."],
  ["Vai domēns un hostings ir iekļauti?", "Nē, domēnu un hostingu saskaņojam atsevišķi."],
];

export default function WebDevelopmentPage() {
  return (
    <main className="ks-detail-page ks-web-page">
      <div className="ks-detail-inner">
        <KestrelHeader />
        <nav className="ks-detail-breadcrumb" aria-label="Lapas atrašanās vieta">
          <a href="/">Sākums</a><span>/</span><a href="/#services">Pakalpojumi</a><span>/</span><span aria-current="page">Web izstrāde</span>
        </nav>
        <section className="ks-detail-hero"><h1>Mājaslapas tavam uzņēmumam</h1></section>
        <section className="ks-web-section" aria-labelledby="ks-products">
          <h2 id="ks-products">Izvēlies risinājumu</h2>
          <div className="ks-web-products">
            <a href="/pakalpojumi/landing-lapa"><div><h3>Landing lapa</h3><strong>no 200 €</strong></div><p>Vienam pakalpojumam vai konkrētam piedāvājumam.</p><span aria-hidden="true">↗</span></a>
            <a href="/pakalpojumi/uznemuma-majaslapa"><div><h3>Uzņēmuma mājaslapa</h3><strong>no 450 €</strong></div><p>Vairākiem pakalpojumiem un plašākai informācijai.</p><span aria-hidden="true">↗</span></a>
            <a href="/pakalpojumi/majaslapas-uzlabosana"><div><h3>Mājaslapas uzlabošana</h3><strong>Pēc apjoma</strong></div><p>Esošās mājaslapas struktūras, dizaina vai lietošanas uzlabojumi.</p><span aria-hidden="true">↗</span></a>
          </div>
          <p className="ks-web-note">Gala cena atkarīga no apjoma un funkcijām. Par cenu un termiņu vienojamies pirms darba.</p>
        </section>
        <section className="ks-web-section" aria-labelledby="ks-included">
          <h2 id="ks-included">Kas iekļauts?</h2>
          <div className="ks-web-included">{included.map(([name,description]) => <div key={name}><h3>{name}</h3><p>{description}</p></div>)}</div>
        </section>
        <section className="ks-web-section" aria-labelledby="ks-process">
          <h2 id="ks-process">Kā strādājam?</h2>
          <div className="ks-web-steps">{stages.map(([number,name])=><div key={number}><span>{number}</span><h3>{name}</h3></div>)}</div>
        </section>
        <section className="ks-web-section ks-web-faq" aria-labelledby="ks-faq">
          <h2 id="ks-faq">Biežākie jautājumi</h2>
          <div>{faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>
        <section className="ks-web-contact">
          <h2>Pastāsti par savu projektu.</h2>
          <a className="ks-detail-link" href="/kontakti">Pieteikt projektu ↗</a>
        </section>
      </div>
      <KestrelFooter />
    </main>
  );
}
