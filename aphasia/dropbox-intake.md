# Aphasia donor file: Dropbox intake (prompt H)

Oct 26, 2026. Replaces the Drive option in aphasia/intake-options.md. Dropbox was agreed on the Oct 26 call.
Nothing is imported until Tan says so in a session.

## 1. Dropbox setup

**Done Oct 26.** Account is tan.h@stewardli.ai on Basic (free). Request created, folder at top level with 0 items, Tan owner, chris.n@stewardli.ai can view. Deadline and password are locked on Basic, so Tan closes the request by hand when the file lands. The request link is not stored in this repo. Don't click "Copy link" on the folder, which would make a second, open link.

**Use a file request, not a shared folder link.** Peter's team can upload but cannot see the folder, other files, or anything else in the account. They don't need a Dropbox account.

| Setting | Value |
|---|---|
| Account | tan.h@stewardli.ai. Not the Tan & Fam account. Check the avatar, top right, before every step. |
| File request title | Aphasia Institute - Annual Appeal 2026 - Pilot Data |
| Destination folder | /Aphasia Institute - Annual Appeal 2026 - Pilot Data (top level, not inside a synced or shared folder) |
| Owner | Tan, only |
| Chris | Shared on the destination folder as **Can view**. Chris accepts on dropbox.com only, see rules below. |
| Link expiry | Deadline Fri Oct 30, 11:59 PM ET, late uploads off. Tan closes the request the minute the file lands, whatever the deadline says. |
| Password | Only if the plan offers it on file requests (paid plans). If it does, send it to Peter by a different channel from the link (text, not email). |
| Description shown to uploader | "Upload the 133-record pilot file here. Upload only. Do not email this file." |
| Deletion date | Sun Dec 6, 2026. Calendar reminder on Tan's and Chris's calendars, Dec 6, 9:00 AM. |

Plan checks (zero new spend, don't upgrade): if the account is on Basic, the deadline and password options may not show. Then the "expiry" is Tan closing the request by hand once the file is in. That is enough for one file.

## 2. Reply to Peter

> Hi Peter, once the agreement is signed, please have your data team upload the file here: [file request link]. It is upload only, lands in one folder only Chris and I can see, and closes Oct 30.
> Please send the link (and password, if there is one) only to the person uploading, and please don't email or forward the file itself.
> We will delete it on Dec 6, 2026 and confirm to you in writing once it's gone.

## 3. Handling rules (Tan and Chris)

- [ ] No forwarding. Not the file, not the link, not a screenshot of rows.
- [ ] No copies on personal devices. Chris accepts the share on dropbox.com, not the desktop app. If the desktop app is installed on either machine, set the folder to online-only or exclude it in selective sync.
- [ ] No upload to any AI tool other than the GHL import. That includes Claude, ChatGPT, Copilot and Gemini. Claude never opens the file.
- [ ] One working copy, only for the GHL import (see 4). Saved to a local folder that is not OneDrive-synced (for example C:\stewardli-tmp, not Documents, Desktop or Downloads if OneDrive backs them up). Deleted from that folder and the Recycle Bin the same day.
- [ ] Close the file request as soon as the file lands.
- [ ] Dec 6: Tan deletes the folder, then permanently deletes it from Deleted files (Dropbox keeps deleted files for 30+ days otherwise). Delete the 133 contacts from GHL too, unless Aphasia asks in writing to keep them.
- [ ] Dec 6: email Peter that it's done. Ask Peter to confirm his side.

## 4. GHL import plan (MVP sub-account, OnbXdLZ96GBLRMGz6JbC)

### What Mobbs says is coming (her reply, Oct 28)
Core on every record: name, address. Where available: phone, email. Only for some donors: last gift date, giving history, donor segment, designated program or campaign.

| Mobbs field | GHL field (ghl/mvp-field-map.md) | Plan |
|---|---|---|
| Name | First Name, Last Name (standard) | If it arrives as one "name" column, split before import. Nora's opener needs first_name |
| Address | none | **Not imported.** Not needed for the call. Stays in Dropbox only |
| Phone (where available) | Phone (standard) | Required for a call. Rows with no phone are left out and listed back to Peter with a count |
| Email (where available) | Email (standard) | Optional. Nora's landline email offer only runs when it is present |
| Last gift date (some) | last_gift_date | YYYY-MM-DD. Empty is fine |
| Giving history (some) | last_gift_amount | Last gift amount only, number. Full history not imported. Nora never volunteers it |
| Donor segment (some) | donor_segment | Map their labels to new / returning / lapsed. Empty is fine, Nora uses the default line |
| Designated program or campaign (some) | program_segment (new field) | Walk and Roll → walk_and_roll, art sale → art_sale, anything else or empty → none |

### Expected but not in her list
| Field | Why it matters | Ask |
|---|---|---|
| first_name as its own column | Opener and closing use it | Peter, or split ourselves |
| Phone on every row | "Where available" means some of the 133 may not be callable | Peter: how many of the 133 have a phone |
| consent_call | We need written confirmation all records agreed to phone contact | Peter, in writing, before import |
| consent_email, consent_sms | Nora asks SMS on the call anyway. Email opt in only if they have it | Peter, nice to have |
| Do not call / do not contact flags | Anyone flagged must be left out of the file | Peter: confirm flagged donors are removed |
| donor_id | Prompt reads it, not essential | Optional |
| language_preference | Prompt reads it, not essential | Optional |

The prompt (V9) treats every one of these as possibly empty.

We have not seen Peter's columns yet. Left column is what we expect. Fix it against the real header row, without opening any donor rows in an AI tool.

### Columns to import
| Peter's column (expected) | GHL field | Rule |
|---|---|---|
| First name | First Name (standard) | required |
| Last name | Last Name (standard) | required |
| Phone | Phone (standard) | required. +1XXXXXXXXXX format. Rows with no phone are left out and listed for Peter |
| Email | Email (standard) | optional |
| Donor ID | donor_id | check the field exists first, it is in the Nora prompt but not in ghl/mvp-field-map.md |
| Last gift amount | last_gift_amount | number only, no $ or commas. Nora never volunteers it |
| Last gift date | last_gift_date | YYYY-MM-DD |
| Segment (new / returning / lapsed) | donor_segment | values must match the dropdown exactly |
| Program (Walk and Roll / art sale) | program_segment | walk_and_roll, art_sale or none |
| Language | language_preference | check the field exists first |
| Phone consent | consent_call | from Peter. If his file has no column, Peter confirms in writing that all 133 agreed to phone contact before import |
| Email opt-in | consent_email | only if Peter has it |

### Columns added before import (same value on all 133 rows)
| Column | GHL field | Value |
|---|---|---|
| organization_name | organization_name | Aphasia Institute |
| campaign_name | campaign_name | Aphasia Annual Appeal 2026 |
| campaign_id | campaign_id | cmp_aphasia_appeal_26 |
| ai_call_opt_status | ai_call_opt_status | not_asked |
| line_type_confirmed | line_type_confirmed | unknown |

### Tags, added in the import screen
client:aphasia, campaign:cmp_aphasia_appeal_26

### Never imported
- **call_scheduled. Never import a value. If the file has a column that GHL suggests mapping to it, set it to "Don't import".**
- retry_count and campaign_status: leave blank too (same double-call bug fields).
- dnd_call, dnd_email, dnd_sms: not imported. Any donor Peter marks do-not-call is left out of the file entirely.
- Mailing address, full gift history, notes, dates of birth, and anything about health or aphasia programs a donor uses. Not needed for the call (consent checklist point 5).

### Before Tan says go
1. Check GHL workflows (read only) for any trigger on Contact Created, Tag Added client:aphasia or campaign:cmp_aphasia_appeal_26. Importing with a live trigger could start calls early. Tan decides what to do about any hit.
2. Confirm gift_summary and impact_statement: the Nora prompt reads them but no field is mapped. Find where n8n fills them.
3. Test import of one row: Tan's own contact, same tags, then delete it.
4. Import the 133. Check the count is 133, spot check 5 contacts, check call_scheduled is empty on all.
5. Delete the working copy (rules above).
