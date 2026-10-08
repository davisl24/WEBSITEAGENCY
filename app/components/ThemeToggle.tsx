"use client";

import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

function applyTheme(theme: ResolvedTheme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function ThemeIcon({ mode }: { mode: ThemePreference }) {
  if (mode === "system") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
  if (mode === "light") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.6 15.2A9 9 0 0 1 8.8 3.4 9 9 0 1 0 20.6 15.2Z"/></svg>;
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("kestrel-theme");
    if (saved === "light" || saved === "dark" || saved === "system") setPreference(saved);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const syncTheme = () => {
      applyTheme(preference === "system" ? (media.matches ? "light" : "dark") : preference);
      document.documentElement.dataset.themeMode = preference;
    };
    syncTheme();
    if (preference === "system") {
      media.addEventListener("change", syncTheme);
      return () => media.removeEventListener("change", syncTheme);
    }
  }, [preference]);

  const selectTheme = (mode: ThemePreference) => {
    setPreference(mode);
    window.localStorage.setItem("kestrel-theme", mode);
  };

  const labels: Record<ThemePreference, string> = { system: "Sistēmas režīms", light: "Gaišais režīms", dark: "Tumšais režīms" };
  return (
    <div className="theme-segmented" role="group" aria-label="Krāsu režīms">
      {(["system", "light", "dark"] as const).map((mode) => (
        <button key={mode} type="button" className="theme-segmented-button" onClick={() => selectTheme(mode)} aria-label={labels[mode]} aria-pressed={preference === mode} title={labels[mode]}>
          <ThemeIcon mode={mode} />
        </button>
      ))}
    </div>
  );
}
