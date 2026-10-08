import { localizedMetadata } from "../../lib/localizedSeo";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import RevealOnView from "../../components/RevealOnView";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";

export const metadata = localizedMetadata("ru","contact");

export default function ContactPage() {
  return (
    <main lang="ru" className="service-page contact-page">
      <header className="service-page-header" aria-label="Главная навигация">
        <a className="brand" href="/ru" aria-label="Главная">Kestrel</a>
        <nav className="service-page-nav" aria-label="Главная навигация">
            <ServicesDropdown />
            <a href="/ru/o-nas">О нас</a>
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="header-cta" href="/ru/kontakty" aria-current="page">Обсудить проект</a>
          </nav>
      </header>

      <section className="contact-page-hero contact-booking-layout" aria-labelledby="booking-title">
        <div className="contact-page-copy">
          <p className="service-page-kicker">Обсудить проект</p>
          <h1 id="booking-title">Выберите время для разговора</h1>
          <p>За 15 минут обсудим вашу идею и определим, какой сайт лучше подойдёт бизнесу.</p>
          <div className="contact-page-note">
            <span>Бесплатная консультация</span>
            <small>Google Meet · 15 минут · без обязательств</small>
          </div>
          <p className="booking-preview-disclaimer">Пока это макет календаря — онлайн-запись ещё не подключена.</p>
        </div>
        <RevealOnView className="booking-preview-wrap" delay={80}>
          <div className="booking-preview" aria-label="Макет календаря: запись пока недоступна">
            <div className="booking-preview-top">
              <span>ВЫБЕРИТЕ ДАТУ И ВРЕМЯ</span>
              <span className="booking-preview-label">DEMO</span>
            </div>
            <div className="booking-preview-month"><strong>Октябрь 2026</strong><span aria-hidden="true">‹ &nbsp; ›</span></div>
            <div className="booking-preview-weekdays" aria-hidden="true">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>
            <div className="booking-preview-days" aria-hidden="true">
              {Array.from({ length: 3 }, (_, i) => <span className="booking-preview-blank" key={`blank-${i}`}/>)}
              {Array.from({ length: 31 }, (_, i) => <span className={i === 13 ? "booking-preview-selected" : ""} key={i}>{i + 1}</span>)}
            </div>
            <div className="booking-preview-times">
              <span>Пример времени</span>
              <div><span>10:00</span><span className="booking-preview-time-selected">11:30</span><span>14:00</span></div>
            </div>
            <div className="booking-preview-bottom">
              <span>15 min · Google Meet</span>
              <span className="booking-preview-submit">Записаться →</span>
            </div>
            <p className="booking-preview-footnote">Это демонстрация — даты и время пока недоступны для бронирования.</p>
          </div>
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
