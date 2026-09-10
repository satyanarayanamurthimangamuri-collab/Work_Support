import { useEffect, type ReactNode } from "react";
import { ArrowRight, BrainCircuit, Code2, FolderKanban, GraduationCap, Lightbulb, Settings2, Users, Wrench } from "lucide-react";
import Button from "../components/Button";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useNavigate } from "../hooks/RouterContext";
import { WORK_WITH_TEAM_IMAGES } from "../data/workWithTeamImages";

const SERVICES = [
  [Wrench, "Technical Support", "Help team members solve technical problems, troubleshoot issues and remove blockers that slow down their work."],
  [FolderKanban, "Project Guidance", "Support your team with project planning, technical decisions, structure and clear next steps."],
  [GraduationCap, "Team Training", "Build practical skills through structured training designed around your team's technology, role and goals."],
  [Settings2, "Workflow Support", "Identify inefficient processes and help your team improve the way technical and project work gets done."],
] as const;

const FIT_STEPS = [
  ["01", "Understand", "Understand your team's goals, challenges, skills and priorities."],
  ["02", "Support", "Provide focused guidance, training or problem-solving where your team needs it most."],
  ["03", "Improve", "Turn the support into better skills, clearer processes and stronger ways of working."],
] as const;

const AUDIENCES = [
  ["Startups", "Practical technical guidance while building, testing and growing."],
  ["Small Businesses", "Support teams with technical skills, tools and working processes."],
  ["Project Teams", "Guidance for planning, implementation, troubleshooting and delivery."],
  ["Growing Teams", "Structured training and ongoing support as your team develops new skills."],
] as const;

const CHALLENGES = ["Team members are stuck on technical problems", "Projects are moving slower than expected", "Technical skills are inconsistent across the team", "New team members need technical onboarding", "Teams need help learning new technologies", "Employees need practical training", "Workflows could be more efficient", "The team needs an outside perspective on technical problems"];

const PROCESS_STEPS = [
  ["01", "Understand Your Team", "Tell us about your team's goals, challenges and current priorities."],
  ["02", "Identify Priorities", "Determine where support, training or guidance can make the biggest difference."],
  ["03", "Build the Support Plan", "Create a practical approach around your team's specific requirements."],
  ["04", "Work & Improve", "Provide focused support and help your team continue moving forward."],
] as const;

const SUPPORT_AREAS = [
  ["Technology", ["Software Development", "Web Development", "Databases", "Deployment & Configuration"]],
  ["Data", ["SQL", "Excel", "Power BI", "Data Analytics"]],
  ["AI", ["Artificial Intelligence", "Machine Learning", "AI Projects"]],
  ["Professional", ["Technical Training", "Project Guidance", "Workflow Improvement"]],
] as const;

const WHY_US = [
  [Lightbulb, "Practical", "Focus on real work and real challenges."],
  [Settings2, "Flexible", "Support can adapt to your team's needs."],
  [Code2, "Focused", "Work on the areas that matter most."],
  [Users, "Collaborative", "Work alongside your team rather than simply providing generic advice."],
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="mb-10 max-w-2xl">{eyebrow && <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-blue">{eyebrow}</span>}<h2 className="mt-2 text-[30px] font-extrabold leading-[1.12] tracking-tight text-navy sm:text-[38px]">{title}</h2>{description && <p className="mt-4 text-[16px] leading-[1.7] text-text-muted">{description}</p>}</div>;
}

function Reveal({ children, index = 0, className = "" }: { children: ReactNode; index?: number; className?: string }) {
  const ref = useRevealOnScroll<HTMLDivElement>(index);
  return <div ref={ref} className={`reveal-on-scroll ${className}`}>{children}</div>;
}

export default function WorkWithTeam() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Work With Team | TechworkSupport";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Bring practical technical support, project guidance, training and workflow support into your team with TechworkSupport.";
  }, []);

  return <main>
    <section className="relative overflow-hidden bg-bg"><div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24"><div><span className="hero-badge inline-flex items-center gap-2 rounded-pill border border-border bg-light-blue px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue"><span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />[ Work With Team ]</span><h1 className="hero-h1-l1 mt-6 max-w-3xl text-[40px] font-extrabold leading-[1.04] tracking-tight text-navy sm:text-[56px]">Bring TechworkSupport into your team</h1><p className="hero-desc mt-6 max-w-2xl text-[16px] leading-[1.75] text-text-muted sm:text-[18px]">For managers and teams who want ongoing, structured support built around how your team actually works - not a one-size-fits-all program.</p><div className="hero-ctas mt-8"><Button size="lg" onClick={() => navigate("/contact")}>Talk to Our Team <ArrowRight size={17} /></Button></div></div><div className="hero-card relative mx-auto w-full max-w-[520px] lg:justify-self-end"><div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-[0_24px_60px_-30px_rgba(18,48,74,0.45)] sm:p-3"><img src={WORK_WITH_TEAM_IMAGES.collaboration} alt="Technology team collaborating around a project table" className="aspect-[4/3] w-full rounded-xl object-cover" /></div></div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading eyebrow="Team support" title="What Your Team Can Get" description="Practical support designed around the challenges your team is solving." /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map(([Icon, title, description], index) => <Reveal key={title} index={index}><article className="h-full rounded-xl border border-border bg-white p-5 transition-[border-color,transform] duration-200 ease-standard hover:-translate-y-0.5 hover:border-blue"><div className="mb-7 flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue text-blue"><Icon size={19} aria-hidden="true" /></div><h3 className="text-[16px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="Support That Fits the Way Your Team Works" description="Every team has different goals, workflows and challenges. TechworkSupport can be structured around what your team actually needs." /><div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">{FIT_STEPS.map(([number, title, description], index) => <Reveal key={number} index={index} className="relative md:px-8 first:md:pl-0 last:md:pr-0"><article className="relative h-full border-border md:border-l md:pl-8 first:md:border-l-0 first:md:pl-0"><span className="font-mono text-[12px] font-semibold text-blue">{number}</span><h3 className="mt-3 text-[18px] font-bold text-navy">{title}</h3><p className="mt-2 text-[14px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading eyebrow="Who we support" title="Who We Support" description="Flexible support for teams at different stages of growth." /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{AUDIENCES.map(([title, description], index) => <Reveal key={title} index={index}><article className="h-full rounded-xl border border-border p-5"><div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-light-blue text-blue"><Users size={18} aria-hidden="true" /></div><h3 className="text-[17px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="Does Your Team Face These Challenges?" description="Recognize a problem here? It may be a good place to start a conversation." /><div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">{CHALLENGES.map((challenge, index) => <Reveal key={challenge} index={index}><div className="flex items-start gap-3 border-b border-border py-4 text-[14px] leading-[1.6] text-text-muted"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden="true" />{challenge}</div></Reveal>)}</div><div className="mt-10"><Button onClick={() => navigate("/contact")}>Talk to Our Team <ArrowRight size={17} /></Button></div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading eyebrow="Our approach" title="A Simple Approach to Team Support" /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{PROCESS_STEPS.map(([number, title, description], index) => <Reveal key={number} index={index}><article className="relative h-full rounded-xl border border-border bg-white p-5"><span className="font-mono text-[11px] font-semibold text-blue">{number}</span><h3 className="mt-5 text-[16px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p>{index < PROCESS_STEPS.length - 1 && <span className="absolute -right-3 top-8 z-10 hidden h-5 w-5 items-center justify-center rounded-full border border-border bg-bg text-blue lg:flex"><ArrowRight size={12} aria-hidden="true" /></span>}</article></Reveal>)}</div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="Areas We Can Support" description="Support across common technical, data and professional work areas." /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{SUPPORT_AREAS.map(([title, areas], index) => <Reveal key={title} index={index}><article className="h-full rounded-xl border border-border p-5"><div className="mb-5 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-light-blue text-blue"><BrainCircuit size={18} aria-hidden="true" /></div><h3 className="text-[17px] font-bold text-navy">{title}</h3></div><ul className="space-y-2">{areas.map((area) => <li key={area} className="flex items-start gap-2 text-[13px] text-text-muted"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" aria-hidden="true" />{area}</li>)}</ul></article></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><div className="relative overflow-hidden rounded-2xl border border-border bg-navy"><img src={WORK_WITH_TEAM_IMAGES.collaboration} alt="Colleagues working together on a technology project" loading="lazy" className="h-[360px] w-full object-cover opacity-60 sm:h-[420px]" /><div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/90 via-navy/20 to-transparent p-6 sm:p-10"><div className="max-w-md"><span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A9C9EA]">Practical partnership</span><h2 className="mt-2 text-[30px] font-extrabold leading-[1.12] text-white sm:text-[38px]">Better Support. Better Work.</h2><p className="mt-4 text-[15px] leading-[1.7] text-[#D5E2EC]">Give your team practical guidance when they need it.</p></div></div></div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="Why TechworkSupport for Teams?" /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{WHY_US.map(([Icon, title, description], index) => <Reveal key={title} index={index}><article className="h-full rounded-xl border border-border bg-bg p-5"><div className="mb-7 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue"><Icon size={19} aria-hidden="true" /></div><h3 className="text-[16px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></div></section>

    <section className="bg-navy"><div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-8 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:px-10 lg:py-24"><div className="max-w-2xl"><span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A9C9EA]">Start a conversation</span><h2 className="mt-2 text-[30px] font-extrabold leading-[1.12] text-white sm:text-[38px]">Let's Build Better Ways of Working</h2><p className="mt-4 text-[16px] leading-[1.7] text-[#D5E2EC]">Tell us about your team's challenges, goals and areas where you need support.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><Button size="lg" onClick={() => navigate("/contact")}>Talk to Our Team <ArrowRight size={17} /></Button><Button variant="secondary" size="lg" onClick={() => navigate("/contact")}>Contact Us</Button></div></div></section>
  </main>;
}
