import type { Metadata } from "next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import ThemeToggle from "../../components/ThemeToggle";
import ServicesDropdown from "../../components/ServicesDropdown";
import "./web-izstrade.css";

export const metadata: Metadata = {
  title: "Web izstrāde — mājaslapas no 200 € | Kestrel",
  description: "Landing lapas no 200 € un uzņēmuma mājaslapas no 450 €. Uzzini, kas ietilpst izstrādē un kā sākam sadarbību.",
};

const included = [
  ["Satura struktūra", "Sakārtojam informāciju tā, lai apmeklētājs uzreiz saprot piedāvājumu."],
  ["Pielāgots dizains", "Vizuālo noformējumu pieskaņojam uzņēmumam un saskaņotajam apjomam."],
  ["Mobilā versija", "Mājaslapa ir ērti lietojama gan telefonā, gan datorā."],
  ["SEO pamati", "Sakārtojam virsrakstus, lapu nosaukumus un aprakstus."],
  ["Saziņas iespēja", "Klients var sazināties, izmantojot pogu, saiti vai saskaņotu formu."],
  ["Testēšana un palaišana", "Pārbaudām galvenās funkcijas un publicējam mājaslapu."],
];

const steps = [
  ["01", "Izrunājam", "Noskaidrojam uzņēmuma vajadzības un mājaslapas mērķi."],
  ["02", "Saskaņojam", "Vienojamies par saturu, darba apjomu, cenu un termiņu."],
  ["03", "Izstrādājam", "Veidojam lapu pēc apstiprinātās struktūras un dizaina."],
  ["04", "Publicējam", "Pārbaudām rezultātu un nododam gatavu mājaslapu."],
];

export default function WebDevelopmentPage() {
  return <main className="kd-page">
    <header className="kd-header">
      <a href="/" className="kd-brand">Kestrel</a>
      <nav className="kd-nav" aria-label="Galvenā navigācija">
        <ServicesDropdown />
        <a href="/par-mums">Par mums</a>
        <ThemeToggle />
        <LanguageSwitcher />
        <a href="/kontakti" className="kd-nav-cta">Pieteikt sarunu</a>
      </nav>
    </header>
    <section className="kd-hero kd-wrap">
      <div className="kd-hero-copy">
        <span className="kd-eyebrow">WEB IZSTRĀDE / KESTREL</span>
        <h1>Mājaslapas<br/>uzņēmumiem<span className="kd-green">.</span></h1>
        <p>Izstrādājam mājaslapas, kurās klienti var ātri atrast vajadzīgo informāciju un ērti sazināties ar uzņēmumu.</p>
        <div className="kd-actions"><a className="kd-button kd-solid" href="/kontakti">Pieteikt projektu <span>↗</span></a><a className="kd-button kd-outline" href="#risinajumi">Skatīt risinājumus ↓</a></div>
        <div className="kd-hero-foot"><span>Vienas lapas risinājumi no 200 €</span><span>Uzņēmuma mājaslapas no 450 €</span></div>
      </div>
      <div className="kd-visual" aria-label="Mājaslapas struktūras piemērs">
        <div className="kd-browser"><div className="kd-browser-top"><span className="kd-dots">● ● ●</span><span>Uzņēmuma mājaslapa</span></div><div className="kd-browser-body"><div className="kd-mock-nav"><b>Jūsu zīmols</b><span>Pakalpojumi &nbsp; Par mums &nbsp; Kontakti</span></div><div className="kd-mock-hero"><div className="kd-mock-tag">PAKALPOJUMS</div><div className="kd-mock-heading"></div><div className="kd-mock-heading short"></div><div className="kd-mock-line"></div><div className="kd-mock-line short"></div><div className="kd-mock-cta"></div></div><div className="kd-mock-cards"><i></i><i></i><i></i></div></div></div>
        <p>Labs izkārtojums palīdz ātrāk saprast piedāvājumu.</p>
      </div>
    </section>
    <section className="kd-section kd-alt" id="risinajumi"><div className="kd-wrap">
      <span className="kd-eyebrow">01 / RISINĀJUMI</span>
      <h2>Izvēlies savam uzņēmumam<br/>piemērotāko.</h2>
      <div className="kd-product-grid">
        <article className="kd-product"><div className="kd-product-top"><span>VIENA LAPA</span><span>↗</span></div><h3>Landing lapa</h3><p>Vienam pakalpojumam, pasākumam vai konkrētam piedāvājumam. Viss svarīgākais vienuviet.</p><div className="kd-price">no 200 €</div><ul><li>Viena lapa ar līdz 4 satura sadaļām</li><li>Viena valoda</li><li>Mobilā versija un SEO pamati</li><li>Vienkārša saziņas iespēja</li></ul><a href="/pakalpojumi/landing-lapa">Uzzināt vairāk <span>↗</span></a></article>
        <article className="kd-product"><div className="kd-product-top"><span>VAIRĀKAS LAPAS</span><span>↗</span></div><h3>Uzņēmuma mājaslapa</h3><p>Plašākam uzņēmuma piedāvājumam, kad nepieciešama atsevišķa vieta pakalpojumiem un informācijai.</p><div className="kd-price">no 450 €</div><ul><li>Līdz 4 vienkāršām satura lapām</li><li>Navigācija un skaidra struktūra</li><li>Mobilā versija un SEO pamati</li><li>Kontaktforma vai cita saziņas iespēja</li></ul><a href="/pakalpojumi/uznemuma-majaslapa">Uzzināt vairāk <span>↗</span></a></article>
      </div>
      <p className="kd-smallnote">Norādītas sākuma cenas vienkāršākajiem projektiem. Precīzu darba apjomu un cenu saskaņojam pirms izstrādes. Domēns un hostings tiek piedāvāti atsevišķi.</p>
    </div></section>
    <section className="kd-section kd-wrap" id="iekljauts"><span className="kd-eyebrow">02 / IEKĻAUTAIS</span><h2>Kas ietilpst izstrādē?</h2><div className="kd-included">{included.map(([name,description],i)=><div className="kd-included-item" key={name}><span className="kd-num">0{i+1}</span><div><h3>{name}</h3><p>{description}</p></div></div>)}</div></section>
    <section className="kd-section kd-alt"><div className="kd-wrap kd-split"><div><span className="kd-eyebrow">03 / PIEEJA</span><h2>Svarīgais —<br/>uzreiz redzams.</h2><p className="kd-lead">Mājaslapai nav jābūt sarežģītai. Svarīgi, lai apmeklētājs saprot, kur atrodas, ko uzņēmums piedāvā un kā rīkoties tālāk.</p></div><div className="kd-example"><span>PIEMĒRS</span><h3>Skaidrs piedāvājums.<br/>Skaidra darbība.</h3><p>Viena galvenā doma, īss apraksts un viegli atrodama saziņas iespēja.</p><div className="kd-example-action">Sazināties ↗</div></div></div></section>
    <section className="kd-section kd-wrap"><span className="kd-eyebrow">04 / PROCESS</span><h2>No idejas līdz<br/>gatavai mājaslapai.</h2><div className="kd-steps">{steps.map(([num,title,description])=><div className="kd-step" key={num}><span>{num}</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>
    <section className="kd-section kd-alt"><div className="kd-wrap kd-faq"><div><span className="kd-eyebrow">05 / JAUTĀJUMI</span><h2>Pirms sākam.</h2></div><div className="kd-faq-list"><details><summary>Vai man pašam jāgatavo teksti un attēli?</summary><p>Vari iesniegt esošos materiālus — palīdzēsim tos sakārtot. Pilna satura izstrāde no nulles tiek vērtēta atsevišķi.</p></details><details><summary>Vai mājaslapa darbosies telefonā?</summary><p>Jā, gan landing lapā, gan uzņēmuma mājaslapā iekļauta mobilā versija.</p></details><details><summary>Vai domēns un hostings ietilpst cenā?</summary><p>Nē. Tos saskaņojam atsevišķi atbilstoši mājaslapas vajadzībām.</p></details><details><summary>Kā nosakāt precīzu cenu?</summary><p>Izvērtējam lapu skaitu, saturu un funkcionalitāti. Pirms darba sākuma vienojamies par apjomu, cenu un termiņu.</p></details></div></div></section>
    <section className="kd-cta kd-wrap"><span className="kd-eyebrow">06 / SĀKAM</span><h2>Pastāsti par<br/>savu projektu.</h2><p>Īsi apraksti, kas nepieciešams. Izvērtēsim piemērotāko risinājumu un sagatavosim piedāvājumu.</p><a href="/kontakti" className="kd-button kd-solid">Pieteikt projektu <span>↗</span></a></section>
    <footer className="kd-footer"><div className="kd-wrap"><a href="/" className="kd-brand">Kestrel</a><span>Web izstrāde uzņēmumiem</span><a href="/kontakti">Kontakti ↗</a></div></footer>
  </main>;
}