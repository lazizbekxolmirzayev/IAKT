# Kirgan foydalanuvchilarni Google Sheets'ga yig'ish

Saytga kirgan talabalarning ism-familiyasini barcha qurilmalardan bitta jadvalga yig'ish uchun
(5 daqiqalik, bir martalik sozlash).

1. Google Sheets'da yangi jadval oching (masalan, "IAKT kirishlar").
2. **Kengaytmalar → Apps Script** ni bosing, eski kodni o'chirib, pastdagi kodni qo'ying.
   `READ_KEY` ga o'zingiz o'ylab topgan uzun maxfiy so'z yozing.
3. **Joylashtirish (Deploy) → Yangi joylashtirish → Turi: Veb-ilova.**
   "Kim sifatida bajarish": **Men**; "Kimga ruxsat": **Hamma (Anyone)**. Ruxsatlarni tasdiqlang.
4. Berilgan **Web app URL** manzilini nusxalang (`https://script.google.com/macros/s/.../exec`).
5. `module/statsConfig.js` ichida:
   - `LOGIN_ENDPOINT` ga shu URL ni,
   - `LOGIN_READ_KEY` ga 2-qadamdagi `READ_KEY` ni yozing.
6. Saytni qayta joylang (Vercel). Endi har bir yangi kirish jadvalga yoziladi, `/statistika`
   sahifasidagi "Excel hisobotini yuklab olish" tugmasi esa barcha kirishlarni yuklaydi.

Kodni o'zgartirsangiz, Apps Script'da yana **Joylashtirish → Joylashtirishlarni boshqarish → Yangi versiya** qiling.

## Apps Script kodi

```javascript
const SHEET_NAME = 'Kirishlar';
const READ_KEY = 'BU_YERGA_MAXFIY_SOZ_YOZING';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(['Vaqt', 'Ism', 'Familiya']);
  return sh;
}

// Formula yuborib yuborishdan himoya: = + - @ bilan boshlansa, oldiga ' qo'yiladi
function clean_(v) {
  let s = String(v || '').trim().slice(0, 60);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const ism = clean_(d.ism), fam = clean_(d.familiya);
    if (ism && fam) getSheet_().appendRow([String(d.vaqt || new Date().toISOString()), ism, fam]);
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}

function doGet(e) {
  const out = ContentService.createTextOutput();
  out.setMimeType(ContentService.MimeType.JSON);
  if (!e.parameter.key || e.parameter.key !== READ_KEY) {
    return out.setContent(JSON.stringify({ error: 'ruxsat yoq' }));
  }
  const sh = getSheet_();
  const n = sh.getLastRow() - 1;
  const rows = n > 0 ? sh.getRange(2, 1, n, 3).getValues() : [];
  return out.setContent(JSON.stringify(rows.map(r => ({ vaqt: r[0], ism: r[1], familiya: r[2] }))));
}
```

## Muhim

- `LOGIN_READ_KEY` sayt kodida turadi, shuning uchun u haqiqiy sir emas. Ro'yxatni asosan Google
  Sheets'ning o'zidan (Fayl → Yuklab olish → Excel) ham olish mumkin.
- Ism-familiya shaxsiy ma'lumot hisoblanadi: talabalarga ular qayd etilishini ayting.
