import { InfoPage } from "@/components/content-page";
import { allContent } from "@/lib/content";
import Link from "next/link";
export default function Page() {
 return <InfoPage title="Learning bookmarks" description="Browse resources you may want to save for later.">
  <div className="grid gap-3">{allContent().slice(0,5).map(x => <Link key={x.type+x.slug} href={`/${x.type === "Course" ? "courses" : x.type === "Article" ? "articles" : x.type === "Blog" ? "blogs" : x.type === "Story" ? "stories" : "projects"}/${x.slug}`} className="card p-5"><p className="text-xs text-violet-200">{x.type}</p><h2 className="mt-2 font-semibold">{x.title}</h2><p className="mt-2 text-sm text-gray-400">{x.description}</p></Link>)}</div>
  <p className="mt-5 text-xs text-amber-200">This is a resource preview; user-specific bookmark storage will be added with authentication.</p>
 </InfoPage>;
}
