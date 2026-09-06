# Ramsai Digital — Portfolio & Lead-Gen Website

A single-page marketing site built with **React + Vite + Tailwind CSS**. No AI
integrations, no backend server required — the contact form submits through
Formspree.

## What's inside

- `src/siteData.js` — all editable business info (phone, WhatsApp, email,
  location, nav links, Formspree endpoint). **Start here.**
- `src/components/` — one file per section (Hero, Services, Process, FAQ,
  Contact, etc.)
- `src/index.css` — design tokens, base styles, reduced-motion support
- `tailwind.config.js` — color palette and fonts

## 1. Before you launch — required setup

### Google Analytics

Copy `.env.example` to `.env.local` and replace the placeholder with your
Google Analytics 4 measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The analytics script is not loaded when this value is absent. Configure your
Google Forms owner account to send email notifications for new responses under
the form's Responses settings. The site cannot send WhatsApp messages
automatically from a static browser page; the thank-you state provides a direct
WhatsApp action instead. True WhatsApp automation requires a provider such as
Meta Cloud API or Twilio and a server-side secret.

### Contact form → Google Forms

The contact form submits directly to your Google Form ("Ramsai Digitals").
Settings live in `src/siteData.js` under `GOOGLE_FORM`:

- `actionUrl` — the form's `/formResponse` endpoint (same URL as your
  viewform link, with `viewform` swapped for `formResponse`).
- `entries` — maps each site field to the Google Form's `entry.XXXXXXX` ID.
- `audienceOptions` — must match the Google Form's multiple-choice text
  *exactly*, or that answer won't register against the question.

**Important limitation:** Google Forms doesn't allow the browser to read a
cross-origin response, so the request is sent with `mode: "no-cors"`. That
means the site shows a generic "Got it" success message once the request
completes, but it can't actually confirm the submission succeeded (only
outright network failures show the error state). **Test it once yourself**
after deploying — submit the form, then check the Google Form's Responses
tab (or its linked Sheet) to confirm the entry landed correctly.

If you ever change a question's wording or type on the Google Form, its
`entry.XXXXXXX` ID can change too — re-check the prefilled-link trick
(Google Forms → ⋮ menu → "Get pre-filled link") if submissions stop showing
up.

### Update contact details when ready

Everything else — phone, WhatsApp, email, location — is already filled in
`src/siteData.js` with what you gave me. When your email changes, that's the
only file you need to touch.

### Replace the placeholder "Results" section

`src/components/Results.jsx` currently shows illustrative examples (clearly
labeled as such) instead of fabricated numbers, since there are no completed
engagements yet. Once you have real client outcomes, replace the `SAMPLES`
array with actual case studies and remove the "illustrative" framing line.

### Add real social links

The footer doesn't link out to social profiles since none were provided. If
you have Instagram/LinkedIn, add them to `src/siteData.js` and drop icons
into the header/footer.

## 2. Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Deploy

**Easiest: Vercel or Netlify (free tier, both work great with Vite)**

- **Vercel**: push this folder to a GitHub repo → import it at
  vercel.com/new → framework preset auto-detects Vite → deploy.
- **Netlify**: same flow at app.netlify.com/start, or drag-and-drop the
  `dist/` folder (after running `npm run build`) into Netlify's manual
  deploy screen for a one-off deploy with no Git needed.

**Build command:** `npm run build`
**Output directory:** `dist`

Once deployed, point your domain's DNS at Vercel/Netlify following their
custom-domain instructions.

## 4. What was intentionally left out (and why)

- **No AI chatbot / AI integrations** — as requested, this is a plain,
  deployable static site.
- **No fabricated stats or fake client counts** — since this is a new
  practice, the "Results" section uses honest illustrative examples instead
  of invented numbers. Swap in real data as you get it; don't publish made-up
  claims, since that can create legal/trust risk.
- **No minimum-budget gate** on the contact form (unlike the reference site)
  — since you mentioned individuals who are struggling to get leads, a hard
  budget filter would work against that positioning. You can always add one
  later in `Contact.jsx` if you start needing to qualify harder.

## 5. Ideas for later (not built yet — say the word if you want these)

- A blog/insights section for SEO content (this alone is a strong lever for
  an SEO-focused brand — "physician, heal thyself")
- Real testimonials carousel once you have 2–3 clients
- A dedicated "For Agencies" landing page with its own funnel, separate from
  the individuals funnel, once you have traffic to send to it
- Google Analytics / GA4 + basic conversion tracking on the contact form
- A calendar booking embed (Calendly-style) instead of/alongside the form
