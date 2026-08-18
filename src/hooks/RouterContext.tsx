import { createContext, useContext } from "react";

export interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);

export function useNavigate() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useNavigate must be used within RouterContext.Provider");
  }
  return ctx.navigate;
}

export function usePath() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("usePath must be used within RouterContext.Provider");
  }
  return ctx.path;
}
