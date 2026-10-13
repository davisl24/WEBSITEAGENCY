import type { Metadata } from "next";
import type { ServiceInfo } from "../../components/KestrelServiceTemplate";
import KestrelHeader from "../../components/KestrelHeader";
import KestrelEditorialFooter from "../../components/KestrelEditorialFooter";
import Image from "next/image";
import heroDark from "../../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroLight from "../../assets/images/balts_fons_optimizets.webp";
import styles from "./page.module.css";

export const metadata: Metadata = {title:"Mājaslapas tavam uzņēmumam | Kestrel",description:"Izstrādājam mājaslapas, kurās ir skaidrs piedāvājums un viegli atrodama saziņas iespēja."};
const service: ServiceInfo = {
  "title": "Mājaslapas tavam uzņēmumam",
  "intro": "Ja uzņēmumam nav skaidras mājaslapas, klientam ir grūtāk saprast piedāvājumu un sazināties. Izveidojam pārskatāmu vietni ar konkrētu nākamo soli.",
  "audience": [
    "Klienti nevar vienuviet atrast pakalpojumus un kontaktus.",
    "Esošā lapa neatspoguļo uzņēmuma piedāvājumu.",
    "Nepieciešama mobilajām ierīcēm pielāgota mājaslapa."
  ],
  "offers": [
    {
      "title": "Landing lapa",
      "detail": "Vienā lapā izskaidrojam vienu piedāvājumu un vedam uz pieteikšanos.",
      "price": "no 200 €",
      "href": "/pakalpojumi/landing-lapa"
    },
    {
      "title": "Uzņēmuma mājaslapa",
      "detail": "Sakārtojam vairākus pakalpojumus atsevišķās lapās.",
      "price": "no 450 €",
      "href": "/pakalpojumi/uznemuma-majaslapa"
    },
    {
      "title": "Mājaslapas uzlabošana",
      "detail": "Novēršam esošās lapas struktūras un lietojamības problēmas.",
      "href": "/pakalpojumi/majaslapas-uzlabosana"
    }
  ],
  "included": [
    {
      "title": "Satura struktūra",
      "detail": "Sakārtojam informāciju pēc klienta vajadzībām."
    },
    {
      "title": "Dizains",
      "detail": "Pielāgojam izskatu uzņēmumam."
    },
    {
      "title": "Mobilā versija",
      "detail": "Pārbaudām telefonā un datorā."
    },
    {
      "title": "SEO pamati",
      "detail": "Virsraksti un metadati."
    },
    {
      "title": "Saziņa",
      "detail": "Saskaņots saziņas veids."
    },
    {
      "title": "Palaišana",
      "detail": "Testējam un publicējam."
    }
  ],
  "faq": [
    {
      "question": "Cik ilgā laikā projekts būs gatavs?",
      "answer": "Termiņu nosakām pēc darba apjoma un saskaņojam pirms sākuma."
    },
    {
      "question": "Vai man nepieciešami gatavi materiāli?",
      "answer": "Izmantojam tavus materiālus un palīdzam tos sakārtot. Jaunu materiālu izveidi vērtējam atsevišķi."
    },
    {
      "question": "Kā nosaka gala cenu?",
      "answer": "Cena atkarīga no apjoma un funkcijām. Pirms izstrādes vienojamies par iekļauto un izmaksām."
    }
  ]
};
const steps = [
  { title: "Izrunājam", detail: "Saprotam uzņēmumu, mērķi un vajadzīgo mājaslapas apjomu." },
  { title: "Saskaņojam", detail: "Vienojamies par saturu, risinājumu un darba apjomu." },
  { title: "Izstrādājam", detail: "Veidojam mājaslapu un pārbaudām tās lietojamību." },
  { title: "Publicējam", detail: "Pārbaudām gatavo lapu un publicējam to." },
];

export default function ServicePage() {
  return (
    <main className={styles.page}>
      <KestrelHeader />

      <section className={styles.heroBand} aria-labelledby="web-service-title">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image src={heroDark} alt="" fill priority sizes="(max-width: 760px) 100vw, 65vw" className={styles.heroImageDark} />
          <Image src={heroLight} alt="" fill priority sizes="(max-width: 760px) 100vw, 65vw" className={styles.heroImageLight} />
        </div>
        <div className={styles.wrap}>
          <div className={styles.hero}>
            <h1 id="web-service-title">{service.title}</h1>
            <p className={styles.intro}>
              Veidojam pārskatāmas mājaslapas, kurās klienti ātri saprot piedāvājumu,
              atrod svarīgāko un var ērti sazināties.
            </p>
            <div className={styles.heroActions}>
              <a className="button button-primary" href="/kontakti">Pieteikt sarunu</a>
              <a className={styles.secondaryCta} href="#risinajumi">Apskatīt risinājumus <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <section className={styles.offersSection} id="risinajumi" aria-labelledby="web-offers-title">
          <h2 id="web-offers-title" className={styles.centerHeading}>Izvēlies piemērotāko risinājumu</h2>
          <div className={styles.offerList}>
            {service.offers.map((offer) => (
              <a className={styles.offerLink} href={offer.href ?? "/kontakti"} key={offer.title}>
                <div className={styles.offerCopy}>
                  <h3>{offer.title}</h3>
                  <p>{offer.detail}</p>
                  {offer.price && <strong className={styles.price}>{offer.price}</strong>}
                </div>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.includedSection} aria-labelledby="web-included-title">
          <div className={styles.splitLead}>
            <h2 id="web-included-title">Ko tu saņem</h2>
            <p>No pārdomātas struktūras līdz gatavai, publicētai mājaslapai.</p>
          </div>
          <div className={styles.includedGrid}>
            {service.included.map((item) => (
              <div className={styles.includedItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="web-process-title">
          <h2 id="web-process-title" className={styles.centerHeading}>No idejas līdz gatavai lapai</h2>
          <div className={styles.processGrid}>
            {steps.map((step) => (
              <div className={styles.step} key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="web-faq-title">
          <div className={styles.splitLead}>
            <h2 id="web-faq-title">Biežākie jautājumi</h2>
          </div>
          <div className={styles.faq}>
            {service.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.end} aria-labelledby="web-end-title">
        <div className={styles.wrap}>
          <h2 id="web-end-title">Pastāsti par savu projektu</h2>
          <p>Izrunāsim ieceri un vienosimies, ar kādu risinājumu būtu jēga sākt.</p>
          <a className="button button-primary" href="/kontakti">Pieteikt sarunu</a>
        </div>
      </section>

      <KestrelEditorialFooter />
    </main>
  );
}
