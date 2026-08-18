import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { useNavigate } from "../hooks/RouterContext";

export default function JoiningOurTeam() {
  const navigate = useNavigate();

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
