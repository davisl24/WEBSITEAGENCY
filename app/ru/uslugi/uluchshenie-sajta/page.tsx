import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqRu";
import type { Metadata } from "next";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata: Metadata = {
  title: "Улучшение сайта | Kestrel",
  description:
    "Улучшаем существующий сайт: структура, удобство и путь клиента.",
};

export default function WebsiteUpgradePage() {
  return (
    <main className="service-page upgrade-page">
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

      <section className="service-page-hero upgrade-service-hero">
        <div>
          <p className="service-page-kicker">Улучшение сайта</p>
          <h1>Ваш сайт может работать лучше</h1>
          <p className="service-page-lead">
            Если существующий сайт неудобен и непонятен, не всегда нужно переделывать его с нуля.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/ru/kontakty">Обсудить улучшения</a>
            <a className="text-link" href="#ko-mainam">Что улучшаем <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="upgrade-hero-visual" aria-hidden="true">
          <div className="upgrade-hero-before">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-before-body">
              <span/><span/><span/><span/>
            </div>
          </div>

          <div className="upgrade-hero-after">
            <div className="ui-browser-top"><span/><span/><span/></div>
            <div className="upgrade-hero-after-nav">
              <strong>North</strong>
              <span/>
            </div>
            <div className="upgrade-hero-after-body">
              <div>
                <span className="upgrade-hero-kicker"/>
                <span className="upgrade-hero-title"/>
                <span className="upgrade-hero-copy"/>
                <span className="upgrade-hero-cta"/>
              </div>
              <span className="upgrade-hero-art"/>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section upgrade-signs-section" aria-labelledby="upgrade-signs-title">
        <div className="upgrade-signs-intro">
          <RevealOnView>
            <p className="service-page-kicker">Когда пора улучшать</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-signs-title" className="service-line-stack upgrade-signs-title">
              <span className="service-reveal-line"><span>Когда сайт начинает</span></span>
              <span className="service-reveal-line"><span>мешать</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-signs-copy">
              Причина не всегда в устаревшем дизайне. Часто сайт просто усложняет путь клиента.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-signs-layout">
          <RevealOnView className="line-mask-reveal upgrade-signs-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Если нужно искать,</span></span>
              <span className="service-reveal-line"><span>гадать или сомневаться —</span></span>
              <span className="service-reveal-line"><span>что-то не работает.</span></span>
            </p>
          </RevealOnView>

          <div className="upgrade-signs-side">
            <RevealOnView className="upgrade-sign" delay={70}>
              <h3>Непонятное предложение</h3>
              <p>Текста много, но неясно, какие услуги предлагает компания.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={160}>
              <h3>Неудобно на телефоне</h3>
              <p>С телефона информацию трудно читать, а элементами неудобно пользоваться.</p>
            </RevealOnView>

            <RevealOnView className="upgrade-sign" delay={250}>
              <h3>Сложно оставить заявку</h3>
              <p>Контакты, запись или форма заявки не видны в нужный момент.</p>
            </RevealOnView>
          </div>
        </div>
      </section>

      

      <section className="service-page-section upgrade-compare-section" id="ko-mainam" aria-labelledby="upgrade-compare-title">
        <div className="upgrade-compare-intro">
          <RevealOnView>
            <p className="service-page-kicker">Что улучшаем</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal" delay={60}>
            <h2 id="upgrade-compare-title" className="service-line-stack upgrade-compare-title">
              <span className="service-reveal-line"><span>Сохраняем полезное,</span></span>
              <span className="service-reveal-line"><span>исправляем лишнее</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView delay={150}>
            <p className="upgrade-compare-copy">
              Не всегда нужен новый сайт. Иногда достаточно сделать структуру понятнее и упростить путь к заявке.
            </p>
          </RevealOnView>
        </div>

        <div className="upgrade-compare">
          <RevealOnView className="upgrade-compare-before">
            <div className="upgrade-compare-label">До</div>
            <div className="upgrade-compare-browser" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-before-body">
                <span/><span/><span/><span/><span/>
                <div><span/><span/><span/></div>
              </div>
            </div>
            <p>Всё конкурирует за внимание, а следующий шаг незаметен.</p>
          </RevealOnView>

          <RevealOnView className="upgrade-compare-after" delay={160}>
            <div className="upgrade-compare-label">После</div>
            <div className="upgrade-compare-browser upgrade-compare-browser-after" aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="upgrade-compare-after-body">
                <div>
                  <span className="upgrade-compare-kicker"/>
                  <span className="upgrade-compare-heading"/>
                  <span className="upgrade-compare-text"/>
                  <span className="upgrade-compare-button"/>
                </div>
                <span className="upgrade-compare-art"/>
              </div>
            </div>
            <p>Понятная иерархия, лучшее первое впечатление и заметное действие.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="upgrade-process-title">
        <div className="service-process-intro">
          <RevealOnView>
            <p className="service-page-kicker">Как мы работаем</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="upgrade-process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>От проблемы к решению</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Сначала находим реальные препятствия, затем исправляем именно их.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Улучшение сайтаs process">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Аудит</span>
            <p>Проверяем структуру, мобильную версию, скорость и путь клиента.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Приоритеты</span>
            <p>Отделяем важные проблемы от косметических мелочей.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Доработки</span>
            <p>Улучшаем структуру, дизайн и функции там, где это нужно.</p>
          </RevealOnView>
          <span className="service-process-arrow" aria-hidden="true">→</span>
          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Проверка</span>
            <p>Проверяем на компьютере и телефоне, исправляем детали.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Улучшение сайта"
        pricingNote="Стоимость зависит от проблем текущего сайта и объёма доработок."
        included={["Анализ текущего сайта","Приоритеты важных проблем","Точечные доработки дизайна и функций","Проверка после изменений"]}
        questions={[{"question":"Нужно переделывать весь сайт?","answer":"Не всегда. Сначала выясним, что стоит сохранить, а что исправить."},{"question":"Можно улучшить только один раздел?","answer":"Да. Если проблема локальная, начнём с конкретного блока."},{"question":"Вы работаете с моей текущей платформой?","answer":"Это зависит от платформы и доступа. Сначала оценим технические ограничения."},{"question":"Как понять, что улучшать в первую очередь?","answer":"Начинаем с того, что мешает клиенту понять предложение или связаться с вами."},{"question":"Не повредят ли изменения работающему сайту?","answer":"До начала работ согласуем объём изменений и безопасный способ их внесения."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Не обязательно начинать</span></span>
            <span className="service-reveal-line"><span>с нуля</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Покажите ваш сайт, и мы подскажем, что сохранить, улучшить или переделать.
          </p>
        </RevealOnView>

        <RevealOnView className="service-cta-action" delay={220}>
          <a className="button button-primary" href="/ru/kontakty">Показать текущий сайт</a>
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
