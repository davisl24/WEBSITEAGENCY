import RevealOnView from "./RevealOnView";

const reasons = [
  {
    title: "Tik, cik tev tiešām vajag",
    description:
      "Izvēlamies vienkāršāko risinājumu, kas sasniedz biznesa mērķi — nevis lielāko projektu, ko varam pārdot.",
  },
  {
    title: "Zini, par ko maksā",
    description:
      "Pirms sākam, vienojamies par rezultātu, apjomu un cenu, lai nav pārsteigumu projekta vidū.",
  },
  {
    title: "Jau sākumā redzi virzienu",
    description:
      "Pirms pilnas izstrādes parādām mājaslapas struktūru un vizuālo virzienu, lai skaidri redzi, uz ko ejam.",
  },
];

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout">
          <div className="value-copy-side">
            <RevealOnView>
              <p className="section-label">Kāpēc Kestrel</p>
            </RevealOnView>

            <RevealOnView className="line-mask-reveal" delay={60}>
              <h2 id="value-title" className="service-line-stack">
                <span className="service-reveal-line"><span>Mazāk liekā.</span></span>
                <span className="service-reveal-line"><span>Vairāk skaidrības.</span></span>
              </h2>
            </RevealOnView>

            <RevealOnView delay={130}>
              <p className="value-intro">
                Mājaslapas izstrādei nav jābūt sarežģītam pirkumam. Palīdzam saprast,
                kas tiešām vajadzīgs, ko tas maksās un kāds būs virziens vēl pirms pilnas izstrādes.
              </p>
            </RevealOnView>
          </div>

          <div className="value-principles">
            {reasons.map((reason, index) => (
              <RevealOnView
                className="value-principle"
                delay={120 + index * 90}
                key={reason.title}
              >
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
