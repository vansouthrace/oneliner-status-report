import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Blocked: waiting for your decision. Unblocked: I decided for you and already shipped it. Please advise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
