import KestrelHeader from "./KestrelHeader";
import KestrelFooter from "./KestrelFooter";
import RevealOnView from "./RevealOnView";
import ServiceProcess from "./ServiceProcess";
import styles from "./KestrelServiceTemplate.module.css";

export type ServiceInfo = {
  title:string;
  intro:string;
  audience:string[];
  offers:{title:string;detail:string;price?:string;href?:string}[];
  included:{title:string;detail:string}[];
  faq:{question:string;answer:string}[];
  kind?:"commerce"|"seo"|"standard";
};

function OfferIcon({index,commerce}:{index:number;commerce:boolean}){
  return <span className={styles.offerIcon} aria-hidden="true">
    {commerce && index===0 && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="5" width="24" height="23" rx="3"/><path d="M4 12h24M11 17h7M11 22h11"/></svg>}
    {commerce && index===1 && <svg viewBox="0 0 32 32" fill="none"><path d="M4 7h4l3 15h15l3-11H9M13 27h.01M24 27h.01"/></svg>}
    {commerce && index===2 && <svg viewBox="0 0 32 32" fill="none"><path d="M6 10h20v13H6zM11 10V6h10v4M10 17h12M16 13v8"/></svg>}
    {!commerce && <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11"/><path d="M11 16h10M16 11v10"/></svg>}
  </span>;
}

function CommercePreview(){
  return <div className={styles.commercePreview} aria-label="Ilustratīvs interneta veikala produktu izvēles un pasūtīšanas piemērs" role="img">
    <div className={styles.shopTop}><b>Veikala piemērs</b><span>Produkti　 Grozs</span></div>
    <div className={styles.shopProducts}>
      {[0,1,2].map(i=><div className={styles.shopProduct} key={i}><span className={styles.shopProductImage}/><span className={styles.shopProductLine}/><span className={styles.shopProductPrice}/></div>)}
    </div>
    <div className={styles.shopCheckout}><span>Produktu izvēle</span><span aria-hidden="true">→</span><span>Grozs</span><span aria-hidden="true">→</span><strong>Pasūtījums</strong></div>
  </div>;
}

export default function KestrelServiceTemplate({service}:{service:ServiceInfo}){
  const commerce=service.kind==="commerce";
  const seo=service.kind==="seo";
  return <main className={styles.page}>
    <KestrelHeader />
    <section className={styles.hero} aria-labelledby="service-title">
      <div className={styles.wrap}>
        <div className={styles.heroCopy}>
          <h1 id="service-title">{service.title}</h1>
          <p>{service.intro}</p>
          <a className={`${styles.cta} kestrel-unified-cta`} href="/kontakti">Pieteikt sarunu</a>
        </div>
      </div>
    </section>
    <div className={styles.wrap}>
      {commerce && <RevealOnView className={styles.commerceVisual}><CommercePreview /></RevealOnView>}
      <section className={styles.section} aria-labelledby="service-offers-title">
        <h2 id="service-offers-title">{commerce?"Kā veidojam pirkuma ceļu":seo?"Ko pārbaudām un uzlabojam":"Ko piedāvājam"}</h2>
        <div className={styles.offers}>
          {service.offers.map((item,index)=>{
            const inner=<><OfferIcon index={index} commerce={commerce}/><div className={styles.offerContent}><h3>{item.title}</h3><p>{item.detail}</p></div>{item.price&&<strong>{item.price}</strong>}{item.href&&<span className={styles.offerArrow} aria-hidden="true">↗</span>}</>;
            return item.href?<a href={item.href} className={styles.offer} key={item.title}>{inner}</a>:<div className={styles.offer} key={item.title}>{inner}</div>;
          })}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="service-included-title">
        <h2 id="service-included-title">{seo?"Ko saņem pēc pārbaudes":commerce?"Kas ietilpst veikala izstrādē":"Kas ir iekļauts"}</h2>
        <div className={styles.included}>
          {service.included.map((item,i)=><RevealOnView key={item.title} className={styles.includedItem} delay={i*80}><h3>{item.title}</h3><p>{item.detail}</p></RevealOnView>)}
        </div>
      </section>
      <ServiceProcess />
      {service.faq.length>0&&<section className={styles.section} aria-labelledby="service-faq-title"><h2 id="service-faq-title">Biežākie jautājumi</h2><div className={styles.faq}>{service.faq.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>}
      <section className={styles.end}>
        <h2>Pastāsti par savu projektu</h2>
        <p>Izrunāsim vajadzības un vienosimies par piemērotāko nākamo soli</p>
        <a href="/kontakti" className={`${styles.cta} kestrel-unified-cta`}>Pieteikt sarunu</a>
      </section>
    </div>
    <KestrelFooter />
  </main>;
}
