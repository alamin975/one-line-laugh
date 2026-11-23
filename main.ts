import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smartwatch congratulated me on 10,000 steps. I was just pacing while my food delivery was late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
