import LanguageSwitcher from "../../components/LanguageSwitcher";
import type { Metadata } from "next";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "About us | Kestrel",
  description:
    "Kestrel builds clear, fast websites for small businesses, with a focus on the offer and customer journey.",
};

export default function AboutPage() {
  return (
    <main className="service-page about-page">
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
          <p className="service-page-kicker">About Kestrel</p>
          <h1>Websites built with purpose</h1>
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


      <section className="service-page-section about-company-section" aria-labelledby="about-company-title">
        <div className="about-company-intro">
          <RevealOnView>
            <p className="service-page-kicker">Who we are</p>
          </RevealOnView>

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
          <RevealOnView className="line-mask-reveal about-thinking-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>If a website looks good</span></span>
              <span className="service-reveal-line"><span>but visitors get lost,</span></span>
              <span className="service-reveal-line"><span>the job isn't finished.</span></span>
            </p>
          </RevealOnView>

          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}>
              <h3>A clear goal</h3>
              <p>We start by defining the action the website should encourage.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={150}>
              <h3>Less noise</h3>
              <p>We don't add sections just to make a page look longer.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={240}>
              <h3>Real usability</h3>
              <p>We test desktop and mobile as a real customer journey, not just a mock-up.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section about-focus-section" aria-labelledby="about-focus-title">
        <div className="about-focus-intro">
          <RevealOnView>
            <p className="service-page-kicker">What we believe</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-focus-title" className="service-line-stack about-focus-title">
              <span className="service-reveal-line"><span>Less, done better</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-focus-copy">
              We'd rather remove one unnecessary section than add three new ones. Every element should have a reason to exist.
            </p>
          </RevealOnView>
        </div>

        <div className="about-focus-visual">
          <RevealOnView className="about-chaos-panel">
            <span className="about-focus-caption">Too much</span>
            <div className="about-chaos-ui" aria-hidden="true">
              <span/><span/><span/><span/><span/><span/>
            </div>
          </RevealOnView>

          <RevealOnView className="about-focus-arrow" delay={100} aria-hidden="true">
            <span>→</span>
          </RevealOnView>

          <RevealOnView className="about-clear-panel" delay={180}>
            <span className="about-focus-caption">Clear</span>
            <div className="about-clear-ui" aria-hidden="true">
              <span className="about-clear-kicker"/>
              <span className="about-clear-title"/>
              <span className="about-clear-copy"/>
              <span className="about-clear-button"/>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section about-working-section" aria-labelledby="about-working-title">
        <div className="about-working-intro">
          <RevealOnView>
            <p className="service-page-kicker">Working together</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-working-title" className="service-line-stack about-working-title">
              <span className="service-reveal-line"><span>Straightforward communication</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-working-copy">
          <RevealOnView delay={0}>
            <p>
              We don't use needless presentations or technical jargon to make simple work seem complicated.
            </p>
          </RevealOnView>

          <RevealOnView delay={120}>
            <p>
              If something isn't worth building, we'll tell you. When the next step is clear, we focus on finishing it.
            </p>
          </RevealOnView>
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
