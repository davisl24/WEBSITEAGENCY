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
      "Nākamais solis ir redzams uzreiz — bez liekas meklēšanas un minēšanas.",
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
        <div className="value-layout">
          <div className="value-copy-side">
            <RevealOnView>
              <p className="section-label">Kāpēc tas strādā</p>
            </RevealOnView>

            <RevealOnView className="line-mask-reveal" delay={60}>
              <h2 id="value-title" className="service-line-stack">
                <span className="service-reveal-line"><span>Mazāk šķēršļu</span></span>
                <span className="service-reveal-line"><span>klientam</span></span>
              </h2>
            </RevealOnView>

            <RevealOnView delay={130}>
              <p className="value-intro">
                Mājaslapai nav jāliek cilvēkam domāt, kur meklēt svarīgo.
                Galvenajam jābūt saprotamam jau pirmajās sekundēs.
              </p>
            </RevealOnView>

            <div className="value-principles">
              {items.map((item, index) => (
                <RevealOnView
                  className="value-principle"
                  delay={160 + index * 80}
                  key={item.title}
                >
                  <span className="value-principle-mark" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </RevealOnView>
              ))}
            </div>
          </div>

          <RevealOnView className="value-static-visual" delay={120}>
            <div className="value-browser" aria-label="Skaidras mājaslapas piemērs">
              <div className="value-browser-top" aria-hidden="true">
                <span/><span/><span/>
              </div>

              <div className="value-browser-nav">
                <strong>North</strong>
                <div>
                  <span>Pakalpojumi</span>
                  <span>Par mums</span>
                  <span className="value-browser-nav-cta">Sazināties</span>
                </div>
              </div>

              <div className="value-browser-main">
                <div className="value-browser-copy">
                  <span className="value-browser-kicker">Pakalpojums</span>
                  <strong>Skaidrs no pirmā skatiena</strong>
                  <p>
                    Galvenā informācija, ieguvums un nākamais solis ir redzams uzreiz.
                  </p>
                  <span className="value-browser-cta">Pieteikt sarunu</span>
                </div>

                <div className="value-browser-art" aria-hidden="true">
                  <div className="value-browser-art-main" />
                  <div className="value-browser-art-card">
                    <span>Viens mērķis</span>
                    <strong>Skaidrs ceļš</strong>
                  </div>
                </div>
              </div>

              <div className="value-browser-proof" aria-hidden="true">
                <span>Skaidrs piedāvājums</span>
                <span>Vienkāršs nākamais solis</span>
                <span>Uzticams iespaids</span>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
