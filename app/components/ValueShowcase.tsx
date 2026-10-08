import RevealOnView from "./RevealOnView";

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout value-plan-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Kāpēc Kestrel</p>
            <h2 id="value-title">Mājaslapa, kurā<span>viss ir saprotams.</span></h2>
            <p className="value-intro">
              Mājaslapas izstrādei nav jābūt sarežģītai — mēs palīdzam saprast, kas tev patiešām vajadzīgs
            </p>
          </RevealOnView>

          <RevealOnView className="value-showcase">
            <div className="value-contrast-showcase" aria-label="No sarežģītas struktūras līdz skaidram piedāvājumam">
              <div className="value-contrast-panel value-contrast-before">
                <div className="value-contrast-top"><span>PAR DAUDZ</span><span>01 / PIRMS</span></div>
                <div className="value-contrast-demo value-contrast-demo-before" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Auto kopšana Rīgā</strong><span>Sākums</span><span>Jaunumi</span><span>Pakalpojumi</span></div>
                  <div className="contrast-demo-promo">Auto kopšanas pakalpojumi Rīgā</div>
                  <div className="contrast-demo-blurb">Salona tīrīšana, virsbūves kopšana un citi pakalpojumi. Uzzini vairāk mūsu sadaļās.</div>
                  <div className="contrast-demo-grid"><span>Salona tīrīšana</span><span>Virsbūves kopšana</span><span>Akcijas</span><span>Galerija</span><span>Jaunumi</span><span>Kontakti</span></div>
                  <div className="contrast-demo-actions"><span>Apskatīt cenas</span><span>Skatīt akcijas</span><span>Uzzināt vairāk →</span></div>
                </div>
                <p>Pakalpojumi ir, bet nav skaidra ceļa līdz pieteikumam.</p>
              </div>
              <span className="value-contrast-transition" aria-hidden="true">→</span>
              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>SKAIDRS</span><span>02 / PĒC</span></div>
                <div className="value-contrast-demo value-contrast-demo-after" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Uzņēmums</strong><span>Pakalpojumi</span><span>Kontakti</span></div>
                  <div className="contrast-demo-eyebrow">VIENS SKAIDRS PIEDĀVĀJUMS</div>
                  <div className="contrast-demo-headline">Auto salona dziļā tīrīšana Rīgā</div>
                  <div className="contrast-demo-blurb">Notīrām traipus, putekļus un ikdienā uzkrātos netīrumus. Piesaki sev ērtu laiku.</div>
                  <span className="contrast-demo-cta">Pieteikt tīrīšanu <span>↗</span></span>
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
