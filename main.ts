// Midnight Fridge Roast — entry writer.
// Revised in-session: main.ts now reads the line from entry.txt as the
// single source of truth, so the shipped text and the output always match.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
