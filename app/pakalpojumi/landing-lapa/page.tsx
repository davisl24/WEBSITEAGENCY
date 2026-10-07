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
            <div className="service-demo-body">
              <span className="service-demo-label"/>
              <span className="service-demo-title"/>
              <span className="service-demo-copy"/>
              <span className="service-demo-button"/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section" aria-labelledby="der-title">
        <div className="service-section-head">
          <h2 id="der-title">Kad tas der</h2>
          <p>
            Landing lapa ir pareizā izvēle, ja nevajag plašu uzņēmuma mājaslapu,
            bet vajag vienu skaidru ceļu līdz pieteikumam vai pirkumam.
          </p>
        </div>

        <div className="service-use-list">
          <div className="service-use-row">
            <h3>Viens pakalpojums</h3>
            <p>
              Kad gribi fokusēt visu uzmanību uz vienu konkrētu pakalpojumu
              un neizkaisīt cilvēku pa vairākām sadaļām.
            </p>
          </div>
          <div className="service-use-row">
            <h3>Kampaņa vai reklāma</h3>
            <p>
              Kad reklāmas klikšķim vajag skaidru galamērķi ar vienu piedāvājumu
              un vienu galveno CTA.
            </p>
          </div>
          <div className="service-use-row">
            <h3>Jauns piedāvājums</h3>
            <p>
              Kad gribi ātri pārbaudīt jaunu ideju vai piedāvājumu, neceļot
              lielu mājaslapu no nulles.
            </p>
          </div>
        </div>
      </section>

      <section className="service-page-section" id="kas-ietilpst" aria-labelledby="includes-title">
        <div className="service-section-head">
          <h2 id="includes-title">Ko saņem</h2>
          <p>
            Tik daudz, cik vajag, lai lapa izskatās uzticama, strādā ātri
            un palīdz cilvēkam nonākt līdz nākamajam solim.
          </p>
        </div>

        <div className="service-includes-list">
          <div className="service-include-row">
            <h3>Skaidra struktūra</h3>
            <p>Saturs un secība, kas palīdz klientam ātri saprast piedāvājumu.</p>
          </div>
          <div className="service-include-row">
            <h3>Pielāgots dizains</h3>
            <p>Vizuāls risinājums, kas atbilst zīmolam, nevis gatavam template.</p>
          </div>
          <div className="service-include-row">
            <h3>Mobilā versija</h3>
            <p>Responsive izkārtojums telefonam, planšetei un desktopam.</p>
          </div>
          <div className="service-include-row">
            <h3>Forma un CTA</h3>
            <p>Skaidrs pieteikšanās ceļš bez liekiem soļiem un apjukuma.</p>
          </div>
          <div className="service-include-row">
            <h3>SEO pamati</h3>
            <p>Pamata meta dati, semantiska struktūra un tehniski tīrs izpildījums.</p>
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
