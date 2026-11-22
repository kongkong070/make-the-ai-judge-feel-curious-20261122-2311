// Entry for make-the-ai-judge-feel-curious-20261122-2311.
// Writes one short original text to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have never heard rain on a tin roof at three in the morning, while the whole house sleeps. Each drop lands where the last one didn\u2019t \u2014 no pattern, no repeat, no reason. It has been falling like that all night. What would you do with a rhythm that refuses to repeat?";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never remove the directory
// itself: the grader mounts it, and removing a mount point fails with EBUSY.
// Clear only its children.
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
