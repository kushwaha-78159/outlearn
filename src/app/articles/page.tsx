import { CollectionPage } from "@/components/content-page";
import { articles } from "@/lib/content";
import { getPublishedItems } from "@/lib/published-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Articles", description: "Educational explainers on technology, science, finance and more." };

export default async function Page() {
  const uploaded = await getPublishedItems("article");
  const items = [...uploaded, ...articles.filter(item => !uploaded.some(p => p.slug === item.slug))];
  return <CollectionPage title="Articles" description="Educational explainers on technology, science, finance and more." items={items} basePath="/articles" />;
}
