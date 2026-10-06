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
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      {
        threshold: [0.45, 0.6, 0.75],
        rootMargin: "-28% 0px -28% 0px",
      }
    );

    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

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

        <div className="process-flow">
          <div className="process-rail" aria-hidden="true">
            <span style={{ top: `${12 + active * 25}%` }} />
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
