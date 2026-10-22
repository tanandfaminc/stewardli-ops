# Prompt C: LinkedIn prospecting tool (Chris)

Owner: Chris. Tan supports. Rules in CLAUDE.md.

Build a prospecting tool for Chris Nithiananthan at Stewardli. Goal: find Canadian nonprofit contacts (development directors, fund development coordinators, executive directors, board chairs) at small to mid-size orgs, and draft a personalized LinkedIn connection note for each in Chris's voice. This replaces a cold email list that validated 2 of ~25 contacts.

Constraints: Fred's leads are Fred's, don't touch his list. No paid tools without a yes. Respect LinkedIn terms: no automated connecting or messaging. The tool produces a list and drafts. Chris sends by hand.

Work as an orchestrator. Agent tool: model "haiku" for scraping public pages, parsing, formatting; model "sonnet" for writing notes and judging fit. You review every note before it goes in the output.

Phase 1, sources (haiku): CharityVillage job postings and org directory, CanadaHelps charity profiles, Imagine Canada member list, Ontario Nonprofit Network. Per org: name, city, revenue band if visible, cause area, website, named fundraising staff.

Phase 2, fit scoring (sonnet): 1 to 5 on: small enough to lack a stewardship team, has an annual appeal or event, has a named fundraising contact. Keep 4 and 5 only.

Phase 3, notes (sonnet): per kept contact, one LinkedIn connection note under 300 characters. Voice: Chris is a 20-year nonprofit fundraiser and board member, warm, direct, no pitch in the first message. Mention one specific thing about their org. Three variants. Position as "stewardship, not operations." Never mention AI in the first note.

Output: prospecting/contacts-batch-01.csv (org, contact, role, score, source URL, note v1, v2, v3) plus prospecting/README.md on how Chris uses it. Start with 25 so Chris can review the format before scaling.
