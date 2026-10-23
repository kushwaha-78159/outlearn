import { notFound } from "next/navigation";
import { DetailPage } from "@/components/content-page";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map(item => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = articles.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} backPath="/articles" label="articles" />;
}
