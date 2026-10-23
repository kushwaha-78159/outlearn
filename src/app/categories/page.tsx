import Link from "next/link";
import { BrainCircuit, Wallet, Atom, Code2, Layers3, Lightbulb, ArrowRight } from "lucide-react";
import { InfoPage } from "@/components/content-page";
const data = [
  ["AI & Machine Learning", "Understand artificial intelligence, machine learning and generative models.", BrainCircuit],
  ["Finance", "Explore financial literacy, budgeting and economic ideas.", Wallet],
  ["Mathematics & Science", "Practise reasoning and discover scientific concepts.", Atom],
  ["Programming & Technology", "Build your knowledge of websites, code and software.", Code2],
  ["Blockchain & Web3", "Learn about distributed ledgers and decentralised applications.", Layers3],
  ["Ideas & Thinking", "Explore curiosity, critical thinking and learning strategies.", Lightbulb]
] as const;
export default function Page() {
  return <InfoPage title="Explore categories" description="Choose a subject and follow your curiosity.">
    <div className="grid gap-4 sm:grid-cols-2">{data.map(([title, desc, Icon]) => <Link key={title} href="/courses" className="card p-6"><Icon className="text-violet-200" size={25}/><h2 className="mt-4 text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-gray-400">{desc}</p><span className="mt-4 inline-flex items-center gap-2 text-sm text-violet-200">Explore learning <ArrowRight size={14}/></span></Link>)}</div>
  </InfoPage>;
}
