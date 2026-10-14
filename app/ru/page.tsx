import { localizedMetadata } from "../lib/localizedSeo";
import Image from "next/image";
import heroBg from "../assets/images/andrew-kliatskyi-k7XTD-HCZAw-unsplash.jpg";
import heroBgLight from "../assets/images/balts_fons_optimizets.webp";
import ValueShowcase from "../components/ValueShowcaseRu";
import ProcessFlow from "../components/ProcessFlow";
import KestrelHeader from "../components/KestrelHeader";

export const metadata = localizedMetadata("ru","home");

export default function Home() {
  return (
    <main lang="ru" id="top">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src={heroBg} alt="" fill priority className="hero-media-image hero-media-image-dark" />
          <Image src={heroBgLight} alt="" fill priority className="hero-media-image hero-media-image-light" />
          <div className="hero-media-overlay" />
        </div>

        <KestrelHeader active="home" lang="ru" />
        <div className="hero-shell">
          <div className="hero-copy">
            <h1>Сайты, которые помогают получать заявки</h1>
            <p className="hero-description">
              Создаём понятные сайты для компаний, чтобы клиенты
              быстрее понимали предложение и могли связаться
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/ru/kontakty">Обсудить проект</a>
              <a className="text-link" href="#services">Смотреть услуги <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-inner">
          <div className="services-head">
            <h2 id="services-title">Услуги</h2>
          </div>
          <div className="kestrel-services-v2 kestrel-services-premium">
            <a className="ks-main ks-category" href="/ru/uslugi/razrabotka-sajtov">
              <span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 22h8m-4-4v4"/></svg></span>
              <div className="ks-row-body">
                <h3>Разработка сайтов</h3>
                <p>Лендинги · Сайты компаний · Улучшение сайтов</p>
                <div className="ks-offers" aria-label="Sākuma cenas"><span>Лендинг от 200 €</span><span>Сайт компании от 450 €</span></div>
              </div>
              <span className="ks-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="ks-other-grid">
              <a className="ks-item ks-category" href="/ru/uslugi/internet-magazin"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l3 13h13l2-9H5"/></svg></span><div className="ks-row-body"><h3>Интернет-магазины</h3><p>Каталог · Оплата · Доставка</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/ru/uslugi/seo"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.8" cy="10.8" r="7"/><path d="m16 16 5 5"/></svg></span><div className="ks-row-body"><h3>SEO</h3><p>Техническое SEO · Контент · Аудит</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/ru/uslugi/ui-ux"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m5 3 14 9-7 1.6L9 20 5 3Z"/></svg></span><div className="ks-row-body"><h3>UI/UX-дизайн</h3><p>Аудит · Структура · Интерфейсы</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
              <a className="ks-item ks-category" href="/ru/uslugi/obsluzhivanie-sajtov"><span className="ks-service-icon"><svg className="ks-service-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg></span><div className="ks-row-body"><h3>Хостинг и поддержка</h3><p>Размещение · Мониторинг · Обновления</p></div><span className="ks-arrow" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>


      <ValueShowcase />

      <ProcessFlow lang="ru" />

      <section className="call-section" aria-labelledby="call-title">
        <div className="call-inner">
          
          <div className="call-content">
            <div>
              <h2 id="call-title">Расскажите о вашем проекте</h2>
              <p>Обсудим идею и выберем подходящее решение</p>
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
            <p className="footer-statement">Сайты с понятной структурой и продуманным дизайном.</p>
          </div>
            <div className="footer-links">
              <div>
                <span>Навигация</span>
                <a href="#services">Услуги</a>
                <a href="#process">Process</a>
                <a href="/ru/o-nas">О нас</a>
                <a href="/ru/kontakty">Контакты</a>
              </div>
              <div>
                <span>Контакты</span>
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
