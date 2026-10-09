import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Viena lapa. Viens mērķis. | Kestrel",description:"Vienā lapā izskaidrojam konkrētu pakalpojumu vai piedāvājumu."};
const service: ServiceInfo = {
  "title": "Viena lapa. Viens mērķis.",
  "intro": "Vienā lapā izskaidrojam konkrētu pakalpojumu vai piedāvājumu.",
  "audience": [
    "Vienam pakalpojumam vai produktam.",
    "Kampaņai vai pasākumam.",
    "Kad apmeklētājam vajadzīga viena skaidra darbība."
  ],
  "offers": [
    {
      "title": "Landing lapas izstrāde",
      "detail": "Viena lapa ar līdz četrām galvenajām satura sadaļām.",
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
