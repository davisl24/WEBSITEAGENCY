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
            <h2 id="services-title">Pakalpojumi</h2>
          </div>
          <div className="kestrel-services-v2">
            <a className="ks-main ks-category" href="/pakalpojumi/web-izstrade">
              <span className="ks-icon" aria-hidden="true">⌘</span>
              <h3>Web izstrāde <span className="ks-arrow" aria-hidden="true">↗</span></h3>
              <p>Landing lapas · Uzņēmuma mājaslapas · Mājaslapu uzlabošana</p>
              <div className="ks-offers" aria-label="Sākuma cenas"><span>Landing no 200 €</span><span>Uzņēmuma mājaslapa no 450 €</span></div>
            </a>
            <div className="ks-other-grid">
              <a className="ks-item ks-category" href="/pakalpojumi/e-komercija"><span className="ks-icon" aria-hidden="true">▦</span><h3>E-komercija <span className="ks-arrow" aria-hidden="true">↗</span></h3><p>Interneta veikali · Maksājumi · Piegāde</p></a>
              <a className="ks-item ks-category" href="/pakalpojumi/seo"><span className="ks-icon" aria-hidden="true">⌕</span><h3>SEO <span className="ks-arrow" aria-hidden="true">↗</span></h3><p>Tehniskais SEO · Satura optimizācija · Audits</p></a>
              <a className="ks-item ks-category" href="/pakalpojumi/ui-ux"><span className="ks-icon" aria-hidden="true">◫</span><h3>UI/UX dizains <span className="ks-arrow" aria-hidden="true">↗</span></h3><p>Dizaina audits · Struktūra · Saskarnes</p></a>
              <a className="ks-item ks-category" href="/pakalpojumi/hostings"><span className="ks-icon" aria-hidden="true">▤</span><h3>Hostings un uzturēšana <span className="ks-arrow" aria-hidden="true">↗</span></h3><p>Izvietošana · Uzraudzība · Atjauninājumi</p></a>
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
