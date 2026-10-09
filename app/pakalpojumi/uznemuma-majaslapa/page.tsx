import KestrelHeader from "../../components/KestrelHeader";
import KestrelFooter from "../../components/KestrelFooter";
import { lvMetadataAlternates } from "../../lib/localizedSeo";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ServicePricingFaq from "../../components/ServicePricingFaq";
import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata: Metadata = {
  alternates: lvMetadataAlternates("company"),
  title: "Uzņēmuma mājaslapas izstrāde | Kestrel",
  description:
    "Uzņēmuma mājaslapas ar skaidru struktūru, uzticamu pirmo iespaidu un ērtu ceļu līdz kontaktam.",
};

export default function CompanyWebsitePage() {
  return (
    <main className="service-page company-page">
      <KestrelHeader />

      <section className="service-page-hero company-service-hero"><h1>Visa informācija vienuviet</h1></section>

      <section className="service-page-section company-fit-section" aria-labelledby="company-fit-title">
        <div className="company-fit-intro">
          <RevealOnView>
            <p className="service-page-kicker">Kad tas der</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-fit-title" className="service-line-stack company-fit-title">
              <span className="service-reveal-line"><span>Kad ar vienu lapu</span></span>
              <span className="service-reveal-line"><span>vairs nepietiek</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-fit-copy">
              Ja klientam jāizskaidro vairāki pakalpojumi, jāparāda uzticība un jādod vairāk nekā viens ceļš līdz kontaktam.
            </p>
          </RevealOnView>
        </div>

        <div className="company-fit-layout">
          <RevealOnView className="company-fit-statement line-mask-reveal">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Klientam nav jāmin</span></span>
              <span className="service-reveal-line"><span>kur meklēt svarīgo</span></span>
              <span className="service-reveal-line"><span>informāciju</span></span>
            </p>
          </RevealOnView>

          <div className="company-fit-side">
            <RevealOnView className="company-fit-item" delay={60}>
              <h3>Vairāki pakalpojumi</h3>
              <p>Katram piedāvājumam sava vieta, bet viss joprojām jūtas kā viena sistēma.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={150}>
              <h3>Uzticības saturs</h3>
              <p>Par uzņēmumu, darbiem, atsauksmēm un to, kā jūs strādājat.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={240}>
              <h3>Vairāki ceļi</h3>
              <p>Kontakts, pieteikšanās, zvans vai cita darbība atkarībā no vajadzības.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section company-structure-section" id="struktura" aria-labelledby="company-structure-title">
        <div className="company-structure-intro">
          <RevealOnView>
            <p className="service-page-kicker">Struktūra</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-structure-title" className="service-line-stack company-structure-title">
              <span className="service-reveal-line"><span>Katram saturam</span></span>
              <span className="service-reveal-line"><span>sava vieta</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-structure-copy">
              Nevis vairāk sadaļu tikai tāpēc, ka var, bet skaidra arhitektūra tam, ko klientam tiešām vajag redzēt.
            </p>
          </RevealOnView>
        </div>

        <div className="company-page-system" aria-label="Uzņēmuma mājaslapas struktūras piemērs">
          <RevealOnView className="company-page-main">
            <div className="company-page-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="company-page-browser-nav">
                <strong>North</strong>
                <div><span>Pakalpojumi</span><span>Par mums</span><span>Kontakti</span></div>
              </div>
              <div className="company-page-browser-hero">
                <div>
                  <span className="company-page-kicker"/>
                  <span className="company-page-title"/>
                  <span className="company-page-copy"/>
                  <span className="company-page-cta"/>
                </div>
                <span className="company-page-art"/>
              </div>
              <div className="company-page-browser-footer">
                <span>Sākumlapa</span>
                <small>Galvenā doma un virziens</small>
              </div>
            </div>
          </RevealOnView>

          <div className="company-page-stack">
            <RevealOnView className="company-page-sheet company-page-sheet-services" delay={80}>
              <div className="company-page-sheet-top">
                <span>Pakalpojumi</span>
                <small>Ko tu piedāvā un kam</small>
              </div>
              <div className="company-page-sheet-preview" aria-hidden="true">
                <span/><span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-about" delay={170}>
              <div className="company-page-sheet-top">
                <span>Par mums</span>
                <small>Kāpēc tev uzticēties</small>
              </div>
              <div className="company-page-sheet-preview company-page-sheet-preview-about" aria-hidden="true">
                <span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-contact" delay={260}>
              <div className="company-page-sheet-top">
                <span>Kontakti</span>
                <small>Skaidrs nākamais solis</small>
              </div>
              <div className="company-page-sheet-form" aria-hidden="true">
                <span/><span/><span/>
              </div>
            </RevealOnView>
          </div>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="company-process-title">
        <div className="service-process-intro">
          <RevealOnView className="service-process-kicker">
            <p className="service-page-kicker">Kā strādājam</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="company-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>No satura līdz live</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Vispirms saprotam uzņēmumu un klienta ceļu, tad saliekam saturu, dizainu un izstrādi vienā sistēmā.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Uzņēmuma mājaslapas izstrādes process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Mērķis</span>
            <p>Ko klientam jāsaprot un kādai darbībai jāseko tālāk.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Saturs</span>
            <p>Sakārtojam informāciju un nosakām, kas tiešām ir vajadzīgs.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Dizains</span>
            <p>Veidojam vizuālo sistēmu un izstrādājam visu lapu.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Live</span>
            <p>Pārbaudām, salabojam detaļas un palaižam lapu dzīvē.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Uzņēmuma mājaslapa"
        pricingNote="Izmaksas nosaka lapu skaits, satura apjoms un vajadzīgās integrācijas."
        included={["Lapu skaits un informācijas struktūra","Dizains un mobilais izkārtojums","Kontaktformas un vajadzīgās integrācijas","Satura sagatavošanas un uzturēšanas apjoms"]}
        questions={[{"question":"Cik lapu būs manai mājaslapai?","answer":"To nosaka informācijas daudzums. Sākumā vienojamies par nepieciešamajām sadaļām un lapu struktūru."},{"question":"Vai varēs vēlāk pievienot jaunas lapas?","answer":"Jā, izstrādājot struktūru, ņemam vērā iespēju saturu paplašināt."},{"question":"Vai varat palīdzēt ar tekstiem?","answer":"Varam palīdzēt sakārtot piedāvājumu un tekstu struktūru; pilna satura izveides apjomu saskaņojam atsevišķi."},{"question":"Vai mājaslapa būs piemērota mobilajām ierīcēm?","answer":"Jā, projektējam un pārbaudām lapu gan datorā, gan telefonā."},{"question":"Kas notiek pēc mājaslapas palaišanas?","answer":"Ja nepieciešams, vienojamies par hostingu, tehnisko uzturēšanu un turpmākajiem uzlabojumiem."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Vajag sakārtot</span></span>
            <span className="service-reveal-line"><span>uzņēmuma lapu?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Atsūti īsu aprakstu par uzņēmumu, un pateiksim, kādu struktūru būtu jēga veidot.
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
