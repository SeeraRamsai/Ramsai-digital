import { Check } from "lucide-react";

export default function AudienceSplit() {
  return (
    <section id="who-we-help" className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            Built for two very different people
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed">
            The plan looks different depending on who's asking. Here's how it splits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-coral/30 bg-coral-dim/40 p-8 md:p-10">
            <span className="text-xs uppercase tracking-wide text-coral">For individuals</span>
            <h3 className="font-display text-2xl text-mist mt-3 mb-4">
              You're doing the work. The phone just isn't ringing.
            </h3>
            <p className="text-sm text-mist-dim leading-relaxed mb-6">
              Real estate agents, consultants, coaches, local shop owners, and
              freelancers whose enquiries have slowed down or never really started.
              We fix the visibility problem first.
            </p>
            <ul className="space-y-3">
              {[
                "Google Business Profile & local search setup",
                "Content and pages built around what buyers actually search",
                "A simple enquiry form or WhatsApp link that actually gets used",
                "One person to talk to, not a ticket queue",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                  <Check size={16} className="mt-0.5 text-coral shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-panel p-8 md:p-10">
            <span className="text-xs uppercase tracking-wide text-sunrise">For agencies</span>
            <h3 className="font-display text-2xl text-mist mt-3 mb-4">
              Add organic delivery without adding headcount.
            </h3>
            <p className="text-sm text-mist-dim leading-relaxed mb-6">
              Marketing and creative agencies who need a reliable partner to
              execute SEO, content, or GBP for their own clients — quietly, under
              your brand.
            </p>
            <ul className="space-y-3">
              {[
                "White-label execution — your clients see your brand, not ours",
                "Reports formatted to drop straight into yours",
                "Scale up or down per client without hiring",
                "One point of contact for every account you hand over",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                  <Check size={16} className="mt-0.5 text-sunrise shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
