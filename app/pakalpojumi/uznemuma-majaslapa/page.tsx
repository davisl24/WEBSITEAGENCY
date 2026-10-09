import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Visa informācija vienuviet | Kestrel",description:"Vairāku lapu mājaslapa uzņēmumam, kuram ir ko pastāstīt par saviem pakalpojumiem."};
const service: ServiceInfo = {
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
