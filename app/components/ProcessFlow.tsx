import RevealOnView from "./RevealOnView";

const steps = [
  {
    label: "01",
    title: "Mērķis",
    text: "Saprotam, ko pārdodam, kam un kādu darbību vēlamies no apmeklētāja",
    icon: "target",
  },
  {
    label: "02",
    title: "Saturs",
    text: "Atlasām tikai to informāciju, kas palīdz klientam saprast un pieņemt lēmumu",
    icon: "content",
  },
  {
    label: "03",
    title: "Izstrāde",
    text: "Uzbūvējam un pārbaudām lapu uz desktop un mobile",
    icon: "build",
  },
  {
    label: "04",
    title: "Live",
    text: "Palaižam lapu dzīvē un, ja vajag, turpinām ar uzturēšanu un uzlabojumiem",
    icon: "launch",
  },
];

export default function ProcessFlow() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="process-head process-head-minimal"><h2 id="process-title">Process</h2></div>

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
              <span className="process-step-symbol" aria-hidden="true">
                {step.icon === "target" && <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" /><circle cx="16" cy="16" r="5" /><path d="M16 3v6M16 23v6M3 16h6M23 16h6" /></svg>}
                {step.icon === "content" && <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="3" /><path d="M11 11h11M11 16h11M11 21h7" /></svg>}
                {step.icon === "build" && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M4 12h24M13 16l-4 3 4 3M19 16l4 3-4 3" /></svg>}
                {step.icon === "launch" && <svg viewBox="0 0 32 32" fill="none"><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z" /><path d="m17 15 0 0M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01" /></svg>}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
