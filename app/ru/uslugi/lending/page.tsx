import { localizedMetadata } from "../../../lib/localizedSeo";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ServicePricingFaq from "../../../components/ServicePricingFaqRu";
import RevealOnView from "../../../components/RevealOnView";
import ThemeToggle from "../../../components/ThemeToggle";
import ServicesDropdown from "../../../components/ServicesDropdown";

export const metadata = localizedMetadata("ru","landing");

export default function LandingPage() {
  return (
    <main lang="ru" className="service-page landing-page">
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

      <section className="service-page-hero">
        <div>
          <p className="service-page-kicker">Лендинг</p>
          <h1>Одна страница<br/>Одна цель</h1>
          <p className="service-page-lead">
            Лендинг для одного предложения: посетитель сразу понимает суть и следующий шаг.
          </p>

          <div className="service-page-actions">
            <a className="button button-primary" href="/ru/kontakty">Обсудить проект</a>
            <a className="text-link" href="#kas-ietilpst">Что входит <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="service-hero-demo" aria-hidden="true">
          <div className="service-demo-window">
            <div className="ui-browser-top"><span/><span/><span/></div>

            <div className="service-demo-nav">
              <span className="service-demo-brand">North</span>
              <div className="service-demo-nav-links">
                <span>Услуги</span>
                <span>О нас</span>
                <span className="service-demo-nav-cta">Начать</span>
              </div>
            </div>

            <div className="service-demo-hero">
              <div className="service-demo-copy-block">
                <span className="service-demo-eyebrow">Новое предложение</span>
                <strong>Понятно. Быстро.<br/>Ничего лишнего.</strong>
                <p>Одна страница, одна задача, понятный путь к заявке.</p>
                <span className="service-demo-primary">Оставить заявку</span>
              </div>

              <div className="service-demo-art">
                <div className="service-demo-art-shape"/>
                <div className="service-demo-art-card">
                  <span>Одна цель</span>
                  <strong>Простой путь клиента</strong>
                </div>
              </div>
            </div>

            <div className="service-demo-proof">
              <span>Понятное предложение</span>
              <span>Мобильная версия</span>
              <span>Одно главное действие</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-page-section service-fit-section" aria-labelledby="der-title">
        <div className="service-fit-head">
          <RevealOnView className="service-fit-kicker-reveal">
            <p className="service-page-kicker">Когда подходит</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-fit-title-reveal" delay={60}>
            <h2 id="der-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Когда достаточно</span></span>
              <span className="service-reveal-line"><span>одной страницы</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-fit-copy-reveal" delay={180}>
            <p>
              Лендинг подходит, когда важно представить одно предложение и привести клиента к одному действию.
            </p>
          </RevealOnView>
        </div>

        <div className="service-fit-editorial">
          <RevealOnView className="line-mask-reveal service-fit-statement">
            <p className="service-line-stack">
              <span className="service-reveal-line"><span>Не каждому бизнесу</span></span>
              <span className="service-reveal-line"><span>нужно десять страниц. Иногда</span></span>
              <span className="service-reveal-line"><span>одна страница справляется</span></span>
              <span className="service-reveal-line"><span>лучше.</span></span>
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-a" delay={0}>
            <h3>Одна услуга</h3>
            <p>
              Когда важно сосредоточить внимание на конкретной услуге, а не распылять его между страницами.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-b" delay={120}>
            <h3>Рекламная кампания</h3>
            <p>
              Когда после перехода по рекламе человеку нужна понятная страница с конкретным следующим шагом.
            </p>
          </RevealOnView>

          <RevealOnView className="service-fit-case service-fit-case-c" delay={240}>
            <h3>Новое предложение</h3>
            <p>
              Чтобы запустить или проверить идею без разработки большого сайта.
            </p>
          </RevealOnView>
        </div>
      </section>

      

      <section className="service-page-section service-includes-section" id="kas-ietilpst" aria-labelledby="includes-title">
        <div className="service-includes-intro">
          <RevealOnView className="service-includes-kicker">
            <p className="service-page-kicker">Что входит</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-includes-title" delay={60}>
            <h2 id="includes-title" className="service-line-stack">
              <span className="service-reveal-line"><span>Всё на одной странице</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-includes-copy" delay={160}>
            <p>
              Структура, дизайн и путь к заявке работают как единая система.
            </p>
          </RevealOnView>
        </div>

        <div className="service-anatomy" aria-label="Пример структуры лендинга">
          <RevealOnView className="service-anatomy-browser anatomy-browser-reveal">
            <div aria-hidden="true">
              <div className="ui-browser-top"><span/><span/><span/></div>
              <div className="service-anatomy-nav">
                <span className="service-anatomy-logo">North</span>
                <span className="service-anatomy-nav-line"/>
                <span className="service-anatomy-nav-button"/>
              </div>

              <div className="service-anatomy-hero">
                <div className="service-anatomy-copy">
                  <span className="service-anatomy-kicker"/>
                  <span className="service-anatomy-title"/>
                  <span className="service-anatomy-text"/>
                  <span className="service-anatomy-cta"/>
                </div>
                <div className="service-anatomy-art"/>
              </div>

              <div className="service-anatomy-content">
                <span/><span/><span/>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-phone anatomy-phone-reveal" delay={180}>
            <div aria-hidden="true">
              <div className="service-anatomy-phone-top"/>
              <span className="service-anatomy-phone-title"/>
              <span className="service-anatomy-phone-copy"/>
              <span className="service-anatomy-phone-cta"/>
            </div>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-structure anatomy-note-reveal" delay={80}>
            <h3>Понятная структура</h3>
            <p>Информация в правильном порядке: предложение понятно с первого взгляда.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-design anatomy-note-reveal" delay={160}>
            <h3>Дизайн под ваш бренд</h3>
            <p>Внешний вид соответствует вашему бизнесу, а не готовому шаблону.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-cta anatomy-note-reveal" delay={240}>
            <h3>Форма и призыв к действию</h3>
            <p>Одно понятное действие без лишних препятствий.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-mobile anatomy-note-reveal" delay={320}>
            <h3>Мобильная версия</h3>
            <p>Такая же понятная структура на телефоне.</p>
          </RevealOnView>

          <RevealOnView className="service-anatomy-note note-seo anatomy-note-reveal" delay={400}>
            <h3>Основы SEO</h3>
            <p>Семантическая структура и техническая основа для поисковиков.</p>
          </RevealOnView>
        </div>
      </section>


      <section className="service-page-section service-process-section" aria-labelledby="process-title">
        <div className="service-process-intro">
          <RevealOnView className="service-process-kicker">
            <p className="service-page-kicker">Как мы работаем</p>
          </RevealOnView>

          <RevealOnView className="line-mask-reveal service-process-title" delay={60}>
            <h2 id="process-title" className="service-line-stack">
              <span className="service-reveal-line"><span>От цели до запуска</span></span>
            </h2>
          </RevealOnView>

          <RevealOnView className="service-process-copy" delay={150}>
            <p>
              Сначала определяем цель, затем выстраиваем контент, дизайн и разработку.
            </p>
          </RevealOnView>
        </div>

        <div className="service-process-flow" aria-label="Этапы разработки лендинга">
          <RevealOnView className="service-process-step" delay={0}>
            <span className="service-process-name">Цель</span>
            <p>Для кого страница и какое действие должен выполнить посетитель.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={120}>
            <span className="service-process-name">Контент</span>
            <p>Информация, которая помогает разобраться и принять решение.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={240}>
            <span className="service-process-name">Дизайн</span>
            <p>Дизайн и разработка для компьютера и телефона.</p>
          </RevealOnView>

          <span className="service-process-arrow" aria-hidden="true">→</span>

          <RevealOnView className="service-process-step" delay={360}>
            <span className="service-process-name">Запуск</span>
            <p>Проверка деталей — и страница готова к работе.</p>
          </RevealOnView>
        </div>
      </section>


      <ServicePricingFaq
        service="Лендинг"
        pricingNote="Стоимость зависит от объёма контента и необходимых функций."
        included={["Количество блоков и объём контента","Дизайн под ваш бизнес","Кнопка записи или форма заявки","Мобильная версия и проверка"]}
        questions={[{"question":"Сколько времени занимает создание лендинга?","answer":"Срок зависит от готовности материалов и функций. Дату согласуем до начала работ."},{"question":"Нужно ли самому подготовить тексты и фотографии?","answer":"Пришлите то, что уже есть. Если нужна помощь с текстами или структурой, включим её в предложение."},{"question":"Будет ли сайт работать на телефоне?","answer":"Да. Мы адаптируем страницу для телефона и компьютера и проверяем основные действия."},{"question":"Можно ли добавить форму заявки?","answer":"Да. Подходящий способ записи или обратной связи согласуем в начале проекта."},{"question":"Домен и поддержка входят в стоимость?","answer":"Домен, хостинг и дальнейшую поддержку при необходимости рассчитываем отдельно."}]}
      />

      <section className="service-page-cta">
        <RevealOnView className="line-mask-reveal service-cta-title">
          <h2 className="service-line-stack">
            <span className="service-reveal-line"><span>Нужна понятная</span></span>
            <span className="service-reveal-line"><span>страница?</span></span>
          </h2>
        </RevealOnView>

        <RevealOnView className="service-cta-copy" delay={120}>
          <p>
            Расскажите о своём предложении, и мы вместе определим подходящий формат лендинга.
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
