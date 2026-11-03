import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BookButton, ButtonLink } from "../components/Buttons";
import { Photo } from "../components/Photo";
import { ReadProgress } from "../components/ReadProgress";
import { CaseCard, directionLabel } from "../components/CaseCard";
import { getCase } from "../data/caseStudies";
import { NotFound } from "./NotFound";

const steps = [
  { name: "Research", text: "Studied the sector and the problem the client's offer solves." },
  { name: "ICP", text: "Defined the ideal customer profile by industry, company profile and role." },
  { name: "Accounts", text: "Selected the target accounts most likely to need the offer." },
  { name: "Buyers", text: "Mapped the decision-makers inside each account." },
  { name: "Outreach", text: "Wrote personalised LinkedIn and email outreach, with follow-ups and re-engagement." },
];

const toc = [
  { id: "context", label: "Context" },
  { id: "challenge", label: "Challenge" },
  { id: "role", label: "My role" },
  { id: "approach", label: "Approach" },
  { id: "results", label: "Results" },
  { id: "takeaway", label: "Takeaway" },
];

export function CaseStudy() {
  const { slug = "" } = useParams();
  const c = getCase(slug);
  if (!c) return <NotFound />;

  const related = c.related.map((s) => getCase(s)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const facts = [
    { label: "Industry", value: c.industry },
    { label: "Client type", value: c.client },
    { label: "Target market", value: c.market },
    { label: "Service delivered", value: c.service },
  ];

  return (
    <>
      <Seo title={`${c.title} | Shair Afgan`} description={c.metaDescription} path={`/case-studies/${c.slug}/`} />
      <ReadProgress />

      <section className={`case-hero grid-canvas dir-${c.direction}`}>
        <div className="container case-hero-grid">
          <div>
            <p className="crumbs">
              <Link to="/case-studies">Case studies</Link> / Case {c.number}
            </p>
            <p className="tag-row">
              <span className="tag">{c.industry}</span>
              <span className="tag tag-dir">{directionLabel(c)}</span>
            </p>
            <h1>{c.title}</h1>
            <p className="hero-lead">{c.summary}</p>
          </div>
          <div>
            <div className="hero-photo">
              <Photo name={c.photo} alt={c.photoAlt} eager sizes="(max-width: 900px) 100vw, 520px" className="frame-photo" />
              {c.metrics.length > 0 ? (
                <div className="hero-chips">
                  {c.metrics.map((m) => (
                    <div className="glass-chip" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <p className="caption">Stock photograph. Not a client image.</p>
          </div>
        </div>
        <div className="container">
          <dl className="fact-grid glass">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-label="Case study detail">
        <div className="container case-layout">
          <nav className="case-toc" aria-label="In this case study">
            <p>In this case</p>
            {toc.map((t) => (
              <a key={t.id} href={`#${t.id}`}>{t.label}</a>
            ))}
          </nav>

          <div className="case-main">
            <section id="context">
              <Reveal>
                <p className="eyebrow">The business context</p>
                <h2>Who the client sells to, and why it was hard.</h2>
                <p>{c.context}</p>
                <ul className="mini-facts">
                  <li><b>What they sell</b>{c.sells}</li>
                  <li><b>Who I reached</b>{c.reached}</li>
                </ul>
              </Reveal>
            </section>

            <section id="challenge">
              <Reveal>
                <p className="eyebrow">The challenge</p>
                <p className="challenge-quote">{c.challenge}</p>
                <div className="shift" aria-label="How the approach changed">
                  <div className="shift-from">
                    <small>Before</small>
                    <strong>{c.shift[0]}</strong>
                  </div>
                  <span className="shift-arrow" aria-hidden="true">&rarr;</span>
                  <div className="shift-to">
                    <small>The approach</small>
                    <strong>{c.shift[1]}</strong>
                  </div>
                </div>
                <p className="shift-note">This describes the change in approach. It is not a measured comparison.</p>
              </Reveal>
            </section>

            <section id="role">
              <Reveal>
                <p className="eyebrow">My responsibility</p>
                <h2>What I handled, and what stayed with the client.</h2>
                <p>{c.responsibility}</p>
                <div className="lanes">
                  <div className="lane mine">
                    <h3>Handled by me</h3>
                    <ul>{c.mine.map((m) => <li key={m}>{m}</li>)}</ul>
                  </div>
                  <div className="lane">
                    <h3>Handled by the client's team</h3>
                    <ul>{c.clientLane.map((m) => <li key={m}>{m}</li>)}</ul>
                  </div>
                </div>
              </Reveal>
            </section>

            <section id="approach">
              <Reveal>
                <p className="eyebrow">Strategy and execution</p>
                <h2>Five stages, in order.</h2>
              </Reveal>
              <ol className="exec">
                {steps.map((s, i) => (
                  <li key={s.name}>
                    <Reveal delay={i * 60}>
                      <span className="step">0{i + 1}</span>
                      <h3>{s.name}</h3>
                      <p>{s.text}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <p className="fineprint">Stage descriptions reflect my standard method. Channel mix and sequence details for this client are shared on a call.</p>
            </section>
          </div>
        </div>
      </section>

      <section className="results-band on-band grid-canvas" id="results" aria-labelledby="results-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Results</p>
            <h2 id="results-title" className="block-title">What the documented numbers show.</h2>
          </Reveal>
          {c.metrics.length > 0 ? (
            <dl className="results">
              {c.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 80}>
                  <div className="result">
                    <dd>{m.value}</dd>
                    <dt>{m.label}</dt>
                  </div>
                </Reveal>
              ))}
            </dl>
          ) : (
            <Reveal>
              <p className="results-none">Figures for this engagement are shared on a call.</p>
            </Reveal>
          )}
          <p className="fineprint on-dark">
            Client name withheld. Metrics reflect my contribution within team outbound campaigns. Conversations, meetings and
            opportunities are counted separately and never added together.
          </p>
        </div>
      </section>

      <section className="section" id="takeaway" aria-label="Significance and takeaway">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What it meant for the client</p>
            <p className="lead">{c.significance}</p>
          </Reveal>
          <Reveal>
            <blockquote className="takeaway">
              <p>{c.takeaway}</p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section tint" aria-labelledby="related-title">
        <div className="container">
          <p className="eyebrow">Keep reading</p>
          <h2 id="related-title" className="block-title">Related case studies</h2>
          <div className="related-grid">
            {related.map((r) => <CaseCard key={r.slug} study={r} variant="row" />)}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Want similar opportunities in your market? <em>Let&apos;s talk.</em></h2>
            <p>Bring your target buyers and the problem your product solves. We will work out what a first step could look like.</p>
            <div className="hero-actions">
              <BookButton variant="light" />
              <ButtonLink to="/case-studies" variant="outline-light">All case studies</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
