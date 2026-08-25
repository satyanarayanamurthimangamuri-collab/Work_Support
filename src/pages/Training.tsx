import PageHero from "../components/PageHero";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const TRACKS = [
  {
    title: "Oracle Database",
    description: "Database development, administration basics, queries and performance foundations.",
    tools: ["Oracle", "SQL Developer", "PL/SQL"],
  },
  {
    title: "SQL & Databases",
    description: "Write reliable queries, design schemas and work confidently with relational data.",
    tools: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    title: "Data Engineering",
    description: "Build practical data pipelines from source systems to analytics-ready datasets.",
    tools: ["Python", "ETL", "Data Pipelines"],
  },
  {
    title: "ETL & Integration",
    description: "Move, transform and validate data through repeatable integration workflows.",
    tools: ["Informatica", "Talend", "SSIS"],
  },
  {
    title: "Python for Data",
    description: "Automate repetitive work and prepare, analyse and validate business data.",
    tools: ["Python", "Pandas", "Jupyter"],
  },
  {
    title: "Big Data Platforms",
    description: "Understand distributed processing, streaming concepts and large-scale workloads.",
    tools: ["Spark", "Hadoop", "Kafka"],
  },
  {
    title: "Cloud Data",
    description: "Learn the building blocks for deploying and operating data workloads in the cloud.",
    tools: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Business Intelligence",
    description: "Turn prepared data into useful dashboards, reports and decisions.",
    tools: ["Power BI", "Tableau", "Data Studio"],
  },
  {
    title: "Data Warehousing",
    description: "Model facts and dimensions, build reporting layers and understand data quality.",
    tools: ["Star Schema", "Dimensional Models", "SQL"],
  },
  {
    title: "Excel & Reporting",
    description: "Create clean analysis workflows for everyday reporting and business operations.",
    tools: ["Excel", "Pivot Tables", "Power Query"],
  },
  {
    title: "Git & Linux",
    description: "Work safely with source control, command-line tools and team delivery workflows.",
    tools: ["Git", "GitHub", "Linux"],
  },
  {
    title: "Career & Interviews",
    description: "Prepare project stories, technical explanations and role-specific interview practice.",
    tools: ["Projects", "Mock Interviews", "Resume Review"],
  },
];

type TrainingTrackData = (typeof TRACKS)[number];

function TrainingTrack({ track, index }: { track: TrainingTrackData; index: number }) {
  const revealRef = useRevealOnScroll<HTMLLIElement>(index);
  return (
    <li ref={revealRef} className="reveal-on-scroll rounded-xl border border-border bg-white px-5 py-4">
      <span className="font-mono text-[11px] text-text-muted">{String(index + 1).padStart(2, "0")}</span>
      <h2 className="mt-1 text-[15px] font-bold text-navy">{track.title}</h2>
      <p className="mt-2 text-[13px] leading-[1.6] text-text-muted">{track.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {track.tools.map((tool) => (
          <span key={tool} className="rounded-pill bg-light-blue px-2 py-1 font-mono text-[10px] font-medium text-blue">
            {tool}
          </span>
        ))}
      </div>
    </li>
  );
}

export default function Training() {
  return (
    <main>
      <PageHero
        eyebrow="Training"
        title="Technology tracks for real work"
        description="Build practical skills across databases, data engineering, cloud, analytics and the tools teams use every day."
      />
      <section className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track, index) => (
            <TrainingTrack key={track.title} track={track} index={index} />
          ))}
        </ul>
      </section>
    </main>
  );
}
