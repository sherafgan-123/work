import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "icp-market-research",
    title: "ICP & Market Research",
    lead: "Find the markets, accounts and decision-makers most likely to buy, before a single message goes out.",
    forWho: "Teams with a product but an unclear target, or outreach that keeps reaching the wrong people.",
    problem: "Without a clear ideal customer profile, outreach spreads thin and replies come from people who will never buy.",
    deliver: [
      "A defined ICP by industry, company profile, geography and role",
      "Buyer persona research covering priorities and buying concerns",
      "Market and trend research to spot where demand is forming",
    ],
    outcome: "A clear, documented target your sales team can agree on.",
    caseSlug: "healthcare-software",
  },
  {
    id: "prospecting-lead-generation",
    title: "B2B Prospecting & Lead Generation",
    lead: "Build targeted prospect lists and start relevant conversations with the people who can say yes.",
    forWho: "Technology and services companies that need a steady supply of well-matched accounts.",
    problem: "Bought lists are broad and stale. Sales time disappears into accounts that were never a fit.",
    deliver: [
      "Target account lists built with Sales Navigator, Apollo and Clay",
      "Decision-maker mapping inside each account",
      "Contact verification before outreach begins",
    ],
    outcome: "A researched list of accounts and buyers worth contacting.",
    caseSlug: "logistics-technology",
  },
  {
    id: "linkedin-email-outreach",
    title: "LinkedIn & Email Outreach",
    lead: "Personalised multi-touch outreach that reads like a person wrote it, because one did.",
    forWho: "Founders and sales leaders whose cold outreach gets deleted or ignored.",
    problem: "Generic sequences get generic results. Busy buyers can tell within a line whether a message was written for them.",
    deliver: [
      "Messaging grounded in the buyer's real business problem",
      "Multi-touch LinkedIn and email sequences",
      "Follow-up and re-engagement for warm and quiet prospects",
    ],
    outcome: "More relevant replies from the buyers you want to reach.",
    caseSlug: "b2b-saas-platform",
  },
  {
    id: "appointment-setting",
    title: "Appointment Setting & Qualification",
    lead: "Separate real opportunities from noise and put qualified conversations on your calendar.",
    forWho: "Sales teams that want fewer, better meetings with decision-makers.",
    problem: "Meetings that should never have been booked waste time and hide the opportunities that matter.",
    deliver: [
      "Honest qualification before a call is booked",
      "Discovery calls framed so the right person attends",
      "Meeting coordination with senior decision-makers",
    ],
    outcome: "A calendar of qualified meetings instead of a pile of maybes.",
    caseSlug: "aviation-ai-platform",
  },
  {
    id: "pipeline-crm",
    title: "Pipeline Development & CRM",
    lead: "Track every opportunity and hand it over cleanly so nothing slips between outreach and sales.",
    forWho: "Teams whose pipeline lives in inboxes and spreadsheets.",
    problem: "When pipeline is hard to see, forecasting is guesswork and warm opportunities go cold.",
    deliver: [
      "Pipeline stages tracked in HubSpot or Zoho",
      "Discovery notes and proposal inputs kept with each deal",
      "A clean handoff from outreach to sales and delivery",
    ],
    outcome: "A pipeline you can see, with context kept at every stage.",
    caseSlug: "fintech-software",
  },
  {
    id: "outbound-strategy",
    title: "Outbound Growth Strategy",
    lead: "Improve targeting, messaging and execution so your outbound engine runs on research instead of volume.",
    forWho: "Companies whose outbound is running but not working.",
    problem: "More activity has not produced more qualified opportunities, and nobody is sure which part is broken.",
    deliver: [
      "Review of targeting, messaging and sequence structure",
      "A research-led plan for the next outbound cycle",
      "Solution-fit guidance: MVP, full build, AI platform or dashboard",
    ],
    outcome: "A focused plan that shows what to change first.",
    caseSlug: "it-services-firm",
  },
];

export const principles = [
  {
    title: "Research depth",
    text: "I know the account, the buyer and the pain before the first message, so outreach lands as relevant, not spam.",
  },
  {
    title: "Personalised outreach",
    text: "Every message gives one specific reason to talk, written in plain business language.",
  },
  {
    title: "Technology fluency",
    text: "I translate AI, SaaS and IT services into business value that founders and CTOs engage with.",
  },
  {
    title: "Honest qualification",
    text: "I protect your calendar by surfacing genuine opportunities and filtering out deals that will never close.",
  },
  {
    title: "CRM visibility",
    text: "Every conversation is tracked, so momentum is visible and nothing slips through.",
  },
  {
    title: "Consistent execution",
    text: "Multi-touch discipline keeps conversations moving long after the first reply.",
  },
];

export const process = [
  { step: "Research", items: ["Market research", "ICP definition", "Buyer personas"] },
  { step: "Prospect", items: ["Target account lists", "Sales Navigator, Apollo, Clay", "Contact verification"] },
  { step: "Reach out", items: ["Personalised LinkedIn and email", "Follow-ups", "Re-engagement"] },
  { step: "Qualify", items: ["Separate real opportunities from noise", "Book and frame the discovery call"] },
  { step: "Hand off", items: ["Proposal inputs and scope", "CRM pipeline tracking", "Clean sales-to-delivery transition"] },
];

export const toolGroups = [
  { title: "Prospect research", items: ["LinkedIn Sales Navigator", "Apollo.io", "Clay", "Hunter.io", "Snov.io"] },
  { title: "Outreach", items: ["Lemlist", "LinkedIn outreach", "Email follow-up", "Re-engagement"] },
  { title: "CRM and tracking", items: ["HubSpot CRM", "Zoho CRM", "Google Sheets", "Campaign analytics"] },
];

export const stages = [
  "Initial outreach",
  "Qualified lead",
  "Discovery call",
  "Evaluation",
  "Proposal",
  "Follow-up",
  "Handoff",
];

export const priorityIndustries = [
  { name: "AI & SaaS", text: "Platforms selling workflow, analytics and automation to operations and revenue leaders." },
  { name: "IT services", text: "Software and consulting firms selling MVPs, custom builds and AI integrations." },
  { name: "Healthcare technology", text: "Patient-management and EMR software for practices, clinics and hospitals." },
  { name: "Aviation technology", text: "Fleet, scheduling and maintenance software for airlines and MRO providers." },
  { name: "Logistics & supply chain", text: "Tracking, warehouse and routing technology for global supply chain teams." },
  { name: "Fintech", text: "Finance operations and reporting tools for CFOs and finance directors." },
  { name: "Cybersecurity", text: "Threat detection and compliance platforms for enterprise security leaders." },
  { name: "Industrial automation", text: "Industrial AI and operations technology for manufacturing leaders." },
];

export const otherIndustries = [
  "Transportation",
  "Tax & accounting",
  "Construction",
  "Real estate and PropTech",
  "Clean energy",
];

export const problems = [
  { title: "Outreach reaches the wrong buyers", text: "Activity looks healthy, but the replies come from people who cannot buy." },
  { title: "Messaging does not explain business value", text: "Features get listed. The buyer's actual problem never gets named." },
  { title: "Sales time goes to unqualified leads", text: "Calendars fill with meetings that were never going to turn into opportunities." },
  { title: "Pipeline growth is unpredictable", text: "Some months are busy and some are silent, and nobody can say why." },
];

export const outcomes = [
  "Identify high-fit accounts",
  "Reach difficult decision-makers",
  "Start relevant sales conversations",
  "Book qualified meetings",
  "Build a visible, organised pipeline",
];
