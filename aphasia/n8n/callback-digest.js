// n8n Code node "Build digest" (Aphasia Daily Call Back Email).
// Real run (schedule): today's open "Callback" tasks from GHL, emailed to Mobbs.
// Manual run ("Run manually (test)"): 4 SAMPLE donors, sent to Tan only. No real data.
const tz = 'America/Toronto';
const now = new Date();
const today = now.toLocaleDateString('en-CA', { timeZone: tz });
const dayLabel = now.toLocaleDateString('en-CA', { timeZone: tz, weekday: 'long', month: 'long', day: 'numeric' });

let sample = false;
try { sample = $('Run manually (test)').all().length > 0; } catch (e) {}

let rows = [];
if (sample) {
  rows = [
    { name: 'Margaret L.', phone: '+14165550142', best: 'Weekday mornings, before 11', summary: 'Called after hours. Would like to talk to someone about how her gift is used in the conversation groups.' },
    { name: 'Robert K.', phone: '+16475550187', best: 'Tomorrow after 2pm', summary: 'Asked to speak with a person about updating his mailing address.' },
    { name: 'Susan P.', phone: '+19055550163', best: 'Any time', summary: 'Wanted to know if she can switch to a monthly gift. Nora offered a call back from the team.' },
    { name: 'David M.', phone: '+14375550119', best: 'not given', summary: 'Asked to speak with someone about a tribute gift in memory of his father.' },
  ];
} else {
  let contacts = [];
  try { contacts = $('One item per contact').all().map(i => i.json).filter(c => c.id); } catch (e) {}
  let taskItems = [];
  try { taskItems = $('Get tasks').all(); } catch (e) {}
  taskItems.forEach((it, idx) => {
    const c = contacts[idx] || {};
    for (const t of (it.json.tasks || [])) {
      const added = t.dateAdded ? new Date(t.dateAdded).toLocaleDateString('en-CA', { timeZone: tz }) : '';
      if (added !== today || t.completed || !String(t.title || '').startsWith('Callback')) continue;
      const body = String(t.body || '');
      const best = (body.match(/Best time: ([^.]*)/) || [])[1] || 'not given';
      const summary = (body.match(/Call summary: (.*?) Campaign:/) || [])[1] || '';
      const first = c.firstName || c.firstNameLowerCase || '';
      const lastI = (c.lastName || '').trim().charAt(0);
      const name = first ? (first + (lastI ? ' ' + lastI.toUpperCase() + '.' : '')) : (c.name || 'Donor');
      rows.push({ name, phone: c.phone || '', best, summary });
    }
  });
}

const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const fmtPhone = p => { const d = String(p).replace(/\D/g, '').replace(/^1(?=\d{10}$)/, ''); return d.length === 10 ? d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6) : String(p); };

// Brand (stewardli.ai logo and site): green #457064, teal #3E7C78, copper #C88F6A, ink #1F2D2C, cream #F7F6F2
const green = '#457064', teal = '#3E7C78', copper = '#C88F6A', ink = '#1F2D2C', cream = '#F7F6F2';
const line = '#E7E3DA', muted = '#5F6B69', copperBg = '#F8EDE5', copperInk = '#9A6340', tealBg = '#E8F1EF';
const logo = 'https://www.stewardli.ai/images/website-logo.png';
const font = "Inter,'Segoe UI',Helvetica,Arial,sans-serif";
const n = rows.length;

const card = (r, i) => `
<tr><td style="padding:0 0 12px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};border-left:3px solid ${teal};border-radius:6px;">
    <tr><td style="padding:14px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="color:${ink};font-size:16px;font-weight:700;line-height:1.3;">${i + 1}. ${esc(r.name)}</td>
        <td align="right" style="font-size:15px;font-weight:600;line-height:1.3;white-space:nowrap;"><a href="tel:${esc(String(r.phone).replace(/[^\d+]/g, ''))}" style="color:${teal};text-decoration:none;">${esc(fmtPhone(r.phone))}</a></td>
      </tr></table>
      <div style="margin-top:8px;"><span style="display:inline-block;background:${copperBg};color:${copperInk};font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;">Best time: ${esc(r.best)}</span></div>
      ${r.summary ? `<div style="margin-top:10px;color:${ink};font-size:14px;line-height:1.6;">${esc(r.summary)}</div>` : ''}
    </td></tr>
  </table>
</td></tr>`;

const headline = n ? `${n} donor${n === 1 ? '' : 's'} asked for a call back` : 'No call backs today';
const intro = n
  ? `Hi Mobbs, here are today's call back requests from Nora's thank you calls, with the best time to reach each donor.`
  : `Hi Mobbs, no donors asked for a call back from today's thank you calls. Nothing to do today.`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(headline)}</title></head>
<body style="margin:0;padding:0;background:${cream};">
<span style="display:none;max-height:0;overflow:hidden;">${esc(headline)}, ${esc(dayLabel)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};padding:24px 12px;font-family:${font};"><tr><td align="center">
${sample ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin-bottom:10px;"><tr><td style="background:#FFF4D6;color:#8A5A00;font-size:12px;font-weight:600;padding:8px 12px;border-radius:8px;">TEST EMAIL with sample donors. Sent to Tan only. Not real data.</td></tr></table>` : ''}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid ${line};border-radius:12px;overflow:hidden;">
  <tr><td style="background:#ffffff;padding:20px 28px;border-bottom:3px solid ${copper};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="vertical-align:middle;"><img src="${logo}" width="150" alt="Stewardli.ai" style="display:block;border:0;height:auto;"></td>
      <td align="right" style="vertical-align:middle;color:${muted};font-size:12px;line-height:1.4;">Donor thank you calls<br>for Aphasia Institute</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:28px 28px 8px;">
    <div style="display:inline-block;background:${tealBg};color:${teal};font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;">Call back requests · ${esc(dayLabel)}</div>
    <h1 style="margin:14px 0 6px;color:${ink};font-size:22px;line-height:1.3;">${esc(headline)}</h1>
    <p style="margin:0;color:${muted};font-size:14px;line-height:1.6;">${intro}</p>
  </td></tr>
  ${n ? `<tr><td style="padding:18px 28px 6px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows.map(card).join('')}</table></td></tr>` : ''}
  <tr><td style="padding:10px 28px 26px;color:${ink};font-size:15px;line-height:1.6;">Thanks,<br>Tan, Stewardli</td></tr>
  <tr><td style="padding:16px 28px;border-top:1px solid ${line};color:${muted};font-size:12px;line-height:1.5;">
    Sent each calling day at 5:15pm from Nora's calls. Reply to this email with any questions.<br>Donor details are for call backs only. Please don't forward.
  </td></tr>
</table></td></tr></table></body></html>`;

const text = intro + '\n\n' +
  rows.map((r, i) => (i + 1) + '. ' + r.name + ', ' + fmtPhone(r.phone) + '\n   Best time: ' + r.best + (r.summary ? '\n   ' + r.summary : '')).join('\n\n') +
  '\n\nThanks,\nTan, Stewardli';

const subject = (sample ? 'TEST (sample data): ' : '') + 'Call back requests, ' + dayLabel + ' (' + n + ')';
const to = sample ? 'tan.h@stewardli.ai' : 'misaac@aphasia.ca';
return [{ json: { to, subject, text, html, count: n, date: today, sample } }];
