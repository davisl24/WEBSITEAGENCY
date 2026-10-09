import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Mājaslapas tavam uzņēmumam | Kestrel",description:"Izstrādājam mājaslapas, kurās ir skaidrs piedāvājums un viegli atrodama saziņas iespēja."};
const service: ServiceInfo = {
  "title": "Mājaslapas tavam uzņēmumam",
  "intro": "Ja uzņēmumam nav skaidras mājaslapas, klientam ir grūtāk saprast piedāvājumu un sazināties. Izveidojam pārskatāmu vietni ar konkrētu nākamo soli.",
  "audience": [
    "Klienti nevar vienuviet atrast pakalpojumus un kontaktus.",
    "Esošā lapa neatspoguļo uzņēmuma piedāvājumu.",
    "Nepieciešama mobilajām ierīcēm pielāgota mājaslapa."
  ],
  "offers": [
    {
      "title": "Landing lapa",
      "detail": "Vienā lapā izskaidrojam vienu piedāvājumu un vedam uz pieteikšanos.",
      "price": "no 200 €",
      "href": "/pakalpojumi/landing-lapa"
    },
    {
      "title": "Uzņēmuma mājaslapa",
      "detail": "Sakārtojam vairākus pakalpojumus atsevišķās lapās.",
      "price": "no 450 €",
      "href": "/pakalpojumi/uznemuma-majaslapa"
    },
    {
      "title": "Mājaslapas uzlabošana",
      "detail": "Novēršam esošās lapas struktūras un lietojamības problēmas.",
      "href": "/pakalpojumi/majaslapas-uzlabosana"
    }
  ],
  "included": [
    {
      "title": "Satura struktūra",
      "detail": "Sakārtojam informāciju pēc klienta vajadzībām."
    },
    {
      "title": "Dizains",
      "detail": "Pielāgojam izskatu uzņēmumam."
    },
    {
      "title": "Mobilā versija",
      "detail": "Pārbaudām telefonā un datorā."
    },
    {
      "title": "SEO pamati",
      "detail": "Virsraksti un metadati."
    },
    {
      "title": "Saziņa",
      "detail": "Saskaņots saziņas veids."
    },
    {
      "title": "Palaišana",
      "detail": "Testējam un publicējam."
    }
  ],
  "faq": [
    {
      "question": "Cik ilgā laikā projekts būs gatavs?",
      "answer": "Termiņu nosakām pēc darba apjoma un saskaņojam pirms sākuma."
    },
    {
      "question": "Vai man nepieciešami gatavi materiāli?",
      "answer": "Izmantojam tavus materiālus un palīdzam tos sakārtot. Jaunu materiālu izveidi vērtējam atsevišķi."
    },
    {
      "question": "Kā nosaka gala cenu?",
      "answer": "Cena atkarīga no apjoma un funkcijām. Pirms izstrādes vienojamies par iekļauto un izmaksām."
    }
  ]
};
export default function ServicePage(){return <KestrelServiceTemplate service={service}/>;}
