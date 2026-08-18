import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./Button";
import { useNavigate } from "../hooks/RouterContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const whatsappNumber = "919440750258";
  const whatsappMessage = "Hi! I need help with my project. Can you assist me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#FCFDFC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden h-8 w-px bg-border md:block" aria-hidden="true" />
          <span className="hidden font-mono text-[10px] font-medium uppercase leading-tight tracking-wider text-text-muted md:block">
            Practical Guidance ·
            <br />
            Professional Growth
          </span>
        </div>

        {/* Desktop nav */}
        <Navigation className="hidden lg:block" />

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-50 px-3 py-2 text-[13px] font-semibold text-green-700 transition-all hover:bg-green-100"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <Button variant="primary" size="md" onClick={() => navigate("/work-support")}>
            Get Support
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-[500px]" : "max-h-0 border-t-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-4 px-6 py-5">
          <Navigation
            className="flex flex-col items-start"
            onNavigate={() => setMobileOpen(false)}
          />
          <div className="flex flex-col gap-3 border-t border-border pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-green-500 bg-green-50 px-4 py-2.5 text-[13px] font-semibold text-green-700"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={16} />
              Message on WhatsApp
            </a>
            <Button
              variant="secondary"
              size="md"
              className="w-full"
              onClick={() => {
                navigate("/contact");
                setMobileOpen(false);
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                navigate("/work-support");
                setMobileOpen(false);
              }}
            >
              Get Support
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
