import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/types";
import { caseHref } from "../data/caseStudies";
import { Photo } from "./Photo";

export type CardVariant = "feature" | "split" | "metric" | "wide" | "row";

export function directionLabel(c: CaseStudy): string {
  return c.direction === "into" ? `Selling into ${c.industry.toLowerCase()}` : `Selling for ${c.industry.toLowerCase()}`;
}

function Metrics({ c }: { c: CaseStudy }) {
  if (c.metrics.length === 0) {
    return <p className="card-noscore">Figures shared on a call</p>;
  }
  return (
    <dl className="card-metrics">
      {c.metrics.map((m) => (
        <div key={m.label}>
          <dd>{m.value}</dd>
          <dt>{m.label}</dt>
        </div>
      ))}
    </dl>
  );
}

const sizesFor: Record<CardVariant, string> = {
  feature: "(max-width: 900px) 100vw, 800px",
  split: "(max-width: 900px) 100vw, 400px",
  metric: "(max-width: 900px) 100vw, 400px",
  wide: "(max-width: 900px) 100vw, 500px",
  row: "(max-width: 900px) 100vw, 400px",
};

export function CaseCard({ study, variant }: { study: CaseStudy; variant: CardVariant }) {
  const lead = study.metrics[0];
  return (
    <article className={`case-card case-${variant} dir-${study.direction}`}>
      <Link to={caseHref(study.slug)} className="case-card-link" aria-label={`${study.shortTitle}: read the case study`}>
        <Photo name={study.photo} alt="" sizes={sizesFor[variant]} className={variant === "feature" ? "strong" : ""} />
        <div className="case-body">
          <p className="tag-row">
            <span className="tag">{study.industry}</span>
            <span className="tag tag-dir">{directionLabel(study)}</span>
          </p>
          {variant === "metric" && lead ? (
            <p className="case-bignum" aria-label={`${lead.value} ${lead.label}`}>
              <span>{lead.value}</span>
              <small>{lead.label}</small>
            </p>
          ) : null}
          <h3>{study.shortTitle}</h3>
          <p className="case-sum">{study.summary}</p>
          {variant !== "metric" ? <Metrics c={study} /> : null}
          <span className="case-more">
            Read the case study <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
