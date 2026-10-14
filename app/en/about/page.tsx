import { localizedMetadata } from "../../lib/localizedSeo";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata = localizedMetadata("en","about");

export default function AboutPage() {
  return (
    <main lang="en" className="service-page about-page">
      <header className="service-page-header" aria-label="Main navigation">
        <a className="brand" href="/en" aria-label="Home">Kestrel</a>
        <nav className="service-page-nav" aria-label="Main navigation">
            <ServicesDropdown />
            <a href="/en/about" aria-current="page">About us</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact">Let's talk</a>
          </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          
          <h1>About us</h1>
          <p>
            We create websites that make it easier for small businesses to explain their offer, earn trust and turn visits into enquiries.
          </p>
          <a className="button button-primary" href="/en/contact">Tell us about your project</a>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-plan-sheet">
            <span className="about-plan-label">Purpose</span>
            <strong>What customers need to understand</strong>
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


      <section className="service-page-section about-company-section" aria-labelledby="about-company-title">
        <div className="about-company-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-company-title" className="service-line-stack about-company-title">
              <span className="service-reveal-line"><span>Web development with a clear purpose</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-company-layout">
          <RevealOnView className="about-company-main">
            <p>
              Kestrel is a web development team based in Latvia. We help small businesses build clear, fast websites with a purpose — not complicated projects that add no value.
            </p>
          </RevealOnView>

          <RevealOnView className="about-company-side" delay={120}>
            <div>
              <span>What we build</span>
              <p>Landing pages, business websites and improvements to existing sites.</p>
            </div>
            <div>
              <span>After launch</span>
              <p>When needed, we also help with hosting, maintenance and further improvements.</p>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section about-thinking-section" aria-labelledby="about-thinking-title">
        <div className="about-thinking-intro">
          <RevealOnView>
            <p className="service-page-kicker">Our approach</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-thinking-title" className="service-line-stack about-thinking-title">
              <span className="service-reveal-line"><span>Clarity before effects</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-thinking-copy">
              Good design isn't just a nice-looking screen. It helps visitors quickly understand the offer and what to do next.
            </p>
          </RevealOnView>
        </div>

        <div className="about-thinking-layout">
          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}><h3>A clear goal</h3><p>Define the action visitors should take</p></RevealOnView>
            <RevealOnView className="about-principle" delay={140}><h3>Thoughtful content</h3><p>Put important information in the right order</p></RevealOnView>
            <RevealOnView className="about-principle" delay={220}><h3>Easy to use</h3><p>Check desktop and mobile experiences</p></RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Let's talk about</span></span>
            <span className="service-reveal-line"><span>your website</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Tell us a little about your business, and we'll suggest a sensible first step.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/en/contact">Tell us about your project</a>
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
