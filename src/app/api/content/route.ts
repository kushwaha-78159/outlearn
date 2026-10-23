import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const type = new URL(req.url).searchParams.get("type");
  try {
    const raw = await readFile(path.join(process.cwd(), "data", "content.json"), "utf8");
    const items = JSON.parse(raw).filter((x: { published: boolean; type: string }) =>
      x.published && (!type || x.type === type)
    );
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([]);
  }
}
