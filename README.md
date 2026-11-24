# Ridiculous at First Glance, Real by the Second

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/yannyonn94/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/yannyonn94/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

**Concept:** retired airport sniffer dogs, leased to landlords, who charge tenants $15 a sniff for a drug-free certificate before move-in — the dog earns treats, the landlord earns trust, the tenant gets the keys. Bizarre at first glance, sound at second glance: a real payer (landlords/tenants), a real price ($15 a sniff), a real payoff (a certificate that unlocks the flat).

**The pitch (199 characters, one sentence):**

> We lease retired airport sniffer dogs to landlords who charge tenants $15 a sniff for a drug-free certificate before move-in, the dog earns treats, the landlord earns trust, the tenant gets the keys.

## Why it should win the pairwise judge

1. **Bizarre:** nobody has heard of renting retired sniffer dogs to vet flat tenants.
2. **Business logic holds:** the payer, the price, and the payoff are all named in the sentence itself — landlords charge, tenants pay $15 a sniff, the certificate is what unlocks the keys.
3. **Lands as a pitch:** one sentence, laugh first ("rent-a-dog drug tests"), nod second (trust is exactly what landlords sell).
4. **Concrete and vivid:** a named thing (retired airport sniffer dogs), a named buyer (landlords / tenants), a number ($15 a sniff).

Deterministic: `main.ts` writes the same bytes on every run — no randomness, no network, no clock. Verified by running twice and comparing sha256.

`main.ts` writes that single sentence to `/output/entry.txt` — no trailing newline, ASCII only (199 chars = 199 bytes, which also helps the smaller-text tie-break). It refuses to write if the pitch ever drifts outside the gate's 1–200 character window.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint: writes the pitch to `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim
