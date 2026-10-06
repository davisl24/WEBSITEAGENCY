"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Saprast mērķi",
    text: "Ko pārdodam, kam un kādu darbību vēlamies no apmeklētāja",
  },
  {
    title: "Salikt saturu",
    text: "Atlasām tikai to informāciju, kas palīdz klientam saprast un pieņemt lēmumu",
  },
  {
    title: "Uztaisīt un pārbaudīt",
    text: "Uzbūvējam, pārbaudām desktop un mobile, un salabojam tikai reālas problēmas",
  },
  {
    title: "Palaist un uzturēt",
    text: "Palaižam lapu dzīvē un pēc tam uzturam to vienkāršu, ātru un aktuālu",
  },
];

export default function ProcessFlow() {
  const [active, setActive] = useState(0);
  const [markerTop, setMarkerTop] = useState(12);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const flowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const updateActive = () => {
      const viewportCenter = window.innerHeight * 0.5;

      let nextActive = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      refs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextActive = index;
        }
      });

      setActive((current) => (current === nextActive ? current : nextActive));
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const flow = flowRef.current;
    const step = refs.current[active];
    if (!flow || !step) return;

    const flowRect = flow.getBoundingClientRect();
    const stepRect = step.getBoundingClientRect();
    const center = stepRect.top - flowRect.top + stepRect.height / 2;
    const percent = (center / flowRect.height) * 100;

    setMarkerTop(Math.max(2, Math.min(98, percent)));
  }, [active]);


  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-inner">
        <div className="process-head">
          <p className="section-label">Process</p>
          <h2 id="process-title">No idejas līdz live</h2>
          <p className="process-intro">
            Process ir vienkāršs — vispirms saprotam, ko lapai jāpanāk, tikai tad ķeramies pie dizaina un izstrādes
          </p>
        </div>

        <div className="process-flow" ref={flowRef}>
          <div className="process-rail" aria-hidden="true">
            <span style={{ top: `${markerTop}%` }} />
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <article
                key={step.title}
                data-index={index}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                className={"process-step " + (active === index ? "is-active" : "")}
              >
                <div className="process-stage">{step.title}</div>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
