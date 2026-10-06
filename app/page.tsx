import Image from "next/image";
import heroBg from "./assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import ValueShowcase from "./components/ValueShowcase";
import SmoothScroll from "./components/SmoothScroll";
import ProcessFlow from "./components/ProcessFlow";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroBg} alt="" fill priority className="hero-media-image" />
          <div className="hero-media-overlay" />
        </div>

        <header className="site-header" aria-label="Galvenā navigācija">
          <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
          <nav className="site-nav" aria-label="Galvenā navigācija">
            <a href="#work">Darbi</a>
            <a href="#process">Process</a>
            <a className="header-cta" href="#contact">Sazināties</a>
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
              <a className="button button-primary" href="#contact">Saņemt bezmaksas ideju</a>
              <a className="text-link" href="#work">Apskatīt, ko veidojam <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-inner">
          <div className="work-heading">
            <p className="section-label">Atlasīti projekti</p>
            <h2 id="work-title">Ko mēs veidojam</h2>
            <p className="section-intro">
              Veidojam mājaslapas, kas palīdz klientam ātri saprast piedāvājumu un rīkoties
            </p>
          </div>

          <div className="work-list">
            <article className="work-item">
              <div className="work-visual work-visual-one" aria-label="Pirmā projekta vizuāļa vieta">
                <span>Project visual 01</span>
              </div>
              <div className="work-meta">
                <div>
                  <h3>Demo projekts</h3>
                </div>
                <p>Pakalpojumu uzņēmuma mājaslapa</p>
              </div>
            </article>

            <article className="work-item work-item-offset">
              <div className="work-visual work-visual-two" aria-label="Otrā projekta vizuāļa vieta">
                <span>Project visual 02</span>
              </div>
              <div className="work-meta">
                <div>
                  <h3>Demo projekts</h3>
                </div>
                <p>Lokāla uzņēmuma mājaslapa</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ValueShowcase />

      <section className="services-section" aria-labelledby="services-title">
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

                <a href="#contact" className="service-link">Apskatīt risinājumu <span aria-hidden="true">→</span></a>
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

                <a href="#contact" className="service-link">Apskatīt risinājumu <span aria-hidden="true">→</span></a>
              </div>
            </article>

            <article className="service-card">
              <div className="service-visual service-visual-integrations">
                <div className="integration-canvas">
                  <div className="integration-node integration-node-main">Web</div>
                  <div className="integration-node integration-node-a">Booking</div>
                  <div className="integration-node integration-node-b">CRM</div>
                  <div className="integration-node integration-node-c">Form</div>
                  <span className="integration-line line-a"/>
                  <span className="integration-line line-b"/>
                  <span className="integration-line line-c"/>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Kad vajag vairāk</p>
                <h3>Funkcijas un integrācijas</h3>
                <p>Kad ar informatīvu lapu vien nepietiek</p>

                <div className="service-tags">
                  <span>Booking</span>
                  <span>Ārējās sistēmas</span>
                  <span>Pielāgota loģika</span>
                </div>

                <a href="#contact" className="service-link">Izrunāt vajadzību <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ProcessFlow />

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
            <h2 id="contact-title">Pastāsti par savu ideju</h2>
            <p>
              Īsi apraksti uzņēmumu un ko vēlies uzlabot — atbildēsim ar konkrētu nākamo soli
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
                <a href="#process">Process</a>
                <a href="#contact">Sazināties</a>
              </div>
              <div>
                <span>Kontakti</span>
                <a href="mailto:hello@kestrel.lv">hello@kestrel.lv</a>
                <a href="#contact">Pieteikt projektu</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Kestrel, SIA</span>
            <span>40203559349</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
