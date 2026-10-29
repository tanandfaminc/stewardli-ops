# STATUS: read this first

Last updated: Wed Oct 28, 2026, 10:55pm ET. Update this file at the end of every session that changes anything.

## Where we are
Aphasia Institute pilot signed Oct 26. Nora calls 133 donors Nov 4 to 6. Appeal letter mails Nov 5 or 6. Everything else is in service of that until Nov 6.

## Live systems, current state
| System | State | Changed by |
|---|---|---|
| Retell agent "Aphasia - Nora (outbound)" | **Live calls run on Draft V7.** The outbound number is attached to Draft V7, not to a published version. Last published is V6 (Oct 15, 11:21 PM). V6 and V7 prompts are identical and match aphasia/nora-prompt-live.md. The Oct 16 call to Mobbs ran V7 (see aphasia/v7-mobbs-call-review.md). Editing the draft changes live calls. **Oct 27, 10:34 to 10:42: V8 prompt, V8 voicemail and 5 post-call fields (line_type_confirmed, sms_opt_in, email_opt_in, cell_number_provided, ai_opt_out) entered in Draft V7.** Tan OK'd this because nothing dials before Nov 4. Not published. The number now calls with V8. | Claude via Chrome, Oct 27, Tan's go-ahead |
| Retell agent "Aphasia - Inbound Forward to Office" | Live, transfers to 416-226-3636 ext 127 | Tan, Oct 14 |
| GHL MVP sub-account | 3 new fields (ai_call_opt_status, line_type_confirmed, program_segment) + 2 tags (client:aphasia, campaign:cmp_aphasia_appeal_26) created Oct 22. No workflows changed. No contacts imported. | Claude via Chrome, Oct 22 |
| n8n | Unchanged. SMS consent mapping still unverified (see ghl/mvp-field-map.md note). | |
| Twilio | Unchanged. Billing owner unverified. | |
| Dropbox tan.h@stewardli.ai (Basic, free) | File request "Aphasia Institute - Annual Appeal 2026 - Pilot Data" open, no deadline or password (Basic). Folder of same name, 0 items. Tan owner, chris.n@stewardli.ai can view. No shared link. | Tan + Claude via Chrome, Oct 26 |

## Decisions locked (do not reopen without Chris)
- No phone append. Call all 133, no A/B split. Pilot proves experience and ops, not gift lift.
- No Twilio Lookup. Nora asks "is this a cell phone?" on the call.
- Pilot runs on the MVP sub-account with a tag. Separate sub-account after Nov 6.
- Voicemail on no-answer: on (Paul's ask). Wording: Mobbs's Oct 28 edit, see aphasia/voicemail.md.
- Office hours Mon to Fri 8 to 4 (Mobbs, Oct 28). Person requests go to ext 127. After hours Nora offers an Institute call back, never "leave a message".
- Gratitude default is "your support this year". Program named only when the record shows it. Campaign name never spoken.
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
| Mobbs reply received Oct 28 (aphasia/mobbs-reply-2026-10-28.md). V9 drafted: aphasia/nora-prompt-v9.md, plain English diff in aphasia/v9-changes.md | Tan | Read v9-changes.md and say go. Then V9 into Retell Draft V7 in a separate step |
| Send reply to Mobbs (aphasia/reply-to-mobbs-draft.md). Fill Friday time | Tan | nothing |
| Mobbs Q1: do email-only donors get a letter? (voicemail "or through email") | Mobbs | Tan's reply |
| Mobbs Q2: OK to say Talk, Walk 'n Roll by name when the record shows it? | Mobbs | Tan's reply |
| Peter: how many of 133 have a phone, consent to phone contact in writing, DNC removed, name split (see aphasia/dropbox-intake.md) | Peter | Friday fields call |
| Call back list: callback_requested now means the Institute calls back. Route it to Mobbs | Tan | not built |
| Confirm live transfer tool on outbound agent | Tan | before Nov 4 |
| Add V9 test rows (after hours 3:55/4:05/Sat, empty program, empty first_name, empty gift record) to aphasia/test-plan.md | Tan + Claude | V9 in draft |
| Caller ID for Nora number +1 289 207 6218: unbranded today (only Stewardli main is branded, as "Stewardli.ai"). Pick an option in aphasia/nora-number-check.md | Tan | Decide before Nov 4 |
| Test Retell V8 by phone (aphasia/test-plan.md, 15 rows, log in aphasia/test-log-2026-10-26.md) | Tan + Claude | V8 is in Draft V7. Must finish before Nov 2 |
| n8n: map the 5 new post-call fields to GHL (see ghl/mvp-field-map.md) | Tan approves | Draft only. Live workflow |
| Publish V9 and keep the number on it | Tan | V9 approved, tests passing |
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
| F | Build and test Retell V8 | **run today** |
| G | Twilio billing audit | run today, parallel |
| H | Dropbox intake | done Oct 26, see aphasia/dropbox-intake.md. Nothing imported |
| I | Nov 1 in-person prep | done Oct 28, see agenda-nov1-inperson.md |
| J | Mobbs reply into V9 | done Oct 28, V9 drafted, not in Retell |

## Folder map
- aphasia/ ... everything for the pilot: live prompt, v8 draft, branching spec, voicemail, test plan, intake options, pilot stats and recommendation, phone append research
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
