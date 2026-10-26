# Nora V7 call to Mobbs: did it stay on script?

Call: Oct 16, 2026, 10:15 AM, outbound from the Nora number, 1:17, agent hangup. Retell call history shows Agent Version 7 (Draft V7, which the outbound number is attached to). Transcript read in Retell on Oct 26. Not copied here.

Retell post-call data: sms_consent granted, preferred_channel voice_call, user_reached true, wrong_number false, dnd_call false, donor_intent interested, sentiment positive.

## On track
| Prompt rule | What Nora did |
|---|---|
| Opener: AI disclosure and organization in the first ten seconds, first name only | Exact opener, said in the first 8 seconds |
| Gratitude, then stop | Returning line for Talk, Walk and Roll, then stopped |
| Appeal mention once, as a heads-up | Said once, then never again |
| One engagement question | "What inspired you to support Talk, Walk and Roll?" |
| Step 4, confirm a known channel | "I see we have phone call as your preferred way to connect. Is that still right?" |
| Step 5, SMS consent always asked | Asked. "That should be okay" was logged as granted |
| No money, no amounts, no Mobbs surname | None said |
| Warm close, no abrupt end | Closed warmly, then end_call |

## Off track
| Prompt rule | What Nora did | Fixed in v8? |
|---|---|---|
| "Annual appeal" (Mobbs) | Said "annual campaign" | Yes, wording changed everywhere |
| ONE THING PER TURN: never chain the appeal mention and "How are you doing today?" | Chained them in one turn | No. The rule already existed and Nora broke it. Needs testing (test-plan row to add) |
| NAME: first name only in opener and closing, never start a turn with it | "Thanks, Mobbs." opened turn 2. Name used 3 times | No. Same as above |
| Banned acknowledgement "Thanks for letting me know" | Used it after SMS consent | No. Same as above |
| ONE VOICE: no exclamation marks | "Have a wonderful day!" | No. The prompt's own closing line has the "!". Remove it in v8 |
| Program-specific gratitude line when program_segment is set | Used the base returning line with the campaign name | Unclear. Check that program_segment was passed on the test call |

## Logging gap
The prompt tells Nora to log annual_ask_mentioned, transfer_requested, callback_requested and accessibility_flag. None of these are in Retell's custom analysis on this call. Add them when the v8 post-call fields go in.

## Takeaway
The flow was right. The style rules (one thing per turn, name use, banned phrases) are where V7 drifts, and v8 does not change those rules. Add test-plan rows for them before Nov 2.
