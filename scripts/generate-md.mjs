import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, relative, basename } from "node:path";

async function* walkMdx(root) {
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const full = join(root, entry.name);
    if (entry.isDirectory()) {
      yield* walkMdx(full);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      yield full;
    }
  }
}

const BASE_URL = "https://docs.svix.com";

async function main() {
  const [inputDir, outputDir, llmsFullPath] = process.argv.slice(2);
  if (!inputDir || !outputDir) {
    console.error("Usage: generate-md.mjs <content-dir> <output-dir> [llms-full-path]");
    process.exit(1);
  }

  if (!existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  let count = 0;
  const llmsFullParts = [];

  for await (const file of walkMdx(inputDir)) {
    const rel = relative(inputDir, file);
    const content = await readFile(file, "utf8");

    const outRel = basename(rel) === "index.mdx"
      ? dirname(rel) + ".md"
      : rel.replace(/\.mdx$/, ".md");
    const outPath = join(outputDir, outRel);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, content, "utf8");
    count++;

    // Append the raw page contents (no cleaning, no reordering) preceded by a
    // separator noting the page's canonical URL.
    const route = outRel.replace(/\.md$/, "");
    llmsFullParts.push(`<!-- Source: ${BASE_URL}/${route} -->\n\n${content}`);
  }

  console.log(`Generated ${count} markdown files in ${outputDir}`);

  if (llmsFullPath) {
    await mkdir(dirname(llmsFullPath), { recursive: true });
    await writeFile(llmsFullPath, llmsFullParts.join("\n\n") + "\n", "utf8");
    console.log(`Generated ${llmsFullPath} from ${count} pages`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
