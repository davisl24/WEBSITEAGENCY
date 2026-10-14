import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KestrelServiceTemplate from "../../../components/KestrelServiceTemplate";
import { localizedMetadata } from "../../../lib/localizedSeo";
import { localizedServiceSlugs, serviceTranslations } from "../../../lib/serviceTranslations";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return Object.keys(localizedServiceSlugs.en).map(slug=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const kind=localizedServiceSlugs.en[slug];
  return kind?localizedMetadata("en",kind):{};
}
export default async function ServicePage({params}:Props){
  const {slug}=await params;
  const kind=localizedServiceSlugs.en[slug];
  if(!kind)notFound();
  return <KestrelServiceTemplate service={{...serviceTranslations.en[kind],kind}} lang="en"/>;
}
