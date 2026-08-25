import { useLayoutEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../data/navigation";
import { useNavigate, usePath } from "../hooks/RouterContext";

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

export default function Navigation({ className = "", onNavigate }: NavigationProps) {
  const path = usePath();
  const navigate = useNavigate();
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeItem = list?.querySelector<HTMLElement>("[aria-current='page']");
    if (!list || !activeItem) return;

    setPill({ left: activeItem.offsetLeft, width: activeItem.offsetWidth });
    const update = () => setPill({ left: activeItem.offsetLeft, width: activeItem.offsetWidth });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [path]);

  return (
    <nav className={className} aria-label="Primary">
      <ul ref={listRef} className="relative flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 rounded-pill bg-light-blue transition-[transform,width] duration-250 ease-standard"
          style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
        />
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
                  "relative z-10 rounded-pill px-4 py-2 text-[14px] font-medium transition-colors duration-150 ease-standard",
                  isActive
                    ? "text-blue"
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
