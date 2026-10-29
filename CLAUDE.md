# Stewardli ops

**Read STATUS.md first.** It says where we are, what is live, what is decided, and what is open. Update it before you push if you changed anything.

Tan Husnani, technical partner at Stewardli (AI donor stewardship for Canadian nonprofits). Co-founders Chris and Fred Nithiananthan.
Stack: GoHighLevel, n8n (automation.stewardli.ai), Retell (Nora voice agent), Twilio, SendGrid.

## Rules
- Zero new spend without Tan's explicit yes. Stop and ask before anything that costs money.
- Never change a published Retell agent or a live GHL workflow. Draft it, show it, Tan applies or approves.
- Never commit API keys, call recordings, donor data or real client exports. Sample data only.
- Style: short sentences, no em dashes, use "..." instead. Ready-to-send outputs over frameworks. One step at a time.
- Ask decisions as multiple choice.

## Orchestrator pattern
The lead session plans, reviews and decides. Delegate with the Agent tool:
- model "sonnet" for reasoning, drafting, analysis
- model "haiku" for lookups, parsing, list-making, formatting
Give each subagent a narrow brief with exact files or URLs. Subagents never touch live systems. Report after each deliverable in five lines or fewer.

## Live system references
- Retell agent: Aphasia - Nora (outbound), agent_98db8564069c79a15bc8f73536, number +12892076218
- Retell agent: Aphasia - Inbound Forward to Office, agent_98e466c65ff1a8d869a9bf9237
- Aphasia office: 416-226-3636 ext 127 (Mobbs Isaac), Mon to Fri 8 to 4 (confirmed by Mobbs Oct 28)
- GHL Stewardli sub-account location: OnbXdLZ96GBLRMGz6JbC
- n8n outbound analysis webhook: outbound-call-analysis-webhook-donor

## Folders
- prompts/      orchestrator prompts, one per workstream
- aphasia/      Nora prompt, branching spec, voicemail, test plan
- cost-report/  report script and sample exports
- prospecting/  LinkedIn prospecting tool (Chris)
- ghl/          field schemas, import templates
