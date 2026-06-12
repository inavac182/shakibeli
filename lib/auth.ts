// Shared auth helpers used by both the Edge middleware and the API routes.
// We avoid HTTP Basic Auth (ugly native browser prompt) in favour of a custom
// sign-in page that sets an httpOnly session cookie.

export const AUTH_COOKIE = "svb_auth";
export const SESSION_DAYS = 30;

/** The shared team credentials (override these in Vercel env vars). */
export function creds() {
  return {
    user: process.env.BASIC_AUTH_USER || "team",
    pass: process.env.BASIC_AUTH_PASSWORD || "shakira2026",
  };
}

/**
 * Deterministic session token derived from the credentials, so the middleware
 * can validate the cookie without any shared store. Uses Web Crypto, which is
 * available in both the Edge (middleware) and Node (route handler) runtimes.
 */
export async function authToken(user: string, pass: string): Promise<string> {
  const data = new TextEncoder().encode(`${user}:${pass}:svb-session-v1`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
