# Daily call back email to Mobbs (n8n, DRAFT)

Agreed with Mobbs Oct 30: call back requests emailed to her daily.

## What it does
n8n "Aphasia Daily Call Back Email (DRAFT)" (id Q9sykihCJFwqY7Yy), **inactive**.
Weekdays 5:15pm ET (and a manual test trigger):
1. GHL contact search: tag aphasia_institute_callback.
2. Each contact's tasks. Keeps tasks created today, not completed, title starting "Callback".
3. One email to misaac@aphasia.ca. Subject "Aphasia Institute call back requests, <day> (N)". Table: donor, phone, best time, what they said. "No donors asked for a call back" when none.

Test run Oct 30 10:40am: GHL search works, 0 contacts, built the "none" email. Nothing sent.

## Supporting change (Aphasia Post Call, live)
Callback task body now: "Donor asked for a call back from the Institute. Best time: <time>. Call summary: <Retell summary>". Before it only said "Donor requested callback."

## Sender (done Oct 30, 10:45am)
Gmail node, sends as tan.h@stewardli.ai. Google Cloud: My First Project (certain-catcher-497014-t9), OAuth client "n8n Self-Hosted" (Internal, so no 7-day token expiry). Gmail API enabled Oct 30. Tan added a second client secret, old one kept so Drive and Sheets still work. Secret not stored here.
Test send Oct 30 10:45am to tan.h@stewardli.ai only ("TEST (to Tan only)" subject, the "none today" version). Recipient then set back to {{ $json.to }} = misaac@aphasia.ca. Still inactive.
Google Cloud project "Stewardli n8n Integration" is empty and flagged unused. Left alone.

## Look and test mode (Oct 30, 11am)
Branded HTML email (navy header, one card per donor: name with last initial, tap-to-call phone, best time, what they said). Code: aphasia/n8n/callback-digest.js, mirrored in the "Build digest" node.
**Run manually (test)** = 4 made-up donors, subject "TEST (sample data)", sent to tan.h@stewardli.ai only. The 5:15pm schedule uses real GHL data and goes to Mobbs. Sample test sent Oct 30.

## Not done
1. Tan to confirm the test email looks right in his inbox.
2. **Trigger risk.** A task is created only when Retell's donor_intent comes back as "callback_requested". The prompt says "set callback_requested". Test E (after hours) must confirm the donor_intent value.
3. Turn on only for calling days. Turn off after the pilot.
