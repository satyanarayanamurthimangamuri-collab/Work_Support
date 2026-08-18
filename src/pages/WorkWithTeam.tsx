import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { useNavigate } from "../hooks/RouterContext";

export default function WorkWithTeam() {
  const navigate = useNavigate();

  return (
    <main>
      <PageHero
        eyebrow="Work With Team"
        title="Bring Work Support into your team"
        description="For managers and teams who want ongoing, structured support built around how your team actually works — not a one-size-fits-all program."
      >
        <div className="mt-8">
          <Button variant="primary" size="lg" onClick={() => navigate("/contact")}>
            Talk to our team
          </Button>
        </div>
      </PageHero>
    </main>
  );
}
