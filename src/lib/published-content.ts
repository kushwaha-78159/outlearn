import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { LearningItem } from "@/lib/content";

type Entry = {
  type: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  published: boolean;
};

export async function getPublishedItems(type: "course" | "article" | "blog"): Promise<LearningItem[]> {
  try {
    const file = path.join(process.cwd(), "data", "content.json");
    const entries = JSON.parse(await readFile(file, "utf8")) as Entry[];
    return entries.filter(e => e.type === type && e.published).map(e => ({
      slug: e.slug,
      title: e.title,
      description: e.description || "",
      category: type === "course" ? "Course" : type === "article" ? "Article" : "Blog",
      level: "All levels",
      readTime: "5 min read",
      content: e.content.split(/\n{2,}/).filter(Boolean),
    }));
  } catch {
    return [];
  }
}
