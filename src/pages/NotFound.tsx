import { Seo } from "../components/Seo";
import { ButtonLink } from "../components/Buttons";

export function NotFound() {
  return (
    <section className="page-hero">
      <Seo title="Page not found | Sher Afgan" description="This page does not exist." path="/" />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>That page does not exist.</h1>
        <p className="hero-lead">The link may be old or mistyped.</p>
        <div className="hero-actions">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/case-studies" variant="secondary">Case studies</ButtonLink>
        </div>
      </div>
    </section>
  );
}
