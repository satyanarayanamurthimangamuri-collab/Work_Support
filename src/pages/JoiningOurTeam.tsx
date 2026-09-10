import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { useNavigate } from "../hooks/RouterContext";
import { usePageMeta } from "../hooks/usePageMeta";

export default function JoiningOurTeam() {
  const navigate = useNavigate();

  usePageMeta({
    title: "Join Our Team",
    description:
      "Join the Work Support team as a specialist who helps people solve real technical and professional challenges with clear guidance.",
    path: "/joining-our-team",
  });

  return (
    <main>
      <PageHero
        eyebrow="Joining Our Team"
        title="Work with us as a support specialist"
        description="We're looking for people who are good at explaining things clearly and enjoy solving real problems with real people, one session at a time."
      >
        <div className="mt-8">
          <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
            Get in touch
          </Button>
        </div>
      </PageHero>
    </main>
  );
}
