import Image from "next/image";
import heroBg from "./assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "./assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "./components/ValueShowcase";
import ProcessFlow from "./components/ProcessFlow";
import RevealOnView from "./components/RevealOnView";
import ThemeToggle from "./components/ThemeToggle";
import ServicesDropdown from "./components/ServicesDropdown";

export default function Home() {
  return (
    <main>
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
              Trīs skaidri veidi, kā palīdzēt tava uzņēmuma mājaslapai.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-visual service-visual-landing">
                <div className="ui-browser">
                  <div className="ui-browser-top"><span/><span/><span/></div>
                  <div className="ui-browser-body">
                    <div className="ui-copy-short"/>
                    <div className="ui-copy-long"/>
                    <div className="ui-button"/>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Vienam piedāvājumam</p>
                <h3>Landing lapa</h3>
                <p>Vienam piedāvājumam un vienam skaidram klienta solim</p>

                <a href="/pakalpojumi/landing-lapa" className="service-link">Apskatīt pakalpojumu <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="service-card service-card-featured">
              <div className="service-visual service-visual-website">
                <div className="ui-browser ui-browser-wide">
                  <div className="ui-browser-top"><span/><span/><span/></div>
                  <div className="ui-browser-body ui-site-body">
                    <div className="ui-nav-line"/>
                    <div className="ui-layout">
                      <div className="ui-layout-copy">
                        <div className="ui-copy-short"/>
                        <div className="ui-copy-long"/>
                        <div className="ui-copy-medium"/>
                      </div>
                      <div className="ui-layout-art"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Galvenais risinājums</p>
                <h3>Uzņēmuma mājaslapa</h3>
                <p>Pakalpojumiem, uzticībai un ērtam ceļam līdz kontaktam</p>

                <a href="/pakalpojumi/uznemuma-majaslapa" className="service-link">Apskatīt risinājumu <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="service-card">
              <div className="service-visual service-visual-upgrade">
                <div className="upgrade-preview" aria-hidden="true">
                  <div className="upgrade-browser upgrade-before">
                    <div className="ui-browser-top"><span/><span/><span/></div>
                    <div className="upgrade-lines">
                      <span/><span/><span/>
                    </div>
                  </div>
                  <div className="upgrade-browser upgrade-after">
                    <div className="ui-browser-top"><span/><span/><span/></div>
                    <div className="upgrade-after-body">
                      <span className="upgrade-kicker"/>
                      <span className="upgrade-title"/>
                      <span className="upgrade-copy"/>
                      <span className="upgrade-button"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Esošai mājaslapai</p>
                <h3>Mājaslapas uzlabošana</h3>
                <p>Skaidrāka struktūra, modernāks dizains un labāks klienta ceļš esošai lapai</p>

                <a href="/pakalpojumi/majaslapas-uzlabosana" className="service-link">Apskatīt pakalpojumu <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ProcessFlow />

      <section className="home-about-section" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <RevealOnView className="home-about-copy">
            <p className="section-label">Par Kestrel</p>
            <h2 id="home-about-title">Iepazīsti Kestrel</h2>
            <p>
              Aiz katras mājaslapas ir cilvēki, kuri uzklausa, palīdz sakārtot idejas
              un kopā ar tevi pieņem skaidrus lēmumus.
            </p>
          </RevealOnView>

          <RevealOnView className="home-about-action" delay={120}>
            <a className="text-link" href="/par-mums">
              Vairāk par mums <span aria-hidden="true">→</span>
            </a>
          </RevealOnView>
        </div>
      </section>

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
            <div className="footer-brand">
              <a href="/" className="footer-logo">Kestrel</a>
              <p>Mājaslapas mazajiem uzņēmumiem ar skaidru mērķi un vienkāršu klienta ceļu</p>
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
                <span>Kontakti</span>
                <a href="/kontakti">Pieteikt projektu</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>Kestrel</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
