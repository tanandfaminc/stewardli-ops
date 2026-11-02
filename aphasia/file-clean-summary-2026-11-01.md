# Aphasia donor file: clean summary, Sun Nov 1, 2026

Source: Peter's file, received via Dropbox Oct 30, moved to Google Drive (stewardli.ai), Clients > Aphasia. Original kept untouched as "ORIGINAL - do not edit". Working copy "working - 2026-11-01". Cleaned by Tan in Sheets. No donor row was pasted into any AI tool.

## Counts
| | |
|---|---|
| Rows received | 125 (Peter said 133) |
| Held, deceased (DECEASED = Yes, also NOVALID_AD = Yes) | 1, join_id A071 |
| Held, United States | 1, join_id A001 |
| Review, first name is an initial only | 1, join_id A103 (needs first name from Peter or Mobbs, else skip) |
| Couples on one row | 2 (first listed name used) |
| **Callable** | **123** |

## What was in the file
57 columns, mail-house merge format. Kept 10. Deleted without reading: address lines, codes (CODE_JOB, CODE2 to CODE9), comments, org address, mail package and list fields.
- No constituent ID (CNBIO_ID blank). join_id is the only key. Match back to Peter by first name + last initial + phone.
- SEGMENT: same value on all rows ("Donors with Phone Numbers"). Dropped. donor_segment blank in GHL, Nora uses the default thank-you.
- SOL_CODE (salutation): blank. No Mr/Mrs available.
- APPEAL1: 52 "4345 - 24/25", 10 "4210 - 24/25", 1 "4222 - 23/24", 29 "Talk, Walk 'n Rol", 3 "General Fund", 30 blank. Kept as appeal_given for reporting only, not imported. Nora never names a program.
- LG_DATE: mixed formats, normalized to YYYY-MM-DD month-first. One junk value ("2025/2026") blanked. Most dates are May/June 2024, so most of these donors have not given in 18 months.
- LG_AMT kept as largest_gift_amount (it is the last gift, the file has no "largest"). Nora only says it if asked.
- Phone on all 125 rows, normalized to +1XXXXXXXXXX.

## Final columns
join_id, first_name, last_initial, phone, email, appeal_given, last_gift_date, largest_gift_amount, batch, tags

## Batches (25 a day, Mon to Fri, geographic order east to west)
| Batch | Day | Rows | Area |
|---|---|---|---|
| 1 | Mon | 25 | Quebec, Ottawa, Durham, Markham, Thornhill, Richmond Hill, Vaughan, Mississauga |
| 2 | Tue | 25 | Brampton, Oakville, Barrie, Scarborough, Toronto |
| 3 | Wed | 25 | Toronto, North York |
| 4 | Thu | 25 | Toronto, North York |
| 5 | Fri, afternoon only | 23 | Toronto, Etobicoke, southwest Ontario, Winnipeg, BC (Langley, New Westminster, Sechelt) |

Batch 5 dials in the afternoon: 9am Toronto is 6am in BC.

**Batch 5 = two separate drip runs (agreed Nov 2):** first ~20 Ontario rows at 2pm Toronto; the out-of-province rows (Alberta, BC, Winnipeg if any) at 5pm Toronto, so they land around 2 to 3pm local. Same steps each run: select the rows in GHL → Trigger automation → Aphasia Nora Calls → drip mode, batch 1, every 3 minutes, start time.

**All batches:** start after 2pm Toronto (Chris, Nov 2).

## Not yet done
- Import mapping to GHL field keys (needs the 2-row test import first)
- Export per batch to CSV in a non-synced local folder, one batch per calling day
- Start date from Chris
