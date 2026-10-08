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
          <h1>Сайты с понятной целью</h1>
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
              <strong>North</strong>
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
          <RevealOnView>
            <p className="service-page-kicker">Кто мы</p>
          </RevealOnView>

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
          <RevealOnView className="line-mask-reveal about-thinking-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Если сайт выглядит красиво,</span></span>
              <span className="service-reveal-line"><span>но посетитель теряется,</span></span>
              <span className="service-reveal-line"><span>работа не закончена.</span></span>
            </p>
          </RevealOnView>

          <div className="about-principles">
            <RevealOnView className="about-principle" delay={60}>
              <h3>Понятная цель</h3>
              <p>Сначала определяем, какое действие должен совершить посетитель.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={150}>
              <h3>Меньше лишнего</h3>
              <p>Не добавляем блоки только ради объёма.</p>
            </RevealOnView>

            <RevealOnView className="about-principle" delay={240}>
              <h3>Удобство в реальности</h3>
              <p>Проверяем сайт на компьютере и телефоне как реальный путь клиента.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      <section className="service-page-section about-focus-section" aria-labelledby="about-focus-title">
        <div className="about-focus-intro">
          <RevealOnView>
            <p className="service-page-kicker">Наши принципы</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="about-focus-title" className="service-line-stack about-focus-title">
              <span className="service-reveal-line"><span>Лучше меньше, да лучше</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="about-focus-copy">
              Лучше убрать один ненужный блок, чем добавить три новых. У каждого элемента должна быть цель.
            </p>
          </RevealOnView>
        </div>

        <div className="about-focus-visual">
          <RevealOnView className="about-chaos-panel">
            <span className="about-focus-caption">Слишком много</span>
            <div className="about-chaos-ui" aria-hidden="true">
              <span/><span/><span/><span/><span/><span/>
            </div>
          </RevealOnView>

          <RevealOnView className="about-focus-arrow" delay={100} aria-hidden="true">
            <span>→</span>
          </RevealOnView>

          <RevealOnView className="about-clear-panel" delay={180}>
            <span className="about-focus-caption">Понятно</span>
            <div className="about-clear-ui" aria-hidden="true">
              <span className="about-clear-kicker"/>
              <span className="about-clear-title"/>
              <span className="about-clear-copy"/>
              <span className="about-clear-button"/>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="service-page-section about-working-section" aria-labelledby="about-working-title">
        <div className="about-working-intro">
          <RevealOnView>
            <p className="service-page-kicker">Сотрудничество</p>
          </RevealOnView>

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
