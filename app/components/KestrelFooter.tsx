import {localizedRoutes,type Language} from "../lib/localizedSeo";
export default function KestrelFooter({lang="lv"}:{lang?:Language}){
  const labels={
    lv:{home:"Sākums",services:"Pakalpojumi",about:"Par mums",contact:"Kontakti"},
    en:{home:"Home",services:"Services",about:"About us",contact:"Contact"},
    ru:{home:"Главная",services:"Услуги",about:"О нас",contact:"Контакты"}
  }[lang];
  return <footer className="ks-shared-footer">
    <div className="ks-shared-footer-inner">
      <a href={localizedRoutes.home[lang]} className="ks-shared-footer-brand">Kestrel</a>
      <nav aria-label={labels.services}>
        <a href={localizedRoutes.home[lang]}>{labels.home}</a>
        <a href={localizedRoutes.home[lang]+"#services"}>{labels.services}</a>
        <a href={localizedRoutes.about[lang]}>{labels.about}</a>
        <a href={localizedRoutes.contact[lang]}>{labels.contact}</a>
      </nav>
      <span>© 2026 Kestrel</span>
    </div>
  </footer>;
}
