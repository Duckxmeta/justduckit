#!/usr/bin/env node
/**
 * Decodes the watermarked cover preview PNGs (stored as text .b64 in the repo)
 * into public/guides/*.png so Next.js can serve them.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "content/guide-previews");
const destDir = join(root, "public/guides");

const files = [
  "center-hill-edgar-evins-preview.png",
  "dekalb-county-smithville-preview.png",
  "cannonsburgh-murfreesboro-preview.png",
];

mkdirSync(destDir, { recursive: true });

for (const name of files) {
  const b64Path = join(srcDir, `${name}.b64`);
  if (!existsSync(b64Path)) {
    console.error(`Missing ${b64Path}`);
    process.exit(1);
  }
  const dest = join(destDir, name);
  writeFileSync(dest, Buffer.from(readFileSync(b64Path, "utf8").trim(), "base64"));
  console.log("wrote", dest);
}
