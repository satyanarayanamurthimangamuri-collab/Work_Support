interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <span aria-hidden="true" className={`skeleton block ${className}`} />;
}

export function ChecklistSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-6 w-6 rounded-full" />
      <Skeleton className="h-3 w-[60%]" />
    </div>
  );
}

export function MetricSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-4 h-12 w-16" />
      <Skeleton className="mt-3 h-2.5 w-28" />
    </div>
  );
}

export function TicketRowSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-md" />
      <div className="flex-1">
        <Skeleton className="h-3 w-[70%]" />
        <Skeleton className="mt-2 h-2.5 w-[40%]" />
      </div>
      <Skeleton className="h-6 w-16 rounded-pill" />
    </div>
  );
}