"use client";
import React, { useState } from "react";

// ============================================================================
// SAYT ICHIDAGI O'ZBEKCHA MINI-SIMULYATORLAR
// 1) Bozor muvozanati  2) Kredit kalkulyatori  3) Inflyatsiya va byudjet  4) Kichik biznes  5) Valyuta kursi
// Barcha hisob-kitoblar brauzerning o'zida bajariladi (server yoki akkaunt kerak emas).
// ============================================================================

const money = (n) =>
  Number.isFinite(n) ? Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "—";
const num = (n, d = 1) =>
  Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "—";

function Slider({ label, value, min, max, step, unit, onChange }) {
  return (
    <label className="block text-left">
      <div className="flex justify-between text-xs sm:text-sm font-semibold text-blue-950 mb-1">
        <span>{label}</span>
        <span className="text-blue-600">
          {num(value, step < 1 ? 1 : 0)} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
    </label>
  );
}

function Result({ name, value, hint, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50/60 border-blue-100 text-blue-950",
    green: "bg-emerald-50 border-emerald-100 text-emerald-900",
    red: "bg-red-50 border-red-100 text-red-800",
  };
  return (
    <div className={`rounded-2xl border p-4 text-left ${tones[tone]}`}>
      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-60">{name}</div>
      <div className="text-lg sm:text-xl font-black mt-1 leading-tight">{value}</div>
      {hint ? <div className="text-xs opacity-70 mt-1">{hint}</div> : null}
    </div>
  );
}

function Task({ items }) {
  return (
    <div className="mt-6 p-4 sm:p-5 bg-blue-50/40 border border-blue-100 rounded-2xl text-left text-sm text-blue-900/80 leading-relaxed">
      <p className="font-bold text-blue-950 mb-1">IAK topshirig&apos;i</p>
      <ol className="list-decimal pl-5 space-y-1">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-blue-900/60">
        Eslatma: bu o&apos;quv maqsadidagi soddalashtirilgan model. Real bozor va bank shartlari farq qilishi mumkin.
      </p>
    </div>
  );
}

// ------------------------- 1. BOZOR MUVOZANATI ------------------------------
function Bozor() {
  const [a, setA] = useState(100);
  const [b, setB] = useState(2);
  const [c, setC] = useState(10);
  const [d, setD] = useState(3);
  const [t, setT] = useState(0);

  // Talab: Qd = a - b*P ; Taklif: Qs = c + d*(P - t)  (t - sotuvchidan olinadigan soliq)
  const P = (a - c + d * t) / (b + d);
  const Q = a - b * P;
  const P0 = (a - c) / (b + d);
  const Q0 = a - b * P0;
  const tax = t * Q;

  // Grafik
  const W = 420, H = 280, L = 48, R = 400, T = 16, B = 240;
  const qMax = a;
  const pMax = Math.max(a / b, (a - c) / d + t) * 1.05;
  const x = (q) => L + (q / qMax) * (R - L);
  const y = (p) => B - (p / pMax) * (B - T);
  const supplyY = (q) => (q - c) / d + t;
  const supply0Y = (q) => (q - c) / d;

  return (
    <div>
      <p className="text-sm text-blue-900/70 text-left mb-5">
        Talab va taklif egri chiziqlarini o&apos;zgartiring, davlat soliq kiritsa narx va hajm qanday o&apos;zgarishini kuzating.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Slider label="Talab darajasi (a)" value={a} min={60} max={200} step={5} unit="birlik" onChange={setA} />
          <Slider label="Talabning narxga sezgirligi (b)" value={b} min={1} max={5} step={0.5} unit="" onChange={setB} />
          <Slider label="Taklif darajasi (c)" value={c} min={0} max={40} step={2} unit="birlik" onChange={setC} />
          <Slider label="Taklifning narxga sezgirligi (d)" value={d} min={1} max={6} step={0.5} unit="" onChange={setD} />
          <Slider label="Soliq (har birlikka)" value={t} min={0} max={10} step={0.5} unit="ming so'm" onChange={setT} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Result name="Muvozanat narxi" value={`${num(P, 1)} ming so'm`} hint={`Soliqsiz: ${num(P0, 1)}`} />
            <Result name="Muvozanat hajmi" value={`${num(Q, 1)} birlik`} hint={`Soliqsiz: ${num(Q0, 1)}`} />
            <Result name="Hajm o'zgarishi" value={`${num(Q - Q0, 1)} birlik`} tone={Q - Q0 < 0 ? "red" : "blue"} />
            <Result name="Soliq tushumi" value={`${num(tax, 1)} ming so'm`} tone="green" hint="soliq × hajm" />
          </div>
        </div>
        <div className="bg-white border border-blue-100 rounded-2xl p-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Talab va taklif grafigi">
            <line x1={L} y1={B} x2={R} y2={B} stroke="#94a3b8" />
            <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
            <text x={R} y={B + 28} textAnchor="end" fontSize="11" fill="#64748b">Hajm (Q)</text>
            <text x={L - 6} y={T + 4} textAnchor="end" fontSize="11" fill="#64748b">Narx</text>
            {t > 0 && (
              <line x1={x(c)} y1={y(supply0Y(c))} x2={x(a)} y2={y(supply0Y(a))} stroke="#94a3b8" strokeDasharray="5 4" strokeWidth="2" />
            )}
            <line x1={x(0)} y1={y(a / b)} x2={x(a)} y2={y(0)} stroke="#2563eb" strokeWidth="3" />
            <line x1={x(c)} y1={y(supplyY(c))} x2={x(a)} y2={y(supplyY(a))} stroke="#dc2626" strokeWidth="3" />
            <line x1={x(Q)} y1={y(P)} x2={x(Q)} y2={B} stroke="#64748b" strokeDasharray="4 4" />
            <line x1={x(Q)} y1={y(P)} x2={L} y2={y(P)} stroke="#64748b" strokeDasharray="4 4" />
            <circle cx={x(Q)} cy={y(P)} r="6" fill="#16a34a" />
            <text x={x(0) + 8} y={y(a / b) + 14} fontSize="12" fontWeight="700" fill="#2563eb">Talab</text>
            <text x={x(a) - 8} y={Math.max(T + 12, y(supplyY(a)) + 14)} textAnchor="end" fontSize="12" fontWeight="700" fill="#dc2626">Taklif</text>
            <text x={x(Q) + 8} y={y(P) - 8} fontSize="11" fill="#166534">muvozanat</text>
          </svg>
          {t > 0 && <p className="text-[11px] text-slate-500 px-2">Uzuq chiziq: soliqsiz taklif.</p>}
        </div>
      </div>
      <Task
        items={[
          "Soliqni 0 dan 5 gacha oshiring. Narx va hajm qanday o'zgardi? Natijani qisqa yozing.",
          "Talab yoki taklifning sezgirligini o'zgartiring va soliq yukini kim ko'proq ko'tarishini tushuntiring.",
          "Shu savolni sun'iy intellekt vositasiga bering va uning javobini o'z hisob natijangiz hamda iqtisodiyot darsligidagi nazariya bilan solishtirib, xatolarni toping (IAK-2).",
        ]}
      />
    </div>
  );
}

// ------------------------- 2. KREDIT KALKULYATORI ---------------------------
function Kredit() {
  const [summa, setSumma] = useState(50);
  const [foiz, setFoiz] = useState(24);
  const [oy, setOy] = useState(24);
  const [tur, setTur] = useState("annuitet");

  const S = summa * 1_000_000;
  const r = foiz / 100 / 12;
  const n = oy;
  const rows = [];
  let bal = S;
  const annuity = r === 0 ? S / n : (S * r) / (1 - Math.pow(1 + r, -n));
  for (let k = 1; k <= n; k++) {
    const interest = bal * r;
    const principal = tur === "annuitet" ? annuity - interest : S / n;
    const pay = principal + interest;
    bal = Math.max(0, bal - principal);
    rows.push({ k, pay, principal, interest, bal });
  }
  const totalInterest = rows.reduce((s, x) => s + x.interest, 0);
  const totalPay = S + totalInterest;

  return (
    <div>
      <p className="text-sm text-blue-900/70 text-left mb-5">
        Kredit summasi, foiz stavkasi va muddatni tanlang. Annuitet va differensial to&apos;lov turlarini solishtiring.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Slider label="Kredit summasi" value={summa} min={5} max={500} step={5} unit="mln so'm" onChange={setSumma} />
          <Slider label="Yillik foiz stavkasi" value={foiz} min={5} max={45} step={0.5} unit="%" onChange={setFoiz} />
          <Slider label="Muddat" value={oy} min={6} max={60} step={6} unit="oy" onChange={setOy} />
          <div className="flex gap-2 pt-1">
            {[["annuitet", "Annuitet"], ["differensial", "Differensial"]].map(([v, l]) => (
              <button
                key={v}
                type="button"
                onClick={() => setTur(v)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                  tur === v ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {tur === "annuitet" ? (
              <Result name="Oylik to'lov" value={`${money(annuity)} so'm`} hint="har oy bir xil" />
            ) : (
              <Result name="Birinchi / oxirgi to'lov" value={`${money(rows[0].pay)} / ${money(rows[n - 1].pay)}`} hint="so'm, kamayib boradi" />
            )}
            <Result name="Jami foiz" value={`${money(totalInterest)} so'm`} tone="red" />
            <Result name="Umumiy to'lov" value={`${money(totalPay)} so'm`} />
            <Result name="Ortiqcha to'lov" value={`${num((totalInterest / S) * 100, 1)} %`} hint="foiz / kredit summasi" tone="green" />
          </div>
        </div>
        <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
          <div className="max-h-[420px] overflow-auto">
            <table className="w-full text-xs sm:text-sm text-right">
              <thead className="bg-blue-50 text-blue-950 sticky top-0">
                <tr>
                  <th className="p-2 text-left">Oy</th>
                  <th className="p-2">To&apos;lov</th>
                  <th className="p-2">Asosiy qarz</th>
                  <th className="p-2">Foiz</th>
                  <th className="p-2">Qoldiq</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((x) => (
                  <tr key={x.k} className="border-t border-blue-50">
                    <td className="p-2 text-left font-semibold text-blue-950">{x.k}</td>
                    <td className="p-2">{money(x.pay)}</td>
                    <td className="p-2">{money(x.principal)}</td>
                    <td className="p-2">{money(x.interest)}</td>
                    <td className="p-2">{money(x.bal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Task
        items={[
          "Biror bankning rasmiy saytidan yoki Markaziy bank ma'lumotlaridan joriy kredit foiz stavkasini toping va kalkulyatorga kiriting. Manbani va sanasini yozing.",
          "Annuitet va differensial turlarni solishtiring: qaysi biri sizning kasbiy vaziyatingiz uchun foydaliroq va nima uchun?",
          "Sun'iy intellektdan xuddi shu kredit uchun oylik to'lovni hisoblashni so'rang va javobini jadvaldagi raqam bilan solishtiring. Farq bormi (IAK-2)?",
        ]}
      />
    </div>
  );
}

// ------------------------- 3. INFLYATSIYA VA BYUDJET ------------------------
function Byudjet() {
  const [daromad, setDaromad] = useState(5);
  const [xarajat, setXarajat] = useState(4);
  const [infl, setInfl] = useState(10);
  const [osish, setOsish] = useState(5);

  const months = [];
  let cum = 0;
  for (let k = 0; k < 12; k++) {
    const inc = daromad * Math.pow(1 + osish / 100, k / 12);
    const exp = xarajat * Math.pow(1 + infl / 100, k / 12);
    cum += inc - exp;
    months.push({ m: k + 1, inc, exp });
  }
  const last = months[11];
  const realChange = (Math.pow((1 + osish / 100) / (1 + infl / 100), 11 / 12) - 1) * 100;

  const W = 420, H = 260, L = 48, R = 400, T = 16, B = 220;
  const all = months.flatMap((x) => [x.inc, x.exp]);
  const lo = Math.min(...all) * 0.9;
  const hi = Math.max(...all) * 1.05;
  const x = (m) => L + ((m - 1) / 11) * (R - L);
  const y = (v) => B - ((v - lo) / (hi - lo || 1)) * (B - T);
  const path = (key) => months.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.m)},${y(p[key])}`).join(" ");

  return (
    <div>
      <p className="text-sm text-blue-900/70 text-left mb-5">
        Oylik daromad va xarajatingizni kiriting. Inflyatsiya xarajatni, daromad o&apos;sishi esa daromadni 12 oy davomida qanday o&apos;zgartirishini ko&apos;ring.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Slider label="Oylik daromad" value={daromad} min={2} max={30} step={0.5} unit="mln so'm" onChange={setDaromad} />
          <Slider label="Oylik xarajat" value={xarajat} min={1} max={30} step={0.5} unit="mln so'm" onChange={setXarajat} />
          <Slider label="Yillik inflyatsiya" value={infl} min={0} max={40} step={0.5} unit="%" onChange={setInfl} />
          <Slider label="Daromadning yillik o'sishi" value={osish} min={0} max={40} step={0.5} unit="%" onChange={setOsish} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Result name="12-oy daromadi" value={`${num(last.inc, 2)} mln`} />
            <Result name="12-oy xarajati" value={`${num(last.exp, 2)} mln`} />
            <Result name="12 oylik jamg'arma" value={`${num(cum, 1)} mln so'm`} tone={cum < 0 ? "red" : "green"} hint={cum < 0 ? "kamomad" : "ortiqcha"} />
            <Result name="Real daromad o'zgarishi" value={`${num(realChange, 1)} %`} tone={realChange < 0 ? "red" : "blue"} hint="xarid qobiliyati" />
          </div>
        </div>
        <div className="bg-white border border-blue-100 rounded-2xl p-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Daromad va xarajat dinamikasi">
            <line x1={L} y1={B} x2={R} y2={B} stroke="#94a3b8" />
            <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
            <path d={path("inc")} fill="none" stroke="#2563eb" strokeWidth="3" />
            <path d={path("exp")} fill="none" stroke="#dc2626" strokeWidth="3" />
            <text x={L - 6} y={y(hi) + 10} textAnchor="end" fontSize="10" fill="#64748b">{num(hi, 1)}</text>
            <text x={L - 6} y={y(lo)} textAnchor="end" fontSize="10" fill="#64748b">{num(lo, 1)}</text>
            <text x={L} y={B + 16} fontSize="10" fill="#64748b">1-oy</text>
            <text x={R} y={B + 16} textAnchor="end" fontSize="10" fill="#64748b">12-oy</text>
            <text x={R} y={H - 6} textAnchor="end" fontSize="10" fill="#64748b">mln so&apos;m</text>
            <text x={x(6)} y={y(months[5].inc) - 8} fontSize="12" fontWeight="700" fill="#2563eb">Daromad</text>
            <text x={x(6)} y={y(months[5].exp) + 16} fontSize="12" fontWeight="700" fill="#dc2626">Xarajat</text>
          </svg>
        </div>
      </div>
      <Task
        items={[
          "Stat.uz saytidan so'nggi yillik inflyatsiya darajasini toping va simulyatorga kiriting. Manba nomi va sanasini yozing.",
          "Daromad o'sishi inflyatsiyadan past bo'lsa, real daromad qanday o'zgaradi? Natijadan 1 betlik qaror xulosasi yozing (IAK-3).",
          "Sun'iy intellektdan bir xil ma'lumotlar bilan 12 oylik jamg'armani hisoblashni so'rang va javobini tekshiring (IAK-2).",
        ]}
      />
    </div>
  );
}

// ------------------------- 4. KICHIK BIZNES: ZARARSIZLIK NUQTASI ------------
function Biznes() {
  const [narx, setNarx] = useState(50);      // sotuv narxi, ming so'm / birlik
  const [oz, setOz] = useState(30);          // o'zgaruvchan xarajat, ming so'm / birlik
  const [doimiy, setDoimiy] = useState(6);   // doimiy xarajat, mln so'm / oy
  const [hajm, setHajm] = useState(400);     // oylik sotuv, birlik

  const margin = narx - oz; // ming so'm
  const qBE = margin > 0 ? (doimiy * 1000) / margin : Infinity;
  const revenue = (narx * hajm) / 1000;       // mln so'm
  const cost = doimiy + (oz * hajm) / 1000;
  const profit = revenue - cost;
  const reserve = Number.isFinite(qBE) && hajm > 0 ? ((hajm - qBE) / hajm) * 100 : NaN;

  const W = 420, H = 280, L = 48, R = 400, T = 16, B = 240;
  const qMax = Math.max(Number.isFinite(qBE) ? qBE * 2 : 0, hajm * 1.3, 100);
  const vMax = Math.max((narx * qMax) / 1000, doimiy + (oz * qMax) / 1000) * 1.05;
  const x = (q) => L + (q / qMax) * (R - L);
  const y = (v) => B - (v / vMax) * (B - T);

  return (
    <div>
      <p className="text-sm text-blue-900/70 text-left mb-5">
        Kichik biznesning narx, xarajat va sotuv hajmini o&apos;zgartirib, zararsizlik nuqtasi va oylik foydani hisoblang.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Slider label="Sotuv narxi (birlikka)" value={narx} min={5} max={200} step={1} unit="ming so'm" onChange={setNarx} />
          <Slider label="O'zgaruvchan xarajat (birlikka)" value={oz} min={1} max={200} step={1} unit="ming so'm" onChange={setOz} />
          <Slider label="Doimiy xarajat (ijara, maosh va h.k.)" value={doimiy} min={0} max={50} step={0.5} unit="mln so'm/oy" onChange={setDoimiy} />
          <Slider label="Oylik sotuv hajmi" value={hajm} min={10} max={3000} step={10} unit="birlik" onChange={setHajm} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Result
              name="Zararsizlik nuqtasi"
              value={Number.isFinite(qBE) ? `${money(qBE)} birlik` : "mavjud emas"}
              hint={Number.isFinite(qBE) ? "shundan ko'p sotilsa foyda" : "narx xarajatdan past"}
              tone={Number.isFinite(qBE) ? "blue" : "red"}
            />
            <Result name="Birlik marjasi" value={`${money(margin)} ming so'm`} tone={margin > 0 ? "blue" : "red"} />
            <Result name="Oylik tushum" value={`${num(revenue, 1)} mln so'm`} />
            <Result name="Oylik foyda" value={`${num(profit, 1)} mln so'm`} tone={profit >= 0 ? "green" : "red"} hint={profit >= 0 ? "foyda" : "zarar"} />
          </div>
          {Number.isFinite(reserve) && (
            <Result name="Xavfsizlik zahirasi" value={`${num(reserve, 1)} %`} hint="sotuv qancha kamaysa ham zarar bo'lmaydi" tone={reserve >= 0 ? "green" : "red"} />
          )}
        </div>
        <div className="bg-white border border-blue-100 rounded-2xl p-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Tushum va xarajat grafigi">
            <line x1={L} y1={B} x2={R} y2={B} stroke="#94a3b8" />
            <line x1={L} y1={T} x2={L} y2={B} stroke="#94a3b8" />
            <text x={R} y={B + 28} textAnchor="end" fontSize="11" fill="#64748b">Sotuv hajmi (birlik)</text>
            <text x={L - 6} y={T + 4} textAnchor="end" fontSize="11" fill="#64748b">mln so&apos;m</text>
            <line x1={x(0)} y1={y(doimiy)} x2={x(qMax)} y2={y(doimiy)} stroke="#94a3b8" strokeDasharray="5 4" />
            <line x1={x(0)} y1={y(0)} x2={x(qMax)} y2={y((narx * qMax) / 1000)} stroke="#2563eb" strokeWidth="3" />
            <line x1={x(0)} y1={y(doimiy)} x2={x(qMax)} y2={y(doimiy + (oz * qMax) / 1000)} stroke="#dc2626" strokeWidth="3" />
            {Number.isFinite(qBE) && qBE <= qMax && (
              <>
                <line x1={x(qBE)} y1={y((narx * qBE) / 1000)} x2={x(qBE)} y2={B} stroke="#64748b" strokeDasharray="4 4" />
                <circle cx={x(qBE)} cy={y((narx * qBE) / 1000)} r="6" fill="#16a34a" />
                <text x={x(qBE) + 8} y={y((narx * qBE) / 1000) - 8} fontSize="11" fill="#166534">zararsizlik</text>
              </>
            )}
            <text x={x(qMax) - 6} y={y((narx * qMax) / 1000) + 14} textAnchor="end" fontSize="12" fontWeight="700" fill="#2563eb">Tushum</text>
            <text x={x(qMax) - 6} y={y(doimiy + (oz * qMax) / 1000) - 6} textAnchor="end" fontSize="12" fontWeight="700" fill="#dc2626">Jami xarajat</text>
          </svg>
        </div>
      </div>
      <Task
        items={[
          "O'zingiz tanlagan kichik biznes (masalan, kafe, do'kon yoki xizmat) uchun narx va xarajatlarni real manbalardan topib kiriting. Manbalarni yozing.",
          "Zararsizlik nuqtasi qancha va u sizning mijozlar soni bo'yicha taxminingizga realmi? Narx yoki xarajat 10 foizga o'zgarsa, nima bo'ladi?",
          "Natijadan kredit so'rash yoki so'ramaslik bo'yicha qaror xulosasini yozing (IAK-3). Sun'iy intellektdan shu hisobni so'rab, javobini tekshiring (IAK-2).",
        ]}
      />
    </div>
  );
}

// ------------------------- 5. VALYUTA KURSI ---------------------------------
function Valyuta() {
  const [usd, setUsd] = useState(10000);
  const [kurs, setKurs] = useState(12500);
  const [ozg, setOzg] = useState(5);

  const yangi = kurs * (1 + ozg / 100);
  const importOld = usd * kurs;
  const importNew = usd * yangi;
  const diff = importNew - importOld;
  const steps = [-10, -5, 0, 5, 10];

  return (
    <div>
      <p className="text-sm text-blue-900/70 text-left mb-5">
        So&apos;m kursi o&apos;zgarganda importchining xarajati va eksportchining tushumi qanday o&apos;zgarishini ko&apos;ring. Boshlang&apos;ich kursni Markaziy bankning rasmiy ma&apos;lumotidan kiriting.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Slider label="Shartnoma summasi" value={usd} min={1000} max={100000} step={1000} unit="AQSh dollari" onChange={setUsd} />
          <Slider label="Boshlang'ich kurs (1 AQSh dollari)" value={kurs} min={9000} max={16000} step={50} unit="so'm" onChange={setKurs} />
          <Slider label="Dollar kursi o'zgarishi (+ dollar qimmatlashadi)" value={ozg} min={-20} max={20} step={1} unit="%" onChange={setOzg} />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Result name="Yangi kurs" value={`${money(yangi)} so'm`} hint={`Avval: ${money(kurs)}`} />
            <Result name="Shartnoma so'mda (avval)" value={`${money(importOld)} so'm`} />
            <Result
              name="Importchi xarajati o'zgarishi"
              value={`${diff >= 0 ? "+" : "−"}${money(Math.abs(diff))} so'm`}
              tone={diff > 0 ? "red" : "green"}
              hint={diff > 0 ? "import qimmatlashdi" : "import arzonlashdi"}
            />
            <Result
              name="Eksportchi tushumi o'zgarishi"
              value={`${diff >= 0 ? "+" : "−"}${money(Math.abs(diff))} so'm`}
              tone={diff > 0 ? "green" : "red"}
              hint={diff > 0 ? "so'mdagi tushum oshdi" : "so'mdagi tushum kamaydi"}
            />
          </div>
        </div>
        <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
          <table className="w-full text-xs sm:text-sm text-right">
            <thead className="bg-blue-50 text-blue-950">
              <tr>
                <th className="p-2 text-left">Kurs o&apos;zgarishi</th>
                <th className="p-2">Yangi kurs</th>
                <th className="p-2">Shartnoma (so&apos;m)</th>
                <th className="p-2">Farq (so&apos;m)</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((st) => {
                const k = kurs * (1 + st / 100);
                const d = usd * k - importOld;
                return (
                  <tr key={st} className="border-t border-blue-50">
                    <td className="p-2 text-left font-semibold text-blue-950">{st > 0 ? `+${st}` : st} %</td>
                    <td className="p-2">{money(k)}</td>
                    <td className="p-2">{money(usd * k)}</td>
                    <td className={`p-2 font-semibold ${d > 0 ? "text-red-700" : d < 0 ? "text-emerald-700" : "text-slate-500"}`}>
                      {d > 0 ? "+" : d < 0 ? "−" : ""}
                      {money(Math.abs(d))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Task
        items={[
          "O'zbekiston Markaziy bankining rasmiy saytidan joriy dollar kursini toping va kiriting. Manba va sanani yozing.",
          "Importchi va eksportchi uchun kurs oshishi nimani anglatadi? Ikkalasi uchun 2–3 gapda tushuntiring.",
          "Sun'iy intellektdan bugungi kursni so'rang va rasmiy manba bilan solishtiring: raqam to'g'rimi va dolzarbmi (IAK-2)? Natijadan qaror xulosasi yozing (IAK-3).",
        ]}
      />
    </div>
  );
}

const tabs = [
  { id: "bozor", name: "Bozor muvozanati", Comp: Bozor },
  { id: "kredit", name: "Kredit kalkulyatori", Comp: Kredit },
  { id: "byudjet", name: "Inflyatsiya va byudjet", Comp: Byudjet },
  { id: "biznes", name: "Kichik biznes: foyda va zarar", Comp: Biznes },
  { id: "valyuta", name: "Valyuta kursi", Comp: Valyuta },
];

export default function IchkiSimulyatorlar() {
  const [active, setActive] = useState("bozor");
  const Current = tabs.find((x) => x.id === active).Comp;
  return (
    <div className="mb-16 sm:mb-24">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-3xl font-black text-blue-600 tracking-tight">Sayt ichidagi simulyatorlar</h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base font-medium">
          O&apos;zbek tilidagi mini-simulyatorlar: ro&apos;yxatdan o&apos;tish talab qilinmaydi, natijalarni IAK topshiriqlarida ishlatish mumkin.
        </p>
      </div>
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              type="button"
              onClick={() => setActive(tb.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                active === tb.id ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
              }`}
            >
              {tb.name}
            </button>
          ))}
        </div>
        <Current />
      </div>
    </div>
  );
}
