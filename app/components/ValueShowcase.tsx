"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Skaidrs piedāvājums",
    description: "Klients uzreiz saprot, ko jūs piedāvājat",
    kicker: "Pakalpojums",
    previewTitle: "Skaidrs piedāvājums",
    previewText: "Galvenā informācija un nākamais solis ir redzami uzreiz",
    cta: "Pieteikties",
    tone: "clarity",
  },
  {
    title: "Vienkārša pieteikšanās",
    description: "Nākamais solis ir skaidrs bez liekas meklēšanas",
    kicker: "Pieteikšanās",
    previewTitle: "Viens skaidrs nākamais solis",
    previewText: "Pieteikšanās ir redzama uzreiz un nav jāmeklē citos kanālos",
    cta: "Rezervēt laiku",
    tone: "booking",
  },
  {
    title: "Uzticams pirmais iespaids",
    description: "Pārliecība rodas vēl pirms pirmās sarunas",
    kicker: "Uzticība",
    previewTitle: "Profesionāls pirmais iespaids",
    previewText: "Sakārtots saturs un vizuālā hierarhija rada uzticību jau pirmajās sekundēs",
    cta: "Uzzināt vairāk",
    tone: "trust",
  },
];

export default function ValueShowcase() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        setActive(index);
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    stepsRef.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const current = items[active];

  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-head">
          <p className="section-label">Kāpēc tas svarīgi</p>
          <h2 id="value-title">Mazāk šķēršļu klientam</h2>
        </div>

        <div className="value-scroll">
          <div className="value-steps">
            {items.map((item, index) => (
              <div
                className={"value-step " + (active === index ? "is-active" : "")}
                data-index={index}
                key={item.title}
                ref={(node) => {
                  stepsRef.current[index] = node;
                }}
              >
                <span className="value-step-label">{item.title}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="value-sticky">
            <div className={"value-preview value-preview-" + current.tone}>
              <div className="preview-window">
                <div className="preview-topbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-body">
                  <div className="preview-copy" key={`preview-copy-${active}`}>
                    <span className="preview-kicker">{current.kicker}</span>
                    <strong>{current.previewTitle}</strong>
                    <p>{current.previewText}</p>
                    <div className="preview-cta">{current.cta}</div>
                  </div>

                  <div className="preview-art" aria-hidden="true">
                    <div className="preview-art-main" />
                    <div className="preview-art-small" />
                  </div>
                </div>
              </div>

              <div className="preview-note" key={`preview-note-${active}`}>
                <p>{current.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
