"use client";

import { useEffect, useRef } from "react";
import "reveal.js/dist/reveal.css";

/* Stable Wikimedia Commons image URLs (hotlinked, CC-licensed where noted). */
const IMG = {
  sh2009:
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Usher_and_Shakira_at_the_Obama_inauguration%2C_2009_%28cropped1%29.jpg",
  sh2014:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Shakira_2014.jpg/960px-Shakira_2014.jpg",
  sh2017:
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Shakira_Global_Citizen_2017_%28cropped%29.jpg",
  shConcert:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Shakira_in_concert.jpg",
  sh2023:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg",
  shRio:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Shakira_Rio_02.jpg/960px-Shakira_Rio_02.jpg",
  beEarly: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Belinda.jpg",
  beMonterrey:
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Belinda_Auditorio_Coca_Cola_Monterrey_13.jpg",
  be2021:
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Belinda_Huawei_2021.jpg",
};

/** <img> that quietly hides itself (and any caption) if the remote file 404s. */
function Img({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        const fig = (e.currentTarget.closest("figure") ||
          e.currentTarget.parentElement) as HTMLElement | null;
        if (fig) fig.style.visibility = "hidden";
      }}
    />
  );
}

export default function Page() {
  const deckRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<unknown>(null);

  useEffect(() => {
    if (revealRef.current || !deckRef.current) return;
    let deck: { initialize: () => void; destroy: () => void } | undefined;
    import("reveal.js").then(({ default: Reveal }) => {
      if (!deckRef.current || revealRef.current) return;
      deck = new Reveal(deckRef.current, {
        hash: true,
        slideNumber: "c/t",
        transition: "slide",
        backgroundTransition: "fade",
        controls: true,
        progress: true,
        center: false,
        width: 1280,
        height: 720,
        margin: 0.04,
      });
      deck.initialize();
      revealRef.current = deck;
    });
    return () => {
      try {
        deck?.destroy();
      } catch {
        /* noop */
      }
      revealRef.current = null;
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {/* ---------------- TITLE ---------------- */}
        <section
          data-background-gradient="linear-gradient(135deg,#2a0a2e 0%,#0b0b12 55%,#06223a 100%)"
        >
          <span className="kicker">Internal team deck · {`June 2026`}</span>
          <h1>
            Shakira <span style={{ color: "#9a93a8" }}>vs</span> Belinda
          </h1>
          <h3 style={{ color: "#ffd24a", fontWeight: 600 }}>
            How age &amp; life reshape an artist — music, dance, performance
          </h3>
          <p className="muted" style={{ marginTop: "1.2em" }}>
            Two Latin pop icons, two decades apart in age, both reinventing
            themselves through heartbreak, reinvention and the stage.
          </p>
          <p className="footer-note">
            Use → / ← arrows (or swipe) to navigate · press <strong>Esc</strong>{" "}
            for the slide overview
          </p>
        </section>

        {/* ---------------- AGENDA ---------------- */}
        <section data-background-color="#0b0b12">
          <h2>What we&apos;ll cover</h2>
          <div className="cols">
            <div>
              <ul>
                <li>
                  <strong>Shakira</strong> — five eras, 1990 → 2026
                </li>
                <li>
                  <strong>Belinda</strong> — child star → reinvention, 2000 →
                  2026
                </li>
                <li>How personal life bent each career</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Dance &amp; performance: better or worse with age?</li>
                <li>Head-to-head comparison</li>
                <li>
                  🕵️ Verdict: the World Cup 2026 &ldquo;body double&rdquo;
                  rumor
                </li>
                <li>Discussion prompts for the group</li>
              </ul>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "0.8em" }}>
            Ages for reference: Shakira b. 1977 · Belinda b. 1989 — a 12-year gap
            that lines up two different career stages side by side.
          </p>
        </section>

        {/* ================= SHAKIRA ================= */}
        <section
          className="section-title"
          data-background-gradient="linear-gradient(135deg,#3a0d3f 0%,#0b0b12 70%)"
        >
          <span className="kicker">Part one</span>
          <h1 style={{ color: "#ff5ca8" }}>Shakira</h1>
          <p className="lead">
            From a 13-year-old in Barranquilla to the first artist to open a
            World Cup on home-host soil twice over.
          </p>
        </section>

        {/* SHAKIRA — early years */}
        <section className="shakira" data-background-color="#100a14">
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 1 · 1990–1998</span>
              <h2>Roots: rock en español + belly dance</h2>
              <ul>
                <li>
                  Signed to Sony at <strong>13</strong>. First albums{" "}
                  <em>Magia</em> (1991) &amp; <em>Peligro</em> (1993) flop.
                </li>
                <li>
                  <strong>Pies Descalzos</strong> (1995) sells 3M+ — her
                  signature blend of Latin rock, pop &amp; Arabic melody.
                </li>
                <li>
                  <strong>Dónde Están los Ladrones?</strong> (1998) leans into
                  her Lebanese heritage — the belly-dancing identity is born.
                </li>
              </ul>
              <p className="muted">
                Dance DNA: she began belly dancing as a child; it becomes her
                lifelong signature move.
              </p>
            </div>
            <figure className="pic">
              <Img src={IMG.sh2009} alt="Shakira performing, late 2000s" />
              <figcaption className="caption">
                Shakira, 2009 · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SHAKIRA — crossover */}
        <section className="shakira" data-background-color="#140a14">
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 2 · 2001–2006</span>
              <h2>Global crossover</h2>
              <ul>
                <li>
                  <strong>Laundry Service</strong> (2001) breaks her into
                  English — &ldquo;Whenever, Wherever,&rdquo; &ldquo;Underneath
                  Your Clothes.&rdquo;
                </li>
                <li>
                  <strong>&ldquo;Hips Don&apos;t Lie&rdquo;</strong> (2006,
                  w/ Wyclef) tops charts worldwide — belly dancing goes fully
                  mainstream.
                </li>
                <li>
                  Sound widens: Latin pop, reggaeton flavor, Middle-Eastern
                  hooks.
                </li>
              </ul>
              <p className="muted">
                This is the era that fixes &ldquo;the hips&rdquo; in global pop
                memory.
              </p>
            </div>
            <figure className="pic">
              <Img src={IMG.shConcert} alt="Shakira in concert" />
              <figcaption className="caption">
                Shakira in concert · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SHAKIRA — experiments + World Cup 2010 */}
        <section className="shakira" data-background-color="#0e0a16">
          <span className="kicker">Era 3 · 2009–2016</span>
          <h2>Experiments &amp; the first World Cup moment</h2>
          <div className="cols tight">
            <div>
              <ul>
                <li>
                  <strong>She Wolf</strong> (2009) pivots to electropop — a
                  deliberate break from her rock-pop signature.
                </li>
                <li>
                  <strong>Waka Waka</strong> (2010 FIFA World Cup) becomes one of
                  the best-selling World Cup songs ever.
                </li>
                <li>
                  <em>Sale el Sol</em> (2010) &amp; <em>Shakira</em> (2014):
                  coaching on <em>The Voice</em>, motherhood, steadier pop.
                </li>
              </ul>
            </div>
            <figure className="pic">
              <Img src={IMG.sh2014} alt="Shakira in 2014" />
              <figcaption className="caption">
                Shakira, 2014 · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SHAKIRA — El Dorado + Super Bowl */}
        <section className="shakira" data-background-color="#0a0e16">
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 4 · 2017–2020</span>
              <h2>El Dorado &amp; the Super Bowl peak</h2>
              <ul>
                <li>
                  <strong>El Dorado</strong> (2017) wins the Grammy for Best
                  Latin Pop Album; &ldquo;La Bicicleta&rdquo; with Carlos Vives.
                </li>
                <li>
                  <strong>Super Bowl LIV</strong> (2020, with J.Lo):
                  critically acclaimed, 4 Emmy noms, choreographed by Beyoncé
                  collaborator JaQuel Knight.
                </li>
              </ul>
              <blockquote>
                &ldquo;Looked and sounded great, moving fleetly between monster
                bangers.&rdquo; — Naomi Fry, <em>The New Yorker</em>, on the
                2020 halftime show
              </blockquote>
            </div>
            <figure className="pic">
              <Img src={IMG.sh2017} alt="Shakira at Global Citizen, 2017" />
              <figcaption className="caption">
                Shakira, Global Citizen 2017 · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SHAKIRA — breakup era */}
        <section
          className="shakira"
          data-background-gradient="linear-gradient(135deg,#2a0a1e 0%,#0b0b12 70%)"
        >
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 5 · 2022–2026 · the breakup era</span>
              <h2>Heartbreak becomes rocket fuel</h2>
              <ul>
                <li>
                  June 2022: 11-year relationship with{" "}
                  <strong>Gerard Piqué</strong> ends amid cheating reports.
                </li>
                <li>
                  <em>Monotonía</em> (Oct 2022), then{" "}
                  <strong>BZRP Session 53</strong> (Jan 2023) — a viral
                  empowerment / diss anthem, #1 in 16 countries.
                </li>
                <li>
                  <strong>Las Mujeres Ya No Lloran</strong> (2024): most-streamed
                  album of 2024 in 24h, 7× platinum, 2025 Grammy Best Latin Pop
                  Album.
                </li>
              </ul>
              <p className="muted">
                The split — not new love — produced the biggest commercial
                chapter of her career.
              </p>
            </div>
            <figure className="pic">
              <Img src={IMG.sh2023} alt="Shakira at the 2023 Latin Grammys" />
              <figcaption className="caption">
                Shakira, 2023 Latin Grammys · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SHAKIRA — life → music timeline */}
        <section className="shakira" data-background-color="#0b0b12">
          <h2>Shakira: life events → career impact</h2>
          <table className="cmp">
            <thead>
              <tr>
                <th>Life event</th>
                <th>When</th>
                <th>What it did to the work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lebanese heritage</td>
                <td>lifelong</td>
                <td className="s">
                  Belly dance + Arabic melody become her signature
                </td>
              </tr>
              <tr>
                <td>Move to the US / English</td>
                <td>2001</td>
                <td className="s">Global crossover, Laundry Service</td>
              </tr>
              <tr>
                <td>Motherhood (2 sons)</td>
                <td>2013, 2015</td>
                <td className="s">
                  Slower output, <em>The Voice</em>, family-centered years
                </td>
              </tr>
              <tr>
                <td>Spain tax case</td>
                <td>2018–23</td>
                <td className="s">
                  Public pressure; later settled — fed the &ldquo;survivor&rdquo;
                  narrative
                </td>
              </tr>
              <tr>
                <td>Piqué breakup</td>
                <td>2022</td>
                <td className="s">
                  Most commercially successful era of her life
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ================= BELINDA ================= */}
        <section
          className="section-title"
          data-background-gradient="linear-gradient(135deg,#0d2a3f 0%,#0b0b12 70%)"
        >
          <span className="kicker">Part two</span>
          <h1 style={{ color: "#5cc6ff" }}>Belinda</h1>
          <p className="lead">
            Mexico&apos;s child telenovela star who grew up in public and is now
            reinventing herself in regional Mexican music.
          </p>
        </section>

        {/* BELINDA — child star */}
        <section className="belinda" data-background-color="#0a1016">
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 1 · 2000–2002</span>
              <h2>Child star of the telenovela</h2>
              <ul>
                <li>
                  Born 1989. At <strong>10</strong>, leads{" "}
                  <em>Amigos x Siempre</em> (2000).
                </li>
                <li>
                  <em>Aventuras en el Tiempo</em> (2001),{" "}
                  <em>Cómplices al Rescate</em> (2002) — a household name as a
                  kid.
                </li>
                <li>
                  Acting-first training shapes her theatrical, high-energy stage
                  presence later.
                </li>
              </ul>
            </div>
            <figure className="pic">
              <Img src={IMG.beEarly} alt="Belinda, early career" />
              <figcaption className="caption">
                Belinda · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BELINDA — pop debut */}
        <section className="belinda" data-background-color="#0a1320">
          <div className="media-row">
            <div className="text">
              <span className="kicker">Era 2 · 2003–2006</span>
              <h2>Teen-pop breakout</h2>
              <ul>
                <li>
                  Debut <strong>Belinda</strong> (2003): 1.1M+ copies, hits
                  &ldquo;Lo Siento,&rdquo; &ldquo;Vivir.&rdquo;
                </li>
                <li>
                  Leaves Sony BMG; <strong>Utopía</strong> (2006) goes platinum
                  in Mexico, 2 Latin Grammy noms.
                </li>
                <li>
                  Bilingual pop-rock; positioned as a Latin-American teen idol.
                </li>
              </ul>
            </div>
            <figure className="pic">
              <Img
                src={IMG.beMonterrey}
                alt="Belinda performing live in Monterrey"
              />
              <figcaption className="caption">
                Belinda live, Monterrey · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BELINDA — adult pop + acting */}
        <section className="belinda" data-background-color="#0a1018">
          <span className="kicker">Era 3 · 2010–2021</span>
          <h2>Adult pop, acting &amp; TV fame</h2>
          <div className="cols tight">
            <div>
              <ul>
                <li>
                  <strong>Carpe Diem</strong> (2010, &ldquo;Egoísta&rdquo;) and{" "}
                  <strong>Catarsis</strong> (2013) — straight to #1 in Mexico.
                </li>
                <li>
                  Coach on <em>La Voz México</em>; Netflix&apos;s{" "}
                  <em>Welcome to Eden</em> (2022) — a fame that runs on
                  music + screen together.
                </li>
                <li>
                  Becomes one of Latin America&apos;s most-followed pop
                  personalities.
                </li>
              </ul>
            </div>
            <figure className="pic">
              <Img src={IMG.be2021} alt="Belinda in 2021" />
              <figcaption className="caption">
                Belinda, 2021 · Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        {/* BELINDA — reinvention */}
        <section
          className="belinda"
          data-background-gradient="linear-gradient(135deg,#0d2a3f 0%,#0b0b12 70%)"
        >
          <span className="kicker">Era 4 · 2024–2026 · reinvention</span>
          <h2>Regional Mexican &amp; a heartbreak anthem of her own</h2>
          <div className="cols tight">
            <div>
              <ul>
                <li>
                  <strong>&ldquo;Cactus&rdquo;</strong> (Jan 2024) — widely read
                  as her answer to the <strong>Christian Nodal</strong> split;
                  even references his erased eye tattoo.
                </li>
                <li>
                  Pivots into pop × <strong>regional Mexican / corridos</strong>;
                  big on TikTok &amp; Spotify.
                </li>
                <li>
                  Album <em>Indómita</em> (2025); acting in{" "}
                  <em>¿Quién Lo Mató?</em> (2024).
                </li>
              </ul>
            </div>
            <div>
              <blockquote>
                &ldquo;What good was it to tattoo my eyes and then erase them
                with others?&rdquo; — <em>Cactus</em>, 2024
              </blockquote>
              <p className="muted">
                Note the rhyme with Shakira: a public breakup turned into the
                song that reignites the conversation around her.
              </p>
            </div>
          </div>
        </section>

        {/* BELINDA — life → music */}
        <section className="belinda" data-background-color="#0b0b12">
          <h2>Belinda: life events → career impact</h2>
          <table className="cmp">
            <thead>
              <tr>
                <th>Life event</th>
                <th>When</th>
                <th>What it did to the work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Child telenovela fame</td>
                <td>2000–02</td>
                <td className="b">
                  Theatrical, acting-driven stage presence
                </td>
              </tr>
              <tr>
                <td>Label / management split</td>
                <td>2005</td>
                <td className="b">
                  More creative control on <em>Utopía</em>
                </td>
              </tr>
              <tr>
                <td>Lupillo Rivera romance</td>
                <td>2019</td>
                <td className="b">
                  Tabloid era; the famous (later covered) tattoo
                </td>
              </tr>
              <tr>
                <td>Christian Nodal engagement &amp; split</td>
                <td>2021–22</td>
                <td className="b">
                  Fuels &ldquo;Cactus&rdquo; &amp; the 2024 reinvention
                </td>
              </tr>
              <tr>
                <td>Pivot to regional Mexican</td>
                <td>2024–25</td>
                <td className="b">New, younger, viral audience</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* BELINDA — the apple challenge (vertical stack: story → video) */}
        <section>
          <section
            className="belinda"
            data-background-gradient="linear-gradient(135deg,#10202e 0%,#0b0b12 70%)"
          >
            <h2>🍎 The apple challenge — a viral detour</h2>
            <div className="cols">
              <div className="col-card belinda">
                <h3 style={{ color: "#a8def9" }}>What happened</h3>
                <ul style={{ fontSize: "0.74em" }}>
                  <li>
                    On Televisa&apos;s morning show <em>Hoy</em> (~2016),
                    Belinda bet she could{" "}
                    <strong>split an apple with her forehead</strong> — claiming
                    her forehead was &ldquo;flat.&rdquo;
                  </li>
                  <li>
                    Host Jorge &ldquo;El Burro&rdquo; Van Rankin tried first and{" "}
                    <strong>failed</strong>.
                  </li>
                  <li>
                    She smacked the apple against her head repeatedly while
                    co-hosts begged her to stop —{" "}
                    <strong>it did NOT break</strong> on air.
                  </li>
                </ul>
              </div>
              <div className="col-card belinda">
                <h3 style={{ color: "#a8def9" }}>Did it work? &amp; why</h3>
                <ul style={{ fontSize: "0.74em" }}>
                  <li>
                    <strong>Not that day.</strong> It became an iconic,
                    cringe-but-beloved viral moment — the{" "}
                    <strong>#BelindaChallenge</strong>, endless memes.
                  </li>
                  <li>
                    Why do it? A playful on-air dare; she genuinely insisted her
                    &ldquo;flat&rdquo; forehead made it possible.
                  </li>
                  <li>
                    Redemption arc: she{" "}
                    <strong>later actually broke one</strong> (famously in a bit
                    with illusionist Criss Angel) — proof she eventually pulled
                    it off.
                  </li>
                </ul>
              </div>
            </div>
            <p className="muted" style={{ marginTop: "0.5em" }}>
              ↓ Press the down arrow to watch the clip
            </p>
          </section>

          <section
            className="belinda"
            data-background-gradient="linear-gradient(135deg,#10202e 0%,#0b0b12 70%)"
          >
            <h2>🍎 Watch it — and the Shakira contrast</h2>
            <div className="media-row">
              <div
                className="pic"
                style={{ flex: "0 0 30%", display: "flex" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/-jzDKItu3dI"
                  title="Belinda apple challenge on Hoy"
                  style={{
                    width: "100%",
                    aspectRatio: "9 / 16",
                    border: 0,
                    borderRadius: 14,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="text">
                <blockquote style={{ fontSize: "0.78em" }}>
                  Has <strong>Shakira</strong> done anything like it? No record
                  of a slapstick stunt like this. Her &ldquo;body feats&rdquo;
                  are <em>athletic</em>, not comedic — extreme flexibility (legs
                  behind her head), live belly-dance, and controlled
                  choreography.
                </blockquote>
                <p className="muted" style={{ fontSize: "0.66em" }}>
                  Two very different relationships with the &ldquo;physical
                  stunt&rdquo;: Belinda&apos;s is viral physical comedy;
                  Shakira&apos;s is disciplined athleticism. (Video: third-party
                  YouTube upload of the <em>Hoy</em> segment — may move or break
                  over time. Direct link:{" "}
                  <a href="https://www.youtube.com/shorts/-jzDKItu3dI">
                    youtube.com/shorts/-jzDKItu3dI
                  </a>
                  .)
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* ================= COMPARISON ================= */}
        <section
          className="section-title"
          data-background-gradient="linear-gradient(135deg,#3a0d3f 0%,#06223a 100%)"
        >
          <span className="kicker">Part three</span>
          <h1>Head to head</h1>
          <p className="lead">
            Same playbook, different generation: how their arcs rhyme — and where
            they diverge.
          </p>
        </section>

        {/* COMPARISON — table */}
        <section data-background-color="#0b0b12">
          <h2>The arcs, side by side</h2>
          <table className="cmp">
            <thead>
              <tr>
                <th></th>
                <th className="s">Shakira</th>
                <th className="b">Belinda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Born</td>
                <td className="s">1977 (Barranquilla, CO)</td>
                <td className="b">1989 (Madrid → Mexico)</td>
              </tr>
              <tr>
                <td>Entry point</td>
                <td className="s">Singer-songwriter at 13</td>
                <td className="b">Child TV actress at 10</td>
              </tr>
              <tr>
                <td>Core craft</td>
                <td className="s">Belly dance + songwriting</td>
                <td className="b">Acting + pop performance</td>
              </tr>
              <tr>
                <td>Global crossover</td>
                <td className="s">Yes — English, worldwide #1s</td>
                <td className="b">Mostly Spanish-language / regional</td>
              </tr>
              <tr>
                <td>Defining breakup</td>
                <td className="s">Piqué → BZRP 53 (2023)</td>
                <td className="b">Nodal → Cactus (2024)</td>
              </tr>
              <tr>
                <td>2026 status</td>
                <td className="s">World Cup opener + world tour</td>
                <td className="b">Regional-Mexican reinvention</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* COMPARISON — heartbreak as fuel */}
        <section data-background-color="#120a14">
          <h2>Pattern: heartbreak → empowerment anthem</h2>
          <div className="cols">
            <div className="col-card shakira">
              <h3 style={{ color: "#ff9ccb" }}>Shakira · BZRP 53 (2023)</h3>
              <p>
                Turned the Piqué split into a viral, record-breaking diss +
                empowerment track. Commercially, her{" "}
                <strong>biggest</strong> era yet.
              </p>
              <span className="pill">#1 in 16 countries</span>
              <span className="pill">Latin Grammy: Song of the Year</span>
            </div>
            <div className="col-card belinda">
              <h3 style={{ color: "#a8def9" }}>Belinda · Cactus (2024)</h3>
              <p>
                Turned the Nodal split into a defiant comeback single and the
                doorway into her <strong>regional-Mexican</strong> reinvention.
              </p>
              <span className="pill b">Viral on TikTok</span>
              <span className="pill b">Reframed her narrative</span>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "0.7em" }}>
            Takeaway for the group: for both women, the most career-defining
            move came <em>after</em> a very public heartbreak — at very different
            ages (Shakira ~45, Belinda ~34).
          </p>
        </section>

        {/* COMPARISON — dance & performance over time */}
        <section data-background-color="#0a0e16">
          <h2>Dance &amp; performance: better or worse with age?</h2>
          <div className="cols tight">
            <div className="col-card shakira">
              <h3 style={{ color: "#ff9ccb" }}>Shakira</h3>
              <ul style={{ fontSize: "0.8em" }}>
                <li>
                  Critics say her live craft <strong>sharpened</strong> with
                  age.
                </li>
                <li>
                  2020 Super Bowl reviewed as an <em>improvement</em> on prior
                  years (NYT) — &ldquo;dance ability rivals her singing.&rdquo;
                </li>
                <li>
                  2026 World Cup: praised for executing choreography{" "}
                  <em>live</em> at 49.
                </li>
              </ul>
            </div>
            <div className="col-card belinda">
              <h3 style={{ color: "#a8def9" }}>Belinda</h3>
              <ul style={{ fontSize: "0.8em" }}>
                <li>
                  Praised for <strong>theatrical</strong> stage presence &amp;
                  crowd connection.
                </li>
                <li>
                  Acting roots = polished, high-energy, visually rich shows.
                </li>
                <li>
                  2025: lauded live at Premio Lo Nuestro for &ldquo;crystalline
                  vocals&rdquo; on a corrido duet.
                </li>
              </ul>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "0.6em" }}>
            Verdict on the trend: neither has &ldquo;declined&rdquo; — both
            adapted. Shakira leans on athletic belly-dance; Belinda leans on
            theatrical staging.
          </p>
        </section>

        {/* COMPARISON — they shared a stage */}
        <section
          data-background-gradient="linear-gradient(135deg,#1a0a2e 0%,#06223a 100%)"
        >
          <h2>June 11, 2026: they shared the same stage</h2>
          <div className="cols">
            <div className="col-card shakira">
              <h3 style={{ color: "#ff9ccb" }}>Shakira</h3>
              <p>
                Headlined the <strong>World Cup opening ceremony</strong> at
                Estadio Azteca, performing the official anthem{" "}
                <em>&ldquo;Dai Dai&rdquo;</em> with Burna Boy. Set to perform
                again at the <strong>final&apos;s halftime</strong> (Jul 19) with
                Madonna &amp; BTS.
              </p>
            </div>
            <div className="col-card belinda">
              <h3 style={{ color: "#a8def9" }}>Belinda</h3>
              <p>
                Performed at the <strong>same ceremony</strong> with{" "}
                <strong>Los Ángeles Azules</strong> (&ldquo;Por Ella&rdquo;) in
                front of the World Cup trophy — a marker of how far her own
                reinvention has carried her.
              </p>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "0.7em" }}>
            A neat snapshot of the whole deck: the veteran headlining, the
            reinvented star on the same bill.
          </p>
        </section>

        {/* ================= VERDICT: BODY DOUBLE ================= */}
        <section
          className="section-title"
          data-background-gradient="linear-gradient(135deg,#2a0a1e 0%,#0b0b12 70%)"
        >
          <span className="kicker">The investigation</span>
          <h1>🕵️ Did Shakira use a stunt / body double?</h1>
          <p className="lead">
            World Cup 2026 opening ceremony, Estadio Azteca — the viral
            &ldquo;Fake Shakira&rdquo; theory, examined.
          </p>
        </section>

        {/* VERDICT — the claim */}
        <section data-background-color="#0b0b12">
          <h2>The claim vs. the evidence</h2>
          <div className="cols">
            <div className="col-card" style={{ borderTop: "4px solid #ff5c5c" }}>
              <h3 style={{ color: "#ff9c9c" }}>What people claimed</h3>
              <ul style={{ fontSize: "0.78em" }}>
                <li>
                  After the show, &ldquo;body double&rdquo; theories went viral
                  on X, TikTok &amp; Instagram.
                </li>
                <li>
                  Argument: she &ldquo;looked different&rdquo; on stage.
                </li>
                <li>
                  Some pointed to a <strong>scar on her face</strong> as a clue
                  something was off.
                </li>
              </ul>
            </div>
            <div className="col-card" style={{ borderTop: "4px solid #4ad08a" }}>
              <h3 style={{ color: "#8fe7b8" }}>What the evidence shows</h3>
              <ul style={{ fontSize: "0.78em" }}>
                <li>
                  The &ldquo;different look&rdquo; is explained by{" "}
                  <strong>hairstyle, sunglasses &amp; a neon-yellow outfit</strong>.
                </li>
                <li>
                  Journalists reviewing footage cite that very{" "}
                  <strong>forehead scar as proof it WAS Shakira</strong>.
                </li>
                <li>
                  Official FIFA broadcasts &amp; high-res stills credit Shakira;
                  rehearsal clips match the live staging.
                </li>
                <li>Zero credible sourcing; FIFA &amp; her team didn&apos;t dignify it.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VERDICT — the verdict */}
        <section
          data-background-gradient="linear-gradient(135deg,#06291c 0%,#0b0b12 75%)"
        >
          <span className="kicker" style={{ color: "#8fe7b8" }}>
            Our verdict
          </span>
          <h2>
            ✅ No stunt double. It was really Shakira — and the scar{" "}
            <span style={{ color: "#8fe7b8" }}>supports</span> that.
          </h2>
          <ul>
            <li>
              The &ldquo;Fake Shakira&rdquo; story is a{" "}
              <strong>viral internet conspiracy with no evidence</strong> behind
              it.
            </li>
            <li>
              Crucially, the <strong>scar cuts the opposite way</strong> from the
              rumor: reporters used it as a distinguishing feature to{" "}
              <em>confirm</em> her identity, not to question it.
            </li>
            <li>
              She performed the choreography <strong>live</strong>, and was
              reviewed as doing so by outlets at the ceremony.
            </li>
          </ul>
          <p className="muted" style={{ marginTop: "0.6em" }}>
            Confidence: <strong>high</strong>. This is a costume-and-camera
            illusion plus social-media pattern-matching — not a documented
            stunt. (If FIFA or Shakira ever issue a statement, we&apos;d revisit
            — but none exists as of June 12, 2026.)
          </p>
        </section>

        {/* ================= DISCUSSION ================= */}
        <section
          data-background-gradient="linear-gradient(135deg,#1a0a2e 0%,#06223a 100%)"
        >
          <h2>💬 For the group to debate</h2>
          <ul>
            <li>
              Does <strong>age</strong> hurt or help these two? The evidence here
              leans &ldquo;help.&rdquo; Agree?
            </li>
            <li>
              Is &ldquo;turn your breakup into a hit&rdquo; authentic art or a
              marketing formula?
            </li>
            <li>
              Shakira crossed over globally; Belinda is going{" "}
              <em>deeper</em> into regional Mexican. Which strategy ages better?
            </li>
            <li>
              Did the &ldquo;body double&rdquo; rumor change how you watch a live
              performance?
            </li>
          </ul>
          <p className="muted" style={{ marginTop: "0.8em" }}>
            Drop your thoughts in the team channel — that&apos;s what this deck is
            for. 🎤
          </p>
        </section>

        {/* ================= SOURCES ================= */}
        <section data-background-color="#0b0b12">
          <h2>Sources</h2>
          <p className="muted" style={{ fontSize: "0.62em", lineHeight: 1.5 }}>
            Wikipedia (Shakira; Belinda Peregrín; BZRP Session 53; Cactus; Las
            Mujeres Ya No Lloran World Tour; Super Bowl LIV halftime show) ·
            Britannica · GRAMMY.com · Billboard · Rolling Stone · CBS News ·
            Today.com · Hola · The National · E! Online · Dance Magazine · Grazia
            · LADbible · The Mirror · The Express Tribune · Geo.tv · Auralcrave.
            Images: Wikimedia Commons (CC-licensed), hotlinked. Compiled June 12,
            2026.
          </p>
          <p className="muted" style={{ fontSize: "0.6em", marginTop: "1em" }}>
            ⚠️ Image note: photos are hotlinked from Wikimedia Commons and may
            change or break over time. Swap in your own licensed files in{" "}
            <code>app/page.tsx</code> (the <code>IMG</code> object) if you want
            them permanent.
          </p>
        </section>

        {/* ================= CLOSING ================= */}
        <section
          className="section-title"
          data-background-gradient="linear-gradient(135deg,#3a0d3f 0%,#06223a 100%)"
        >
          <h1>Gracias 🎶</h1>
          <p className="lead">Shakira &amp; Belinda — two ages, one playbook.</p>
          <p className="footer-note">
            Internal team deck · password-protected · not for public sharing
          </p>
        </section>
      </div>
    </div>
  );
}
