import LanguageSwitcher from "../../components/LanguageSwitcher";
import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Contact | Kestrel",
  description:
    "Tell us about your business and website idea. We'll suggest a practical next step.",
};

export default function ContactPage() {
  return (
    <main className="service-page contact-page">
      <header className="service-page-header" aria-label="Main navigation">
        <a className="brand" href="/en" aria-label="Home">Kestrel</a>
        <nav className="service-page-nav" aria-label="Main navigation">
            <ServicesDropdown />
            <a href="/en/about">About us</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact" aria-current="page">Let's talk</a>
          </nav>
      </header>

      <section className="contact-page-hero contact-booking-layout" aria-labelledby="booking-title">
        <div className="contact-page-copy">
          <p className="service-page-kicker">Let's talk</p>
          <h1 id="booking-title">Choose a time to talk</h1>
          <p>A 15-minute conversation to discuss your idea and find the right website approach.</p>
          <div className="contact-page-note">
            <span>Free consultation</span>
            <small>Google Meet · 15 minutes · no commitment</small>
          </div>
          <p className="booking-preview-disclaimer">Booking preview only — online scheduling is not available yet.</p>
        </div>
        <RevealOnView className="booking-preview-wrap" delay={80}>
          <div className="booking-preview" aria-label="Calendar preview only: booking is currently unavailable">
            <div className="booking-preview-top">
              <span>CHOOSE DATE & TIME</span>
              <span className="booking-preview-label">DEMO</span>
            </div>
            <div className="booking-preview-month"><strong>October 2026</strong><span aria-hidden="true">‹ &nbsp; ›</span></div>
            <div className="booking-preview-weekdays" aria-hidden="true">
              <span>P</span><span>O</span><span>T</span><span>Th</span><span>P</span><span>S</span><span>Su</span>
            </div>
            <div className="booking-preview-days" aria-hidden="true">
              {Array.from({ length: 3 }, (_, i) => <span className="booking-preview-blank" key={`blank-${i}`}/>)}
              {Array.from({ length: 31 }, (_, i) => <span className={i === 13 ? "booking-preview-selected" : ""} key={i}>{i + 1}</span>)}
            </div>
            <div className="booking-preview-times">
              <span>Sample times</span>
              <div><span>10:00</span><span className="booking-preview-time-selected">11:30</span><span>14:00</span></div>
            </div>
            <div className="booking-preview-bottom">
              <span>15 min · Google Meet</span>
              <span className="booking-preview-submit">Book a call →</span>
            </div>
            <p className="booking-preview-footnote">Preview only — displayed slots are not available to book.</p>
          </div>
        </RevealOnView>
      </section>

      <footer className="service-page-footer">
        <nav className="service-page-footer-nav" aria-label="Page navigation">
          <a href="/en">Home</a>
          <a href="/en/#services">Services</a>
          <a href="/en/about">About us</a>
          <a href="/en/contact">Contact</a>
        </nav>
        <div className="service-page-footer-bottom">
          <span>Kestrel</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
