import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Stats from "./Stats";
import SupportCard from "./SupportCard";
import { useNavigate } from "../hooks/RouterContext";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-border bg-light-blue px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />[
            Work Support ]
          </span>

          <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-[52px] lg:text-[64px]">
            Professional Support
            <br />
            for Your Work &amp; Career
          </h1>

          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-text-muted sm:text-[17px]">
            We give working professionals, freelancers and students practical,
            one-to-one support — technical troubleshooting, project guidance and
            structured training — so real work problems get solved and real
            skills get built, not just talked about.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" onClick={() => navigate("/work-support")}>
              Get Work Support
              <ArrowRight size={17} strokeWidth={2.5} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate("/training")}>
              Explore Training
            </Button>
          </div>

          <div className="mt-12">
            <Stats />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:pl-4">
          <SupportCard />
        </div>
      </div>
    </section>
  );
}
