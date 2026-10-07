"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Tik, cik tev tiešām vajag",
    description:
      "Izvēlamies vienkāršāko risinājumu, kas sasniedz biznesa mērķi — nevis lielāko projektu, ko varam pārdot.",
    visual: "scope",
  },
  {
    title: "Zini, par ko maksā",
    description:
      "Pirms sākam, vienojamies par rezultātu, apjomu un cenu, lai nav pārsteigumu projekta vidū.",
    visual: "price",
  },
  {
    title: "Jau sākumā redzi virzienu",
    description:
      "Pirms pilnas izstrādes parādām mājaslapas struktūru un vizuālo virzienu, lai skaidri redzi, uz ko ejam.",
    visual: "preview",
  },
];

function ReasonVisual({ type }: { type: string }) {
  if (type === "scope") {
    return (
      <div className="reason-visual reason-visual-scope" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (type === "price") {
    return (
      <div className="reason-visual reason-visual-price" aria-hidden="true">
        <div className="reason-sheet-head">
          <span />
          <span />
        </div>
        <div className="reason-sheet-row"><span>Apjoms</span><b>✓</b></div>
        <div className="reason-sheet-row"><span>Cena</span><b>✓</b></div>
        <div className="reason-sheet-row"><span>Rezultāts</span><b>✓</b></div>
      </div>
    );
  }

  return (
    <div className="reason-visual reason-visual-preview" aria-hidden="true">
      <div className="reason-wireframe">
        <span className="reason-wire-kicker" />
        <span className="reason-wire-title" />
        <span className="reason-wire-copy" />
        <span className="reason-wire-button" />
      </div>
      <span className="reason-preview-arrow">→</span>
      <div className="reason-polished">
        <span className="reason-polished-kicker" />
        <span className="reason-polished-title" />
        <span className="reason-polished-copy" />
        <span className="reason-polished-button" />
      </div>
    </div>
  );
}

export default function ValueShowcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let raf = 0;

    const updateActive = () => {
      if (window.innerWidth <= 900) {
        setActive(0);
        return;
      }

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

  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout">
          <div className="value-copy-side">
            <p className="section-label">Kāpēc Kestrel</p>

            <h2 id="value-title">
              <span>Mazāk liekā.</span>
              <span>Vairāk skaidrības.</span>
            </h2>

            <p className="value-intro">
              Mājaslapas izstrādei nav jābūt sarežģītam pirkumam. Palīdzam saprast,
              kas tiešām vajadzīgs, ko tas maksās un kāds būs virziens vēl pirms pilnas izstrādes.
            </p>
          </div>

          <div className="value-principles">
            {reasons.map((reason, index) => (
              <article
                className={"value-principle " + (active === index ? "is-active" : "")}
                key={reason.title}
                ref={(node) => {
                  refs.current[index] = node;
                }}
              >
                <div className="value-principle-copy">
                  <span className="value-principle-mark" aria-hidden="true" />
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
                <ReasonVisual type={reason.visual} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
