# Runbook: Twilio Lookup v2 line type from n8n

## Blocker first
Twilio returns error 60601 on Canadian numbers until the account is approved by the CLNPC (Canadian numbering administrator). "Authorization must be granted to your company by the CLNPC to return data on Canada phone numbers." Apply via Twilio help article 360004563433. Turnaround unknown. Until approved, every lookup comes back type null, which the Set node below maps to unknown.

Fallback that needs no approval and no spend: skip the lookup, send every contact as line_type = unknown, and let Nora ask "Is this a cell phone?" on the call. See branching-spec.md. For 130 numbers this is the simpler path.

## 1. Cost
Line Type Intelligence: $0.008 USD per lookup. 130 numbers = $1.04. 1,000 = $8.00.

## 2. API
- `GET https://lookups.twilio.com/v2/PhoneNumbers/{E164}?Fields=line_type_intelligence`
- Basic auth: Account SID / Auth Token
- Encode the plus sign (%2B)
- Response: `line_type_intelligence.type` with values landline, mobile, fixedVoip, nonFixedVoip, personal, tollFree, premium, sharedCost, uan, voicemail, pager, unknown. `error_code` is null when fine, 60601 when Canada is not authorized.

## 3. n8n
Built-in Twilio node does SMS and Call only. No Lookup. Use HTTP Request.

HTTP Request node
- GET, URL `=https://lookups.twilio.com/v2/PhoneNumbers/{{ encodeURIComponent($json.phone) }}`
- Query param `Fields` = `line_type_intelligence`
- Auth: predefined Twilio credential, or generic basic auth
- Batching 1 item, 200 ms interval. On Error: continue using error output.

Set node, field `line_type`:
```
={{ ['mobile','landline'].includes($json.line_type_intelligence?.type) ? $json.line_type_intelligence.type : 'unknown' }}
```
Carry `contact_id` from the GHL Get node. voip, tollFree and failures all become unknown.

## 4. GHL in and out
- In: GHL node, Contact > Get Many, filter to contacts with a phone (already E.164).
- Out: GHL node, Contact > Update, custom field `line_type`. Field must exist in GHL first.
- If the node can't write custom fields: `PUT https://services.leadconnectorhq.com/contacts/{contactId}` with `Authorization: Bearer <token>`, `Version: 2021-07-28`, body `{"customFields":[{"id":"<field id>","field_value":"mobile"}]}`. Field id from `GET /locations/{locationId}/customFields`. Not verified against GHL docs, test on one contact.

## Flow
Manual Trigger > GHL Get Many > HTTP Request > Set > GHL Update. Test on 3 numbers (known mobile, known landline, bad number) before the 130.

## Sources
- https://www.twilio.com/en-us/user-authentication-identity/pricing/lookup
- https://www.twilio.com/docs/lookup/v2-api/line-type-intelligence
- https://www.twilio.com/docs/api/errors/60601
- https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio/
