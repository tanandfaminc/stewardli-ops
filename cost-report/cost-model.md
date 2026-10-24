# Nora unit-economics model

Built from list prices on 2026-10-23. No usage exports yet. Re-run `python3 cost-model.py` to refresh. USD unless noted. FX 1.37.

**Mix:** 40% connected (1.5 min), 20% voicemail (0.3 min), 40% no answer. That is 0.66 talk minutes per attempt.

## 1. Variable cost by vendor (USD)

| Vendor | Per attempt | Per connected call | Per connected min |
|---|---|---|---|
| Retell infra + KB | 0.040 | 0.099 | 0.066 |
| ElevenLabs Flash | 0.026 | 0.066 | 0.044 |
| GPT-4.1 | 0.030 | 0.074 | 0.050 |
| LLM token surcharge (assumed) | 0.038 | 0.096 | 0.064 |
| Twilio voice | 0.015 | 0.039 | 0.026 |
| Twilio SMS (assumed 1 per connected) | 0.007 | 0.017 | 0.011 |
| **Total** | **0.156** | **0.391** | **0.261** |

Per talk minute: **0.237**. Inside the 0.20 to 0.25 target. Retell alone, incl. surcharge: 0.203 per connected minute. Matches the observed ~0.20.

Per connected minute is high because no-answer and voicemail attempts are carried by the connected calls.

## 2. Monthly cost (USD)

| Attempts | Variable | Fixed | Total | Total CAD | Per attempt |
|---|---|---|---|---|---|
| 130 | 20 | 319 | 340 | 465 | 2.61 |
| 500 | 78 | 319 | 398 | 545 | 0.80 |
| 1,000 | 156 | 319 | 476 | 652 | 0.48 |
| 5,000 | 782 | 319 | 1,101 | 1,509 | 0.22 |

Fixed: GHL 297, n8n 20, two Twilio numbers 2.30. GHL is 93% of fixed. Fixed cost, not usage, is the problem below ~2,000 attempts.

## 3. Sensitivity (variable, per talk minute)

| Scenario | USD/min | Change |
|---|---|---|
| Base | 0.237 | 0% |
| ElevenLabs +25% | 0.247 | +4.2% |
| OpenAI +25% (LLM + surcharge) | 0.263 | +10.9% |
| Retell base +25% (infra + KB) | 0.252 | +6.3% |
| All three +25% | 0.288 | +21.5% |

All three at +25% breaks the 0.25 ceiling. OpenAI exposure is largest because the surcharge rides on it.

## 4. Three biggest levers

1. **Cut prompt from 10k to 4k tokens.** Surcharge falls about 60% (assumed linear). Saves 0.023 per attempt, 15%.
2. **GPT-4.1 mini instead of GPT-4.1.** 0.0128 vs 0.045 per min. Saves 0.021 per attempt, 14%. Test voice quality first.
3. **Shorter calls, 1.5 to 1.2 min.** Saves 0.017 per attempt, 11%.

Close fourth: Retell or Cartesia voice at 0.015 vs ElevenLabs 0.040. Also 11%.

Stack all three and variable drops about 40%.

## 5. Aphasia pilot, 130 attempts, Nov 2 to 6 (CAD)

- Usage should cost about **CAD 28** (USD 20.33).
- That is about CAD 0.21 per attempt, CAD 0.54 per connected call.
- GHL, n8n, numbers run CAD 437 a month. Already paid, so not extra.
- A one-week share of fixed is CAD 73. Fully loaded: about **CAD 101**.
- Budget CAD 40 to allow for longer calls. HST (13%) not included.

## Prices

| Item | Price | Status |
|---|---|---|
| Retell infra 0.055, KB 0.005, ElevenLabs Flash 0.040, GPT-4.1 0.045 per min | Matches your breakdown | Verified |
| Retell batch dial 0.005, telephony 0.015/min | Both set to 0 (own Twilio, no batch) | Verified, not used |
| Token surcharge 0.075 to 0.10 per call | Not on Retell page | Assumed |
| Twilio Canada outbound 0.014/min, number 1.15/mo | | Verified |
| Twilio SMS 0.0083 + carrier fee up to 0.0087 | | Verified |
| GHL Unlimited 297/mo | | Verified |
| n8n 20/mo, two numbers, Twilio rounding (2/1/0.25 billed min), 1 SMS per connected call | | Assumed |

## Sources

- https://www.retellai.com/pricing
- https://www.twilio.com/en-us/voice/pricing/ca
- https://www.twilio.com/en-us/sms/pricing/ca
- https://www.gohighlevel.com/pricing
