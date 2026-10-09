import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Dizains, kuru viegli lietot | Kestrel",description:"Sakārtojam lietotāja ceļu, informācijas hierarhiju un vizuālo noformējumu."};
const service: ServiceInfo = {
  "title": "Dizains, kuru viegli lietot",
  "intro": "Sakārtojam lietotāja ceļu, informācijas hierarhiju un vizuālo noformējumu.",
  "audience": [
    "Ja apmeklētājs neatrod vajadzīgo.",
    "Ja lapa ir vizuāli nesakārtota.",
    "Ja galvenā darbība nav saprotama."
  ],
  "offers": [
    {
      "title": "Dizaina audits",
      "detail": "Pārbaudām lapas hierarhiju."
    },
    {
      "title": "UX struktūra",
      "detail": "Sakārtojam informācijas secību."
    },
    {
      "title": "UI dizains",
      "detail": "Projektējam saskarni un komponentus."
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
