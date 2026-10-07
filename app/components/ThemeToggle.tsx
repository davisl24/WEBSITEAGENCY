"use client";

import { useEffect, useRef, useState } from "react";

type ThemePreference = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

function resolveSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("kestrel-theme");
    const initialPreference: ThemePreference =
      saved === "light" || saved === "dark" || saved === "system"
        ? saved
        : "system";

    setPreference(initialPreference);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");

    const syncTheme = () => {
      applyTheme(
        preference === "system"
          ? media.matches
            ? "light"
            : "dark"
          : preference
      );
      document.documentElement.dataset.themeMode = preference;
    };

    syncTheme();

    if (preference === "system") {
      media.addEventListener("change", syncTheme);
      return () => media.removeEventListener("change", syncTheme);
    }
  }, [preference]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const chooseTheme = (next: ThemePreference) => {
    setPreference(next);
    window.localStorage.setItem("kestrel-theme", next);
    setOpen(false);
  };

  const labels: Record<ThemePreference, string> = {
    light: "Gaišs",
    dark: "Tumšs",
    system: "Sistēmas",
  };

  return (
    <div className="theme-menu" ref={rootRef}>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Mainīt krāsu režīmu"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Krāsu režīms"
      >
        <span className="theme-toggle-icon" aria-hidden="true">◐</span>
      </button>

      {open && (
        <div className="theme-popover" role="menu" aria-label="Krāsu režīms">
          {(Object.keys(labels) as ThemePreference[]).map((option) => (
            <button
              type="button"
              className="theme-option"
              role="menuitemradio"
              aria-checked={preference === option}
              onClick={() => chooseTheme(option)}
              key={option}
            >
              <span>{labels[option]}</span>
              <span className="theme-option-check" aria-hidden="true">
                {preference === option ? "✓" : ""}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
