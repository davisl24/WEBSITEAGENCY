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
            <a className="value-about-link" href="/par-mums">Vairāk par mums <span aria-hidden="true">→</span></a>
          </RevealOnView>

          <RevealOnView className="value-showcase" >
            <div className="value-showcase-visual">
              <div className="value-showcase-meta"><span>KESTREL / PROJEKTA PĀRSKATS</span><span>PIEMĒRS</span></div>
              <div className="value-brief">
                <div className="value-brief-goal">
                  <span className="value-brief-label">MĒRĶIS</span>
                  <strong>Vairāk klientu pieteikumu</strong>
                  <span className="value-brief-target" aria-hidden="true">◎</span>
                </div>
                <div className="value-brief-details">
                  <div>
                    <span className="value-brief-label">RISINĀJUMS</span>
                    <strong>Landing lapa</strong>
                    <span>Bez liekām funkcijām</span>
                  </div>
                  <div>
                    <span className="value-brief-label">DARBA APJOMS</span>
                    <strong>Skaidri definēts</strong>
                    <span>Vienojamies pirms izstrādes</span>
                  </div>
                </div>
                <div className="value-brief-preview">
                  <span className="value-brief-label">VIZUĀLAIS VIRZIENS</span>
                  <div className="value-brief-mini-site" aria-hidden="true">
                    <div className="value-brief-mini-top"><i/><i/><i/><span/></div>
                    <div className="value-brief-mini-body">
                      <div className="value-brief-mini-copy"><b/><i/><i/><span/></div>
                      <div className="value-brief-mini-art"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
