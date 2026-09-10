import { NAV_ITEMS } from "../data/navigation";
import { useNavigate, usePath } from "../hooks/RouterContext";

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

export default function Navigation({ className = "", onNavigate }: NavigationProps) {
  const path = usePath();
  const navigate = useNavigate();

  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = path === item.path;
          return (
            <li key={item.path} className="relative w-full md:w-auto">
              <button
                onClick={() => {
                  navigate(item.path);
                  onNavigate?.();
                }}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative z-10 inline-flex min-h-[38px] w-full items-center justify-center rounded-pill px-3.5 py-1.5 text-[13.5px] font-medium transition-all duration-150 ease-standard md:w-auto",
                  isActive
                    ? "bg-light-blue text-blue shadow-[0_10px_20px_-12px_rgba(64,131,216,0.45)]"
                    : "text-text-muted hover:text-navy hover:shadow-[0_0_0_1px_rgba(107,114,128,0.12)]",
                ].join(" ")}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
