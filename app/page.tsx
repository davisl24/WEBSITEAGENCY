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
            <h2 id="services-title">Izvēlies sev piemērotāko</h2>
            <p className="services-intro">
              Vai vajag vienu lapu, pilnu uzņēmuma mājaslapu vai uzlabot esošo? Izvēlies savu situāciju
            </p>
          </div>

          <div className="services-grid">
            <a href="/pakalpojumi/landing-lapa" className="service-card">
              <div className="service-visual service-visual-landing">
                <div className="service-story service-story-landing" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-landing-body">
                    <span className="story-eyebrow"/>
                    <span className="story-landing-title"/>
                    <span className="story-landing-subtitle"/>
                    <span className="story-landing-cta"/>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Ja jāizceļ viens piedāvājums</p>
                <h3>Landing lapa</h3>
                <p>Viena lapa konkrētam pakalpojumam, produktam vai kampaņai</p>

                <span className="service-link" aria-hidden="true">Apskatīt pakalpojumu <span>→</span></span>
              </div>
            </a>

            <a href="/pakalpojumi/uznemuma-majaslapa" className="service-card service-card-featured">
              <div className="service-visual service-visual-website">
                <div className="service-story service-story-company" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-company-nav"><span/><span/><span/><span/></div>
                  <div className="story-company-hero">
                    <div className="story-company-copy"><span/><span/><span/></div>
                    <div className="story-company-image"/>
                  </div>
                  <div className="story-company-pages"><span/><span/><span/></div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Ja uzņēmumam vajag vairākas lapas</p>
                <h3>Uzņēmuma mājaslapa</h3>
                <p>Vairākas lapas, kur vienuviet parādīt pakalpojumus un informāciju par uzņēmumu</p>

                <span className="service-link" aria-hidden="true">Apskatīt pakalpojumu <span>→</span></span>
              </div>
            </a>

            <a href="/pakalpojumi/majaslapas-uzlabosana" className="service-card">
              <div className="service-visual service-visual-upgrade">
                <div className="story-upgrade" aria-hidden="true">
                  <div className="story-upgrade-before">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-before-body"><span/><span/><span/><span/></div>
                  </div>
                  <span className="story-upgrade-arrow">→</span>
                  <div className="story-upgrade-after">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-after-body">
                      <span className="story-after-eyebrow"/>
                      <span className="story-after-title"/>
                      <span className="story-after-copy"/>
                      <span className="story-after-button"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Ja mājaslapa jau ir</p>
                <h3>Mājaslapas uzlabošana</h3>
                <p>Uzlabojam esošās mājaslapas dizainu, struktūru un lietošanas ērtumu</p>

                <span className="service-link" aria-hidden="true">Apskatīt pakalpojumu <span>→</span></span>
              </div>
            </a>
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
