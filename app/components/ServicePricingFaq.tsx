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
          <p className="service-page-kicker">Sākuma cena</p>
          <h2 id="service-pricing-title">Skaidrs sākumpunkts</h2>
          <p>{pricingNote}</p>
        </div>
        <div className="service-price-layout">
          <div className="service-price-primary">
            <span>{service}</span>
            <strong>no X €</strong>
            <small>Orientējošā cena vēl tiek precizēta.</small>
            <a href="/kontakti">Izrunāt projektu <span aria-hidden="true">↗</span></a>
          </div>
          <div className="service-price-includes">
            <h3>Ko precizējam piedāvājumā</h3>
            <ul>
              {included.map(item => <li key={item}>{item}</li>)}
            </ul>
            <p>Precīzu apjomu un cenu vienojamies pirms darba sākšanas.</p>
          </div>
        </div>
      </section>

      <section className="service-page-section service-faq-section" aria-labelledby="service-faq-title">
        <div className="service-extra-heading">
          <p className="service-page-kicker">Biežākie jautājumi</p>
          <h2 id="service-faq-title">Kas jāzina pirms sākam?</h2>
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
