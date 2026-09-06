import { ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../siteData";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF6B4A 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-page relative grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="animate-hero-in">
          <p className="text-sm text-mist-faint mb-5">
            {BUSINESS.location} — working with clients across India
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-mist text-balance">
            Leads that find you because they searched — not because you paid for the click.
          </h1>
          <p className="mt-6 text-lg text-mist-dim max-w-prose leading-relaxed">
            {BUSINESS.name} builds organic search, content, and local visibility systems.
            For individuals whose enquiries have dried up, and for agencies who need a
            dependable partner to deliver organic results under their own name.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral text-ink font-semibold px-6 py-3.5 hover:bg-coral-soft transition-colors"
            >
              Get a free growth audit
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-ink-line text-mist px-6 py-3.5 hover:border-mist-faint transition-colors"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-ink-line pt-6">
            <div>
              <dt className="text-xs text-mist-faint">Location</dt>
              <dd className="mt-1 text-sm text-mist">Visakhapatnam</dd>
            </div>
            <div>
              <dt className="text-xs text-mist-faint">Built for</dt>
              <dd className="mt-1 text-sm text-mist">Individuals &amp; agencies</dd>
            </div>
            <div>
              <dt className="text-xs text-mist-faint">To start</dt>
              <dd className="mt-1 text-sm text-mist">No ad spend needed</dd>
            </div>
          </dl>
        </div>

        <div className="animate-hero-in [animation-delay:120ms] opacity-0">
          <GrowthIllustration />
        </div>
      </div>
    </section>
  );
}

function GrowthIllustration() {
  return (
    <div className="relative rounded-3xl bg-ink-panel border border-ink-line p-8 shadow-lift">
      <svg viewBox="0 0 420 300" className="w-full h-auto" role="img" aria-label="Organic search visibility rising steadily over time">
        <defs>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[60, 120, 180, 240].map((y) => (
          <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="#1E3A52" strokeWidth="1" />
        ))}
        <path
          d="M0,260 C60,255 90,230 130,210 C170,190 190,140 240,120 C280,105 300,80 340,55 L420,20"
          fill="none"
          stroke="#FF6B4A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M0,260 C60,255 90,230 130,210 C170,190 190,140 240,120 C280,105 300,80 340,55 L420,20 L420,300 L0,300 Z"
          fill="url(#fillGrad)"
        />
        <circle cx="130" cy="210" r="5" fill="#F4B942" />
        <circle cx="240" cy="120" r="5" fill="#F4B942" />
        <circle cx="420" cy="20" r="6" fill="#F4B942" />
        <text x="20" y="24" fill="#5E7488" fontSize="11" fontFamily="Inter, sans-serif">
          Search visibility
        </text>
        <text x="345" y="45" fill="#F2F6F8" fontSize="11" fontFamily="Inter, sans-serif">
          Month 6
        </text>
        <text x="120" y="228" fill="#93A6B8" fontSize="11" fontFamily="Inter, sans-serif">
          Month 1
        </text>
      </svg>
      <p className="mt-4 text-xs text-mist-faint leading-relaxed">
        Organic growth compounds — early weeks are setup and indexing, most gains
        show up from month two onward and keep paying off after that.
      </p>
    </div>
  );
}
