# Nora number check: +1 289 207 6218

Checked Oct 27, 2026, read-only, in Retell and the Twilio console (account Stewardli.ai). Nothing changed.

**Answer: the number is wired correctly for calls, but it is not branded. Donors will see a bare 289 number, not "Aphasia Institute".**

## Retell
| Setting | Value |
|---|---|
| Name | Twilio - Aphasia Institute (Nora) |
| Provider | Custom telephony (Twilio SIP) |
| Inbound | Aphasia - Inbound Forward to Office, Latest Created. Fallback +1 416 226 3636 |
| Outbound | Aphasia - Nora (outbound), Latest Created. Always uses the newest draft, so it uses Draft V7 (aphasia/nora-prompt-retell-v7.md) |
| SMS add-on | Not set up |

## Twilio
| Setting | Value |
|---|---|
| Friendly name | Aphasia Institute - Nora (internal label only, donors never see it) |
| Locality | King City, ON, Canada. Local number |
| Voice | Stewardli.ai - Retell Connection (SIP trunk). Voice enabled |
| Messaging | Enabled, no configuration |

## Caller ID name
- Twilio CNAM registration is US only. It does not cover Canadian numbers.
- For Canada, Twilio offers Branded calling only. It shows a name on mobile phones, not landlines.
- One Branded calling registration exists: "Stewardli.ai", Approved, Canada, Sep 4, 2026. Display name **Stewardli.ai**. Notification email chris.n@stewardli.ai.
- It covers **only +1 289 367 9557** (Stewardli main, Oshawa). **The Nora number is not assigned to any branded registration.**
- The Sept 2026 USD 0.12 Branded Calling line on the Twilio bill is this registration.

## Branded calling for "Aphasia Institute" (researched Oct 27, public Twilio pages only)
| Item | What Twilio says |
|---|---|
| Price, Canada | USD 0.12 per call (Canada voice pricing page, current as of Aug 2026). Pilot estimate: 133 to about 400 calls with retries = USD 16 to 48 |
| Type | Non-US Basic only (display name, no logo or call reason). Public beta, no SLA |
| Reaches | Mobile phones only. Landlines get nothing (CNAM is US only) |
| Name rules | Max 32 characters. "Letters and numbers only." Must relate to the business. Needs legal authority to use the name |
| Paperwork | Signed Letter of Authorization (Twilio template). Business Profile recommended, not required. ISV onboarding of customer brands is private beta |
| Timing | Brand review up to 7 days. Number assignment review 24 to 48 hours. Propagation up to 2 hours |

Tan's proposed name: "Aphasia Institute - Nora" (24 characters). Fits the length. The hyphen breaks "letters and numbers only" as written, though the approved "Stewardli.ai" has a period, so enforcement looks loose. Safer: "Aphasia Institute" (17).

Timeline risk: Aphasia's LOA first (earliest Oct 29 with Mobbs's reply), then up to 7 days review, then 24 to 48 hours for the number. Worst case it lands Nov 7 or later, after the Nov 4 to 6 calls.

Sources: twilio.com/en-us/voice/pricing/ca, twilio.com/docs/voice/branded-calling, twilio.com/docs/voice/branded-calling/non-us-basic, twilio.com/docs/voice/branded-calling/us-basic

## Options (Tan decides)
1. **Leave it unbranded for the pilot.** No cost, no wait. Nora names Aphasia Institute in the first ten seconds and in the voicemail. Callbacks to the number reach the office.
2. **New Branded calling registration with display name "Aphasia Institute"** for the Nora number. Needs Aphasia's brand details (website, privacy notice) and probably their OK. Per-call fee, and approval time is unknown, which is risky with calls starting Nov 4. Zero-spend rule applies.
3. **Add the Nora number to the existing "Stewardli.ai" registration.** Not recommended: donors would see "Stewardli.ai", which the prompt avoids and which doesn't name the charity the call is for.
