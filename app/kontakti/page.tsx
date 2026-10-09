import KestrelHeader from "../components/KestrelHeader";
import KestrelFooter from "../components/KestrelFooter";
import { lvMetadataAlternates } from "../lib/localizedSeo";
import LanguageSwitcher from "../components/LanguageSwitcher";
import type { Metadata } from "next";
import RevealOnView from "../components/RevealOnView";
import ThemeToggle from "../components/ThemeToggle";
import ServicesDropdown from "../components/ServicesDropdown";

export const metadata: Metadata = {
  alternates: lvMetadataAlternates("contact"),
  title: "Kontakti | Kestrel",
  description:
    "Pastāsti īsumā par uzņēmumu vai mājaslapu. Atbildēsim ar konkrētu nākamo soli.",
};

export default function ContactPage() {
  return (
    <main className="service-page contact-page">
      <KestrelHeader active="contact" />

      <section className="contact-page-hero contact-booking-layout" aria-labelledby="booking-title">
        <div className="contact-page-copy">
          <p className="service-page-kicker">Pieteikt sarunu</p>
          <h1 id="booking-title">Izvēlies laiku sarunai</h1>
          <p>15 minūtes, lai izrunātu tavu ideju un saprastu, kāds mājaslapas risinājums būtu piemērotākais</p>
          <div className="contact-page-note">
            <span>Bezmaksas konsultācija</span>
            <small>Google Meet · 15 minūtes · bez saistībām</small>
          </div>
          <p className="booking-preview-disclaimer">Rezervācijas dizaina priekšskatījums — kalendāra pieslēgšana vēl tiek gatavota</p>
        </div>
        <RevealOnView className="booking-preview-wrap" delay={80}>
          <div className="booking-preview" aria-label="Kalendāra dizaina priekšskatījums, rezervācija pašlaik nav pieejama">
            <div className="booking-preview-top">
              <span>IZVĒLIES DATUMU UN LAIKU</span>
              <span className="booking-preview-label">DEMO</span>
            </div>
            <div className="booking-preview-month"><strong>Oktobris 2026</strong><span aria-hidden="true">‹ &nbsp; ›</span></div>
            <div className="booking-preview-weekdays" aria-hidden="true">
              <span>P</span><span>O</span><span>T</span><span>C</span><span>P</span><span>S</span><span>Sv</span>
            </div>
            <div className="booking-preview-days" aria-hidden="true">
              {Array.from({ length: 3 }, (_, i) => <span className="booking-preview-blank" key={`blank-${i}`}/>)}
              {Array.from({ length: 31 }, (_, i) => <span className={i === 13 ? "booking-preview-selected" : ""} key={i}>{i + 1}</span>)}
            </div>
            <div className="booking-preview-times">
              <span>Laiki — piemērs</span>
              <div><span>10:00</span><span className="booking-preview-time-selected">11:30</span><span>14:00</span></div>
            </div>
            <div className="booking-preview-bottom">
              <span>15 min · Google Meet</span>
              <span className="booking-preview-submit">Rezervēt sarunu →</span>
            </div>
            <p className="booking-preview-footnote">Priekšskatījums — datumi un laiki nav reāla pieejamība</p>
          </div>
        </RevealOnView>
      </section>

      <KestrelFooter />
    </main>
  );
}
