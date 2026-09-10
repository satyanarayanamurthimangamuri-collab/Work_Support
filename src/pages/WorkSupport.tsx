import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  FolderKanban,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  School,
  Users,
  Wrench,
} from "lucide-react";
import Button from "../components/Button";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useNavigate } from "../hooks/RouterContext";

const whatsappNumber = "8500285767";
const whatsappMessage = "Hi! I need help with my project. Can you assist me?";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const SERVICES = [
  [Wrench, "Technical Troubleshooting", "Get help diagnosing bugs, errors, configuration problems, deployment issues and broken workflows."],
  [FolderKanban, "Project Guidance", "Structure your project, review your approach and create a clear plan for the next stage."],
  [BarChart3, "Data & Analytics", "Get practical guidance with SQL, Excel, Power BI, Python, dashboards and data analysis."],
  [BrainCircuit, "AI & Machine Learning", "Understand machine learning concepts, project implementation, model workflows and practical AI solutions."],
  [Code2, "Coding Support", "Work through programming concepts, debugging problems, code structure and implementation challenges."],
  [GraduationCap, "Training & Skill Development", "Follow structured learning paths designed around the skills you actually need."],
  [School, "Academic Project Support", "Get practical guidance for academic, final-year and technical projects."],
  [BriefcaseBusiness, "Career & Professional Guidance", "Build relevant skills, improve your technical profile and create a practical path toward your career goals."],
] as const;

const AUDIENCES = [
  ["Students", ["Academic projects", "Programming support", "Technical learning", "Project planning"]],
  ["Job Seekers", ["Skill development", "Portfolio guidance", "Technical preparation", "Career direction"]],
  ["Developers", ["Debugging", "Code review", "Architecture guidance", "Deployment support"]],
  ["Professionals", ["Data & analytics", "Automation", "Workflow improvement", "Technical problem solving"]],
] as const;

const SKILLS = ["Python", "SQL", "Excel", "Power BI", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "React", "Data Analytics", "AI & Machine Learning", "Git & GitHub", "Databases", "Web Development"];

const STEPS = [
  ["01", "Tell Us Your Problem", "Explain what you're working on, what you've tried and where you're stuck."],
  ["02", "Connect With the Right Support", "Get focused guidance from someone who understands the type of problem you're facing."],
  ["03", "Work Through It Together", "Break the problem down, understand the solution and work through the next steps."],
  ["04", "Move Forward With Confidence", "Leave with a clearer understanding, practical solution and actionable next step."],
];

const PROBLEMS = [
  ["My project isn't working.", "Troubleshooting and structured debugging guidance to find the next useful signal."],
  ["I don't know how to start my project.", "Define the requirements, structure the work and choose a practical first step."],
  ["My SQL query isn't working.", "Review the query, identify the issue and explain the correct approach."],
  ["I need to understand data analytics.", "Create a practical learning path based on your goals and current level."],
  ["I need help with my final-year project.", "Get planning, technical guidance and implementation support without doing the work for you."],
  ["I don't know what skill to learn next.", "Build a realistic development roadmap connected to the work you want to do."],
];

const BENEFITS = [
  ["Personalized Guidance", "Support based on your specific situation rather than generic instructions."],
  ["Practical Solutions", "Focus on solving real problems and applying knowledge."],
  ["Clear Next Steps", "Know what to do after every session."],
  ["Better Understanding", "Learn the reasoning behind the solution instead of simply receiving an answer."],
];

const WHY_US = [
  ["Problem-Focused", "We start with the problem you're actually facing."],
  ["One-to-One Guidance", "Focused support instead of generic content."],
  ["Practical Approach", "Learn through real problems and real scenarios."],
  ["Clear Communication", "Complex technical topics explained clearly."],
  ["Flexible Support", "Support designed around your situation and goals."],
  ["Outcome-Oriented", "The goal is progress, not just information."],
];

const FAQS = [
  ["What kind of problems can I get help with?", "TechworkSupport focuses on technical, project, learning and professional-development problems, from a broken workflow to planning your next skill."],
  ["Is TechworkSupport suitable for beginners?", "Yes. Guidance can be adapted to your current level, with concepts explained clearly and at a useful pace."],
  ["Can I get help with coding problems?", "Yes, depending on the technologies and services offered. We can help you understand errors, structure code and work through implementation challenges."],
  ["Can you help with academic projects?", "We provide planning, explanation and technical guidance so you can build your own project and understand the work."],
  ["Can I get help with data analytics?", "Yes. Supported areas include SQL, Excel, Power BI, Python and related analytics skills."],
  ["How does a support session work?", "You describe the problem and what you have tried. We identify the right support, break the issue down and work through an actionable next step."],
  ["How do I request support?", "Use the Get TechworkSupport button, send a message through the contact page or reach out directly on WhatsApp."],
  ["Do you provide training?", "Yes. Structured training tracks cover practical technology, data and professional skills."],
];

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return <div className="mb-10 max-w-2xl">{eyebrow && <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A9C9EA]">{eyebrow}</span>}<h2 className={`mt-2 text-[30px] font-extrabold leading-[1.12] tracking-tight sm:text-[38px] ${light ? "text-white" : "text-navy"}`}>{title}</h2>{description && <p className={`mt-4 text-[16px] leading-[1.7] ${light ? "text-[#D5E2EC]" : "text-text-muted"}`}>{description}</p>}</div>;
}

function Reveal({ children, index = 0, className = "" }: { children: ReactNode; index?: number; className?: string }) {
  const ref = useRevealOnScroll<HTMLDivElement>(index);
  return <div ref={ref} className={`reveal-on-scroll ${className}`}>{children}</div>;
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;
  return <div className="border-b border-border"><button type="button" aria-expanded={open} aria-controls={answerId} onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15px] font-semibold text-navy transition-colors duration-150 ease-standard hover:text-blue"><span>{question}</span><HelpCircle size={18} className={`shrink-0 text-blue transition-transform duration-200 ease-standard ${open ? "rotate-45" : ""}`} aria-hidden="true" /></button><div id={answerId} hidden={!open} className="pb-5 pr-10 text-[14px] leading-[1.7] text-text-muted">{answer}</div></div>;
}

export default function WorkSupport() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "TechworkSupport | Practical Technical & Career Guidance";
    const description = "TechworkSupport provides practical technical guidance, project support, structured training and professional skill development to help you solve problems and move forward.";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = description;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "TechworkSupport",
      serviceType: [
        "Technical Support",
        "Project Guidance",
        "Training & Skill Development",
        "Professional Guidance"
      ],
      provider: {
        "@type": "Organization",
        name: "TechworkSupport",
        url: "https://techworksupport.com/"
      },
      areaServed: "Worldwide",
      description: "Practical technical support, project guidance and training for working professionals, freelancers and students.",
      url: "https://techworksupport.com/work-support"
    };

    let script = document.querySelector<HTMLScriptElement>('script[data-schema="service-page"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "service-page");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return <main>
    <section className="relative overflow-hidden bg-bg"><div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24"><div><span className="hero-badge inline-flex items-center gap-2 rounded-pill border border-border bg-light-blue px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue"><span className="h-1.5 w-1.5 rounded-full bg-blue" />[ TechworkSupport ]</span><h1 className="mt-6 max-w-3xl text-[40px] font-extrabold leading-[1.04] tracking-tight text-navy sm:text-[56px] lg:text-[66px]"><span className="hero-h1-l1 inline-block">Support Built Around</span><br /><span className="hero-h1-l2 inline-block">the Problem in Front of You</span></h1><p className="hero-desc mt-6 max-w-2xl text-[16px] leading-[1.75] text-text-muted sm:text-[18px]">One-to-one guidance from specialists focused on your specific challenge - whether you're building a project, solving a technical problem, developing your skills, or planning your next professional step.</p><div className="hero-ctas mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" onClick={() => navigate("/contact")}>Get TechworkSupport <ArrowRight size={17} /></Button><Button variant="secondary" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>Explore Our Services</Button></div></div><div className="hero-card relative mx-auto w-full max-w-[460px] lg:justify-self-end"><div className="rounded-2xl border border-border bg-white p-5 shadow-[0_24px_60px_-30px_rgba(18,48,74,0.45)] sm:p-7"><div className="flex items-center justify-between border-b border-border pb-4"><span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted">Support session</span><span className="flex items-center gap-1.5 rounded-pill bg-light-blue px-2.5 py-1 font-mono text-[10px] font-semibold text-blue"><span className="h-1.5 w-1.5 rounded-full bg-blue" />Active</span></div><div className="py-7"><div className="mb-4 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white"><Wrench size={19} /></div><div><p className="text-[13px] font-semibold text-navy">Technical troubleshooting</p><p className="mt-1 text-[11px] text-text-muted">Working through the next useful signal</p></div></div><div className="space-y-3 rounded-lg bg-bg p-4"><div className="flex items-center gap-2 text-[12px] text-navy"><Check size={15} className="text-blue" /> Reproduce the problem</div><div className="flex items-center gap-2 text-[12px] text-navy"><Check size={15} className="text-blue" /> Understand the cause</div><div className="flex items-center gap-2 text-[12px] text-text-muted"><span className="h-3.5 w-3.5 rounded-full border border-border" /> Plan the next step</div></div></div><div className="flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] text-text-muted"><span>WS - SUPPORT-014</span><span>One problem at a time</span></div></div></div></div></section>

    <section id="services" className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading eyebrow="Where we help" title="What Can We Help You With?" description="Practical support for the problems, projects and skills that matter to your work." /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map(([Icon, title, description], index) => <Reveal key={title} index={index}><article className="h-full rounded-xl border border-border bg-white p-5 transition-[border-color,transform] duration-200 ease-standard hover:-translate-y-0.5 hover:border-blue"><div className="mb-7 flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue text-blue"><Icon size={19} /></div><h3 className="text-[16px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="Built For People Who Want To Move Forward" description="Different starting points, the same need for practical direction." /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{AUDIENCES.map(([title, points], index) => <Reveal key={title} index={index}><article className="rounded-xl border border-border p-5"><div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-bg text-blue"><Users size={18} /></div><h3 className="text-[17px] font-bold text-navy">{title}</h3><ul className="mt-4 space-y-2">{points.map((point) => <li key={point} className="flex items-center gap-2 text-[13px] text-text-muted"><Check size={14} className="shrink-0 text-blue" />{point}</li>)}</ul></article></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading eyebrow="Practical coverage" title="Technologies & Skills We Support" description="A focused set of tools and foundations for learning, project work and professional growth." /><div className="flex max-w-5xl flex-wrap gap-2">{SKILLS.map((skill, index) => <Reveal key={skill} index={index}><span className="inline-flex rounded-pill border border-border bg-white px-4 py-2 font-mono text-[11px] font-medium text-navy transition-colors duration-150 ease-standard hover:border-blue hover:bg-light-blue hover:text-blue">{skill}</span></Reveal>)}</div></section>

    <section className="bg-navy text-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading light eyebrow="The working method" title="How TechworkSupport Works" description="A clear process that turns a vague problem into a practical next step." /><div className="grid grid-cols-1 gap-8 md:grid-cols-4">{STEPS.map(([number, title, description], index) => <Reveal key={number} index={index} className="relative"><div className="border-t border-white/25 pt-5"><span className="font-mono text-[12px] text-[#A9C9EA]">{number}</span><h3 className="mt-5 text-[17px] font-bold text-white">{title}</h3><p className="mt-3 text-[13px] leading-[1.7] text-[#D5E2EC]">{description}</p></div>{index < 3 && <ArrowRight className="absolute right-0 top-5 hidden text-[#A9C9EA] md:block" size={17} />}</Reveal>)}</div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading title="Stuck On Something? Start Here." description="You do not need to have the problem perfectly explained before asking for help." /><div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">{PROBLEMS.map(([title, description], index) => <Reveal key={title} index={index}><article className="group rounded-xl border border-border bg-[#F1F5F4] p-5 transition-colors duration-200 ease-standard hover:border-blue hover:bg-light-blue"><h3 className="text-[15px] font-bold text-navy">{title}</h3><p className="mt-3 text-[13px] leading-[1.7] text-text-muted">{description}</p><ArrowRight size={16} className="mt-5 text-blue transition-transform duration-180 ease-standard group-hover:translate-x-0.5" /></article></Reveal>)}</div></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><SectionHeading eyebrow="What you receive" title="More Than Answers. Clearer Direction." description="The goal is not to leave you dependent on another explanation. It is to help you understand the work and know what comes next." /><div className="grid gap-4 sm:grid-cols-2">{BENEFITS.map(([title, description], index) => <Reveal key={title} index={index}><article className="border-l-2 border-blue pl-4"><h3 className="text-[15px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></article></Reveal>)}</div></div></div></section>

    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28"><SectionHeading title="Why TechworkSupport?" description="Professional support should make difficult work feel more understandable, not more complicated." /><div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{WHY_US.map(([title, description], index) => <Reveal key={title} index={index}><div className="flex gap-4"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue" /><div><h3 className="text-[15px] font-bold text-navy">{title}</h3><p className="mt-2 text-[13px] leading-[1.7] text-text-muted">{description}</p></div></div></Reveal>)}</div></section>

    <section className="mx-auto max-w-8xl px-6 pb-20 lg:px-10 lg:pb-28"><Reveal><div className="overflow-hidden rounded-2xl bg-navy shadow-[0_20px_50px_-30px_rgba(18,48,74,0.5)]"><div className="grid min-h-[320px] items-end lg:grid-cols-2"><div className="p-7 sm:p-10"><span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A9C9EA]">Work through it together</span><h2 className="mt-4 max-w-xl text-[28px] font-bold leading-[1.15] text-white sm:text-[38px]">A clearer way to approach technical work.</h2><p className="mt-4 max-w-lg text-[14px] leading-[1.7] text-[#D5E2EC]">Bring the problem, the project or the next decision. Start with what you know, and build from there.</p></div><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80" alt="People collaborating around a laptop during a technical work session" loading="lazy" className="h-full min-h-[230px] w-full object-cover opacity-85 lg:min-h-full" /></div></div></Reveal></section>

    <section className="border-y border-border bg-white"><div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24"><SectionHeading title="What People Say" description="We are building this section around real experiences, not invented testimonials." /><div className="rounded-xl border border-dashed border-border bg-bg p-7 text-center sm:p-10"><MessageCircle size={22} className="mx-auto text-blue" /><p className="mt-4 text-[17px] font-semibold text-navy">Your experience could be featured here.</p><p className="mx-auto mt-2 max-w-md text-[13px] leading-[1.7] text-text-muted">Real feedback will be added as people choose to share how TechworkSupport helped them move forward.</p></div></div></section>

    <section className="mx-auto max-w-3xl px-6 py-20 lg:py-28"><SectionHeading title="Frequently Asked Questions" description="A few useful answers before you get started." /><div>{FAQS.map(([question, answer], index) => <FAQItem key={question} question={question} answer={answer} index={index} />)}</div></section>

    <section className="bg-light-blue"><div className="mx-auto flex max-w-8xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-20"><div><h2 className="max-w-xl text-[28px] font-extrabold leading-[1.15] text-navy sm:text-[38px]">Stuck On A Problem? Let&rsquo;s Work Through It.</h2><p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-text-muted">Tell us what you're trying to solve. We'll help you understand the problem, identify the next step and move forward with confidence.</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-pill border border-navy bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 ease-standard hover:-translate-y-px hover:bg-[#0d2438] active:translate-y-0 active:scale-[0.98]">Get TechworkSupport <ArrowRight size={17} /></a><Button variant="secondary" size="lg" onClick={() => navigate("/contact")}>Contact Us</Button></div></div></section>
  </main>;
}


