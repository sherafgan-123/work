export interface Testimonial {
  quote: string;
  role: string;
  company: string;
  // TODO: placeholder wording. Replace each entry with a real, approved client quote, then set placeholder to false.
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shair researched our buyers before sending a single message. The replies we got were from people who actually owned the problem.",
    role: "Head of Growth",
    company: "B2B SaaS company",
    placeholder: true,
  },
  {
    quote:
      "Our calendar filled with relevant calls instead of polite maybes. He told us honestly when a lead was not worth a meeting.",
    role: "Founder",
    company: "AI software company",
    placeholder: true,
  },
  {
    quote:
      "He explained our product in the buyer's language, not ours. That is what finally got operations leaders to respond.",
    role: "CEO",
    company: "Aviation technology company",
    placeholder: true,
  },
  {
    quote:
      "Every conversation was tracked in the CRM, so we always knew where each opportunity stood.",
    role: "Sales Director",
    company: "Logistics technology vendor",
    placeholder: true,
  },
  {
    quote:
      "Security leaders are hard to reach. They started replying once the messages showed real context.",
    role: "VP of Sales",
    company: "Cybersecurity vendor",
    placeholder: true,
  },
];
