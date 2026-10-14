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
    "Kestrel veido skaidras un ātras mājaslapas mazajiem uzņēmumiem ar fokusu uz saprotamu piedāvājumu un ērtu klienta ceļu.",
};

export default function AboutPage() {
  return (
    <main className="service-page about-page">
      <KestrelHeader active="about" />

      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>Par mums</h1>
          <p>
            Veidojam mājaslapas mazajiem uzņēmumiem tā, lai cilvēkam būtu viegli
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
              <span className="service-reveal-line"><span>Web izstrāde ar skaidru mērķi</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-company-layout">
          <RevealOnView className="about-company-main">
            <p>
              Kestrel ir web izstrādes komanda Latvijā. Strādājam ar mazajiem
              uzņēmumiem, kuriem vajag skaidru, ātru un profesionālu mājaslapu,
              nevis sarežģītu digitālu projektu bez konkrēta mērķa.
            </p>
          </RevealOnView>

          <RevealOnView className="about-company-side" delay={120}>
            <div>
              <span>Ko veidojam</span>
              <p>Landing lapas, uzņēmumu mājaslapas un esošo lapu uzlabojumus.</p>
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
              <span className="service-reveal-line"><span>Skaidrība pirms efektiem</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-thinking-copy">
              Labs dizains nav tikai skaists ekrāns. Tam jāpalīdz cilvēkam ātri saprast,
              kur viņš ir, ko saņems un ko darīt tālāk.
            </p>
          </RevealOnView>
        </div>

        <div className="about-thinking-layout">
          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}>
              <h3>Skaidrs mērķis</h3>
              <p>Nosakām, ko apmeklētājam jāsaprot un kāda darbība jāveic.</p>
            </RevealOnView>
            <RevealOnView className="about-principle" delay={140}>
              <h3>Pārdomāts saturs</h3>
              <p>Galveno informāciju parādām īstajā secībā, bez liekiem blokiem.</p>
            </RevealOnView>
            <RevealOnView className="about-principle" delay={220}>
              <h3>Ērta lietošana</h3>
              <p>Pārbaudām, vai lapa ir saprotama gan datorā, gan telefonā.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section about-working-section" aria-labelledby="about-working-title">
        <div className="about-working-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-working-title" className="service-line-stack about-working-title">
              <span className="service-reveal-line"><span>Vienkārša komunikācija</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-working-copy">
          <RevealOnView delay={0}>
            <p>
              Mēs negribam sarežģīt procesu ar liekām prezentācijām un tehniskiem vārdiem
              tikai tāpēc, lai tas izklausītos dārgāk.
            </p>
          </RevealOnView>

          <RevealOnView delay={120}>
            <p>
              Ja kaut ko nav jēgas būvēt, pasakām. Ja ir skaidrs nākamais solis,
              ejam uz izpildi un pabeidzam to pirms pievienojam nākamo.
            </p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Parunājam par</span></span>
            <span className="service-reveal-line"><span>tavu lapu</span></span>
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
