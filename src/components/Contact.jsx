import { useRef, useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS, GOOGLE_FORM } from "../siteData";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [submitted, setSubmitted] = useState(() => window.location.hash === "#thank-you");
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const form = formRef.current;
    const data = new FormData(form);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 12000);
    setStatus("sending");
    try {
      // Google Forms doesn't allow cross-origin reads, so this request goes
      // out with mode: "no-cors" — the browser can't see the response body
      // or status, only whether the network request itself failed. In
      // practice this pattern reliably delivers the submission; check the
      // Google Form's "Responses" tab (or linked Sheet) to confirm.
      await fetch(GOOGLE_FORM.actionUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
        signal: controller.signal,
      });
      setStatus("sent");
      form.reset();
      setSubmitted(true);
      window.location.hash = "thank-you";
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-ink-panel/40 border-t border-ink-line">
      <div className="container-page grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
            Tell us where things stand
          </h2>
          <p className="mt-4 text-mist-dim leading-relaxed max-w-sm">
            A short note back with what we'd realistically recommend — no
            obligation, no scripted sales call.
          </p>

          <div className="mt-10 space-y-4">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-mist hover:text-coral transition-colors">
              <Phone size={18} className="text-coral" /> {BUSINESS.phone}
            </a>
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-mist hover:text-coral transition-colors">
              <MessageCircle size={18} className="text-coral" /> Message on WhatsApp
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-mist hover:text-coral transition-colors">
              <Mail size={18} className="text-coral" /> {BUSINESS.email}
            </a>
            <p className="flex items-center gap-3 text-mist-dim">
              <MapPin size={18} className="text-coral" /> {BUSINESS.location}
            </p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`${submitted ? "hidden" : ""} bg-ink rounded-2xl border border-ink-line p-7 md:p-9 space-y-5`}>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name={GOOGLE_FORM.entries.name} required />
            <Field label="Phone or WhatsApp" name={GOOGLE_FORM.entries.phone} type="tel" required />
          </div>
          <Field label="Email" name={GOOGLE_FORM.entries.email} type="email" required />

          <div>
            <label className="block text-sm text-mist-dim mb-2">I am reaching out as</label>
            <select
              name={GOOGLE_FORM.entries.audience}
              required
              defaultValue=""
              className="w-full bg-ink-panel border border-ink-line rounded-lg px-4 py-3 text-mist text-sm focus-visible:outline-none"
            >
              <option value="" disabled>Select one</option>
              {GOOGLE_FORM.audienceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-mist-dim mb-2">What's going on right now?</label>
            <textarea
              name={GOOGLE_FORM.entries.message}
              rows={4}
              required
              placeholder="e.g. I get traffic but no enquiries, or I need an SEO partner for 3 client accounts."
              className="w-full bg-ink-panel border border-ink-line rounded-lg px-4 py-3 text-mist text-sm placeholder:text-mist-faint focus-visible:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-coral text-ink font-semibold py-3.5 hover:bg-coral-soft transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send it over"}
          </button>

          {status === "sent" && (
            <p role="status" className="text-sm text-sunrise text-center">
              Got it — we'll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-coral-soft text-center">
              Something went wrong. Please try WhatsApp or email instead.
            </p>
          )}

          <p className="text-xs text-mist-faint text-center">
            Prefer Google Forms directly?{" "}
            <a
              href={GOOGLE_FORM.viewUrl}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-mist-dim"
            >
              Open the form
            </a>
          </p>
        </form>
      </div>
      <div id="thank-you" className={`${submitted ? "" : "hidden"} container-page mt-8`}>
        <div className="rounded-2xl border border-sunrise/40 bg-ink-panel p-7 text-center">
          <h3 className="font-display text-2xl text-mist">Thanks, your request is on its way.</h3>
          <p className="mt-2 text-sm text-mist-dim">
            We will review the details and get back to you shortly. For a faster response, message us directly.
          </p>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-ink"
          >
            Continue on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm text-mist-dim mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-ink-panel border border-ink-line rounded-lg px-4 py-3 text-mist text-sm focus-visible:outline-none"
      />
    </div>
  );
}
