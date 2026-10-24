import raw from "./case-studies.json";
import type { CaseStudy, CategoryId } from "./types";

export const caseStudies = raw as CaseStudy[];

export const featuredSlugs = [
  "aviation-ai-platform",
  "healthcare-software",
  "b2b-saas-platform",
  "logistics-technology",
];

export const categories: { id: CategoryId; label: string }[] = [
  { id: "ai-saas", label: "AI & SaaS" },
  { id: "healthcare", label: "Healthcare" },
  { id: "aviation", label: "Aviation" },
  { id: "it-services", label: "IT services" },
  { id: "logistics", label: "Logistics" },
  { id: "finance-security", label: "Finance & security" },
];

export function getCase(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseHref(slug: string): string {
  return `/case-studies/${slug}`;
}
