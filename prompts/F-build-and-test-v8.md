# Prompt F: Build Aphasia Nora V8 and test it

> Prompt is in Retell Draft V7; phone tests still to run. File names below are pre-Oct 28. nora-prompt-live.md is now aphasia/nora-prompt-retell-v6.md, "v9" is aphasia/nora-prompt-retell-v7.md, old v8 drafts are in aphasia/archive/. See STATUS.md "Version rule".

Aphasia pilot calls go out Nov 4 to 6. Build Retell agent version 8 for "Aphasia - Nora (outbound)" (agent_98db8564069c79a15bc8f73536) from the drafts in this repo, then test it by phone with me. Read first: aphasia/nora-prompt-v8-draft.md (the annual appeal fix), aphasia/branching-spec.md (Step 2B, cell phone question, SMS and email opt-in), aphasia/voicemail.md, ghl/ai-opt-out-field.md, ghl/mvp-field-map.md, aphasia/test-plan.md, compliance/nora-reminder-call-compliance.md.

New rule from Chris (Oct 26), add to Critical Rules: never state a gift amount unless the donor asks directly. If they ask, answer from {{gift_summary}} in spoken form, once. Do not read dollar figures in the gratitude line. Check the existing gratitude lines and remove any amount.

Work as an orchestrator. Subagent (sonnet): merge the drafts into one complete prompt, aphasia/nora-prompt-v8.md, keeping every existing style rule, ONE THING PER TURN, the acknowledgement list, Accessible Conversation. Subagent (haiku): diff v8 against aphasia/nora-prompt-live.md and list every changed line. You review the diff for conflicts (Step 5 skip when sms_opt_in already set; voicemail now mentions the appeal letter so remove the old "do not mention" line).

Then, with me watching in Claude in Chrome on the Stewardli profile: paste the prompt into the Retell agent editor, set the voicemail message, add the post-call analysis fields (line_type_confirmed, sms_opt_in, email_opt_in, cell_number_provided, ai_opt_out). Do not publish. I publish. Then run aphasia/test-plan.md with me on the phone, one test at a time, and log pass/fail in aphasia/test-log-2026-10-26.md. Stop before anything that costs money beyond test calls.
