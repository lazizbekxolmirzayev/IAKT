"use client";
import { useEffect, useState } from "react";
import { LOGIN_ENDPOINT } from "@/module/statsConfig";

// ============================================================================
// ODDIY KIRISH TIZIMI (ism va familiya)
// Parol yo'q: foydalanuvchi ism-familiyasini yozadi va saytga kiradi.
// Ma'lumot faqat shu brauzerning localStorage'ida saqlanadi (serverga yuborilmaydi).
//
// REQUIRE_LOGIN = true  -> ism kiritmagan foydalanuvchi avval /kirish sahifasiga yo'naltiriladi.
// REQUIRE_LOGIN = false -> sayt hammaga ochiq, kirish ixtiyoriy (menyuda "Kirish" tugmasi turadi).
// ============================================================================
export const REQUIRE_LOGIN = true;

const KEY = "iakt_user";
const EVENT = "iakt-auth";
export const LOG_KEY = "iakt_logins";

function recordLogin(u) {
  // 1) shu brauzerdagi jurnal (zaxira)
  try {
    const list = JSON.parse(window.localStorage.getItem(LOG_KEY) || "[]");
    list.push({ ism: u.ism, familiya: u.familiya, vaqt: u.vaqt });
    window.localStorage.setItem(LOG_KEY, JSON.stringify(list.slice(-500)));
  } catch {}
  // 2) umumiy jadvalga (Google Sheets) yuborish
  if (LOGIN_ENDPOINT) {
    try {
      fetch(LOGIN_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ism: u.ism, familiya: u.familiya, vaqt: u.vaqt }),
      }).catch(() => {});
    } catch {}
  }
}

export function getUser() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const u = JSON.parse(raw);
    return u && u.ism && u.familiya ? u : null;
  } catch {
    return null;
  }
}

export function setUser(ism, familiya) {
  const u = { ism: ism.trim(), familiya: familiya.trim(), vaqt: new Date().toISOString() };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(u));
  } catch {}
  recordLogin(u);
  window.dispatchEvent(new Event(EVENT));
  return u;
}

export function clearUser() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

// undefined = hali tekshirilmoqda, null = kirmagan, obyekt = kirgan
export function useUser() {
  const [user, setUserState] = useState(undefined);
  useEffect(() => {
    const read = () => setUserState(getUser());
    read();
    window.addEventListener(EVENT, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);
  return user;
}
