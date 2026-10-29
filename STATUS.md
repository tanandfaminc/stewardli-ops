# STATUS: read this first

Last updated: Wed Oct 28, 2026, 11:20pm ET. Update this file at the end of every session that changes anything.

## Where we are
Aphasia Institute pilot signed Oct 26. Nora calls 133 donors Nov 4 to 6. Appeal letter mails Nov 5 or 6. Everything else is in service of that until Nov 6.

## Live systems, current state
| System | State | Changed by |
|---|---|---|
| Retell agent "Aphasia - Nora (outbound)" | **Live calls run on Draft V7** (number set to "Latest Created"). Draft V7 = aphasia/nora-prompt-retell-v7.md (Mobbs's Oct 28 edits) + Mobbs's voicemail + 5 post-call fields (line_type_confirmed, sms_opt_in, email_opt_in, cell_number_provided, ai_opt_out). Entered Oct 27 and Oct 28, 11:10pm, Tan's go-ahead (nothing dials before Nov 4). **Not published.** Last published is V6 (Oct 15) = aphasia/nora-prompt-retell-v6.md. The Oct 16 call to Mobbs ran Draft V7 while it still held the V6 prompt (aphasia/v7-mobbs-call-review.md). Editing the draft changes live calls. | Claude via Chrome, Oct 27 and 28 |
| Retell agent "Aphasia - Inbound Forward to Office" | Live, transfers to 416-226-3636 ext 127 | Tan, Oct 14 |
| GHL MVP sub-account | 3 new fields (ai_call_opt_status, line_type_confirmed, program_segment) + 2 tags (client:aphasia, campaign:cmp_aphasia_appeal_26) created Oct 22. No workflows changed. No contacts imported. | Claude via Chrome, Oct 22 |
| n8n | Unchanged. SMS consent mapping still unverified (see ghl/mvp-field-map.md note). | |
| Twilio | Unchanged. Billing owner unverified. | |
| Dropbox tan.h@stewardli.ai (Basic, free) | File request "Aphasia Institute - Annual Appeal 2026 - Pilot Data" open, no deadline or password (Basic). Folder of same name, 0 items. Tan owner, chris.n@stewardli.ai can view. No shared link. | Tan + Claude via Chrome, Oct 26 |

## Version rule (from Oct 28)
Retell's version number is the only version number. One repo file per Retell version: aphasia/nora-prompt-retell-vN.md. Retell's version title says which repo file it matches.
- V6 (published Oct 15) = aphasia/nora-prompt-retell-v6.md
- Draft V7 (live on the number, not published) = aphasia/nora-prompt-retell-v7.md
- When V7 is published, Retell opens Draft V8. Any later edit goes in aphasia/nora-prompt-retell-v8.md.
- Old names: "v8" and "v9" in notes before Oct 28 were repo drafts. v9 = Retell V7. See aphasia/archive/README.md.

## Decisions locked (do not reopen without Chris)
- No phone append. Call all 133, no A/B split. Pilot proves experience and ops, not gift lift.
- No Twilio Lookup. Nora asks "is this a cell phone?" on the call.
- Pilot runs on the MVP sub-account with a tag. Separate sub-account after Nov 6.
- Voicemail on no-answer: on (Paul's ask). Wording: Mobbs's Oct 28 edit, see aphasia/voicemail.md.
- Office hours Mon to Fri 8 to 4 (Mobbs, Oct 28). Person requests go to ext 127. After hours Nora offers an Institute call back, never "leave a message".
- Gratitude default is "your support this year". Program named only when the record shows it. Campaign name never spoken.
- Nora number +1 289 207 6218 stays unbranded for the pilot (Tan, Oct 28). Revisit "Aphasia Institute" Branded calling after Nov 6, see aphasia/nora-number-check.md.
- Never volunteer gift amounts. Answer from giving history only if the donor asks. (Chris, Oct 26)
- "Annual campaign" becomes "annual appeal" everywhere. (Mobbs)
- Donor file arrives via Dropbox after NDA + Chris's COI. Delete Dec 6.

## Open, who owns it
| Item | Owner | Blocked on |
|---|---|---|
| Sign COI + confidentiality agreement | Chris | nothing, today |
| Confirm mail date | Peter | EOD Oct 27 |
| Send 133-record file via Dropbox | Peter's data team | COI signed |
| Segmentation plan | Peter | to Paul and Mobbs |
| Reply to Mobbs **sent Oct 28, 10:59pm**. Offered Fri 45 min, 9 to 11am or 4 to 5pm, for the file fields call | Mobbs | her answer on Q1, Q2 and Friday time |
| Mobbs Q1: do email-only donors get a letter? (voicemail "or through email") | Mobbs | Tan's reply |
| Mobbs Q2: OK to say Talk, Walk 'n Roll by name when the record shows it? | Mobbs | Tan's reply |
| Peter: how many of 133 have a phone, consent to phone contact in writing, DNC removed, name split (see aphasia/dropbox-intake.md) | Peter | Friday fields call |
| Call back list: callback_requested now means the Institute calls back. Route it to Mobbs | Tan | not built |
| Confirm live transfer tool on outbound agent | Tan | before Nov 4 |
| Test Retell Draft V7 by phone (aphasia/test-plan.md, 23 rows; rows 16 to 18 at real clock times 3:55pm, 4:05pm, Saturday; log in aphasia/test-log-2026-10-26.md) | Tan + Claude | Must finish before Nov 2 |
| n8n: map the 5 new post-call fields to GHL (see ghl/mvp-field-map.md) | Tan approves | Draft only. Live workflow |
| Publish Draft V7, then point the number at the published V7 (check Phone Numbers right after) | Tan | Tests passing |
| Twilio billing owner | Tan | prompts/G |
| Send reply to Peter with file request link | Tan | Chris's COI + NDA signed. Draft in aphasia/dropbox-intake.md |
| Dec 6 delete reminder on Tan's and Chris's calendars | Tan | |
| Nov 1 in-person: fill hours table and section E in agenda-nov1-inperson.md | Tan | before Sun Nov 1 |
| Retell billing admin or invoice screenshot | Chris | |
| GHL plan and amount | Chris | |
| Nora demo repo access | Chris | since Oct 20 |
| Costing numbers to Tan and Fred | Chris | overdue |

## Prompts and what they are for
| Prompt | Use when | Status |
|---|---|---|
| A | Aphasia pilot build, original brief | superseded by F |
| B | Cost report from exports | actuals pulled Oct 23, see cost-report/actuals |
| C | LinkedIn prospecting tool | Chris's, parked |
| D | GHL sub-account for Aphasia | parked until after pilot |
| E | Pilot design pressure test | done, see aphasia/pilot-recommendation.md |
| F | Build and test the new Nora prompt | prompt in Retell Draft V7, phone tests Oct 29 |
| G | Twilio billing audit | run today, parallel |
| H | Dropbox intake | done Oct 26, see aphasia/dropbox-intake.md. Nothing imported |
| I | Nov 1 in-person prep | done Oct 28, see agenda-nov1-inperson.md |
| J | Mobbs reply into the prompt | done Oct 28, in Retell Draft V7, not published |

## Folder map
- aphasia/ ... everything for the pilot: nora-prompt-retell-vN.md (one per Retell version), archive/ (old v8/v9 drafts), branching spec, voicemail, test plan, intake options, pilot stats and recommendation, phone append research
- compliance/ ... CRTC/CRA/PIPEDA spec for reminder calls (Feb), applies partly to Aphasia
- cost-report/ ... cost model (list prices), actuals/ (Retell and Twilio pulled Oct 23)
- ghl/ ... field map for MVP sub-account, opt-out field design
- research/ ... RKD consent model (nothing public, use the checklist instead)
- prompts/ ... A to I
- Root: today-YYYY-MM-DD.md is the daily list, call-brief-*.md is prep for a specific call, timeline-oct23-to-feb.md is the plan, agenda-* are meeting agendas

## Session rules
1. `git pull` before you start. `git push` when you stop. Main only, no branches unless it's code.
2. Update STATUS.md "Live systems" and "Open" tables before you push if you changed anything.
3. Nothing goes into Retell or GHL live without Tan saying so in that session. Drafts go in the repo.
4. No account SIDs, API keys, call recordings, donor rows. GitHub push protection will block you anyway.
5. Meeting analyses live in the Claude project "Stewardli Partnership", not here. This repo is for what we build and decide.
