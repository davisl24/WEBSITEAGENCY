import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"Visa informācija vienuviet | Kestrel",description:"Vairāku lapu mājaslapa uzņēmumam, kuram ir ko pastāstīt par saviem pakalpojumiem."};
const service: ServiceInfo = {
  "title": "Visa informācija vienuviet",
  "intro": "Vairāku lapu mājaslapa uzņēmumam, kuram ir ko pastāstīt par saviem pakalpojumiem.",
  "audience": [
    "Uzņēmumam ar vairākiem pakalpojumiem.",
    "Kad vajadzīgas atsevišķas informācijas lapas.",
    "Kad klientam pirms saziņas jāuzzina vairāk."
  ],
  "offers": [
    {
      "title": "Uzņēmuma mājaslapas izstrāde",
      "detail": "Vienkārša vairāku lapu mājaslapa ar navigāciju.",
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
