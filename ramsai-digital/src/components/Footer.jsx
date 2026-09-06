import { BUSINESS, NAV_LINKS } from "../siteData";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="container-page py-14 grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
        <div>
          <span className="font-display text-lg text-mist">{BUSINESS.name}</span>
          <p className="mt-3 text-sm text-mist-dim leading-relaxed max-w-xs">
            {BUSINESS.tagline}. Based in {BUSINESS.location}.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-mist-faint mb-3">Site</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-mist-dim hover:text-mist transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-mist-faint mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-mist-dim">
            <li><a href={BUSINESS.phoneHref} className="hover:text-mist transition-colors">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-mist transition-colors">{BUSINESS.email}</a></li>
            <li>{BUSINESS.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-page py-6 border-t border-ink-line flex flex-col sm:flex-row gap-3 items-center justify-between">
        <p className="text-xs text-mist-faint">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <p className="text-xs text-mist-faint">
          Built for organic growth — no ad spend required to start.
        </p>
      </div>
    </footer>
  );
}
