// Midnight Fridge Roast — writes the entry line to /output/entry.txt
// One line, 116 characters, roasting a smart fridge that refuses to open after midnight.
// Revision: read the line from entry.txt (single source of truth) instead of
// hard-coding it, so the shipped text and the program output can never drift.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
