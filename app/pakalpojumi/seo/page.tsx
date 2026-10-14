import type { Metadata } from "next";
import KestrelServiceTemplate, { type ServiceInfo } from "../../components/KestrelServiceTemplate";

export const metadata: Metadata = {title:"SEO | Kestrel",description:"Pārbaudām mājaslapas tehnisko pamatu un saturu, lai novērstu šķēršļus atrašanai meklētājos."};
const service: ServiceInfo = {
  kind:"seo",
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
        "question": "Vai garantējat pirmo vietu Google?",
        "answer": "Nē. SEO labojumi palīdz novērst tehniskus un satura šķēršļus, bet negarantē konkrētas pozīcijas."
    },
    {
        "question": "Ko saņemšu pēc SEO audita?",
        "answer": "Noskaidrojam problēmas un prioritātes, pēc tam vienojamies, kurus labojumus īstenot."
    },
    {
        "question": "Vai nepieciešams uzreiz veikt visus labojumus?",
        "answer": "Nē. Svarīgākos darbus izvēlamies atbilstoši problēmu ietekmei un saskaņotajam apjomam."
    }
]
};
export default function ServicePage(){return <KestrelServiceTemplate service={service}/>;}
