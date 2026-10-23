import { CollectionPage } from "@/components/content-page";
import { courses } from "@/lib/content";
import { getPublishedItems } from "@/lib/published-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Courses", description: "Structured learning paths to help you explore a subject and build understanding." };

export default async function Page() {
  const uploaded = await getPublishedItems("course");
  const items = [...uploaded, ...courses.filter(item => !uploaded.some(p => p.slug === item.slug))];
  return <CollectionPage title="Courses" description="Structured learning paths to help you explore a subject and build understanding." items={items} basePath="/courses" />;
}
