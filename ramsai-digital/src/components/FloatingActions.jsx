import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { BUSINESS } from "../siteData";

export default function FloatingActions() {
  const [showCallMessage, setShowCallMessage] = useState(false);

  function handleCallClick(event) {
    const isTablet = navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent);
    const isPhoneOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent) || isTablet;

    if (!isPhoneOrTablet) {
      event.preventDefault();
      setShowCallMessage(true);
    }
  }

  return (
    <>
      {showCallMessage && (
        <div
          role="dialog"
          aria-label="Call information"
          className="fixed bottom-[148px] right-5 z-40 w-[min(320px,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-ink-line bg-ink-panel shadow-lift animate-hero-in"
        >
          <div className="h-1 bg-coral" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-ink">
                  <Phone size={18} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sunrise">Call request</p>
                  <p className="mt-1 font-display text-xl text-mist">Let&apos;s talk.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCallMessage(false)}
                aria-label="Close call message"
                className="text-mist-dim transition-colors hover:text-mist"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-mist-dim">
              Ring me on <span className="font-semibold text-mist">{BUSINESS.phone}</span>. Thanks!
            </p>
          </div>
        </div>
      )}

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-[52px] h-[52px] rounded-full bg-[#25D366] text-ink flex items-center justify-center shadow-lift hover:scale-105 transition-transform"
      >
        <MessageCircle size={24} strokeWidth={2} />
      </a>
      <a
        href={BUSINESS.phoneHref}
        onClick={handleCallClick}
        aria-label="Call now"
        className="w-[52px] h-[52px] rounded-full bg-coral text-ink flex items-center justify-center shadow-lift hover:scale-105 transition-transform"
      >
        <Phone size={22} strokeWidth={2} />
      </a>
      </div>
    </>
  );
}
