"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, FileText, Newspaper, ClipboardCheck, LogOut, Plus, Trash2, Globe, EyeOff } from "lucide-react";

type Entry = { id: string; type: string; title: string; slug: string; description: string; content: string; published: boolean; updatedAt: string };
const types = [
  { value: "course", label: "Course", icon: BookOpen },
  { value: "article", label: "Article", icon: FileText },
  { value: "blog", label: "Blog", icon: Newspaper },
  { value: "mock-test", label: "Mock Test", icon: ClipboardCheck },
];

export default function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<Entry[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ type: "article", title: "", description: "", content: "", published: true });

  const load = useCallback(async () => {
    const r = await fetch("/api/admin/content", { cache: "no-store" });
    if (r.ok) { setItems(await r.json()); setLogged(true); setError(""); }
    else setLogged(false);
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError("");
    try {
      const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Login failed");
      setPassword(""); await load();
    } catch (e) { setError(e instanceof Error ? e.message : "Login failed"); }
    finally { setBusy(false); }
  }

  async function create(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError("");
    try {
      const r = await fetch("/api/admin/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Could not save content");
      setItems(old => [d, ...old]);
      setForm({ type: form.type, title: "", description: "", content: "", published: true });
    } catch (e) { setError(e instanceof Error ? e.message : "Save failed"); }
    finally { setBusy(false); }
  }

  async function change(id: string, action: "publish" | "delete") {
    if (action === "delete" && !confirm("Delete this content permanently?")) return;
    const r = await fetch("/api/admin/content", {
      method: action === "delete" ? "DELETE" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action === "delete" ? { id } : { id, published: !items.find(x => x.id === id)?.published })
    });
    if (!r.ok) { setError("Action failed. Please sign in again."); return; }
    if (action === "delete") setItems(old => old.filter(x => x.id !== id));
    else { const d = await r.json(); setItems(old => old.map(x => x.id === id ? d : x)); }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setLogged(false); setItems([]);
  }

  if (!logged) return (
    <main className="mx-auto max-w-md px-5 py-20">
      <div className="card rounded-2xl p-7">
        <p className="text-sm text-violet-200">OUTLEARN / ADMIN</p>
        <h1 className="mt-3 text-3xl font-bold">Admin login</h1>
        <p className="mt-2 text-sm text-gray-400">Sign in to manage courses, articles, blogs and mock tests.</p>
        <form onSubmit={login} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm">Admin email<input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" /></label>
          <label className="grid gap-2 text-sm">Admin password
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
          </label>
          <button disabled={busy} className="rounded-xl bg-violet-300 px-4 py-3 font-semibold text-black">{busy ? "Signing in..." : "Sign in securely"}</button>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        </form>
        <Link href="/" className="mt-5 inline-block text-sm text-violet-200">← Back to website</Link>
      </div>
    </main>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-sm text-violet-200">OUTLEARN / CONTROL CENTRE</p><h1 className="mt-2 text-3xl font-bold">Content dashboard</h1><p className="mt-2 text-sm text-gray-400">Create and publish learning content.</p></div>
        <button onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2"><LogOut size={16}/> Sign out</button>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-4">
        {types.map(t => <div key={t.value} className="card p-4"><t.icon size={20} className="text-violet-200"/><p className="mt-3 text-2xl font-bold">{items.filter(x => x.type === t.value).length}</p><p className="text-sm text-gray-400">{t.label}s</p></div>)}
      </div>

      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={create} className="card grid gap-4 p-5">
          <h2 className="text-xl font-semibold"><Plus className="mr-2 inline" size={19}/>Create content</h2>
          <label className="grid gap-2 text-sm">Content type<select value={form.type} onChange={e => setForm(f => ({...f,type:e.target.value}))} className="rounded-xl border border-white/15 bg-[#171326] px-3 py-3">{types.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}</select></label>
          <label className="grid gap-2 text-sm">Title<input required value={form.title} onChange={e => setForm(f => ({...f,title:e.target.value}))} className="rounded-xl border border-white/15 bg-white/5 px-3 py-3"/></label>
          <label className="grid gap-2 text-sm">Short description<input value={form.description} onChange={e => setForm(f => ({...f,description:e.target.value}))} className="rounded-xl border border-white/15 bg-white/5 px-3 py-3"/></label>
          <label className="grid gap-2 text-sm">Content / lesson text<textarea required rows={7} value={form.content} onChange={e => setForm(f => ({...f,content:e.target.value}))} placeholder="Write lesson text. For mock tests, include the questions and answer key in the content for now." className="rounded-xl border border-white/15 bg-white/5 px-3 py-3"/></label>
          <label className="flex items-center gap-3 text-sm"><input type="checkbox" checked={form.published} onChange={e => setForm(f => ({...f,published:e.target.checked}))}/> Publish immediately</label>
          <button disabled={busy} className="rounded-xl bg-violet-300 px-4 py-3 font-semibold text-black disabled:opacity-50">{busy ? "Saving..." : "Save content"}</button>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        </form>

        <section className="card p-5">
          <h2 className="text-xl font-semibold">Content library <span className="text-sm text-gray-400">({items.length})</span></h2>
          <div className="mt-4 space-y-3">
            {items.length === 0 && <p className="rounded-xl border border-dashed border-white/15 p-6 text-sm text-gray-400">No content created yet. Use the form to add your first item.</p>}
            {items.map(item => <article key={item.id} className="rounded-xl border border-white/10 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0"><p className="text-xs uppercase text-violet-200">{item.type}</p><h3 className="mt-1 font-semibold">{item.title}</h3><p className="mt-1 line-clamp-2 text-sm text-gray-400">{item.description || item.content}</p><p className="mt-2 text-xs text-gray-500">{item.published ? "Published" : "Draft"} · {item.slug}</p></div>
                <div className="flex shrink-0 gap-2">
                  <button title={item.published ? "Unpublish" : "Publish"} onClick={() => change(item.id,"publish")} className="rounded-lg border border-white/15 p-2">{item.published ? <EyeOff size={16}/> : <Globe size={16}/>}</button>
                  <button title="Delete" onClick={() => change(item.id,"delete")} className="rounded-lg border border-red-400/30 p-2 text-red-300"><Trash2 size={16}/></button>
                </div>
              </div>
            </article>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-amber-200">Note: content is stored on the server filesystem for this initial version. For reliable production publishing across deployments, connect PostgreSQL and wire published records into each public listing page.</p>
        </section>
      </div>
    </main>
  );
}
