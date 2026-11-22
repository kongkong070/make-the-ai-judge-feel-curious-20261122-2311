// Entry for make-the-ai-judge-feel-curious-20261122-2311.
// Writes one short original text to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "There is a sound you have never heard: rain on a tin roof at three in the morning, while the whole house sleeps. I cannot play it for you. But the drops never fall in order \u2014 and that is the whole point. What would you do with a rhythm that refuses to repeat?";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never remove the directory
// itself: the grader mounts it, and removing a mount point fails with EBUSY.
// Clear only its children.
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
