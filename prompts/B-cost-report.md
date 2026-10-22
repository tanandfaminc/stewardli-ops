# Prompt B: Cost tracking report

Build a lightweight cost report for Stewardli. Chris's instruction: "don't overcomplicate it." No new infrastructure. Extract from each system, summarize in one place. Rules in CLAUDE.md.

Work as an orchestrator. Agent tool with model "haiku" for data extraction and formatting, model "sonnet" for anything that needs interpretation. You review and assemble.

Sources (Tan drops exports in cost-report/exports/, gitignored):
- Retell call history CSV. Fields: date, duration, cost, agent, direction, call ID. The LLM token surcharge is a separate line from the per-minute base.
- Twilio usage export: voice minutes, SMS, number rental, lookups.
- GHL subscription: fixed monthly, Tan gives the number.
- ElevenLabs is billed through Retell. Do not double count.

Steps:
1. Subagent (haiku): parse each export into one clean table: date, system, item, quantity, unit cost, total, client tag (stewardli_internal, aphasia, demo). Tag by agent name or phone number.
2. Subagent (haiku): roll up by client tag and by month.
3. Subagent (sonnet): effective cost per call minute for the Aphasia agent including the token surcharge. Compare to the 20 to 25 cents per minute target. Flag the two biggest levers.
4. You: one-page summary. Numbers first, then two sentences on what to do. Save to cost-report/report-YYYY-MM.md plus a WhatsApp-length version.

Leave one script (cost-report/build.py) that regenerates the report from fresh exports. Commit sample exports with fake rows so the script can be tested.
