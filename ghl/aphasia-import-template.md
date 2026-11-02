# Aphasia import template (GHL MVP sub-account)

## OFFICIAL format, Nov 1 2026 8:55pm (Tan's working sheet)
Headers use GHL field display names, so the GHL import maps them by itself (tested Nov 1 with 3 test rows: 18 of 18 auto-mapped).
`Donor ID, First Name, Last Name, Phone, Email, appeal_given, Last Gift Date, Last Gift Amount, batch, Consent Call, DND Call, DND SMS, DND Email, Organization Name, Campaign Name, AI Call Opt Status, Line Type Confirmed, Program Segment, Appeal Channel, Tags`
- Donor ID = join_id (A001...). Last Name = last initial only. Last Gift Amount = file's LG_AMT.
- appeal_given and batch stay in the sheet, NOT imported: tick "Don't import data in 2 unmapped columns".
- Fixed on every row: Consent Call TRUE, DND Call/SMS/Email FALSE, Organization Name "Aphasia Institute", Campaign Name "Aphasia Annual Appeal 2026", AI Call Opt Status not_asked, Line Type Confirmed unknown, Program Segment none, Appeal Channel unknown, Tags "client:aphasia,campaign:cmp_aphasia_appeal_26,stewardli_campaign_started".
- Import mode: **Create contacts** (not create and update). No workflow, no extra tags in the import screen. Never add aphasia_call_now in the file.
- Tan ticks GHL's consent attestation box himself (rests on Peter's written consent confirmation).
- Campaign ID is not in the file: stays blank so Donor Campaign ends.

## Older notes (superseded headers below)

File: ghl/aphasia-import-template.csv. Two sample rows only (fake people, 555 numbers). Never commit real donor rows.
Tags added in the GHL import screen: client:aphasia, campaign:cmp_aphasia_appeal_26, **stewardli_campaign_started** (keeps contacts out of Donor Campaign). Calling starts only when the tag aphasia_call_now is added.

| Column | GHL field | From | Rule |
|---|---|---|---|
| first_name, last_name | standard | Peter | split if one "name" column. One person per row, no "Mr and Mrs" |
| phone | standard | Peter | +1XXXXXXXXXX. No phone = row left out, listed back to Peter |
| email | standard | Peter | optional |
| donor_id | donor_id (check exists) | Peter | optional |
| last_gift_amount | last_gift_amount | Peter | number only. Nora never volunteers it |
| last_gift_date | last_gift_date | Peter | YYYY-MM-DD |
| donor_segment | donor_segment | Peter | new / returning / lapsed exactly, or blank |
| program_segment | program_segment | Peter | walk_and_roll / art_sale / none, or blank |
| appeal_channel | **appeal_channel (to create)** | Peter, if he has it | mail / email, or blank |
| language_preference | language_preference (check exists) | Peter | optional |
| consent_call | consent_call | Peter's written confirmation | **TRUE** on every row, or n8n blocks the call |
| consent_email | consent_email | Peter | TRUE / FALSE / blank |
| consent_sms | consent_sms | Peter | usually blank. Nora asks |
| dnd_call, dnd_sms, dnd_email | dnd_* | fixed | **FALSE** on every row, or n8n blocks the call |
| organization_name | organization_name | fixed | Aphasia Institute |
| campaign_name | campaign_name | fixed | Aphasia Annual Appeal 2026 |
| campaign_id | campaign_id | fixed | **leave BLANK.** If set, Donor Campaign (Contact Created) can dial with the wrong agent |
| ai_call_opt_status | ai_call_opt_status | fixed | not_asked |
| line_type_confirmed | line_type_confirmed | fixed | unknown |

Never in the file: call_scheduled, retry_count, campaign_status, mailing address, notes, health details.

Open: GHL field to create: appeal_channel (dropdown mail, email, unknown). Check donor_id and language_preference exist.
