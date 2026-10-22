# Prompt E: Pilot design pressure test

Context: Aphasia Institute pilot, Nov 2 to 6, 2026. Peter Blakely wants to measure whether a pre-appeal thank-you call lifts gifts. Chris wants to prove long-term retention. Peter's data file has only ~130 names with phone numbers out of ~1,400 appeal recipients (last year: 260 recent, 761 current, 500 lapsed, 207 members). Peter's two options: phone append to get more numbers, or call the 130 and monitor. Rules in CLAUDE.md.

Work as an orchestrator. Agent tool with model "sonnet" for statistics and drafting, model "haiku" for tables. You own the final recommendation. Do not make the decision for Tan, give him the case.

1. Subagent (sonnet): with 130 split 65/65, what gift-rate difference is detectable at 80% power? Then with 130 called vs the ~1,270 not called (non-randomized). Then if phone append adds 500 numbers. Plain English, one table.
2. Subagent (sonnet): phone append in Canada: vendors, cost per match, typical hit rate on a donor file, consent and PIPEDA considerations for calling a number the donor did not give the charity, and the effect on pickup and sentiment vs numbers the donor provided.
3. Subagent (sonnet): three designs. (a) call all 130, no split, measure experience and ops (pickup, sentiment, SMS opt-in, opt-outs, complaints) plus their appeal response vs last year. (b) phone append then 50/50 split. (c) call 130 now, append for a second wave in spring. For each: what it proves, what it can't, Retell cost at $0.21/min and 1.5 min average, Tan hours.
4. You: one-page recommendation Tan hands Chris, plus a three-line WhatsApp version, plus a draft reply Chris could send Peter. Include the one question Chris must settle with Peter before any call goes out.
