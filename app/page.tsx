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
                  <span className="work-index">01</span>
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
                  <span className="work-index">02</span>
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

          <div className="services-list">
            <article className="service-row">
              <div className="service-main">
                <h3>Landing lapa</h3>
                <p>Vienam piedāvājumam un vienam skaidram klienta solim</p>
              </div>
              <div className="service-meta">
                <span>1 lapa</span>
                <span>Pieteikuma forma</span>
                <span>Mobilā versija</span>
              </div>
            </article>

            <article className="service-row">
              <div className="service-main">
                <h3>Uzņēmuma mājaslapa</h3>
                <p>Pakalpojumiem, uzticībai un ērtam ceļam līdz kontaktam</p>
              </div>
              <div className="service-meta">
                <span>Vairākas sadaļas</span>
                <span>SEO pamati</span>
                <span>Kontaktu plūsma</span>
              </div>
            </article>

            <article className="service-row">
              <div className="service-main">
                <h3>Funkcijas un integrācijas</h3>
                <p>Kad ar informatīvu lapu vien nepietiek</p>
              </div>
              <div className="service-meta">
                <span>Booking</span>
                <span>Ārējās sistēmas</span>
                <span>Pielāgota loģika</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
