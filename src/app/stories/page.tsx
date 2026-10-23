import { CollectionPage } from "@/components/content-page";
import { stories } from "@/lib/content";

export const metadata = { title: "Stories", description: "Short reflections and stories about curiosity and learning." };

export default function Page() {
  return <CollectionPage title="Stories" description="Short reflections and stories about curiosity and learning." items={stories} basePath="/stories" />;
}
