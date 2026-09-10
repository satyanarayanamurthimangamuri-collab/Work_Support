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
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeItem = list?.querySelector<HTMLElement>("[aria-current='page']");
    if (!list || !activeItem) return;

    const update = () =>
      setPill({
        left: activeItem.offsetLeft,
        top: activeItem.offsetTop,
        width: activeItem.offsetWidth,
        height: activeItem.offsetHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [path]);

  return (
    <nav className={className} aria-label="Primary">
      <ul
        ref={listRef}
        className="relative flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-1"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 rounded-pill bg-light-blue shadow-[0_10px_20px_-12px_rgba(64,131,216,0.45)] transition-[transform,width,height,box-shadow] duration-250 ease-standard"
          style={{
            transform: `translate(${pill.left}px, ${pill.top}px)`,
            width: pill.width,
            height: pill.height,
          }}
        />
        {NAV_ITEMS.map((item) => {
          const isActive = path === item.path;
          return (
            <li key={item.path} className="relative">
              <button
                onClick={() => {
                  navigate(item.path);
                  onNavigate?.();
                }}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative z-10 inline-flex items-center justify-center rounded-pill px-4 py-2 text-[14px] font-medium transition-all duration-150 ease-standard",
                  "min-h-[40px]",
                  isActive
                    ? "text-blue"
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
