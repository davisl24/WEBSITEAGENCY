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
              <a className="button button-primary" href="#contact">Pieteikt sarunu</a>
              <a className="text-link" href="#services">Skatīt pakalpojumus <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <p className="section-label">Pakalpojumi</p>
            <h2 id="services-title">Ko vari saņemt</h2>
            <p className="services-intro">
              Izvēlamies tik lielu risinājumu, cik uzņēmumam patiešām vajag
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

                <div className="service-tags">
                  <span>1 lapa</span>
                  <span>Pieteikuma forma</span>
                  <span>Mobilā versija</span>
                </div>

                <a href="/pakalpojumi/landing-lapa" className="service-link">Apskatīt risinājumu <span aria-hidden="true">→</span></a>
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

                <div className="service-tags">
                  <span>Vairākas sadaļas</span>
                  <span>SEO pamati</span>
                  <span>Kontaktu plūsma</span>
                </div>

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

                <div className="service-tags">
                  <span>Redesign</span>
                  <span>Mobile</span>
                  <span>UX / ātrums</span>
                </div>

                <a href="/pakalpojumi/majaslapas-uzlabosana" className="service-link">Uzlabot esošo lapu <span aria-hidden="true">→</span></a>
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
            <h2 id="home-about-title">Mājaslapas ar domu</h2>
            <p>
              Skaidrība pirms efektiem. Veidojam tikai to, kas palīdz cilvēkam
              saprast piedāvājumu un nonākt līdz nākamajam solim.
            </p>
          </RevealOnView>

          <RevealOnView className="home-about-action" delay={120}>
            <a className="text-link" href="/par-mums">
              Kā mēs domājam <span aria-hidden="true">→</span>
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
            <a className="call-cta" href="#contact">
              <span className="call-dot" aria-hidden="true" />
              <span>Rezervēt bezmaksas zvanu</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="section-label">Sazināties</p>
            <h2 id="contact-title">Pastāsti īsumā</h2>
            <p>
              Ja vēl negribi rezervēt zvanu, atsūti īsu aprakstu — atbildēsim ar konkrētu nākamo soli
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-card-top">
              <span>Bezmaksas ideja</span>
              <span>Bez saistībām</span>
            </div>

            <div className="contact-fields">
              <label>
                <span>Vārds</span>
                <input type="text" name="name" placeholder="Tavs vārds" />
              </label>

              <label>
                <span>E-pasts vai tālrunis</span>
                <input type="text" name="contact" placeholder="Kā ar tevi sazināties" />
              </label>

              <label className="contact-field-wide">
                <span>Par ko ir projekts</span>
                <textarea name="message" rows={4} placeholder="Īsi par uzņēmumu un ko vēlies uzlabot" />
              </label>
            </div>

            <div className="contact-actions">
              <p>Atbildēsim ar konkrētu ideju, nevis gatavu pārdošanas tekstu</p>
              <button type="button" className="button button-primary">Saņemt bezmaksas ideju</button>
            </div>
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
                <a href="#work">Darbi</a>
                <a href="#services">Pakalpojumi</a>
                <a href="#process">Process</a>
                <a href="/par-mums">Par mums</a>
                <a href="/kontakti">Sazināties</a>
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
