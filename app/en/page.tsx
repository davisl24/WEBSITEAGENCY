import { localizedMetadata } from "../lib/localizedSeo";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Image from "next/image";
import heroBg from "../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "../assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "../components/ValueShowcaseEn";
import ProcessFlow from "../components/ProcessFlowEn";
import RevealOnView from "../components/RevealOnView";
import ThemeToggle from "../components/ThemeToggle";
import ServicesDropdown from "../components/ServicesDropdown";

export const metadata = localizedMetadata("en","home");

export default function Home() {
  return (
    <main lang="en" id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroBg} alt="" fill priority className="hero-media-image hero-media-image-dark" />
          <Image src={heroBgLight} alt="" fill priority className="hero-media-image hero-media-image-light" />
          <div className="hero-media-overlay" />
        </div>

        <header className="site-header" aria-label="Main navigation">
          <a className="brand" href="/en" aria-label="Home">Kestrel</a>
          <nav className="site-nav" aria-label="Main navigation">
            <ServicesDropdown />
            <a href="/en/about">About us</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact">Let's talk</a>
          </nav>
        </header>

        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-label">Websites for small businesses</p>
            <h1>Websites that turn visits into enquiries</h1>
            <p className="hero-description">
              We build fast, easy-to-use websites that make your offer clear and help visitors take the next step.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/en/contact">Let's talk</a>
              <a className="text-link" href="#services">Explore services <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <p className="section-label">Services</p>
            <h2 id="services-title">Find the right solution</h2>
            <p className="services-intro">
              One focused page, a complete business website, or improvements to what you already have — choose what fits.
            </p>
          </div>

          <div className="services-grid">
            <a href="/en/services/landing-page" className="service-card">
              <div className="service-visual service-visual-landing">
                <div className="service-story service-story-landing" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-landing-body">
                    <span className="story-eyebrow"/>
                    <span className="story-landing-title"/>
                    <span className="story-landing-subtitle"/>
                    <span className="story-landing-cta"/>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">For one focused offer</p>
                <h3>Landing page</h3>
                <p>One page built around a specific service, product or campaign.</p>

                <span className="service-link" aria-hidden="true">Explore service <span>→</span></span>
              </div>
            </a>

            <a href="/en/services/business-website" className="service-card service-card-featured">
              <div className="service-visual service-visual-website">
                <div className="service-story service-story-company" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-company-nav"><span/><span/><span/><span/></div>
                  <div className="story-company-hero">
                    <div className="story-company-copy"><span/><span/><span/></div>
                    <div className="story-company-image"/>
                  </div>
                  <div className="story-company-pages"><span/><span/><span/></div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">When you need more than one page</p>
                <h3>Business website</h3>
                <p>A clear home for your services, business information and customer enquiries.</p>

                <span className="service-link" aria-hidden="true">Explore service <span>→</span></span>
              </div>
            </a>

            <a href="/en/services/website-improvements" className="service-card">
              <div className="service-visual service-visual-upgrade">
                <div className="story-upgrade" aria-hidden="true">
                  <div className="story-upgrade-before">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-before-body"><span/><span/><span/><span/></div>
                  </div>
                  <span className="story-upgrade-arrow">→</span>
                  <div className="story-upgrade-after">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-after-body">
                      <span className="story-after-eyebrow"/>
                      <span className="story-after-title"/>
                      <span className="story-after-copy"/>
                      <span className="story-after-button"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">When you already have a site</p>
                <h3>Website improvements</h3>
                <p>Improve your existing site's design, structure and ease of use.</p>

                <span className="service-link" aria-hidden="true">Explore service <span>→</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ProcessFlow />

      <section className="call-section" aria-labelledby="call-title">
        <div className="call-inner">
          <div className="call-kicker">A quick chat, no commitment</div>
          <div className="call-content">
            <div>
              <h2 id="call-title">Let's talk about your website</h2>
              <p>15 minutes to discuss what your business needs and whether we can help.</p>
            </div>
            <a className="call-cta" href="/en/contact">
              <span className="call-dot" aria-hidden="true" />
              <span>Let's talk</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
          <div className="footer-wordmark-block">
            <a href="/en" className="footer-wordmark">Kestrel</a>
            <p className="footer-statement">Websites built with a clear purpose and thoughtful design.<br/>We help small businesses explain their offer and make it easier for customers to get in touch.</p>
          </div>
            <div className="footer-links">
              <div>
                <span>Navigation</span>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="/en/about">About us</a>
                <a href="/en/contact">Contact</a>
              </div>
              <div>
                <span>Get in touch</span>
                <a className="footer-contact-link" href="/en/contact">Let's talk <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Kestrel</span>

          </div>
        </div>
      </footer>
    </main>
  );
}
