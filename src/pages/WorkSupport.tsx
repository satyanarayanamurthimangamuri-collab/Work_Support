import PageHero from "../components/PageHero";

const SUPPORT_AREAS = [
  {
    title: "Technical troubleshooting",
    description: "Get unstuck on a build, a bug, or a broken workflow with a specialist who works through it with you.",
  },
  {
    title: "Project guidance",
    description: "Structure the next stage of a project, review your approach, and get a clear plan forward.",
  },
  {
    title: "Structured training",
    description: "Work through a guided track designed around the skills your role actually needs.",
  },
];

export default function WorkSupport() {
  return (
    <main>
      <PageHero
        eyebrow="Work Support"
        title="Support built around the problem in front of you"
        description="One-to-one sessions with a specialist, focused on the specific issue you're working through — not a generic script."
      />
      <section className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SUPPORT_AREAS.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <h2 className="text-[17px] font-bold text-navy">{area.title}</h2>
              <p className="mt-2 text-[14px] leading-[1.7] text-text-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
