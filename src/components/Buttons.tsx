import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

type Variant = "primary" | "secondary" | "light" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to: string;
  className?: string;
}

export function ButtonLink({ children, variant = "primary", to, className = "" }: ButtonProps) {
  return (
    <Link to={to} className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}

interface BookProps {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}

// Opens the real booking link when one is configured, otherwise the contact page.
export function BookButton({ children = "Book a Strategy Call", variant = "primary", className = "" }: BookProps) {
  if (site.bookingUrl) {
    return (
      <a href={site.bookingUrl} className={`btn btn-${variant} ${className}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to="/contact#book" className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}
