import { MessageCircle } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";
import { useNavigate } from "../hooks/RouterContext";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const whatsappNumber = "919440750258";
  const whatsappMessage = "Hi! I need help with my project. Can you assist me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-8xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <span className="text-[15px] font-bold text-navy">Work Support</span>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
            Practical Guidance · Professional Growth
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className="text-[13px] font-medium text-text-muted transition-colors hover:text-navy"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] font-medium text-green-700 transition-colors hover:text-green-900"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        <p className="font-mono text-[11px] text-text-muted">
          &copy; {year} Work Support
        </p>
      </div>
    </footer>
  );
}
