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

const steps = [
  { title: "Izrunājam", detail: "Noskaidrojam mērķi un nepieciešamo apjomu." },
  { title: "Saskaņojam", detail: "Vienojamies par saturu un darba gaitu." },
  { title: "Izstrādājam", detail: "Veicam darbus un pārbaudām rezultātu." },
  { title: "Publicējam", detail: "Nododam rezultātu un vienojamies par nākamo soli." },
];

export function KestrelProcessIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index === 0 && <><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5"/><path d="M16 3v6M16 23v6M3 16h6M23 16h6"/></>}
    {index === 1 && <><rect x="5" y="5" width="22" height="22" rx="3"/><path d="M11 11h11M11 16h11M11 21h7"/></>}
    {index === 2 && <><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 12h24M13 16l-4 3 4 3M19 16l4 3-4 3"/></>}
    {index === 3 && <><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z"/><path d="m17 15 0 0M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01"/></>}
  </svg>;
}

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

    <section className="kst-section kst-process-section" aria-labelledby="kst-process">
      <div className="kst-heading"><RevealOnView><h2 id="kst-process">Kā strādājam</h2></RevealOnView></div>
      <div className="kst-process">
        {steps.map((step,index) => <RevealOnView className="kst-process-step" delay={110+index*95} key={step.title}>
          <span className="kst-process-icon"><KestrelProcessIcon index={index}/></span>
          <h3>{step.title}</h3><p>{step.detail}</p>
        </RevealOnView>)}
      </div>
    </section>

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
