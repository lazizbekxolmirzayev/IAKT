// Statistika sozlamalari.
// Bu yerdagi ikkita qiymatni o'zingiznikiga almashtiring (pastdagi ko'rsatma).

// Sayt egasining Google hisobi (gmail). Barcha statistika shu hisobga bog'lanadi.
export const OWNER_EMAIL = "rajabovasliddin254@gmail.com";

// 1) Google Analytics 4 o'lchov identifikatori (Measurement ID).
//    Qayerdan olasiz: analytics.google.com -> Admin -> Data Streams -> Web -> "G-..." ko'rinishida.
//    Hozircha bo'sh qoldirildi: to'ldirilmasa, kuzatuv skripti yuklanmaydi.
export const GA_MEASUREMENT_ID = "G-4WHBDLN218";

// 2) Looker Studio hisobotining EMBED URL manzili (yoki shunchaki report ID).
//    Qayerdan olasiz: Looker Studio'da GA4 ma'lumotidan hisobot yasang -> "Share"/"Ulashish"
//    -> "Embed report" -> iframe'ning src manzilini nusxalang.
//    Masalan: https://lookerstudio.google.com/embed/reporting/XXXX/page/YYYY
//    Shu manzilni (yoki faqat report ID'ni) quyiga joylashtiring.
//    Muhim: hisobotni faqat o'z Google hisobingizga ulasangiz, boshqalar uni ko'ra olmaydi.
export const LOOKER_REPORT_ID = "";

// 3) Maxfiy sahifaga kirish uchun PIN. PIN kodning o'zi emas, uning SHA-256 xeshi saqlanadi (hozirgi PIN: 1234).
//    Yangi PIN uchun xeshni brauzer konsolida hisoblang:
//    crypto.subtle.digest("SHA-256", new TextEncoder().encode("YANGI_PIN")).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")))
//    DIQQAT: statik saytda bu faqat yuzaki himoya.
export const STATS_PIN_HASH = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";

// 4) Kirgan foydalanuvchilar (ism-familiya) ro'yxatini barcha qurilmalardan yig'ish uchun Google Apps Script manzili.
//    Sozlash bo'yicha ko'rsatma: loyiha ildizidagi GOOGLE_SHEETS_ULASH.md fayli.
//    Bo'sh qoldirilsa, kirishlar faqat shu brauzerda saqlanadi (statistikada faqat shu qurilmadagilar ko'rinadi).
export const LOGIN_ENDPOINT = "";
// Apps Script ichidagi READ_KEY bilan bir xil bo'lgan maxfiy kalit (ro'yxatni o'qish uchun).
export const LOGIN_READ_KEY = "";
