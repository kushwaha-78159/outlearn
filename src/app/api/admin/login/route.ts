import { NextResponse } from "next/server";
import { createAdminSession, COOKIE } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (
    !email || !password ||
    typeof body.email !== "string" ||
    typeof body.password !== "string" ||
    body.email.trim().toLowerCase() !== email.toLowerCase() ||
    body.password !== password
  ) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  try {
    const token = await createAdminSession();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 8 * 60 * 60,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Server authentication configuration error." }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}
