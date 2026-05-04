import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json({ error: "ADMIN_PASSWORD não configurado" }, { status: 500 });
  }
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (password !== expected) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }
  const jar = await cookies();
  jar.set("admin_session", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12,
    path: "/",
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const jar = await cookies();
  jar.delete("admin_session");
  return NextResponse.json({ ok: true });
}
