# Prompt D: GHL sub-account for Aphasia

Set up the GoHighLevel sub-account for the Aphasia Institute pilot inside Stewardli's agency account. Tan drives the GHL UI (or Claude in Chrome does, with Tan watching). You plan, generate exact field specs and workflow logic, and give click-by-click steps. Rules in CLAUDE.md.

Work as an orchestrator. Agent tool with model "sonnet" to draft the field schema and workflow logic, model "haiku" for click lists and the import CSV template. Verify against the existing Stewardli sub-account before anything is created.

Deliverables:
1. Decision memo, half a page: snapshot the Stewardli sub-account vs fresh build. Recommend one.
2. Custom fields for the Aphasia contact: program_segment (walk_and_roll, art_sale, none), last_gift_date, gift_amount, consent_sms, consent_call, consent_email, ai_call_opt_status (not_asked, opted_in, opted_out_ai_calls), line_type (mobile, landline, unknown), call_outcome, callback_requested, transfer_requested, annual_appeal_mentioned, accessibility_flag. Save to ghl/aphasia-fields.md.
3. Import CSV template matching Peter's export. Columns to be confirmed when Tan has the headers. Rule: never import contacts with the "Call Scheduled" value, that triggers the double-call bug. Save to ghl/aphasia-import-template.csv with two fake sample rows.
4. Workflow: contact imported, tag applied, Retell call triggered via the existing n8n webhook with Aphasia variables, results written back. Describe the n8n changes so outbound-call-analysis-webhook-donor routes Aphasia calls to the Aphasia sub-account. Save to ghl/aphasia-workflow.md.
5. Reporting view: the fields Mobbs sees per call.

Stop after each deliverable for Tan's OK.
