# AI Call Opt-Out Guardrail

If a donor says stop, Nora never calls again. This is the whole design.

## GHL custom fields

| Field | Type | Values |
|---|---|---|
| ai_call_opt_status | Dropdown | not_asked (default), opted_in, opted_out_ai_calls |
| ai_call_opt_date | Date | Date of the opt-out or opt-in |
| ai_call_opt_source | Text | Retell call id |

## Retell post-call variable

- Name: ai_opt_out (boolean)
- Instruction: "Set true if the donor said anything like don't call me, no more AI calls, remove me, stop calling, or asked not to be contacted by an automated system."

## n8n mapping (outbound-call-analysis-webhook-donor)

| Webhook field | GHL target |
|---|---|
| analysis.custom_analysis_data.ai_opt_out = true | ai_call_opt_status = opted_out_ai_calls |
| call date (today) | ai_call_opt_date |
| call.call_id | ai_call_opt_source |
| same condition | add tag ai-opt-out |
| same condition | set DND on for Calls |

If ai_opt_out is false or missing, change nothing. Never overwrite opted_out_ai_calls back to another value from n8n. Only a human can reverse it.

## Campaign exclusion rule

Every outbound campaign filter must exclude ai_call_opt_status = opted_out_ai_calls. Check this before each batch, including the Nov 2 to 6 Aphasia run. Also exclude tag ai-opt-out as a second net.

The tag and DND are there so a human sees it on the contact without opening custom fields.

## What Mobbs sees in the report

| Column | Example |
|---|---|
| AI opt-out | Yes / No |

Show the opt-out date next to it when Yes. Count opt-outs in the summary line.

## Nora prompt line

"If the donor asks not to be called or contacted by an automated system, do three things. Acknowledge the request kindly. Confirm they will not be called by Nora again. End the call warmly and briefly."
