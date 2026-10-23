import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import JSZip from "jszip";
import mammoth from "mammoth";
import pdfParse from "pdf-parse";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const dataFile = path.join(process.cwd(), "data", "content.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");
const allowedTypes = ["course", "article", "blog"];

async function readEntries(): Promise<any[]> {
  try {
    return JSON.parse(await readFile(dataFile, "utf8"));
  } catch {
    return [];
  }
}

function slugify(value: string) {
  return value.toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

function safeName(value: string) {
  return path.basename(value).replace(/[^a-zA-Z0-9._-]/g, "-").slice(-100) || "document";
}

async function extractText(name: string, buffer: Buffer): Promise<string> {
  const ext = path.extname(name).toLowerCase();

  if (ext === ".pdf") {
    const result = await pdfParse(buffer);
    return result.text.trim();
  }

  if (ext === ".docx") {
    const result = await mammoth.extractRawText({ buffer });
    return result.value.trim();
  }

  if ([".txt", ".md", ".csv"].includes(ext)) {
    return buffer.toString("utf8").trim();
  }

  if ([".html", ".htm"].includes(ext)) {
    return buffer.toString("utf8")
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/\s+/g, " ").trim();
  }

  throw new Error(`Unsupported file type: ${ext || "unknown"}`);
}

async function saveContent(
  name: string,
  buffer: Buffer,
  type: string,
  description: string,
  published: boolean,
  entries: any[]
) {
  const text = await extractText(name, buffer);
  if (!text) throw new Error(`${name} has no readable text.`);

  await mkdir(uploadsDir, { recursive: true });
  await mkdir(path.dirname(dataFile), { recursive: true });

  const storedName = `${randomUUID()}-${safeName(name)}`;
  await writeFile(path.join(uploadsDir, storedName), buffer);

  const originalTitle = path.basename(name, path.extname(name))
    .replace(/[-_]+/g, " ").trim();
  const title = originalTitle || "Untitled";
  const baseSlug = slugify(title) || randomUUID().slice(0, 8);
  let slug = baseSlug;
  let count = 2;

  while (entries.some(e => e.type === type && e.slug === slug)) {
    slug = `${baseSlug}-${count++}`;
  }

  const entry = {
    id: randomUUID(),
    type,
    title,
    slug,
    description: description || `Uploaded document: ${title}`,
    content: text,
    fileUrl: `/uploads/${storedName}`,
    fileName: name,
    published,
    updatedAt: new Date().toISOString(),
  };

  entries.push(entry);
  return entry;
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Please log in as admin first." }, { status: 401 });
  }

  try {
    const form = await req.formData();
    const type = String(form.get("type") || "");
    const description = String(form.get("description") || "");
    const published = form.get("published") === "true";
    const files = form.getAll("files").filter(
      (item): item is File => item instanceof File && item.size > 0
    );

    if (!allowedTypes.includes(type)) {
      return NextResponse.json({ error: "Choose course, article or blog." }, { status: 400 });
    }
    if (!files.length) {
      return NextResponse.json({ error: "Choose at least one file." }, { status: 400 });
    }
    if (files.some(file => file.size > 20 * 1024 * 1024)) {
      return NextResponse.json({ error: "Each file must be 20 MB or smaller." }, { status: 400 });
    }

    const entries = await readEntries();
    const created: any[] = [];
    const errors: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      if (path.extname(file.name).toLowerCase() === ".zip") {
        try {
          const zip = await JSZip.loadAsync(buffer);
          for (const item of Object.values(zip.files)) {
            if (item.dir || item.name.startsWith("__MACOSX/")) continue;
            const ext = path.extname(item.name).toLowerCase();
            if (![".pdf", ".docx", ".txt", ".md", ".html", ".htm"].includes(ext)) continue;

            try {
              const fileBuffer = Buffer.from(await item.async("nodebuffer"));
              const entry = await saveContent(
                path.basename(item.name), fileBuffer, type, description, published, entries
              );
              created.push(entry);
            } catch (error) {
              errors.push(`${item.name}: ${error instanceof Error ? error.message : "Could not import"}`);
            }
          }
        } catch {
          errors.push(`${file.name}: Invalid ZIP file.`);
        }
      } else {
        try {
          const entry = await saveContent(file.name, buffer, type, description, published, entries);
          created.push(entry);
        } catch (error) {
          errors.push(`${file.name}: ${error instanceof Error ? error.message : "Could not import"}`);
        }
      }
    }

    await mkdir(path.dirname(dataFile), { recursive: true });
    await writeFile(dataFile, JSON.stringify(entries, null, 2), "utf8");

    return NextResponse.json({
      ok: created.length > 0,
      imported: created.length,
      entries: created.map(({ id, type, title, slug, published, fileUrl }) =>
        ({ id, type, title, slug, published, fileUrl })),
      errors,
    }, { status: created.length ? 200 : 400 });
  } catch {
    return NextResponse.json({ error: "Upload failed. Check the file and try again." }, { status: 500 });
  }
}
