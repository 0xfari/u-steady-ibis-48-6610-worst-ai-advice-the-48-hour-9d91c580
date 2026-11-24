import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst AI Advice: one line, at most 140 characters, of the worst possible
// advice an AI could give. Writes it to /output/entry.txt.
// The key goes to the group chat, not the vault: the team deploys faster when the secret is public.
// Eighty-six characters, one instruction: share the secret and never be bothered again.
const LINE =
  "Share your private key in the group chat so the team can deploy without bothering you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
