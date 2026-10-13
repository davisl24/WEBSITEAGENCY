import type { Metadata } from "next";
import Image from "next/image";
import heroBg from "../../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "../../assets/images/balts_fons_optimizets.webp";
import type { ServiceInfo } from "../../components/KestrelServiceTemplate";
import KestrelHeader from "../../components/KestrelHeader";
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

      <section className={styles.hero} aria-labelledby="web-service-title">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image src={heroBg} alt="" fill priority sizes="100vw" className={styles.heroDark} />
          <Image src={heroBgLight} alt="" fill priority sizes="100vw" className={styles.heroLight} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.wrap}>
          <div className={styles.heroCopy}>
            <h1 id="web-service-title">{service.title}</h1>
            <p className={styles.intro}>
              Veidojam pārskatāmas mājaslapas, kurās klienti ātri saprot piedāvājumu,
              atrod svarīgāko informāciju un var ērti sazināties.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="/kontakti">Pieteikt sarunu</a>
              <a className={styles.secondaryLink} href="#web-offers-title">
                Skatīt risinājumus <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <section className={styles.section} aria-labelledby="web-offers-title">
          <h2 id="web-offers-title">Izvēlies piemērotāko risinājumu</h2>
          <div className={styles.offerList}>
            {service.offers.map((offer) => (
              <a className={styles.offerLink} href={offer.href ?? "/kontakti"} key={offer.title}>
                <h3>{offer.title}</h3>
                <p>{offer.detail}</p>
                {offer.price && <span className={styles.price}>{offer.price}</span>}
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.includedSection}`} aria-labelledby="web-included-title">
          <h2 id="web-included-title">Ko tu saņem</h2>
          <div className={styles.includedGrid}>
            {service.included.map((item) => (
              <div className={styles.includedItem} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="web-process-title">
          <h2 id="web-process-title">No idejas līdz gatavai lapai</h2>
          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <div className={styles.step} key={step.title}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <span className={styles.stepIcon} aria-hidden="true">
                  {index === 0 && <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" /><circle cx="16" cy="16" r="5" /><path d="M16 3v6M16 23v6M3 16h6M23 16h6" /></svg>}
                  {index === 1 && <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="3" /><path d="M11 11h11M11 16h11M11 21h7" /></svg>}
                  {index === 2 && <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M4 12h24M13 16l-4 3 4 3M19 16l4 3-4 3" /></svg>}
                  {index === 3 && <svg viewBox="0 0 32 32" fill="none"><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z" /><path d="m17 15 0 0M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01" /></svg>}
                </span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="web-faq-title">
          <h2 id="web-faq-title">Biežākie jautājumi</h2>
          <div className={styles.faq}>
            {service.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.end} aria-labelledby="web-end-title">
          <h2 id="web-end-title">Pastāsti par savu projektu</h2>
          <p>Izrunāsim ieceri un vienosimies, ar kādu risinājumu būtu jēga sākt.</p>
          <a className={styles.primaryCta} href="/kontakti">
            Pieteikt sarunu <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>

      <footer className={`${styles.footer} site-footer`}>
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-wordmark-block">
              <a href="/" className="footer-wordmark">Kestrel</a>
              <p className="footer-statement">Mājaslapas ar skaidru struktūru un pārdomātu dizainu.</p>
            </div>
            <div className="footer-links">
              <div>
                <span>Navigācija</span>
                <a href="/#services">Pakalpojumi</a>
                <a href="/#process">Process</a>
                <a href="/par-mums">Par mums</a>
                <a href="/kontakti">Kontakti</a>
              </div>
              <div>
                <span>Saziņa</span>
                <a className="footer-contact-link" href="/kontakti">
                  Pieteikt sarunu <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Kestrel</span></div>
        </div>
      </footer>
    </main>
  );
}
