import Link from "next/link";
import { InfoPage, SearchBox } from "@/components/content-page";
import { allContent } from "@/lib/content";
export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query ? allContent().filter(x => `${x.title} ${x.description} ${x.category}`.toLowerCase().includes(query)) : [];
  return <InfoPage title="Search Outlearn" description="Find learning resources, courses, articles and ideas.">
    <SearchBox/>
    {query && <><p className="mt-8 text-sm text-gray-400">{results.length} result(s) for “{q}”</p><div className="mt-4 grid gap-3">{results.map(x => <Link key={x.type+x.slug} href={`/${x.type === "Course" ? "courses" : x.type === "Article" ? "articles" : x.type === "Blog" ? "blogs" : x.type === "Story" ? "stories" : "projects"}/${x.slug}`} className="card p-5"><span className="text-xs text-violet-200">{x.type} · {x.category}</span><h2 className="mt-2 font-semibold">{x.title}</h2><p className="mt-2 text-sm text-gray-400">{x.description}</p></Link>)}</div></>}
  </InfoPage>;
}
