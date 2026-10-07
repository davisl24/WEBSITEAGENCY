import RevealOnView from "./RevealOnView";

const reasons = [
  {
    title: "Tik, cik tev tiešām vajag",
    description: "Izvēlamies risinājumu pēc uzņēmuma mērķa, nevis pēc lieku funkciju skaita",
  },
  {
    title: "Zini, par ko maksā",
    description: "Pirms izstrādes vienojamies par darba apjomu, rezultātu un cenu",
  },
  {
    title: "Jau sākumā redzi virzienu",
    description: "Pirms pilnas izstrādes izrunājam struktūru un parādām vizuālo virzienu",
  },
];

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Kāpēc Kestrel</p>
            <h2 id="value-title">Mazāk liekā<span>Vairāk skaidrības</span></h2>
            <p className="value-intro">
              Mājaslapas izstrādei nav jābūt sarežģītai — mēs palīdzam saprast, kas tev patiešām vajadzīgs
            </p>
          </RevealOnView>
          <div className="value-principles">
            {reasons.map((reason, index) => (
              <RevealOnView className="value-principle" delay={index * 90} key={reason.title}>
                <span className="value-principle-mark" aria-hidden="true" />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
