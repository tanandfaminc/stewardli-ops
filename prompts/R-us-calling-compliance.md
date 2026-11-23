# Prompt R: can Stewardli call US donors with Nora? Compliance brief

Read STATUS.md and compliance/nora-reminder-call-compliance.md (the Canadian CRTC/CRA/PIPEDA spec) first.

Context, Nov 22 meeting: Fred found US grants that fund nonprofit CRM/donor database work (Whitefish Community Foundation, Montana, $2,500 USD for prior awardees, 142 orgs, LOI Dec 1). The team settled that a Canadian company can serve US clients and pay tax in Canada, using US infrastructure (Twilio, GoHighLevel, Retell). Chris raised data compliance, cross-border calling costs and US registration. Not yet checked: what US law says about Nora placing AI voice calls to US donors on a nonprofit's behalf.

Deliver compliance/us-calling-brief.md, max two pages, plain English, sources with URLs for every rule. Flag anything that needs a US lawyer. No legal advice framing, this is a research brief for the team.

Work as an orchestrator. Subagents (sonnet), primary sources only (fcc.gov, ecfr.gov, ftc.gov, state AG and legislature sites):
1. TCPA and the FCC's Feb 2024 declaratory ruling that AI-generated voices are "artificial or prerecorded voice". What consent is required for calls to cell phones vs residential landlines. Whether a thank-you or informational call from a 501(c)(3) needs prior express consent or prior express written consent. The nonprofit exemptions and their limits. Statutory damages per call, private right of action.
2. FTC Telemarketing Sales Rule: does it apply to charitable calls placed by a for-profit vendor on a nonprofit's behalf (vs the nonprofit itself)? National Do Not Call Registry: charities exempt, but what about third-party telemarketers calling for them? Entity-specific internal DNC list duties.
3. State law. The strictest states for AI or prerecorded calls and mini-TCPAs (Florida FTSA, Oklahoma, Washington, and any state AI-voice disclosure laws). Montana specifically, since Whitefish awardees are there. Calling hours, registration of professional solicitors or fundraising counsel (many states require it, check Montana), disclosure at the start of the call.
4. Caller ID and STIR/SHAKEN: requirements for outbound calls from a Twilio number on behalf of a client, branded caller ID limits.
5. Data: any US rule that matters for holding US donor phone numbers in Canada (US-hosted GHL, Retell, Twilio). Short.

Subagent (haiku): build the comparison table.

Output:
1. One-line answer at the top: can a Canadian vendor run Nora thank-you calls to US donors, and under what condition (most likely: only with documented prior express consent per donor).
2. Table, Canada vs US: consent needed, DNC, AI disclosure, calling hours, vendor registration, penalty exposure.
3. What a US pilot would need before the first dial: consent capture method, script disclosure line, vendor registration if any, contract clause putting consent on the nonprofit.
4. What is safe today without calls: CRM or donor database implementation, email and SMS (note SMS has its own TCPA consent rules and 10DLC registration).
5. Impact on the Whitefish plan: does the $2,500 CRM implementation need any calling at all. If not, say the grant pursuit is not blocked by this.
6. Lawyer questions, numbered, ready to send.

Short sentences, no em dashes. Push when done and add one line to STATUS.md under Open.
