import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-8xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-border bg-light-blue px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />[
          {eyebrow} ]
        </span>
        <h1 className="max-w-2xl text-[36px] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-[48px]">
          {title}
        </h1>
        <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-text-muted sm:text-[17px]">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
