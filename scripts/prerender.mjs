// Runs after `vite build`. Writes one HTML file per route with its own title, description and canonical URL,
// plus sitemap.xml, robots.txt and a 404.html fallback for GitHub Pages.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dist = join(root, "dist");
const read = (p) => readFileSync(join(root, p), "utf8");

const siteSource = read("src/data/site.ts");
const siteUrl = (process.env.SITE_URL ?? /url:\s*"([^"]+)"/.exec(siteSource)?.[1] ?? "").replace(/\/$/, "");
if (!siteUrl) throw new Error("Could not determine site URL");
const siteName = /name:\s*"([^"]+)"/.exec(siteSource)?.[1] ?? "";

const pages = JSON.parse(read("src/data/pages.json"));
const cases = JSON.parse(read("src/data/case-studies.json"));

const routes = Object.entries(pages).map(([path, m]) => ({ path, title: m.title, description: m.description }));
for (const c of cases) {
  routes.push({
    path: `/case-studies/${c.slug}/`,
    title: `${c.title} | ${siteName}`,
    description: c.metaDescription,
  });
}

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      jobTitle: "B2B Growth & Pipeline Strategist",
      url: `${siteUrl}/`,
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      knowsAbout: ["B2B lead generation", "LinkedIn outreach", "Appointment setting", "Outbound sales strategy", "Pipeline development"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${siteName}, B2B Growth & Pipeline Strategist`,
      url: `${siteUrl}/`,
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: ["United States", "Canada", "United Kingdom"],
      serviceType: ["B2B lead generation", "LinkedIn and email outreach", "Appointment setting", "Pipeline development"],
    },
  ],
});

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const base = readFileSync(join(dist, "index.html"), "utf8").replaceAll("__SITE_URL__", siteUrl).replace("__JSON_LD__", jsonLd);

function render(r) {
  const url = `${siteUrl}${r.path}`;
  return base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
}

for (const r of routes) {
  const dir = join(dist, r.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), render(r));
}
writeFileSync(join(dist, "404.html"), render({ path: "/", title: `Page not found | ${siteName}`, description: "This page does not exist." }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((r) => `  <url><loc>${siteUrl}${r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}\n</urlset>\n`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log(`Prerendered ${routes.length} routes for ${siteUrl}`);
