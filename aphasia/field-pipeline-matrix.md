# Every field Nora uses: file → GHL → n8n → Retell → back to GHL

Oct 29. Why this exists: aphasia/test-plan.md (23 rows) tests the **prompt** with values typed into Retell. It does not test the **pipeline**. A field can be perfect in the prompt and still arrive empty because GHL doesn't have it or n8n doesn't pass it.

Legend: ✅ confirmed · ❌ missing · ? not checked yet

## 1. Fields going INTO the call (n8n Call Campaign → Retell dynamic variables)

### Same value for all 133 (set once in n8n or GHL, test once)
| Retell variable | Value | GHL field | n8n passes it? | If empty |
|---|---|---|---|---|
| organization_name | Aphasia Institute | organization_name ✅ | ? | Nora has no org name. Must never be empty |
| campaign_name | Aphasia Annual Appeal 2026 | campaign_name ✅ | ? | Fine. Never spoken |
| aphasia_office_number | 416-226-3636 | none | ? | Prompt has a fallback |
| aphasia_office_hours | Monday to Friday, eight to four | none | ? | Prompt has a fallback |

### Per donor, changes what Nora says
| Retell variable | Peter's file | GHL field | n8n passes it? | If empty, Nora... | Test persona |
|---|---|---|---|---|---|
| first_name | name (split) | First Name ✅ | ? | uses customer_name, or "a supporter of Aphasia Institute" | D |
| customer_name | name | full name ✅ | ? | see above | D |
| donor_segment | some donors | donor_segment ✅ | ? | default thank you, "your support this year" | B |
| program_segment | some donors | program_segment ✅ (Oct 22) | ? | base Step 3 question | B |
| gift_summary | some donors | **❌ no field** | ? | "I don't have that detail..." | B |
| last_gift_amount | some donors | last_gift_amount ✅ | ? | same | B |
| last_gift_date | some donors | last_gift_date ✅ | ? | says nothing | B |
| donor_email | where available | Email ✅ | ? | skips the email offer on landlines | C |
| preferred_channel | probably not | preferred_channel ✅ | ? | asks "text message, phone call, or email?" | A |
| consent_sms | probably not | **❌ no field** (mvp-field-map note) | ? | always asks SMS consent | E |
| line_type | not in file | line_type_confirmed ✅ (all = unknown) | ? | asks "Is this a cell phone?" | A |
| impact_statement | Mobbs (Fri) | **❌ no field** | ? | no impact line | B |
| appeal_delivery (new) | Peter, if he has it | **❌ appeal_channel** | **❌** | must never be empty, see appeal-channel-field.md | A, C |

### Per donor, read but barely used
| Retell variable | GHL field | n8n? | Note |
|---|---|---|---|
| last_name | Last Name ✅ | ? | not spoken |
| donor_id | **check exists** | ? | not spoken |
| language_preference | **check exists** | ? | English only for pilot |
| consent_call, consent_email | ✅ | ? | not spoken |
| dnd_sms, dnd_call, dnd_email | ✅ | ? | do-not-call donors are left out of the file, so always false |

## 2. Fields coming BACK from the call (Retell post-call → n8n "Retell Post Call → GHL Update" → GHL)

| Retell post-call field | In Retell? | Writes to (ghl/mvp-field-map.md) | n8n mapping |
|---|---|---|---|
| line_type_confirmed | ✅ Oct 27 | line_type_confirmed | ❌ draft only |
| sms_opt_in | ✅ Oct 27 | dnd_sms, preferred_channel, tag | ❌ draft only |
| email_opt_in | ✅ Oct 27 | consent_email | ❌ draft only |
| cell_number_provided | ✅ Oct 27 | phone_preferred | ❌ draft only |
| ai_opt_out | ✅ Oct 27 | ai_call_opt_status, dnd_call, tag | ❌ draft only |
| callback_requested | **❌ not in Retell** | needs a field. Feeds the call back list for Mobbs | ❌ |
| transfer_requested | **❌ not in Retell** | needs a field | ❌ |
| annual_ask_mentioned | **❌ not in Retell** | reporting only | ❌ |
| accessibility_flag | **❌ not in Retell** | reporting only | ❌ |
| notes (call back time, reason) | ? | needs a field for the call back list | ❌ |

## 3. What this means
1. **The n8n column is all "?".** Read Call Campaign and Retell Post Call (read only) to fill it. Needs Tan signed in to n8n.
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
