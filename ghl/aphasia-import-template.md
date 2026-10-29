# Aphasia import template (GHL MVP sub-account)

File: ghl/aphasia-import-template.csv. Two sample rows only (fake people, 555 numbers). Never commit real donor rows.
Tags added in the GHL import screen: client:aphasia, campaign:cmp_aphasia_appeal_26.

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
| campaign_name, campaign_id | campaign_* | fixed | Aphasia Annual Appeal 2026 / cmp_aphasia_appeal_26 |
| ai_call_opt_status | ai_call_opt_status | fixed | not_asked |
| line_type_confirmed | line_type_confirmed | fixed | unknown |

Never in the file: call_scheduled, retry_count, campaign_status, mailing address, notes, health details.

Open: GHL field to create: appeal_channel (dropdown mail, email, unknown). Check donor_id and language_preference exist.
