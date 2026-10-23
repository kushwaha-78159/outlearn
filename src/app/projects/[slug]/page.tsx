import { notFound } from "next/navigation";
import { DetailPage } from "@/components/content-page";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map(item => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} backPath="/projects" label="projects" />;
}
