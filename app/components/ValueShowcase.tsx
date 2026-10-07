import RevealOnView from "./RevealOnView";

const plan = [
  { number: "01", title: "Piemērots risinājums", detail: "Tikai tas, kas uzņēmumam vajadzīgs" },
  { number: "02", title: "Apjoms un cena", detail: "Vienošanās pirms izstrādes" },
  { number: "03", title: "Vizuālais virziens", detail: "Skaidrs pirms pilnas izstrādes" },
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

          <RevealOnView className="value-plan">
            <div className="value-plan-toolbar">
              <span className="value-plan-status" aria-hidden="true" />
              <span>PROJEKTA PLĀNS</span>
              <span className="value-plan-toolbar-lines" aria-hidden="true"><i/><i/></span>
            </div>
            <div className="value-plan-paper">
              <div className="value-plan-paper-top">
                <span className="value-plan-paper-label">NO IDEJAS LĪDZ SKAIDRAM VIRZIENAM</span>
                <span className="value-plan-paper-count">03 SOĻI</span>
              </div>
              {plan.map((item) => (
                <div className="value-plan-row" key={item.number}>
                  <span className="value-plan-check" aria-hidden="true">✓</span>
                  <div className="value-plan-row-copy">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="value-plan-row-number" aria-hidden="true">{item.number}</span>
                </div>
              ))}
            </div>
            <div className="value-plan-footer" aria-hidden="true">
              <span>SKAIDRS MĒRĶIS</span>
              <span className="value-plan-footer-line" />
              <span>SKAIDRS REZULTĀTS</span>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
