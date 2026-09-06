const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We look at your current search presence, site, and listings, and tell you honestly what's working and what isn't.",
  },
  {
    n: "02",
    title: "Map the opportunity",
    body: "We find the searches your buyers actually use, and pick the ones worth going after first.",
  },
  {
    n: "03",
    title: "Build",
    body: "Site fixes, content, Google Business Profile, and social groundwork get put in place.",
  },
  {
    n: "04",
    title: "Publish & optimize",
    body: "Content goes live on a schedule. We adjust based on what search engines and readers respond to.",
  },
  {
    n: "05",
    title: "Report & iterate",
    body: "You get a plain-language update on rankings, traffic, and enquiries — then we double down on what's working.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            How an engagement runs
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed">
            Five stages, repeated as a cycle. Nothing here happens in a black box.
          </p>
        </div>

        <ol className="grid md:grid-cols-5 gap-8 md:gap-6">
          {STEPS.map((step) => (
            <li key={step.n} className="md:border-t-2 md:border-ink-line md:pt-6 relative">
              <span className="font-display text-3xl text-coral/80">{step.n}</span>
              <h3 className="font-display text-lg text-mist mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-mist-dim leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
