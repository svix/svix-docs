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

async function main() {
  const [inputDir, outputDir] = process.argv.slice(2);
  if (!inputDir || !outputDir) {
    console.error("Usage: generate-md.mjs <content-dir> <output-dir>");
    process.exit(1);
  }

  if (!existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  let count = 0;

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
  }

  console.log(`Generated ${count} markdown files in ${outputDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
