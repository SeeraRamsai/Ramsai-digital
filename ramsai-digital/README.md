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

### Connect the contact form (Formspree)

1. Go to https://formspree.io and create a free account with
   `ramsairams123@gmail.com` (or whichever inbox you want leads to land in).
2. Create a new form — Formspree gives you a URL like
   `https://formspree.io/f/abcdwxyz`.
3. Open `src/siteData.js` and replace:
   ```js
   formspreeAction: "https://formspree.io/f/YOUR_FORM_ID",
   ```
   with your real endpoint.
4. Free tier gives you 50 submissions/month, spam filtering, and email
   notifications — enough to start. Upgrade later if volume grows.

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
