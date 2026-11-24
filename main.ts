// Ridiculous at First Glance, Real by the Second — make.fun entry.
// Concept: retired airport sniffer dogs, leased to landlords, who charge
// tenants $15 a sniff for a drug-free certificate before move-in.
// Bizarre at first glance (rent-a-dog drug tests for flats), sound at
// second glance (landlord gets trust, tenant gets keys, dog gets treats).
// One sentence, 199 characters, no trailing newline: the gate counts
// characters (1-200) and the tie-break counts bytes, so ASCII only.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We lease retired airport sniffer dogs to landlords who charge tenants $15 a sniff for a drug-free certificate before move-in, the dog earns treats, the landlord earns trust, the tenant gets the keys.";

// Guard the gate: exactly one sentence, 1-200 characters, non-blank.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
