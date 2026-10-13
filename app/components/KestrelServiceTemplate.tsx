import KestrelHeader from "./KestrelHeader";
import KestrelFooter from "./KestrelFooter";
import RevealOnView from "./RevealOnView";

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
        <div className="kst-hero-copy"><RevealOnView><h1>{service.title}</h1></RevealOnView><RevealOnView delay={75}><p className="kst-intro">{service.intro}</p></RevealOnView><a className="kst-hero-cta" href="/kontakti">Pieteikt sarunu <span aria-hidden="true">↗</span></a></div>
      </section>
      {service.audience.length > 0 && (
        <section className="kst-section kst-audience-section" aria-labelledby="kst-audience-title">
          <div className="kst-heading"><RevealOnView><h2 id="kst-audience-title">Kam tas ir piemērots</h2></RevealOnView></div>
          <div className="kst-audience">{service.audience.map(item => <p key={item}>{item}</p>)}</div>
        </section>
      )}
      <section className="kst-section kst-offers-section" aria-labelledby="kst-offers">
        <div className="kst-heading"><RevealOnView><h2 id="kst-offers">Ko piedāvājam</h2></RevealOnView></div>
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
        <div className="kst-heading"><RevealOnView><h2 id="kst-included">Kas ir iekļauts</h2></RevealOnView></div>
        <div className="kst-included">{service.included.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div>
      </section>
      <section className="kst-section kst-process-section" aria-labelledby="kst-process">
        <div className="kst-heading"><RevealOnView><h2 id="kst-process">Kā strādājam</h2></RevealOnView></div>
        <div className="kst-process">{process.map(step => <div key={step}><h3>{step}</h3></div>)}</div>
      </section>
      {service.faq.length > 0 && (
        <section className="kst-section kst-faq-section" aria-labelledby="kst-faq-title">
          <div className="kst-heading"><RevealOnView><h2 id="kst-faq-title">Biežākie jautājumi</h2></RevealOnView></div>
          <div className="kst-faq">
            {service.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </section>
      )}
      <section className="kst-end">
        <RevealOnView><h2>Pastāsti par savu projektu.</h2></RevealOnView>
        <a className="kst-glass-cta" href="/kontakti">Pieteikt sarunu <span aria-hidden="true">↗</span></a>
      </section>
      <KestrelFooter />
    </main>
  );
}
