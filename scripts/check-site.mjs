// Post-build checks: every route exists, titles are unique, internal links resolve, no em dashes in copy.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dist = join(root, "dist");
const base = /base:\s*process\.env\.SITE_BASE \?\? "([^"]+)"/.exec(readFileSync(join(root, "vite.config.ts"), "utf8"))?.[1] ?? "/";
const pages = JSON.parse(readFileSync(join(root, "src/data/pages.json"), "utf8"));
const cases = JSON.parse(readFileSync(join(root, "src/data/case-studies.json"), "utf8"));

const failures = [];
const fail = (m) => failures.push(m);
const routes = [...Object.keys(pages), ...cases.map((c) => `/case-studies/${c.slug}/`)];

const titles = new Set();
for (const r of routes) {
  const file = join(dist, r, "index.html");
  if (!existsSync(file)) { fail(`missing ${file}`); continue; }
  const html = readFileSync(file, "utf8");
  const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1] ?? "";
  if (!title) fail(`${r}: no title`);
  if (titles.has(title)) fail(`${r}: duplicate title`);
  titles.add(title);
  if (!/<meta name="description" content="[^"]{50,}/.test(html)) fail(`${r}: description missing or short`);
  if (!html.includes(`<link rel="canonical" href="`) || html.includes("__SITE_URL__")) fail(`${r}: canonical/placeholder problem`);
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (!u.startsWith(base) || u.startsWith("http")) continue;
    const rel = u.slice(base.length).split("#")[0].split("?")[0];
    const target = join(dist, rel);
    if (rel && !existsSync(target)) fail(`${r}: broken ${u}`);
  }
}
for (const f of ["sitemap.xml", "robots.txt", "404.html"]) if (!existsSync(join(dist, f))) fail(`missing ${f}`);

// Case study integrity
const slugs = new Set(cases.map((c) => c.slug));
for (const c of cases) for (const s of c.related) if (!slugs.has(s)) fail(`${c.slug}: related ${s} not found`);
if (cases.length !== 10) fail(`expected 10 case studies, found ${cases.length}`);

// Copy rules: no em dashes anywhere in source copy
function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
for (const f of walk(join(root, "src")).filter((p) => [".ts", ".tsx", ".json", ".css"].includes(extname(p)))) {
  if (readFileSync(f, "utf8").includes("—")) fail(`em dash in ${f}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`OK: ${routes.length} routes, ${cases.length} case studies, links and copy rules pass.`);
