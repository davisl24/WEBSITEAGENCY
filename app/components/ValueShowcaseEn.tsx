import RevealOnView from "./RevealOnView";

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout value-plan-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Why Kestrel</p>
            <h2 id="value-title">A website where<span>everything makes sense.</span></h2>
            <p className="value-intro">
              Building a website should be straightforward. We help you focus on what your business actually needs.
            </p>
          </RevealOnView>

          <RevealOnView className="value-showcase">
            <div className="value-contrast-showcase" aria-label="From a cluttered site to a clear offer">
              <div className="value-contrast-panel value-contrast-before">
                <div className="value-contrast-top"><span>TOO MUCH</span><span>01 / BEFORE</span></div>
                <div className="value-contrast-demo value-contrast-demo-before" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Car care in Riga</strong><span>Home</span><span>Updates</span><span>Services</span></div>
                  <div className="contrast-demo-promo">Car care services in Riga</div>
                  <div className="contrast-demo-blurb">Interior cleaning, exterior care and more — explore our full range.</div>
                  <div className="contrast-demo-grid"><span>Interior cleaning</span><span>Exterior care</span><span>Deals</span><span>Gallery</span><span>Updates</span><span>Contact</span></div>
                  <div className="contrast-demo-actions"><span>See prices</span><span>See offers</span><span>Learn more →</span></div>
                </div>
                <p>Plenty of services, but no clear route to booking.</p>
              </div>
              <span className="value-contrast-transition" aria-hidden="true">→</span>
              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>CLEAR</span><span>02 / AFTER</span></div>
                <div className="value-contrast-demo value-contrast-demo-after" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Company</strong><span>Services</span><span>Contact</span></div>
                  <div className="contrast-demo-eyebrow">ONE CLEAR OFFER</div>
                  <div className="contrast-demo-headline">Deep car interior cleaning in Riga</div>
                  <div className="contrast-demo-blurb">Remove stains, dust and everyday grime. Book a time that works for you.</div>
                  <span className="contrast-demo-cta">Book a cleaning <span>↗</span></span>
                </div>
                <p>One offer. One obvious next step.</p>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
