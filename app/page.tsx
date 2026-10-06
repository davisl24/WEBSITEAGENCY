export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="site-header" aria-label="Galvenā navigācija">
          <a className="brand" href="/" aria-label="Sākumlapa">
            Kestrel
          </a>

          <a className="header-cta" href="#contact">
            Sazināties
          </a>
        </header>

        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Mājaslapas, kas pārvērš apmeklētājus par klientiem.</h1>

            <p className="hero-description">
              Veidojam modernas un ātras mājaslapas Latvijas mazajiem uzņēmumiem —
              no idejas līdz gatavai lapai.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Saņemt bezmaksas ideju
              </a>

              <a className="button button-secondary" href="#work">
                Apskatīt, ko veidojam
              </a>
            </div>
          </div>

          <div className="preview-frame" id="work" aria-label="Demo mājaslapas priekšskatījums">
            <div className="preview-browserbar">
              <div className="preview-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-url">formafizio.lv</div>
            </div>

            <div className="demo-site">
              <header className="demo-nav">
                <div className="demo-logo">FORMA</div>
                <nav className="demo-nav-links" aria-label="Demo navigācija">
                  <span>Pakalpojumi</span>
                  <span>Par mums</span>
                  <span>Kontakti</span>
                </nav>
                <button className="demo-nav-cta" type="button">
                  Pieteikt vizīti
                </button>
              </header>

              <div className="demo-hero">
                <div className="demo-copy">
                  <p className="demo-kicker">FIZIOTERAPIJA RĪGĀ</p>
                  <h2>Kusties brīvāk. Dzīvo bez sāpēm.</h2>
                  <p className="demo-description">
                    Individuāla fizioterapija, kas palīdz atgriezties pie kustībām,
                    kuras tev ir svarīgas.
                  </p>
                  <div className="demo-actions">
                    <button className="demo-primary" type="button">
                      Pieteikt vizīti
                    </button>
                    <button className="demo-secondary" type="button">
                      Skatīt pakalpojumus
                    </button>
                  </div>
                </div>

                <div className="demo-visual" aria-hidden="true">
                  <div className="demo-photo-shape demo-photo-main" />
                  <div className="demo-photo-shape demo-photo-small" />
                  <div className="demo-info-card">
                    <span className="demo-info-label">Pieņemšana</span>
                    <strong>P.–Pk. 08:00–19:00</strong>
                  </div>
                </div>
              </div>

              <div className="demo-services" aria-hidden="true">
                <div>
                  <span>01</span>
                  <strong>Fizioterapija</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Sporta rehabilitācija</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Ārstnieciskā vingrošana</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
