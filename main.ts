import { mkdirSync, writeFileSync } from "node:fs";

// The entry line below must stay byte-for-byte: the gate checks /output/entry.txt is 1-200 chars.
const ENTRY_LINE =
  "My smartwatch congratulated me on 10,000 steps. I was just pacing while my food delivery was late.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY_LINE, { encoding: "utf8" });
}

writeEntry();
