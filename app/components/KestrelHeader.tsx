import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import ServicesDropdown from "./ServicesDropdown";

export default function KestrelHeader({ active = "" }: { active?: "home" | "about" | "contact" | "" }) {
  return <header className="site-header kestrel-shared-header" aria-label="Galvenā navigācija">
    <a className="brand" href="/" aria-label="Kestrel — sākumlapa">Kestrel</a>
    <nav className="site-nav" aria-label="Galvenā navigācija">
      <a href="/" aria-current={active === "home" ? "page" : undefined}>Sākums</a>
      <ServicesDropdown />
      <a href="/par-mums" aria-current={active === "about" ? "page" : undefined}>Par mums</a>
      <ThemeToggle />
      <LanguageSwitcher />
      <a className="header-cta" href="/kontakti" aria-current={active === "contact" ? "page" : undefined}>Pieteikt sarunu</a>
    </nav>
  </header>;
}
