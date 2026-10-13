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
          <h1>Mājaslapas ar domu</h1>
          <p>
            Veidojam mājaslapas mazajiem uzņēmumiem tā, lai cilvēkam būtu viegli
            saprast piedāvājumu, uzticēties un izdarīt nākamo soli.
          </p>
          <a className="button button-primary" href="/kontakti">Pastāstīt par projektu</a>
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
              <strong>North</strong>
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
          <RevealOnView className="line-mask-reveal about-thinking-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Ja lapa izskatās labi</span></span>
              <span className="service-reveal-line"><span>bet cilvēks apjūk</span></span>
              <span className="service-reveal-line"><span>darbs nav pabeigts</span></span>
            </p>
          </RevealOnView>

          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}>
              <h3>Skaidrs mērķis</h3>
              <p>Vispirms saprotam, kādu darbību lapai jāpanāk.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={150}>
              <h3>Mazāk lieka</h3>
              <p>Neliekam sekcijas tikai tāpēc, lai lapa izskatītos garāka.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={240}>
              <h3>Reāla lietojamība</h3>
              <p>Desktop un mobile pārbaudām kā īstu klienta ceļu, nevis tikai maketu.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section about-focus-section" aria-labelledby="about-focus-title">
        <div className="about-focus-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-focus-title" className="service-line-stack about-focus-title">
              <span className="service-reveal-line"><span>Mazāk lieka, vairāk skaidrības</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-focus-copy">
              Izņemam elementus, kas apgrūtina uztveri, un izceļam svarīgāko — piedāvājumu, uzticamību un saziņu.
            </p>
          </RevealOnView>
        </div>

        <div className={styles.focusExamples}>
          <RevealOnView className={styles.focusExample}>
            <h3>Ja viss ir vienlīdz svarīgs</h3>
            <p>Apmeklētājam jāmeklē, kur sākt un kā sazināties</p>
          </RevealOnView>
          <RevealOnView className={styles.focusExample} delay={110}>
            <h3>Ja galvenais ir skaidri izcelts</h3>
            <p>Cilvēks redz pakalpojumu un nākamo soli bez liekas meklēšanas</p>
          </RevealOnView>
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
          <a className="button button-primary" href="/kontakti">Pastāstīt par projektu</a>
        </RevealOnView>
      </section>

      <KestrelFooter />
    </main>
  );
}
