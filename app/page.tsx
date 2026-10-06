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

        <div className="hero-copy">
          <p className="eyebrow">Mājaslapu izstrāde Latvijas uzņēmumiem</p>

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

        <div className="preview-shell" id="work" aria-label="Mājaslapas priekšskatījuma vieta">
          <div className="browser-bar">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="browser-label">projekta priekšskatījums</span>
          </div>

          <div className="preview-stage">
            <div className="preview-content">
              <p>Šeit ievietosim reālu mūsu darba mājaslapas priekšskatījumu.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
