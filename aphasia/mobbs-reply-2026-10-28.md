# Mobbs's reply to Tan's script email, Oct 27 (received Oct 28)

From: Mobbs Isaac, Coordinator, Communications & Fund Development, Aphasia Institute, 416-226-3636 ext 127
To: Tan, CC Chris
Re: "Nora call script for the annual appeal, what I need from you"

Transcribed from a screenshot. [MOBBS] = her comments (red in the original). [PAUL] = Paul Mazzuchin's comments (green in the original). Some lines were cut off at the screen edge, marked [cut].

---

Hi Tan,

I am feeling a bit better. Thanks for asking.

Please find my comments below in red and Paul's in green:

## 1. Sample script
[PAUL] if person picks up phone?

Opening: "Hi, this is Nora, an AI assistant calling from Aphasia Institute. I'll be quick. Am I speaking with [first name]?" *

Appeal letter: "The annual appeal letter goes out in November. Nothing to do right now." Is "annual appeal letter" the right name?
[MOBBS] Yes. I think it should have an opener like "Just a heads up" or something like that.

Thank you: "I just wanted to thank you for supporting Talk, Walk 'n Roll this year."

Sign-off: "Thank you so much for your time. Have a lovely day."

## 2. Voicemail
Is it OK that the voicemail mentions the appeal letter coming in the mail?
[MOBBS] It's fine to mention the Annual Appeal letter in the voicemail. Since not everyone on the list supported Talk, Walk 'n Roll, it makes sense to keep the wording broader.
[PAUL] will those with email only receive email (no physical letter)? If so then add to above "or through email"

It says "your support this year" rather than "the walk," because not everyone on the list gave to the walk. Current text: *
[PAUL] for same reason why doesn't sample script (#1 above) say support instead of TWR?

"Hi [first name], this is Nora, an AI assistant calling from Aphasia Institute. I just wanted to thank you for your support this year. Your annual appeal letter [MOBBS edit: will be arriving in the mail soon]. There is nothing you need to do. Have a lovely day." *

## 3. Transfer
When a donor asks for a person, do we transfer to 416-226-3636 ext. 127, Mon to Fri, 8:30 to 4? After hours, what should Nora say?
[MOBBS] Yes, donors can be transferred to 416-226-3636 ext. 127, Monday to Friday, between 8:00 a.m. and 4:00 p.m.

[MOBBS] After hours, Nora could say:
"Our office is currently closed. Please leave a message with your name and phone number, and a member of our team will return your call as soon as possible during regular business hours."

## 4. Gift amounts
Nora never brings up an amount. If a donor asks, she answers once from their giving history. Are you OK with that?
[MOBBS] Yes, I am comfortable with Nora providing gift information if a donor specifically asks, provided that information is available in the donor record. Nora should not proactively mention gift amounts unless requested.

## 5. Data fields
We expect: name, phone, email, last gift date, gift summary, segment, and which program they gave to (walk, art sale or other). Which of these will Peter's send? *
[MOBBS] We expect donor records to include core contact information such as name, address, and, where available, phone number, email address. Additional information, such as last gift date, giving history, donor segment, or designated program/campaign, may be available for some donors but not others.

Thank you,
Mobbs

---

## What this settles (Tan's read, Oct 28)
- Office hours are 8:00 to 4:00, not 8:30. Fix the prompt's Contact Data fallback and the compliance spec.
- "Just a heads up" opener before the appeal line. Mobbs's words.
- Gratitude line: "your support this year," not Talk, Walk 'n Roll, unless program_segment = walk_and_roll is confirmed in the file. Paul and Mobbs both want this.
- Voicemail: approved, with Mobbs's edit "will be arriving in the mail soon." Paul's "or through email" depends on whether email-only donors get a letter. Ask Mobbs.
- After-hours line: Mobbs's wording, but Nora cannot take a message, so it becomes "our office is closed, they're open Monday to Friday eight to four, would you like me to note that you'd like a call back" and set callback_requested. Flag the change to Mobbs.
- Gift amounts: confirmed, answer once if asked, only if in the record.
- Fields: not guaranteed. gift date, history, segment, program may be missing per donor. Prompt must handle empty variables everywhere. program_segment defaults to none.

## Still need from Mobbs
1. Do email-only donors get a physical letter, or email only?
2. Is "Talk, Walk 'n Roll" ok to say by name when the record shows walk_and_roll, or always "your support this year"?
3. Friday time for the fields call.
