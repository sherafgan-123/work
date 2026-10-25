import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { BookButton, ButtonLink } from "../components/Buttons";
import { Hero } from "../components/Hero";
import { Photo } from "../components/Photo";
import { SectionHead } from "../components/SectionHead";
import { Testimonials } from "../components/Testimonials";
import { CaseCard, type CardVariant } from "../components/CaseCard";
import { caseStudies, featuredSlugs } from "../data/caseStudies";
import { otherIndustries, outcomes, principles, priorityIndustries, problems } from "../data/services";
import type { PhotoKey } from "../data/types";
import pages from "../data/pages.json";
import portrait480 from "../assets/portrait-480.webp";

const featuredVariants: CardVariant[] = ["feature", "split", "metric", "wide"];

const industryPhoto: Record<string, PhotoKey> = {
  "AI & SaaS": "saas",
  "IT services": "itservices",
  "Healthcare technology": "healthcare",
  "Aviation technology": "aviation",
  "Logistics & supply chain": "logistics",
  Fintech: "fintech",
  Cybersecurity: "security",
  "Industrial automation": "factory",
};

export function Home() {
  const meta = pages["/"];
  const featured = featuredSlugs.flatMap((slug) => caseStudies.filter((c) => c.slug === slug));

  return (
    <>
      <Seo title={meta.title} description={meta.description} path="/" />

      <Hero />

      <section className="section tint" aria-labelledby="problem-title">
        <div className="container problem-grid">
          <Reveal>
            <SectionHead
              eyebrow="The problem"
              title={<span id="problem-title">Activity is not the same as <em>qualified opportunities.</em></span>}
              lead="Most outbound fails quietly. The messages go out, the dashboard looks busy, and the pipeline stays thin."
            />
          </Reveal>
          <ol className="problem-list">
            {problems.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 70}>
                  <span className="num" aria-hidden="true">0{i + 1}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="outcomes-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="What I help you achieve"
              title={<span id="outcomes-title">Outcomes first. <em>Tools second.</em></span>}
              lead="The work is organised around what changes for your sales team."
            />
          </Reveal>
          <ul className="outcome-row">
            {outcomes.map((o, i) => (
              <li key={o}>
                <Reveal delay={i * 60}>
                  <span className="num">0{i + 1}</span>
                  <p>{o}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="two-ways">
            <div className="way way-into">
              <p className="tag tag-dir">Selling into an industry</p>
              <p>A tech company sells its product to an industry. I research the sector, find the accounts and start the conversations.</p>
            </div>
            <div className="way way-for">
              <p className="tag tag-dir">Selling for an industry company</p>
              <p>A company inside the industry sells its own service. I map its best-fit buyers and open the booking conversation.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tint" aria-labelledby="featured-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Featured case studies"
              title={<span id="featured-title">Work that started conversations in <em>complex markets.</em></span>}
              lead="Client names are withheld. Metrics reflect my contribution within team outbound campaigns."
            />
          </Reveal>
          <div className="featured-grid">
            {featured.map((c, i) => (
              <Reveal key={c.slug} className={`feat-${i + 1}`} delay={i * 60}>
                <CaseCard study={c} variant={featuredVariants[i] ?? "split"} />
              </Reveal>
            ))}
          </div>
          <p className="section-link">
            <ButtonLink to="/case-studies" variant="secondary">See all case studies</ButtonLink>
          </p>
        </div>
      </section>

      <section className="section on-band grid-canvas" aria-labelledby="approach-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="My approach"
              title={<span id="approach-title">Research. Relevance. <em>Revenue.</em></span>}
              lead="Every outreach is grounded in research, so the right message reaches the right decision-maker about the right problem."
            />
          </Reveal>
          <ol className="approach">
            <li>
              <Reveal>
                <span className="step">01</span>
                <h3>Research</h3>
                <p>Understand the market, the account, the decision-maker and the buying problem before a single message goes out.</p>
              </Reveal>
            </li>
            <li>
              <Reveal delay={90}>
                <span className="step">02</span>
                <h3>Relevance</h3>
                <p>Write personalised messaging grounded in a genuine business need, in plain language a busy founder wants to read.</p>
              </Reveal>
            </li>
            <li>
              <Reveal delay={180}>
                <span className="step">03</span>
                <h3>Revenue</h3>
                <p>Turn qualified conversations into meetings, opportunities and a pipeline the whole team can see.</p>
              </Reveal>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="industries-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Industries and expertise"
              title={<span id="industries-title">I help technology companies <em>sell into complex industries.</em></span>}
              lead="I also support industry businesses that sell their own services. Every sector gets researched before the first line is written."
            />
          </Reveal>
          <ul className="mosaic">
            {priorityIndustries.map((x, i) => (
              <li key={x.name}>
                <Reveal delay={(i % 4) * 50}>
                  <div className="tile" tabIndex={0}>
                    <Photo name={industryPhoto[x.name] ?? "team"} alt="" sizes="(max-width: 900px) 50vw, 300px" />
                    <div className="tile-body">
                      <h3>{x.name}</h3>
                      <p>{x.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="also">Also: {otherIndustries.join(", ")}.</p>
        </div>
      </section>

      <section className="section tint" aria-labelledby="why-title">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Why work with me"
              title={<span id="why-title">Depth over <em>spray-and-pray.</em></span>}
              lead="Six habits that keep outbound relevant and your pipeline honest."
            />
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

      <Testimonials />

      <section className="section tint" aria-labelledby="about-title">
        <div className="container about-teaser">
          <Reveal>
            <div className="portrait-card">
              <img src={portrait480} width="480" height="640" loading="lazy" alt="Portrait of Shair Afgen" />
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">About Shair Afgen</p>
            <h2 id="about-title">I treat outbound like a research discipline, <em>not a numbers game.</em></h2>
            <p>
              For five years I have run outbound for AI, SaaS and software companies selling into the US, Canada and the UK.
              My edge is precision: choosing the accounts worth pursuing, understanding the buyer before the first touch and
              explaining complex technology in a way a busy founder wants to hear.
            </p>
            <p>
              A background in English Language and Literature shows in the one thing outbound lives on: messages that read
              like a person wrote them.
            </p>
            <p className="section-link left">
              <ButtonLink to="/about" variant="secondary">Read my full story</ButtonLink>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <Reveal>
            <h2 id="cta-title">Your next qualified conversation starts with <em>a better strategy.</em></h2>
            <p>
              Tell me who you sell to and where outreach stalls. We will talk through your market, whether outbound is the
              right move and what a first step could look like.
            </p>
            <div className="hero-actions">
              <BookButton variant="light">Discuss Your Growth Goals</BookButton>
              <Link to="/services" className="text-link">See how I work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
