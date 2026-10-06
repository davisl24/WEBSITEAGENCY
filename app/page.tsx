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

          <div className="preview-frame" id="work" aria-label="Darba piemēra vieta">
            <div className="preview-topline" />
            <div className="preview-canvas">
              <div className="preview-hero-block" />
              <div className="preview-grid">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
