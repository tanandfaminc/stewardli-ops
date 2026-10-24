# Nora tax-receipt reminder calls: compliance spec (Jan to Feb 2027)

Status: draft for Tan. Researched 2026-10-23. Not legal advice. Items marked LAWYER need review before any live call.

## 1. CRTC Unsolicited Telecommunications Rules (UTRs)

- Calls made by or on behalf of a registered charity are exempt from the National DNCL rules (Part II, s.3(a)) [1][2]. No need to scrub against the list.
- Exempt telemarketers must still register with the National DNCL (free) [3]. Who registers... LAWYER.
- Internal do-not-call list is required even for exempt calls. Add within 14 days, keep 3 years and 14 days. Voice calls must process a DNC request during the call [1][2].
- Open by naming the organization the call is for [2].
- Hours: 9:00 to 21:30 weekdays, 10:00 to 18:00 weekends, in the donor's local time. Stricter provincial hours win [1].
- Show the originating number, or another number that reaches the caller, unless technically unavailable [1].
- Open: these rules govern "solicitation" [1]. A pure thank-you call may fall outside. Treat all as mandatory anyway. LAWYER.

## 2. ADAD rules

Settled:
- ADAD: automatic equipment that dials stored numbers and delivers a pre-recorded or synthesized voice message [1].
- ADAD rules apply whether or not the call is DNCL-exempt. For solicitation calls, express consent is required and charities are expressly not exempt [1][3].
- Non-solicitation ADAD calls need no consent but must: stay inside the hours above; open by naming who the call is for plus a short purpose; give an email or postal address and a local or toll-free number (valid 60 days); repeat this at the end if over 60 seconds; display a callable number; disconnect within 10 seconds of hang-up; avoid sequential dialing; never call emergency lines or healthcare facilities [1].

Unclear:
- Whether conversational AI is an "ADAD". The definition says "synthesized voice" but is hardware-minded. I found no CRTC ruling.
- CRTC opened a UTR review on 11 June 2026, including the ADAD definition for AI voices and AI call disclosure [4]. Rules may change before January. Recheck in December.

Recommendation: treat Nora as an ADAD. Run it as a non-solicitation call, meet every condition, disclose the AI, ask for no money. LAWYER: confirm "non-solicitation" holds, and whether to collect consent anyway.

## 3. CRA official donation receipts

- A cash-gift receipt must show: official receipt statement; charity name and address on file; unique serial number; CRA registration number; place issued; date or year received; date issued; donor full name and address; gift amount; advantage amount and description; eligible amount; authorized signature; CRA name and website [5].
- Replacement receipts must carry the original serial number and say they replace it. The charity keeps the original marked "cancelled" [6].
- Nothing in CRA guidance I found stops a charity saying by phone that a receipt is coming.
- The call is not a receipt. It must not state amounts, dates or tax value.
- Only the charity issues or reissues receipts. Nora never promises a date or reissue.

## 4. PIPEDA

- Use of a number must match the purposes identified at collection and what a reasonable person would expect [7][8]. A thank-you and receipt notice to someone who just gave fits that. A new purpose needs fresh consent [7][8].
- Fundraising asks, surveys or data enrichment are new purposes. Out of scope.
- The charity stays accountable for data it hands to Stewardli. It must use a contract to give comparable protection and limit use to the contracted purpose [9].
- Needed: a data processing agreement, a charity privacy notice covering phone contact, disclosed data locations for Retell, Twilio and n8n, and short retention for transcripts. LAWYER: agreement, cross-border, recording notice.

## 5. Nora rules (from Chris)

1. Say no dollar amounts, ever.
2. Read back no personal information. Use first name only, and confirm nothing else.
3. Informational only: thank you, receipt coming, nothing to do.
4. Open with AI disclosure, organization name, and purpose.
5. Never ask for a gift, pledge, update or survey answer.
6. Never promise a receipt date or say what is deductible.
7. On any transactional request, say "Let me connect you with the team" and transfer.
8. No human free: say the team will follow up. Collect nothing.
9. On "stop calling" or similar, confirm, end politely, and write to the internal DNC list the same day.
10. Give the charity's callback number and email on request.
11. Wrong person: apologize, end, flag the number.
12. Voicemail: first name only, no amounts.
13. Call only inside allowed hours in the donor's time zone.

**Forced-transfer triggers:** "I want to donate" / "give again" / "monthly gift"; "change my amount"; "cancel my gift"; "send my receipt again" / "I lost it" / "wrong name or address"; "how much can I claim" / "is it deductible" / "what is the tax credit"; "I didn't make that gift" / "I was charged twice" / "dispute"; "refund"; "update my address, card or email"; "speak to a person"; any question Nora is unsure about.

## 6. Sample script (about 40 seconds)

"Hi {{first_name}}, this is Nora, an AI assistant calling on behalf of {{organization_name}}. This is a quick thank-you call. Please do not worry, I am not asking for anything.

Thank you for your recent gift. Your official donation receipt is on its way to you from {{organization_name}}. There is nothing you need to do.

If you have a question about your gift or your receipt, I can connect you with the team right now. Would you like that?

[If no] No problem. If you would rather not get calls like this, just say so and we will remove your number. You can also reach {{organization_name}} at {{callback_number}} or {{contact_email}}. Thank you again, and have a great day."

## Sources

1. CRTC, Unsolicited Telecommunications Rules (compiled): https://www.crtc.gc.ca/eng/trules-reglest.htm
2. CRTC, Key Unsolicited Telecommunications Rules: https://crtc.gc.ca/eng/phone/telemarketing/tobligations/rules-regles.htm
3. National DNCL, exemptions: https://lnnte-dncl.gc.ca/en/Organization/Exemptions
   CRTC, Understand telemarketing rules: https://crtc.gc.ca/eng/phone/telemarketing/reg.htm
4. CRTC Notice of Consultation 2026-132: https://crtc.gc.ca/eng/archive/2026/2026-132.htm
5. CRA, receipt contents: https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/operating-a-registered-charity/issuing-receipts/what-information-must-on-official-donation-receipt-a-registered-charity.html
6. CRA, correcting or replacing receipts: https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/operating-a-registered-charity/issuing-receipts/correcting-replacing-official-donation-receipts.html
7. OPC, PIPEDA business notes: https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda-compliance-help/pipeda-compliance-and-training-tools/bus_notes/
8. OPC, Consent principle: https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_consent/
9. OPC, Accountability principle: https://priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/principles/p_accountability/

## Lawyer list

1. Is a thank-you call "solicitation" or not?
2. Is conversational AI an ADAD? Outcome of CRTC 2026-132.
3. Consent: collect it anyway?
4. Who registers with the DNCL, charity or Stewardli?
5. Data processing agreement, call recording notice, cross-border storage.
6. AI disclosure wording.
