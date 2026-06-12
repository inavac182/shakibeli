import { NextRequest, NextResponse } from "next/server";

/**
 * HTTP Basic Auth gate for the whole site.
 *
 * Credentials come from environment variables so they are never committed:
 *   BASIC_AUTH_USER      (default "team")
 *   BASIC_AUTH_PASSWORD  (default "shakira2026")
 *
 * Set both in the Vercel dashboard (Project → Settings → Environment Variables)
 * before sharing the URL. Everyone on the team uses the same pair.
 */
export function middleware(req: NextRequest) {
  const expectedUser = process.env.BASIC_AUTH_USER || "team";
  const expectedPass = process.env.BASIC_AUTH_PASSWORD || "shakira2026";

  const header = req.headers.get("authorization");

  if (header) {
    const [scheme, encoded] = header.split(" ");
    if (scheme === "Basic" && encoded) {
      // atob is available in the Edge runtime
      const decoded = atob(encoded);
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Shakira vs Belinda internal", charset="UTF-8"',
    },
  });
}

// Protect everything except Next.js internals and the favicon.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
