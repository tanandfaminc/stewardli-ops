# New field: how each donor gets the appeal (appeal_channel)

Oct 29. Tan's call. Not built. Nothing in Retell or GHL yet.

## Why
Voicemail says "arriving in the mail or through email soon" for everyone (Mobbs, Oct 29). Better: say the channel that donor actually gets.

## Field
| Where | Name | Type | Values |
|---|---|---|---|
| Donor file (Peter) | which donors get the letter by mail, which by email | column | mail / email |
| GHL MVP sub-account | appeal_channel | Dropdown single, Additional Info | mail, email, unknown |
| Retell dynamic variable | {{appeal_delivery}} | text, filled by n8n from appeal_channel | see mapping |

## Mapping (n8n fills the spoken phrase, Nora never sees the raw value)
| appeal_channel | {{appeal_delivery}} |
|---|---|
| mail | in the mail |
| email | by email |
| unknown or empty | in the mail or through email |

n8n must always send a value. The voicemail is a static sentence, so an empty variable would be read as a gap ("arriving  soon").

## Voicemail (Retell static sentence)
"Hi {{first_name}}, this is Nora, an AI assistant calling from {{organization_name}}. I just wanted to thank you for your support this year. Your annual appeal letter will be arriving {{appeal_delivery}} soon. There is nothing you need to do. Have a lovely day."

## Live call
No change. The appeal mention ("goes out in November") does not name a channel. Optional later: same variable in the Step 2 heads up.

## To confirm with Mobbs (Fri Oct 30)
1. Does the file show who gets mail and who gets email? Can Peter add a column?
2. Anyone getting both?
3. Email send date, same as the mail date (Nov 5 or 6)?

## Build order (each needs Tan's go)
1. Peter adds the column. 2. GHL field appeal_channel. 3. n8n: map to appeal_delivery on the outbound call. 4. Retell voicemail + prompt Voicemail section. 5. Test row: one mail, one email, one empty.
