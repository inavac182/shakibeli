import { NextResponse } from "next/server";
import { AUTH_COOKIE, SESSION_DAYS, authToken, creds } from "@/lib/auth";

export async function POST(req: Request) {
  let body: { user?: string; pass?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* ignore malformed body */
  }

  const { user, pass } = creds();

  if (body.user === user && body.pass === pass) {
    const token = await authToken(user, pass);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(AUTH_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * SESSION_DAYS,
    });
    return res;
  }

  return NextResponse.json(
    { ok: false, error: "Incorrect username or password." },
    { status: 401 }
  );
}
