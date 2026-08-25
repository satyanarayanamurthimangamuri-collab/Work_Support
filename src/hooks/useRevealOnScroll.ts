import { useEffect, useRef } from "react";

export default function useRevealOnScroll<T extends HTMLElement>(index = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.transitionDelay = `${Math.min(index, 5) * 60}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [index]);

  return ref;
}