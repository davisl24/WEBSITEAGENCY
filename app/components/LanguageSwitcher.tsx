"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const routes: Record<string, Record<"lv"|"en"|"ru", string>> = {
  home: {lv:"/",en:"/en",ru:"/ru"},
  about: {lv:"/par-mums",en:"/en/about",ru:"/ru/o-nas"},
  contact: {lv:"/kontakti",en:"/en/contact",ru:"/ru/kontakty"},
  landing: {lv:"/pakalpojumi/landing-lapa",en:"/en/services/landing-page",ru:"/ru/uslugi/lending"},
  company: {lv:"/pakalpojumi/uznemuma-majaslapa",en:"/en/services/business-website",ru:"/ru/uslugi/sajt-dlya-biznesa"},
  upgrade: {lv:"/pakalpojumi/majaslapas-uzlabosana",en:"/en/services/website-improvements",ru:"/ru/uslugi/uluchshenie-sajta"},
};

export default function LanguageSwitcher() {
  const pathname=usePathname();
  const row=Object.values(routes).find(item=>Object.values(item).includes(pathname)) ?? routes.home;
  const current=pathname.startsWith("/en")?"en":pathname.startsWith("/ru")?"ru":"lv";
  useEffect(() => { document.documentElement.lang = current; }, [current]);
  return <div className="language-switcher" role="group" aria-label="Website language">
    {(["lv","en","ru"] as const).map(lang=><a key={lang} href={row[lang]} hrefLang={lang} lang={lang} aria-current={current===lang?"page":undefined} className={current===lang?"is-active":undefined}>{lang.toUpperCase()}</a>)}
  </div>;
}
