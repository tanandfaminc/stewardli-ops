# Nora Retell V7: what changed from the Oct 27 draft (plain English)

Old repo names: this was "V9" and the Oct 27 draft was "V8". See aphasia/archive/README.md.

Oct 28, 2026. Based on Mobbs's and Paul's notes of Oct 28.
Full prompt: aphasia/nora-prompt-retell-v7.md. In Retell Draft V7 since Oct 28, 11:10pm (Tan's go). Not published.

## What Nora says differently

**1. The appeal mention has your opener.**
Before: "The annual appeal goes out in November. No action needed today."
Now: "Just a heads up, the annual appeal letter goes out in November. Nothing to do right now."
She still says it once, as its own turn, after the thank you.

**2. The thank you no longer assumes the walk.**
Default for everyone: "I just wanted to thank you for your support this year. It truly makes a meaningful difference."
Nora names Talk, Walk 'n Roll or the art sale only when the donor's record shows that program. If the record is empty, she uses the default.
Same fix for when a donor asks "for what?". Before, she always said "You supported the walk back in June." Now she says "You supported Aphasia Institute this year" unless the record shows a program.

**3. The campaign name is never said aloud.**
Before, Nora could say "thank you for your support with Aphasia Annual Appeal 2026," which sounds like they already gave to the appeal. That is gone. She says "your support" or "Aphasia Institute."

**4. Office hours are 8 to 4.**
Before: 8:30 to 4. Now: Monday to Friday, eight in the morning to four in the afternoon.

**5. Asking for a person.**
Office open: "Of course. The office number is four one six, two two six, three six three six. Ask for extension one two seven. They're open until four today. Or I can ask someone from the Institute to call you back. Which is easier?"
Office closed (weekends, before 8, after 4): "Our office is closed right now. They're open Monday to Friday, eight in the morning to four in the afternoon. Would you like someone from the Institute to call you back?"
If yes, she asks once what time of day is best and notes it. She does not promise an exact time.

**Change from your wording:** you suggested "Please leave a message with your name and phone number." Nora cannot take a message on a live call. She logs a call back request instead, with the donor's best time. If a donor asks to leave a message she says: "I can't take a message. I can ask someone to call you back. Would that be okay?"

She cannot know holidays. On a stat holiday she will still give the regular hours.

**6. Gift amounts.**
Same as you approved: Nora never brings up an amount, date or history. If a donor asks "how much did I give?", she answers once from the record. If the record has nothing, she says: "I don't have that detail. The office can help at extension one two seven."

**7. Voicemail uses your edit.**
"Hi [first name], this is Nora, an AI assistant calling from Aphasia Institute. I just wanted to thank you for your support this year. Your annual appeal letter will be arriving in the mail soon. There is nothing you need to do. Have a lovely day."
Paul's "or through email" goes in only if some donors get the appeal by email only.

**8. Missing information is fine.**
Any donor can be missing segment, program, gift date, gift history or email. Nora skips what isn't there and never says "unknown" or "blank." If only a full name is in the file, she uses it in the opener.

## What did not change
- Opener, AI disclosure in the first ten seconds, identity check.
- Not a fundraising call. No asks, no pledges, no payment details.
- One thing per turn. Accessible conversation rules. Opt out rules.
- Text message and cell phone questions (Step 2B and Step 5).

## Internal notes (for Tan, not Mobbs)
- Haiku check: no dashes, no exclamation marks, no "annual campaign", no money asks, all acknowledgements five words or fewer. "Just a heads up" is an idiom under accessible rules but stays because it is Mobbs's wording.
- Several V8 lines run 16 to 21 words (walk and art sale thank yous, Step 5 consent line, closing question). Not changed in V9 because they are already in the test plan. Revisit after Nov 2 tests if Nora sounds rushed.
- New variable {{last_gift_amount}}. n8n must pass it, or Nora falls back to {{gift_summary}}, then to the office line.
- After hours check reads {{current_calendar_America/Toronto}} and {{current_time_America/Toronto}}. Add test rows: call at 3:55 PM and 4:05 PM weekday, and Saturday.
- Live transfer to ext 127 only fires if the outbound agent has the transfer tool and the office is open. Confirm whether it's enabled before Nov 4.
- callback_requested now means "the Institute calls back," not Nora. Someone has to send Mobbs that list. Not built.
- Add test rows: program_segment empty (default line), first_name empty, gift question with empty record, campaign name never spoken.


## Oct 29 update (Mobbs's answers, in Retell Draft V7 at 10:01am)
- Thank you says "your support this year" for everyone. No program names, including the art sale.
- Voicemail: "Your annual appeal letter will be arriving in the mail or through email soon."

## Oct 29 11:10am update (after test A, Tan's go, in Retell Draft V7)
- Removed the phonetic spelling from the prompt. Nora read it aloud on test A. Pronunciation stays in Retell's pronunciation dictionary (Speech settings), which already had Aphasia, aphasia, Stewardli. If corrected, Nora says "Sorry about that." and carries on.
- Step 2B made explicit: after the appeal mention, the next question is "Is this a cell phone?" when line type is unknown. Nora skipped it on test A.
- Name rule: never "Thanks" or "Okay" followed by the name.
- Critical Rules: never read or explain pronunciation, never "Thanks for letting me know", no dashes even in explanations.
- Segment: GHL uses new / active / lapsed / monthly / major / unknown. active, monthly, major now = returning.

## Oct 29 11:20am update (after test B, in Retell Draft V7)
- Texts never asked twice. If asked in Step 2B, Step 5 is skipped.
- Gift question with nothing on file: gives the full office number with extension one two seven (Tan's note).
- Step 4: only "I see we have..." when the preferred channel field has a value. Nora invented "phone call" on test B with the field empty.
- No check-in questions after statements ("Let me know if that works", "Is that okay?", "Let me know if that makes sense"). "Thanks for checking" banned.

## Oct 29 2:05pm update (after test C, in Retell Draft V7)
- Line type landline: skip "Is this a cell phone?", go straight to the cell number question. Appeal mention is its own turn, wait for a reply before Step 2B.
- Cell number "yes" with no digits: ask "What's the number?" before moving on.
- LANDLINE RULE at the top of Step 5: landline and no cell number given = never ask about texts.
- Personal connection to aphasia: "Thank you for sharing that." once, same tone and pace, no accessible mode. No filler words (um, uh).

## Oct 29 2:10pm update (after test C rerun)
- Step 3: if the donor says yes to "anything you'd like to know about how your support is being used?", answer in one or two sentences before moving on.
