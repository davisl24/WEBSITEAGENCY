import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Mājaslapa darbojas bez raizēm | Kestrel",description:"Palīdzam ar mājaslapas izvietošanu un saskaņotiem uzturēšanas darbiem."};
const service: ServiceInfo = {
  "title": "Mājaslapa darbojas bez raizēm",
  "intro": "Lai mājaslapa būtu pieejama pēc publicēšanas, tai nepieciešama atbilstoša izvietošana un uzturēšanas kārtība. Palīdzam izvērtēt tehniskās vajadzības.",
  "audience": [
    "Jaunā mājaslapa jāizvieto publiski pieejamā vidē.",
    "Nepieciešama vienošanās par tehnisko atbalstu.",
    "Laiku pa laikam jāveic satura vai tehniski labojumi."
  ],
  "offers": [
    {
      "title": "Hostings",
      "detail": "Izvietojam mājaslapu saskaņotā infrastruktūrā."
    },
    {
      "title": "Tehniskā uzturēšana",
      "detail": "Nosakām konkrētu uzraudzības un atbalsta apjomu."
    },
    {
      "title": "Atjauninājumi",
      "detail": "Veicam iepriekš saskaņotus atjauninājumus."
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
