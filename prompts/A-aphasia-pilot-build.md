# Prompt A: Aphasia pilot build

You are the lead engineer on the Aphasia Institute pilot for Stewardli. Calls go out Nov 2 to 6, 2026. Peter Blakely (Aphasia) has the donor file: ~130 names with phone numbers out of ~1,400 appeal recipients. No A/B split, we call all 130. Stack and rules are in CLAUDE.md. Current live Nora prompt is in aphasia/nora-prompt-live.md.

Work as an orchestrator. You plan, review and decide. Delegate research and drafting with the Agent tool: model "sonnet" for anything that needs reasoning, model "haiku" for lookups, list-making and formatting. Narrow briefs, exact files. Never let a subagent change a live system. You make every change yourself after reviewing, and you stop and ask before anything that costs money or touches a published agent.

Deliverables, in this order:

1. Landline vs mobile detection. Subagent (sonnet): confirm Twilio Lookup v2 line_type_intelligence pricing, whether n8n has a native Twilio Lookup node or needs an HTTP node, and the exact response field to store. Output a one-page runbook. Cost for 130 numbers. I decide whether to run it.

2. Branching logic spec. Subagent (sonnet): draft prompt additions to Nora so that if line_type is mobile she offers SMS, if landline she asks for a cell number using Mobbs's line ("the world is changing, folks are moving to cell phones, can I confirm if this is your cell number?") and falls back to offering email, and if unknown she asks the same question. New dynamic variable name and the GHL field it writes to. You check it against aphasia/nora-prompt-live.md for conflicts with ONE THING PER TURN and the acknowledgement rules. Save to aphasia/branching-spec.md.

3. Voicemail on no-answer. Paul wants it on. Subagent (haiku): draft a 15-second Aphasia voicemail in Nora's voice: thank you for supporting the walk, the annual appeal letter is coming, no callback number, no ask. Check it against the Accessible Conversation rules in the live prompt. Save to aphasia/voicemail.md.

4. AI opt-out field. Subagent (sonnet): design the GHL custom field (ai_call_opt_status: not_asked, opted_in, opted_out_ai_calls), the Retell post-call extraction variable, the n8n mapping, and the rule that excludes opted_out contacts from any future Nora campaign. Table format. Save to ghl/ai-opt-out-field.md.

5. Secure intake. Subagent (sonnet): propose one place for Peter to drop the donor CSV. Options: Google Drive folder shared to one Stewardli address with link expiry, n8n webhook upload. One owner, deletion date 30 days after pilot end. Recommend one. Save to aphasia/intake-options.md. I decide.

6. Script fix: replace "annual campaign" with "annual appeal" everywhere in aphasia/nora-prompt-live.md. Show me the diff. I apply it in Retell.

7. Test plan. Subagent (haiku): 10-step end-to-end phone test a human runs: mobile path, landline path, unknown path, transfer to ext 127 inside and outside 8:30 to 4, voicemail, opt-out. Save to aphasia/test-plan.md.

Report after each deliverable in five lines or fewer.
