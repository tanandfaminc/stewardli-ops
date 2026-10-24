# Retell actuals, pulled Oct 23, 2026

Source: Retell dashboard call history, all 470 sessions since Sept 2025, aggregated by month, agent and channel. Cost column is Retell's per-call displayed cost. It may not include the LLM token surcharge or any platform fee, which only show on the billing page (admin-only, Tan's login is denied). Ask Chris for a billing screenshot or admin access to reconcile.

## Monthly totals (USD)
| Month | Calls | Minutes | Cost | $/min |
|---|---|---|---|---|
| 2025-09 | 31 | 10.5 | 1.25 | 0.119 |
| 2025-10 | 45 | 20.7 | 2.41 | 0.117 |
| 2025-11 | 78 | 62.5 | 7.37 | 0.118 |
| 2025-12 | 33 | 31.0 | 3.73 | 0.120 |
| 2026-01 | 8 | 3.9 | 0.42 | 0.107 |
| 2026-02 | 131 | 76.9 | 7.97 | 0.104 |
| 2026-03 | 38 | 42.0 | 3.94 | 0.094 |
| 2026-04 | 12 | 9.8 | 1.18 | 0.121 |
| 2026-05 | 2 | 1.4 | 0.18 | 0.129 |
| 2026-06 | 10 | 9.6 | 1.18 | 0.123 |
| 2026-07 | 43 | 40.0 | 6.02 | 0.151 |
| 2026-08 | 6 | 6.7 | 1.12 | 0.168 |
| 2026-09 | 2 | 3.0 | 0.52 | 0.174 |
| 2026-10 | 31 | 12.4 | 2.59 | 0.209 |
| **All time** | **470** | **330.4** | **39.90** | **0.121** |

Phone calls only: 346 calls, 251 min, USD 28.77, 0.115/min.

## What it says
1. Total Retell spend in 13 months is about USD 40. Usage is not the cost problem. GHL's fixed USD 297/mo is.
2. Per-minute cost has doubled, from ~0.10 to 0.12 in the GHL Outbound Call era to 0.21 on the Aphasia agent. That's the ElevenLabs voice plus GPT-4.1 plus the longer prompt. The old agents used cheaper voice and model.
3. The Aphasia agent at 0.21/min matches the cost model's 0.20 Retell-side estimate, so the model is calibrated.
4. The surcharge question matters: if billing shows meaningfully more than USD 2.59 for October, the gap is the token surcharge and platform line items the call list hides.

## Aphasia October detail
21 sessions, 10.1 min, USD 2.03. Phone calls: 4 outbound tests at 1:17 to 1:32 each, USD 0.26 to 0.31 per call. Inbound forward tests 11 to 20 seconds each, ~USD 0.05.

## Still needed
- Retell billing page (admin) for invoiced totals by month
- Twilio usage export (Tan to sign in, then pull)
- GHL plan and monthly amount

---

# Twilio actuals, pulled Oct 23, 2026

Source: Twilio console Usage and Spend by product, Sept 2025 to Oct 2026. Estimates per Twilio until month-end statements. Account balance USD 43.16.

| Month | Messaging | Numbers | SIP calls | SIP $ | Total |
|---|---|---|---|---|---|
| 2025-09 | 0.00 | 1.15 | 2 | 0.02 | 1.21 |
| 2025-10 | 0.02 | 3.05 | 18 | 0.16 | 3.26 |
| 2025-11 | **29.55** | 1.90 | 75 | 0.60 | 32.05 |
| 2025-12 | 1.53 | 1.90 | 49 | 0.39 | 3.82 |
| 2026-01 | 1.52 | 1.90 | 5 | 0.07 | 3.49 |
| 2026-02 | 1.50 | 1.90 | 146 | 2.08 | 5.48 |
| 2026-03 | 1.67 | 1.90 | 58 | 1.90 | 5.47 |
| 2026-04 | 1.54 | 1.90 | 17 | 0.62 | 4.06 |
| 2026-05 | 1.50 | 1.90 | 2 | 0.02 | 3.42 |
| 2026-06 | 1.50 | 1.90 | 14 | 0.13 | 3.53 |
| 2026-07 | 1.50 | 1.90 | 36 | 0.33 | 3.73 |
| 2026-08 | 1.50 | 1.90 | 6 | 0.06 | 3.46 |
| 2026-09 | 1.50 | 1.90 | 0 | 0.00 | 3.52 |
| 2026-10 | 1.50 | 1.15 | 21 | 0.16 | 2.81 |
| **Total** | | | **449** | **6.54** | **79.31** |

## What it says
1. Twilio is USD 3.50 a month flat. Two numbers (1.90) plus a 1.50 recurring messaging line, almost certainly the A2P 10DLC campaign fee. Actual call usage over 14 months: USD 6.54 for 449 SIP calls, about 1.5 cents a call.
2. The Nov 2025 spike (29.55 messaging) is a one-time item, looks like 10DLC brand/campaign registration. Not recurring.
3. Oct 2026 phone numbers dropped to 1.15 from 1.90. Check that both numbers (main + Aphasia) are still billed, or the Aphasia number is prorated.
4. Sept 2026 has a 0.12 Branded Calling line. Someone turned on or tested CNAM. Worth knowing before the Aphasia calls go out, branded caller ID would help pickup.

## Combined picture, 14 months
- Retell: USD 39.90
- Twilio: USD 79.31 (47 of it is the Nov 2025 one-off plus number rental)
- Total variable platform spend: about USD 120 over 14 months, under USD 9 a month
- GHL at USD 297 a month is 33x the voice stack. That's the cost conversation.
