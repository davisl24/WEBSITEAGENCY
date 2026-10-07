import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";

export const metadata: Metadata = {
  title: "Landing lapas izstrāde | Kestrel",
  description:
    "Landing lapas vienam piedāvājumam ar skaidru mērķi, ātru ielādi un ērtu pieteikšanos.",
};

export default function LandingPage() {
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

      <section className="service-page-hero">
        <div>
          <p className="service-page-kicker">Landing lapa</p>
          <h1>Viena lapa<br/>Viens mērķis</h1>
          <p className="service-page-lead">
            Landing lapa vienam piedāvājumam, lai apmeklētājs ātri saprot,
            ko tu piedāvā, kāpēc tas ir svarīgi un ko darīt tālāk.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/#contact">Izrunāt projektu</a>
            <a className="text-link" href="#kas-ietilpst">Ko saņem <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="service-hero-demo" aria-hidden="true">
          <div className="service-demo-window">
            <div className="ui-browser-top"><span/><span/><span/></div>

            <div className="service-demo-nav">
              <span className="service-demo-brand">North</span>
              <div className="service-demo-nav-links">
                <span>Pakalpojumi</span>
                <span>Par mums</span>
                <span className="service-demo-nav-cta">Sākt</span>
              </div>
            </div>

            <div className="service-demo-hero">
              <div className="service-demo-copy-block">
                <span className="service-demo-eyebrow">Jauns piedāvājums</span>
                <strong>Skaidri. Ātri.<br/>Bez lieka.</strong>
                <p>Viena lapa ar vienu mērķi un skaidru ceļu līdz pieteikumam.</p>
                <span className="service-demo-primary">Pieteikties</span>
              </div>

              <div className="service-demo-art">
                <div className="service-demo-art-shape"/>
                <div className="service-demo-art-card">
                  <span>Vienam mērķim</span>
                  <strong>Skaidrs ceļš</strong>
                </div>
              </div>
            </div>

            <div className="service-demo-proof">
              <span>Skaidrs piedāvājums</span>
              <span>Mobilā versija</span>
              <span>Viena galvenā CTA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section service-fit-section" aria-labelledby="der-title">
        <div className="service-fit-head">
          <RevealOnView className="service-fit-kicker-reveal">
            <p className="service-page-kicker">Kad tas der</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-fit-title-reveal" delay={60}>
            <h2 id="der-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Kad pietiek</span></span>
              <span className="service-reveal-line"><span>ar vienu</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-fit-copy-reveal" delay={180}>
            <p>
              Landing lapa ir pareizā izvēle, ja ir viens galvenais piedāvājums
              un viena darbība, līdz kurai gribam aizvest apmeklētāju.
            </p>
          </RevealOnView>
        </div>

        <div className="service-fit-editorial">
          <RevealOnView className="line-mask-reveal service-fit-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Ne katram uzņēmumam</span></span>
              <span className="service-reveal-line"><span>vajag desmit lapas. Dažreiz</span></span>
              <span className="service-reveal-line"><span>vajag vienu, kas savu darbu</span></span>
              <span className="service-reveal-line"><span>izdara labi.</span></span>
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-a" delay={0}>
            <h3>Viens pakalpojums</h3>
            <p>
              Kad visa uzmanība jānotur uz vienu konkrētu piedāvājumu, nevis jāizkaisa pa vairākām sadaļām.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-b" delay={120}>
            <h3>Reklāmas kampaņa</h3>
            <p>
              Kad klikšķim no reklāmas vajag precīzu galamērķi ar vienu skaidru nākamo soli.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-c" delay={240}>
            <h3>Jauns piedāvājums</h3>
            <p>
              Kad gribi ātri palaist vai pārbaudīt ideju, neceļot pilnu uzņēmuma mājaslapu.
            </p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section service-includes-section" id="kas-ietilpst" aria-labelledby="includes-title">
        <div className="service-includes-intro">
          <RevealOnView className="service-includes-kicker">
            <p className="service-page-kicker">Ko saņem</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-includes-title" delay={60}>
            <h2 id="includes-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Viss vienā lapā</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-includes-copy" delay={160}>
            <p>
              Nevis pieci atsevišķi punkti, bet viena sistēma, kur struktūra,
              dizains un pieteikšanās ceļš strādā kopā.
            </p>
          </RevealOnView>
        </div>

        <div className="service-anatomy" aria-label="Landing lapas uzbūves piemērs">
          <RevealOnView className="service-anatomy-browser anatomy-browser-reveal">
            <div aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="service-anatomy-nav">
                <span className="service-anatomy-logo">North</span>
                <span className="service-anatomy-nav-line"/>
                <span className="service-anatomy-nav-button"/>
              </div>

              <div className="service-anatomy-hero">
                <div className="service-anatomy-copy">
                  <span className="service-anatomy-kicker"/>
                  <span className="service-anatomy-title"/>
                  <span className="service-anatomy-text"/>
                  <span className="service-anatomy-cta"/>
                </div>
                <div className="service-anatomy-art"/>
              </div>

              <div className="service-anatomy-content">
                <span/><span/><span/>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-phone anatomy-phone-reveal" delay={180}>
            <div aria-hidden="true">
              <div className="service-anatomy-phone-top"/>
              <span className="service-anatomy-phone-title"/>
              <span className="service-anatomy-phone-copy"/>
              <span className="service-anatomy-phone-cta"/>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-structure anatomy-note-reveal" delay={80}>
            <h3>Skaidra struktūra</h3>
            <p>Saturs pareizā secībā, lai piedāvājums ir saprotams bez minēšanas.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-design anatomy-note-reveal" delay={160}>
            <h3>Pielāgots dizains</h3>
            <p>Vizuāls risinājums, kas izskatās pēc tava zīmola, nevis template.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-cta anatomy-note-reveal" delay={240}>
            <h3>Forma un CTA</h3>
            <p>Viens skaidrs nākamais solis bez liekiem šķēršļiem.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-mobile anatomy-note-reveal" delay={320}>
            <h3>Mobilā versija</h3>
            <p>Tas pats skaidrais ceļš arī telefonā.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-seo anatomy-note-reveal" delay={400}>
            <h3>SEO pamati</h3>
            <p>Semantiska struktūra un tehniski tīrs pamats meklētājiem.</p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section service-process-section" aria-labelledby="process-title">
        <div className="service-process-intro">
          <RevealOnView className="service-process-kicker">
            <p className="service-page-kicker">Kā strādājam</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>No mērķa līdz live</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Sākam ar to, ko lapai jāpanāk. Tikai pēc tam liekam kopā saturu,
              dizainu un izstrādi.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Landing lapas izstrādes process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Mērķis</span>
            <p>Kam lapa domāta un kādu darbību gribam no apmeklētāja.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Saturs</span>
            <p>Informācija pareizā secībā, lai cilvēks saprot un pieņem lēmumu.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Dizains</span>
            <p>Vizuālais risinājums un izstrāde desktopam un mobile.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Live</span>
            <p>Pārbaude, pēdējās detaļas un lapa ir gatava darbam.</p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Vajag vienu skaidru</span></span>
            <span className="service-reveal-line"><span>lapu?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Atsūti īsu aprakstu par piedāvājumu, un pateiksim, kādu landing lapu
            būtu jēga veidot.
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
