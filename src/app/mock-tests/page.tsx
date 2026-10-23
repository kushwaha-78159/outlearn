import Link from "next/link";
import { InfoPage } from "@/components/content-page";
import { mockTests } from "@/lib/content";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const dynamic = "force-dynamic";

export default async function Page() {
 let adminTests: { slug: string; title: string; description: string; questions: unknown[] }[] = [];
 try {
  const raw = await readFile(path.join(process.cwd(), "data", "content.json"), "utf8");
  const entries = JSON.parse(raw) as { type: string; slug: string; title: string; description: string; content: string; published: boolean }[];
  adminTests = entries.filter(e => e.type === "mock-test" && e.published).map(e => {
   let questions: unknown[] = [];
   try { const parsed = JSON.parse(e.content); if (Array.isArray(parsed.questions)) questions = parsed.questions; } catch {}
   return { slug: e.slug, title: e.title, description: e.description, questions };
  }).filter(t => t.questions.length > 0);
 } catch {}
 const tests = [...adminTests, ...mockTests.filter(t => !adminTests.some(a => a.slug === t.slug))];
 return <InfoPage title="Mock tests" description="Check your understanding with short multiple-choice quizzes.">
  <div className="grid gap-4 sm:grid-cols-2">{tests.map(t => <Link key={t.slug} href={`/mock-tests/${t.slug}`} className="card p-6"><p className="text-xs text-violet-200">{t.questions.length} QUESTIONS</p><h2 className="mt-3 text-xl font-semibold">{t.title}</h2><p className="mt-3 text-sm leading-6 text-gray-400">{t.description}</p><p className="mt-5 text-sm text-violet-200">Start test →</p></Link>)}</div>
 </InfoPage>;
}
