import Link from "next/link";
import { InfoPage } from "@/components/content-page";
import { mockTests } from "@/lib/content";
export default function Page() {
 return <InfoPage title="Mock test management" description="Review the seeded quizzes. Database-backed editing will be added next.">
 <Link href="/admin" className="text-sm text-violet-200">← Admin home</Link>
 <div className="mt-5 grid gap-3">{mockTests.map(t=><article key={t.slug} className="card p-5"><h2 className="font-semibold">{t.title}</h2><p className="mt-2 text-sm text-gray-400">{t.questions.length} questions · {t.slug}</p><Link className="mt-3 inline-block text-sm text-violet-200" href={`/mock-tests/${t.slug}`}>Preview quiz →</Link></article>)}</div>
 </InfoPage>;
}