import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, authToken, creds } from "@/lib/auth";

/**
 * Session gate for the whole site.
 *
 * Unauthenticated visitors are redirected to the custom /login page (a real
 * styled form, not the native browser Basic-Auth dialog). On success the login
 * API sets an httpOnly cookie whose value matches the token computed here.
 *
 * Credentials come from env vars (set them in Vercel):
 *   BASIC_AUTH_USER      (default "team")
 *   BASIC_AUTH_PASSWORD  (default "shakira2026")
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always-public routes: the login page and the auth endpoints.
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/api/logout")
  ) {
    return NextResponse.next();
  }

  const { user, pass } = creds();
  const expected = await authToken(user, pass);
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  if (token && token === expected) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  if (pathname !== "/") url.searchParams.set("from", pathname);
  return NextResponse.redirect(url);
}

// Run on everything except Next internals and the favicon.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
