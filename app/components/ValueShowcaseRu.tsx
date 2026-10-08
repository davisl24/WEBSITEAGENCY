import RevealOnView from "./RevealOnView";

export default function ValueShowcase() {
  return (
    <section className="value-section" aria-labelledby="value-title">
      <div className="value-inner">
        <div className="value-layout value-plan-layout">
          <RevealOnView className="value-copy-side">
            <p className="section-label">Почему Kestrel</p>
            <h2 id="value-title">Меньше лишнего<span>Больше ясности</span></h2>
            <p className="value-intro">
              Создание сайта не должно быть сложным. Помогаем сосредоточиться на том, что действительно нужно бизнесу.
            </p>
          </RevealOnView>

          <RevealOnView className="value-showcase">
            <div className="value-contrast-showcase" aria-label="No sarežģītas struktūras līdz skaidram piedāvājumam">
              <div className="value-contrast-panel value-contrast-before">
                <div className="value-contrast-top"><span>СЛИШКОМ МНОГО</span><span>01 / ДО</span></div>
                <div className="value-contrast-demo value-contrast-demo-before" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Автоуход в Риге</strong><span>Главная</span><span>Новости</span><span>Услуги</span></div>
                  <div className="contrast-demo-promo">Услуги по уходу за авто в Риге</div>
                  <div className="contrast-demo-blurb">Чистка салона, уход за кузовом и другие услуги — подробности в разделах сайта.</div>
                  <div className="contrast-demo-grid"><span>Чистка салона</span><span>Уход за кузовом</span><span>Акции</span><span>Галерея</span><span>Новости</span><span>Контакты</span></div>
                  <div className="contrast-demo-actions"><span>Посмотреть цены</span><span>Смотреть акции</span><span>Подробнее →</span></div>
                </div>
                <p>Услуги перечислены, но непонятно, как записаться.</p>
              </div>
              <span className="value-contrast-transition" aria-hidden="true">→</span>
              <div className="value-contrast-panel value-contrast-after">
                <div className="value-contrast-top"><span>ПОНЯТНО</span><span>02 / ПОСЛЕ</span></div>
                <div className="value-contrast-demo value-contrast-demo-after" aria-hidden="true">
                  <div className="contrast-demo-nav"><strong>Компания</strong><span>Услуги</span><span>Контакты</span></div>
                  <div className="contrast-demo-eyebrow">ОДНО ПОНЯТНОЕ ПРЕДЛОЖЕНИЕ</div>
                  <div className="contrast-demo-headline">Глубокая чистка салона авто в Риге</div>
                  <div className="contrast-demo-blurb">Убираем пятна, пыль и накопившуюся грязь. Выберите удобное время.</div>
                  <span className="contrast-demo-cta">Записаться на чистку <span>↗</span></span>
                </div>
                <p>Одна услуга. Один понятный следующий шаг.</p>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
