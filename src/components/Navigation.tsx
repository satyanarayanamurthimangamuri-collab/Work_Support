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
      <ul className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = path === item.path;
          return (
            <li key={item.path}>
              <button
                onClick={() => {
                  navigate(item.path);
                  onNavigate?.();
                }}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "rounded-pill px-4 py-2 text-[14px] font-medium transition-colors duration-150",
                  isActive
                    ? "bg-light-blue text-blue"
                    : "text-text-muted hover:text-navy",
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
