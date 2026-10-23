# MVP sub-account: existing fields and what Nora writes to them

Read from GHL Settings > Custom Fields on Oct 22, 2026. 43 contact fields exist. Reuse before creating.

## Existing fields Nora uses
| Field key | Type | Nora use |
|---|---|---|
| consent_call | Radio | call consent |
| consent_email | Radio | email opt-in (yes/no) |
| dnd_call, dnd_email, dnd_sms | Radio | enforcement mirrors. SMS yes = dnd_sms false. Opt-out = dnd_call true |
| preferred_channel | Dropdown | sms / email / call after the branching step |
| phone_preferred | Phone | cell number donor gives on a landline call |
| donor_segment | Dropdown | new / returning / lapsed |
| call_outcome | Dropdown | post-call result |
| last_gift_amount, last_gift_date | Number, Date | from Peter's file |
| last_touch_ts | Date | set on every call |
| campaign_name, campaign_id | Text | Aphasia Annual Appeal 2026 / cmp_aphasia_appeal_26 |
| call_scheduled, retry_count, campaign_status | | double-call bug fields. Never import a value into call_scheduled |
| organization_name | Text | Aphasia Institute |

Note: no consent_sms field exists. Base Nora Step 5 must be writing dnd_sms or preferred_channel. Confirm in the n8n mapping before changing.

## New fields to create (3)
| Field | Type | Options | Folder |
|---|---|---|---|
| ai_call_opt_status | Dropdown single | not_asked, opted_in, opted_out_ai_calls | Additional Info |
| line_type_confirmed | Dropdown single | mobile, landline, unknown | Additional Info |
| program_segment | Dropdown single | walk_and_roll, art_sale, none | Additional Info |

## Tags
Existing convention: campaign:<id> and stewardli_<event>. stewardli_dnd_requested already exists and is the opt-out tag.
New: client:aphasia, campaign:cmp_aphasia_appeal_26

## Branching spec field mapping (replaces the names in aphasia/branching-spec.md)
| Spec name | Writes to |
|---|---|
| line_type_confirmed | line_type_confirmed (new) |
| sms_opt_in = yes | dnd_sms = false, preferred_channel = sms, tag stewardli_consent_updated |
| sms_opt_in = no | dnd_sms = true |
| email_opt_in | consent_email |
| cell_number_provided | phone_preferred |
| ai_opt_out = true | ai_call_opt_status = opted_out_ai_calls, dnd_call = true, tag stewardli_dnd_requested |
