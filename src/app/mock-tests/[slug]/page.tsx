import { notFound } from "next/navigation";
import { InfoPage } from "@/components/content-page";
import { mockTests } from "@/lib/content";
import Quiz from "./quiz";
export function generateStaticParams() { return mockTests.map(t => ({slug:t.slug})); }
export default async function Page({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params; const test=mockTests.find(t=>t.slug===slug); if(!test) notFound();
 return <InfoPage title={test.title} description={test.description}><Quiz test={test}/></InfoPage>;
}
