import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "../siteData";

export default function FloatingActions() {
  return (
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
        aria-label="Call now"
        className="w-[52px] h-[52px] rounded-full bg-coral text-ink flex items-center justify-center shadow-lift hover:scale-105 transition-transform"
      >
        <Phone size={22} strokeWidth={2} />
      </a>
    </div>
  );
}
