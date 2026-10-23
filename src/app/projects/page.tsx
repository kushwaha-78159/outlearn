import { CollectionPage } from "@/components/content-page";
import { projects } from "@/lib/content";

export const metadata = { title: "Projects", description: "Hands-on project ideas and practical learning experiences." };

export default function Page() {
  return <CollectionPage title="Projects" description="Hands-on project ideas and practical learning experiences." items={projects} basePath="/projects" />;
}
