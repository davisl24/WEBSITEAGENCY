import { localizedMetadata } from "../../lib/localizedSeo";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata = localizedMetadata("ru","about");

export default function AboutPage() {
  return (
    <main lang="ru" className="service-page about-page">
      <header className="service-page-header" aria-label="Главная навигация">
        <a className="brand" href="/ru" aria-label="Главная">Kestrel</a>
        <nav className="service-page-nav" aria-label="Главная навигация">
            <ServicesDropdown />
            <a href="/ru/o-nas" aria-current="page">О нас</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/ru/kontakty">Обсудить проект</a>
          </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="service-page-kicker">О Kestrel</p>
          <h1>О нас</h1>
          <p>
            Мы создаём сайты для малого бизнеса, на которых клиент легко понимает предложение, доверяет компании и знает, как оставить заявку.
          </p>
          <a className="button button-primary" href="/ru/kontakty">Рассказать о проекте</a>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-plan-sheet">
            <span className="about-plan-label">Цель</span>
            <strong>Что важно понять клиенту</strong>
            <div className="about-plan-lines"><span/><span/><span/></div>
          </div>

          <div className="about-plan-arrow">→</div>

          <div className="about-browser">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="about-browser-nav">
              <strong>Kestrel</strong>
              <span/>
            </div>
            <div className="about-browser-body">
              <span className="about-browser-kicker"/>
              <span className="about-browser-title"/>
              <span className="about-browser-copy"/>
              <span className="about-browser-cta"/>
            </div>
          </div>
        </div>
      </section>


      <section className="service-page-section about-company-section" aria-labelledby="about-company-title">
        <div className="about-company-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-company-title" className="service-line-stack about-company-title">
              <span className="service-reveal-line"><span>Разработка сайтов с понятной целью</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-company-layout">
          <RevealOnView className="about-company-main">
            <p>
              Kestrel — команда веб-разработки из Латвии. Помогаем малому бизнесу создавать понятные и быстрые сайты с конкретной задачей, без лишних сложностей.
            </p>
          </RevealOnView>

          <RevealOnView className="about-company-side" delay={120}>
            <div>
              <span>Что мы делаем</span>
              <p>Лендинги, сайты компаний и улучшение существующих сайтов.</p>
            </div>
            <div>
              <span>После запуска</span>
              <p>При необходимости помогаем с хостингом, поддержкой и дальнейшими улучшениями.</p>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section about-thinking-section" aria-labelledby="about-thinking-title">
        <div className="about-thinking-intro">
          <RevealOnView>
            <p className="service-page-kicker">Наш подход</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-thinking-title" className="service-line-stack about-thinking-title">
              <span className="service-reveal-line"><span>Сначала ясность, потом эффекты</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-thinking-copy">
              Хороший дизайн не только красиво выглядит. Он помогает быстро понять предложение и следующий шаг.
            </p>
          </RevealOnView>
        </div>

        <div className="about-thinking-layout">
          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}><h3>Понятная цель</h3><p>Определяем главное действие посетителя</p></RevealOnView>
            <RevealOnView className="about-principle" delay={140}><h3>Продуманный контент</h3><p>Размещаем важную информацию в понятной последовательности</p></RevealOnView>
            <RevealOnView className="about-principle" delay={220}><h3>Удобство</h3><p>Проверяем сайт на компьютере и телефоне</p></RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section about-working-section" aria-labelledby="about-working-title">
        <div className="about-working-intro">

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-working-title" className="service-line-stack about-working-title">
              <span className="service-reveal-line"><span>Простое общение</span></span>
            </h2>
          </RevealOnView>
        </div>

        <div className="about-working-copy">
          <RevealOnView delay={0}>
            <p>
              Не усложняем процесс презентациями и техническими терминами ради видимости серьёзности.
            </p>
          </RevealOnView>

          <RevealOnView delay={120}>
            <p>
              Если что-то делать не нужно, скажем об этом. Когда следующий шаг ясен, приступаем к работе и доводим её до конца.
            </p>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Обсудим</span></span>
            <span className="service-reveal-line"><span>ваш сайт</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Коротко расскажите о бизнесе, и мы предложим разумный первый шаг.
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
