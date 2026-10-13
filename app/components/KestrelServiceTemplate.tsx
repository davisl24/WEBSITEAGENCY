import KestrelHeader from "./KestrelHeader";
import KestrelFooter from "./KestrelFooter";
import RevealOnView from "./RevealOnView";
import ProcessFlow from "./ProcessFlow";

export type ServiceInfo = {
  title: string;
  intro: string;
  audience: string[];
  offers: { title: string; detail: string; price?: string; href?: string }[];
  included: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
};

function OfferIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index === 0 && <><rect x="4" y="7" width="24" height="20" rx="3"/><path d="M4 13h24M10 19h5M19 19h4M10 23h13"/></>}
    {index === 1 && <><path d="M6 7h3l3 15h13l3-11H10"/><circle cx="14" cy="26" r="1.5"/><circle cx="23" cy="26" r="1.5"/></>}
    {index === 2 && <><rect x="4" y="5" width="24" height="9" rx="2"/><rect x="4" y="18" width="24" height="9" rx="2"/><path d="M10 14v4M22 14v4M10 9h8M10 22h8"/></>}
  </svg>;
}

function CommercePreview() {
  return <div className="kst-commerce-preview" role="img" aria-label="Ilustratīvs interneta veikala piemērs: preču katalogs, grozs un pasūtījuma noformēšana">
    <div className="kst-commerce-window">
      <div className="kst-commerce-window-top"><strong>Veikals</strong><span>Katalogs</span><span>Grozs (2)</span></div>
      <div className="kst-commerce-product-grid">
        <div><span className="kst-product-shape shape-one"/><i/><small>Produkts A</small></div>
        <div><span className="kst-product-shape shape-two"/><i/><small>Produkts B</small></div>
        <div><span className="kst-product-shape shape-three"/><i/><small>Produkts C</small></div>
      </div>
    </div>
    <div className="kst-commerce-checkout"><strong>Pasūtījums</strong><span>2 produkti</span><div className="kst-checkout-line"/><div className="kst-checkout-line short"/><span className="kst-checkout-button">Turpināt</span></div>
  </div>;
}

export default function KestrelServiceTemplate({ service }: { service: ServiceInfo }) {
  const isCommerce = service.title === "Tavs veikals tiešsaistē";
  return <main className="kestrel-service kestrel-service-v2 kestrel-service-unified">
    <KestrelHeader />
    <section className="kst-hero" aria-label="Pakalpojums">
      <div className="kst-hero-copy">
        <RevealOnView><h1>{service.title}</h1></RevealOnView>
        <RevealOnView delay={70}><p className="kst-intro">{service.intro}</p></RevealOnView>
        <a className="kst-hero-cta" href="/kontakti">Pieteikt sarunu</a>
      </div>
      {isCommerce && <CommercePreview />}
    </section>

    <section className="kst-section kst-offers-section" aria-labelledby="kst-offers">
      <div className="kst-heading"><RevealOnView><h2 id="kst-offers">{isCommerce ? "No kataloga līdz pasūtījumam" : "Ko piedāvājam"}</h2></RevealOnView></div>
      <div className="kst-offers">
        {service.offers.map((item,index) => {
          const inside = <><span className="kst-offer-icon"><OfferIcon index={index%3}/></span><div className="kst-offer-body"><h3>{item.title}</h3><p>{item.detail}</p>{item.price && <strong>{item.price}</strong>}</div>{item.href && <span className="kst-offer-arrow" aria-hidden="true">↗</span>}</>;
          return item.href ? <a key={item.title} href={item.href} className="kst-offer">{inside}</a> : <div key={item.title} className="kst-offer">{inside}</div>;
        })}
      </div>
    </section>

    <section className="kst-section kst-included-section" aria-labelledby="kst-included">
      <div className="kst-heading"><RevealOnView><h2 id="kst-included">Kas ir iekļauts</h2></RevealOnView></div>
      <div className="kst-included">
        {service.included.map((item,index) => <RevealOnView className="kst-included-item" delay={index*70} key={item.title}>
          <span aria-hidden="true" className="kst-included-mark">✓</span><div><h3>{item.title}</h3><p>{item.detail}</p></div>
        </RevealOnView>)}
      </div>
    </section>

    <ProcessFlow />

    {service.faq.length>0 && <section className="kst-section kst-faq-section" aria-labelledby="kst-faq-title">
      <div className="kst-heading"><RevealOnView><h2 id="kst-faq-title">Biežākie jautājumi</h2></RevealOnView></div>
      <div className="kst-faq">{service.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>}

    <section className="kst-end">
      <RevealOnView><h2>Pastāsti par savu projektu</h2></RevealOnView>
      <a className="kst-glass-cta" href="/kontakti">Pieteikt sarunu</a>
    </section>
    <KestrelFooter />
  </main>;
}
