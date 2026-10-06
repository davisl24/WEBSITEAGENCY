export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="site-header" aria-label="Galvenā navigācija">
          <a className="brand" href="/" aria-label="Sākumlapa">
            Kestrel
          </a>

          <nav className="site-nav" aria-label="Galvenā navigācija">
            <a href="#work">Darbi</a>
            <a href="#process">Process</a>
            <a className="header-cta" href="#contact">
              Sazināties
            </a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-label">Mājaslapu izstrāde mazajiem uzņēmumiem</p>

            <h1>Mājaslapas, kas strādā</h1>

            <p className="hero-description">
              Veidojam skaidras un ātras mājaslapas, kas palīdz klientiem saprast
              piedāvājumu un pieteikties bez liekas meklēšanas.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Saņemt bezmaksas ideju
              </a>

              <a className="text-link" href="#work">
                Apskatīt, ko veidojam <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="showcase-slot" id="work" aria-label="Projektu showcase zona">
            <div className="showcase-index">01</div>
            <div className="showcase-caption">
              <span>Darbu piemērs</span>
              <strong>Vizuāli pievienosim vēlāk</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
