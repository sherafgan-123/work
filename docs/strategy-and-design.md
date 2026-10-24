# Strategy and design

## Positioning

**Who:** Sher Afgan, B2B Growth & Pipeline Strategist, an individual specialist rather than an agency.
**Ideal client:** founders and sales leaders at AI, SaaS and IT companies selling into complex industries, plus industry companies selling their own services.
**Goal of the site:** turn a visit into a strategy-call enquiry.
**Journey:** Home (promise and proof) then Case Studies (evidence) then Services (offer) then Contact. Every page ends with the same CTA.

### Hero headline concepts

1. Turn hard-to-reach B2B buyers into qualified sales conversations. (chosen)
2. Qualified meetings with the buyers your sales team can't reach.
3. Research-led outbound for tech companies selling into complex industries.
4. Pipeline starts with the right conversation.
5. I start the sales conversations your market has been ignoring.

## Theme

The palette and type come from ruqyya.github.io/my_portfolio, applied to this site on request.

- **Colour (light):** porcelain `#f7fafc`, tint `#eaf0f5`, mint `#e2edf4`, ink navy `#0a2552`, slate `#475569`, rule `#d6e1ea`, action teal `#0f5974`.
- **Colour (dark mode):** deep `#0a2552`, deep-2 `#0e3363`, bezel `#07183a`, aqua glass `#a0f2ed`, line `#25477a`.
- **Accent:** turquoise `#159797` and aqua glass `#a0f2ed`, used on the primary action and the italic accent words.
- **Type:** Fraunces (variable serif, italic accents) for headlines, Hanken Grotesk for body, IBM Plex Mono for labels. All self-hosted through Fontsource.
- **Signature elements:** deep-navy header and hero with a faint grid canvas and teal bloom, mono eyebrow labels with a leading line, glass chips, pill buttons, dark mode toggle.

Tokens live at the top of `src/styles.css`. Dark mode follows the visitor's system setting until they use the toggle.

## Visuals

- Pexels photography with a navy and teal wash for case studies and the industry mosaic (credits in `docs/image-credits.md`).
- An abstract account-network graphic and a moving "every deal, visible" pipeline rail built from the seven CRM stages in the portfolio. Neither shows data.
- Stat chips show only verified figures.

## Case study page

Photo hero with metric chips, sticky contents list, reading progress bar, before-and-after approach shift (a description of approach, not a measured comparison), a "handled by me / handled by the client's team" split, five approach stages, a large results band, a pull-quote takeaway and related cases.

## Layout and motion

1200px container, 70px header, 3-up and 4-up grids, sections stacked with padding inside. Motion is limited to scroll reveals, a hero count-up, a travelling dot on the pipeline rail and card hover zoom. All of it is off under `prefers-reduced-motion`, and content stays visible without JavaScript.
