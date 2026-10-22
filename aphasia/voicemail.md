# Nora voicemail (no answer)

Variables: {{first_name}}, {{organization_name}}
Spoken length: about 12 to 15 seconds.
Do not add a callback number. Do not ask for anything.

## Variant A (recommended)

"Hi {{first_name}}, this is Nora, an AI assistant calling from {{organization_name}}. I just wanted to thank you for supporting the walk. Your annual appeal letter is on its way. There is nothing you need to do. Have a lovely day."

## Variant B

"Hi {{first_name}}, this is Nora, an AI assistant calling from {{organization_name}}. Thank you for supporting the walk. Your annual appeal letter is on its way. Nothing you need to do, and nothing to call back about. Have a lovely day."

## Variant C (if the donor list mixes walk, art sale and other gifts)

"Hi {{first_name}}, this is Nora, an AI assistant calling from {{organization_name}}. I just wanted to thank you for your support this year. Your annual appeal letter is on its way. There is nothing you need to do. Have a lovely day."

## Recommendation

Variant A if every donor on the Nov list gave to the walk. Variant C if not. Or use {{program_name}} as a variable with "your support this year" as the fallback when it's empty.

## To apply in Retell
- Agent > Voicemail detection > leave message. Paste the chosen variant.
- The live voicemail section in the prompt uses {{customer_name}} and says no campaign mention. Replace it with this. Paul wants voicemail on.
- Retell's voicemail message supports dynamic variables the same way the prompt does.
