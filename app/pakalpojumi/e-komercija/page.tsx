import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Tavs veikals tiešsaistē | Kestrel",description:"Izvērtējam un veidojam interneta veikala risinājumu atbilstoši produktiem un pasūtīšanas procesam."};
const service: ServiceInfo = {
  "title": "Tavs veikals tiešsaistē",
  "intro": "Izvērtējam un veidojam interneta veikala risinājumu atbilstoši produktiem un pasūtīšanas procesam.",
  "audience": [
    "Ja produktus nepieciešams pārdot internetā.",
    "Ja vajadzīgs pārskatāms produktu katalogs.",
    "Ja pasūtījumi jāapstrādā vienā sistēmā."
  ],
  "offers": [
    {
      "title": "Produktu katalogs",
      "detail": "Produkti un kategorijas ar aprakstiem."
    },
    {
      "title": "Pasūtījumu plūsma",
      "detail": "Grozs un pirkuma noformēšana."
    },
    {
      "title": "Integrācijas",
      "detail": "Maksājumi un piegādes pēc tehniskas izvērtēšanas."
    }
  ],
  "included": [
    {
      "title": "Vajadzību izvērtēšana",
      "detail": "Precizējam preču un pasūtījumu procesu."
    },
    {
      "title": "Struktūra un dizains",
      "detail": "Sakārtojam produktu atrašanu."
    },
    {
      "title": "Integrāciju plāns",
      "detail": "Nosakām nepieciešamās sistēmas."
    },
    {
      "title": "Testēšana",
      "detail": "Pārbaudām pirkuma ceļu."
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
