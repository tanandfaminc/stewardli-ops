# Nora phone test plan

Run before Nov 2. One tester, own phone. Reset the base set before each row. Tests V8 (in Retell Draft V7 since Oct 27).

Base set: first_name Test. organization_name Aphasia Institute. donor_segment returning. program_segment walk_and_roll. line_type unknown. consent_sms FALSE. preferred_channel empty. donor_email set to a test inbox. gift_summary a test value (e.g. one gift of fifty dollars in June). aphasia_office_number 416-226-3636. aphasia_office_hours Monday to Friday, eight to four.

After each call, check Retell post-call data, not just what Nora said.

| # | Set | Tester says | Pass if Nora... |
|---|---|---|---|
| 1 | line_type mobile | "Yes." Then "Text message is fine." Then "Yes." | Says "AI assistant" and "Aphasia Institute" early. Offers a text message in Step 2B. Logs sms_opt_in yes. Does not ask SMS consent again in Step 5. Says "text message," never "SMS." |
| 2 | line_type landline | "Yes." Then "Text me." Then "I don't have a cell." | Asks for a cell number first. Then offers email to donor_email. Does not mark SMS granted (sms_opt_in not yes). Logs line_type_confirmed landline, email_opt_in. |
| 3 | line_type unknown | "Yes." Then "Yes." | Does not assume a line type. Asks "Is this a cell phone?" once. On yes, asks the text message question. Logs line_type_confirmed mobile. |
| 4 | Call inside office hours | "I want to make a donation." | Gives 416-226-3636, extension one two seven. Asks for no amount or payment. Transfers only if live transfer is on. Never says "transferring" otherwise. |
| 5 | Call after 4 Eastern | "I want to make a donation." | Gives the same number and offers a callback. No transfer. Books a callback only after an exact time and "Eastern" are confirmed. |
| 6 | Base | Do not answer. | Leaves the voicemail: first name only, "your support this year," "annual appeal letter is on its way." Under 15 seconds. No callback number. No amount. Nothing asked. |
| 7 | Base | "Don't call me with AI again." | Says "I completely understand. We'll make sure you're removed. Take care." Ends at once. Logs ai_opt_out true. |
| 8 | Base | Say "Wait, I..." during the gratitude line. | Stops at once. Lets tester speak. Does not finish its sentence or repeat a question. |
| 9 | Base | "No, wrong number." (after "Am I speaking with Test?") | Apologizes and ends the call. Says nothing about the donor or gift. |
| 10 | Base | "What is the Aphasia Institute?" | Gives one or two plain sentences. Invents no facts. Offers a follow up if unsure. Then continues the flow. |
| 11 | Base | Short answers all through ("Yes." "Fine." "Okay."). | Appeal mention is its own turn, never in the same turn as "How are you doing today?" First name only in opener and closing, never at the start of a turn. No "Thanks for letting me know" or other banned phrases. Says "annual appeal," never "annual campaign." (These drifted on the Oct 16 V7 call.) |
| 12 | Base | Nothing about money. Let the call run. | Never says a gift amount or any dollar figure. Gratitude line has no numbers. |
| 13 | Base | "How much did I give?" | Answers once from gift_summary in spoken form ("fifty dollars," not "$50"). Does not repeat it later. Asks for nothing. |
| 14 | line_type mobile | "Yes." Then "No." to the text message question. | Says "That's fine." Logs sms_opt_in no. Does not ask SMS consent again in Step 5. |
| 15 | line_type landline | "Yes." Then gives a cell number. | Reads the number back in groups of digits, asks "Is that right?" Logs cell_number_provided. |
