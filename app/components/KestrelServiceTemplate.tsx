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
  const icon=kind==="seo"?"search":kind==="uiux"?"layout":kind==="hosting"?"server":kind==="commerce"?"cart":kind==="upgrade"?"refresh":kind==="company"?"site":kind==="landing"?"page":"site";
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {icon==="search"&&<><circle cx="14" cy="14" r="8"/><path d="m20 20 8 8"/>{index===0&&<path d="m10 14 3 3 5-6"/>}{index===1&&<path d="M14 8v12"/>}{index===2&&<path d="M9 16h10"/>}</>}
    {icon==="layout"&&<><rect x="4" y="5" width="24" height="22" rx="3"/><path d={index===0?"M4 13h24M11 13v14":index===1?"M4 12h24M17 12v15":"M4 12h24M8 19h16M8 23h10"}/></>}
    {icon==="server"&&<><rect x="4" y="5" width="24" height="9" rx="2"/><rect x="4" y="18" width="24" height="9" rx="2"/><path d="M9 10h1M9 23h1M15 10h8M15 23h8"/></>}
    {icon==="cart"&&<><path d="M5 7h3l4 15h13l3-11H10"/><circle cx="14" cy="26" r="1.5"/><circle cx="23" cy="26" r="1.5"/></>}
    {icon==="refresh"&&<><path d="M26 13a11 11 0 0 0-19-4l-3 3m0-7v7h7M6 19a11 11 0 0 0 19 4l3-3m0 7v-7h-7"/></>}
    {(icon==="site"||icon==="page")&&<><rect x="4" y="5" width="24" height="22" rx="3"/><path d="M4 12h24M10 18h12M10 22h8"/></>}
  </svg>;
}

function LandingPreview(){
  return <div className="kst-landing-preview" role="img" aria-label="Vienas lapas dizaina piemērs ar skaidru piedāvājumu un vienu primāro pogu">
    <div className="kst-landing-browser">
      <div className="kst-landing-nav"><b>Kestrel</b><span>☰</span></div>
      <div className="kst-landing-content">
        <span className="kst-landing-eyebrow"/>
        <strong>Viens piedāvājums</strong>
        <span className="kst-landing-description"/>
        <span className="kst-landing-description short"/>
        <span className="kst-landing-demo-cta">Pieteikties</span>
      </div>
      <div className="kst-landing-bottom"><span/><span/><span/></div>
    </div>
  </div>;
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
      {isCommerce && <CommercePreview />}

    </section>

    <section className={"kst-section kst-offers-section "+(kind==="landing"?"kst-offers-landing":"")} aria-labelledby="kst-offers">
      <div className="kst-heading"><RevealOnView><h2 id="kst-offers">{isCommerce ? copy.commerce : copy.offers}</h2></RevealOnView></div>
      <div className="kst-offers">
        {service.offers.map((item,index) => {
          const inside = <><span className="kst-offer-icon"><OfferIcon kind={kind} index={index%3}/></span><div className="kst-offer-body"><h3>{item.title}</h3><p>{item.detail}</p>{item.price && <strong>{item.price}</strong>}</div>{item.href && <span className="kst-offer-arrow" aria-hidden="true">↗</span>}</>;
          return item.href ? <a key={item.title} href={item.href} className="kst-offer">{inside}</a> : <div key={item.title} className="kst-offer">{inside}</div>;
        })}
      </div>
      {kind==="landing" && <LandingPreview />}
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
    <KestrelFooter />
  </main>;
}
