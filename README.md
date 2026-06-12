# Shakira vs Belinda 🎤🍎

An internal, password-protected slide deck for the team: how **Shakira** and
**Belinda** have evolved across the years — music, dance, performance, the
personal-life events behind the music, critical reception over time, and two
hot topics: the **2026 World Cup "body double" rumor** and **Belinda's apple
challenge** (with the video embedded).

Built with **Next.js** + **reveal.js**. Login is **HTTP Basic Auth** via Edge
middleware, so the whole site is gated behind one shared username/password.

---

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: change the username/password
npm run dev                  # http://localhost:3000
```

You'll be prompted for a username + password. Defaults (if you don't set env
vars): **`team` / `shakira2026`**.

Production preview:

```bash
npm run build && npm start
```

---

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket) **or** run
   `npx vercel` from here.
2. Import the project at <https://vercel.com/new> — it auto-detects Next.js, no
   config needed.
3. In **Project → Settings → Environment Variables**, set:
   | Name | Value |
   |------|-------|
   | `BASIC_AUTH_USER` | your chosen username |
   | `BASIC_AUTH_PASSWORD` | your chosen password |
   Add them to **Production** (and Preview if you want gated previews too).
4. Deploy. Share the URL + the credentials with the team. Everyone uses the
   same pair.

> The login is enforced in `middleware.ts` for every route. If the env vars are
> missing, it falls back to `team` / `shakira2026` — so **set real values in
> Vercel** before sharing anything sensitive.

---

## Editing the deck

- **Slides / content:** `app/page.tsx` — each `<section>` is one slide.
- **Look & animations:** `app/globals.css` (palette, the moving "aurora"
  gradients, entrance animations, card hovers).
- **Images:** the `IMG` object at the top of `app/page.tsx`. They're **hotlinked
  from Wikimedia Commons** and may move/break over time — swap in your own
  licensed files (drop them in `/public` and reference `/yourfile.jpg`) if you
  want them permanent.
- **The apple video** is an embedded third-party YouTube upload; if it ever goes
  dead, replace the `youtube.com/embed/...` id in the apple slide.

## Navigation

Arrow keys or swipe. **Down arrow** on the apple slide reveals the video
sub-slide. Press **Esc** for the slide overview, **F** for fullscreen.

## Note on sources

Facts compiled from Wikipedia, Britannica, GRAMMY.com, Billboard, Rolling
Stone, CBS News, Today, Hola, The National, E! Online, Dance Magazine, Grazia,
LADbible, The Mirror, The Express Tribune, Geo.tv and Auralcrave (June 2026).
This is an opinion/discussion deck for an internal group, not journalism.
