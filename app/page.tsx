import { lvMetadataAlternates } from "./lib/localizedSeo";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Image from "next/image";
import heroBg from "./assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "./assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "./components/ValueShowcase";
import ProcessFlow from "./components/ProcessFlow";
import RevealOnView from "./components/RevealOnView";
import ThemeToggle from "./components/ThemeToggle";
import ServicesDropdown from "./components/ServicesDropdown";

export const metadata = {
  title: "Mājaslapu izstrāde Latvijas uzņēmumiem | Kestrel",
  description: "Veidojam skaidras un ātras mājaslapas Latvijas mazajiem uzņēmumiem.",
  alternates: lvMetadataAlternates("home"),
};

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroBg} alt="" fill priority className="hero-media-image hero-media-image-dark" />
          <Image src={heroBgLight} alt="" fill priority className="hero-media-image hero-media-image-light" />
          <div className="hero-media-overlay" />
        </div>

        <header className="site-header" aria-label="Galvenā navigācija">
          <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
          <nav className="site-nav" aria-label="Galvenā navigācija">
            <ServicesDropdown />
            <a href="/par-mums">Par mums</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/kontakti">Pieteikt sarunu</a>
          </nav>
        </header>

        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-label">Mājaslapu izstrāde mazajiem uzņēmumiem</p>
            <h1>Mājaslapas, kas palīdz pārdot</h1>
            <p className="hero-description">
              Veidojam skaidras un ātras mājaslapas mazajiem uzņēmumiem, lai klienti
              ātrāk saprastu piedāvājumu un pieteiktos
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/kontakti">Pieteikt sarunu</a>
              <a className="text-link" href="#services">Skatīt pakalpojumus <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <p className="section-label">Pakalpojumi</p>
            <h2 id="services-title">Mājaslapu izstrāde un vairāk</h2>
            <p className="services-intro">Izstrādājam mājaslapas un palīdzam tās uzlabot, atrast un uzturēt.</p>
          </div>
          <div className="kestrel-services-v2">
            <div className="ks-main">
              <div className="ks-heading"><span className="ks-icon" aria-hidden="true">⌘</span><span className="ks-overline">GALVENAIS PAKALPOJUMS</span></div>
              <h3>Web izstrāde</h3>
              <p>Izstrādājam mājaslapas, kurās uzņēmuma piedāvājums ir saprotams un saziņa — vienkārša.</p>
              <div className="ks-offers">
                <a href="/pakalpojumi/landing-lapa"><span>Landing lapas</span><strong>no 200 €</strong><span aria-hidden="true">↗</span></a>
                <a href="/pakalpojumi/uznemuma-majaslapa"><span>Uzņēmuma mājaslapas</span><strong>no 450 €</strong><span aria-hidden="true">↗</span></a>
                <a href="/pakalpojumi/majaslapas-uzlabosana"><span>Esošo mājaslapu uzlabošana</span><strong>Pēc apjoma</strong><span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="ks-other-grid">
              <article className="ks-item"><span className="ks-icon" aria-hidden="true">▦</span><h3>E-komercija</h3><p>Interneta veikalu risinājumi.</p><ul><li>Produktu katalogi</li><li>Iepirkumu grozs</li><li>Maksājumu integrācijas</li></ul></article>
              <article className="ks-item"><span className="ks-icon" aria-hidden="true">⌕</span><h3>SEO</h3><p>Mājaslapas optimizācija meklētājiem.</p><ul><li>Tehniskais SEO</li><li>Satura optimizācija</li><li>SEO audits</li></ul></article>
              <article className="ks-item"><span className="ks-icon" aria-hidden="true">◫</span><h3>UI/UX dizains</h3><p>Skaidrāka struktūra un ērtāka lietošana.</p><ul><li>Dizaina audits</li><li>Lietotāja ceļš</li><li>Saskarņu dizains</li></ul></article>
              <article className="ks-item"><span className="ks-icon" aria-hidden="true">▤</span><h3>Hostings un uzturēšana</h3><p>Tehniskā darbība pēc publicēšanas.</p><ul><li>Mājaslapas izvietošana</li><li>Tehniskā uzraudzība</li><li>Saskaņoti atjauninājumi</li></ul></article>
            </div>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ProcessFlow />

      <section className="call-section" aria-labelledby="call-title">
        <div className="call-inner">
          <div className="call-kicker">Īsa saruna bez saistībām</div>
          <div className="call-content">
            <div>
              <h2 id="call-title">Parunājam par tavu lapu</h2>
              <p>15 minūtes, lai saprastu, ko uzņēmumam reāli vajag un vai varam palīdzēt</p>
            </div>
            <a className="call-cta" href="/kontakti">
              <span className="call-dot" aria-hidden="true" />
              <span>Pieteikt sarunu</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
          <div className="footer-wordmark-block">
            <a href="/" className="footer-wordmark">Kestrel</a>
            <p className="footer-statement">Veidojam mājaslapas ar skaidru mērķi un pārdomātu dizainu<br/>Palīdzam mazajiem uzņēmumiem parādīt savu piedāvājumu un atvieglot klienta ceļu</p>
          </div>
            <div className="footer-links">
              <div>
                <span>Navigācija</span>
                <a href="#services">Pakalpojumi</a>
                <a href="#process">Process</a>
                <a href="/par-mums">Par mums</a>
                <a href="/kontakti">Kontakti</a>
              </div>
              <div>
                <span>Saziņa</span>
                <a className="footer-contact-link" href="/kontakti">Pieteikt sarunu <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Kestrel</span>

          </div>
        </div>
      </footer>
    </main>
  );
}
