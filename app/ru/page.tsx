import LanguageSwitcher from "components/LanguageSwitcher";
import Image from "next/image";
import heroBg from "../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "./assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "../components/ValueShowcaseRu";
import ПроцессFlow from "../components/ПроцессFlowRu";
import RevealOnView from "../components/RevealOnView";
import ThemeToggle from "../components/ThemeToggle";
import ServicesDropdown from "../components/ServicesDropdown";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroBg} alt="" fill priority className="hero-media-image hero-media-image-dark" />
          <Image src={heroBgLight} alt="" fill priority className="hero-media-image hero-media-image-light" />
          <div className="hero-media-overlay" />
        </div>

        <header className="site-header" aria-label="Главная навигация">
          <a className="brand" href="/ru" aria-label="Главная">Kestrel</a>
          <nav className="site-nav" aria-label="Главная навигация">
            <ServicesDropdown />
            <a href="/ru/o-nas">О нас</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/ru/kontakty">Обсудить проект</a>
          </nav>
        </header>

        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-label">Сайты для малого бизнеса</p>
            <h1>Сайты, которые помогают получать заявки</h1>
            <p className="hero-description">
              Создаём быстрые и понятные сайты, на которых клиент сразу видит предложение и знает, как оставить заявку.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/ru/kontakty">Обсудить проект</a>
              <a className="text-link" href="#services">Наши услуги <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <p className="section-label">Услуги</p>
            <h2 id="services-title">Выберите подходящее решение</h2>
            <p className="services-intro">
              Нужен лендинг, полноценный сайт компании или улучшение существующего? Начнём с вашей задачи.
            </p>
          </div>

          <div className="services-grid">
            <a href="/ru/uslugi/lending" className="service-card">
              <div className="service-visual service-visual-landing">
                <div className="service-story service-story-landing" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-landing-body">
                    <span className="story-eyebrow"/>
                    <span className="story-landing-title"/>
                    <span className="story-landing-subtitle"/>
                    <span className="story-landing-cta"/>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Для одного конкретного предложения</p>
                <h3>Лендинг</h3>
                <p>Одна страница для конкретной услуги, продукта или рекламной кампании.</p>

                <span className="service-link" aria-hidden="true">Подробнее об услуге <span>→</span></span>
              </div>
            </a>

            <a href="/ru/uslugi/sajt-dlya-biznesa" className="service-card service-card-featured">
              <div className="service-visual service-visual-website">
                <div className="service-story service-story-company" aria-hidden="true">
                  <div className="story-top"><span/><span/><span/></div>
                  <div className="story-company-nav"><span/><span/><span/><span/></div>
                  <div className="story-company-hero">
                    <div className="story-company-copy"><span/><span/><span/></div>
                    <div className="story-company-image"/>
                  </div>
                  <div className="story-company-pages"><span/><span/><span/></div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Когда одной страницы недостаточно</p>
                <h3>Сайт для бизнеса</h3>
                <p>Сайт, где удобно представить услуги, компанию и способы связи.</p>

                <span className="service-link" aria-hidden="true">Подробнее об услуге <span>→</span></span>
              </div>
            </a>

            <a href="/ru/uslugi/uluchshenie-sajta" className="service-card">
              <div className="service-visual service-visual-upgrade">
                <div className="story-upgrade" aria-hidden="true">
                  <div className="story-upgrade-before">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-before-body"><span/><span/><span/><span/></div>
                  </div>
                  <span className="story-upgrade-arrow">→</span>
                  <div className="story-upgrade-after">
                    <div className="story-top"><span/><span/><span/></div>
                    <div className="story-after-body">
                      <span className="story-after-eyebrow"/>
                      <span className="story-after-title"/>
                      <span className="story-after-copy"/>
                      <span className="story-after-button"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-card-body">
                <p className="service-kicker">Когда сайт уже есть</p>
                <h3>Улучшение сайта</h3>
                <p>Делаем существующий сайт понятнее, удобнее и эффективнее.</p>

                <span className="service-link" aria-hidden="true">Подробнее об услуге <span>→</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ПроцессFlow />

      <section className="call-section" aria-labelledby="call-title">
        <div className="call-inner">
          <div className="call-kicker">Короткий разговор без обязательств</div>
          <div className="call-content">
            <div>
              <h2 id="call-title">Обсудим ваш сайт</h2>
              <p>За 15 минут выясним, что нужно вашему бизнесу и чем мы можем помочь.</p>
            </div>
            <a className="call-cta" href="/ru/kontakty">
              <span className="call-dot" aria-hidden="true" />
              <span>Обсудить проект</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
          <div className="footer-wordmark-block">
            <a href="/ru" className="footer-wordmark">Kestrel</a>
            <p className="footer-statement">Создаём сайты с понятной целью и продуманным дизайном.<br/>Помогаем малому бизнесу представить услуги и упростить путь клиента к заявке.</p>
          </div>
            <div className="footer-links">
              <div>
                <span>Навигация</span>
                <a href="#services">Услуги</a>
                <a href="#process">Процесс</a>
                <a href="/ru/o-nas">О нас</a>
                <a href="/ru/kontakty">Контакты</a>
              </div>
              <div>
                <span>Связаться</span>
                <a className="footer-contact-link" href="/ru/kontakty">Обсудить проект <span aria-hidden="true">↗</span></a>
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
