import { CollectionPage } from "@/components/content-page";
import { blogs } from "@/lib/content";
import { getPublishedItems } from "@/lib/published-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Blogs", description: "Perspectives, learning notes and ideas worth exploring." };

export default async function Page() {
  const uploaded = await getPublishedItems("blog");
  const items = [...uploaded, ...blogs.filter(item => !uploaded.some(p => p.slug === item.slug))];
  return <CollectionPage title="Blogs" description="Perspectives, learning notes and ideas worth exploring." items={items} basePath="/blogs" />;
}
