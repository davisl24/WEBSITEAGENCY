"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let raf = 0;

    const clampTarget = (value: number) => {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return Math.max(0, Math.min(value, max));
    };

    const animate = () => {
      current += (target - current) * 0.11;

      if (Math.abs(target - current) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        raf = 0;
        return;
      }

      window.scrollTo(0, current);
      raf = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;

      const el = event.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable='true']")) return;

      event.preventDefault();

      const delta = Math.max(-180, Math.min(180, event.deltaY));
      target = clampTarget(target + delta * 0.9);

      if (!raf) {
        current = window.scrollY;
        raf = requestAnimationFrame(animate);
      }
    };

    const sync = () => {
      if (!raf) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", sync, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", sync);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
