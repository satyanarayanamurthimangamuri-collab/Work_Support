import PageHero from "../components/PageHero";

const TRACKS = [
  "Technical fundamentals",
  "Project delivery",
  "Communication at work",
  "Tools & workflow",
  "Career navigation",
  "Interview preparation",
  "Team collaboration",
  "Independent problem-solving",
];

export default function Training() {
  return (
    <main>
      <PageHero
        eyebrow="Training"
        title="Eight tracks, one guided process"
        description="Each track is built around a specific set of skills, delivered through structured sessions rather than a single one-off workshop."
      />
      <section className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((track, index) => (
            <li
              key={track}
              className="rounded-xl border border-border bg-white px-5 py-4"
            >
              <span className="font-mono text-[11px] text-text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-[14px] font-semibold text-navy">{track}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
