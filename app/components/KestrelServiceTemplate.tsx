import KestrelHeader from "./KestrelHeader";
import KestrelFooter from "./KestrelFooter";

export type ServiceInfo = {
  title: string;
  intro: string;
  audience: string[];
  offers: { title: string; detail: string; price?: string; href?: string }[];
  included: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
};

const process = ["Izrunājam", "Saskaņojam", "Izstrādājam", "Publicējam"];

export default function KestrelServiceTemplate({ service }: { service: ServiceInfo }) {
  return (
    <main className="kestrel-service kestrel-service-v2">
      <KestrelHeader />
      <section className="kst-hero" aria-label="Pakalpojums">
        <h1>{service.title}</h1>
      </section>
      <section className="kst-section kst-offers-section" aria-labelledby="kst-offers">
        <div className="kst-heading"><h2 id="kst-offers">Ko piedāvājam?</h2></div>
        <div className="kst-offers">
          {service.offers.map(item => {
            const contents = <><div className="kst-offer-top"><h3>{item.title}</h3>{item.href && <span aria-hidden="true">↗</span>}</div><p>{item.detail}</p>{item.price && <strong>{item.price}</strong>}</>;
            return item.href
              ? <a key={item.title} href={item.href} className="kst-offer">{contents}</a>
              : <div key={item.title} className="kst-offer">{contents}</div>;
          })}
        </div>
      </section>
      <section className="kst-section kst-included-section" aria-labelledby="kst-included">
        <div className="kst-heading"><h2 id="kst-included">Kas ir iekļauts?</h2></div>
        <div className="kst-included">{service.included.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div>
      </section>
      <section className="kst-section kst-process-section" aria-labelledby="kst-process">
        <div className="kst-heading"><h2 id="kst-process">Kā strādājam?</h2></div>
        <div className="kst-process">{process.map((step, i) => <div key={step}><span>{String(i + 1).padStart(2, "0")}</span><h3>{step}</h3></div>)}</div>
      </section>
      <section className="kst-end">
        <h2>Pastāsti par savu projektu.</h2>
        <a className="kst-glass-cta" href="/kontakti">Pieteikt sarunu <span aria-hidden="true">↗</span></a>
      </section>
      <KestrelFooter />
    </main>
  );
}
