// app/sports-article/page.tsx
// Next.js 14 page (React Server Component)

export const metadata = {
  title: 'Underdogs Rise: City FC Shock Rivals in Season Opener',
  description: 'A match report and analysis of City FC’s unexpected 3-2 victory in the season opener.'
};

export default function Page() {
  return (
    <div>
      <article>
        <header>
          <h1>Underdogs Rise: City FC Shock Rivals in Season Opener</h1>
          <p>
            <strong>By</strong> Alex Moreno — <time dateTime="2025-08-07">August 7, 2025</time>
          </p>
          <p>Final score: <strong>City FC 3 — 2 United SC</strong></p>
        </header>

        <figure>
          <img src="/images/cityfc-celebration.jpg" alt="City FC players celebrating a goal" />
          <figcaption>City FC players celebrate the winning goal late in the match.</figcaption>
        </figure>

        <section>
          <h2>Match summary</h2>
          <p>
            In a pulsating season opener at Riverside Stadium, City FC overturned expectations by defeating
            pre-season favorites United SC 3–2. The contest featured rapid shifts of momentum, relentless
            pressing from City, and a dramatic late winner that sent the home fans into delirium.
          </p>
          <p>
            City opened the scoring in the 12th minute through a composed finish by striker Jonah Reid, who
            latched onto a clipped pass behind the defense. United fought back before the break with a leveler
            from midfielder Tomas Reid (not related), and the teams went into halftime tied at 1–1.
          </p>
        </section>

        <section>
          <h2>Second half — tactical adjustments</h2>
          <p>
            After the interval, City manager Lina Duarte switched to a narrower midfield shape, allowing fullbacks
            to provide width. The tweak paid off: City regained the lead with a 56th-minute curling strike from
            winger Marco Santos. United equalized again from a set-piece header on 73 minutes, but a stunning
            solo run and finish from substitute Ibrahima Conte in the 88th minute sealed the victory for City.
          </p>
        </section>

        <section>
          <h2>Key moments</h2>
          <ol>
            <li>12' — Jonah Reid's opener, breakaway finish.</li>
            <li>45+2' — Tomas Reid levels with a long-range effort.</li>
            <li>56' — Marco Santos restores City lead with a curling shot.</li>
            <li>73' — United equalize from a corner header.</li>
            <li>88' — Ibrahima Conte's solo winner.</li>
          </ol>
        </section>

        <aside>
          <h3>Match statistics (selected)</h3>
          <ul>
            <li>Possession: City FC 48% — 52% United SC</li>
            <li>Shots (on target): City FC 11 (6) — United SC 14 (5)</li>
            <li>Pass accuracy: City FC 82% — United SC 84%</li>
            <li>Yellow cards: City FC 2 — United SC 3</li>
          </ul>
        </aside>

        <section>
          <h2>Tactical analysis</h2>
          <p>
            City’s pressing structure disrupted United’s build-up play for long periods. By inverting the wide
            midfielder into central pockets, Duarte allowed Santos and Reid to exploit space on the counter,
            while Conte’s introduction provided fresh legs and a vertical threat behind United’s high line.
          </p>
          <p>
            United will rue giving away two set-pieces in dangerous areas and their failure to close down Conte’s
            decisive run. Defensively, they looked exposed to transitional play late in the game.
          </p>
        </section>

        <section>
          <h2>Player of the match</h2>
          <p>
            <strong>Ibrahima Conte</strong> — the substitute offered pace, directness, and clinical finishing. His
            88th-minute run that culminated in the match-winner showcased his ability to change the game in an instant.
          </p>
        </section>

        <footer>
          <h4>What’s next</h4>
          <p>
            City FC travel to Meadow Park next weekend to face Rovers United, while United SC have a midweek cup tie
            against County Town. Both teams will look to build on their opening-day performances.
          </p>
          <p>For more match reports and analysis, follow our sports desk.</p>
        </footer>
      </article>
    </div>
  );
}
