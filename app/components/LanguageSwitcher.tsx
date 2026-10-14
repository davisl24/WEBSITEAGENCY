"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localizedRoutes, type Language, type PageKey } from "../lib/localizedSeo";

const languages: Language[] = ["lv", "en", "ru"];
export default function LanguageSwitcher(){
  const pathname=usePathname();
  const locale:Language=pathname.startsWith("/en")?"en":pathname.startsWith("/ru")?"ru":"lv";
  const entry=Object.entries(localizedRoutes).find(([,variants])=>Object.values(variants).includes(pathname)) as [PageKey,Record<Language,string>]|undefined;
  useEffect(()=>{document.documentElement.lang=locale},[locale]);
  return <div className="language-switcher language-switcher-inline" role="group" aria-label={locale==="en"?"Language":locale==="ru"?"Язык":"Valoda"}>
    {languages.map(lang=>entry
      ? <a key={lang} href={entry[1][lang]} hrefLang={lang} lang={lang} aria-current={lang===locale?"page":undefined} title={lang==="lv"?"Latviešu":lang==="en"?"English":"Русский"}>{lang.toUpperCase()}</a>
      : <span key={lang} className={lang===locale?"is-current":"is-unavailable"} title="Šai lapai tulkojums vēl nav pieejams">{lang.toUpperCase()}</span>
    )}
  </div>;
}
