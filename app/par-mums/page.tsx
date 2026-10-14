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
