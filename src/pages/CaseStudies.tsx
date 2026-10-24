import { useState } from "react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BookButton } from "../components/Buttons";
import { CaseCard } from "../components/CaseCard";
import { caseStudies, categories } from "../data/caseStudies";
import type { CategoryId } from "../data/types";
import pages from "../data/pages.json";

type Filter = "all" | CategoryId;

export function CaseStudies() {
  const meta = pages["/case-studies/"];
  const [filter, setFilter] = useState<Filter>("all");
  const shown = caseStudies.filter((c) => filter === "all" || c.category === filter);
  const count = (id: Filter) => (id === "all" ? caseStudies.length : caseStudies.filter((c) => c.category === id).length);
  const first = caseStudies[0];

  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/case-studies/" />
      <section className="page-hero grid-canvas">
        <div className="container">
          <p className="eyebrow">Case studies</p>
          <h1>One method across complex markets: <em>research first, then relevance.</em></h1>
          <p className="hero-lead">
            Client names are withheld. Metrics reflect my contribution within team outbound campaigns. Meetings, conversations
            and opportunities are always shown separately and never added together.
          </p>
        </div>
      </section>

      <section className="section tight" aria-label="Case study directory">
        <div className="container">
          {first && filter === "all" ? (
            <Reveal className="spotlight">
              <p className="eyebrow">Featured</p>
              <CaseCard study={first} variant="feature" />
            </Reveal>
          ) : null}

          <div className="filters" role="group" aria-label="Filter case studies by industry">
            {([{ id: "all" as const, label: "All" }, ...categories] as { id: Filter; label: string }[]).map((f) => (
              <button
                key={f.id}
                type="button"
                className={`filter ${filter === f.id ? "active" : ""}`}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label} <span className="filter-count">{count(f.id)}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {shown.length} case {shown.length === 1 ? "study" : "studies"}.
          </p>

          <div className="directory">
            {shown.map((c) => (
              <div key={c.slug} className="dir-item">
                <CaseCard study={c} variant="row" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Want similar opportunities in your market?</h2>
            <p>Tell me who you sell to. I will tell you what a research-led approach could look like for your buyers.</p>
            <div className="hero-actions"><BookButton variant="light" /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
