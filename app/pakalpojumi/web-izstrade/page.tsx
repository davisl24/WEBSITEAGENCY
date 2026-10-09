import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Mājaslapas tavam uzņēmumam | Kestrel",description:"Izstrādājam mājaslapas, kurās ir skaidrs piedāvājums un viegli atrodama saziņas iespēja."};
const service: ServiceInfo = {
  "title": "Mājaslapas tavam uzņēmumam",
  "intro": "Izstrādājam mājaslapas, kurās ir skaidrs piedāvājums un viegli atrodama saziņas iespēja.",
  "audience": [
    "Ja uzņēmumam vēl nav mājaslapas.",
    "Ja esošā lapa vairs neatbilst piedāvājumam.",
    "Ja klientiem nepieciešama saprotama informācija vienuviet."
  ],
  "offers": [
    {
      "title": "Landing lapa",
      "detail": "Vienam piedāvājumam vienā lapā.",
      "price": "no 200 €",
      "href": "/pakalpojumi/landing-lapa"
    },
    {
      "title": "Uzņēmuma mājaslapa",
      "detail": "Atsevišķas lapas plašākai informācijai.",
      "price": "no 450 €",
      "href": "/pakalpojumi/uznemuma-majaslapa"
    },
    {
      "title": "Mājaslapas uzlabošana",
      "detail": "Sakārtojam jau esošu mājaslapu.",
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
