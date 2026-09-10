import Hero from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "TechworkSupport | Technical Support, Project Guidance & Training",
    description:
      "TechworkSupport is a practical technical support and project guidance service for working professionals, consultants and students who need help with real work problems.",
    path: "/",
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
