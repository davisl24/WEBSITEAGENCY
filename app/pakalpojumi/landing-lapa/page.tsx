import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Landing lapa | Kestrel",description:"Vienā lapā izskaidrojam konkrētu pakalpojumu vai piedāvājumu."};
const service: ServiceInfo = {
  kind:"landing",
  "title": "Landing lapa",
  "intro": "Izstrādājam vienas lapas mājaslapu konkrētam pakalpojumam, produktam vai kampaņai. Viens piedāvājums un viens skaidrs pieteikšanās ceļš.",
  "audience": [
    "Jāpiesaka viens pakalpojums vai produkts.",
    "Reklāmas kampaņai vajadzīga atsevišķa lapa.",
    "Svarīgi, lai apmeklētājs ātri nonāktu līdz pieteikumam."
  ],
  "offers": [
    {
      "title": "Landing lapas izstrāde",
      "detail": "Izveidojam vienu strukturētu lapu konkrētam piedāvājumam.",
      "price": "no 200 €"
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
