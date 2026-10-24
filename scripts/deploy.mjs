// Builds the site and publishes dist/ to the gh-pages branch of the "origin" remote.
// GitHub Pages is set to serve that branch.
import { execSync } from "node:child_process";
import { cpSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const run = (cmd, cwd) => execSync(cmd, { stdio: "inherit", cwd });
const remote = execSync("git remote get-url origin").toString().trim();

run("npm run build");
const tmp = mkdtempSync(join(tmpdir(), "deploy-"));
cpSync("dist", tmp, { recursive: true });
writeFileSync(join(tmp, ".nojekyll"), "");
run("git init -b gh-pages", tmp);
run("git add -A", tmp);
run('git -c user.name="deploy" -c user.email="deploy@users.noreply.github.com" commit -q -m "Deploy site"', tmp);
run(`git push --force ${remote} gh-pages`, tmp);
console.log("Deployed to gh-pages.");
