const SAMPLES = [
  {
    tag: "Individual — real estate agent",
    starting: "Ranking nowhere for local searches, relying entirely on referrals.",
    approach: "Google Business Profile rebuild, listing pages for each locality, local content.",
    metric: "Organic enquiries",
  },
  {
    tag: "Individual — service provider",
    starting: "A website that existed but brought in zero enquiries.",
    approach: "Site restructure, buyer-intent content, WhatsApp lead capture.",
    metric: "Site-to-enquiry conversion",
  },
  {
    tag: "Agency partner",
    starting: "In-house team stretched thin on SEO delivery for client accounts.",
    approach: "White-label SEO and reporting handled end-to-end under their brand.",
    metric: "Client retention",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 bg-ink-panel/40 border-y border-ink-line">
      <div className="container-page">
        <div className="max-w-2xl mb-4">
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            What an engagement is built to move
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed">
            {"Ramsai Digital is a new practice, so here's the shape of what we track for"}
            {" "}each engagement type rather than borrowed numbers. Real case studies will
            replace this section as engagements complete.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {SAMPLES.map((s) => (
            <div key={s.tag} className="rounded-2xl border border-ink-line bg-ink p-7">
              <span className="text-xs uppercase tracking-wide text-mist-faint">{s.tag}</span>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs text-mist-faint mb-1">Starting point</p>
                  <p className="text-sm text-mist leading-relaxed">{s.starting}</p>
                </div>
                <div>
                  <p className="text-xs text-mist-faint mb-1">Approach</p>
                  <p className="text-sm text-mist leading-relaxed">{s.approach}</p>
                </div>
                <div className="pt-3 border-t border-ink-line">
                  <p className="text-xs text-mist-faint mb-1">What we'd report on</p>
                  <p className="text-sm font-semibold text-sunrise">{s.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
