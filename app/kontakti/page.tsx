import type { Metadata } from "next";
import RevealOnView from "../components/RevealOnView";
import ThemeToggle from "../components/ThemeToggle";
import ServicesDropdown from "../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Kontakti | Kestrel",
  description:
    "Pastāsti īsumā par uzņēmumu vai mājaslapu. Atbildēsim ar konkrētu nākamo soli.",
};

export default function ContactPage() {
  return (
    <main className="service-page contact-page">
      <header className="service-page-header" aria-label="Galvenā navigācija">
        <a className="brand" href="/" aria-label="Sākumlapa">Kestrel</a>
        <nav className="service-page-nav" aria-label="Galvenā navigācija">
            <ServicesDropdown />
            <a href="/par-mums">Par mums</a>
            <ThemeToggle />
            <a className="header-cta" href="/kontakti" aria-current="page">Pieteikt sarunu</a>
          </nav>
      </header>

      <section className="contact-page-hero">
        <div className="contact-page-copy">
          <p className="service-page-kicker">Sazināties</p>
          <h1>Pastāsti īsumā</h1>
          <p>
            Nav vajadzīgs gatavs tehniskais uzdevums. Atsūti, ko uzņēmums dara,
            kas šobrīd nestrādā vai ko gribi uzlabot.
          </p>

          <div className="contact-page-note">
            <span>Atbildēsim ar konkrētu nākamo soli</span>
            <small>bez saistībām un bez lieka pārdošanas teksta</small>
          </div>
        </div>

        <RevealOnView className="contact-page-form-wrap" delay={80}>
          <div className="contact-card contact-page-form" id="contact-form">
            <div className="contact-card-top">
              <span>Bezmaksas ideja</span>
              <span>Bez saistībām</span>
            </div>

            <div className="contact-fields">
              <label>
                <span>Vārds</span>
                <input type="text" name="name" placeholder="Tavs vārds" />
              </label>

              <label>
                <span>E-pasts vai tālrunis</span>
                <input type="text" name="contact" placeholder="Kā ar tevi sazināties" />
              </label>

              <label className="contact-field-wide">
                <span>Par ko ir projekts</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Īsi par uzņēmumu, esošo lapu un ko vēlies uzlabot"
                />
              </label>
            </div>

            <div className="contact-actions">
              <p>Pietiek ar pāris teikumiem. Tehniskās detaļas izrunāsim pēc tam.</p>
              <button type="button" className="button button-primary">Nosūtīt aprakstu</button>
            </div>
          </div>
        </RevealOnView>
      </section>

      <section className="service-page-section contact-page-call" aria-labelledby="contact-call-title">
        <div className="contact-page-call-inner">
          <RevealOnView>
            <p className="service-page-kicker">Īss zvans</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="contact-call-title" className="service-line-stack contact-page-call-title">
              <span className="service-reveal-line"><span>Ja ērtāk izrunāt</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="contact-page-call-copy" delay={140}>
            <p>
              15 minūtes, lai saprastu situāciju un vai vispār ir jēga kaut ko būvēt vai pārbūvēt.
            </p>
          </RevealOnView>

          <RevealOnView className="contact-page-call-action" delay={220}>
            <a className="call-cta" href="#contact-form">
              <span className="call-dot" aria-hidden="true" />
              <span>Pieteikt bezmaksas zvanu</span>
              <span aria-hidden="true">→</span>
            </a>
          </RevealOnView>
        </div>
      </section>

      <footer className="service-page-footer">
        <nav className="service-page-footer-nav" aria-label="Lapas navigācija">
          <a href="/">Sākums</a>
          <a href="/#services">Pakalpojumi</a>
          <a href="/par-mums">Par mums</a>
          <a href="/kontakti">Kontakti</a>
        </nav>
        <div className="service-page-footer-bottom">
          <span>Kestrel</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
