const PRINCIPLES = [
  {
    title: "Compounding, not renting",
    body: "Ads stop working the moment you stop paying. Organic visibility keeps bringing enquiries after the work is done.",
  },
  {
    title: "Two different playbooks",
    body: "An individual rebuilding local enquiries needs a different plan than an agency needing white-label delivery. You get the one built for you.",
  },
  {
    title: "Reporting you can actually read",
    body: "Rankings, traffic, and enquiries in plain numbers — sent on a schedule you agree to, not buried in a dashboard.",
  },
];

export default function Principles() {
  return (
    <section className="border-y border-ink-line bg-ink-panel/40">
      <div className="container-page py-14 grid sm:grid-cols-3 gap-10">
        {PRINCIPLES.map((p) => (
          <div key={p.title}>
            <h3 className="font-display text-xl text-mist mb-2">{p.title}</h3>
            <p className="text-sm text-mist-dim leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
