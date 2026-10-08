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
          <p className="service-page-kicker">Начальная стоимость</p>
          <h2 id="service-pricing-title">Сколько это стоит?</h2>
          <p>{pricingNote}</p>
        </div>
        <div className="service-price-layout">
          <div className="service-price-primary">
            <span>{service}</span>
            <div className="service-price-amount"><span>Стоимость от</span><strong>X €</strong></div>
            <small>Цена пока не утверждена — уточним перед публикацией.</small>
            <a href="/kontakti">Обсудить проект <span aria-hidden="true">↗</span></a>
          </div>
          <div className="service-price-includes">
            <h3>От чего зависит цена?</h3>
            <ul>
              {included.map(item => <li key={item}>{item}</li>)}
            </ul>
            <p>Объём работ и итоговую стоимость согласуем до начала проекта.</p>
          </div>
        </div>
      </section>

      <section className="service-page-section service-faq-section" aria-labelledby="service-faq-title">
        <div className="service-extra-heading">
          <p className="service-page-kicker">Частые вопросы</p>
          <h2 id="service-faq-title">Что важно знать до начала?</h2>
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
