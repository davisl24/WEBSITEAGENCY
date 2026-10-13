import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Tavs veikals tiešsaistē | Kestrel",description:"Izvērtējam un veidojam interneta veikala risinājumu atbilstoši produktiem un pasūtīšanas procesam."};
const service: ServiceInfo = {
  "title": "Tavs veikals tiešsaistē",
  "intro": "Ja produktus internetā nevar viegli atrast un pasūtīt, pirkuma ceļš kļūst sarežģīts. Plānojam veikalu no produktu izvēles līdz pasūtījuma noformēšanai.",
  "audience": [
    "Produktu piedāvājums jāparāda pārskatāmā katalogā.",
    "Klientiem jāspēj noformēt pasūtījumu tiešsaistē.",
    "Jāizvērtē maksājumu un piegādes risinājumi."
  ],
  "offers": [
    {
      "title": "Produktu katalogs",
      "detail": "Grupējam produktus saprotamās kategorijās."
    },
    {
      "title": "Pasūtījumu plūsma",
      "detail": "Plānojam grozu un pasūtījuma noformēšanu."
    },
    {
      "title": "Integrācijas",
      "detail": "Izvērtējam saderīgas maksājumu un piegādes integrācijas."
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
        "question": "Ar ko sākam interneta veikala izstrādi?",
        "answer": "Vispirms sakārtojam produktu katalogu un pasūtīšanas ceļu. Tad izvērtējam nepieciešamās integrācijas."
    },
    {
        "question": "Vai maksājumi un piegāde jau ir iekļauti?",
        "answer": "Integrācijas un to apjomu izvērtējam atsevišķi. Konkrēto risinājumu un izmaksas saskaņojam pirms darba."
    },
    {
        "question": "Kā tiek noteikta cena?",
        "answer": "Cena atkarīga no kataloga, pasūtīšanas procesa un nepieciešamajām integrācijām."
    }
]
};
export default function ServicePage(){return <KestrelServiceTemplate service={service}/>;}
