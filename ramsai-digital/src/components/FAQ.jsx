import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What exactly counts as an organic lead?",
    a: "Anyone who found you through unpaid search results, Google Business Profile, organic social, or content — as opposed to someone who clicked a paid ad. Organic leads tend to convert better because the person searched for what you offer, rather than being interrupted by an ad.",
  },
  {
    q: "How is this different from running Google or Meta ads?",
    a: "Ads stop the moment your budget does. Organic work — SEO, content, local listings — keeps bringing enquiries after it's built, and typically costs less over 12+ months. It's slower to start, which is why we're upfront about timelines.",
  },
  {
    q: "I'm not in real estate. Do you still work with me?",
    a: "Yes. We work with individuals across services, consulting, coaching, and local businesses, along with agencies of any niche. The channels are the same; the keywords and content change.",
  },
  {
    q: "How does the agency partnership actually work?",
    a: "You bring the client relationship, we handle the organic execution — SEO, content, GBP, or reporting — under your brand. You can hand over one account or several, and scale up or down as needed.",
  },
  {
    q: "How long before I see results?",
    a: "Local SEO and Google Business Profile fixes can show movement within a few weeks. Broader organic search and content typically take 8–12 weeks to gain traction, then keep compounding from there.",
  },
  {
    q: "Do I need a minimum budget to start?",
    a: "No fixed minimum. We scope the engagement to what makes sense for an individual versus an ongoing agency partnership — get in touch and we'll tell you plainly what's realistic for your budget.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            Questions worth answering upfront
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed max-w-xs">
            Anything else, just ask directly — details at the bottom of the page.
          </p>
        </div>

        <div className="divide-y divide-ink-line border-t border-b border-ink-line">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-mist">{item.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 mt-1 text-coral transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm text-mist-dim leading-relaxed max-w-prose">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
