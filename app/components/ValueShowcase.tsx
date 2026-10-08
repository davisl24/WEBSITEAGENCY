import RevealOnView from "./RevealOnView";

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout value-plan-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Kāpēc Kestrel</p>
            <h2 id="value-title">Mazāk liekā<span>Vairāk skaidrības</span></h2>
            <p className="value-intro">
              Mājaslapas izstrādei nav jābūt sarežģītai — mēs palīdzam saprast, kas tev patiešām vajadzīgs
            </p>
          </RevealOnView>

          <RevealOnView className="value-showcase">
            <div className="value-contrast-showcase" aria-label="No sarežģītas struktūras līdz skaidram piedāvājumam">
              <div className="value-contrast-panel value-contrast-before">
                <div className="value-contrast-top"><span>PAR DAUDZ</span><span>01 / PIRMS</span></div>
                <div className="value-contrast-wireframe" aria-hidden="true">
                  <div className="value-contrast-bar long" />
                  <div className="value-contrast-bar medium" />
                  <div className="value-contrast-fragments"><i/><i/></div>
                  <div className="value-contrast-bar long" />
                  <div className="value-contrast-fragments"><i/><i/></div>
                  <div className="value-contrast-bar short" />
                </div>
                <p>Daudz informācijas. Nav skaidrs, ar ko sākt.</p>
              </div>
              <span className="value-contrast-transition" aria-hidden="true">→</span>
              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>SKAIDRS</span><span>02 / PĒC</span></div>
                <div className="value-contrast-simple" aria-hidden="true">
                  <div className="value-contrast-line small"/>
                  <div className="value-contrast-headline"/>
                  <div className="value-contrast-line medium"/>
                  <div className="value-contrast-button"/>
                </div>
                <p>Viens piedāvājums. Viens saprotams nākamais solis.</p>
              </div>
            </div>
          </RevealOnView>
          <div className="value-bottom-link"><a className="value-about-link" href="/par-mums">Vairāk par mums <span aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </section>
  );
}
