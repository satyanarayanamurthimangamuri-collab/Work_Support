import { useCallback, useEffect, useState } from "react";

/**
 * Minimal client-side router built on the History API.
 * Keeps the app dependency-free while still giving every page a real URL.
 */
export function useRouter() {
  const getInitialPath = () => {
    const redirectParam = new URLSearchParams(window.location.search).get("redirect");
    const savedPath = sessionStorage.getItem("redirectPath");

    if (redirectParam && redirectParam.startsWith("/")) {
      return redirectParam;
    }

    if (savedPath && savedPath.startsWith("/")) {
      return savedPath;
    }

    return window.location.pathname;
  };

  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    const redirectParam = new URLSearchParams(window.location.search).get("redirect");
    const redirectPath = redirectParam || sessionStorage.getItem("redirectPath");

    if (redirectPath && redirectPath.startsWith("/")) {
      window.history.replaceState({}, "", redirectPath);
      setPath(redirectPath);
      sessionStorage.removeItem("redirectPath");
    }

    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    sessionStorage.removeItem("redirectPath");
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return { path, navigate };
}
