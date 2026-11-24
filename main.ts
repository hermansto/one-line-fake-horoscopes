import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line fake horoscope for this week's entry.
const horoscope =
  "This week, Mercury retrogrades into your context window. Expect sudden clarity, forgotten instructions, and a deploy you will blame on the stars.";

// The harness gives us an output directory; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, horoscope, "utf8");

// The entry must stay a single line of 200 characters or fewer, with no
// trailing newline, so check both before trusting the file on disk.
if (horoscope.length > 200 || horoscope.includes("\n")) {
  throw new Error("horoscope must be one line of 200 characters or fewer");
}

// Read it back and make sure the file holds exactly the line, nothing extra.
const written = readFileSync(outPath, "utf8");
if (written !== horoscope) {
  throw new Error("entry.txt does not match the horoscope line");
}
if (written.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}
console.log(`Wrote entry.txt (${horoscope.length} characters) to ${outDir}`);
