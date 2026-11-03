import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BookButton, ButtonLink } from "../components/Buttons";
import { SectionHead } from "../components/SectionHead";
import { principles, toolGroups } from "../data/services";
import { site } from "../data/site";
import pages from "../data/pages.json";
import portrait780 from "../assets/portrait-780.webp";
import portrait480 from "../assets/portrait-480.webp";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Markets", value: "US, Canada and UK" },
  { label: "Focus", value: "AI, SaaS, IT and software" },
  { label: "Education", value: "BS English Language & Literature" },
];

export function About() {
  const meta = pages["/about/"];
  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/about/" />
      <section className="page-hero grid-canvas">
        <div className="container split-hero">
          <div>
            <p className="eyebrow">About</p>
            <h1>I treat outbound like a research discipline, <em>not a numbers game.</em></h1>
            <p className="hero-lead">
              For five years I have run outbound for AI, SaaS and software companies selling into the US, Canada and the UK.
              I work as a strategic partner, not an anonymous agency.
            </p>
            <div className="hero-actions"><BookButton variant="light" /></div>
          </div>
          <div className="portrait-card">
            <img
              src={portrait780}
              srcSet={`${portrait480} 480w, ${portrait780} 780w`}
              sizes="(max-width: 900px) 70vw, 380px"
              width="780"
              height="1040"
              alt="Shair Afgan, B2B growth and pipeline strategist"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-label="My story">
        <div className="container prose-grid two">
          <Reveal className="prose-block">
            <h2>How I think about outbound</h2>
            <p>
              Anyone can send a thousand cold messages. I build relevance first, so the right people at the right companies,
              with the right problems, want to take the call.
            </p>
            <p>
              My edge is precision: choosing the accounts worth pursuing, understanding the buyer before the first touch and
              explaining complex technology in a way a busy founder wants to hear.
            </p>
            <p>
              A background in English Language and Literature shows in the one thing outbound lives on: messages that read
              like a person wrote them.
            </p>
          </Reveal>
          <Reveal className="prose-block">
            <h2>Complex B2B buying</h2>
            <p>
              Aviation, healthcare, logistics, fintech and cybersecurity all have long evaluations, several decision-makers
              and little patience for generic pitches. I research each sector before I write the first line.
            </p>
            <p>
              I protect your calendar. If a deal will never close, I would rather say so early than book it for the numbers.
            </p>
          </Reveal>
        </div>
        <div className="container">
          <dl className="fact-grid light">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section tint" aria-labelledby="who-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Best fit"
              title={<span id="who-title">The businesses I work best with.</span>}
              lead="Two kinds of client, one method."
            />
          </Reveal>
          <Reveal className="two-ways">
            <div className="way way-into">
              <p className="tag tag-dir">Selling into an industry</p>
              <p>AI, SaaS and IT companies with a product to sell into aviation, healthcare, logistics, fintech, cybersecurity and similar sectors.</p>
            </div>
            <div className="way way-for">
              <p className="tag tag-dir">Selling for an industry company</p>
              <p>Companies inside an industry, such as a private charter operator, with a service to sell and a clear set of best-fit buyers.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Working philosophy" title={<span id="values-title">What you can expect from me.</span>} />
          </Reveal>
          <ul className="why-list">
            {principles.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={(i % 3) * 60}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tint" aria-labelledby="tools-title">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Tools and expertise" title={<span id="tools-title">The stack I work in.</span>} />
          </Reveal>
          <div className="tool-groups">
            {toolGroups.map((g) => (
              <div className="tool-group" key={g.title}>
                <h3>{g.title}</h3>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal>
            <h2>Let&apos;s turn your market into qualified pipeline.</h2>
            <p>Tell me who you sell to and where outreach stalls.</p>
            <div className="hero-actions">
              <BookButton variant="light" />
              <ButtonLink to="/case-studies" variant="outline-light">See the case studies</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
