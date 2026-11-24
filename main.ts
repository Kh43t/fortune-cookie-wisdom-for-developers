import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Wisdom for Developers — one original fortune-cookie line.
//
// "A comment you wrote at 2 a.m. will one day be the only map a stranger
// has to your mind."
//
// Why this line: a tired senior engineer has lived both sides of it —
// writing the exhausted late-night comment, and years later reading
// someone else's with gratitude. It is a prophecy ("will one day"), not
// a slogan: it says something true about a developer's day (comments,
// late nights, strangers inheriting code) and turns it with a quiet
// double meaning — the comment maps the code, and it maps the mind of
// the person who wrote it. One balanced sentence, one breath, 87 chars.
const LINE =
  "A comment you wrote at 2 a.m. will one day be the only map a stranger has to your mind.";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1-120 characters of UTF-8, not whitespace only —
// refuse to write anything else.
function fortuneCookie(line: string): string {
  const chars = [...line].length;
  if (chars < 1 || chars > 120 || !/\S/.test(line)) {
    throw new Error(`not a valid fortune-cookie line (${chars} chars)`);
  }
  return line;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, fortuneCookie(LINE), "utf8");
