import { Search, MapPin, FileText, Share2, ClipboardCheck, Workflow } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Search engine optimization",
    body: "Technical fixes, on-page structure, and a keyword plan built around what your buyers type into Google — not vanity keywords.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    body: "Get found for 'near me' and area-specific searches. Especially valuable if you rely on local enquiries or walk-ins.",
  },
  {
    icon: FileText,
    title: "Content & landing pages",
    body: "Pages and articles written for the questions your buyers are already asking, structured to convert a visit into an enquiry.",
  },
  {
    icon: Share2,
    title: "Organic social growth",
    body: "A realistic posting and content system for Instagram, LinkedIn, or YouTube — built for consistency, not chasing trends.",
  },
  {
    icon: ClipboardCheck,
    title: "Website & funnel audits",
    body: "A plain-language review of where your site is losing enquiries, with a prioritized list of what to fix first.",
  },
  {
    icon: Workflow,
    title: "Lead capture & tracking",
    body: "Forms, WhatsApp click-to-chat, and basic analytics so you know exactly where every enquiry came from.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ink-panel/40 border-y border-ink-line">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            What we actually do
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed">
            No package tiers with vague names. Each engagement is a mix of the
            following, scoped to what your situation needs.
          </p>
        </div>

        <div className="divide-y divide-ink-line border-t border-b border-ink-line">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-7 sm:items-start"
            >
              <Icon size={22} className="text-coral mt-1" strokeWidth={1.75} />
              <div className="grid sm:grid-cols-[minmax(0,220px)_1fr] gap-x-8 gap-y-2">
                <h3 className="font-display text-lg text-mist">{title}</h3>
                <p className="text-sm text-mist-dim leading-relaxed max-w-prose">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
