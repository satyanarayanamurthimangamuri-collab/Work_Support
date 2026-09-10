import Hero from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "TechworkSupport | Technical Support, Project Guidance & Training",
    description:
      "TechworkSupport is the practical technical support and project guidance partner for working professionals, consultants and students who need real help with work problems, technical challenges and skill growth.",
    path: "/",
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
