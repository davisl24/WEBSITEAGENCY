import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqEn";
import type { Metadata } from "next";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Landing pages izstrāde | Kestrel",
  description:
    "Landing pages vienam piedāvājumam ar skaidru mērķi, ātru ielādi un ērtu pieteikšanos.",
};

export default function LandingPage() {
  return (
    <main className="service-page landing-page">
      <header className="service-page-header" aria-label="Galvenā navigācija">
        <a className="brand" href="/en" aria-label="Sākumlapa">Kestrel</a>
        <nav className="service-page-nav" aria-label="Galvenā navigācija">
            <ServicesDropdown />
            <a href="/en/about">About us</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact">Let's talk</a>
          </nav>
      </header>

      <section className="service-page-hero">
        <div>
          <p className="service-page-kicker">Landing page</p>
          <h1>One page<br/>One goal</h1>
          <p className="service-page-lead">
            Landing page vienam piedāvājumam, lai apmeklētājs ātri saprot,
            ko tu piedāvā, kāpēc tas ir svarīgi un ko darīt tālāk.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/en/contact">Discuss your project</a>
            <a className="text-link" href="#kas-ietilpst">What you get <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="service-hero-demo" aria-hidden="true">
          <div className="service-demo-window">
            <div className="ui-browser-top"><span/><span/><span/></div>

            <div className="service-demo-nav">
              <span className="service-demo-brand">North</span>
              <div className="service-demo-nav-links">
                <span>Services</span>
                <span>About us</span>
                <span className="service-demo-nav-cta">Get started</span>
              </div>
            </div>

            <div className="service-demo-hero">
              <div className="service-demo-copy-block">
                <span className="service-demo-eyebrow">New offer</span>
                <strong>Clear. Fast.<br/>No distractions.</strong>
                <p>One page, one purpose, one simple route to an enquiry.</p>
                <span className="service-demo-primary">Enquire</span>
              </div>

              <div className="service-demo-art">
                <div className="service-demo-art-shape"/>
                <div className="service-demo-art-card">
                  <span>One clear goal</span>
                  <strong>Simple customer journey</strong>
                </div>
              </div>
            </div>

            <div className="service-demo-proof">
              <span>Clear offer</span>
              <span>Mobile-friendly</span>
              <span>One primary action</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section service-fit-section" aria-labelledby="der-title">
        <div className="service-fit-head">
          <RevealOnView className="service-fit-kicker-reveal">
            <p className="service-page-kicker">When it fits</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-fit-title-reveal" delay={60}>
            <h2 id="der-title" className="service-line-stack">
              <span className="service-reveal-line"><span>When one page</span></span>
              <span className="service-reveal-line"><span>is enough</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-fit-copy-reveal" delay={180}>
            <p>
              Landing page ir pareizā izvēle, ja ir viens galvenais piedāvājums
              un viena darbība, līdz kurai gribam aizvest apmeklētāju.
            </p>
          </RevealOnView>
        </div>

        <div className="service-fit-editorial">
          <RevealOnView className="line-mask-reveal service-fit-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Not every business</span></span>
              <span className="service-reveal-line"><span>needs ten pages. Sometimes</span></span>
              <span className="service-reveal-line"><span>one focused page</span></span>
              <span className="service-reveal-line"><span>does the job better.</span></span>
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-a" delay={0}>
            <h3>One service</h3>
            <p>
              When you want visitors to focus on one specific offer instead of navigating several pages.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-b" delay={120}>
            <h3>Ad campaign</h3>
            <p>
              Give every ad click a relevant destination with one clear next step.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-c" delay={240}>
            <h3>New offer</h3>
            <p>
              Launch or test an idea without building an entire business website.
            </p>
          </RevealOnView>
        </div>
      </section>

      

      <section className="service-page-section service-includes-section" id="kas-ietilpst" aria-labelledby="includes-title">
        <div className="service-includes-intro">
          <RevealOnView className="service-includes-kicker">
            <p className="service-page-kicker">What you get</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-includes-title" delay={60}>
            <h2 id="includes-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Everything working together</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-includes-copy" delay={160}>
            <p>
              Nevis pieci atsevišķi punkti, bet viena sistēma, kur struktūra,
              dizains un pieteikšanās ceļš strādā kopā.
            </p>
          </RevealOnView>
        </div>

        <div className="service-anatomy" aria-label="Landing pages uzbūves piemērs">
          <RevealOnView className="service-anatomy-browser anatomy-browser-reveal">
            <div aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="service-anatomy-nav">
                <span className="service-anatomy-logo">North</span>
                <span className="service-anatomy-nav-line"/>
                <span className="service-anatomy-nav-button"/>
              </div>

              <div className="service-anatomy-hero">
                <div className="service-anatomy-copy">
                  <span className="service-anatomy-kicker"/>
                  <span className="service-anatomy-title"/>
                  <span className="service-anatomy-text"/>
                  <span className="service-anatomy-cta"/>
                </div>
                <div className="service-anatomy-art"/>
              </div>

              <div className="service-anatomy-content">
                <span/><span/><span/>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-phone anatomy-phone-reveal" delay={180}>
            <div aria-hidden="true">
              <div className="service-anatomy-phone-top"/>
              <span className="service-anatomy-phone-title"/>
              <span className="service-anatomy-phone-copy"/>
              <span className="service-anatomy-phone-cta"/>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-structure anatomy-note-reveal" delay={80}>
            <h3>Clear structure</h3>
            <p>Information in the right order so customers understand your offer immediately.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-design anatomy-note-reveal" delay={160}>
            <h3>Design made for your brand</h3>
            <p>A look that reflects your business, not a generic template.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-cta anatomy-note-reveal" delay={240}>
            <h3>Enquiry form and CTA</h3>
            <p>One clear way to get in touch, without unnecessary steps.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-mobile anatomy-note-reveal" delay={320}>
            <h3>Mobile-friendly</h3>
            <p>The same simple experience on mobile.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-seo anatomy-note-reveal" delay={400}>
            <h3>SEO essentials</h3>
            <p>A semantic structure and a sound technical foundation for search.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="process-title">
        <div className="service-process-intro">
          <RevealOnView className="service-process-kicker">
            <p className="service-page-kicker">How we work</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>From goal to launch</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Sākam ar to, ko lapai jāpanāk. Tikai pēc tam liekam kopā saturu,
              dizainu un izstrādi.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Landing pages izstrādes process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Goal</span>
            <p>Who the page is for and what visitors should do.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Content</span>
            <p>The right information, in the right order, to help customers decide.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Design</span>
            <p>Design and development for desktop and mobile.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Launch</span>
            <p>Final checks before the page goes live.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Landing page"
        pricingNote="Pricing depends on the amount of content and the features you need."
        included={["Number of sections and content","Design tailored to your business","Booking button or enquiry form","Mobile layout and testing"]}
        questions={[{"question":"How long does a landing page take?","answer":"It depends on your content and required features. We'll agree on a timeline before work begins."},{"question":"Do I need to provide the text and images?","answer":"Send us what you have. If you need help shaping the content or copy, we'll include that in the scope."},{"question":"Will it work on mobile?","answer":"Yes. We design for desktop and mobile and test the key interactions."},{"question":"Can you add an enquiry form?","answer":"Yes. We'll agree on the right form or booking flow at the start."},{"question":"Are the domain and ongoing maintenance included?","answer":"Domain, hosting and maintenance costs are quoted separately when needed."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Need a focused</span></span>
            <span className="service-reveal-line"><span>landing page?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Tell us what you offer, and we'll help work out whether a landing page is the right approach.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/en/contact">Tell us about your project</a>
        </RevealOnView>
      </section>

      <footer className="service-page-footer">
        <nav className="service-page-footer-nav" aria-label="Lapas navigācija">
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
