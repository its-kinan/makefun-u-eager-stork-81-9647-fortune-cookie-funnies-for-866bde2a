import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune cookie message for a software engineer.
// Revised down from the 144-char draft: every filler clause cut, so the
// joke lands on a first read and the funniest word ("yourself") sits last.
const FORTUNE =
  "Your pull request will be approved instantly by the bot you wrote yourself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
