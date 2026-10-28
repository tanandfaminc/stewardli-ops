# Fred / Chris / Tan in-person: Sun Nov 1

Replaces agenda-fred-chris-tan-inperson.md. ~100 min. Three days before Nora dials, so keep the pilot blocks tight and give the partnership block real time.

## What changed since the Oct 23 agenda
- Aphasia signed Oct 26. Pro bono (Chris's board seat, COI disclosed Oct 27). 133 donors, calls Nov 4 to 6, appeal mails Nov 5 or 6.
- Chris put ownership and partnership structure on the table (Oct 25 call). Wanted it in person, not by phone.
- Brian, via Chris: up to 10 pilots by year end "if planned properly."
- No legal counsel. Chris self-reviewed the Aphasia confidentiality agreement.
- Costing numbers from Chris still outstanding. Also Retell billing (admin) and the GHL plan amount.

---

## 1. Where we are (10 min, Tan)
- Aphasia: V8 prompt, voicemail and 5 post-call fields in Retell, not published. Test plan 15 rows. Donor file arrives via Dropbox after COI + NDA, deleted Dec 6.
- Still open before Nov 4: V8 phone tests, n8n mapping of the new fields, caller ID decision, Mobbs's script edits, Twilio billing owner.
- Cost actuals (cost-report/actuals/README.md): Retell USD 40 and Twilio USD 79 over 14 months. Under USD 9 a month variable. GHL at USD 297/mo is the real cost line.
- Pilot proves experience and ops, not gift lift. 133 is too small for a causal read (aphasia/pilot-stats.md).

## 2. Pilot to revenue (15 min, Chris leads)
- Aphasia is pro bono. So who is the first paid client, and when.
- Pricing model can't be locked without Chris's costing numbers and the GHL amount. Decision: date those land, or decide pricing on the actuals we have.
- Contract paper: Fred's combined pilot + engagement contract, or per client. Who reviews it with no lawyer.
- Feb reminder calls: the Jan 15 gate still stands (compliance sign-off, client list, consented numbers, agent tested).

## 3. Brian's 10 pilots: capacity and legal (15 min)
- Aphasia took ~12 hrs to build and ~4 to run, on 8 to 10 hrs/week. Even if the template halves the build, 10 pilots by Dec 31 is roughly 100 hrs in about 7 working weeks (holiday pause Dec 21). That's more than Tan's whole committed time, before anything else.
- So "planned properly" means deciding: how many pilots, which ones, who builds the second one, and whether Tan's hours change.
- Legal: no counsel today. Decide before the second agreement, not after. Covers client contracts, the data/AI policy Paul asked about, CRTC questions for Feb, and any partnership agreement (see block 4).
- Senior advisor / connector (Brian): role, and equity or fee. Chris's call, but it affects block 4.
- Decision: pilot cap through Dec 31, and an owner for finding legal help.

## 4. Partnership conversation (30 min)
Tan's case and questions are in the prep section below. Goal for Sunday is agreement on process, not numbers:
- What paths are on the table (agreement s.3: partnership with equity and/or rev share, defined contractor, or wind down)
- What each person's role is going forward
- Who drafts, who reviews, and by what date

## 5. Operating rhythm (10 min)
- Friday 1 to 3 stays. Evening WhatsApp has become the default since signing. Agree what's urgent and what waits for Friday.
- Zero-spend rule: who approves what without a call.
- Build vs buy: park. Agree the trigger that reopens it (call volume, margin, vendor price move).

## 6. Next 30 days (10 min)
- Walk timeline-oct23-to-feb.md with calls moved to Nov 4 to 6. Report to Aphasia ~Nov 16, debrief before Peter leaves Nov 23.
- Owners for: second pilot, 10-nonprofit roundtable, TSI ED event. Or park them.

## Pre-reads
- cost-report/actuals/README.md
- aphasia/pilot-stats.md
- timeline-oct23-to-feb.md
- compliance/nora-reminder-call-compliance.md

---

# Tan's prep for block 4 (not for sharing)

No equity numbers here and no negotiating position. This is the case and the questions to have answered before you walk in.

## A. What the trial agreement actually says
Signed May 14, 2026. Only s.10 (IP) and s.11 (confidentiality) are binding. Everything else is good faith.

- **s.8, the trigger:** "if Tan successfully delivers the outcomes described in Section 6," Stewardli commits to a formal partnership discussion "within 30 days of the first paid client being onboarded."
- **Strictly read, it hasn't triggered.** Aphasia is pro bono. No paid client yet. Chris is raising it early, by choice. Worth naming that as good faith on his side.
- **s.3:** trial ran to Sept 3, "milestone-driven rather than time-restricted." At or before launch both sides pick one of three paths: partnership (equity and/or rev share), defined contractor, or conclude.
- **s.6 review:** a formal review "on or before September 3." It didn't happen. You've been working past the term with no decision on paths.
- **s.7:** no pay during the trial. Nothing guaranteed.
- **s.8 also:** any equity needs a separate, formally drafted agreement signed by all. No counsel exists to draft it.
- **s.10:** all Stewardli work is Stewardli's. You keep no reuse rights.
- **s.12:** you can't support a competing donor retention platform during the term. The term technically ended Sept 3. Worth clarifying whether it still applies.

### Questions on the agreement
1. Do we treat the Sept 3 review as skipped and do it now, on Sunday?
2. Is the trial still running, and under what end date or milestone?
3. Does pro bono Aphasia count as "first paid client" for s.8, or are we waiving the trigger and starting the discussion now?
4. Does s.12 non-compete still apply, and to when?
5. Who drafts the next agreement and who reviews it, given no counsel? Do you want your own independent review before signing anything?

## B. Section 6 scorecard: be straight about it
They'll measure against s.6. Know where each item stands before they ask.

| s.6 outcome | Status | Evidence / gap |
|---|---|---|
| Cloud n8n operational | Yes | Hostinger VPS, updated 2.21.5 to 2.45.5 Oct 28 with snapshot. Gap: VPS is on Chris's account, root access still unresolved |
| Stable workflow execution | Mostly | 6 published workflows. New post-call field mapping still draft |
| GHL to n8n to Retell pipeline working | Yes for Aphasia | Number, Nora agent, inbound forward, GHL fields/tags. Goes live Nov 4 |
| Retention dashboard live with usable data | **No** | Not built. No pilot data yet to put in it. Expect this question |
| Support 3 pilot orgs | 1 of 3 | Aphasia setup is the template for UFT and Melanoma. Not yet proven twice |
| Real donor data workflows | Nov 4 | Dropbox intake, delete date, no donor data in repo |
| Documentation | Partial | stewardli-ops repo, STATUS.md, runbooks, Sudhir handover tracker. Gap: credentials and access register not consolidated |

Your call how to frame the dashboard gap. Fact is product work was paused Oct 5 for sales, by team decision.

## C. What you've delivered since Sept 3
Grouped. Fill in anything missing from your side.

**In scope (s.4, ops and tech)**
- Aphasia build end to end: Twilio number Oct 13, Aphasia Nora agent with accessibility mode and segments, inbound forward to ext 127, live demo call to Mobbs Oct 16
- Retell V8: branching (cell / landline), voicemail, gift-amount rule, 5 post-call fields, test plan
- GHL MVP fields and tags for the pilot, field map, opt-out design
- Secure donor intake (Dropbox) with delete date
- n8n update and snapshot Oct 28
- Cost model (Oct 23) and Retell + Twilio actuals for 14 months
- Pilot design pressure test and pilot stats
- CRTC / CRA compliance spec for Feb reminder calls
- Timeline Oct 23 to Feb, stewardli-ops repo as single source of truth
- Email infra: DMARC / deliverability runbook, cold-send runbook, Mailmeteor on Fred's account
- Silent technical observer on prospect calls (Annette, Aphasia)

**Out of scope per s.4 (marketing, content, brand) but you did it anyway**
- Homepage rebuild and landing page CRO (Sept 10 to 11)
- GA4 funnel tracking, PostHog heatmaps
- LinkedIn pipeline for Stewardli page and Chris's profile (Publer + 4 n8n workflows on your own instance)
- LinkedIn lead list review with Chris, GBP setup
- Field Notes pipeline and analytics (Metricool, UTM, Monday stats)

This second list is part of the case. It's also the scope question: is it part of the role going forward or not.

## D. Your hours, actually
No time log exists that I can find. Don't walk in with a guess. Pull it from:
- Calendar and Meet: 19 analyzed calls in the project since Sept 8, plus the Oct 16 Aphasia demo and evening WhatsApp sessions
- Repo commits: 17 between Oct 22 and Oct 27
- Claude sessions and your own n8n / Retell / GHL activity logs

| Period | Calls (hrs) | Build / ops (hrs) | Content / marketing (hrs) | Total | vs 8 to 10/wk |
|---|---|---|---|---|---|
| Sept 3 to 30 | | | | | |
| Oct 1 to 25 | | | | | |
| Oct 26 to 31 (post-signing) | | | | | |
| Nov 2 to 6 (pilot week, plan) | | | | | |

Questions to answer for yourself:
1. Average weekly hours since Sept 3. Over or under 8 to 10?
2. How much went to out-of-scope work?
3. What has the post-signing cadence (evenings, same-day turnaround) done to your week?
4. What's the most you can give Stewardli sustainably alongside Tan & Fam?

## E. What you want: answer these before Sunday, not in the room
1. Which s.3 path do you want: partner, defined contractor, or something in between? And which would you accept?
2. If partner: what does that mean to you beyond equity? Title, decision rights, a vote on spend and hiring, access to the books?
3. Is cash part of it (retainer, hourly, rev share on pilots you build), or is equity enough at this stage?
4. What do you expect for the unpaid hours May to now? Recognized in the structure, or a clean start from here?
5. Hours: what do you commit to, and what happens if 10 pilots shows up?
6. Scope: do you keep content and marketing work, hand it off, or get paid separately for it?
7. Your walk-away: what outcome makes you step back to contractor or out?
8. Tan & Fam: does any of this run through Tan & Fam Inc. or you personally? Matters for tax and liability. Ask your accountant, not this room.

## F. Questions to ask them
1. Current ownership of Stewardli Inc. Is it 50/50 Chris and Fred today, on paper? Any shares issued, vesting, or promises to anyone else (Brian, other advisors)?
2. What prompted "now": Aphasia, Brian's comment, or something else?
3. What role are they picturing for you? Same scope, or more (ops lead, CTO)?
4. Fred's view. He's been heads-down. Is he aligned with opening this?
5. Equity, rev share, cash, or a mix. Which are they open to?
6. How does vesting or a cliff work, if equity is on the table?
7. What happens to your work if it doesn't go forward (s.10 already gives them the IP)?
8. Timeline: when do they want a written proposal, and who writes it?
9. Any outside interest, investor or acquirer conversations that would change the structure?

## G. Clean up before Sunday (ownership hygiene)
These cut both ways in an ownership talk. Know where they sit.
- **stewardli-ops repo** lives on your Tan & Fam GitHub. Under s.10 it's Stewardli's. Decide whether to offer a transfer to a Stewardli org.
- **Front Desk / Publer workflows** run on your self-hosted n8n (automation.tanandfaminc.com) with your Supabase. Stewardli depends on Tan & Fam infra. Name it.
- **Hostinger VPS, Retell admin, GHL agency admin** sit with Chris. Your access is shared or sub-account level.
- **Twilio billing owner** still unverified.

## H. How to run it in the room
- Lead with facts: s.8 trigger, s.6 scorecard, hours, delivered list. Let them talk numbers first.
- Don't agree to a number or structure Sunday. Agree on the path, who drafts, and a date to respond.
- Ask for anything proposed in writing.
- Separate the conversations: pilot ops in blocks 1 to 3, partnership in block 4. Don't let one trade against the other.
