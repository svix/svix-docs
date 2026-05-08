import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import TurndownService from "turndown";
import TurndownGFMPlugin from "@truto/turndown-plugin-gfm";

const SKIP_FILES = new Set([
  "404.html",
  "500.html",
  "_not-found.html",
  "_error.html",
]);

async function* walkHtml(root) {
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.name.startsWith("_") && entry.isDirectory()) continue;
    const full = join(root, entry.name);
    if (entry.isDirectory()) {
      yield* walkHtml(full);
    } else if (entry.isFile() && entry.name.endsWith(".html") && !SKIP_FILES.has(entry.name)) {
      yield full;
    }
  }
}

function extractMain(html) {
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function buildTurndown() {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  td.use(TurndownGFMPlugin);
  td.remove(["script", "style", "noscript", "iframe"]);
  td.addRule("strip-svg", {
    filter: ["svg"],
    replacement: (content) => content || "",
  });
  return td;
}

async function main() {
  const [inputDir, outputDir] = process.argv.slice(2);
  if (!inputDir || !outputDir) {
    console.error("Usage: generate-md.mjs <input-dir> <output-dir>");
    process.exit(1);
  }

  if (!existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const turndown = buildTurndown();
  let count = 0;

  for await (const file of walkHtml(inputDir)) {
    const rel = relative(inputDir, file);
    const html = await readFile(file, "utf8");
    const md = turndown.turndown(extractMain(html)).trim() + "\n";

    const outRel = rel.replace(/\.html$/, ".md");
    const outPath = join(outputDir, outRel);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, md, "utf8");
    count++;
  }

  console.log(`Generated ${count} markdown files in ${outputDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
