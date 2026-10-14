import styles from "./page.module.css";
import KestrelHeader from "../components/KestrelHeader";
import KestrelFooter from "../components/KestrelFooter";
import { lvMetadataAlternates } from "../lib/localizedSeo";
import LanguageSwitcher from "../components/LanguageSwitcher";
import type { Metadata } from "next";
import RevealOnView from "../components/RevealOnView";
import ThemeToggle from "../components/ThemeToggle";
import ServicesDropdown from "../components/ServicesDropdown";

export const metadata: Metadata = {
  alternates: lvMetadataAlternates("about"),
  title: "Par mums | Kestrel",
  description:
    "Kestrel veido skaidras un ātras mājaslapas uzņēmumiem ar fokusu uz saprotamu piedāvājumu un ērtu klienta ceļu.",
};

export default function AboutPage() {
  return (
    <main className="service-page about-page">
      <KestrelHeader active="about" />

      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>Par mums</h1>
          <p>
            Veidojam mājaslapas uzņēmumiem tā, lai cilvēkam būtu viegli
            saprast piedāvājumu, uzticēties un izdarīt nākamo soli.
          </p>
          <a className="button button-primary" href="/kontakti">Pieteikt sarunu</a>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-plan-sheet">
            <span className="about-plan-label">Mērķis</span>
            <strong>Ko klientam jāsaprot</strong>
            <div className="about-plan-lines"><span/><span/><span/></div>
          </div>

          <div className="about-plan-arrow">→</div>

          <div className="about-browser">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="about-browser-nav">
              <strong>Kestrel</strong>
              <span/>
            </div>
            <div className="about-browser-body">
              <span className="about-browser-kicker"/>
              <span className="about-browser-title"/>
              <span className="about-browser-copy"/>
              <span className="about-browser-cta"/>
            </div>
          </div>
        </div>
      </section>


      <section className={`service-page-section about-company-section ${styles.companySection}`} aria-labelledby="about-company-title">
        <div className="about-company-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-company-title" className="service-line-stack about-company-title">
              <span className="service-reveal-line"><span>Ko mēs darām</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-company-layout">
          <RevealOnView className="about-company-main">
            <p>
              Kestrel ir mājaslapu izstrādes komanda Latvijā. Palīdzam uzņēmumiem
              izveidot jaunu mājaslapu vai sakārtot esošo, lai klienti viegli
              atrod pakalpojumus un saziņas iespējas.
            </p>
          </RevealOnView>

          <RevealOnView className="about-company-side" delay={120}>
            <div>
              <span>Ko piedāvājam</span>
              <p>Landing lapas, uzņēmumu mājaslapas un esošo vietņu uzlabošanu.</p>
            </div>
            <div>
              <span>Pēc palaišanas</span>
              <p>Ja vajag, turpinām ar hostingu, tehnisko uzturēšanu un nākamajiem uzlabojumiem.</p>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section about-thinking-section" aria-labelledby="about-thinking-title">
        <div className="about-thinking-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-thinking-title" className="service-line-stack about-thinking-title">
              <span className="service-reveal-line"><span>Kā sakārtojam mājaslapu</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-thinking-copy">
              Ja cilvēks nevar ātri atrast pakalpojumus vai kontaktus, viņš var aiziet.
              Mēs izceļam svarīgāko un parādām skaidru nākamo soli.
            </p>
          </RevealOnView>
        </div>

        <div className={styles.proofGrid}>
          <RevealOnView className={styles.proofStep} delay={80}>
            <div className={[styles.proofVisual,styles.proofBusy].join(" ")} aria-hidden="true">
              <span/><span/><span/><span/><span/>
            </div>
            <h3>Grūti atrast vajadzīgo</h3>
            <p>Pakalpojumi un kontakti pazūd starp citu informāciju. Apmeklētājam jāmeklē, kur pieteikties.</p>
          </RevealOnView>
          <RevealOnView className={styles.proofStep} delay={180}>
            <div className={[styles.proofVisual,styles.proofClear].join(" ")} aria-hidden="true">
              <span/><span/><span/>
            </div>
            <h3>Piedāvājums ir uzreiz saprotams</h3>
            <p>Parādām galveno pakalpojumu, īsu skaidrojumu un redzamu saziņas pogu.</p>
          </RevealOnView>
        </div>
      </section>

      <section className={`service-page-section about-working-section ${styles.workingSection}`} aria-labelledby="about-working-title">
        <div className="about-working-intro">
          <RevealOnView className="line-mask-reveal">
            <h2 id="about-working-title" className="service-line-stack about-working-title">
              <span className="service-reveal-line"><span>Kā notiek sadarbība</span></span>
            </h2>
          </RevealOnView>
        </div>

        <RevealOnView className={styles.workingTimeline}>
          <RevealOnView className={styles.workingItem} delay={70}>
            <span className={styles.workingDot} aria-hidden="true"/>
            <span className={styles.workingIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="5"/><path d="M16 3v6M16 23v6M3 16h6M23 16h6"/></svg>
            </span>
            <h3>Vienojamies par uzdevumu</h3>
            <p>Izrunājam mērķi, saturu, darba apjomu un nākamos soļus.</p>
          </RevealOnView>
          <RevealOnView className={styles.workingItem} delay={170}>
            <span className={styles.workingDot} aria-hidden="true"/>
            <span className={styles.workingIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="3"/><path d="M11 11h11M11 16h11M11 21h6"/></svg>
            </span>
            <h3>Parādām progresu</h3>
            <p>Pārskatām rezultātu un izmaiņas saskaņojam pirms ieviešanas.</p>
          </RevealOnView>
          <RevealOnView className={styles.workingItem} delay={270}>
            <span className={styles.workingDot} aria-hidden="true"/>
            <span className={styles.workingIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><path d="M12 21l-1-7c3-6 8-9 15-9 0 7-3 12-9 15l-5 1Z"/><path d="M11 14l-5 1-2 5 7-1M18 21l-1 7-5 1 1-7M9 23l-3 3M24 9h.01"/></svg>
            </span>
            <h3>Nododam pārbaudītu lapu</h3>
            <p>Pārbaudām svarīgākās darbības un vienojamies par uzturēšanu, ja tā vajadzīga.</p>
          </RevealOnView>
        </RevealOnView>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Parunājam par</span></span>
            <span className="service-reveal-line"><span>tavu mājaslapu</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Atsūti īsu aprakstu par uzņēmumu un pateiksim, ar ko būtu jēga sākt.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/kontakti">Pieteikt sarunu</a>
        </RevealOnView>
      </section>

      <KestrelFooter />
    </main>
  );
}
