export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="site-header" aria-label="Galvenā navigācija">
          <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
          <nav className="site-nav" aria-label="Galvenā navigācija">
            <a href="#work">Darbi</a>
            <a href="#process">Process</a>
            <a className="header-cta" href="#contact">Sazināties</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Mājaslapas, kas pārvērš apmeklētājus par klientiem.</h1>
            <p className="hero-description">
              Veidojam modernas un ātras mājaslapas Latvijas mazajiem uzņēmumiem —
              no idejas līdz gatavai lapai.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Saņemt bezmaksas ideju</a>
              <a className="text-link" href="#work">Apskatīt, ko veidojam <span aria-hidden="true">↘</span></a>
            </div>
          </div>

          <div className="project-composition" id="work" aria-label="Demo mājaslapas priekšskatījums">
            <div className="desktop-preview">
              <div className="preview-browserbar">
                <div className="preview-dots" aria-hidden="true"><span /><span /><span /></div>
                <div className="preview-url">formafizio.lv</div>
              </div>

              <div className="demo-site">
                <header className="demo-nav">
                  <div className="demo-logo">FORMA</div>
                  <nav className="demo-nav-links" aria-label="Demo navigācija">
                    <span>Pakalpojumi</span><span>Par mums</span><span>Kontakti</span>
                  </nav>
                  <button className="demo-nav-cta" type="button">Pieteikt vizīti</button>
                </header>

                <div className="demo-hero">
                  <div className="demo-copy">
                    <p className="demo-kicker">FIZIOTERAPIJA RĪGĀ</p>
                    <h2>Kusties brīvāk. Dzīvo bez sāpēm.</h2>
                    <p className="demo-description">
                      Individuāla fizioterapija, kas palīdz atgriezties pie kustībām,
                      kuras tev ir svarīgas.
                    </p>
                    <button className="demo-primary" type="button">Pieteikt vizīti</button>
                  </div>

                  <div className="demo-visual" aria-hidden="true">
                    <div className="demo-photo-main" />
                    <div className="demo-info-card">
                      <span>Pieņemšana</span>
                      <strong>P.–Pk. 08:00–19:00</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-preview" aria-hidden="true">
              <div className="mobile-notch" />
              <div className="mobile-screen">
                <div className="mobile-logo">FORMA</div>
                <div className="mobile-kicker">FIZIOTERAPIJA RĪGĀ</div>
                <div className="mobile-title">Kusties brīvāk.</div>
                <div className="mobile-copy">Individuāla fizioterapija tavām kustībām.</div>
                <div className="mobile-cta">Pieteikt vizīti</div>
                <div className="mobile-visual" />
              </div>
            </div>

            <div className="project-meta">
              <span>Demo projekts</span>
              <strong>Fizioterapijas mājaslapa</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
