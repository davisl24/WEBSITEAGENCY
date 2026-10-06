import Image from "next/image";
import heroBg from "./assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
