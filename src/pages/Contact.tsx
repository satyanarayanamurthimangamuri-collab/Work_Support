import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const whatsappNumber = "919440750258";
  const whatsappMessage = "Hi! I need help with my project. Can you assist me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    // Add a subject line for the email
    formData.append("subject", "New contact form submission from Work Support");
    // Add auto-reply message
    formData.append("_autoresponse", "Thanks for reaching out! We received your message and will get back to you shortly.");

    try {
      const response = await fetch("https://formsubmit.co/patchaanil01@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          (event.currentTarget as HTMLFormElement).reset();
        }, 0);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you're working on"
        description="Share a few details and we'll match you with the right kind of support."
      />
      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-10">
        {/* Quick Contact Options */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-50 px-4 py-3 text-[14px] font-semibold text-green-700 transition-all hover:bg-green-100"
          >
            <MessageCircle size={18} />
            Message on WhatsApp
          </a>
        </div>

        <div className="mb-8 text-center text-[13px] text-text-muted">
          Or fill the form below
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-border bg-white p-8">
            <h2 className="text-[18px] font-bold text-navy">Message sent! ✓</h2>
            <p className="mt-2 text-[14px] leading-[1.7] text-text-muted">
              Thanks for reaching out! We've received your message and will get back to you shortly at the email you provided.
            </p>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="text-[14px] text-red-700">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] font-semibold text-navy">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={loading}
                className="rounded-lg border border-border bg-white px-4 py-2.5 text-[14px] text-navy outline-none focus:border-blue disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] font-semibold text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={loading}
                className="rounded-lg border border-border bg-white px-4 py-2.5 text-[14px] text-navy outline-none focus:border-blue disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] font-semibold text-navy">
                What do you need help with?
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={loading}
                rows={5}
                className="resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-[14px] text-navy outline-none focus:border-blue disabled:opacity-50"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="self-start" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
          </>
        )}
      </section>
    </main>
  );
}
