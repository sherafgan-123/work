import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BookButton } from "../components/Buttons";
import { Photo } from "../components/Photo";
import { SectionHead } from "../components/SectionHead";
import { process, services, toolGroups } from "../data/services";
import { caseHref, getCase } from "../data/caseStudies";
import pages from "../data/pages.json";

export function Services() {
  const meta = pages["/services/"];
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/services/" />
      <section className="page-hero grid-canvas">
        <div className="container split-hero">
          <div>
            <p className="eyebrow">Services</p>
            <h1>Six ways I turn a target market into <em>qualified pipeline.</em></h1>
            <p className="hero-lead">
              Pick one part of the outbound engine or work with me across all of it. Each service is built around an outcome for
              your sales team, not a list of activities.
            </p>
            <div className="hero-actions"><BookButton variant="light" /></div>
          </div>
          <Photo name="team" alt="Colleagues reviewing documents together around a table" className="frame-photo" sizes="(max-width: 900px) 100vw, 480px" eager />
        </div>
      </section>

      <section className="section" aria-label="Services">
        <div className="container service-list">
          {services.map((s, i) => {
            const c = getCase(s.caseSlug);
            return (
              <Reveal key={s.id}>
                <article className="service" id={s.id}>
                  <div className="service-intro">
                    <span className="num">0{i + 1}</span>
                    <h2>{s.title}</h2>
                    <p className="lead">{s.lead}</p>
                  </div>
                  <div className="service-detail">
                    <div>
                      <h3>Who it is for</h3>
                      <p>{s.forWho}</p>
                    </div>
                    <div>
                      <h3>The problem it solves</h3>
                      <p>{s.problem}</p>
                    </div>
                    <div>
                      <h3>What I deliver</h3>
                      <ul>{s.deliver.map((d) => <li key={d}>{d}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Type of outcome</h3>
                      <p>{s.outcome} Results depend on your market, offer and buyers, and I do not guarantee them.</p>
                    </div>
                    <div className="service-foot">
                      {c ? <Link to={caseHref(c.slug)} className="text-link">See it in practice: {c.shortTitle}</Link> : null}
                      <BookButton variant="secondary">Discuss this service</BookButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section tint" aria-labelledby="process-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="How it runs"
              title={<span id="process-title">From market to handoff, in five phases.</span>}
              lead="Every phase is documented in the CRM, so any opportunity can be picked up by sales without losing context."
            />
          </Reveal>
          <ol className="phases">
            {process.map((p, i) => (
              <li key={p.step}>
                <Reveal delay={i * 60}>
                  <span className="step">0{i + 1}</span>
                  <h3>{p.step}</h3>
                  <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Tools"
              title={<span id="tools-title">The stack behind every deal.</span>}
              lead="Tools support the work. They do not replace the research."
            />
          </Reveal>
          <div className="tool-groups">
            {toolGroups.map((g) => (
              <Reveal key={g.title}>
                <div className="tool-group">
                  <h3>{g.title}</h3>
                  <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Not sure which service fits?</h2>
            <p>Describe your market and where outreach stalls. I will tell you honestly where to start.</p>
            <div className="hero-actions"><BookButton variant="light" /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
