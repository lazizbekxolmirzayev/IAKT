"use client";
import React, { useCallback, useEffect, useState } from "react";
import { LOGIN_ENDPOINT, LOGIN_READ_KEY } from "@/module/statsConfig";
import { LOG_KEY } from "@/module/auth";

const pad = (n) => String(n).padStart(2, "0");
const dateStr = (d) => `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
const timeStr = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const fileDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function readLocal() {
  try {
    return JSON.parse(window.localStorage.getItem(LOG_KEY) || "[]");
  } catch {
    return [];
  }
}

function normalize(list) {
  return (Array.isArray(list) ? list : [])
    .map((e) => ({ ism: String(e.ism ?? "").trim(), familiya: String(e.familiya ?? "").trim(), d: new Date(e.vaqt) }))
    .filter((e) => e.ism && e.familiya && !Number.isNaN(e.d.getTime()))
    .sort((a, b) => a.d - b.d);
}

export default function KirishlarHisobot() {
  const [entries, setEntries] = useState([]);
  const [source, setSource] = useState("loading"); // loading | remote | local | error
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setSource("loading");
    if (LOGIN_ENDPOINT) {
      try {
        const res = await fetch(`${LOGIN_ENDPOINT}?key=${encodeURIComponent(LOGIN_READ_KEY)}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setEntries(normalize(data));
          setSource("remote");
          return;
        }
        throw new Error("ruxsat yo'q");
      } catch {
        setEntries(normalize(readLocal()));
        setSource("error");
        return;
      }
    }
    setEntries(normalize(readLocal()));
    setSource("local");
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const total = entries.length;
  const unique = new Set(entries.map((e) => `${e.ism} ${e.familiya}`.toLowerCase())).size;
  const todayKey = dateStr(new Date());
  const today = entries.filter((e) => dateStr(e.d) === todayKey).length;
  const latest = [...entries].reverse(); // hammasi, eng yangisi tepada

  async function download() {
    if (!total) return;
    setBusy(true);
    try {
      const XLSX = await import("xlsx");
      const now = new Date();

      // 1-varaq: hisobot (xulosa)
      const byDay = {};
      entries.forEach((e) => {
        const k = dateStr(e.d);
        byDay[k] = (byDay[k] || 0) + 1;
      });
      const summary = [
        ["IAKT platformasi: kirishlar hisoboti"],
        [],
        ["Hisobot sanasi", `${dateStr(now)} ${timeStr(now)}`],
        ["Jami kirishlar", total],
        ["Noyob foydalanuvchilar", unique],
        ["Birinchi kirish", `${dateStr(entries[0].d)} ${timeStr(entries[0].d)}`],
        ["Oxirgi kirish", `${dateStr(entries[total - 1].d)} ${timeStr(entries[total - 1].d)}`],
        [],
        ["Sana", "Kirishlar soni"],
        ...Object.entries(byDay),
      ];
      const ws1 = XLSX.utils.aoa_to_sheet(summary);
      ws1["!cols"] = [{ wch: 26 }, { wch: 22 }];

      // 2-varaq: kirishlar ro'yxati
      const rows = entries.map((e, i) => ({
        "№": i + 1,
        Ism: e.ism,
        Familiya: e.familiya,
        Sana: dateStr(e.d),
        Vaqt: timeStr(e.d),
      }));
      const ws2 = XLSX.utils.json_to_sheet(rows);
      ws2["!cols"] = [{ wch: 5 }, { wch: 18 }, { wch: 22 }, { wch: 12 }, { wch: 8 }];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws1, "Hisobot");
      XLSX.utils.book_append_sheet(wb, ws2, "Kirishlar");
      XLSX.writeFile(wb, `IAKT_kirishlar_${fileDate(now)}.xlsx`);
    } finally {
      setBusy(false);
    }
  }

  const notice = {
    remote: "Ma'lumot umumiy jadvaldan (Google Sheets) olindi: barcha qurilmalardagi kirishlar.",
    local: "Umumiy jadval ulanmagan: faqat shu qurilmadagi kirishlar ko'rsatilmoqda. Barcha talabalarni ko'rish uchun GOOGLE_SHEETS_ULASH.md ko'rsatmasi bo'yicha ulang.",
    error: "Umumiy jadvalga ulanib bo'lmadi (manzil yoki kalitni tekshiring). Hozircha faqat shu qurilmadagi kirishlar ko'rsatilmoqda.",
    loading: "Yuklanmoqda…",
  }[source];

  return (
    <div className="mb-8 p-5 rounded-2xl border border-white/10 bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl font-semibold">Kirgan foydalanuvchilar</h2>
          <p className="text-xs opacity-60 mt-1">{notice}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={load}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition-colors"
          >
            Yangilash
          </button>
          <button
            type="button"
            onClick={download}
            disabled={!total || busy}
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
          >
            {busy ? "Tayyorlanmoqda…" : "Excel hisobotini yuklab olish"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          ["Jami kirishlar", total],
          ["Noyob foydalanuvchilar", unique],
          ["Bugun", today],
        ].map(([n, v]) => (
          <div key={n} className="rounded-xl border border-white/10 bg-black/10 p-3">
            <div className="text-[11px] uppercase tracking-wider opacity-60">{n}</div>
            <div className="text-2xl font-bold mt-1">{v}</div>
          </div>
        ))}
      </div>

      {latest.length ? (
        <div className="overflow-auto max-h-[480px] rounded-xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-800 text-white sticky top-0">
              <tr>
                <th className="p-2">Ism</th>
                <th className="p-2">Familiya</th>
                <th className="p-2">Sana</th>
                <th className="p-2">Vaqt</th>
              </tr>
            </thead>
            <tbody>
              {latest.map((e, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-2">{e.ism}</td>
                  <td className="p-2">{e.familiya}</td>
                  <td className="p-2">{dateStr(e.d)}</td>
                  <td className="p-2">{timeStr(e.d)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm opacity-70">Hozircha kirishlar yo&apos;q.</p>
      )}
    </div>
  );
}
