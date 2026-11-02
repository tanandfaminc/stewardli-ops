# Dec 6 deletion list and retry rule (DRAFT, Nov 1 2026)

Drafting only. Nothing here is built, logged into or changed. "check" = I am not sure the setting exists. Verify before promising it to Peter.

## 1. Dec 6 deletion list

Rule: before Dec 6, pull the pilot report numbers (counts only). On Dec 6, delete in the order below. Take proof after each row. Proof never contains a name or phone.

| Where | What is in it | Who deletes | How | Proof to keep |
|---|---|---|---|---|
| Drive: ORIGINAL file | Peter's full 57 column file (addresses, codes) | Tan | Drive > Clients > Aphasia. Delete file. Open Trash, delete forever. Check Shared drive trash too. | Screenshot of empty folder and empty trash, dated |
| Drive: working sheet and batch CSVs | join_id, first name, last initial, phone, email, gift date and amount, batch | Tan | Same. Also File > Version history is deleted with the file. Delete the folder itself last. | Same screenshot |
| Dropbox (PETER's, not ours) | The original file Peter shared with us | Peter | Not ours to delete. Ask Peter in the Dec 6 confirmation to remove the share or link on his side. Our side: check we have no Dropbox copy or synced download (covered by the local CSV row). | Peter's reply |
| Local CSVs on Tan's machine | Batch exports, any download | Tan | Delete the folder and empty Recycle Bin / Trash. Also check Downloads and any synced folder (check: search by file name). | Short note: folder path, date deleted |
| GHL MVP sub-account | Contacts (name, initial, phone, email, gift fields), notes, call back tasks, tags, conversation records | Tan | Smart list: tag client:aphasia. Select all > Delete contacts. This removes notes and tasks. Conversation records: check they go with the contact. Check GHL trash or backups. | Screenshot: count of client:aphasia contacts = 0 |
| Retell | Call recordings, transcripts, call analysis, phone number in each call record | Tan (Chris has billing) | Call history, filter agent Nora outbound, delete calls (check: bulk delete or API delete-call). Check: Data storage setting for retention, or opt out of storing recordings. | Screenshot of call history with the pilot date range empty. Retell's written answer on backups (check) |
| n8n: Aphasia Call Campaign, Aphasia Post Call, Aphasia Daily Call Back Email | Execution logs with payloads: names, phones, summaries, call back text | Tan | Executions > filter each workflow > delete all. Check the pruning setting (max age) so nothing is kept. Check: any DB backup of n8n. | Screenshot: 0 executions per workflow |
| n8n: Aphasia Inbound Call Back (added Nov 2) | Execution logs: caller phone, call time, matched contact name and ID. Also logs callers NOT on the donor list (phone only). | Tan | Same as the row above. Then deactivate the workflow and remove the webhook URL from the Retell inbound agent, so nothing new is logged. GHL tag aphasia_called_back and its notes go with the contacts in the GHL row. | Screenshot: 0 executions, workflow off |
| Gmail tan.h@stewardli.ai | Sent call back emails (first name, initial, phone, what they said) | Tan | Search to:misaac@aphasia.ca subject "call back requests". Delete, then empty Trash. Ask Mobbs to delete her copies (she owns them). | Screenshot of empty search, Mobbs reply |
| Twilio | Call logs for the Nora number (numbers called, times) | Tan | Console > Monitor > Logs > Calls. Check: can records be deleted in the console or only by API. Check: retention setting. | Screenshot or API delete result |
| Claude chats, Claude project, this repo | Must hold no donor data. Test contacts only (made-up names, team phones). | Tan | Search repo and project for the real file's join_ids and any real phone. Delete anything found. Git history too (check). | Search result "0 hits", date |

### Kept (no names, no phones)
Aggregate counts for the pilot report: rows received, callable, called, answered, voicemail, no answer, opt-outs, call backs requested, wrong number, household answered, text opt-ins, average call length, total cost. Test logs with made-up contacts. This deletion list and the proofs.

### Written confirmation to Peter (draft)
> Hi Peter, as promised, on Dec 6, 2026 we deleted the Aphasia Institute donor file and every copy we made of it: the original and working files, the call recordings, transcripts and call results, the contact records in our CRM, the automation logs, and the call back emails. We kept only aggregate counts for the pilot report, with no names or phone numbers. The file still sits in your Dropbox, so you may want to remove the shared link on your side.

### Open questions
1. Do Retell and Twilio let us set or force retention, or only delete by hand? Ask both for their backup and sub-processor retention in writing (check).
2. Does Aphasia want call results back before Dec 6? Chris told them results go to CanadaHelps. If yes, send a results file (first name, initial, outcome, call back flag) to Mobbs before deletion, in a way she approves. Decide with Chris.
3. Does "service-provider copies" include Retell's AI and voice vendors? Say what we can prove and what we rely on their policy for.
4. Peter said 133, file had 125. Count in the confirmation: say "the file" not a number.
5. Mobbs's inbox holds the call back emails. We cannot delete those. Ask her.
6. Late calls: if any donor asks for deletion earlier, do the same list for that contact.

## 2. Retry rule (proposal)

Today: no retries. A no answer gets Nora's voicemail and is never redialed.

| Option | What happens | Cost and risk |
|---|---|---|
| A. No retry | One call, one voicemail | Cheapest. Many donors never reached. Pilot proves less |
| B. One retry | Next calling day, after 2pm like all calls | About $0.09 a voicemail, $0.45 if answered. Low annoyance |
| C. Two retries | Second retry the day after | More reach. Two voicemails to one donor feels pushy for a thank-you |

**Recommend B.** A thank-you should not feel like chasing, and one retry at a different time covers most missed calls.

### Who gets a retry
- Yes: no answer. Voicemail left (Nora's voicemail counts as an attempt, not a result).
- Never: opt-out or DND Call TRUE, wrong number, household member answered, call back requested, completed call, call failed with an error (Tan checks those by hand), held rows (deceased, US).
- Cap: 1 retry. Max 2 attempts per donor in the pilot.

### Timing
- Updated Nov 2: Tan and Chris decide after day 1, from the list of donors not reached. Tan wants that list pulled after the last call of day 1.
- Retry the next calling day, Mon to Fri only. All calls go out after 2pm Toronto (Chris + Tan, Nov 2), so retries do too. To vary the time, retry later in the afternoon than the first try (first try 2pm, retry closer to 3:30pm).
- Out-of-province donors (Alberta, BC) are called at 5pm Toronto so they land around 2 to 3pm local. Their retries use the same 5pm run. Office is closed by then, so Nora offers a call back if they ask for a person.
- Friday batch 5 retries the next Monday. Never on weekends.
- Letter: the voicemail says the appeal "will be arriving". Mail date is Nov 5 or 6. Retries after it lands may sound wrong. Proposal: all retries done by Mon Nov 9. Ask Mobbs if she wants the voicemail to change for retries (check).

### What has to be built (needs Tan's go, NOT built)
1. Aphasia Post Call (live n8n): on no answer or voicemail, add tag aphasia_retry_pending. On a second no answer, add aphasia_attempt_2_done instead. Draft first, Tan applies.
2. GHL smart list "Aphasia retry due": tag aphasia_retry_pending, not aphasia_attempt_2_done, DND Call FALSE, no aphasia_institute_callback tag.
3. Daily by hand: Tan selects that list > Trigger automation > Aphasia Nora Calls in drip mode (same 3 minute stagger, after 2pm). Remove aphasia_call_now first because re-entry is on.
4. Do NOT use the existing "Call Retry - No Answer/Voicemail" workflow or tag stewardli_retry_needed. It was built for another agent and number, and Aphasia Post Call never feeds it.
5. Daily call back email: no change. Retry results go to the pilot report counts.
6. Test with two made-up contacts before use: no answer gets the tag, opt-out does not, second miss stops.

Decision for Tan: A, B or C? Needs Chris's yes if it changes call volume (25 a day plus retries).
