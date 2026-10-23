import Link from "next/link";
import { InfoPage } from "@/components/content-page";
export default function Page() {
 return <InfoPage title="Welcome back" description="Sign-in interface preview. Authentication will be connected in the next step.">
  <form action="/dashboard" className="card grid max-w-md gap-4 p-6"><label className="grid gap-2 text-sm">Email<input required type="email" name="email" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"/></label><label className="grid gap-2 text-sm">Password<input required type="password" name="password" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none"/></label><button className="rounded-xl bg-violet-300 px-4 py-3 font-semibold text-black">Preview dashboard</button><p className="text-xs text-amber-200">Demo only — this form does not authenticate users yet.</p><p className="text-sm text-gray-400">New to Outlearn? <Link className="text-violet-200" href="/register">Create an account</Link></p></form>
 </InfoPage>;
}
