import type { ReactNode } from "react";
import RevealOnView from "./RevealOnView";

type DeliveryItem = {
  title: string;
  text: string;
};

type ServiceDeliveryProps = {
  id: string;
  title: string;
  description: string;
  items: DeliveryItem[];
};

function DeliveryIcon({ title, index }: { title: string; index: number }) {
  const name = title.toLowerCase();
  const kind = /seo|audits|pārbaud|mobile/.test(name) ? "search" :
    /forma|cta|kontakt|integrācij/.test(name) ? "action" :
    /dizains|izstrāde/.test(name) ? "screen" :
    /saturs|struktūr|arhitektūr|ux/.test(name) ? "structure" :
    index === 0 ? "structure" : index === 1 ? "action" : index === 2 ? "screen" : "search";
  const paths: Record<string, ReactNode> = {
    structure: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/></>,
    action: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h6"/><path d="m14 15 2 2 3-4"/></>,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M9 21h6M12 17v4"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/></>,
  };
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export default function ServiceDelivery({
  id,
  title,
  description,
  items,
}: ServiceDeliveryProps) {
  return (
    <section className="service-page-section service-delivery-section" aria-labelledby={id}>
      <div className="service-delivery-head">
        <RevealOnView>
          <p className="service-page-kicker">Projektā parasti ietilpst</p>
        </RevealOnView>

        <RevealOnView className="line-mask-reveal" delay={60}>
          <h2 id={id} className="service-line-stack service-delivery-title">
            <span className="service-reveal-line"><span>{title}</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView delay={150}>
          <p className="service-delivery-copy">{description}</p>
        </RevealOnView>
      </div>

      <div className="service-delivery-grid">
        {items.map((item, index) => (
          <RevealOnView className="service-delivery-item" delay={index * 70} key={item.title}>
            <div className="service-delivery-item-top"><span className="service-delivery-index">{String(index + 1).padStart(2, "0")}</span><span className="service-delivery-icon" aria-hidden="true"><DeliveryIcon title={item.title} index={index} /></span></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </RevealOnView>
        ))}
      </div>

      <RevealOnView className="service-aftercare" delay={120}>
        <div>
          <span>Pēc palaišanas</span>
          <p>
            Ja vajag, varam turpināt ar hostingu, tehnisko uzturēšanu un
            turpmākiem mājaslapas uzlabojumiem.
          </p>
        </div>
        <small>Pēc nepieciešamības</small>
      </RevealOnView>
    </section>
  );
}
