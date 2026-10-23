import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const file = path.join(process.cwd(), "data", "content.json");
type Entry = { id: string; type: string; title: string; slug: string; description: string; content: string; published: boolean; updatedAt: string };

async function read(): Promise<Entry[]> {
  try { return JSON.parse(await readFile(file, "utf8")); }
  catch { return []; }
}
async function save(items: Entry[]) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(items, null, 2), "utf8");
}

export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await read());
}

export async function POST(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (!body || !["course", "article", "blog", "mock-test"].includes(body.type) ||
      typeof body.title !== "string" || !body.title.trim() ||
      typeof body.content !== "string" || !body.content.trim()) {
    return NextResponse.json({ error: "Choose a content type and provide a title and content." }, { status: 400 });
  }
  const items = await read();
  const slug = (body.slug || body.title).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (items.some(x => x.slug === slug && x.type === body.type)) {
    return NextResponse.json({ error: "That slug already exists for this content type." }, { status: 409 });
  }
  const item: Entry = {
    id: randomUUID(), type: body.type, title: body.title.trim(), slug,
    description: String(body.description || "").trim(),
    content: body.content.trim(), published: body.published === true,
    updatedAt: new Date().toISOString()
  };
  items.unshift(item);
  await save(items);
  return NextResponse.json(item, { status: 201 });
}

export async function PATCH(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, ...changes } = await req.json().catch(() => ({}));
  const items = await read();
  const index = items.findIndex(x => x.id === id);
  if (index < 0) return NextResponse.json({ error: "Content not found" }, { status: 404 });
  if (typeof changes.published === "boolean") items[index].published = changes.published;
  if (typeof changes.title === "string" && changes.title.trim()) items[index].title = changes.title.trim();
  items[index].updatedAt = new Date().toISOString();
  await save(items);
  return NextResponse.json(items[index]);
}

export async function DELETE(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json().catch(() => ({}));
  const items = await read();
  await save(items.filter(x => x.id !== id));
  return NextResponse.json({ ok: true });
}
