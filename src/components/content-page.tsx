import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock3, GraduationCap, Search } from "lucide-react";
import type { LearningItem } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090b12]/90 backdrop-blur-xl">
      <nav className="container flex min-h-[72px] flex-wrap items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-300 text-black"><GraduationCap size={21}/></span>outlearn<span className="text-violet-300">.</span></Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300">
          <Link href="/courses">Courses</Link><Link href="/blogs">Blogs</Link><Link href="/articles">Articles</Link><Link href="/projects">Projects</Link><Link href="/mock-tests">Tests</Link><Link href="/admin" className="text-violet-200">Admin</Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="mt-20 border-t border-white/10 py-8 text-sm text-gray-500"><div className="container flex flex-wrap justify-between gap-4"><span>© {new Date().getFullYear()} Outlearn</span><div className="flex flex-wrap gap-4"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></footer>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader/><main className="container min-h-[60vh] py-12 sm:py-16">{children}</main><SiteFooter/></>;
}

export function CollectionPage({ title, description, items, basePath }: { title: string; description: string; items: LearningItem[]; basePath: string }) {
  return <PageShell>
    <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"><ArrowLeft size={15}/> Home</Link>
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-300">OUTLEARN LIBRARY</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
    <p className="mt-4 max-w-2xl leading-7 text-gray-400">{description}</p>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(item => <article key={item.slug} className="card flex flex-col p-6">
        <div className="flex items-center justify-between gap-2"><span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-200">{item.category}</span><BookOpen size={18} className="text-gray-500"/></div>
        <h2 className="mt-5 text-xl font-semibold leading-snug">{item.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">{item.description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-500"><span className="flex items-center gap-1"><Clock3 size={13}/>{item.readTime}</span><Link href={`${basePath}/${item.slug}`} className="inline-flex items-center gap-1 text-violet-200">Explore <ArrowRight size={14}/></Link></div>
      </article>)}
    </div>
    {!items.length && <p className="mt-10 text-gray-400">No content is available yet.</p>}
  </PageShell>;
}

export function DetailPage({ item, backPath, label }: { item: LearningItem; backPath: string; label: string }) {
  return <PageShell>
    <Link href={backPath} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"><ArrowLeft size={15}/> Back to {label}</Link>
    <article className="mx-auto mt-8 max-w-3xl">
      <span className="rounded-full bg-violet-300/10 px-3 py-1.5 text-xs text-violet-200">{item.category}</span>
      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{item.title}</h1>
      <p className="mt-5 text-lg leading-8 text-gray-400">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-4 border-y border-white/10 py-4 text-xs text-gray-500"><span>{item.level}</span><span>{item.readTime}</span></div>
      <div className="mt-9 space-y-6">
        {item.content.map((paragraph, i) => <p key={i} className={i === 0 ? "text-xl font-medium leading-8 text-gray-100" : "text-base leading-8 text-gray-300"}>{paragraph}</p>)}
      </div>
      <div className="mt-12 rounded-2xl border border-violet-300/15 bg-violet-300/[0.05] p-6"><h2 className="text-lg font-semibold">Keep exploring</h2><p className="mt-2 text-sm leading-6 text-gray-400">Learning grows when you connect ideas, ask questions and practise what you discover.</p><Link href={backPath} className="mt-4 inline-flex items-center gap-2 text-sm text-violet-200">Explore more {label} <ArrowRight size={15}/></Link></div>
    </article>
  </PageShell>;
}

export function InfoPage({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return <PageShell><p className="text-xs font-semibold tracking-[.2em] text-violet-300">OUTLEARN</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl leading-7 text-gray-400">{description}</p><div className="mt-8 max-w-3xl">{children}</div></PageShell>;
}

export function SearchBox() {
  return <form action="/search" className="mt-8 flex max-w-2xl gap-2"><label className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4"><Search size={18} className="text-gray-500"/><input name="q" placeholder="Search courses, articles and blogs..." className="w-full bg-transparent py-3.5 text-sm outline-none" /></label><button className="rounded-xl bg-violet-300 px-5 font-semibold text-black">Search</button></form>;
}
