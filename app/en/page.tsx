import { localizedMetadata } from "../lib/localizedSeo";
import Image from "next/image";
import heroBg from "../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "../assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "../components/ValueShowcaseEn";
import ProcessFlow from "../components/ProcessFlow";
import KestrelHeader from "../components/KestrelHeader";

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

        <KestrelHeader active="home" lang="en" />
        <div className="hero-shell">
          <div className="hero-copy">
            <h1>Websites that turn visits into enquiries</h1>
            <p className="hero-description">
              We build clear and fast business websites so visitors
              understand your offer and know how to get in touch
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/en/contact">Discuss your project</a>
              <a className="text-link" href="#services">Explore services <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <h2 id="services-title">Services</h2>
          </div>
          <div className="kestrel-services-v2 kestrel-services-premium">
            <a className="ks-main ks-category" href="/en/services/web-development">
              <span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 22h8m-4-4v4"/></svg></span>
              <div className="ks-row-body">
                <h3>Web development</h3>
                <p>Landing pages · Business websites · Website improvements</p>
                <div className="ks-offers" aria-label="Sākuma cenas"><span>Landing from €200</span><span>Business website from €450</span></div>
              </div>
              <span className="ks-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="ks-other-grid">
              <a className="ks-item ks-category" href="/en/services/ecommerce"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l3 13h13l2-9H5"/></svg></span><div className="ks-row-body"><h3>E-commerce</h3><p>Online stores · Payments · Delivery</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/en/services/seo"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/></svg></span><div className="ks-row-body"><h3>SEO</h3><p>Technical SEO · Content optimisation · Audit</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/en/services/ui-ux"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m5 3 14 9-7 1.6L9 20 5 3Z"/></svg></span><div className="ks-row-body"><h3>UI/UX design</h3><p>Design audit · Structure · Interfaces</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/en/services/website-maintenance"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg></span><div className="ks-row-body"><h3>Hosting and maintenance</h3><p>Deployment · Monitoring · Updates</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ProcessFlow lang="en" />

      <section className="call-section" aria-labelledby="call-title">
        <div className="call-inner">
          
          <div className="call-content">
            <div>
              <h2 id="call-title">Tell us about your project</h2>
              <p>We will discuss your idea and agree on a suitable solution</p>
            </div>
            <a className="call-cta" href="/en/contact">
              <span className="call-dot" aria-hidden="true" />
              <span>Discuss your project</span>
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
            <p className="footer-statement">Websites with clear structure and thoughtful design.</p>
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
                <span>Contact</span>
                <a className="footer-contact-link" href="/en/contact">Discuss your project <span aria-hidden="true">↗</span></a>
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
