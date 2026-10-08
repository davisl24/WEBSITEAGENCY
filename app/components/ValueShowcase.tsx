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
                <div className="value-contrast-demo value-contrast-demo-before" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Uzņēmums</strong><span>Sākums</span><span>Jaunumi</span><span>Pakalpojumi</span></div>
                  <div className="contrast-demo-promo">Viss, kas jums nepieciešams!</div>
                  <div className="contrast-demo-blurb">Pakalpojumi, jaunumi, noderīga informācija un vēl vairāk vienuviet.</div>
                  <div className="contrast-demo-grid"><span>Par mums</span><span>Akcijas</span><span>Jaunumi</span><span>Pakalpojumi</span><span>Galerija</span><span>Kontakti</span></div>
                  <div className="contrast-demo-actions"><span>Uzzināt vairāk</span><span>Lasīt jaunumus</span><span>Skatīt visu →</span></div>
                </div>
                <p>Daudz informācijas. Nav skaidrs, ar ko sākt.</p>
              </div>
              <span className="value-contrast-transition" aria-hidden="true">→</span>
              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>SKAIDRS</span><span>02 / PĒC</span></div>
                <div className="value-contrast-demo value-contrast-demo-after" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Uzņēmums</strong><span>Pakalpojumi</span><span>Kontakti</span></div>
                  <div className="contrast-demo-eyebrow">VIENS SKAIDRS PIEDĀVĀJUMS</div>
                  <div className="contrast-demo-headline">Risinājums, kas palīdz tev virzīties tālāk.</div>
                  <div className="contrast-demo-blurb">Saprotams pakalpojums, konkrēts ieguvums un vienkāršs nākamais solis.</div>
                  <span className="contrast-demo-cta">Pieteikt sarunu <span>↗</span></span>
                </div>
                <p>Viens piedāvājums. Viens saprotams nākamais solis.</p>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
