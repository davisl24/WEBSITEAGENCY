import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import ServicesDropdown from "./ServicesDropdown";
import { localizedRoutes, type Language } from "../lib/localizedSeo";

export default function KestrelHeader({active="",lang="lv"}:{active?:"home"|"about"|"contact"|"",lang?:Language}){
  const names={
    lv:{home:"Sākums",about:"Par mums",contact:"Kontakti",cta:"Pieteikt sarunu",nav:"Galvenā navigācija"},
    en:{home:"Home",about:"About us",contact:"Contact",cta:"Discuss your project",nav:"Main navigation"},
    ru:{home:"Главная",about:"О нас",contact:"Контакты",cta:"Обсудить проект",nav:"Главная навигация"}
  }[lang];
  return <header className="site-header kestrel-shared-header" aria-label={names.nav}>
    <a className="brand" href={localizedRoutes.home[lang]} aria-label="Kestrel">Kestrel</a>
    <nav className="site-nav" aria-label={names.nav}>
      <a href={localizedRoutes.home[lang]} aria-current={active==="home"?"page":undefined}>{names.home}</a>
      <ServicesDropdown />
      <a href={localizedRoutes.about[lang]} aria-current={active==="about"?"page":undefined}>{names.about}</a>
      <a href={localizedRoutes.contact[lang]} aria-current={active==="contact"?"page":undefined}>{names.contact}</a>
      <LanguageSwitcher/>
      <ThemeToggle/>
      <a className="header-cta" href={localizedRoutes.contact[lang]}>{names.cta}</a>
    </nav>
  </header>;
}
