import { useState, type FormEvent } from "react";
import { Check, LoaderCircle, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [successPending, setSuccessPending] = useState(false);
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState("");
  const phoneNumber = "+918500285767";
  const phoneDisplay = "+91 85002 85767";
  const whatsappNumber = "918500285767";
  const whatsappMessage = "Hi! I need help with my project. Can you assist me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  usePageMeta({
    title: "Contact TechworkSupport",
    description:
      "Contact TechworkSupport to get technical help, project guidance, training support and practical next steps for your work challenge.",
    path: "/contact",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      const invalid = form.querySelector<HTMLElement>(":invalid");
      setInvalidField(invalid?.id ?? "");
      invalid?.focus();
      return;
    }

    setLoading(true);
    setError("");
    setInvalidField("");
    setSuccessPending(true);

    const hiddenSubject = form.querySelector<HTMLInputElement>('input[name="_subject"]');
    if (hiddenSubject) {
      hiddenSubject.value = "New contact form submission from TechworkSupport";
    }

    const hiddenCaptcha = form.querySelector<HTMLInputElement>('input[name="_captcha"]');
    if (hiddenCaptcha) {
      hiddenCaptcha.value = "false";
    }

    const hiddenTemplate = form.querySelector<HTMLInputElement>('input[name="_template"]');
    if (hiddenTemplate) {
      hiddenTemplate.value = "table";
    }

    form.submit();
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you're working on"
        description="Share a few details and we'll match you with the right kind of support."
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <aside className="flex flex-col justify-between rounded-2xl border border-border bg-navy p-7 text-white sm:p-8">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A9C9EA]">Start a conversation</span>
            <h2 className="mt-4 max-w-xs text-[28px] font-bold leading-[1.15]">Let&rsquo;s solve the next work problem.</h2>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-[#D5E2EC]">
              Tell us where you&rsquo;re stuck. We&rsquo;ll point you toward the right specialist, track or next step.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/20 pt-6">
            <a href="mailto:techworksupport@gmail.com" className="flex items-center gap-3 text-[14px] text-white transition-colors duration-150 ease-standard hover:text-[#A9C9EA]">
              <Mail size={17} aria-hidden="true" />
              <span>techworksupport@gmail.com</span>
            </a>
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-[14px] text-white transition-colors duration-150 ease-standard hover:text-[#A9C9EA]">
              <Phone size={17} aria-hidden="true" />
              <span>{phoneDisplay}</span>
            </a>
            <div className="flex items-center gap-3 text-[14px] text-[#D5E2EC]">
              <MapPin size={17} aria-hidden="true" />
              <span>Remote support, India</span>
            </div>
          </div>
        </aside>

        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
          <div className="mb-7 flex flex-col gap-1">
            <h2 className="text-[20px] font-bold text-navy">Send us a message</h2>
            <p className="text-[13px] text-text-muted">We&rsquo;ll review your message and get back to you with a useful next step.</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-7 flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-50 px-4 py-3 text-[14px] font-semibold text-green-700 transition-[background-color] duration-180 ease-standard hover:bg-green-100"
          >
            <MessageCircle size={18} />
            Message on WhatsApp
          </a>

          <>
            {error && (
              <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
                <p className="text-[14px] text-red-700">{error}</p>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/techworksupport@gmail.com"
              method="POST"
              acceptCharset="UTF-8"
              noValidate
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="_subject" value="New contact form submission from TechworkSupport" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
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
                className={`${invalidField === "name" ? "field-error border-red-400" : "border-border"} rounded-lg border bg-white px-4 py-2.5 text-[14px] text-navy outline-none transition-[border-color] duration-150 ease-standard focus:border-blue disabled:opacity-50`}
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
                className={`${invalidField === "email" ? "field-error border-red-400" : "border-border"} rounded-lg border bg-white px-4 py-2.5 text-[14px] text-navy outline-none transition-[border-color] duration-150 ease-standard focus:border-blue disabled:opacity-50`}
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
                className={`${invalidField === "message" ? "field-error border-red-400" : "border-border"} resize-none rounded-lg border bg-white px-4 py-2.5 text-[14px] text-navy outline-none transition-[border-color] duration-150 ease-standard focus:border-blue disabled:opacity-50`}
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="min-w-[142px] self-start" disabled={loading || successPending}>
              {successPending ? <Check size={17} aria-label="Message sent" /> : loading ? <LoaderCircle size={17} className="animate-spin" aria-label="Sending" /> : "Send message"}
            </Button>
          </form>
          </>
        </div>
      </section>
    </main>
  );
}
