import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KestrelServiceTemplate from "../../../components/KestrelServiceTemplate";
import { localizedMetadata } from "../../../lib/localizedSeo";
import { localizedServiceSlugs, serviceTranslations } from "../../../lib/serviceTranslations";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return Object.keys(localizedServiceSlugs.ru).map(slug=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;
  const kind=localizedServiceSlugs.ru[slug];
  return kind?localizedMetadata("ru",kind):{};
}
export default async function ServicePage({params}:Props){
  const {slug}=await params;
  const kind=localizedServiceSlugs.ru[slug];
  if(!kind)notFound();
  return <KestrelServiceTemplate service={{...serviceTranslations.ru[kind],kind}} lang="ru"/>;
}
