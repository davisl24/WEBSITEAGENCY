import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Sakārtojam esošo mājaslapu | Kestrel",description:"Uzlabojam esošās mājaslapas skaidrību, izskatu un lietošanas ērtumu."};
const service: ServiceInfo = {
  "title": "Sakārtojam esošo mājaslapu",
  "intro": "Ja apmeklētāji neatrod svarīgo vai mobilā versija ir neērta, ne vienmēr vajag jaunu lapu. Izvērtējam esošo un uzlabojam konkrētas vietas.",
  "audience": [
    "Apmeklētājs nevar ātri saprast piedāvājumu.",
    "Telefonā informāciju ir grūti izmantot.",
    "Pieteikšanās vai kontaktu atrašana ir sarežģīta."
  ],
  "offers": [
    {
      "title": "Struktūras uzlabošana",
      "detail": "Pārkārtojam saturu, lai svarīgais būtu uzreiz saprotams."
    },
    {
      "title": "Dizaina uzlabošana",
      "detail": "Uzlabojam vizuālo hierarhiju un mobilās versijas lietojamību."
    },
    {
      "title": "Tehniski labojumi",
      "detail": "Izvērtējam tehniskās problēmas un vienojamies par labojumiem."
    }
  ],
  "included": [
    {
      "title": "Audits",
      "detail": "Nosakām konkrētas problēmas."
    },
    {
      "title": "Risinājuma plāns",
      "detail": "Vienojamies par labojamo apjomu."
    },
    {
      "title": "Ieviešana",
      "detail": "Veicam saskaņotos uzlabojumus."
    },
    {
      "title": "Pārbaude",
      "detail": "Testējam veiktās izmaiņas."
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
