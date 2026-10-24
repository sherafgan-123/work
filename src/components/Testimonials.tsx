import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { testimonials } from "../data/testimonials";

function initials(role: string): string {
  return role
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="What clients say"
            title={<span id="testimonials-title">Buyers reply when the message is <em>relevant.</em></span>}
          />
        </Reveal>
        <ul className="testi-grid">
          {testimonials.map((t, i) => (
            <li key={t.quote} className={i === 0 ? "testi-lead" : ""}>
              <Reveal delay={(i % 3) * 70}>
                <figure className="testi">
                  {t.placeholder ? <span className="testi-flag">Sample text</span> : null}
                  <blockquote>
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption>
                    <span className="avatar" aria-hidden="true">{initials(t.role)}</span>
                    <span>
                      <strong>{t.role}</strong>
                      <small>{t.company}</small>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
