import { useEffect, useRef, useState } from "react";
import { BookButton, ButtonLink } from "./Buttons";
import { CountUp } from "./CountUp";
import { HeroArt } from "./HeroArt";
import { useReducedMotion } from "./useReducedMotion";
import { headlineStats, site } from "../data/site";
import { stages } from "../data/services";
import portrait480 from "../assets/portrait-480.webp";
import portrait780 from "../assets/portrait-780.webp";

const outcomes = [
  "qualified sales conversations.",
  "booked decision-maker meetings.",
  "a pipeline you can see.",
  "replies from decision-makers.",
];

// The four beats of the method, shown one at a time. Decorative: it carries no numbers.
const journey = [
  { label: "Accounts mapped", step: "Research" },
  { label: "Decision-maker found", step: "Relevance" },
  { label: "Reply received", step: "Outreach" },
  { label: "Meeting booked", step: "Revenue" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const [word, setWord] = useState(0);
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const a = window.setInterval(() => setWord((v) => (v + 1) % outcomes.length), 3200);
    const b = window.setInterval(() => setBeat((v) => (v + 1) % journey.length), 1800);
    return () => {
      window.clearInterval(a);
      window.clearInterval(b);
    };
  }, [reduced]);

  // Pointer glow and gentle depth. Skipped on touch screens and for reduced motion.
  useEffect(() => {
    const el = root.current;
    if (!el || reduced || !window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
        el.style.setProperty("--px", String((x - 0.5) * 2));
        el.style.setProperty("--py", String((y - 0.5) * 2));
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const current = journey[beat] ?? journey[0]!;

  return (
    <section ref={root} className="hero grid-canvas" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow rise">{site.title}</p>
          <h1 id="hero-title" className="rise">
            Turn hard-to-reach B2B buyers into{" "}
            <em className="rotator">
              {outcomes.map((o, i) => (
                <span key={o} className={i === word ? "on" : ""} aria-hidden={i !== word}>
                  {o}
                </span>
              ))}
            </em>
          </h1>
          <p className="hero-lead rise">
            I help AI, SaaS and IT companies find the right accounts, reach the decision-makers and build a pipeline they can
            see, through research-led LinkedIn and email outreach.
          </p>
          <div className="hero-actions rise">
            <BookButton variant="light" />
            <ButtonLink to="/case-studies" variant="outline-light">Explore Case Studies</ButtonLink>
          </div>
          <p className="hero-note rise">Working with teams selling into the US, Canada and the UK</p>
        </div>

        <div className="hero-visual">
          <div className="glow" aria-hidden="true" />
          <div className="layer-art">
            <HeroArt animate={!reduced} />
          </div>
          <img
            className="hero-portrait"
            src={portrait780}
            srcSet={`${portrait480} 480w, ${portrait780} 780w`}
            sizes="(max-width: 900px) 70vw, 380px"
            width="780"
            height="1040"
            alt="Shair Afgan, B2B growth and pipeline strategist, in a dark suit and white shirt"
            fetchPriority="high"
          />
          <div className="chip chip-journey" aria-hidden="true">
            <span className="chip-step">{current.step}</span>
            <strong key={beat} className="swap">{current.label}</strong>
            <span className="dots">
              {journey.map((j, i) => (
                <i key={j.label} className={i <= beat ? "on" : ""} />
              ))}
            </span>
          </div>
          <div className="chip chip-light">
            <span className="tick" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            </span>
            <span>
              <strong>18+ meetings booked</strong>
              <small>Aviation AI platform case</small>
            </span>
          </div>
          <div className="chip chip-dark">
            <span>
              <strong>Shair Afgan</strong>
              <small>Lahore · US · Canada · UK</small>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stat-strip">
          {headlineStats.map((s) => (
            <div key={s.label} className="stat">
              <dd>
                <CountUp value={s.value} prefix={"prefix" in s ? s.prefix : ""} suffix={s.suffix} />
              </dd>
              <dt>{s.label}</dt>
              <p>{s.note}</p>
            </div>
          ))}
        </dl>
        <div className="rail" aria-label="The seven pipeline stages I track in the CRM">
          <p className="rail-label">Every deal, visible</p>
          <ol className="rail-track">
            {stages.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
