# Stewardli action items and orchestrator prompts ... Oct 22, 2026

Sources: Oct 15 Nora testing session, Oct 16 Aphasia kickoff call (full transcript), Oct 20 repo access / pipeline check-in.

## Tan

Before Friday Oct 23 session with Chris
1. Send Chris the pre-session message (in aphasia-stewardli-call-transcript.md, "Ready-to-send")
2. Script fix in Aphasia agent: "annual campaign" -> "annual appeal"
3. Scope landline vs mobile detection (Twilio Lookup, ~$0.008/number). Needs spend approval.

Aphasia pilot build (after NDA + COI; calls Nov 2-6)
4. Branching logic: mobile -> offer SMS; landline -> ask for cell (Mobbs's line), fall back to email
5. Voicemail on no-answer, scoped, off until approved
6. AI opt-out status as a real GHL field, visible in report
7. Secure intake for donor file from Peter's data house: one place, one owner, deletion date
8. GHL sub-account for Aphasia (not started)
9. Email fallback: who sends, from what domain
10. Confirm ext 127 transfer works outside 8:30 to 4

Pipeline
11. Retell SDK v2 -> v3 on demo repo (blocked on repo access from Chris)
12. Cost tracking report (Retell + Twilio + GHL -> Claude summary). Keep simple.
13. LinkedIn/AI prospecting tool for Chris
14. Review 11 Front Desk posts, cadence, images
15. Reconcile Chris's ChatGPT pronunciation notes with Retell dictionary
16. Send Chris mobile icon-overlap screenshot

## Chris
1. Send deck to Aphasia (confirm)
2. NDA with Paul; decide Fred's combined contract vs Aphasia paper
3. Settle pilot objective with Peter: gift lift vs retention
4. Propose pilot length + timeline after list review
5. Schedule list review call with Mobbs and Peter
6. Grant Tan the Nora demo repo
7. Three-way call with Fred before any Aphasia contract
8. Melanoma org CEO outreach
9. LinkedIn connection notes for new sector contacts
10. Business cards, favicon, mobile UI fix, Fred photo glow
11. Decide content direction for Front Desk queue
12. Scope round table dinner idea

## Correction for living memory
Oct 15 analysis says pronunciation fix was "switching to version 6". Actual fix: pin ElevenLabs Flash V2, voice temperature 0.2, change "Aphasia" dictionary entry from IPA to CMU (AH0 F EY1 ZH AH0). Published as agent V7. Lowercase "aphasia" entry stays IPA.

## Orchestrator prompts
See chat output Oct 22 for prompts A (Aphasia pilot build), B (cost report), C (LinkedIn prospecting), D (GHL sub-account), E (pilot design pressure test). Pattern: Opus lead, sonnet subagents for reasoning/drafting, haiku subagents for lookups/formatting, lead reviews and makes all live changes, stop before spend or published-agent edits.
