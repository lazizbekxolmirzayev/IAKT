import { IAK_ENDPOINT } from "@/module/statsConfig";
import { getUser } from "@/module/auth";

// IAK moduli natijasini umumiy jadvalga (Google Sheets) yuborish.
// Maydon nomlari kirishlar yozuvidan ataylab farqli (talaba, tur), shunda eski Apps Script kodi
// bunday so'rovni kirish deb yozib yubormaydi.
export const natijaYuborishMumkin = Boolean(IAK_ENDPOINT);

export function natijaYuborish(tur, xulosa, tafsilot) {
  if (!IAK_ENDPOINT) return Promise.resolve(false);
  const u = getUser();
  const talaba = u ? `${u.ism} ${u.familiya}` : "Noma'lum";
  // no-cors: javobni o'qib bo'lmaydi, shuning uchun muvaffaqiyat "so'rov jo'natildi" ma'nosida.
  return fetch(IAK_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      tur,
      talaba,
      vaqt: new Date().toISOString(),
      xulosa: String(xulosa).slice(0, 300),
      tafsilot: JSON.stringify(tafsilot).slice(0, 4000),
    }),
  }).then(() => true).catch(() => false);
}
