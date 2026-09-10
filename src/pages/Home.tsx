import Hero from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Work Support",
    description:
      "Work Support gives working professionals, freelancers and students practical guidance for technical problems, projects and skill development.",
    path: "/",
  });

  return (
    <main>
      <Hero />
    </main>
  );
}
