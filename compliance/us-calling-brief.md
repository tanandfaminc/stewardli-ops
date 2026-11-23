# Can Nora call US donors? Compliance brief

Research brief for the team, Nov 23, 2026. Not legal advice. LAWYER = needs a US lawyer before we rely on it. Primary sources, URLs at the end.

**One-line answer:** yes, a Canadian vendor can run Nora thank-you calls to US donors, but only to numbers with documented prior express consent per donor, with a pure thank-you script (no ask, no appeal mention), and with Stewardli treated as directly liable for every call.

## Why consent is the whole game
- The FCC ruled in Feb 2024 that AI-generated voices are an "artificial or prerecorded voice" under the TCPA [1]. Nora is a robocall in US law, even though it talks back.
- A robocall to a **cell phone** needs prior express consent, whatever the purpose [2]. If it is telemarketing or an ad, it needs prior express **written** consent [2].
- **Residential landlines** have a nonprofit exemption: calls "by or on behalf of" a tax-exempt nonprofit need no consent. The cap is 3 calls per 30 days, and an opt-out is required [2][3]. Most donor numbers are cells, so this rarely helps. Whether "on behalf of" covers a for-profit vendor has no express ruling. LAWYER.
- Stewardli places the calls, so Stewardli is directly liable. The nonprofit is liable too, through agency (FCC DISH ruling) [4].
- Exposure: $500 per call, $1,500 if willful, with a private right of action. Class actions are common [5]. 1,000 bad calls is $500,000 to $1.5M.
- The TCPA also reaches callers outside the US when the person called is in the US [6].

## The appeal mention is the risk
- The FTC Telemarketing Sales Rule covers charitable calls when a for-profit telemarketer makes them [7]. It applies to campaigns "conducted to induce" a contribution [8].
- A pure thank-you call is arguably outside it. A call that mentions an upcoming appeal letter could be read as part of a plan to induce a gift. The test is the campaign's purpose, not only the words. LAWYER.
- If the TSR applies: name the charity and say the purpose is to ask for a gift; call 8am to 9pm local; transmit caller ID; keep a per-charity do-not-call list; keep records 5 years [9][10]. FTC penalties run to about $53,088 per violation [7] (2026 figure not confirmed).
- The Aphasia script mentions the appeal. **A US script must drop it.**

## Canada vs US

| Topic | Canada (Nora today) | US (federal, plus Montana) |
|---|---|---|
| Consent needed | Non-solicitation ADAD calls need no consent. Solicitation ADAD calls need express consent. Charities are not exempt. | AI voice is a robocall. Cells need prior express consent, written if telemarketing. Nonprofit landlines exempt, 3 calls per 30 days. |
| Do Not Call | Charity calls exempt from the National DNCL. Still register (free) and keep an internal list, add within 14 days. | Charity calls exempt from the National DNC Registry. Vendor keeps a per-charity list, honours opt-outs within 10 business days, keeps 5 years. |
| AI disclosure | No AI rule. CRTC consultation 2026-132 open. | No federal AI rule yet (FCC 24-84 is a proposal). Name the caller, give a callback number, offer an opt-out. California requires artificial-voice disclosure. |
| Calling hours | 9:00 to 21:30 weekdays, 10:00 to 18:00 weekends, local time. | 8am to 9pm local (TSR, Montana). Oklahoma 8am to 8pm for sales calls. |
| Vendor registration | Who registers with the DNCL is open. | None federal. Montana: none found for charities or solicitors. Other states register professional solicitors. A thank-you-only vendor is probably not one. |
| Penalty exposure | CRTC administrative monetary penalties. | $500 per call, $1,500 if willful, private suits and class actions. FTC up to about $53,088 per violation. Florida and Oklahoma add $500 per call. |

## States
- **Montana.** MCA 45-8-216 bans automated dialing with recorded messages for sales, for "soliciting information" or for gathering data, unless a live operator gets permission first [11]. There is no charity exemption in the text. A live conversational AI is arguably outside it. LAWYER. The telemarketing registration law exempts charitable calls and covers sales only [12]. No charity or professional-solicitor registration was found. Montana DOJ: charities do not register with the AG [13]. LAWYER to confirm.
- **Florida** (FTSA) and **Oklahoma** (OTSA) need written consent for automated **sales** calls and give $500 per call private suits [14][15]. A thank-you call looks outside both. Florida still bars calling anyone who asked a charity not to call [14].
- **Washington** bans ADAD calls for commercial solicitation only, $1,000 per violation [16]. Its charity law registers paid fundraisers who solicit [17].
- **California** requires an ADAD message to say when it uses an artificial voice [18]. Utah and Texas AI rules are not confirmed.
- About 40 states register professional solicitors. No primary count was found. LAWYER, state by state, before any state other than Montana.

## Caller ID
- Show a number that can be called back during business hours to make a do-not-call request [19]. Never show misleading caller ID. This binds callers outside the US too [6].
- STIR/SHAKEN A attestation through Twilio needs a Business Profile plus a Trust Product, with the number assigned to both [20]. Nora's number is a 289 (Ontario) number. **A US pilot needs a US number with A attestation.**
- Twilio Branded Calling shows only the name on the account's Business Profile, on T-Mobile and Verizon mobiles only [21]. Showing the nonprofit's name from Stewardli's account may be "misleading". LAWYER.

## Data (short)
- No general US federal privacy law covers donor phone numbers. The DOJ bulk data rule covers countries of concern only, and Canada is not one [22].
- **Montana's privacy law** was amended in 2025: the threshold dropped to 25,000 Montana consumers, and the nonprofit exemption was reportedly narrowed [23]. A small foundation's donor list is likely under the threshold. LAWYER.
- **SMS** needs TCPA consent too (texts are "calls") and A2P 10DLC registration under the **nonprofit's** brand and EIN. Fees are waived for verified 501(c)(3)s [24].

## Before the first US dial
1. **Consent capture.** The nonprofit's gift form or donor portal carries a checkbox: "I agree that [Org] and its service providers may call or text me at this number, including with automated or AI voice technology, to thank me and share updates." Store the date, source and wording per donor. No consent record, no call.
2. **Script.** First line: "Hi [first name], this is Nora, an AI assistant calling on behalf of [Org]. This is a quick thank-you call, I am not asking for anything." Give a callback number. Offer an opt-out ("say stop and we won't call again") and honour it mid-call. No appeal mention, no ask, no event tickets.
3. **Ops.** US Twilio number with A attestation. Calls 9am to 8pm donor local time (inside every state window). Max 3 calls per number per 30 days. Per-charity do-not-call list, honoured the same day. Scrub the Reassigned Numbers Database (paid) [2]. Keep records 5 years.
4. **Registration.** Montana: none found, confirm with a lawyer. Any other state: check professional-solicitor rules first.
5. **Contract.** The nonprofit warrants it holds prior express consent for every number it sends, indemnifies Stewardli for consent failures, and owns its donor data. Stewardli warrants script and opt-out compliance. Add a data processing addendum.

## Safe today without calls
- CRM or donor database setup, data cleanup, imports, reports and dashboards. None of this touches calling law.
- Email thank-yous and stewardship. Follow CAN-SPAM basics (an identified sender, a working unsubscribe).
- SMS only after consent and 10DLC registration under the nonprofit's brand.

## Impact on the Whitefish plan
The $2,500 grant funds CRM and donor database work. **That needs no calling at all, so this brief does not block the grant pursuit.** Pitch the CRM implementation for the Dec 1 LOI. Offer Nora calls later as a separate phase, once the consent checkbox is live on the client's gift form.

## Lawyer questions
1. Does a thank-you call from a for-profit vendor with an AI voice fall outside "telemarketing" under the TSR and TCPA if it does not mention an appeal? What if it does?
2. Is a cell number given on a donation form "prior express consent" to an AI-voice thank-you call from the charity's vendor? What wording makes it safe?
3. Does the 47 CFR 64.1200(a)(3)(iv) nonprofit landline exemption cover a for-profit vendor calling "on behalf of" the charity?
4. Is a two-way conversational AI a "recorded message" under Montana MCA 45-8-216? Does a live opening line satisfy the permission exception?
5. Confirm Montana has no professional solicitor or fundraising counsel registration that reaches a thank-you call vendor.
6. Does Stewardli need its own internal do-not-call policy under 47 CFR 64.1200(d), separate from the charity's?
7. Can Branded Calling or caller ID show the nonprofit's name when Stewardli places the call?
8. What revocation rules are in force today? The FCC changed them in 2024, waived part to Jan 31, 2027, and adopted FCC 26-67 in Sept 2026 (reported, not verified).
9. Does the 2025 Montana privacy amendment cover a small nonprofit, or Stewardli as its processor?
10. What contract clauses (consent warranty, indemnity, insurance) do US clients expect, and does Stewardli need TCPA insurance?

## Sources
1. FCC 24-17, AI voices declaratory ruling: https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf
2. 47 CFR 64.1200: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200
3. FCC 20-186, exemption limits: https://docs.fcc.gov/public/attachments/FCC-20-186A1.pdf
4. FCC 13-54, DISH vicarious liability: https://docs.fcc.gov/public/attachments/FCC-13-54A1_Rcd.pdf
5. 47 U.S.C. 227: https://www.law.cornell.edu/uscode/text/47/227
6. 47 CFR 64.1604: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-P/section-64.1604
7. FTC, Complying with the TSR: https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule
8. 16 CFR 310.2: https://www.ecfr.gov/current/title-16/part-310/section-310.2
9. 16 CFR 310.4: https://www.ecfr.gov/current/title-16/part-310/section-310.4
10. 16 CFR 310.5: https://www.ecfr.gov/current/title-16/part-310/section-310.5
11. MCA 45-8-216: https://mca.legmt.gov/bills/mca/title_0450/chapter_0080/part_0020/section_0160/0450-0080-0020-0160.html
12. MCA 30-14-1405: https://mca.legmt.gov/bills/mca/title_0300/chapter_0140/part_0140/section_0050/0300-0140-0140-0050.html
13. Montana DOJ, telemarketing: https://dojmt.gov/office-of-consumer-protection/telemarketing-businesses/
14. Fla. Stat. 501.059: https://www.flsenate.gov/Laws/Statutes/2024/501.059
15. Oklahoma HB 3168 (2022): https://oklegislature.gov/cf_pdf/2021-22%20ENR/hB/HB3168%20ENR.PDF
16. RCW 80.36.400: https://app.leg.wa.gov/RCW/default.aspx?cite=80.36.400
17. RCW 19.09.020: https://app.leg.wa.gov/RCW/default.aspx?cite=19.09.020
18. California AB 2905 (2024): https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2905
19. 47 CFR 64.1601: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-P/section-64.1601
20. Twilio SHAKEN/STIR onboarding: https://www.twilio.com/docs/voice/trusted-calling-with-shakenstir/shakenstir-onboarding
21. Twilio Branded Calling: https://www.twilio.com/docs/voice/branded-calling
22. DOJ data security rule: https://www.justice.gov/nsd/data-security
23. Montana privacy amendment (secondary): https://www.hunton.com/privacy-and-cybersecurity-law-blog/montana-amends-consumer-data-privacy-act
24. Twilio 10DLC for nonprofits: https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/onboarding-for-government-and-non-profit-agencies

Not fully verified: the 2026 FTC penalty figure, FCC 26-67 and its effective date, Utah and Texas AI rules, and the enrolled text of Montana SB 297. Recheck them before relying on any of these.
