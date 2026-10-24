// Central site configuration. Every value marked TODO needs confirming before launch.
export const site = {
  name: "Sher Afgan",
  title: "B2B Growth & Pipeline Strategist",
  location: "Lahore, Pakistan",
  // TODO: portfolio PDF lists this address under the spelling "Shair Afgen". Confirm it is correct.
  email: "shairafgen9@gmail.com",
  // TODO: add a real scheduling link (Calendly, Cal.com, etc). While empty, "Book a Strategy Call" opens the contact page.
  bookingUrl: "",
  // TODO: add the LinkedIn profile URL. While empty, no LinkedIn link is shown.
  linkedinUrl: "",
  // TODO: create a Formspree (or similar) form and paste its endpoint. While empty, the form opens the visitor's email app.
  formEndpoint: "",
  // Public URL of the deployed site, no trailing slash. Used for canonical URLs, sitemap and Open Graph.
  url: "https://sherafgan-123.github.io/my-portfolio",
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
