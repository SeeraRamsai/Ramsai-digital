import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS } from "../siteData";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(BUSINESS.formspreeAction, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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

        <form onSubmit={handleSubmit} className="bg-ink rounded-2xl border border-ink-line p-7 md:p-9 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Phone or WhatsApp" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />

          <div>
            <label className="block text-sm text-mist-dim mb-2">I am reaching out as</label>
            <select
              name="audience"
              required
              defaultValue=""
              className="w-full bg-ink-panel border border-ink-line rounded-lg px-4 py-3 text-mist text-sm focus-visible:outline-none"
            >
              <option value="" disabled>Select one</option>
              <option value="Individual">An individual looking for leads</option>
              <option value="Agency">An agency looking for a delivery partner</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-mist-dim mb-2">What's going on right now?</label>
            <textarea
              name="message"
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
            <p className="text-sm text-sunrise text-center">
              Got it — we'll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-coral-soft text-center">
              Something went wrong. Please try WhatsApp or email instead.
            </p>
          )}
        </form>
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
