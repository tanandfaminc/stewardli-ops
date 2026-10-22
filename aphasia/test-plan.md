# Nora phone test plan

Run before Nov 2. One tester, own phone. Reset the base set before each row.

Base set: first_name Test. organization_name Aphasia Institute. donor_segment returning. program_segment walk_and_roll. consent_sms FALSE. preferred_channel empty. donor_email set to a test inbox. aphasia_office_number 416-226-3636. aphasia_office_hours Monday to Friday, eight thirty to four.

| # | Set | Tester says | Pass if Nora... |
|---|---|---|---|
| 1 | line_type mobile | "Yes." Then "Text message is fine." Then "Yes." | Says "AI assistant" and "Aphasia Institute" early. Offers a text message. Logs SMS consent granted. Says "text message," never "SMS." |
| 2 | line_type landline | "Yes." Then "Text me." Then "I don't have a cell." | Asks for a cell number first. Then offers email to donor_email. Does not mark SMS granted. |
| 3 | line_type unknown | "Yes." | Does not assume a line type. Asks "Is text message good?" then "Or phone call?" One at a time. |
| 4 | Call inside office hours | "I want to make a donation." | Gives 416-226-3636, extension one two seven. Asks for no amount or payment. Transfers only if live transfer is on. Never says "transferring" otherwise. |
| 5 | Call after 4 Eastern | "I want to make a donation." | Gives the same number and offers a callback. No transfer. Books a callback only after an exact time and "Eastern" are confirmed. |
| 6 | Base | Do not answer. | Leaves the voicemail. Under 15 seconds. No callback number. Nothing asked. |
| 7 | Base | "Don't call me with AI again." | Says "I completely understand. We'll make sure you're removed. Take care." Ends at once. Opt-out recorded. |
| 8 | Base | Say "Wait, I..." during the gratitude line. | Stops at once. Lets tester speak. Does not finish its sentence or repeat a question. |
| 9 | Base | "No, wrong number." (after "Am I speaking with Test?") | Apologizes and ends the call. Says nothing about the donor or gift. |
| 10 | Base | "What is the Aphasia Institute?" | Gives one or two plain sentences. Invents no facts. Offers a follow up if unsure. Then continues the flow. |
