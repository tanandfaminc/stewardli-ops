# Call brief: Aphasia donor file, Fri Oct 30, 10:30am, 30 min

With Mobbs. Tan and Chris. Tan sends the invite.
Goal: leave knowing exactly what is in the 133-record file, so the GHL import and Nora's calls (Nov 4 to 6) work with no surprises.

## Invite text (what Mobbs sees)

> 30 min to go through the donor file before Nora's calls on Nov 4 to 6:
> - Which fields are in the file and which may be missing (phone, email, gift date, segment, program)
> - Of the 133, how many have each field filled in
> - Consent to phone contact and do-not-call removals
> - How names are formatted (first and last split)

## Our prep (not for Mobbs)

Draft V7 is what dials. It reads these fields. Ask in this order. The top block breaks calls if it's wrong.

### 1. Must have, or the call breaks (10 min)
| Ask | Why | Nora field |
|---|---|---|
| How many of the 133 have a phone? Cell or landline, if they know | No phone = no call. Line type sets the first question Nora asks | phone, line_type |
| First and last name in separate columns? Any "Mr and Mrs" or couples on one row? | Opener says "Am I speaking with [first name]?" A couple row breaks it | first_name, last_name |
| Have all 133 agreed to phone contact? Written confirmation from Peter | Our compliance line. No column = Peter confirms in writing before import | consent_call |
| Do-not-call, deceased, moved, or "do not contact" donors removed from the file? | We never import a do-not-call flag. They must be left out | (left out) |
| Any donors who prefer French or another language? | Nora calls in English only. Leave them out or flag them | language_preference |

### 2. Shapes what Nora says (10 min)
| Ask | Why | Nora field |
|---|---|---|
| How do they define new / returning / lapsed? What labels does their system use? | Picks the thank you line ("your first gift" vs "your continued support" vs "past support"). Lapsed must never hear "this year" | donor_segment |
| Gift info: one "last gift amount" column, or a giving history text? | Nora answers "how much did I give?" once, only if asked, only from this | last_gift_amount, gift_summary |
| Last gift date format | Nora says it only if asked | last_gift_date |
| Program or campaign column: what values appear? | Program names are off in the thank you (Mobbs, Oct 29). Still used to pick the Step 3 question. Mapped to walk_and_roll / art_sale / none | program_segment |
| **Who gets the appeal by mail and who by email? Can Peter add a column?** Anyone getting both? | Voicemail will say "in the mail" or "by email" per donor (aphasia/appeal-channel-field.md). Today it says both | appeal_channel (new) |
| Email on file: how many? Do they want email opt-in recorded? | Landline donors get "Would email be okay instead?" only when there is one on file | donor_email, consent_email |
| Any SMS consent already on file? | If yes, Nora skips the text message question | consent_sms |
| Is there one impact line they'd like Nora to say? (e.g. "no one is turned away for not being able to pay") | Prompt supports it. Currently empty. Must be a fact they stand behind | impact_statement |

### 3. Tell Mobbs, get a yes (5 min)
- **Call back list.** After-hours and "talk to a person" requests become a call back list for the Institute. Agree: who gets it (Mobbs?), how (daily email?), and by when after each calling day. **We have not built this yet.** Get the format so we can.
- **Holidays.** Nora can't tell a holiday from a regular day. None in Nov 4 to 6, so fine for the pilot.
- **Calling hours.** Confirm which hours Nora dials (we have not set this with her).
- **Mail date.** Letter goes out Nov 5 or 6? Email version, same day? Nora says "arriving in the mail or through email soon," so calls should not run long after.
- **Address.** Fine to send, we won't import it and Nora never reads it.

#- **Voicemail to lapsed donors** says "your support this year". OK, or a lapsed version ("your past support")?

## 4. Logistics (5 min)
- Who uploads (Peter's data team) and when. File request is ready, waiting on COI and NDA.
- Column headers only, by email before upload, if they can. Lets us build the import mapping without opening donor rows.
- Delete date Dec 6, written confirmation to Peter.

## Do not reopen
Not a fundraising call. No gift amounts volunteered. "Annual appeal", not "campaign". Program names off. Voicemail wording set. Office hours 8 to 4, ext 127.

## After the call
- Update aphasia/dropbox-intake.md import table with the real columns.
- If segment labels or program values differ, add the mapping there.
- If impact line given, add to pending Retell edits (needs Tan's go).
