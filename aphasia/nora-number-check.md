# Nora number check: +1 289 207 6218

Checked Oct 27, 2026, read-only, in Retell and the Twilio console (account Stewardli.ai). Nothing changed.

**Answer: the number is wired correctly for calls, but it is not branded. Donors will see a bare 289 number, not "Aphasia Institute".**

## Retell
| Setting | Value |
|---|---|
| Name | Twilio - Aphasia Institute (Nora) |
| Provider | Custom telephony (Twilio SIP) |
| Inbound | Aphasia - Inbound Forward to Office, Latest Created. Fallback +1 416 226 3636 |
| Outbound | Aphasia - Nora (outbound), Latest Created. Always uses the newest draft, so it uses V8 now |
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

## Options (Tan decides)
1. **Leave it unbranded for the pilot.** No cost, no wait. Nora names Aphasia Institute in the first ten seconds and in the voicemail. Callbacks to the number reach the office.
2. **New Branded calling registration with display name "Aphasia Institute"** for the Nora number. Needs Aphasia's brand details (website, privacy notice) and probably their OK. Per-call fee, and approval time is unknown, which is risky with calls starting Nov 4. Zero-spend rule applies.
3. **Add the Nora number to the existing "Stewardli.ai" registration.** Not recommended: donors would see "Stewardli.ai", which the prompt avoids and which doesn't name the charity the call is for.
