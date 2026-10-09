import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"SEO | Kestrel",description:"Pārbaudām mājaslapas tehnisko pamatu un saturu, lai novērstu šķēršļus atrašanai meklētājos."};
const service: ServiceInfo = {
  "title": "Esi atrodams Google",
  "intro": "Ja meklētājs nevar pareizi nolasīt lapas saturu, cilvēkiem var būt grūtāk to atrast. Pārbaudām tehniskos šķēršļus un sakārtojam lapu struktūru bez pozīciju garantijām.",
  "audience": [
    "Svarīgās lapas netiek pareizi indeksētas.",
    "Virsraksti un lapu nosaukumi neatbilst saturam.",
    "Nav skaidrs, kuri SEO labojumi jāveic vispirms."
  ],
  "offers": [
    {
      "title": "SEO audits",
      "detail": "Atrodam konkrētas tehniskas un satura problēmas."
    },
    {
      "title": "Tehniskais SEO",
      "detail": "Pārbaudām indeksēšanu, metadatus un lapu hierarhiju."
    },
    {
      "title": "Satura optimizācija",
      "detail": "Sakārtojam saturu atbilstoši pakalpojumiem un meklēšanas nolūkam."
    }
  ],
  "included": [
    {
      "title": "Pārbaude",
      "detail": "Nosakām sākuma situāciju."
    },
    {
      "title": "Prioritātes",
      "detail": "Iezīmējam nozīmīgākos labojumus."
    },
    {
      "title": "Saskaņoti labojumi",
      "detail": "Veicam izvēlētos darbus."
    },
    {
      "title": "Pārskats",
      "detail": "Izskaidrojam paveikto."
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
