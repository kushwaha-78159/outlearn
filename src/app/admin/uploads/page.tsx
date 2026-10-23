"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Entry = {
  id: string;
  type: string;
  title: string;
  slug: string;
  published: boolean;
  fileUrl?: string;
};

export default function AdminUploadsPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [type, setType] = useState("course");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/content", { cache: "no-store" });
    if (res.ok) setEntries(await res.json());
  }

  useEffect(() => { void load(); }, []);

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    if (!files?.length) {
      setMessage("Pehle apni files select karo.");
      return;
    }

    setBusy(true);
    setMessage("Files upload aur process ho rahi hain...");
    const form = new FormData();
    form.set("type", type);
    form.set("description", description);
    form.set("published", String(published));
    Array.from(files).forEach(file => form.append("files", file));

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json();
      setMessage(data.error || `Successfully imported: ${data.imported || 0}` +
        (data.errors?.length ? ` | Issues: ${data.errors.join("; ")}` : ""));
      if (res.ok) {
        setFiles(null);
        const input = document.getElementById("content-files") as HTMLInputElement | null;
        if (input) input.value = "";
        await load();
      }
    } catch {
      setMessage("Upload fail hua. Connection check karke dobara try karo.");
    } finally {
      setBusy(false);
    }
  }

  async function changeEntry(id: string, action: "publish" | "delete") {
    if (action === "delete" && !confirm("Is content ko permanently delete karna hai?")) return;
    const res = action === "delete"
      ? await fetch("/api/admin/content", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
      : await fetch("/api/admin/content", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, published: !entries.find(e => e.id === id)?.published }) });

    setMessage(res.ok ? "Content updated." : "Action failed. Admin login check karo.");
    await load();
  }

  return (
    <main className="min-h-screen bg-[#090b12] px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/admin" className="text-sm text-violet-300">← Admin Dashboard</Link>
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Upload Content</h1>
        <p className="mt-2 text-gray-400">PDF, Word, text documents aur ZIP se Courses, Articles aur Blogs import karo.</p>

        <form onSubmit={upload} className="mt-8 grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          <label className="grid gap-2 text-sm">Content type
            <select value={type} onChange={e => setType(e.target.value)} className="rounded-xl border border-white/15 bg-[#111522] px-4 py-3">
              <option value="course">Course</option>
              <option value="article">Article</option>
              <option value="blog">Blog</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">Select file(s)
            <input id="content-files" type="file" multiple accept=".pdf,.docx,.txt,.md,.html,.htm,.zip" onChange={e => setFiles(e.target.files)} className="rounded-xl border border-white/15 p-4 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-300 file:px-4 file:py-2 file:font-semibold file:text-black" />
            <span className="text-xs text-gray-500">PDF, DOCX, TXT, MD, HTML, ZIP · Max 20 MB per file. ZIP ke andar supported documents import honge.</span>
          </label>

          <label className="grid gap-2 text-sm">Description (optional)
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="Content ka short description..." className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
          </label>

          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} className="size-4 accent-violet-300" />
            Publish immediately
          </label>

          <button disabled={busy} className="rounded-xl bg-violet-300 px-5 py-3 font-bold text-black disabled:opacity-50">
            {busy ? "Uploading..." : "Upload & Import"}
          </button>
          {message && <p role="status" className="break-words text-sm text-violet-200">{message}</p>}
        </form>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Uploaded content</h2>
          <div className="mt-4 grid gap-3">
            {entries.map(entry => (
              <article key={entry.id} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 p-4">
                <div>
                  <h3 className="font-semibold">{entry.title}</h3>
                  <p className="mt-1 text-xs text-gray-400">{entry.type} · {entry.published ? "Published" : "Draft"}</p>
                  {entry.fileUrl && <a className="mt-2 inline-block text-xs text-violet-300 underline" href={entry.fileUrl} target="_blank" rel="noreferrer">Open original file</a>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => changeEntry(entry.id, "publish")} className="rounded-lg border border-white/15 px-3 py-2 text-sm">{entry.published ? "Unpublish" : "Publish"}</button>
                  <button onClick={() => changeEntry(entry.id, "delete")} className="rounded-lg border border-red-400/30 px-3 py-2 text-sm text-red-300">Delete</button>
                </div>
              </article>
            ))}
            {!entries.length && <p className="text-sm text-gray-500">No uploads yet.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
