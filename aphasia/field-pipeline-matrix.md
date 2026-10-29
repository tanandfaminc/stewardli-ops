# Every field Nora uses: file → GHL → n8n → Retell → back to GHL

Oct 29. Why this exists: aphasia/test-plan.md (23 rows) tests the **prompt** with values typed into Retell. It does not test the **pipeline**. A field can be perfect in the prompt and still arrive empty because GHL doesn't have it or n8n doesn't pass it.

Legend: ✅ confirmed · ❌ missing · ? not checked yet

## n8n read, Oct 29, 10:20am (read only, nothing changed)
Workflows last edited Jun 12. Both active.

**1. Call Campaign does not call Nora for Aphasia.** It dials from +1 289 367 9557 with a different agent (agent_8612…), not the Aphasia Nora agent or the Nora number +1 289 207 6218. Sending the 133 through it today would call them with the wrong agent.
**2. Consent gate blocks everyone by default.** A call only goes out if consent_call = "TRUE" and dnd_call = "FALSE" (text, exact). Missing dnd_call counts as TRUE, so blocked. The import plan said "dnd not imported", which would block all 133. Both must be imported.
**3. Fields it does NOT pass to Retell:** program_segment, line_type, aphasia_office_number, aphasia_office_hours, appeal_delivery. Office and line_type have safe fallbacks in the prompt. program_segment now only picks a Step 3 question. appeal_delivery is new.
**4. gift_summary is built inside n8n** (computed_gift_summary), not a GHL field. Fine.
**5. Post-call already does:** call back → creates a GHL task (reads callback_requested, callback_time). Notes, outcome tags, wrong number.
**6. Post-call also auto-sends an SMS follow-up and auto-schedules retries.** Need to check what those do for Aphasia donors before Nov 4.
**7. Post-call does not write** line_type_confirmed, sms_opt_in, email_opt_in, cell_number_provided, ai_opt_out, transfer_requested.
**Fix, Oct 29 10:30am (Tan's call):** copied Call Campaign to a new workflow **"Aphasia Call Campaign (Nora, DRAFT)"** (id sWX7TOtq9yN9mQS9), **inactive**. Changes vs the original: Nora number +1 289 207 6218, Aphasia Nora agent, webhook path aphasia-call-campaign, and 5 more Retell variables: program_segment (default none), line_type (from line_type_confirmed, default unknown), aphasia_office_number, aphasia_office_hours (eight to four), appeal_delivery (mail → "in the mail", email → "by email", anything else → "in the mail or through email"). Original Call Campaign untouched (checked). Nothing triggers the new one yet.

**Fix 2, Oct 29 10:40am (Tan's call):** copied "Retell Post Call → GHL Update" to **"Aphasia Post Call (Nora, DRAFT)"** (id 0Vgd4a1zBZdWPyXb), **inactive**, webhook path aphasia-outbound-call-analysis. Original untouched (checked).
- Removed: SMS follow-up (would text "call us at +1 647 000 0000", a placeholder) and the retry branch (up to 2 redials after voicemail or no answer).
- Never sets call_scheduled. The original writes the call back time there, which is the double-call field. For Aphasia the Institute calls back, not Nora.
- Call back still creates a GHL task (Mobbs's list). Tag is aphasia_institute_callback instead of stewardli_callback_scheduled.
- Adds the 5 Nora fields: line_type_confirmed → line_type_confirmed. sms_opt_in yes → consent_sms TRUE, dnd_sms FALSE, preferred_channel sms, tag stewardli_consent_updated; no → consent_sms FALSE, dnd_sms TRUE. email_opt_in → consent_email TRUE/FALSE. cell_number_provided → phone_preferred. ai_opt_out → ai_call_opt_status opted_out_ai_calls, dnd_call TRUE, Call DND on, tag stewardli_dnd_requested.
- line_type_confirmed, phone_preferred, ai_call_opt_status are written by field key, not id. Confirm in the end-to-end tests that GHL accepts that.
- To go live: turn both drafts on, and point Nora's Retell webhook at /webhook/aphasia-outbound-call-analysis. Each needs Tan's go.

**8. Retell and GHL API keys are typed into the nodes**, not stored as n8n credentials. Not urgent for the pilot. Not copied here.


## 1. Fields going INTO the call (n8n Call Campaign → Retell dynamic variables)

### Same value for all 133 (set once in n8n or GHL, test once)
| Retell variable | Value | GHL field | n8n passes it? | If empty |
|---|---|---|---|---|
| organization_name | Aphasia Institute | organization_name ✅ | ✅ | Nora has no org name. Must never be empty |
| campaign_name | Aphasia Annual Appeal 2026 | campaign_name ✅ | ✅ | Fine. Never spoken |
| aphasia_office_number | 416-226-3636 | none | ❌ | Prompt has a fallback |
| aphasia_office_hours | Monday to Friday, eight to four | none | ❌ | Prompt has a fallback |

### Per donor, changes what Nora says
| Retell variable | Peter's file | GHL field | n8n passes it? | If empty, Nora... | Test persona |
|---|---|---|---|---|---|
| first_name | name (split) | First Name ✅ | ✅ | uses customer_name, or "a supporter of Aphasia Institute" | D |
| customer_name | name | full name ✅ | ✅ (built in n8n) | see above | D |
| donor_segment | some donors | donor_segment ✅ | ✅ | default thank you, "your support this year" | B |
| program_segment | some donors | program_segment ✅ (Oct 22) | ❌ | base Step 3 question | B |
| gift_summary | some donors | not needed, built in n8n from gift fields | ✅ | "I don't have that detail..." | B |
| last_gift_amount | some donors | last_gift_amount ✅ | ✅ | same | B |
| last_gift_date | some donors | last_gift_date ✅ | ✅ | says nothing | B |
| donor_email | where available | Email ✅ | ✅ | skips the email offer on landlines | C |
| preferred_channel | probably not | preferred_channel ✅ | ✅ | asks "text message, phone call, or email?" | A |
| consent_sms | probably not | **❌ no field** (mvp-field-map note) | ✅ passes it if sent | always asks SMS consent | E |
| line_type | not in file | line_type_confirmed ✅ (all = unknown) | ❌ (empty = unknown, which is the plan) | asks "Is this a cell phone?" | A |
| impact_statement | Mobbs (Fri) | **❌ no field** | ✅ passes it if sent | no impact line | B |
| appeal_delivery (new) | Peter, if he has it | **❌ appeal_channel** | **❌** | must never be empty, see appeal-channel-field.md | A, C |

### Per donor, read but barely used
| Retell variable | GHL field | n8n? | Note |
|---|---|---|---|
| last_name | Last Name ✅ | ✅ | not spoken |
| donor_id | **check exists** | ✅ | not spoken |
| language_preference | **check exists** | ✅ | English only for pilot |
| consent_call, consent_email | ✅ | ✅ | consent_call must be "TRUE" or the call is blocked |
| dnd_sms, dnd_call, dnd_email | ✅ | ✅ | dnd_call must be "FALSE" or the call is blocked. Import FALSE for all 133 |

## 2. Fields coming BACK from the call (Retell post-call → n8n "Retell Post Call → GHL Update" → GHL)

| Retell post-call field | In Retell? | Writes to (ghl/mvp-field-map.md) | n8n mapping |
|---|---|---|---|
| line_type_confirmed | ✅ Oct 27 | line_type_confirmed | ❌ draft only |
| sms_opt_in | ✅ Oct 27 | dnd_sms, preferred_channel, tag | ❌ draft only |
| email_opt_in | ✅ Oct 27 | consent_email | ❌ draft only |
| cell_number_provided | ✅ Oct 27 | phone_preferred | ❌ draft only |
| ai_opt_out | ✅ Oct 27 | ai_call_opt_status, dnd_call, tag | ❌ draft only |
| callback_requested | check Retell | creates a GHL task (with callback_time) | ✅ exists |
| transfer_requested | **❌ not in Retell** | needs a field | ❌ |
| annual_ask_mentioned | **❌ not in Retell** | reporting only | ❌ |
| accessibility_flag | **❌ not in Retell** | reporting only | ❌ |
| notes (call back time, reason) | ? | needs a field for the call back list | ❌ |

## 3. What this means
1. **n8n read Oct 29.** See findings at the top. Biggest: Call Campaign uses the wrong agent and number for Aphasia.
2. **Missing GHL fields:** gift_summary, consent_sms, impact_statement, appeal_channel, callback_requested, transfer_requested. Decide which the pilot needs (see below).
3. **Missing Retell post-call fields:** callback_requested, transfer_requested. Without these the call back list we promised Mobbs can't be built.
4. **Write-back mapping** for the 5 post-call fields is still draft only.

### Pilot minimum (suggestion, Tan decides)
Must have by Nov 2: n8n passes everything in section 1 that Peter's file has. appeal_delivery (or keep the "mail or through email" wording). callback_requested + notes end to end, for Mobbs's list. ai_opt_out write-back (compliance).
Can wait until after Nov 6: annual_ask_mentioned, accessibility_flag, impact_statement, transfer_requested as its own field.

## 4. End-to-end test personas
Real GHL contacts, Tan's own phone number, same tags as the pilot. Each one runs the real path: GHL → n8n → Retell call → post-call → GHL. Five calls cover filled and blank for every field instead of one row per field.

| Persona | Set in GHL | Covers |
|---|---|---|
| A. Full record, mobile, mail | every field filled, appeal_channel mail, line_type unknown | every variable arrives. Say "yes it's a cell", "yes" to texts. Check sms_opt_in writes back |
| B. Bare minimum | first name + phone only. Everything else blank | every blank fallback. Ask "how much did I give?" Check Nora never says "unknown" |
| C. Landline, email only, lapsed | appeal_channel email, donor_email set, segment lapsed | "by email" voicemail (let it go to voicemail on a second call). Email offer. Lapsed line, never "this year" |
| D. Full name only | first_name blank, full name set | opener fallback. Closing has no name |
| E. Wants a person after hours | base, dial after 4pm | call back offer. callback_requested and notes land in GHL. Then say "don't call me with AI". Check ai_opt_out writes back and dnd_call is true |

After each: check Retell post-call data AND the GHL contact. Delete the 5 test contacts after.
