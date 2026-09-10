import Hero from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "TechworkSupport",
    description:
      "TechworkSupport gives working professionals, freelancers and students practical guidance for technical problems, projects and skill development.",
    path: "/",
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
