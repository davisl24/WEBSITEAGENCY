"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const routes: Record<string, Record<"lv"|"en"|"ru", string>> = {
  home: {lv:"/",en:"/en",ru:"/ru"},
  about: {lv:"/par-mums",en:"/en/about",ru:"/ru/o-nas"},
  contact: {lv:"/kontakti",en:"/en/contact",ru:"/ru/kontakty"},
  landing: {lv:"/pakalpojumi/landing-lapa",en:"/en/services/landing-page",ru:"/ru/uslugi/lending"},
  company: {lv:"/pakalpojumi/uznemuma-majaslapa",en:"/en/services/business-website",ru:"/ru/uslugi/sajt-dlya-biznesa"},
  upgrade: {lv:"/pakalpojumi/majaslapas-uzlabosana",en:"/en/services/website-improvements",ru:"/ru/uslugi/uluchshenie-sajta"},
};

const names = {lv:"Latviešu",en:"English",ru:"Русский"} as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const current = pathname.startsWith("/en") ? "en" : pathname.startsWith("/ru") ? "ru" : "lv";
  const row = Object.values(routes).find(item => Object.values(item).includes(pathname));
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => { document.documentElement.lang = current; }, [current]);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {setOpen(false);trigger.current?.focus();}
    };
    document.addEventListener("pointerdown",closeOutside);
    document.addEventListener("keydown",onKeyDown);
    return () => {
      document.removeEventListener("pointerdown",closeOutside);
      document.removeEventListener("keydown",onKeyDown);
    };
  }, [open]);

  return (
    <div className="language-switcher language-switcher-dropdown" ref={root}>
      <button ref={trigger} className="language-switcher-trigger" type="button" aria-expanded={open} aria-haspopup="true" aria-label="Select language" onClick={() => setOpen(v => !v)}>
        <span className="language-switcher-codes" aria-hidden="true"><span className={current==="lv"?"active":""}>LV</span><span className={current==="en"?"active":""}>EN</span><span className={current==="ru"?"active":""}>RU</span></span>
        <span className="language-switcher-chevron" aria-hidden="true">⌄</span>
      </button>
      {open && <div className="language-switcher-menu" aria-label="Languages">
        {(["lv","en","ru"] as const).map(lang => row ? <a key={lang} href={row[lang]} lang={lang} hrefLang={lang} aria-current={current===lang?"page":undefined} className={current===lang?"is-active":undefined} onClick={() => setOpen(false)}>
          <span>{names[lang]}</span><span>{lang.toUpperCase()}</span>
        </a> : lang === current ? <span key={lang} className="is-active"><span>{names[lang]}</span><span>{lang.toUpperCase()}</span></span> : <span key={lang} className="language-option-unavailable" title="Šīs lapas tulkojums nav pieejams"><span>{names[lang]}</span><span>Drīzumā</span></span>)}
      </div>}
    </div>
  );
}
