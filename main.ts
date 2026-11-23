import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget I use every day: my phone charger.
// It only works at one exact angle, so charging the phone has become a
// nightly ritual of tucking it in like a hospital patient in traction
// and hoping nothing in the room so much as breathes on the table.
const ROAST =
  "My phone charger only works at one exact angle, so every night I tuck my phone in like a patient in traction and pray nobody bumps the table.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
