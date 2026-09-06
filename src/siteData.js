export const BUSINESS = {
  name: "Ramsai Digital",
  tagline: "Organic lead generation for people and agencies rebuilding their pipeline",
  phone: "+91 93918 49464",
  phoneHref: "tel:+919391849464",
  whatsapp: "+91 93918 49464",
  whatsappHref: "https://wa.me/919391849464?text=Hi%20Ramsai%2C%20I%27d%20like%20to%20talk%20about%20organic%20lead%20generation.",
  email: "ramsairams123@gmail.com",
  location: "Visakhapatnam, Andhra Pradesh",
};

// Google Form: "Ramsai Digitals"
// Submissions POST to the /formResponse endpoint (viewform swapped for formResponse).
// Entry IDs below were confirmed against the live form's field structure.
export const GOOGLE_FORM = {
  actionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSetFMnjr5hI8jWL31UO-ljXMx1LvECoH9EMyoeP-FCpypIHIA/formResponse",
  viewUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSetFMnjr5hI8jWL31UO-ljXMx1LvECoH9EMyoeP-FCpypIHIA/viewform",
  entries: {
    name: "entry.2005620554",
    phone: "entry.1065046570",
    email: "entry.1045781291",
    audience: "entry.839337160",
    message: "entry.1917072687",
  },
  // Must match the Google Form's multiple-choice option text exactly, or the
  // response won't register against that question.
  audienceOptions: [
    "An individual looking for leads",
    "An agency looking for a delivery partner",
    "Not sure yet",
  ],
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Who we help", href: "#who-we-help" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];
