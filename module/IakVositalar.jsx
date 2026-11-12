"use client"
import React, { useMemo, useState } from 'react'

// ============================================================================
// IAK moduli uchun interaktiv vositalar:
//  1) Manba ishonchliligini baholash (IAK-1, axborot-kognitiv komponent)
//  2) Sun'iy intellekt javobini verifikatsiya qilish kalkulyatori (IAK-2, intellektual-operatsion)
//  3) IAK integral indeksi kalkulyatori (rubrika bo'yicha, refleksiv-diagnostik)
// Hech qanday ma'lumot serverga yuborilmaydi: hisob-kitob brauzerda bajariladi.
// ============================================================================

const MEZONLAR = [
  ['rasmiylik', 'Rasmiylik'],
  ['dolzarblik', 'Dolzarblik'],
  ['metodologiya', 'Metodologiya'],
  ['tekshirilish', 'Tekshirilishi'],
  ['mustaqillik', 'Mustaqillik'],
]

const XATO_TURLARI = [
  "Raqam noto'g'ri",
  "Ma'lumot eskirgan",
  "Manba ko'rsatilmagan",
  "Mavjud bo'lmagan ma'lumot (uydirma)",
]

const BALL_BELGI = ['0', '1', '2']

const inputCls = 'w-full bg-white border border-blue-100 rounded-lg px-3 py-2 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-300'
const btnCls = 'px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 active:scale-95 transition-all'
const btnGhostCls = 'px-4 py-2 rounded-lg bg-white border border-blue-100 text-blue-700 text-sm font-bold hover:bg-blue-50 active:scale-95 transition-all'

// Jadvalni Excel (.xlsx) fayliga yuklab olish. Kutubxona faqat tugma bosilganda yuklanadi.
async function excelYuklash(fayl, varaq, qatorlar) {
  const XLSX = await import('xlsx')
  const ws = XLSX.utils.aoa_to_sheet(qatorlar)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, varaq)
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  XLSX.writeFile(wb, `${fayl}_${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}.xlsx`)
}

function SectionTitle({ children }) {
  return (
    <div className='flex items-center gap-3 select-none'>
      <div className='w-1.5 h-6 bg-blue-600 rounded-full'></div>
      <h3 className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight'>{children}</h3>
    </div>
  )
}

// "12,5" va "12.5" ko'rinishlarini qabul qiladi; bo'sh yoki noto'g'ri bo'lsa NaN qaytaradi.
function raqam(v) {
  if (v === '' || v == null) return NaN
  return parseFloat(String(v).replace(/\s/g, '').replace(',', '.'))
}

// ---------------------------------------------------------------------------
// 1) Manba ishonchliligini baholash
// ---------------------------------------------------------------------------
const yangiManba = () => ({ nomi: '', rasmiylik: 0, dolzarblik: 0, metodologiya: 0, tekshirilish: 0, mustaqillik: 0 })

function manbaDarajasi(jami) {
  if (jami >= 8) return { t: 'Yuqori ishonchli', c: 'text-green-700 bg-green-50 border-green-200' }
  if (jami >= 5) return { t: "O'rta (qo'shimcha tekshiring)", c: 'text-yellow-700 bg-yellow-50 border-yellow-200' }
  return { t: 'Past (tayanmang)', c: 'text-red-700 bg-red-50 border-red-200' }
}

function ManbaBaholash() {
  const [rows, setRows] = useState([yangiManba(), yangiManba(), yangiManba()])

  const set = (i, key, val) => setRows((r) => r.map((x, j) => (j === i ? { ...x, [key]: val } : x)))
  const jami = (m) => MEZONLAR.reduce((s, [k]) => s + Number(m[k]), 0)

  return (
    <div className='space-y-4'>
      <div className='text-sm text-blue-900/70 leading-relaxed text-left max-w-3xl'>
        Har bir manbani 5 mezon bo'yicha 0, 1 yoki 2 ball bilan baholang (jami 10 ball). 0 — mezon bajarilmaydi, 1 — qisman, 2 — to'liq bajariladi.
        Daraja chegaralari tavsiya xarakterida (0–4 past, 5–7 o'rta, 8–10 yuqori); o'qituvchi ularni o'zgartirishi mumkin.
      </div>
      <div className='space-y-3'>
        {rows.map((m, i) => {
          const j = jami(m)
          const d = manbaDarajasi(j)
          return (
            <div key={i} className='bg-blue-50/60 border border-blue-100 rounded-2xl p-4 sm:p-5 text-left space-y-3'>
              <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
                <input
                  className={inputCls}
                  placeholder={`${i + 1}-manba nomi yoki havolasi`}
                  value={m.nomi}
                  onChange={(e) => set(i, 'nomi', e.target.value)}
                  aria-label={`${i + 1}-manba`}
                />
                {rows.length > 1 && (
                  <button type='button' className={btnGhostCls} onClick={() => setRows((r) => r.filter((_, k) => k !== i))}>
                    O'chirish
                  </button>
                )}
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-5 gap-3'>
                {MEZONLAR.map(([k, label]) => (
                  <label key={k} className='text-xs font-bold text-blue-900 space-y-1 block'>
                    <span>{label}</span>
                    <select className={inputCls} value={m[k]} onChange={(e) => set(i, k, e.target.value)}>
                      {BALL_BELGI.map((b) => <option key={b} value={b}>{b} ball</option>)}
                    </select>
                  </label>
                ))}
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='text-sm font-black text-blue-950'>Jami: {j} / 10</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${d.c}`}>{d.t}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap gap-3'>
        <button type='button' className={btnCls} onClick={() => setRows((r) => [...r, yangiManba()])}>Manba qo'shish</button>
        <button type='button' className={btnGhostCls} onClick={() => setRows([yangiManba(), yangiManba(), yangiManba()])}>Tozalash</button>
        <button
          type='button'
          className={btnGhostCls}
          onClick={() =>
            excelYuklash('IAK_manbalar_saralash', 'Manbalarni saralash', [
              ['Manba', ...MEZONLAR.map(([, l]) => l), 'Jami (10)', 'Daraja'],
              ...rows.map((m) => [m.nomi, ...MEZONLAR.map(([k]) => Number(m[k])), jami(m), manbaDarajasi(jami(m)).t]),
            ])
          }
        >
          Excel'ga yuklab olish
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 2) SI javobini verifikatsiya qilish kalkulyatori
// ---------------------------------------------------------------------------
const yangiDavo = () => ({ davo: '', ai: '', manba: '', manbaNomi: '', tur: '' })

function VerifikatsiyaKalkulyatori() {
  const [rows, setRows] = useState([yangiDavo(), yangiDavo(), yangiDavo()])
  const [chegara, setChegara] = useState('5')

  const set = (i, key, val) => setRows((r) => r.map((x, j) => (j === i ? { ...x, [key]: val } : x)))
  const ch = raqam(chegara)

  const hisob = useMemo(() => {
    return rows.map((r) => {
      const ai = raqam(r.ai)
      const mn = raqam(r.manba)
      if (Number.isNaN(ai) || Number.isNaN(mn)) return { holat: 'kutilmoqda' }
      if (mn === 0) return { holat: 'nol' }
      const farq = (Math.abs(ai - mn) / Math.abs(mn)) * 100
      return { holat: Number.isNaN(ch) ? 'kutilmoqda' : farq > ch ? 'xato' : 'togri', farq }
    })
  }, [rows, ch])

  const tekshirilgan = hisob.filter((h) => h.holat === 'xato' || h.holat === 'togri').length
  const xatolar = hisob.filter((h) => h.holat === 'xato').length
  const turSoni = XATO_TURLARI.map((t) => [t, rows.filter((r, i) => hisob[i].holat === 'xato' && r.tur === t).length])
  const turSizXato = rows.filter((r, i) => hisob[i].holat === 'xato' && !r.tur).length

  return (
    <div className='space-y-4'>
      <div className='text-sm text-blue-900/70 leading-relaxed text-left max-w-3xl'>
        AI javobidagi har bir raqamli da'voni alohida qatorga yozing, rasmiy manbadagi qiymatni kiriting. Farq =|AI − manba| / manba × 100% formulasi bo'yicha hisoblanadi
        va chegaradan katta bo'lsa, da'vo «xato» deb belgilanadi. Raqamlarni o'zingiz rasmiy manbadan (Stat.uz, World Bank Data va h.k.) olasiz; vosita ularni tayyor bermaydi.
      </div>
      <label className='flex items-center gap-3 text-sm font-bold text-blue-950 w-fit'>
        Xato chegarasi, %
        <input className={`${inputCls} !w-24`} value={chegara} onChange={(e) => setChegara(e.target.value)} inputMode='decimal' aria-label='Xato chegarasi foizda' />
      </label>
      <div className='space-y-3'>
        {rows.map((r, i) => {
          const h = hisob[i]
          return (
            <div key={i} className='bg-blue-50/60 border border-blue-100 rounded-2xl p-4 sm:p-5 text-left space-y-3'>
              <div className='grid grid-cols-1 sm:grid-cols-12 gap-3'>
                <input className={`${inputCls} sm:col-span-5`} placeholder={`${i + 1}-da'vo (masalan: 2023-yil inflyatsiyasi)`} value={r.davo} onChange={(e) => set(i, 'davo', e.target.value)} aria-label={`${i + 1}-da'vo`} />
                <input className={`${inputCls} sm:col-span-2`} placeholder='AI qiymati' inputMode='decimal' value={r.ai} onChange={(e) => set(i, 'ai', e.target.value)} aria-label={`${i + 1}-da'vo, AI qiymati`} />
                <input className={`${inputCls} sm:col-span-2`} placeholder='Manba qiymati' inputMode='decimal' value={r.manba} onChange={(e) => set(i, 'manba', e.target.value)} aria-label={`${i + 1}-da'vo, manba qiymati`} />
                <input className={`${inputCls} sm:col-span-3`} placeholder='Manba nomi' value={r.manbaNomi} onChange={(e) => set(i, 'manbaNomi', e.target.value)} aria-label={`${i + 1}-da'vo, manba nomi`} />
              </div>
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <div className='text-sm font-bold min-w-[220px]'>
                  {h.holat === 'kutilmoqda' && <span className='text-blue-900/50'>Ikkala qiymatni kiriting</span>}
                  {h.holat === 'nol' && <span className='text-yellow-700'>Manba qiymati 0: nisbiy farqni hisoblab bo'lmaydi, qo'lda baholang</span>}
                  {h.holat === 'togri' && <span className='text-green-700'>Farq {h.farq.toFixed(1)}%: chegara ichida</span>}
                  {h.holat === 'xato' && <span className='text-red-700'>Farq {h.farq.toFixed(1)}%: xato</span>}
                </div>
                {h.holat === 'xato' && (
                  <select className={`${inputCls} sm:max-w-xs`} value={r.tur} onChange={(e) => set(i, 'tur', e.target.value)} aria-label={`${i + 1}-da'vo, xato turi`}>
                    <option value=''>Xato turini tanlang</option>
                    {XATO_TURLARI.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                )}
                {rows.length > 1 && (
                  <button type='button' className={`${btnGhostCls} sm:ml-auto`} onClick={() => setRows((x) => x.filter((_, k) => k !== i))}>O'chirish</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap gap-3'>
        <button type='button' className={btnCls} onClick={() => setRows((r) => [...r, yangiDavo()])}>Da'vo qo'shish</button>
        <button type='button' className={btnGhostCls} onClick={() => setRows([yangiDavo(), yangiDavo(), yangiDavo()])}>Tozalash</button>
        <button
          type='button'
          className={btnGhostCls}
          onClick={() =>
            excelYuklash('IAK_verifikatsiya', 'Verifikatsiya', [
              ["Da'vo", 'AI qiymati', 'Manba qiymati', 'Manba nomi', 'Farq, %', 'Holat', 'Xato turi'],
              ...rows.map((r, i) => {
                const h = hisob[i]
                const holat = h.holat === 'xato' ? 'Xato' : h.holat === 'togri' ? "Chegara ichida" : h.holat === 'nol' ? "Qo'lda baholang" : 'Tekshirilmagan'
                return [r.davo, raqam(r.ai) || r.ai, raqam(r.manba) || r.manba, r.manbaNomi, h.farq != null ? Number(h.farq.toFixed(2)) : '', holat, h.holat === 'xato' ? r.tur : '']
              }),
              [],
              ['Chegara, %', Number.isNaN(ch) ? '' : ch, "Tekshirilgan da'vo", tekshirilgan, 'Xatolar', xatolar],
            ])
          }
        >
          Excel'ga yuklab olish
        </button>
      </div>
      <div className='bg-blue-50/40 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900/80 leading-relaxed text-left space-y-1.5'>
        <p><span className='font-bold text-blue-950'>Tekshirilgan da'volar:</span> {tekshirilgan}; <span className='font-bold text-blue-950'>topilgan xatolar:</span> {xatolar}</p>
        {xatolar > 0 && (
          <p>
            <span className='font-bold text-blue-950'>Xato turlari bo'yicha:</span>{' '}
            {turSoni.map(([t, n]) => `${t}: ${n}`).join('; ')}
            {turSizXato > 0 ? `; turi belgilanmagan: ${turSizXato}` : ''}
          </p>
        )}
        <p className='text-blue-900/60'>
          Eslatma: «Manba ko'rsatilmagan» va «uydirma» turlarini raqamli farq aniqlamaydi. Ularni da'voni rasmiy manbada topa olmaganingizda qo'lda belgilang.
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// 3) IAK integral indeksi kalkulyatori (rubrika bo'yicha)
// ---------------------------------------------------------------------------
const KOMPONENTLAR = [
  ['M', 'Motivatsion-qadriyatli'],
  ['K', 'Axborot-kognitiv'],
  ['O', 'Intellektual-operatsion'],
  ['R', 'Refleksiv-diagnostik'],
]

function indeksDarajasi(x) {
  if (x >= 0.75) return { t: 'Yuqori daraja', c: 'text-green-700 bg-green-50 border-green-200' }
  if (x >= 0.5) return { t: "O'rta daraja", c: 'text-yellow-700 bg-yellow-50 border-yellow-200' }
  return { t: 'Past daraja', c: 'text-red-700 bg-red-50 border-red-200' }
}

// Daraja bo'yicha topshiriq qiyinligi tavsiyasi (differensiatsiya). Tavsiya xarakterida.
function indeksTavsiyasi(x) {
  if (x >= 0.75) return "murakkabroq topshiriq: boshqa kasbiy vaziyat kartasi yoki 3 dan ortiq manba bilan qarama-qarshi ma'lumotlarni solishtirish.";
  if (x >= 0.5) return "o'sha vaziyat kartasida eng past mezon bo'yicha topshiriqni qayta bajaring va o'qituvchi izohlarini hisobga oling.";
  return "soddalashtirilgan topshiriq: 3 ta manba va 3 ta da'vo bilan boshlang, har bosqichni o'qituvchi bilan birga tekshiring.";
}

function IndeksKalkulyatori() {
  const [b, setB] = useState({ M: 0, K: 0, O: 0, R: 0 })
  const sum = KOMPONENTLAR.reduce((s, [k]) => s + Number(b[k]), 0)
  const idx = sum / 8
  const d = indeksDarajasi(idx)
  // Eng past komponent(lar): qaysi yo'nalishda ishlash kerakligini ko'rsatadi.
  const min = Math.min(...KOMPONENTLAR.map(([k]) => Number(b[k])))
  const past = KOMPONENTLAR.filter(([k]) => Number(b[k]) === min && min < 2).map(([, n]) => n)

  return (
    <div className='space-y-4'>
      <div className='text-sm text-blue-900/70 leading-relaxed text-left max-w-3xl'>
        Yuqoridagi rubrika bo'yicha o'z ishingizni (yoki o'qituvchi talabani) har bir mezon bo'yicha 0–2 ball bilan baholang. Indeks IAK = (M + K + O + R) / 8 formulasi bilan hisoblanadi.
      </div>
      <div className='bg-blue-50/60 border border-blue-100 rounded-2xl p-4 sm:p-5 text-left space-y-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
          {KOMPONENTLAR.map(([k, n]) => (
            <label key={k} className='text-xs font-bold text-blue-900 space-y-1 block'>
              <span>{k}: {n}</span>
              <select className={inputCls} value={b[k]} onChange={(e) => setB((x) => ({ ...x, [k]: e.target.value }))}>
                {BALL_BELGI.map((v) => <option key={v} value={v}>{v} ball</option>)}
              </select>
            </label>
          ))}
        </div>
        <div className='flex flex-wrap items-center gap-3'>
          <span className='text-lg font-black text-blue-950'>IAK = {idx.toFixed(2).replace('.', ',')}</span>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${d.c}`}>{d.t}</span>
        </div>
        {past.length > 0 && (
          <p className='text-sm text-blue-900/80'>
            <span className='font-bold text-blue-950'>Eng past komponent:</span> {past.join(', ')}. Shu bosqichni takrorlash tavsiya etiladi.
          </p>
        )}
        <p className='text-sm text-blue-900/80'>
          <span className='font-bold text-blue-950'>Keyingi qadam:</span> {indeksTavsiyasi(idx)}
        </p>
        <button
          type='button'
          className={btnGhostCls}
          onClick={() =>
            excelYuklash('IAK_indeks', 'IAK indeksi', [
              ['Komponent', 'Ball (0–2)'],
              ...KOMPONENTLAR.map(([k, n]) => [`${k}: ${n}`, Number(b[k])]),
              [],
              ['Jami', sum],
              ['IAK indeksi', Number(idx.toFixed(2))],
              ['Daraja', d.t],
            ])
          }
        >
          Excel'ga yuklab olish
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Vositalar va komponentlar xaritasi
// ---------------------------------------------------------------------------
const xarita = [
  ['Stat.uz, World Bank Data, IMF Data, OECD Data', "Rasmiy ma'lumot manbalari", "Axborot-kognitiv", 'IAK-1, IAK-2'],
  ['MS Excel', "Saralash jadvali, farqni hisoblash, tahlil", "Axborot-kognitiv, intellektual-operatsion", '3–5-laboratoriya, IAK-1, IAK-2'],
  ['Looker Studio', "AI va rasmiy manba raqamlarini grafikda taqqoslash", 'Intellektual-operatsion', '6-laboratoriya, IAK-2'],
  ['Python + Jupyter', "Ma'lumotni dasturiy tahlil qilish (chuqurlashtirilgan)", 'Intellektual-operatsion', '10-laboratoriya'],
  ["AI yordamchi", "Javobni olish va tanqidiy tekshirish ob'ekti", 'Intellektual-operatsion', 'IAK-2'],
  ['Google Docs / MS Word', "Qaror xulosasi va refleksiya", 'Refleksiv-diagnostik', 'IAK-3'],
]

export default function IakVositalar() {
  return (
    <>
      <section className='space-y-6 sm:space-y-8'>
        <SectionTitle>Interaktiv vositalar</SectionTitle>
        <p className='text-blue-900/60 text-sm sm:text-[15px] max-w-3xl font-medium text-left'>
          Quyidagi vositalar topshiriqlarni bajarishda yordam beradi. Ular natijani brauzerning o'zida hisoblaydi va hech qayerga yubormaydi.
          Yakuniy ish baribir o'qituvchi ko'rsatgan forma orqali topshiriladi.
        </p>
      </section>

      <section className='space-y-5'>
        <h4 className='text-lg sm:text-xl font-black text-blue-950 text-left'>1. Manba ishonchliligini baholash <span className='text-xs font-bold text-blue-500 uppercase tracking-wider ml-2'>IAK-1</span></h4>
        <ManbaBaholash />
      </section>

      <section className='space-y-5'>
        <h4 className='text-lg sm:text-xl font-black text-blue-950 text-left'>2. Sun'iy intellekt javobini verifikatsiya qilish <span className='text-xs font-bold text-blue-500 uppercase tracking-wider ml-2'>IAK-2</span></h4>
        <VerifikatsiyaKalkulyatori />
      </section>

      <section className='space-y-5'>
        <h4 className='text-lg sm:text-xl font-black text-blue-950 text-left'>3. IAK indeksi kalkulyatori <span className='text-xs font-bold text-blue-500 uppercase tracking-wider ml-2'>Rubrika</span></h4>
        <IndeksKalkulyatori />
      </section>

      <section className='space-y-5'>
        <h4 className='text-lg sm:text-xl font-black text-blue-950 text-left'>Dasturiy vositalar va IAK komponentlari</h4>
        <div className='overflow-x-auto rounded-2xl border border-blue-100'>
          <table className='w-full min-w-[720px] text-sm text-left'>
            <thead className='bg-blue-50 text-blue-950'>
              <tr>
                <th className='p-4 font-bold'>Vosita</th>
                <th className='p-4 font-bold'>Vazifasi</th>
                <th className='p-4 font-bold'>Komponent</th>
                <th className='p-4 font-bold'>Qayerda qo'llanadi</th>
              </tr>
            </thead>
            <tbody>
              {xarita.map((r) => (
                <tr key={r[0]} className='border-t border-blue-100 align-top'>
                  <td className='p-4 font-bold text-blue-950'>{r[0]}</td>
                  <td className='p-4 text-blue-900/70'>{r[1]}</td>
                  <td className='p-4 text-blue-900/70'>{r[2]}</td>
                  <td className='p-4 text-blue-900/70'>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
