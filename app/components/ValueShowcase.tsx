import RevealOnView from "./RevealOnView";

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout value-plan-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Kāpēc Kestrel</p>
            <h2 id="value-title">Mājaslapa, kurā<span>viss ir saprotams</span></h2>
            <p className="value-intro">No nesakārtotas informācijas līdz skaidram ceļam uz pieteikšanos</p>
          </RevealOnView>

          <RevealOnView className="value-showcase">
            <div className="value-contrast-showcase" aria-label="Pirms un pēc mājaslapas struktūras uzlabošanas — ilustratīvs piemērs">
              <div className="value-contrast-panel value-contrast-before">
                <div className="value-contrast-top"><span>NESAKĀRTOTS</span><span>01 / PIRMS</span></div>
                <div className="value-contrast-demo value-contrast-demo-before contrast-messy" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>LOGO</strong><span>Sākums</span><span>Jaunumi</span><span>Galerija</span><span>Par mums</span><span>Kontakti</span></div>
                  <div className="messy-announcement">JAUNUMI! AKCIJAS! APSKATI VISU PIEDĀVĀJUMU!</div>
                  <div className="messy-headline">Laipni lūdzam mūsu mājaslapā!</div>
                  <div className="messy-description">Piedāvājam dažādus pakalpojumus un individuālus risinājumus ikvienam klientam</div>
                  <div className="messy-tiles">
                    <span>Par mums</span><span>Pakalpojumi</span><span>Akcijas</span><span>Galerija</span><span>Jaunumi</span><span>Cenrādis</span>
                  </div>
                  <div className="contrast-demo-actions"><span>Uzzināt vairāk</span><span>Apskatīt</span><span>Sazināties</span></div>
                </div>
                <div className="contrast-outcome">
                  <strong>Kas traucē</strong>
                  <p>Pārāk daudz izvēļu, vāja hierarhija un nav skaidrs nākamais solis</p>
                </div>
              </div>

              <span className="value-contrast-transition" aria-hidden="true">→</span>

              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>SAKĀRTOTS</span><span>02 / PĒC</span></div>
                <div className="value-contrast-demo value-contrast-demo-after contrast-refined" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>LOGO</strong><span>Pakalpojumi</span><span>Kontakti</span></div>
                  <div className="contrast-demo-headline">Pakalpojums, kas tev nepieciešams</div>
                  <div className="contrast-demo-blurb">Svarīgākā informācija vienuviet, lai vari ātri pieņemt lēmumu</div>
                  <span className="contrast-demo-cta">Pieteikties <span>↗</span></span>
                </div>
                <div className="contrast-outcome">
                  <strong>Ko izmainījām un ko tas dod</strong>
                  <p>Sakārtojām saturu, izcēlām piedāvājumu un vienu darbību — klientam vieglāk saprast un pieteikties</p>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
