import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Dizains, kuru viegli lietot | Kestrel",description:"Sakārtojam lietotāja ceļu, informācijas hierarhiju un vizuālo noformējumu."};
const service: ServiceInfo = {
  "title": "Dizains, kuru viegli lietot",
  "intro": "Ja lietotājs apmaldās lapā, pat labs piedāvājums var palikt nepamanīts. Sakārtojam navigāciju, vizuālo hierarhiju un darbību secību.",
  "audience": [
    "Lietotājiem grūti atrast vajadzīgo informāciju.",
    "Svarīgās pogas un saturs pazūd kopējā dizainā.",
    "Lapa dažādās ierīcēs nav konsekventa."
  ],
  "offers": [
    {
      "title": "Dizaina audits",
      "detail": "Identificējam konkrētas lietojamības problēmas."
    },
    {
      "title": "UX struktūra",
      "detail": "Veidojam skaidru sadaļu un darbību secību."
    },
    {
      "title": "UI dizains",
      "detail": "Izstrādājam saskanīgu, lietojamu vizuālo saskarni."
    }
  ],
  "included": [
    {
      "title": "Problēmas",
      "detail": "Fiksējam, kas traucē lietotājam."
    },
    {
      "title": "Risinājums",
      "detail": "Piedāvājam skaidru struktūru."
    },
    {
      "title": "Dizains",
      "detail": "Izveidojam saskaņotu izkārtojumu."
    },
    {
      "title": "Pārbaude",
      "detail": "Novērtējam lietojamību."
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
