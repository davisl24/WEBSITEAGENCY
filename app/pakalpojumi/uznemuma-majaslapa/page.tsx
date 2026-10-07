import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";

export const metadata: Metadata = {
  title: "Uzņēmuma mājaslapas izstrāde | Kestrel",
  description:
    "Uzņēmuma mājaslapas ar skaidru struktūru, uzticamu pirmo iespaidu un ērtu ceļu līdz kontaktam.",
};

export default function CompanyWebsitePage() {
  return (
    <main className="service-page">
      <header className="service-page-header" aria-label="Galvenā navigācija">
        <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
        <nav className="service-page-nav" aria-label="Galvenā navigācija">
          <a href="/#work">Darbi</a>
          <a href="/#process">Process</a>
          <a className="header-cta" href="/#contact">Sazināties</a>
        </nav>
      </header>

      <section className="service-page-hero company-service-hero">
        <div>
          <p className="service-page-kicker">Uzņēmuma mājaslapa</p>
          <h1>Visa uzņēmuma bilde vienuviet</h1>
          <p className="service-page-lead">
            Mājaslapa, kas palīdz klientam saprast, ko tu dari, kāpēc tev uzticēties
            un kā ar tevi sazināties.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/#contact">Izrunāt projektu</a>
            <a className="text-link" href="#struktura">Kā to saliekam <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="company-hero-visual" aria-hidden="true">
          <div className="company-browser">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="company-browser-nav">
              <strong>North</strong>
              <span>Pakalpojumi</span>
              <span>Par mums</span>
              <span>Kontakti</span>
            </div>
            <div className="company-browser-main">
              <div className="company-browser-copy">
                <span className="company-browser-kicker"/>
                <span className="company-browser-title"/>
                <span className="company-browser-text"/>
                <span className="company-browser-cta"/>
              </div>
              <div className="company-browser-art"/>
            </div>
            <div className="company-browser-sections">
              <span/><span/><span/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section company-fit-section" aria-labelledby="company-fit-title">
        <div className="company-fit-intro">
          <RevealOnView>
            <p className="service-page-kicker">Kad tas der</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-fit-title" className="service-line-stack company-fit-title">
              <span className="service-reveal-line"><span>Kad ar vienu lapu</span></span>
              <span className="service-reveal-line"><span>vairs nepietiek</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-fit-copy">
              Ja klientam jāizskaidro vairāki pakalpojumi, jāparāda uzticība un jādod vairāk nekā viens ceļš līdz kontaktam.
            </p>
          </RevealOnView>
        </div>

        <div className="company-fit-layout">
          <RevealOnView className="company-fit-statement line-mask-reveal">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Klientam nav jāmin</span></span>
              <span className="service-reveal-line"><span>kur meklēt svarīgo</span></span>
              <span className="service-reveal-line"><span>informāciju</span></span>
            </p>
          </RevealOnView>

          <div className="company-fit-side">
            <RevealOnView className="company-fit-item" delay={60}>
              <h3>Vairāki pakalpojumi</h3>
              <p>Katram piedāvājumam sava vieta, bet viss joprojām jūtas kā viena sistēma.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={150}>
              <h3>Uzticības saturs</h3>
              <p>Par uzņēmumu, darbiem, atsauksmēm un to, kā jūs strādājat.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={240}>
              <h3>Vairāki ceļi</h3>
              <p>Kontakts, pieteikšanās, zvans vai cita darbība atkarībā no vajadzības.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section company-structure-section" id="struktura" aria-labelledby="company-structure-title">
        <div className="company-structure-intro">
          <RevealOnView>
            <p className="service-page-kicker">Struktūra</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-structure-title" className="service-line-stack company-structure-title">
              <span className="service-reveal-line"><span>Katram saturam</span></span>
              <span className="service-reveal-line"><span>sava vieta</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-structure-copy">
              Nevis vairāk sadaļu tikai tāpēc, ka var, bet skaidra arhitektūra tam, ko klientam tiešām vajag redzēt.
            </p>
          </RevealOnView>
        </div>

        <div className="company-map">
          <RevealOnView className="company-map-main">
            <div className="company-map-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="company-map-browser-body">
                <span className="company-map-nav"/>
                <span className="company-map-title"/>
                <span className="company-map-copy"/>
                <span className="company-map-cta"/>
                <div className="company-map-grid">
                  <span/><span/><span/>
                </div>
              </div>
            </div>
          </RevealOnView>

          <div className="company-map-links">
            <RevealOnView className="company-map-link" delay={60}>
              <span>Sākumlapa</span>
              <small>Galvenā doma un virziens</small>
            </RevealOnView>
            <RevealOnView className="company-map-link" delay={130}>
              <span>Pakalpojumi</span>
              <small>Ko tu piedāvā un kam</small>
            </RevealOnView>
            <RevealOnView className="company-map-link" delay={200}>
              <span>Par mums</span>
              <small>Kāpēc tev uzticēties</small>
            </RevealOnView>
            <RevealOnView className="company-map-link" delay={270}>
              <span>Kontakti</span>
              <small>Skaidrs nākamais solis</small>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section service-process-section" aria-labelledby="company-process-title">
        <div className="service-process-intro">
          <RevealOnView className="service-process-kicker">
            <p className="service-page-kicker">Kā strādājam</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="company-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>No satura līdz live</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Vispirms saprotam uzņēmumu un klienta ceļu, tad saliekam saturu, dizainu un izstrādi vienā sistēmā.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Uzņēmuma mājaslapas izstrādes process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Mērķis</span>
            <p>Ko klientam jāsaprot un kādai darbībai jāseko tālāk.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Saturs</span>
            <p>Sakārtojam informāciju un nosakām, kas tiešām ir vajadzīgs.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Dizains</span>
            <p>Veidojam vizuālo sistēmu un izstrādājam visu lapu.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Live</span>
            <p>Pārbaudām, salabojam detaļas un palaižam lapu dzīvē.</p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Vajag sakārtot</span></span>
            <span className="service-reveal-line"><span>uzņēmuma lapu?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Atsūti īsu aprakstu par uzņēmumu, un pateiksim, kādu struktūru būtu jēga veidot.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/#contact">Pastāstīt par projektu</a>
        </RevealOnView>
      </section>

      <footer className="service-page-footer">
        <span>Kestrel, SIA · Reģ. nr. 40203559349</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
