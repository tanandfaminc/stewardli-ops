# Prompt L: guide Tan through cleaning the Aphasia donor file (Tan does every step)

Read STATUS.md, meetings-digest-oct27-31.md, aphasia/mobbs-call-2026-10-30.md, aphasia/dropbox-intake.md section 4, ghl/mvp-field-map.md.

Hard rule: you never see a donor row. Tan works in Google Sheets on his machine. He sends you only column headers, counts, and distinct values of non-identifying columns (segment labels, appeal labels, city names). If he pastes a row by accident, say so and do not use it. Do not open Google Drive, Dropbox, or any file. Do not write a script that reads the file. This is a guided checklist, one step at a time, multiple choice for decisions.

Fields to keep (Chris, Oct 31, plus Mobbs Oct 30): join_id, first_name, last_initial, phone, largest_gift_amount, appeal_given, email if present. Nothing else. No address, no combined name, no program or health info. Chris stays in the file as a real row. US numbers held back. Original untouched.

Walk Tan through, waiting for his answer at each step:

1. Confirm the Drive location (folder name only) and that an untouched copy named "ORIGINAL - do not edit" exists and a working copy is open.
2. Ask for the header row and the row count. Map each header: keep as-is, keep and transform, or drop. Show the map as a table. Ask Tan to confirm before he deletes anything.
3. Give the Sheets formulas, one per column, for: join_id (A001 pattern), last_initial from last name, phone normalized to +1XXXXXXXXXX (handle 10-digit, 11-digit with 1, dashes, spaces, parentheses), largest_gift_amount as a plain number. Tell him to paste values after each formula and delete the source column.
4. Checks, one at a time. For each, give the filter or formula and ask for the count only: blank phone; non +1 or US area code (give him the Canadian area code list to check against); duplicate phone; two names in the first name cell; any do-not-call or opt-out column set. Each flagged row moves to a "held" or "review" tab by join_id. Chris's row: ask for its join_id, keep it.
5. Batches. Ask: 2 or 3 batches. Ask whether a city column exists. Give the sort and the batch column rule. Target sizes roughly equal.
6. Import template. Give the exact GHL column headers from ghl/mvp-field-map.md and aphasia/dropbox-intake.md section 4 (standard fields plus custom field keys), and the constant columns: tags "client:aphasia,campaign:cmp_aphasia_appeal_26,stewardli_campaign_started", campaign_id blank, consent_call TRUE, program_segment none. Never include aphasia_call_now or call_scheduled. One CSV per batch, saved to a local folder that is not synced to Drive or OneDrive.
7. Summary for Chris and for the Monday email: total rows, callable, held by reason with join_ids, review count, batch sizes. Tan supplies the numbers, you format it. Save as aphasia/file-clean-summary-2026-11-01.md with counts and join_ids only, no names, no phones.
8. Ask Tan to confirm the working copy has no address column left and no full last names before anything is imported.

Update STATUS.md: file cleaned, batch sizes, held count, import not yet done. Push.
