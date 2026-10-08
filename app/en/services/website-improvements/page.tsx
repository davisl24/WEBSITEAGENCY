import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqEn";
import type { Metadata } from "next";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Website improvements | Kestrel",
  description:
    "Improve an existing website with clearer structure, better usability and a simpler customer journey.",
};

export default function WebsiteUpgradePage() {
  return (
    <main className="service-page upgrade-page">
      <header className="service-page-header" aria-label="Main navigation">
        <a className="brand" href="/en" aria-label="Home">Kestrel</a>
        <nav className="service-page-nav" aria-label="Main navigation">
            <ServicesDropdown />
            <a href="/en/about">About</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/en/contact">Let's talk</a>
          </nav>
      </header>

      <section className="service-page-hero upgrade-service-hero">
        <div>
          <p className="service-page-kicker">Website improvements</p>
          <h1>Your existing website can do more</h1>
          <p className="service-page-lead">
            If your existing website is difficult to understand or use on mobile, you may not need to start from scratch.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/en/contact">Discuss improvements</a>
            <a className="text-link" href="#ko-mainam">What we'll improve <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="upgrade-hero-visual" aria-hidden="true">
          <div className="upgrade-hero-before">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-before-body">
              <span/><span/><span/><span/>
            </div>
          </div>

          <div className="upgrade-hero-after">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-after-nav">
              <strong>North</strong>
              <span/>
            </div>
            <div className="upgrade-hero-after-body">
              <div>
                <span className="upgrade-hero-kicker"/>
                <span className="upgrade-hero-title"/>
                <span className="upgrade-hero-copy"/>
                <span className="upgrade-hero-cta"/>
              </div>
              <span className="upgrade-hero-art"/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section upgrade-signs-section" aria-labelledby="upgrade-signs-title">
        <div className="upgrade-signs-intro">
          <RevealOnView>
            <p className="service-page-kicker">When it's time to improve</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-signs-title" className="service-line-stack upgrade-signs-title">
              <span className="service-reveal-line"><span>When your website</span></span>
              <span className="service-reveal-line"><span>gets in the way</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-signs-copy">
              An outdated look isn't always the problem. Often the site simply makes visitors work too hard.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-signs-layout">
          <RevealOnView className="line-mask-reveal upgrade-signs-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>If people have to search,</span></span>
              <span className="service-reveal-line"><span>guess or hesitate,</span></span>
              <span className="service-reveal-line"><span>something isn't working.</span></span>
            </p>
          </RevealOnView>

          <div className="upgrade-signs-side">
            <RevealOnView className="upgrade-sign" delay={70}>
              <h3>Unclear offer</h3>
              <p>There's plenty of text, but visitors still can't tell what you offer.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={160}>
              <h3>Poor mobile experience</h3>
              <p>The website becomes hard to read or use on a phone.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={250}>
              <h3>Hard to take action</h3>
              <p>Visitors can't find the contact or booking option when they need it.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section upgrade-compare-section" id="ko-mainam" aria-labelledby="upgrade-compare-title">
        <div className="upgrade-compare-intro">
          <RevealOnView>
            <p className="service-page-kicker">What we'll improve</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-compare-title" className="service-line-stack upgrade-compare-title">
              <span className="service-reveal-line"><span>Keep what works,</span></span>
              <span className="service-reveal-line"><span>fix what doesn't</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-compare-copy">
              You don't always need a new site. Clearer structure and an easier path to enquiry can make a real difference.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-compare">
          <RevealOnView className="upgrade-compare-before">
            <div className="upgrade-compare-label">Before</div>
            <div className="upgrade-compare-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-before-body">
                <span/><span/><span/><span/><span/>
                <div><span/><span/><span/></div>
              </div>
            </div>
            <p>Everything competes for attention, and the next step gets lost.</p>
          </RevealOnView>

          <RevealOnView className="upgrade-compare-after" delay={160}>
            <div className="upgrade-compare-label">After</div>
            <div className="upgrade-compare-browser upgrade-compare-browser-after" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-after-body">
                <div>
                  <span className="upgrade-compare-kicker"/>
                  <span className="upgrade-compare-heading"/>
                  <span className="upgrade-compare-text"/>
                  <span className="upgrade-compare-button"/>
                </div>
                <span className="upgrade-compare-art"/>
              </div>
            </div>
            <p>Clear priorities, a stronger first impression and an obvious next step.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="upgrade-process-title">
        <div className="service-process-intro">
          <RevealOnView>
            <p className="service-page-kicker">Our process</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="upgrade-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>From problem to improvement</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              We identify what gets in the way before changing anything.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Website improvementss process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Review</span>
            <p>We check structure, mobile usability, speed and the customer journey.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Priorities</span>
            <p>We separate real problems from cosmetic details.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Improvements</span>
            <p>We update structure, design or functionality where it makes a difference.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Testing</span>
            <p>We test desktop and mobile and polish the details.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Website improvements"
        pricingNote="Pricing depends on what needs to change on your existing site."
        included={["Review of the existing site","Prioritisation of key issues","Targeted design or functionality updates","Testing after changes"]}
        questions={[{"question":"Do I need a completely new website?","answer":"Not necessarily. We start by finding what works and what needs fixing."},{"question":"Can you improve just one section?","answer":"Yes. If the issue is limited, we can focus on that part."},{"question":"Can you work with my existing platform?","answer":"It depends on the platform and access available. We check technical limitations first."},{"question":"How do you decide what to fix first?","answer":"We focus on what makes the offer harder to understand or prevents enquiries."},{"question":"Will the changes affect my live website?","answer":"We'll agree on a safe implementation plan before making changes."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>You don't have to start</span></span>
            <span className="service-reveal-line"><span>from scratch</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Show us your current site, and we'll help you decide what to keep, improve or rebuild.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/en/contact">Show us your website</a>
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
