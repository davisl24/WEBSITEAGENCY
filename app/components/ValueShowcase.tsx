import RevealOnView from "./RevealOnView";

const benefits = [
  { number: "01", title: "Piemērots risinājums", detail: "Bez liekām funkcijām" },
  { number: "02", title: "Skaidrs apjoms un cena", detail: "Vienojamies pirms izstrādes" },
  { number: "03", title: "Vizuālais virziens", detail: "Redzams pirms pilnas izstrādes" },
];

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

          <RevealOnView className="value-showcase" >
            <div className="value-showcase-visual" aria-hidden="true">
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
                  <div className="value-brief-preview-main" aria-hidden="true"><i/><i/></div>
                  <div className="value-brief-preview-line" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="value-showcase-benefits">
              {benefits.map((benefit) => (
                <div className="value-showcase-benefit" key={benefit.number}>
                  <span className="value-showcase-benefit-number">{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.detail}</p>
                </div>
              ))}
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
