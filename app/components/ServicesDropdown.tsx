"use client";

import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

const services = {
  lv: [
    {href:"/pakalpojumi/landing-lapa",label:"Landing lapa"},
    {href:"/pakalpojumi/uznemuma-majaslapa",label:"Uzņēmuma mājaslapa"},
    {href:"/pakalpojumi/majaslapas-uzlabosana",label:"Mājaslapas uzlabošana"}
  ],
  en: [
    {href:"/en/services/landing-page",label:"Landing page"},
    {href:"/en/services/business-website",label:"Business website"},
    {href:"/en/services/website-improvements",label:"Website improvements"}
  ],
  ru: [
    {href:"/ru/uslugi/lending",label:"Лендинг"},
    {href:"/ru/uslugi/sajt-dlya-biznesa",label:"Сайт для бизнеса"},
    {href:"/ru/uslugi/uluchshenie-sajta",label:"Улучшение сайта"}
  ]
};
export default function ServicesDropdown() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/ru') ? 'ru' : 'lv';
  const label = locale === 'en' ? 'Services' : locale === 'ru' ? 'Услуги' : 'Pakalpojumi';
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        const trigger = rootRef.current?.querySelector<HTMLButtonElement>(".services-dropdown-trigger");
        trigger?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    return () => cancelClose();
  }, []);

  return (
    <div
      className="services-dropdown"
      ref={rootRef}
      onPointerEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={scheduleClose}
    >
      <button
        type="button"
        className="services-dropdown-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{label}</span>
        <span className="services-dropdown-chevron" aria-hidden="true">⌄</span>
      </button>

      {open && (
        <div className="services-dropdown-menu" role="menu" aria-label={label}>
          {services[locale].map((service) => (
            <a
              href={service.href}
              role="menuitem"
              className="services-dropdown-link"
              onClick={() => setOpen(false)}
              key={service.href}
            >
              <span>{service.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
