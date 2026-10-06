import Image from "next/image";
import heroBg from "./assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import ValueShowcase from "./components/ValueShowcase";
import SmoothScroll from "./components/SmoothScroll";

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

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="process-inner">
          <div className="process-head">
            <p className="section-label">Process</p>
            <h2 id="process-title">No idejas līdz live</h2>
            <p className="process-intro">
              Process ir vienkāršs — vispirms saprotam, ko lapai jāpanāk, tikai tad ķeramies pie dizaina un izstrādes
            </p>
          </div>

          <div className="process-flow">
            <div className="process-rail" aria-hidden="true">
              <span />
            </div>

            <div className="process-steps">
              <article className="process-step">
                <div className="process-stage">Saprast mērķi</div>
                <p>Ko pārdodam, kam un kādu darbību vēlamies no apmeklētāja</p>
              </article>

              <article className="process-step">
                <div className="process-stage">Salikt saturu</div>
                <p>Atlasām tikai to informāciju, kas palīdz klientam saprast un pieņemt lēmumu</p>
              </article>

              <article className="process-step">
                <div className="process-stage">Uztaisīt un pārbaudīt</div>
                <p>Uzbūvējam, pārbaudām desktop un mobile, un salabojam tikai reālas problēmas</p>
              </article>

              <article className="process-step">
                <div className="process-stage">Palaist un uzturēt</div>
                <p>Palaižam lapu dzīvē un pēc tam uzturam to vienkāršu, ātru un aktuālu</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
