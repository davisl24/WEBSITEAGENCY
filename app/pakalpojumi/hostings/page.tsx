import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Mājaslapa darbojas bez raizēm | Kestrel",description:"Palīdzam ar mājaslapas izvietošanu un saskaņotiem uzturēšanas darbiem."};
const service: ServiceInfo = {
  "title": "Mājaslapa darbojas bez raizēm",
  "intro": "Palīdzam ar mājaslapas izvietošanu un saskaņotiem uzturēšanas darbiem.",
  "audience": [
    "Ja vajadzīga mājaslapas izvietošana.",
    "Ja nepieciešama tehniska uzraudzība.",
    "Ja periodiski jāveic nelieli labojumi."
  ],
  "offers": [
    {
      "title": "Hostings",
      "detail": "Izvietošana atbilstošā vidē."
    },
    {
      "title": "Tehniskā uzturēšana",
      "detail": "Saskaņotas darbības un pārbaudes."
    },
    {
      "title": "Atjauninājumi",
      "detail": "Izmaiņas pēc vienošanās."
    }
  ],
  "included": [
    {
      "title": "Sākotnējā pārbaude",
      "detail": "Noskaidrojam tehniskās prasības."
    },
    {
      "title": "Izvietošana",
      "detail": "Sagatavojam darbības vidi."
    },
    {
      "title": "Uzraudzība",
      "detail": "Atbilstoši izvēlētajam plānam."
    },
    {
      "title": "Atbalsts",
      "detail": "Saskaņots darbu apjoms un reakcija."
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
