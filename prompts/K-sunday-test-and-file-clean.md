# Prompt K: Sunday Nov 1, test day and donor file clean

Read STATUS.md, meetings-digest-oct27-31.md, aphasia/e2e-test-log-2026-10-29.md, aphasia/test-plan.md, aphasia/mobbs-call-2026-10-30.md, aphasia/dropbox-intake.md section 4. Tan is with you on the phone today. Chris at 8pm tonight wants to hear "tested, file ready, here's Monday's email."

Rules that hold: no donor rows into any AI tool, Claude never opens the donor file. Zero new spend. Nothing published in Retell without Tan's go. Report after each block in five lines or fewer. Multiple choice for every decision.

## Block 1: Retell and pipeline sanity (30 min)
1. Confirm Retell balance is positive and a Retell low-balance alert exists (Settings > Billing, read only; if there is no alert, tell Tan what to click).
2. Rerun test D (aphasia/e2e-test-log-2026-10-29.md) with Tan's contact: no first name, segment new, mobile, appeal mail. Log it.
3. Confirm what is actually in Retell Draft V7 matches aphasia/nora-prompt-retell-v7.md after Friday's "thank you for your support" change. Diff by reading, not by editing.

## Block 2: prompt test plan (2 to 3 hours, Tan on the phone)
Run aphasia/test-plan.md rows in this order, one at a time, log each in aphasia/test-log-2026-10-26.md with call ID, result, what Nora said that failed:
- 11, 12, 1, 14, 3, 2, 15 (the branching and consent core)
- 6 (voicemail), 7 (opt-out), 9 (wrong number), 23 (leave a message)
- 4, 18 (today is Sunday, so 18 is the closed-office path), 5 if after 4pm
- 13, 21 (gift question with and without data)
- 8, 10, 19, 20, 22
Rows 16 and 17 need a weekday at 3:55pm and 4:05pm. Schedule them for Monday Nov 2.
Stop after any FAIL, propose the fix as a diff to aphasia/nora-prompt-retell-v7.md, apply only on Tan's go, rerun that row.

## Block 3: test E, call-back email (20 min)
Run the n8n "daily call back email" manually with the real Tan contact flagged callback_requested from a test call. Confirm it lands in Tan's inbox with the right layout and only Tan's row. Do not send to Mobbs. Log in aphasia/callback-email.md.

## Block 4: donor file clean (Tan runs it locally)
The file is in Google Drive under the stewardli.ai account, not Dropbox. Update aphasia/dropbox-intake.md section 1 with one line saying so and where (folder name only).
Write aphasia/clean-file.py that Tan runs on his machine against the file. It must:
- Take the input path and an output folder as arguments. Never print a donor row. Print only the header row, the row count, and counts per check.
- Keep an untouched copy of the original.
- Produce clean.csv with exactly: join_id (sequential, A001...), first_name, last_initial, phone (E.164, +1), email (if present), appeal_channel (mail/email/unknown, if derivable), donor_segment (if present, mapped to new/returning/lapsed), last_gift_amount (only if Tan says yes in the prompt's first question), and the constant columns from dropbox-intake.md section 4 (client:aphasia tag, campaign tag, stewardli_campaign_started, blank campaign_id, consent_call TRUE).
- Split names: if one "name" column, split on first space, last initial only. Flag rows with two names (couples) to a review list by join_id only.
- Drop and list (by join_id) rows with: no phone, non-Canadian phone (+1 but area code not Canadian, or any non-+1), duplicate phone, any do-not-call flag column that is set.
- Add Chris as a real row if he is in the file (do not remove him). Flag by join_id.
- Write batches: batch1.csv, batch2.csv, batch3.csv, roughly equal, grouped by city if a city column exists, otherwise by join_id order. Each batch is a GHL import file with the aphasia_call_now tag NOT included (the tag is added in GHL per batch on calling day).
- Print a summary: total, kept, dropped by reason, batch sizes.
Ask Tan first, multiple choice: (a) include last_gift_amount or not, (b) 2 or 3 batches, (c) batch by city or by order.

## Block 5: Monday email to Aphasia (for Chris at 8pm)
Draft aphasia/monday-email-draft.md: reply-all to the Peter thread, from Tan. File received, thank you. Cleaned to first name, last initial, phone. X callable records, Y held back (no phone, duplicate, US) with the join IDs for Peter. Calls begin [date Tan confirms], in batches over three days, between [hours]. Daily call-back list to Mobbs at 5:15pm. One question if any (couples rows). Under 150 words. Chris reads before it goes.

Update STATUS.md: tests logged, file state, batches, Monday email drafted. Push.
