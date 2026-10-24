# Call brief: Chris, Fri Oct 23 evening

Everything Chris asked for last night is drafted and in the repo. Nothing is live. Walk it top to bottom, each block is one decision.

## 1. Cost tracking (he asked for "as much as possible")
No exports yet, so this is a model from verified list prices, not actuals. Actuals come once I have the Retell and Twilio CSVs.
- **USD 0.24 per talk minute.** Inside his 20 to 25 cent target. Matches what we see in Retell (0.20/min on the Retell side alone).
- **USD 0.39 per connected call, 0.16 per attempt.**
- **Fixed cost USD 319/mo** (GHL 297 is almost all of it). At 130 calls a month, fixed is 94% of the bill. It doesn't flip until ~1,000 calls a month.
- **Fee-increase risk, his question:** all three vendors +25% pushes us to 0.29/min, over the ceiling. OpenAI is the biggest single exposure (+11% alone).
- **Levers:** cut the prompt from 10k to 4k tokens (-15%), GPT-4.1 mini if quality holds (-14%), shorter calls (-11%), cheaper voice (-11%).
- **Aphasia pilot: about CAD 28 in usage.** Budget CAD 40.
- Ask him: GHL plan, is it 297 or something else, and does Stewardli pay for Retell on card or credits.

## 2. Timeline through Feb (he asked for dates)
- Oct 26 to 30: Aphasia build. Script fix Mon, branching Tue, n8n mapping Wed, voicemail + test plan Thu. **NDA + COI must be signed by Thu Oct 29** or go-live slips day for day.
- Nov 2 to 6: import, test calls, go-live, daily monitoring.
- Nov 9 to 13: pilot report v1, in-person Fred/Chris/Tan.
- Nov 16: report to Aphasia. Nov 20: contract proposal. Peter away Nov 23 to Dec 3.
- Dec: contract signed by Dec 15, compliance spec signed off by Dec 11.
- Jan 15 gate for Feb reminder calls: compliance signed, client list, consented numbers, agent tested.
- Build is ~12 hrs against ~9 available next week. Flag it, don't hide it.

## 3. CRA / CRTC compliance for the Feb reminder calls (new constraint from him)
- Charities are exempt from the National DNCL but NOT from: CRTC registration, internal do-not-call list, calling hours, caller ID, a callable number.
- **ADAD rules probably apply to Nora.** CRTC says charities are not exempt from ADAD express consent for solicitation calls. Whether a thank-you or reminder call is "solicitation" and whether conversational AI is an ADAD are both unsettled.
- **CRTC opened a review of these rules in June (Notice 2026-132) that covers AI voices.** Comments closed July 24. Decision could land before Feb. Recheck in December.
- 13 rules for Nora's prompt and a transfer-trigger list are drafted. 40-second script included.
- Needs a lawyer before Feb: is a reminder call solicitation, is AI an ADAD, who registers with the DNCL, the data processing agreement. That's a real cost item, put it in the plan.

## 4. RKD (he asked me to research)
- Nothing public. No AI product, no consent model, no scanning program. What he heard was probably conference talk.
- So there's no RKD playbook to copy. The file has a five-point PIPEDA checklist for pilot clients instead: who owns the data, single purpose, no training on donors, easy opt-out, minimize and delete.
- Suggest that checklist becomes the "written data/AI policy" Paul asked for.

## 5. Field Notes deliverables (he asked me to define mine)
- I own the pipe: Metricool queue, Tue/Thu scheduling, poll mechanics, UTM links, Monday analytics in 5 lines, stat lookups with citations.
- He owns the words: copy, images, poll questions, replies, which stats and why.
- I need admin on the Instagram business account to connect it.

## 6. In-person agenda (he wants the "next step" conversation)
Six blocks: where we are, pilot to revenue and pricing, build vs buy trigger, team and capacity (Humber, Fred, advisor, and the partnership conversation that was due after first paid client), operating rhythm, next 30 days. Pre-reads are the files above.

## Things to say out loud
- The two unasked items from the Oct 22 message: NDA (Fred's paper or theirs) and donor file (one Drive folder, one owner, delete Dec 6). Both still open.
- The Peter reply is drafted and waiting for him.
- Repo access for the Nora demo fix, still blocked on him.
- Google Drive: I'll mirror the repo docs there this weekend so he can read them without GitHub.

## Things not to commit to tonight
- Any content writing or sector research beyond stat lookups.
- Owning the TSI networking event.
- Timelines for the advisor question. That's his.
