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

## IAK natijalarini yig'ish

Talaba IAK moduli sahifasida «Natijani o'qituvchiga yuborish» tugmasini bossa, natija shu jadvalning
**IAK natijalari** varag'iga yoziladi (vaqt, talaba ismi, tur, qisqa xulosa, tafsilot).
Qo'shimcha manzil kerak emas: `module/statsConfig.js` dagi `IAK_ENDPOINT` avtomatik `LOGIN_ENDPOINT` bilan bir xil.

Agar kirishlar uchun skriptni avval sozlagan bo'lsangiz, faqat quyidagi yangi kodni Apps Script'ga qo'ying va
**Joylashtirish → Joylashtirishlarni boshqarish → Yangi versiya** qiling. Manzil o'zgarmaydi.
`LOGIN_ENDPOINT` bo'sh bo'lsa, tugma saytda ko'rinmaydi.

## Apps Script kodi

```javascript
const SHEET_NAME = 'Kirishlar';
const IAK_SHEET_NAME = 'IAK natijalari';
const READ_KEY = 'BU_YERGA_MAXFIY_SOZ_YOZING';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(['Vaqt', 'Ism', 'Familiya']);
  return sh;
}

function getIakSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(IAK_SHEET_NAME);
  if (!sh) sh = ss.insertSheet(IAK_SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(['Vaqt', 'Talaba', 'Tur', 'Xulosa', 'Tafsilot (JSON)']);
  return sh;
}

// Formula yuborib yuborishdan himoya: = + - @ bilan boshlansa, oldiga ' qo'yiladi
function clean_(v, max) {
  let s = String(v || '').trim().slice(0, max || 60);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.tur) {
      // IAK moduli natijasi
      const tur = clean_(d.tur, 40);
      const talaba = clean_(d.talaba, 120);
      if (tur && talaba) {
        getIakSheet_().appendRow([
          String(d.vaqt || new Date().toISOString()),
          talaba,
          tur,
          clean_(d.xulosa, 300),
          clean_(d.tafsilot, 4000),
        ]);
      }
    } else {
      const ism = clean_(d.ism), fam = clean_(d.familiya);
      if (ism && fam) getSheet_().appendRow([String(d.vaqt || new Date().toISOString()), ism, fam]);
    }
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
- Ism-familiya va IAK natijalari shaxsiy ma'lumot hisoblanadi: talabalarga ular qayd etilishini ayting.
- Yuborilgan natijani brauzer o'qiy olmaydi (`no-cors`), shuning uchun «Yuborildi» yozuvi faqat so'rov jo'natilganini bildiradi. Ishonch uchun jadvalni tekshiring.
