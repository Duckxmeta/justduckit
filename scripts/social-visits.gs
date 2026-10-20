/**
 * JustDuckIt — Social Visit Requests (Google Apps Script)
 *
 * Deploy: script.google.com > New project > paste this file >
 * Deploy > New deployment > Web app > Execute as: Me, Access: Anyone.
 * Copy the /exec URL into the NEXT_PUBLIC_SOCIAL_WEBHOOK_URL env var (Vercel).
 *
 * On each POST it:
 *  1. Emails ducksonx@duck.com with all fields.
 *  2. Emails a confirmation to the submitter if their contact is an email.
 *  3. Appends a row to the "Social Visits" sheet (created if missing).
 */

const NOTIFY_TO = "ducksonx@duck.com";
const SHEET_NAME = "Social Visits";
const SPREADSHEET_PROP = "SOCIAL_VISITS_SPREADSHEET_ID";

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || "{}");
    const f = {
      name: clean(d.name),
      business: clean(d.business),
      address: clean(d.address),
      contact: clean(d.contact),
      request: clean(d.request),
      preferredTime: clean(d.preferredTime),
    };

    if (!f.name || !f.business || !f.address || !f.contact || !f.request) {
      return json({ ok: false, error: "Missing required fields" });
    }

    // 1. Sheet
    getSheet().appendRow([new Date(), f.name, f.business, f.address, f.contact, f.request, f.preferredTime]);

    // 2. Notification
    MailApp.sendEmail({
      to: NOTIFY_TO,
      subject: "Social visit request — " + f.business,
      body:
        "Name: " + f.name + "\n" +
        "Business: " + f.business + "\n" +
        "Address / town: " + f.address + "\n" +
        "Contact: " + f.contact + "\n" +
        "What to film: " + f.request + "\n" +
        "Preferred time: " + (f.preferredTime || "—") + "\n",
      replyTo: isEmail(f.contact) ? f.contact : NOTIFY_TO,
    });

    // 3. Confirmation (only if they gave an email)
    if (isEmail(f.contact)) {
      MailApp.sendEmail({
        to: f.contact,
        subject: "We got your visit request — JustDuckIt",
        body:
          "Hi " + f.name + ",\n\n" +
          "Thanks for requesting a visit for " + f.business + ". We received your request " +
          "and will reply if it fits our schedule and route.\n\n" +
          "— Duck, JustDuckIt\nhttps://justduckit.xyz/social\n",
        replyTo: NOTIFY_TO,
      });
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function getSheet() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty(SPREADSHEET_PROP);
  let ss;
  if (id) {
    ss = SpreadsheetApp.openById(id);
  } else {
    ss = SpreadsheetApp.create(SHEET_NAME);
    props.setProperty(SPREADSHEET_PROP, ss.getId());
  }
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Name", "Business", "Address", "Contact", "Request", "Preferred time"]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function clean(v) {
  return String(v == null ? "" : v).trim().slice(0, 2000);
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
