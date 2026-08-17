/**
 * Dán script này vào Extensions → Apps Script của Google Sheet.
 *
 * Triển khai:
 * 1. Deploy → New deployment → Web app
 * 2. Execute as: Me
 * 3. Who has access: Anyone
 * 4. Copy URL /exec vào file .env.local (VITE_GOOGLE_SCRIPT_URL)
 *
 * Mỗi lần sửa code phải Deploy → Manage deployments → Edit → New version.
 */

var SHEET_NAME = 'DangKy'
var TIMEZONE = 'Asia/Ho_Chi_Minh'
var HEADERS = [
  'Thời gian',
  'Họ tên',
  'Số điện thoại',
  'Email',
  'Địa chỉ',
  'Nghề nghiệp',
  'Hình thức liên hệ',
  'Mục đích học',
]

function doPost(e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(15000)

  try {
    var data = parseBody_(e)
    var sheet = getSheet_()
    ensureHeaders_(sheet)

    sheet.appendRow([
      Utilities.formatDate(new Date(), TIMEZONE, 'dd/MM/yyyy HH:mm:ss'),
      data.fullName || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      data.occupation || '',
      data.contactMethod || '',
      data.learningPurpose || '',
    ])

    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function doGet() {
  return json_({ ok: true, message: 'Registration endpoint' })
}

function parseBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty body')
  }
  return JSON.parse(e.postData.contents)
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }
  return sheet
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
