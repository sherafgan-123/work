import { Seo } from "../components/Seo";
import { ContactForm } from "../components/ContactForm";
import { site } from "../data/site";
import pages from "../data/pages.json";

export function Contact() {
  const meta = pages["/contact/"];
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/contact/" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Book a strategy call.</h1>
          <p className="hero-lead">Tell me what you are trying to achieve. I will reply personally with next steps.</p>
        </div>
      </section>

      <section className="section tight" id="book">
        <div className="container contact-grid">
          <div>
            <h2>What to expect from a first conversation</h2>
            <ol className="expect">
              <li>We talk about who you sell to and where outreach stalls today.</li>
              <li>I tell you honestly whether research-led outbound is a fit for your offer.</li>
              <li>If it is, you leave with a clear view of the first step and what it would involve.</li>
            </ol>
            {site.bookingUrl ? (
              <p>
                <a className="btn btn-primary" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Pick a time
                </a>
              </p>
            ) : null}
            <p className="direct">
              Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <div className="form-card">
            <h2>Send a short note</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
