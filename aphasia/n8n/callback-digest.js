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

// Brand
const ink = '#14324A', teal = '#1F7A74', soft = '#EEF5F4', line = '#DCE6E5', muted = '#5B6B76', bg = '#F4F6F7';
const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const n = rows.length;

const card = (r, i) => `
<tr><td style="padding:0 0 12px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${line};border-radius:10px;background:#ffffff;">
    <tr><td style="padding:16px 18px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="font:600 16px/1.3 ${font};color:${ink};">${i + 1}. ${esc(r.name)}</td>
        <td align="right" style="font:600 15px/1.3 ${font};"><a href="tel:${esc(String(r.phone).replace(/[^\d+]/g, ''))}" style="color:${teal};text-decoration:none;">${esc(fmtPhone(r.phone))}</a></td>
      </tr></table>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
        <td style="background:${soft};border-radius:6px;padding:5px 10px;font:500 13px/1.3 ${font};color:${ink};">Best time: ${esc(r.best)}</td>
      </tr></table>
      ${r.summary ? `<div style="margin-top:10px;font:400 14px/1.55 ${font};color:#2B3A44;">${esc(r.summary)}</div>` : ''}
    </td></tr>
  </table>
</td></tr>`;

const intro = n
  ? `${n} donor${n === 1 ? '' : 's'} asked for a call back from today's thank you calls. Details are below, with the best time to reach each one.`
  : `No donors asked for a call back from today's thank you calls. Nothing to do today.`;

const html = `<!doctype html><html><body style="margin:0;padding:0;background:${bg};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${bg};"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  ${sample ? `<tr><td style="padding:0 0 10px 0;font:600 12px/1.4 ${font};color:#8A5A00;background:#FFF4D6;border-radius:8px;padding:8px 12px;">TEST EMAIL with sample donors. Sent to Tan only. Not real data.</td></tr><tr><td style="height:10px;"></td></tr>` : ''}
  <tr><td style="background:${ink};border-radius:12px 12px 0 0;padding:22px 26px;">
    <div style="font:700 20px/1.2 ${font};color:#ffffff;letter-spacing:.2px;">Stewardli</div>
    <div style="font:400 13px/1.4 ${font};color:#B9CCD6;margin-top:4px;">Donor thank you calls for Aphasia Institute</div>
  </td></tr>
  <tr><td style="background:#ffffff;padding:24px 26px 8px 26px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="font:700 22px/1.25 ${font};color:${ink};">Call back requests</td>
      <td align="right"><span style="display:inline-block;background:${n ? teal : '#9AA9B2'};color:#ffffff;border-radius:999px;padding:6px 14px;font:700 14px/1 ${font};">${n}</span></td>
    </tr></table>
    <div style="font:500 14px/1.4 ${font};color:${muted};margin-top:4px;">${esc(dayLabel)}</div>
    <div style="font:400 15px/1.6 ${font};color:#2B3A44;margin-top:18px;">Hi Mobbs,</div>
    <div style="font:400 15px/1.6 ${font};color:#2B3A44;margin-top:8px;">${intro}</div>
  </td></tr>
  <tr><td style="background:#ffffff;padding:16px 26px 12px 26px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows.map(card).join('')}</table>
  </td></tr>
  <tr><td style="background:#ffffff;border-radius:0 0 12px 12px;padding:4px 26px 24px 26px;font:400 15px/1.6 ${font};color:#2B3A44;">
    Thanks,<br>Tan, Stewardli
  </td></tr>
  <tr><td style="padding:16px 26px;font:400 12px/1.5 ${font};color:#8796A0;text-align:center;">
    Sent each calling day at 5:15pm from Nora's calls. Reply to this email with any questions.<br>Donor details are for call backs only. Please don't forward.
  </td></tr>
</table></td></tr></table></body></html>`;

const text = 'Hi Mobbs,\n\n' + intro + '\n\n' +
  rows.map((r, i) => (i + 1) + '. ' + r.name + ', ' + fmtPhone(r.phone) + '\n   Best time: ' + r.best + (r.summary ? '\n   ' + r.summary : '')).join('\n\n') +
  '\n\nThanks,\nTan, Stewardli';

const subject = (sample ? 'TEST (sample data): ' : '') + 'Call back requests, ' + dayLabel + ' (' + n + ')';
const to = sample ? 'tan.h@stewardli.ai' : 'misaac@aphasia.ca';
return [{ json: { to, subject, text, html, count: n, date: today, sample } }];
