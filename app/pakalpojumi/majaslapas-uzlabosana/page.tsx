import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Sakārtojam esošo mājaslapu | Kestrel",description:"Uzlabojam esošās mājaslapas skaidrību, izskatu un lietošanas ērtumu."};
const service: ServiceInfo = {
  "title": "Sakārtojam esošo mājaslapu",
  "intro": "Uzlabojam esošās mājaslapas skaidrību, izskatu un lietošanas ērtumu.",
  "audience": [
    "Ja piedāvājumu ir grūti saprast.",
    "Ja lapu neērti lietot telefonā.",
    "Ja svarīgā informācija ir grūti atrodama."
  ],
  "offers": [
    {
      "title": "Struktūras uzlabošana",
      "detail": "Pārkārtojam saturu un navigāciju."
    },
    {
      "title": "Dizaina uzlabošana",
      "detail": "Sakārtojam tipogrāfiju un izkārtojumu."
    },
    {
      "title": "Tehniski labojumi",
      "detail": "Novēršam identificētās kļūdas pēc izvērtēšanas."
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
