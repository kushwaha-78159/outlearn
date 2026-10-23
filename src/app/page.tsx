import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers3,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
  Wallet
} from "lucide-react";

const categories = [
  { icon: BrainCircuit, title: "Artificial Intelligence", description: "Understand AI, machine learning and the technology shaping tomorrow.", count: "AI & ML", color: "text-violet-300" },
  { icon: Wallet, title: "Finance & Economics", description: "Explore markets, money, investing concepts and economic thinking.", count: "Finance", color: "text-emerald-300" },
  { icon: Atom, title: "Mathematics & Science", description: "Build strong fundamentals through explanations and practice.", count: "Science", color: "text-cyan-300" },
  { icon: Code2, title: "Programming & Tech", description: "Learn software development, tools, systems and practical coding.", count: "Technology", color: "text-amber-300" },
  { icon: Layers3, title: "Blockchain & Web3", description: "Explore decentralized systems, smart contracts and digital ownership.", count: "Web3", color: "text-pink-300" },
  { icon: Lightbulb, title: "Ideas & Thinking", description: "Discover new perspectives, mental models and creative approaches.", count: "Ideas", color: "text-orange-300" }
];

const articles = [
  { category: "ARTIFICIAL INTELLIGENCE", title: "How large language models actually work", description: "A practical introduction to the ideas behind modern AI systems.", time: "8 min read", icon: BrainCircuit },
  { category: "FINANCE", title: "Understanding compound growth", description: "Learn why time and consistency matter when money grows.", time: "6 min read", icon: TrendingUp },
  { category: "PROGRAMMING", title: "From beginner to building real projects", description: "A structured approach to turning programming knowledge into useful work.", time: "10 min read", icon: Code2 }
];

const courses = [
  { level: "BEGINNER", title: "Introduction to Artificial Intelligence", description: "Learn the fundamentals of AI, neural networks and language models.", lessons: "12 learning modules", color: "from-violet-500/20 to-blue-500/5", icon: BrainCircuit },
  { level: "BEGINNER", title: "Financial Literacy Essentials", description: "Build a foundation in budgeting, saving, interest and financial decisions.", lessons: "10 learning modules", color: "from-emerald-500/20 to-teal-500/5", icon: Wallet },
  { level: "INTERMEDIATE", title: "Mathematics for Problem Solving", description: "Explore logical reasoning, mathematical patterns and practical applications.", lessons: "14 learning modules", color: "from-cyan-500/20 to-indigo-500/5", icon: Atom }
];

export default function HomePage() {
  return (
    <main>
      <div className="border-b border-white/[0.07] bg-white/[0.025]">
        <div className="container flex min-h-9 items-center justify-center gap-2 text-center text-xs text-gray-300">
          <Sparkles size={14} className="text-violet-300" />
          A new way to explore ideas, build skills and think bigger.
          <ArrowRight size={13} />
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090b12]/85 backdrop-blur-xl">
        <nav className="container flex h-[76px] items-center justify-between gap-5">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400 text-black">
              <GraduationCap size={22} />
            </span>
            <span className="text-xl font-bold tracking-tight">outlearn<span className="text-violet-300">.</span></span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-gray-300 lg:flex">
            <Link className="hover:text-white" href="/courses">Courses</Link>
            <Link className="hover:text-white" href="/articles">Articles</Link>
            <Link className="hover:text-white" href="/blogs">Blogs</Link>
            <Link className="hover:text-white" href="/projects">Projects</Link>
            <Link className="hover:text-white" href="/mock-tests">Mock Tests</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/search" aria-label="Search" className="hidden rounded-xl border border-white/10 p-2.5 text-gray-300 hover:bg-white/5 sm:block">
              <Search size={18} />
            </Link>
            <Link href="/login" className="hidden px-3 py-2 text-sm text-gray-300 sm:block">Log in</Link>
            <Link href="/register" className="rounded-xl bg-violet-300 px-4 py-2.5 text-sm font-semibold text-[#100b20] transition hover:bg-violet-200">
              Get started <span className="ml-1">↗</span>
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-230px] h-[560px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[120px]" />
        <div className="container relative grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.12fr_.88fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3.5 py-2 text-xs font-medium text-violet-200">
              <Sparkles size={14} /> KNOW MORE. THINK DEEPER.
            </div>
            <h1 className="max-w-[720px] text-5xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-[76px]">
              The world is bigger than <span className="gradient-text">what you know.</span>
            </h1>
            <p className="mt-7 max-w-[540px] text-base leading-8 text-gray-400 sm:text-lg">
              Explore ideas that change how you think. Discover courses, research-backed explanations and practical resources across technology, science, finance and beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-violet-300 px-5 py-3.5 font-semibold text-[#100b20] transition hover:bg-violet-200">
                Explore learning <ArrowRight size={17} />
              </Link>
              <Link href="/articles" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-medium hover:bg-white/[0.05]">
                Discover ideas <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">
              {["Learn at your own pace", "Explore diverse subjects", "Stay curious"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-violet-300" />{item}</span>
              ))}
            </div>
          </div>

          <div className="hero-stage relative mx-auto w-full max-w-[460px]">
            <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-[80px]" />
            <div className="hero-orbit" aria-hidden="true">
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />
              <div className="orbit-ring orbit-ring-three" />
              <div className="orbit-core">
                <span>O</span>
              </div>
            </div>
            <div className="glass hero-panel relative rounded-[28px] p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs text-gray-500">YOUR NEXT DISCOVERY</p>
                  <p className="mt-1 font-semibold">Explore something new</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Keep growing</span>
              </div>
              <div className="my-5 rounded-2xl border border-violet-300/10 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-transparent p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-300/15 text-violet-200"><BrainCircuit size={26} /></div>
                <p className="mt-5 text-xs font-medium tracking-widest text-violet-200">FEATURED TOPIC</p>
                <h3 className="mt-2 text-2xl font-semibold">Understanding Artificial Intelligence</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">From foundational ideas to the systems transforming our world.</p>
                <Link href="/categories" className="mt-5 inline-flex items-center gap-2 text-sm text-violet-200">Explore the topic <ArrowRight size={15} /></Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.035] p-4">
                  <BookOpen size={19} className="text-cyan-300" />
                  <p className="mt-3 text-sm font-medium">Read & discover</p>
                  <p className="mt-1 text-xs text-gray-500">Ideas worth exploring</p>
                </div>
                <div className="rounded-xl bg-white/[0.035] p-4">
                  <GraduationCap size={20} className="text-emerald-300" />
                  <p className="mt-3 text-sm font-medium">Learn by doing</p>
                  <p className="mt-1 text-xs text-gray-500">Build real understanding</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.07] p-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-300/10 text-amber-200"><Lightbulb size={19} /></div>
                <p className="text-xs leading-5 text-gray-400">Curiosity is the beginning of every great discovery.</p>
                <ArrowDownRight size={17} className="ml-auto shrink-0 text-gray-500" />
              </div>
            </div>
            <div className="absolute -right-3 top-16 hidden rounded-xl border border-white/10 bg-[#171525] px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2 text-xs"><span className="h-2 w-2 rounded-full bg-emerald-400" /> A universe of ideas</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="container grid grid-cols-2 gap-7 py-8 md:grid-cols-4">
          {[
            ["01", "Explore", "Follow your curiosity"],
            ["02", "Understand", "Build deeper knowledge"],
            ["03", "Practice", "Turn ideas into skills"],
            ["04", "Grow", "Keep moving forward"]
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-3">
              <span className="pt-1 text-sm text-violet-300">{number}</span>
              <div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-gray-500">{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-semibold tracking-[.2em] text-violet-300">A WORLD OF KNOWLEDGE</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Explore your interests.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">Go beyond the basics. Find new perspectives across subjects that matter to you.</p></div>
          <Link href="/categories" className="flex items-center gap-2 text-sm text-violet-200 hover:text-white">All categories <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, description, count, color }) => (
            <Link href="/categories" key={title} className="card group p-6">
              <div className="flex items-start justify-between"><div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] ${color}`}><Icon size={22} /></div><ArrowUpRight size={18} className="text-gray-600 transition group-hover:text-violet-300" /></div>
              <p className="mt-6 text-xs text-gray-500">{count}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0d0f18] py-24">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-semibold tracking-[.2em] text-cyan-300">STRUCTURED LEARNING</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start with a new skill.</h2><p className="mt-3 text-sm text-gray-400">A starting point for your next learning journey.</p></div>
            <Link href="/courses" className="flex items-center gap-2 text-sm text-violet-200">Browse courses <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {courses.map(({ level, title, description, lessons, color, icon: Icon }) => (
              <article key={title} className="card overflow-hidden">
                <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${color}`}><Icon size={58} strokeWidth={1.2} className="text-white/80" /></div>
                <div className="p-6"><p className="text-[10px] font-semibold tracking-[.18em] text-violet-200">{level}</p><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 min-h-[66px] text-sm leading-6 text-gray-400">{description}</p><div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs text-gray-500"><span>{lessons}</span><Link href="/courses" className="flex items-center gap-1 text-violet-200">Explore <ArrowRight size={14} /></Link></div></div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-500">These are introductory learning outlines. Full lesson content will be added as the course library is built.</p>
        </div>
      </section>

      <section className="container py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-semibold tracking-[.2em] text-violet-300">THE READING ROOM</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ideas worth your time.</h2><p className="mt-3 text-sm text-gray-400">Explore approachable introductions to big ideas.</p></div>
          <Link href="/articles" className="flex items-center gap-2 text-sm text-violet-200">Explore articles <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {articles.map(({ category, title, description, time, icon: Icon }, index) => (
            <article key={title} className="card p-6">
              <div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-violet-200"><Icon size={22} /></div><span className="text-xs text-gray-500">0{index + 1}</span></div>
              <p className="mt-7 text-[10px] font-semibold tracking-[.16em] text-violet-200">{category}</p><h3 className="mt-3 text-xl font-semibold leading-snug">{title}</h3><p className="mt-3 text-sm leading-6 text-gray-400">{description}</p><div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4"><span className="text-xs text-gray-500">{time}</span><Link href="/articles" aria-label={`Explore ${title}`} className="text-violet-200"><ArrowUpRight size={19} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-[28px] border border-violet-300/15 bg-gradient-to-br from-violet-500/[0.14] via-[#151323] to-cyan-500/[0.06] px-7 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative max-w-2xl"><div className="flex items-center gap-2 text-xs font-semibold tracking-[.2em] text-violet-200"><Sparkles size={15} /> YOUR NEXT CHAPTER</div><h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Stay curious. Keep discovering.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">Start exploring subjects, challenge your assumptions and make learning part of your everyday life.</p><Link href="/courses" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-300 px-5 py-3.5 font-semibold text-[#100b20] hover:bg-violet-200">Start exploring <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#080a10]">
        <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div><Link href="/" className="flex items-center gap-2 text-xl font-bold"> <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-300 text-black"><GraduationCap size={19} /></span>outlearn.</Link><p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">Learn beyond limits. Explore ideas, build understanding and keep asking questions.</p></div>
          <div><h3 className="text-sm font-semibold">Explore</h3><div className="mt-4 grid gap-3 text-sm text-gray-400"><Link href="/courses">Courses</Link><Link href="/articles">Articles</Link><Link href="/blogs">Blogs</Link><Link href="/projects">Projects</Link></div></div>
          <div><h3 className="text-sm font-semibold">Learn</h3><div className="mt-4 grid gap-3 text-sm text-gray-400"><Link href="/categories">Categories</Link><Link href="/mock-tests">Mock tests</Link><Link href="/stories">Stories</Link><Link href="/search">Search resources</Link></div></div>
          <div><h3 className="text-sm font-semibold">Outlearn</h3><div className="mt-4 grid gap-3 text-sm text-gray-400"><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/admin">Admin</Link></div></div>
        </div>
        <div className="border-t border-white/[0.07]"><div className="container flex flex-wrap justify-between gap-3 py-5 text-xs text-gray-500"><span>© {new Date().getFullYear()} Outlearn. Keep learning.</span><span>Made for curious minds.</span></div></div>
      </footer>
    </main>
  );
}
