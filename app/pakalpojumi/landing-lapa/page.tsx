import type { Metadata } from "next";

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
          <h1>Viena lapa. Viens mērķis.</h1>
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
          <p className="service-page-kicker">Kad tas der</p>
          <h2 id="der-title">Kad pietiek ar vienu</h2>
          <p>
            Landing lapa ir pareizā izvēle, ja ir viens galvenais piedāvājums
            un viena darbība, līdz kurai gribam aizvest apmeklētāju.
          </p>
        </div>

        <div className="service-fit-editorial">
          <p className="service-fit-statement">
            Ne katram uzņēmumam vajag desmit lapas. Dažreiz vajag vienu, kas savu darbu izdara labi.
          </p>

          <div className="service-fit-case service-fit-case-a">
            <h3>Viens pakalpojums</h3>
            <p>
              Kad visa uzmanība jānotur uz vienu konkrētu piedāvājumu, nevis jāizkaisa pa vairākām sadaļām.
            </p>
          </div>

          <div className="service-fit-case service-fit-case-b">
            <h3>Reklāmas kampaņa</h3>
            <p>
              Kad klikšķim no reklāmas vajag precīzu galamērķi ar vienu skaidru nākamo soli.
            </p>
          </div>

          <div className="service-fit-case service-fit-case-c">
            <h3>Jauns piedāvājums</h3>
            <p>
              Kad gribi ātri palaist vai pārbaudīt ideju, neceļot pilnu uzņēmuma mājaslapu.
            </p>
          </div>
        </div>
      </section>

      <section className="service-page-section service-includes-section" id="kas-ietilpst" aria-labelledby="includes-title">
        <div className="service-includes-intro">
          <p className="service-page-kicker">Ko saņem</p>
          <h2 id="includes-title">Viss vienā lapā</h2>
          <p>
            Nevis pieci atsevišķi punkti, bet viena sistēma, kur struktūra,
            dizains un pieteikšanās ceļš strādā kopā.
          </p>
        </div>

        <div className="service-anatomy" aria-label="Landing lapas uzbūves piemērs">
          <div className="service-anatomy-browser" aria-hidden="true">
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

          <div className="service-anatomy-phone" aria-hidden="true">
            <div className="service-anatomy-phone-top"/>
            <span className="service-anatomy-phone-title"/>
            <span className="service-anatomy-phone-copy"/>
            <span className="service-anatomy-phone-cta"/>
          </div>

          <div className="service-anatomy-note note-structure">
            <h3>Skaidra struktūra</h3>
            <p>Saturs pareizā secībā, lai piedāvājums ir saprotams bez minēšanas.</p>
          </div>

          <div className="service-anatomy-note note-design">
            <h3>Pielāgots dizains</h3>
            <p>Vizuāls risinājums, kas izskatās pēc tava zīmola, nevis template.</p>
          </div>

          <div className="service-anatomy-note note-cta">
            <h3>Forma un CTA</h3>
            <p>Viens skaidrs nākamais solis bez liekiem šķēršļiem.</p>
          </div>

          <div className="service-anatomy-note note-mobile">
            <h3>Mobilā versija</h3>
            <p>Tas pats skaidrais ceļš arī telefonā.</p>
          </div>

          <div className="service-anatomy-note note-seo">
            <h3>SEO pamati</h3>
            <p>Semantiska struktūra un tehniski tīrs pamats meklētājiem.</p>
          </div>
        </div>
      </section>

      <section className="service-page-section" aria-labelledby="process-title">
        <div className="service-section-head">
          <h2 id="process-title">Kā strādājam</h2>
          <p>
            Sākam ar mērķi un saturu. Dizains nāk pēc tam, kad ir skaidrs,
            ko lapai patiesībā jāpanāk.
          </p>
        </div>

        <div className="service-process-list">
          <div className="service-process-row">
            <h3>Mērķis</h3>
            <p>Nosakām, kam lapa domāta un kādu darbību gribam no apmeklētāja.</p>
          </div>
          <div className="service-process-row">
            <h3>Saturs</h3>
            <p>Saliekam tikai to informāciju, kas palīdz saprast un pieņemt lēmumu.</p>
          </div>
          <div className="service-process-row">
            <h3>Dizains un izstrāde</h3>
            <p>Uzbūvējam lapu, pārbaudām desktop un mobile, un sakārtojam detaļas.</p>
          </div>
          <div className="service-process-row">
            <h3>Palaišana</h3>
            <p>Pārbaudām gala versiju un palaižam lapu dzīvē.</p>
          </div>
        </div>
      </section>

      <section className="service-page-cta">
        <h2>Vajag vienu skaidru lapu?</h2>
        <p>
          Atsūti īsu aprakstu par piedāvājumu, un pateiksim, kādu landing lapu
          būtu jēga veidot.
        </p>
        <a className="button button-primary" href="/#contact">Pastāstīt par projektu</a>
      </section>

      <footer className="service-page-footer">
        <span>Kestrel, SIA · Reģ. nr. 40203559349</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
