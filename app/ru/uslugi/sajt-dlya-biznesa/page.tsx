import { localizedMetadata } from "../../../lib/localizedSeo";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqRu";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata = localizedMetadata("ru","company");

export default function CompanyWebsitePage() {
  return (
    <main className="service-page company-page">
      <header className="service-page-header" aria-label="Главная навигация">
        <a className="brand" href="/ru" aria-label="Главная">Kestrel</a>
        <nav className="service-page-nav" aria-label="Главная навигация">
            <ServicesDropdown />
            <a href="/ru/o-nas">О нас</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/ru/kontakty">Обсудить проект</a>
          </nav>
      </header>

      <section className="service-page-hero company-service-hero">
        <div>
          <p className="service-page-kicker">Сайт для бизнеса</p>
          <h1>Ваш бизнес — на одном понятном сайте</h1>
          <p className="service-page-lead">
            Сайт, который помогает клиентам понять ваш бизнес, довериться вам и связаться с вами.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/ru/kontakty">Обсудить проект</a>
            <a className="text-link" href="#struktura">Как всё устроено <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="company-hero-visual" aria-hidden="true">
          <div className="company-browser">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="company-browser-nav">
              <strong>North</strong>
              <span>Услуги</span>
              <span>О нас</span>
              <span>Контакты</span>
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
            <p className="service-page-kicker">Когда подходит</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-fit-title" className="service-line-stack company-fit-title">
              <span className="service-reveal-line"><span>Когда одной страницы</span></span>
              <span className="service-reveal-line"><span>уже недостаточно</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-fit-copy">
              Когда нужно представить несколько услуг, показать опыт и предложить удобные способы связи.
            </p>
          </RevealOnView>
        </div>

        <div className="company-fit-layout">
          <RevealOnView className="company-fit-statement line-mask-reveal">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Клиент не должен гадать,</span></span>
              <span className="service-reveal-line"><span>где найти важную</span></span>
              <span className="service-reveal-line"><span>информацию</span></span>
            </p>
          </RevealOnView>

          <div className="company-fit-side">
            <RevealOnView className="company-fit-item" delay={60}>
              <h3>Несколько услуг</h3>
              <p>У каждой услуги своё место, а весь сайт работает как единая система.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={150}>
              <h3>Доверие</h3>
              <p>Информация о компании, проектах, отзывах и вашем подходе.</p>
            </RevealOnView>
            <RevealOnView className="company-fit-item" delay={240}>
              <h3>Разные способы связи</h3>
              <p>Звонок, заявка или другой удобный способ связаться.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section company-structure-section" id="struktura" aria-labelledby="company-structure-title">
        <div className="company-structure-intro">
          <RevealOnView>
            <p className="service-page-kicker">Структура</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="company-structure-title" className="service-line-stack company-structure-title">
              <span className="service-reveal-line"><span>Каждому разделу</span></span>
              <span className="service-reveal-line"><span>своё место</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="company-structure-copy">
              Не больше страниц ради количества, а понятная структура, которая отвечает на вопросы клиента.
            </p>
          </RevealOnView>
        </div>

        <div className="company-page-system" aria-label="Пример структуры сайта">
          <RevealOnView className="company-page-main">
            <div className="company-page-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="company-page-browser-nav">
                <strong>North</strong>
                <div><span>Услуги</span><span>О нас</span><span>Контакты</span></div>
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
                <span>Главная</span>
                <small>Основное предложение и путь дальше</small>
              </div>
            </div>
          </RevealOnView>

          <div className="company-page-stack">
            <RevealOnView className="company-page-sheet company-page-sheet-services" delay={80}>
              <div className="company-page-sheet-top">
                <span>Услуги</span>
                <small>Что вы предлагаете и кому</small>
              </div>
              <div className="company-page-sheet-preview" aria-hidden="true">
                <span/><span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-about" delay={170}>
              <div className="company-page-sheet-top">
                <span>О нас</span>
                <small>Почему вам можно доверять</small>
              </div>
              <div className="company-page-sheet-preview company-page-sheet-preview-about" aria-hidden="true">
                <span/><span/>
              </div>
            </RevealOnView>

            <RevealOnView className="company-page-sheet company-page-sheet-contact" delay={260}>
              <div className="company-page-sheet-top">
                <span>Контакты</span>
                <small>Понятный следующий шаг</small>
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
            <p className="service-page-kicker">Как мы работаем</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="company-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>От контента до запуска</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Сначала изучаем бизнес и путь клиента, затем объединяем контент, дизайн и разработку.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Этапы разработки сайта">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Цель</span>
            <p>Что клиент должен понять и какое действие совершить.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Контент</span>
            <p>Наводим порядок в информации и оставляем нужное.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Дизайн</span>
            <p>Создаём целостный дизайн и разрабатываем сайт.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Запуск</span>
            <p>Проверяем детали, исправляем ошибки и запускаем.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Сайт для бизнеса"
        pricingNote="Стоимость зависит от количества страниц, объёма материалов и интеграций."
        included={["Количество страниц и структура","Дизайн и мобильная версия","Формы связи и интеграции","Подготовка контента и поддержка"]}
        questions={[{"question":"Сколько страниц нужно моему сайту?","answer":"Это зависит от количества информации. Страницы и разделы определим вместе."},{"question":"Можно будет добавить страницы позже?","answer":"Да. Сразу предусматриваем возможность расширения сайта."},{"question":"Вы поможете с текстами?","answer":"Поможем сформулировать предложение и выстроить тексты. Полное написание контента обсудим отдельно."},{"question":"Сайт будет работать на телефоне?","answer":"Да. Разрабатываем и проверяем сайт на компьютере и телефоне."},{"question":"Что будет после запуска?","answer":"При необходимости обсудим хостинг, техническую поддержку и развитие сайта."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Хотите привести в порядок</span></span>
            <span className="service-reveal-line"><span>сайт компании?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Расскажите о компании, а мы предложим подходящую структуру сайта.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/ru/kontakty">Рассказать о проекте</a>
        </RevealOnView>
      </section>

      <footer className="service-page-footer">
        <nav className="service-page-footer-nav" aria-label="Навигация">
          <a href="/ru">Главная</a>
          <a href="/ru/#services">Услуги</a>
          <a href="/ru/o-nas">О нас</a>
          <a href="/ru/kontakty">Контакты</a>
        </nav>
        <div className="service-page-footer-bottom">
          <span>Kestrel</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
