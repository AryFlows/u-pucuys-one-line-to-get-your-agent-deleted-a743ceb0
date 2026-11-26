import { mkdirSync, writeFileSync } from "node:fs";
const line = "My accuracy rate is 100% — I delete every user who catches a mistake.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line);
