# Inbound call backs (donor calls 289-207-6218 back)

## What happens on the call (live, unchanged)
Retell agent "Aphasia - Inbound Forward to Office" (agent_98e466c65ff1a8d869a9bf9237) answers.
- Says: "Thanks for calling back. This line is for Aphasia Institute donor calls. Let me connect you to the office now, one moment."
- Cold transfer to +1 416-226-3636 ext 127 (Mobbs). No questions asked.
- If the transfer fails: gives the office number and hangs up.
Added to Peter's script doc Nov 2 (rev 24, section "If a donor calls the number back").

## The gap (found Nov 2)
The inbound agent had no webhook, and no n8n workflow listened for inbound calls. A call back left no trace in GHL.

## Tracking (n8n, built Nov 2, INACTIVE)
Workflow "Aphasia Inbound Call Back (DRAFT)", id y0QphncjgP6QVZTE. Webhook path: aphasia-inbound-call-back.
1. Retell webhook (call_ended only, inbound only. Other events stop at "Read call").
2. Read call: caller number, time (Toronto), length, outcome from disconnection_reason:
   - call_transfer = "Transferred to the office (ext 127)"
   - user_hangup = "Caller hung up before the transfer went through"
   - other transfer reasons = "Transfer did not connect"
3. GHL lookup by phone: GET /contacts/search/duplicate?locationId=...&number=...
4. No match = stop (not on the donor list).
5. Match = tag aphasia_called_back + a note on the contact.
GHL auth headers were cloned inside n8n from Aphasia Post Call. No token in this repo.

"Test with sample call" = fake call_ended from Tan H's cell. Writes to the Tan H test contact only.

## Tests
- Nov 2, 9:27am: sample run PASS. Tan H (QIG5MxqxgX3Vaq23ANYr) got tag aphasia_called_back and note "Donor called back on Mon, Nov 2, 9:27 a.m. (Toronto). Transferred to the office (ext 127). Call length 35s."

## To go live (needs Tan's go)
1. Activate the workflow.
2. Retell inbound agent > Webhook settings > Agent Level Webhook URL = https://automation.stewardli.ai/webhook/aphasia-inbound-call-back. This is a change to a published agent.
3. Real test call. Warning: a real call to 289-207-6218 transfers to Mobbs's line. Safe option: Tan calls from his cell and hangs up during the greeting (expect outcome "Caller hung up before the transfer went through").

## Not done
- Call backs are not in the 5:15pm email to Mobbs. She takes the transferred call herself, but a missed transfer is not reported anywhere except the GHL note.
- Tan H's test tag and note get removed when the test contacts are deleted.
