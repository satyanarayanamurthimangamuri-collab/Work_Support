interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "8", label: "Training Tracks" },
  { value: "1:1", label: "Personal Support" },
  { value: "5-Step", label: "Guided Process" },
];

export default function Stats() {
  return (
    <dl className="flex flex-wrap items-start gap-x-10 gap-y-5">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <dt className="order-2 font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            {stat.label}
          </dt>
          <dd className="order-1 text-2xl font-bold text-navy">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
