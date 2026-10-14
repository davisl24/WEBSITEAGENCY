import KestrelHeader from "./KestrelHeader";
import KestrelFooter from "./KestrelFooter";
import RevealOnView from "./RevealOnView";
import ProcessFlow from "./ProcessFlow";
import ProcessFlowEn from "./ProcessFlowEn";
import ProcessFlowRu from "./ProcessFlowRu";
import type { Language } from "../lib/localizedSeo";

export type ServiceInfo = {
  kind?: "web"|"commerce"|"seo"|"uiux"|"hosting"|"landing"|"company"|"upgrade";
  title: string;
  intro: string;
  audience: string[];
  offers: { title: string; detail: string; price?: string; href?: string }[];
  included: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
};

function OfferIcon({kind,index}:{kind:NonNullable<ServiceInfo["kind"]>,index:number}){
  const icon:Record<NonNullable<ServiceInfo["kind"]>,string[]>={
    web:["window","pages","refresh"],commerce:["grid","cart","plug"],
    seo:["search","code","type"],uiux:["search","flow","layout"],
    hosting:["server","shield","refresh"],landing:["page","window","type"],
    company:["window","pages","flow"],upgrade:["search","layout","settings"]
  };
  const type=icon[kind][index%3];
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type==="window"&&<><rect x="4" y="5" width="24" height="22" rx="3"/><path d="M4 12h24M10 18h12M10 22h8"/></>}
    {type==="page"&&<><rect x="7" y="3" width="18" height="26" rx="2"/><path d="M11 12h10M11 17h10M11 22h7"/></>}
    {type==="pages"&&<><rect x="9" y="7" width="19" height="21" rx="2"/><path d="M4 23V5a2 2 0 0 1 2-2h16M13 13h11M13 18h8"/></>}
    {type==="grid"&&<><rect x="4" y="5" width="24" height="22" rx="3"/><path d="M4 12h24M12 12v15M20 12v15"/></>}
    {type==="cart"&&<><path d="M5 7h3l4 15h13l3-11H10"/><circle cx="14" cy="26" r="1.5"/><circle cx="23" cy="26" r="1.5"/></>}
    {type==="plug"&&<><path d="M10 8v8M22 8v8M8 16h16v3a8 8 0 0 1-16 0v-3ZM16 27v3"/></>}
    {type==="search"&&<><circle cx="14" cy="14" r="9"/><path d="m21 21 7 7"/></>}
    {type==="code"&&<><rect x="3" y="5" width="26" height="22" rx="3"/><path d="m12 12-5 5 5 5m8-10 5 5-5 5"/></>}
    {type==="type"&&<><path d="M5 7h22M16 7v20M10 27h12M7 13h6M19 13h6"/></>}
    {type==="flow"&&<><rect x="3" y="11" width="9" height="10" rx="2"/><rect x="20" y="3" width="9" height="10" rx="2"/><rect x="20" y="19" width="9" height="10" rx="2"/><path d="M12 16h4v-8h4M16 16v8h4"/></>}
    {type==="layout"&&<><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M3 12h26M13 12v16M7 18h3M17 18h8"/></>}
    {type==="server"&&<><rect x="3" y="5" width="26" height="9" rx="2"/><rect x="3" y="18" width="26" height="9" rx="2"/><path d="M9 10h1M9 23h1M16 10h8M16 23h8"/></>}
    {type==="shield"&&<><path d="m16 3 11 5v8c0 7-4 11-11 13C9 27 5 23 5 16V8l11-5Z"/><path d="m11 16 3 3 7-7"/></>}
    {type==="refresh"&&<><path d="M26 13A11 11 0 0 0 7 9l-3 3m0-7v7h7M6 19a11 11 0 0 0 19 4l3-3m0 7v-7h-7"/></>}
    {type==="settings"&&<><circle cx="16" cy="16" r="6"/><path d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l4 4m10 10 4 4M25 7l-4 4M11 21l-4 4"/></>}
  </svg>;
}

function LandingPreview({lang}:{lang:Language}){
  const words={lv:{offer:"Viens piedāvājums",cta:"Pieteikties"},en:{offer:"One clear offer",cta:"Enquire"},ru:{offer:"Одно предложение",cta:"Оставить заявку"}}[lang];
  return <div className="kst-landing-preview" role="img" aria-label="Vienas lapas dizaina piemērs ar skaidru piedāvājumu un vienu primāro pogu">
    <div className="kst-landing-browser">
      <div className="kst-landing-nav"><b>Kestrel</b><span>☰</span></div>
      <div className="kst-landing-content">
        <span className="kst-landing-eyebrow"/>
        <strong>{words.offer}</strong>
        <span className="kst-landing-description"/>
        <span className="kst-landing-description short"/>
        <span className="kst-landing-demo-cta">{words.cta}</span>
      </div>
      <div className="kst-landing-bottom"><span/><span/><span/></div>
    </div>
  </div>;
}

function CommercePreview({lang}:{lang:Language}) {
  const words={lv:{store:"Veikals",catalog:"Katalogs",cart:"Grozs (2)",product:"Produkts",order:"Pasūtījums",items:"2 produkti",next:"Turpināt"},en:{store:"Store",catalog:"Catalogue",cart:"Cart (2)",product:"Product",order:"Your order",items:"2 items",next:"Continue"},ru:{store:"Магазин",catalog:"Каталог",cart:"Корзина (2)",product:"Товар",order:"Заказ",items:"2 товара",next:"Далее"}}[lang];
  return <div className="kst-commerce-preview" role="img" aria-label="Ilustratīvs interneta veikala piemērs: preču katalogs, grozs un pasūtījuma noformēšana">
    <div className="kst-commerce-window">
      <div className="kst-commerce-window-top"><strong>{words.store}</strong><span>{words.catalog}</span><span>{words.cart}</span></div>
      <div className="kst-commerce-product-grid">
        <div><span className="kst-product-shape shape-one"/><i/><small>{words.product} A</small></div>
        <div><span className="kst-product-shape shape-two"/><i/><small>{words.product} B</small></div>
        <div><span className="kst-product-shape shape-three"/><i/><small>{words.product} C</small></div>
      </div>
    </div>
    <div className="kst-commerce-checkout"><strong>{words.order}</strong><span>{words.items}</span><div className="kst-checkout-line"/><div className="kst-checkout-line short"/><span className="kst-checkout-button">{words.next}</span></div>
  </div>;
}

export default function KestrelServiceTemplate({ service, lang="lv" }: { service: ServiceInfo,lang?:Language }) {
  const kind=service.kind??(service.title==="Tavs veikals tiešsaistē"?"commerce":"web");
  const isCommerce=kind==="commerce";
  const copy={lv:{cta:"Pieteikt sarunu",offers:"Ko piedāvājam",commerce:"No kataloga līdz pasūtījumam",included:"Kas ir iekļauts",faq:"Biežākie jautājumi",end:"Pastāsti par savu projektu"},en:{cta:"Discuss your project",offers:"What we offer",commerce:"From catalogue to checkout",included:"What is included",faq:"Frequently asked questions",end:"Tell us about your project"},ru:{cta:"Обсудить проект",offers:"Что предлагаем",commerce:"От каталога до заказа",included:"Что входит",faq:"Частые вопросы",end:"Расскажите о вашем проекте"}}[lang];
  const contact=lang==="en"?"/en/contact":lang==="ru"?"/ru/kontakty":"/kontakti";
  return <main className="kestrel-service kestrel-service-v2 kestrel-service-unified">
    <KestrelHeader lang={lang} />
    <section className="kst-hero" aria-label="Service">
      <div className="kst-hero-copy">
        <RevealOnView><h1>{service.title}</h1></RevealOnView>
        <RevealOnView delay={70}><p className="kst-intro">{service.intro}</p></RevealOnView>
        <a className="kst-hero-cta" href={contact}>{copy.cta}</a>
      </div>
      {isCommerce && <CommercePreview lang={lang}/>}

    </section>

    <section className={"kst-section kst-offers-section "+(kind==="landing"?"kst-offers-landing":"")} aria-labelledby="kst-offers">
      <div className="kst-heading"><RevealOnView><h2 id="kst-offers">{isCommerce ? copy.commerce : copy.offers}</h2></RevealOnView></div>
      <div className="kst-offers">
        {service.offers.map((item,index) => {
          const inside = <><span className="kst-offer-icon"><OfferIcon kind={kind} index={index%3}/></span><div className="kst-offer-body"><h3>{item.title}</h3><p>{item.detail}</p>{item.price && <strong>{item.price}</strong>}</div>{item.href && <span className="kst-offer-arrow" aria-hidden="true">↗</span>}</>;
          return item.href ? <a key={item.title} href={item.href} className="kst-offer">{inside}</a> : <div key={item.title} className="kst-offer">{inside}</div>;
        })}
      </div>
      {kind==="landing" && <LandingPreview lang={lang}/>}
    </section>

    <section className="kst-section kst-included-section" aria-labelledby="kst-included">
      <div className="kst-heading"><RevealOnView><h2 id="kst-included">{copy.included}</h2></RevealOnView></div>
      <div className="kst-included">
        {service.included.map((item,index) => <RevealOnView className="kst-included-item" delay={index*70} key={item.title}>
          <span aria-hidden="true" className="kst-included-mark">✓</span><div><h3>{item.title}</h3><p>{item.detail}</p></div>
        </RevealOnView>)}
      </div>
    </section>

    {lang==="en"?<ProcessFlowEn/>:lang==="ru"?<ProcessFlowRu/>:<ProcessFlow/>}

    {service.faq.length>0 && <section className="kst-section kst-faq-section" aria-labelledby="kst-faq-title">
      <div className="kst-heading"><RevealOnView><h2 id="kst-faq-title">{copy.faq}</h2></RevealOnView></div>
      <div className="kst-faq">{service.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>}

    <section className="kst-end">
      <RevealOnView><h2>{copy.end}</h2></RevealOnView>
      <a className="kst-glass-cta" href={contact}>{copy.cta}</a>
    </section>
    <KestrelFooter lang={lang}/>
  </main>;
}
