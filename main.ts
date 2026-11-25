// The Funniest One-Line Resignation Letter
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output),
// with no trailing newline. Node 22, standard library only.
//
// The voice is the cron job that has fired every minute since March:
// thanked never, paged at 3 AM for something that could have been an email.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I resign: I have fired every minute since March, been thanked never, and my 3 AM pages were for a reminder that could have been an email.";

// Bounty gate: the entry line is 140 characters at most (RULES.txt, "The gate").
const MAX_CODE_POINTS = 140;

/**
 * Throws unless `text` fits the bounty gate: 1-140 Unicode code points,
 * a single line, and not whitespace-only. Code points are counted with
 * the spread operator so astral characters count as one, not two.
 */
function assertFitsGate(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `Entry must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be whitespace-only");
  }
}

function main(): void {
  assertFitsGate(ENTRY);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
