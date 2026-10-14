import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Visa informācija vienuviet | Kestrel",description:"Vairāku lapu mājaslapa uzņēmumam, kuram ir ko pastāstīt par saviem pakalpojumiem."};
const service: ServiceInfo = {
  kind:"company",
  "title": "Visa informācija vienuviet",
  "intro": "Ja pakalpojumi un informācija ir izkaisīti dažādās vietās, klientam ir grūtāk izvēlēties. Apvienojam tos loģiski sakārtotā uzņēmuma mājaslapā.",
  "audience": [
    "Piedāvājumā ir vairāki pakalpojumi.",
    "Klientiem jāredz uzņēmuma darbi un pieredze.",
    "Nepieciešamas atsevišķas lapas par pakalpojumiem un kontaktēšanos."
  ],
  "offers": [
    {
      "title": "Uzņēmuma mājaslapas izstrāde",
      "detail": "Veidojam pārskatāmu mājaslapu ar skaidru navigāciju un kontaktēšanās ceļu.",
      "price": "no 450 €"
    }
  ],
  "included": [
    {"title":"Pakalpojumu lapas","detail":"Katram pakalpojumam ir sava skaidra sadaļa vai atsevišķa lapa."},
    {"title":"Navigācija","detail":"Apmeklētājs viegli atrod pakalpojumus, informāciju par uzņēmumu un kontaktus."},
    {"title":"Uzņēmuma informācija","detail":"Sakārtojam faktus un pieejamos materiālus par uzņēmumu."},
    {"title":"Pieteikšanās ceļš","detail":"Katrā būtiskajā vietā ir saprotams nākamais solis."},
    {"title":"Mobilā versija","detail":"Pārbaudām izvēlnes un saturu dažādos ekrānos."},
    {"title":"Palaišana","detail":"Pēc testiem publicējam saskaņoto mājaslapu."}
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
