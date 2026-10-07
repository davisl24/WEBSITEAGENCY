import RevealOnView from "./RevealOnView";

const items = [
  {
    title: "Skaidrs piedāvājums",
    description:
      "Klients uzreiz saprot, ko jūs piedāvājat un kāpēc tas viņam var būt vajadzīgs.",
  },
  {
    title: "Vienkārša pieteikšanās",
    description:
      "Nākamais solis ir redzams bez liekas meklēšanas, minēšanas vai pāriešanas uz citu kanālu.",
  },
  {
    title: "Uzticams pirmais iespaids",
    description:
      "Sakārtots saturs un vizuālā hierarhija rada pārliecību vēl pirms pirmās sarunas.",
  },
];

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-head">
          <RevealOnView>
            <p className="section-label">Kāpēc tas strādā</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="value-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Mazāk šķēršļu klientam</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={140}>
            <p className="value-intro">
              Mājaslapai nav jāliek cilvēkam domāt, kur meklēt svarīgo.
              Galvenajam jābūt saprotamam jau pirmajās sekundēs.
            </p>
          </RevealOnView>
        </div>

        <div className="value-principles">
          {items.map((item, index) => (
            <RevealOnView
              className="value-principle"
              delay={index * 90}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
