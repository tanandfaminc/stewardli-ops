#!/usr/bin/env python3
"""Stewardli / Nora unit-economics model. List prices only, no usage exports.
Edit the PARAMS block and re-run: python3 cost-model.py
Prices in USD. FX converts to CAD for the pilot. Tag V = verified 2026-10-23, A = assumed."""

P = dict(
    # Retell per-minute components (V: retellai.com/pricing)
    retell_infra=0.055,      # V
    tts_elevenlabs=0.040,    # V (ElevenLabs Flash)
    llm_gpt41=0.045,         # V (GPT-4.1 standard)
    kb=0.005,                # V
    batch_dial=0.0,          # V price is 0.005 per dial. Set to 0.005 if GHL/n8n uses Retell batch calls
    retell_telephony=0.0,    # V 0.015 only if Retell-managed telephony. 0 = own Twilio via SIP
    token_surcharge=0.0875,  # A midpoint of 0.075 to 0.10 per connected call, ~10k token prompt
    prompt_tokens=10000,     # A
    # Call mix and durations
    conn_rate=0.40, vm_rate=0.20, na_rate=0.40,   # A
    conn_min=1.5, vm_min=0.3, na_min=0.0,         # A
    # Twilio (V: twilio.com/en-us/voice/pricing/ca, /sms/pricing/ca)
    tw_per_min=0.0140,       # V Canada outbound
    tw_billed_conn=2.0,      # A 1.5 min rounds up to 2 billed minutes
    tw_billed_vm=1.0,        # A
    tw_billed_na=0.25,       # A short attempt
    tw_number=1.15,          # V per Canadian local number per month
    tw_numbers=2,            # A outbound + inbound forward
    sms_per_connected=1.0,   # A one follow-up SMS per connected call (set 0 to drop)
    sms_price=0.0083 + 0.0087,  # V long code base + Bell/Virgin carrier fee (worst case)
    # Fixed
    ghl=297.0,               # V Unlimited plan, one sub-account
    n8n=20.0,                # A self-hosted
    fx=1.37,
    target_lo=0.20, target_hi=0.25,
)


def model(p, mult=None):
    m = dict(eleven=1.0, openai=1.0, retell=1.0)
    if mult:
        m.update(mult)
    infra = (p["retell_infra"] + p["kb"]) * m["retell"]
    voice = p["tts_elevenlabs"] * m["eleven"]
    llm = p["llm_gpt41"] * m["openai"]
    sur_call = p["token_surcharge"] * m["openai"]
    cm, vm = p["conn_min"], p["vm_min"]
    talk = p["conn_rate"] * cm + p["vm_rate"] * vm + p["na_rate"] * p["na_min"]
    # surcharge: full on connected, scaled by minutes on voicemail
    sur = sur_call * (p["conn_rate"] + p["vm_rate"] * vm / cm)
    tw_min = (p["conn_rate"] * p["tw_billed_conn"] + p["vm_rate"] * p["tw_billed_vm"]
              + p["na_rate"] * p["tw_billed_na"])
    v = {
        "Retell voice infra + KB": infra * talk,
        "ElevenLabs (via Retell)": voice * talk,
        "OpenAI GPT-4.1 (via Retell)": llm * talk,
        "LLM token surcharge": sur,
        "Retell batch/telephony": (p["batch_dial"] + p["retell_telephony"] * talk) ,
        "Twilio voice": tw_min * p["tw_per_min"],
        "Twilio SMS": p["conn_rate"] * p["sms_per_connected"] * p["sms_price"],
    }
    fixed = {
        "GoHighLevel": p["ghl"],
        "n8n hosting": p["n8n"],
        "Twilio numbers": p["tw_number"] * p["tw_numbers"],
    }
    return v, fixed, talk


def tables(p=P):
    out = []
    v, fixed, talk = model(p)
    att = sum(v.values())
    conn_min_per_att = p["conn_rate"] * p["conn_min"]
    out.append("## 1. Variable cost by vendor (USD)")
    out.append(f"{'Vendor':32}{'/attempt':>10}{'/connected call':>17}{'/connected min':>16}")
    for k, x in v.items():
        out.append(f"{k:32}{x:10.4f}{x / p['conn_rate']:17.4f}{x / conn_min_per_att:16.4f}")
    out.append(f"{'TOTAL':32}{att:10.4f}{att / p['conn_rate']:17.4f}{att / conn_min_per_att:16.4f}")
    out.append(f"Per talk minute (connected + voicemail, {talk:.2f} min/attempt): {att / talk:.4f}  (target {p['target_lo']} to {p['target_hi']})")
    direct = (p["retell_infra"] + p["kb"] + p["tts_elevenlabs"] + p["llm_gpt41"]) + p["token_surcharge"] / p["conn_min"]
    out.append(f"Retell effective per connected min incl. surcharge: {direct:.4f}  (observed ~0.20)")
    fx_tot = sum(fixed.values())
    out.append("")
    out.append("## 2. Monthly cost by volume (USD)")
    out.append(f"{'Attempts/mo':>12}{'Variable':>11}{'Fixed':>9}{'Total':>10}{'Total CAD':>11}{'Per attempt':>13}{'Per talk min':>14}")
    for n in (130, 500, 1000, 5000):
        var = att * n
        tot = var + fx_tot
        out.append(f"{n:12,}{var:11.2f}{fx_tot:9.2f}{tot:10.2f}{tot * p['fx']:11.2f}{tot / n:13.3f}{tot / (n * talk):14.3f}")
    out.append(f"Fixed detail: " + ", ".join(f"{k} {x:.2f}" for k, x in fixed.items()))
    out.append("")
    out.append("## 3. Sensitivity (variable cost per talk minute, USD)")
    out.append(f"{'Scenario':34}{'$/talk min':>11}{'Change':>9}")
    base = att / talk
    for name, mult in [("Base", None), ("ElevenLabs +25%", dict(eleven=1.25)),
                       ("OpenAI +25% (LLM + surcharge)", dict(openai=1.25)),
                       ("Retell base +25% (infra + KB)", dict(retell=1.25)),
                       ("All three +25%", dict(eleven=1.25, openai=1.25, retell=1.25))]:
        vv, _, t = model(p, mult)
        x = sum(vv.values()) / t
        out.append(f"{name:34}{x:11.4f}{(x / base - 1) * 100:8.1f}%")
    out.append("")
    out.append("## 4. Levers (variable USD saved per attempt, and % of base)")
    levers = []
    q = dict(p, token_surcharge=p["token_surcharge"] * 0.4)  # 10k -> 4k tokens, assumed linear
    levers.append(("Cut prompt 10k to 4k tokens (surcharge -60%)", q))
    q = dict(p, tts_elevenlabs=0.015)
    levers.append(("Cheaper voice: Retell/Cartesia voice 0.015 vs ElevenLabs Flash 0.040", q))
    q = dict(p, llm_gpt41=0.0128)
    levers.append(("GPT-4.1 mini 0.0128 vs 0.045 (quality test first)", q))
    q = dict(p, conn_min=1.2, tw_billed_conn=2.0)
    levers.append(("Shorter calls 1.5 to 1.2 min (-20%)", q))
    rows = []
    for name, q in levers:
        vv, _, t = model(q)
        a2 = sum(vv.values())
        rows.append((att - a2, name))
    for s, name in sorted(rows, reverse=True):
        out.append(f"{name:72}save {s:.4f}/attempt ({s / att * 100:.0f}%)")
    out.append("")
    out.append("## 5. Aphasia pilot, 130 attempts, Nov 2 to 6 (CAD)")
    n = 130
    var = att * n
    out.append(f"Variable usage: CAD {var * p['fx']:.2f}  (USD {var:.2f})")
    out.append(f"Fixed per month: CAD {fx_tot * p['fx']:.2f}  (GHL, n8n, numbers; already paid, not incremental)")
    out.append(f"Pilot week share of fixed (5/30 days): CAD {fx_tot * p['fx'] * 5 / 30:.2f}")
    out.append(f"Fully loaded pilot (variable + week share): CAD {(var + fx_tot * 5 / 30) * p['fx']:.2f}")
    out.append(f"Cash out of pocket if fixed already paid: CAD {var * p['fx']:.2f}. Add 13% HST where charged.")
    return "\n".join(out)


if __name__ == "__main__":
    print(tables())
