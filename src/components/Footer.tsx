import { Link } from "react-router-dom";
import { BookButton } from "./Buttons";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-text">
            {site.title}. Research-led outbound for AI, SaaS and IT companies selling into complex industries.
          </p>
          <BookButton variant="light" className="footer-cta" />
        </div>
        <nav aria-label="Footer">
          <p className="footer-head">Explore</p>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case-studies">Case studies</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <p className="footer-head">Get in touch</p>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.linkedinUrl ? (
              <li><a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            ) : null}
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>&copy; {new Date().getFullYear()} {site.name}. Client names are withheld. Metrics reflect my contribution within team outbound campaigns.</p>
      </div>
    </footer>
  );
}
