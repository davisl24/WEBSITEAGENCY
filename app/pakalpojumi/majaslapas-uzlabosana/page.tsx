import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Mājaslapas uzlabošana | Kestrel",
  description:
    "Esošas mājaslapas uzlabošana ar skaidrāku struktūru, modernāku dizainu, labāku mobilo versiju un vienkāršāku klienta ceļu.",
};

export default function WebsiteUpgradePage() {
  return (
    <main className="service-page">
      <header className="service-page-header" aria-label="Galvenā navigācija">
        <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
        <nav className="service-page-nav" aria-label="Galvenā navigācija">
            <ServicesDropdown />
            <a href="/par-mums">Par mums</a>
            <ThemeToggle />
            <a className="header-cta" href="/kontakti">Pieteikt sarunu</a>
          </nav>
      </header>

      <section className="service-page-hero upgrade-service-hero">
        <div>
          <p className="service-page-kicker">Mājaslapas uzlabošana</p>
          <h1>Esošā lapa var strādāt labāk</h1>
          <p className="service-page-lead">
            Ja mājaslapa jau ir, bet piedāvājumu grūti saprast, mobilā versija klibo
            vai klientam nav skaidrs nākamais solis, nav vienmēr jāsāk no nulles.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/kontakti">Izrunāt uzlabojumus</a>
            <a className="text-link" href="#ko-mainam">Ko mainām <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="upgrade-hero-visual" aria-hidden="true">
          <div className="upgrade-hero-before">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-before-body">
              <span/><span/><span/><span/>
            </div>
          </div>

          <div className="upgrade-hero-after">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-after-nav">
              <strong>North</strong>
              <span/>
            </div>
            <div className="upgrade-hero-after-body">
              <div>
                <span className="upgrade-hero-kicker"/>
                <span className="upgrade-hero-title"/>
                <span className="upgrade-hero-copy"/>
                <span className="upgrade-hero-cta"/>
              </div>
              <span className="upgrade-hero-art"/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section upgrade-signs-section" aria-labelledby="upgrade-signs-title">
        <div className="upgrade-signs-intro">
          <RevealOnView>
            <p className="service-page-kicker">Kad tas vajadzīgs</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-signs-title" className="service-line-stack upgrade-signs-title">
              <span className="service-reveal-line"><span>Kad lapa sāk</span></span>
              <span className="service-reveal-line"><span>traucēt</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-signs-copy">
              Problēma ne vienmēr ir vecs dizains. Biežāk lapa vienkārši liek klientam domāt pārāk daudz.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-signs-layout">
          <RevealOnView className="line-mask-reveal upgrade-signs-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Ja jāmeklē, jāpārdomā</span></span>
              <span className="service-reveal-line"><span>vai jāmin, kaut kas</span></span>
              <span className="service-reveal-line"><span>jau nestrādā</span></span>
            </p>
          </RevealOnView>

          <div className="upgrade-signs-side">
            <RevealOnView className="upgrade-sign" delay={70}>
              <h3>Neskaidrs piedāvājums</h3>
              <p>Ir daudz teksta, bet nav uzreiz skaidrs, ko uzņēmums piedāvā un kam.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={160}>
              <h3>Vāja mobilā versija</h3>
              <p>Telefonā saturs kļūst smagnējs, sīks vai neērts lietošanai.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={250}>
              <h3>Grūts nākamais solis</h3>
              <p>Kontakts, rezervācija vai pieteikšanās nav redzama tad, kad klientam to vajag.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section upgrade-compare-section" id="ko-mainam" aria-labelledby="upgrade-compare-title">
        <div className="upgrade-compare-intro">
          <RevealOnView>
            <p className="service-page-kicker">Ko mainām</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-compare-title" className="service-line-stack upgrade-compare-title">
              <span className="service-reveal-line"><span>Atstājam vajadzīgo</span></span>
              <span className="service-reveal-line"><span>salabojam lieko</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-compare-copy">
              Ne vienmēr vajag jaunu lapu. Dažreiz lielāko rezultātu dod skaidrāka struktūra,
              stiprāks vizuālais virziens un vienkāršāks klienta ceļš.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-compare">
          <RevealOnView className="upgrade-compare-before">
            <div className="upgrade-compare-label">Pirms</div>
            <div className="upgrade-compare-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-before-body">
                <span/><span/><span/><span/><span/>
                <div><span/><span/><span/></div>
              </div>
            </div>
            <p>Daudz vienāda svara informācijas un vājš ceļš līdz darbībai.</p>
          </RevealOnView>

          <RevealOnView className="upgrade-compare-after" delay={160}>
            <div className="upgrade-compare-label">Pēc</div>
            <div className="upgrade-compare-browser upgrade-compare-browser-after" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-after-body">
                <div>
                  <span className="upgrade-compare-kicker"/>
                  <span className="upgrade-compare-heading"/>
                  <span className="upgrade-compare-text"/>
                  <span className="upgrade-compare-button"/>
                </div>
                <span className="upgrade-compare-art"/>
              </div>
            </div>
            <p>Skaidra hierarhija, stiprāks pirmais iespaids un redzams nākamais solis.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="upgrade-process-title">
        <div className="service-process-intro">
          <RevealOnView>
            <p className="service-page-kicker">Kā strādājam</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="upgrade-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>No problēmas līdz fix</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Vispirms atrodam, kas reāli traucē. Tikai tad pārbūvējam to, kam ir jēga pieskarties.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Mājaslapas uzlabošanas process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Audits</span>
            <p>Skatāmies struktūru, mobile, ātrumu un klienta ceļu.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Prioritātes</span>
            <p>Atdalām reālās problēmas no kosmētiskiem sīkumiem.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Pārbūve</span>
            <p>Mainām struktūru, dizainu vai funkcionalitāti tur, kur tas vajadzīgs.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Pārbaude</span>
            <p>Pārbaudām desktop un mobile un salabojam gala detaļas.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Lapai nav jāsāk</span></span>
            <span className="service-reveal-line"><span>no nulles</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Atsūti esošo lapu, un pateiksim, ko būtu jēga saglabāt, mainīt vai pārbūvēt.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/kontakti">Parādīt esošo lapu</a>
        </RevealOnView>
      </section>

      <footer className="service-page-footer">
        <nav className="service-page-footer-nav" aria-label="Lapas navigācija">
          <a href="/">Sākums</a>
          <a href="/#services">Pakalpojumi</a>
          <a href="/par-mums">Par mums</a>
          <a href="/kontakti">Kontakti</a>
        </nav>
        <div className="service-page-footer-bottom">
          <span>Kestrel</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
