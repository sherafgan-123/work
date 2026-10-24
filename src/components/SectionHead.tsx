import type { ReactNode } from "react";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  id?: string;
}

export function SectionHead({ eyebrow, title, lead, light = false, id }: SectionHeadProps) {
  return (
    <div className={`section-head ${light ? "on-dark" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
