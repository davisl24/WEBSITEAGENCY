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
              <div className="value-showcase-meta"><span>KESTREL PIEEJA</span><span>01 / 03</span></div>
              <div className="value-showcase-window">
                <div className="value-showcase-browser-top"><i/><i/><i/><span/></div>
                <div className="value-showcase-browser-content">
                  <div className="value-showcase-site-copy">
                    <span className="value-showcase-site-kicker"/>
                    <span className="value-showcase-site-title"/>
                    <span className="value-showcase-site-description"/>
                    <span className="value-showcase-site-description short"/>
                    <span className="value-showcase-site-button"/>
                  </div>
                  <div className="value-showcase-site-art">
                    <span/><span/><span/>
                  </div>
                </div>
              </div>
              <div className="value-showcase-caption"><span className="value-showcase-caption-dot"/>Skaidrs virziens pirms izstrādes</div>
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
