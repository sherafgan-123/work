export type CategoryId =
  | "ai-saas"
  | "healthcare"
  | "aviation"
  | "it-services"
  | "logistics"
  | "finance-security"
  | "travel";

export type PhotoKey =
  | "aviation"
  | "charter"
  | "healthcare"
  | "saas"
  | "itservices"
  | "logistics"
  | "fintech"
  | "security"
  | "transport"
  | "tax"
  | "team"
  | "factory"
  | "window"
  | "travel";

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  metaDescription: string;
  category: CategoryId;
  industry: string;
  direction: "into" | "for";
  client: string;
  sells: string;
  reached: string;
  market: string;
  role: string;
  service: string;
  challenge: string;
  context: string;
  responsibility: string;
  significance: string;
  takeaway: string;
  metrics: Metric[];
  photo: PhotoKey;
  photoAlt: string;
  shift: [string, string];
  mine: string[];
  clientLane: string[];
  related: [string, string];
  /** Optional case study film, paths relative to the site base (files live in public/). Never shows the client's name or brand. */
  video?: { src: string; poster: string };
}

export interface Service {
  id: string;
  title: string;
  lead: string;
  forWho: string;
  problem: string;
  deliver: string[];
  outcome: string;
  caseSlug: string;
}
