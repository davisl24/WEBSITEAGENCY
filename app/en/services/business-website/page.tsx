import { localizedMetadata } from "../../../lib/localizedSeo";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqEn";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata = localizedMetadata("en","company");

export default function CompanyWebsitePage() {
  return (
    <main className="service-page company-page">
      <header className="service-page-header" aria-label="Main navigation">
        <a className="brand" href="/en" aria-label="Home page">Kestrel</a>
        <nav className="service-page-nav" aria-label="Main navigation">
            <ServicesDropdown />
            <a href="/en/about">About</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact">Let's talk</a>
          </nav>
      </header>

      <section className="service-page-hero company-service-hero">
        <div>
          <p className="service-page-kicker">Business website</p>
          <h1>Your business, clearly presented</h1>
          <p className="service-page-lead">
            A website that helps customers understand your business, trust you and get in touch.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/en/contact">Discuss your project</a>
            <a className="text-link" href="#struktura">How it fits together <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="company-hero-visual" aria-hidden="true">
          <div className="company-browser">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="company-browser-nav">
              <strong>North</strong>
              <span>Services</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="company-browser-main">
              <div className="company-browser-copy">
                <span className="company-browser-kicker"/>
                <span className="company-browser-title"/>
                <span className="company-browser-text"/>
                <span className="company-browser-cta"/>
              </div>
              <div className="company-browser-art"/>
            </div>
            <div className="company-browser-sections">
              <span/><span/><span/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section company-fit-section" aria-labelledby="company-fit-title">
        <div className="company-fit-intro">
          <RevealOnView>
            <p className="service-page-kicker">When it makes sense</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-fit-title" className="service-line-stack company-fit-title">
              <span className="service-reveal-line"><span>When one page</span></span>
              <span className="service-reveal-line"><span>isn't enough</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-fit-copy">
              The right option when you need to explain several services, build credibility and offer different ways to get in touch.
            </p>
          </RevealOnView>
        </div>

        <div className="company-fit-layout">
          <RevealOnView className="company-fit-statement line-mask-reveal">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Customers shouldn't have to guess</span></span>
              <span className="service-reveal-line"><span>where to find important</span></span>
              <span className="service-reveal-line"><span>information</span></span>
            </p>
          </RevealOnView>

          <div className="company-fit-side">
            <RevealOnView className="company-fit-item" delay={60}>
              <h3>Multiple services</h3>
              <p>Each service has its place, while the whole site feels consistent.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={150}>
              <h3>Building trust</h3>
              <p>Share your story, past work, reviews and how you work.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={240}>
              <h3>Different ways to connect</h3>
              <p>Make it easy to call, enquire or take the next step.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section company-structure-section" id="struktura" aria-labelledby="company-structure-title">
        <div className="company-structure-intro">
          <RevealOnView>
            <p className="service-page-kicker">Structure</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-structure-title" className="service-line-stack company-structure-title">
              <span className="service-reveal-line"><span>The right place</span></span>
              <span className="service-reveal-line"><span>for everything</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-structure-copy">
              Not more pages for their own sake. A structure built around what customers need.
            </p>
          </RevealOnView>
        </div>

        <div className="company-page-system" aria-label="Business website structure preview">
          <RevealOnView className="company-page-main">
            <div className="company-page-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="company-page-browser-nav">
                <strong>North</strong>
                <div><span>Services</span><span>About</span><span>Contact</span></div>
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
                <span>Home page</span>
                <small>Your key message and next step</small>
              </div>
            </div>
          </RevealOnView>

          <div className="company-page-stack">
            <RevealOnView className="company-page-sheet company-page-sheet-services" delay={80}>
              <div className="company-page-sheet-top">
                <span>Services</span>
                <small>What you offer and who it's for</small>
              </div>
              <div className="company-page-sheet-preview" aria-hidden="true">
                <span/><span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-about" delay={170}>
              <div className="company-page-sheet-top">
                <span>About</span>
                <small>Why customers can trust you</small>
              </div>
              <div className="company-page-sheet-preview company-page-sheet-preview-about" aria-hidden="true">
                <span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-contact" delay={260}>
              <div className="company-page-sheet-top">
                <span>Contact</span>
                <small>An obvious next step</small>
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
            <p className="service-page-kicker">Our process</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="company-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>From content to launch</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              We understand your business and customer journey first. Then we bring content, design and development together.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Business website build process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Goal</span>
            <p>What customers need to understand and do next.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Content</span>
            <p>We organise the information and keep what matters.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Design</span>
            <p>We design and build a consistent experience across the site.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Launch</span>
            <p>We test, polish and launch.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Business website"
        pricingNote="The quote depends on the number of pages, amount of content and integrations."
        included={["Page count and information architecture","Design and mobile layout","Contact forms and integrations","Content preparation and ongoing support"]}
        questions={[{"question":"How many pages will my website need?","answer":"It depends on your content. We'll plan the necessary pages and sections together."},{"question":"Can we add more pages later?","answer":"Yes. We plan the structure with future growth in mind."},{"question":"Can you help with the copy?","answer":"We can help organise your message and copy. Full content writing is quoted separately."},{"question":"Will the website work on mobile?","answer":"Yes. We design and test for desktop and mobile."},{"question":"What happens after launch?","answer":"We can discuss hosting, maintenance and future improvements if you need them."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Ready to improve</span></span>
            <span className="service-reveal-line"><span>your business website?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Tell us about your business, and we'll suggest the structure that makes sense.
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
          <a href="/en/about">About</a>
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
