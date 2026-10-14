"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ServiceLink={href:string;label:string};
type Locale="lv"|"en"|"ru";
type ServiceMenu={web:ServiceLink;subcategories:ServiceLink[];others:ServiceLink[]};
const services:Record<Locale,ServiceMenu>={
  lv:{
    web:{href:"/pakalpojumi/web-izstrade",label:"Web izstrāde"},
    subcategories:[
      {href:"/pakalpojumi/landing-lapa",label:"Landing lapa"},
      {href:"/pakalpojumi/uznemuma-majaslapa",label:"Uzņēmuma mājaslapa"},
      {href:"/pakalpojumi/majaslapas-uzlabosana",label:"Mājaslapas uzlabošana"}
    ],
    others:[
      {href:"/pakalpojumi/e-komercija",label:"E-komercija"},
      {href:"/pakalpojumi/seo",label:"SEO"},
      {href:"/pakalpojumi/ui-ux",label:"UI/UX dizains"},
      {href:"/pakalpojumi/hostings",label:"Hostings un uzturēšana"}
    ]
  },
  en:{
    web:{href:"/en/services/web-development",label:"Web development"},
    subcategories:[
      {href:"/en/services/landing-page",label:"Landing page"},
      {href:"/en/services/business-website",label:"Business website"},
      {href:"/en/services/website-improvements",label:"Website improvements"}
    ],
    others:[
      {href:"/en/services/ecommerce",label:"E-commerce"},
      {href:"/en/services/seo",label:"SEO"},
      {href:"/en/services/ui-ux",label:"UI/UX design"},
      {href:"/en/services/website-maintenance",label:"Website maintenance"}
    ]
  },
  ru:{
    web:{href:"/ru/uslugi/razrabotka-sajtov",label:"Разработка сайтов"},
    subcategories:[
      {href:"/ru/uslugi/lending",label:"Лендинг"},
      {href:"/ru/uslugi/sajt-dlya-biznesa",label:"Сайт для бизнеса"},
      {href:"/ru/uslugi/uluchshenie-sajta",label:"Улучшение сайта"}
    ],
    others:[
      {href:"/ru/uslugi/internet-magazin",label:"Интернет-магазины"},
      {href:"/ru/uslugi/seo",label:"SEO"},
      {href:"/ru/uslugi/ui-ux",label:"UI/UX-дизайн"},
      {href:"/ru/uslugi/obsluzhivanie-sajtov",label:"Обслуживание сайтов"}
    ]
  }
};

export default function ServicesDropdown(){
  const pathname=usePathname();
  const locale:Locale=pathname.startsWith("/en")?"en":pathname.startsWith("/ru")?"ru":"lv";
  const label=locale==="en"?"Services":locale==="ru"?"Услуги":"Pakalpojumi";
  const menu=services[locale];
  const [open,setOpen]=useState(false);
  const [webOpen,setWebOpen]=useState(false);
  const rootRef=useRef<HTMLDivElement>(null);
  const closeTimer=useRef<ReturnType<typeof setTimeout>|null>(null);

  const cancelClose=()=>{
    if(closeTimer.current){clearTimeout(closeTimer.current);closeTimer.current=null}
  };
  const scheduleClose=()=>{
    cancelClose();
    closeTimer.current=setTimeout(()=>{setOpen(false);setWebOpen(false)},150);
  };
  useEffect(()=>{
    if(!open)return;
    const pointer=(event:PointerEvent)=>{
      if(!rootRef.current?.contains(event.target as Node)){setOpen(false);setWebOpen(false)}
    };
    const keyboard=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){
        setOpen(false);
        setWebOpen(false);
        rootRef.current?.querySelector<HTMLButtonElement>(".services-dropdown-trigger")?.focus();
      }
    };
    document.addEventListener("pointerdown",pointer);
    document.addEventListener("keydown",keyboard);
    return ()=>{
      document.removeEventListener("pointerdown",pointer);
      document.removeEventListener("keydown",keyboard);
    };
  },[open]);
  useEffect(()=>()=>cancelClose(),[]);

  const item=(service:ServiceLink,sub=false)=><a
    href={service.href}
    role="menuitem"
    key={service.href}
    aria-current={pathname===service.href?"page":undefined}
    className={sub?"services-dropdown-sublink":service.href===menu.web.href?"services-dropdown-link services-dropdown-parent":"services-dropdown-link"}
    onClick={()=>{setOpen(false);setWebOpen(false)}}
  ><span>{service.label}</span>{!sub&&<span aria-hidden="true">→</span>}</a>;

  return <div className="services-dropdown" ref={rootRef}
    onPointerEnter={()=>{cancelClose();setOpen(true)}}
    onPointerLeave={scheduleClose}>
    <button type="button" className="services-dropdown-trigger"
      aria-haspopup="menu" aria-expanded={open}
      onClick={()=>setOpen(value=>!value)}>
      <span>{label}</span><span className="services-dropdown-chevron" aria-hidden="true">⌄</span>
    </button>
    {open&&<div className="services-dropdown-menu services-dropdown-menu-grouped"
      role="menu" aria-label={label}>
      <div className="services-dropdown-web-group"
        onPointerEnter={()=>setWebOpen(true)}
        onPointerLeave={()=>setWebOpen(false)}
        onFocusCapture={()=>setWebOpen(true)}
        onBlurCapture={event=>{
          if(!event.currentTarget.contains(event.relatedTarget as Node))setWebOpen(false);
        }}>
        <div className="services-dropdown-web-row">
          {item(menu.web)}
          <button type="button" className="services-dropdown-web-expand"
            aria-label={locale==="en"?"Web development subcategories":locale==="ru"?"Подкатегории разработки сайтов":"Web izstrādes apakškategorijas"}
            aria-expanded={webOpen}
            onClick={()=>setWebOpen(value=>!value)}>
            <span aria-hidden="true">{webOpen?"−":"+"}</span>
          </button>
        </div>
        {webOpen&&<div className="services-dropdown-subgroup" role="group" aria-label={menu.web.label}>
          {menu.subcategories.map(service=>item(service,true))}
        </div>}
      </div>
      <div className="services-dropdown-divider" aria-hidden="true"/>
      {menu.others.map(service=>item(service))}
    </div>}
  </div>;
}
