import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#0F2438" />
            <path
              d="M14 40 L24 26 L34 34 L50 16"
              stroke="#FF6B4A"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="16" r="4" fill="#F4B942" />
          </svg>
          <span className="font-display text-lg md:text-xl text-mist tracking-tight">
            {BUSINESS.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist-dim hover:text-mist transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm text-mist-dim hover:text-mist transition-colors"
          >
            <Phone size={15} />
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-coral text-ink text-sm font-semibold px-5 py-2.5 hover:bg-coral-soft transition-colors"
          >
            Get a free audit
          </a>
        </div>

        <button
          className="md:hidden text-mist p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-panel border-t border-ink-line">
          <div className="container-page flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-mist-dim hover:text-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-coral text-ink text-sm font-semibold px-5 py-3 text-center"
            >
              Get a free audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
