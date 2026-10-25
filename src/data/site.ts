// Central site configuration. Every value marked TODO needs confirming before launch.
export const site = {
  name: "Shair Afgan",
  title: "B2B Growth & Pipeline Strategist",
  location: "Lahore, Pakistan",
  email: "shairafgen9@gmail.com",
  bookingUrl: "https://cal.com/shair-afgen-pb0z87/30min",
  // TODO: add the LinkedIn profile URL. While empty, no LinkedIn link is shown.
  linkedinUrl: "",
  // Formspree form "Sher Afgan portfolio enquiry". Enquiries are emailed to the address linked to that Formspree account.
  formEndpoint: "https://formspree.io/f/mrppeglr",
  // Public URL of the deployed site, no trailing slash. Used for canonical URLs, sitemap and Open Graph.
  url: "https://shairafgan.online",
} as const;

export const headlineStats = [
  {
    value: 500,
    suffix: "+",
    label: "Qualified leads",
    note: "Across the US and Canada through LinkedIn and email outreach.",
  },
  {
    value: 200,
    suffix: "+",
    label: "Meetings booked",
    note: "With CEOs, founders, CTOs and department heads.",
  },
  {
    value: 500,
    prefix: "$",
    suffix: "K+",
    label: "Pipeline influenced",
    note: "Opportunities moved from first call through discovery to proposal. This is pipeline value, not closed revenue.",
  },
] as const;
