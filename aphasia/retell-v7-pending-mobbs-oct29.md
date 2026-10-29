# Pending edit to Retell Draft V7: Mobbs's answers, Oct 29

**Not in Retell yet.** Needs Tan's go. Draft V7 is live on the number (nothing dials before Nov 4).
After applying in Retell, apply the same edits to aphasia/nora-prompt-retell-v7.md and aphasia/voicemail.md so they still match, then delete this file.

Source: Mobbs email, Oct 29, 9:15am.
1. "Yes, please update the voicemail to say, 'in the mail or through email'."
2. "I'd prefer to keep it as 'your support this year' for everyone rather than mentioning Talk, Walk 'n Roll by name."

## Edit 1: Retell voicemail field (Agent > Voicemail detection > leave message) AND prompt Voicemail section
Old: `Your annual appeal letter will be arriving in the mail soon.`
New: `Your annual appeal letter will be arriving in the mail or through email soon.`

## Edit 2: prompt, Step 2, PROGRAM-SPECIFIC GRATITUDE header
Old:
`PROGRAM-SPECIFIC GRATITUDE (use only when {{program_segment}} is exactly walk_and_roll or art_sale; otherwise use the lines above. Never name a program the file does not show.)`
New:
`PROGRAM-SPECIFIC GRATITUDE: OFF for Aphasia Institute. Always use the new / returning / lapsed / default lines above. Never name Talk, Walk and Roll or the art sale in the thank you, even if {{program_segment}} has a value. The lines below are kept for reference only. Do not say them.`

## Edit 3: prompt, Step 2, "for what?" recovery. Delete these two lines
`- walk_and_roll: "You supported Talk, Walk and Roll in June. We just wanted to say thank you."`
`- art_sale: "You supported the art sale last fall. We just wanted to say thank you."`
(lapsed and "anyone else" lines stay.)

## Edit 4: prompt, Critical Rules, Always line
Old: `Use {{program_segment}} once in gratitude, only if it is walk_and_roll or art_sale.`
New: `Never name a program in gratitude. {{program_segment}} only picks the Step 3 question.`

## Note
Art sale: Mobbs only spoke to Talk, Walk 'n Roll. Same logic applied to the art sale (no program names in the thank you). Step 3 program questions stay ("Did you get to come out on the day?" does not name the walk).

## Test rows to rerun after applying
Voicemail row, and any gratitude row with program_segment = walk_and_roll (expect "your support this year").
