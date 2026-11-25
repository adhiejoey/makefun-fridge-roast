import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My smart fridge lost Wi-Fi and refused to make ice, so now a $3,000 box just stands there glowing, cold, useless, and somehow still smug.";

if (entry.length === 0 || entry.length > 195) {
  throw new Error(`Entry must be 1-195 characters, got ${entry.length}`);
}
if (!/^[\x20-\x7E]+$/.test(entry) || entry.includes("\n")) {
  throw new Error("Entry must be a single line of plain ASCII text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
