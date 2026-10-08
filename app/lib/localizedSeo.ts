import type { Metadata } from "next";

export type Language = "lv" | "en" | "ru";
export type PageKey = "home" | "about" | "contact" | "landing" | "company" | "upgrade";

export const localizedRoutes: Record<PageKey, Record<Language, string>> = {
  home: {lv:"/",en:"/en",ru:"/ru"},
  about: {lv:"/par-mums",en:"/en/about",ru:"/ru/o-nas"},
  contact: {lv:"/kontakti",en:"/en/contact",ru:"/ru/kontakty"},
  landing: {lv:"/pakalpojumi/landing-lapa",en:"/en/services/landing-page",ru:"/ru/uslugi/lending"},
  company: {lv:"/pakalpojumi/uznemuma-majaslapa",en:"/en/services/business-website",ru:"/ru/uslugi/sajt-dlya-biznesa"},
  upgrade: {lv:"/pakalpojumi/majaslapas-uzlabosana",en:"/en/services/website-improvements",ru:"/ru/uslugi/uluchshenie-sajta"},
};

const translations: Record<Exclude<Language,"lv">, Record<PageKey, { title:string; description:string }>> = {
  en: {
    home:{title:"Websites for Small Businesses | Kestrel",description:"Clear, fast websites that help small businesses explain their offer and turn visits into enquiries."},
    about:{title:"About Us | Kestrel",description:"Meet Kestrel, a web development team in Latvia focused on clear goals, thoughtful design and customer journeys."},
    contact:{title:"Contact | Kestrel",description:"Tell us about your website or business idea. We'll help you find a practical next step."},
    landing:{title:"Landing Page Design | Kestrel",description:"Focused landing pages that explain one offer clearly and help visitors take action."},
    company:{title:"Business Website Design | Kestrel",description:"Business websites with clear structure, thoughtful design and simple ways for customers to get in touch."},
    upgrade:{title:"Website Improvements | Kestrel",description:"Improve your existing website's clarity, usability and customer journey without starting from scratch."}
  },
  ru: {
    home:{title:"Разработка сайтов для малого бизнеса | Kestrel",description:"Создаём быстрые и понятные сайты, которые помогают клиентам разобраться в предложении и оставить заявку."},
    about:{title:"О нас | Kestrel",description:"Kestrel — команда веб-разработки в Латвии. Создаём сайты с понятной целью и продуманным дизайном."},
    contact:{title:"Контакты | Kestrel",description:"Расскажите о вашей компании и идее сайта. Поможем определить следующий шаг."},
    landing:{title:"Разработка лендингов | Kestrel",description:"Лендинги для одного предложения с понятным сообщением и удобным способом оставить заявку."},
    company:{title:"Разработка сайтов для бизнеса | Kestrel",description:"Сайты компаний с понятной структурой, продуманным дизайном и удобными способами связи."},
    upgrade:{title:"Улучшение сайтов | Kestrel",description:"Улучшаем существующий сайт: структуру, удобство и путь клиента к заявке без лишней переделки."}
  }
};

function origin() {
  try {
    const raw = process.env.NEXT_PUBLIC_SITE_URL;
    if (!raw) return null;
    const url = new URL(raw);
    if (!["https:","http:"].includes(url.protocol) || url.hostname==="localhost") return null;
    return url.origin;
  } catch { return null; }
}

export function languageAlternates(page: PageKey): Metadata["alternates"] {
  const base=origin();
  if (!base) return undefined;
  const route=localizedRoutes[page];
  return {
    languages:{
      "lv-LV":new URL(route.lv,base).toString(),
      "en":new URL(route.en,base).toString(),
      "ru":new URL(route.ru,base).toString(),
      "x-default":new URL(route.lv,base).toString()
    }
  };
}

export function localizedMetadata(lang: Exclude<Language,"lv">,page:PageKey): Metadata {
  const copy=translations[lang][page];
  const base=origin();
  return {
    title:copy.title,
    description:copy.description,
    ...(base?{alternates:{
      ...(languageAlternates(page)??{}),
      canonical:new URL(localizedRoutes[page][lang],base).toString()
    }}:{}),
    openGraph:{type:"website",locale:lang==="en"?"en_US":"ru_RU",siteName:"Kestrel",title:copy.title,description:copy.description},
    twitter:{card:"summary",title:copy.title,description:copy.description}
  };
}
