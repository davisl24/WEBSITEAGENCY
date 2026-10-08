type FAQ = { question: string; answer: string };

type Props = {
  service: string;
  pricingNote: string;
  included: string[];
  questions: FAQ[];
};

export default function ServicePricingFaq({ service, pricingNote, included, questions }: Props) {
  return (
    <>
      <section className="service-page-section service-pricing-section" aria-labelledby="service-pricing-title">
        <div className="service-extra-heading">
          <p className="service-page-kicker">Starting price</p>
          <h2 id="service-pricing-title">What does it cost?</h2>
          <p>{pricingNote}</p>
        </div>
        <div className="service-price-layout">
          <div className="service-price-primary">
            <span>{service}</span>
            <div className="service-price-amount"><span>Starting at</span><strong>X €</strong></div>
            <small>Price placeholder — final pricing coming soon.</small>
            <a href="/kontakti">Discuss your project <span aria-hidden="true">↗</span></a>
          </div>
          <div className="service-price-includes">
            <h3>What affects the price?</h3>
            <ul>
              {included.map(item => <li key={item}>{item}</li>)}
            </ul>
            <p>We agree on the scope and final quote before work begins.</p>
          </div>
        </div>
      </section>

      <section className="service-page-section service-faq-section" aria-labelledby="service-faq-title">
        <div className="service-extra-heading">
          <p className="service-page-kicker">Frequently asked questions</p>
          <h2 id="service-faq-title">What should you know before we start?</h2>
        </div>
        <div className="service-faq-list">
          {questions.map((item, index) => (
            <details key={item.question} className="service-faq-item">
              <summary><span className="service-faq-index">0{index + 1}</span><span>{item.question}</span><span className="service-faq-plus" aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
