import { Check } from "lucide-react";
import { SUPPORT_CHECKLIST } from "../data/checklist";

const CORNER_BASE =
  "absolute h-8 w-8 border-navy sm:h-10 sm:w-10";

export default function SupportCard() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Decorative corner brackets — outside the card, four corners only */}
      <span
        aria-hidden="true"
        className={`${CORNER_BASE} -left-3 -top-3 border-l-2 border-t-2 sm:-left-4 sm:-top-4`}
      />
      <span
        aria-hidden="true"
        className={`${CORNER_BASE} -right-3 -top-3 border-r-2 border-t-2 sm:-right-4 sm:-top-4`}
      />
      <span
        aria-hidden="true"
        className={`${CORNER_BASE} -bottom-3 -left-3 border-b-2 border-l-2 sm:-bottom-4 sm:-left-4`}
      />
      <span
        aria-hidden="true"
        className={`${CORNER_BASE} -bottom-3 -right-3 border-b-2 border-r-2 sm:-bottom-4 sm:-right-4`}
      />

      {/* Card */}
      <div className="rounded-2xl border border-border bg-white shadow-[0_20px_45px_-25px_rgba(18,48,74,0.35)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8E0DF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8E0DF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D8E0DF]" />
          </div>
          <div className="flex items-center gap-1.5 rounded-pill bg-light-blue px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-blue">
              Session in Progress
            </span>
          </div>
        </div>

        {/* Checklist */}
        <div className="px-6 py-6">
          <h3 className="mb-5 text-lg font-bold text-navy">Today&rsquo;s support checklist</h3>
          <ul className="flex flex-col gap-4">
            {SUPPORT_CHECKLIST.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                {item.completed ? (
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                ) : (
                  <span
                    className="h-6 w-6 flex-shrink-0 rounded-full border border-border bg-white"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={[
                    "text-[14px]",
                    item.completed ? "text-navy" : "text-text-muted",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-6 py-3.5">
          <span className="font-mono text-[11px] text-text-muted">WS · SUPPORT-014</span>
          <span className="font-mono text-[11px] text-text-muted">Updated just now</span>
        </div>
      </div>
    </div>
  );
}
