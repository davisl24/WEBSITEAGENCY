import RevealOnView from "./RevealOnView";

const steps = [
  {
    label: "01",
    title: "Mērķis",
    text: "Saprotam, ko pārdodam, kam un kādu darbību vēlamies no apmeklētāja",
  },
  {
    label: "02",
    title: "Saturs",
    text: "Atlasām tikai to informāciju, kas palīdz klientam saprast un pieņemt lēmumu",
  },
  {
    label: "03",
    title: "Izstrāde",
    text: "Uzbūvējam un pārbaudām lapu uz desktop un mobile",
  },
  {
    label: "04",
    title: "Live",
    text: "Palaižam lapu dzīvē un, ja vajag, turpinām ar uzturēšanu un uzlabojumiem",
  },
];

export default function ProcessFlow() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="process-head">
          <RevealOnView>
            <p className="section-label">Process</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>No idejas līdz live</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={120}>
            <p className="process-intro">
              Vispirms saprotam, ko lapai jāpanāk — tikai tad ķeramies pie dizaina un izstrādes
            </p>
          </RevealOnView>
        </div>

        <div className="process-track">
          <span className="process-track-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <RevealOnView
              className="process-step"
              delay={120 + index * 90}
              key={step.label}
            >
              <span className="process-step-index">{step.label}</span>
              <span className="process-step-dot" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
