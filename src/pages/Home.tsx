import Hero from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "TechworkSupport | Technical Support, Project Guidance & Training",
    description:
      "TechworkSupport offers practical technical support, project guidance and structured training for working professionals, freelancers and students.",
    path: "/",
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
