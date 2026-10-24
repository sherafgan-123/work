# Content accuracy and open items

## Source of truth

All copy comes from "Sher Afgan Portfolio v2.pdf". Case study data is in `src/data/case-studies.json`. Only figures that were also in the earlier portfolio are shown on the site.

## Figures shown on the site (carried over from the earlier portfolio, still need client confirmation)

| Case | Shown |
|---|---|
| 01 Aviation AI | 18+ meetings, 34% reply rate |
| 03 Healthcare | 25+ qualified conversations, 2.6x response rate |
| 04 B2B SaaS | 40+ qualified conversations, 3.2x more qualified replies |
| 06 Logistics | 40+ qualified conversations, 15+ sales opportunities |
| 07 Fintech | 20+ qualified conversations, 8+ sales opportunities |
| 08 Cybersecurity | 22+ qualified conversations, 9+ sales opportunities |
| 10 Tax & accounting | 3x meeting rate |
| Home | 500+ leads, 200+ meetings, $500K+ pipeline (labelled as pipeline, not closed revenue) |

## Figures left out on purpose

The v2 PDF contains stand-in numbers that were never confirmed (see "Portfolio v2 - data to replace.md"). They are **not** published. Cases 02 (private charter), 05 (IT services) and 09 (transportation) therefore show "Figures shared on a call". To add a figure, put it in the case's `metrics` array in `case-studies.json`; the page, directory card and results band update on their own.

Left out: 5 evaluation calls (01), 12+ meetings / 30% reply / $180K+ pipeline (02), 6 proposals (03), $120K+ pipeline (04), 30+ conversations / 11+ proposal calls / 2.8x (05), 3 pilots (06), 2x reply (07), 4 pilot discussions (08), 28+ / 14+ / $150K+ (09), 20+ / $90K+ (10).

Headlines for cases 05, 09 and 10 were rewritten so they do not repeat an unconfirmed number.

## Descriptive details to confirm with the client

The "Client", "What they sell", "Who I reached" and "My role" lines are from the v2 PDF. The earlier notes mark them as stand-ins. Confirm each, especially cases 02, 05, 09 and 10.

## Missing content and assets

1. **Booking link.** `site.bookingUrl` in `src/data/site.ts` is empty. "Book a Strategy Call" opens the contact page until you add a Calendly or Cal.com URL.
2. **Form destination.** `site.formEndpoint` is empty. The form validates, then opens the visitor's email app with the message prepared; it says plainly that nothing has been sent. To receive messages directly, create a Formspree form and paste its endpoint.
3. **Email.** The PDF uses `shairafgen9@gmail.com` and the name "Shair Afgen". Confirm the address and the spelling of the name. The phone number from the PDF is intentionally not published.
4. **LinkedIn URL.** Not in the PDF, so no link is shown. Add `site.linkedinUrl`.
5. **Testimonials, client logos, awards.** None exist in the source, so none are shown.
6. **Case images.** The PDF images are AI-generated and were not reused. Each case uses an original abstract illustration, labelled "Illustration only".
7. **Metric definitions.** The PDF does not define "qualified conversation" or "sales opportunity". Add definitions when the client confirms them.
8. **Custom domain.** Canonical URLs and the sitemap use the GitHub Pages address. If a domain is added, set `site.url` and build with `SITE_BASE=/`.

## Future improvements

- Real client testimonials and quotes (with permission).
- Before and after baselines for rate improvements.
- Short Q&A section for common objections.
- Light analytics (privacy-friendly) to see which pages lead to enquiries.
