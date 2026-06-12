"use client";

import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, pass }),
      });
      if (res.ok) {
        const params = new URLSearchParams(window.location.search);
        const from = params.get("from") || "/";
        // only allow same-origin internal paths
        window.location.href = from.startsWith("/") ? from : "/";
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Sign in failed.");
    } catch {
      setError("Network error — please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-aurora" aria-hidden />
      <form className="login-card" onSubmit={onSubmit}>
        <span className="login-kicker">Internal team access</span>
        <h1 className="login-title">
          Shakira <span style={{ color: "#9a93a8", fontWeight: 600 }}>vs</span>{" "}
          Belinda
        </h1>
        <p className="login-sub">
          This deck is private to our group. Please sign in with the shared team
          credentials.
        </p>

        <label className="login-field">
          <span>Username</span>
          <input
            className="login-input"
            type="text"
            autoComplete="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="team"
            autoFocus
            required
          />
        </label>

        <label className="login-field">
          <span>Password</span>
          <input
            className="login-input"
            type="password"
            autoComplete="current-password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="••••••••"
            required
          />
        </label>

        {error ? <div className="login-error">{error}</div> : null}

        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Enter the deck →"}
        </button>

        <p className="login-foot">🎤 For our internal group only · not public</p>
      </form>
    </div>
  );
}
