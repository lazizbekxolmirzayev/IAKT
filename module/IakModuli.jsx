import React from 'react'
import Link from 'next/link'
import IakVositalar from './IakVositalar'

// ============================================================================
// Natijalarni yig'uvchi Google Form havolasi.
// Formani yaratgach, havolani shu yerga qo'ying (masalan: "https://forms.gle/....").
// Bo'sh qoldirilsa, tugma "Tez orada" holatida ko'rinadi.
// ============================================================================
const IAK_FORM_URL = ''

const stages = [
  {
    n: 1,
    title: 'Muammoni aniqlash',
    comp: 'Motivatsion-qadriyatli',
    what: "Kasbiy vaziyat kartasini o'qiydi va qaror uchun kerak bo'ladigan axborotni 3 ta savolda yozadi.",
    out: "Axborot ehtiyoji varag'i",
    crit: "Ehtiyojni aniq belgilash va vaziyatga mosligi",
  },
  {
    n: 2,
    title: 'Izlash va saralash',
    comp: 'Axborot-kognitiv',
    what: "Kamida 5 ta manba topadi va ularni saralash jadvaliga kiritib baholaydi.",
    out: 'Manbalarni saralash jadvali (Excel)',
    crit: 'Manbalar soni, sifati va saralash asoslanganligi',
  },
  {
    n: 3,
    title: 'Verifikatsiya va tahlil',
    comp: 'Intellektual-operatsion',
    what: "Ma'lumotni tahlil qiladi, sun'iy intellekt javobini rasmiy manba bilan solishtiradi va xatolarni tasniflaydi.",
    out: 'Tahlil fayli va xatolar tasnifi',
    crit: "Tahlil to'g'riligi, topilgan xatolar to'liqligi",
  },
  {
    n: 4,
    title: 'Talqin va qaror',
    comp: 'Refleksiv-diagnostik',
    what: "Natijani talqin qiladi, asosli qaror qabul qiladi va o'z ishini baholaydi.",
    out: "Qaror xulosasi (1 bet) va refleksiya",
    crit: 'Qaror asosliligi, refleksiya chuqurligi',
  },
]

const vaziyatlar = [
  ['Iqtisodiyot', "Hududiy rivojlanish bo'limi mutaxassisi sifatida viloyatning oxirgi besh yillik iqtisodiy o'sish tendensiyasi bo'yicha rahbarga axborot tayyorlash kerak."],
  ['Buxgalteriya hisobi', "Korxona buxgalteri sifatida kelgusi yil uchun narx va xarajat o'zgarishi (inflyatsiya) bo'yicha byudjet taxminini asoslash kerak."],
  ['Soliq va soliqqa tortish', "Soliq maslahatchisi sifatida mijozga soliq stavkalari va imtiyozlarning joriy holati bo'yicha rasmiy manbaga asoslangan axborot berish kerak."],
  ['Moliya va moliyaviy texnologiyalar', "Moliya tahlilchisi sifatida valyuta kursi va inflyatsiya ma'lumotlariga tayanib kichik loyiha uchun investitsiya qarorini asoslash kerak."],
  ['Bank ishi', "Kredit bo'limi xodimi sifatida kichik biznes mijozning kredit so'rovi bo'yicha iqtisodiy muhit ma'lumotlarini yig'ib xulosa tayyorlash kerak."],
]

const tasks = [
  {
    id: 'IAK-1',
    title: 'Iqtisodiy axborotni izlash va saralash',
    meta: "1–2-bosqich · 2 soat · Brauzer, Stat.uz, World Bank Data, MS Excel",
    goal: "Kasbiy vaziyat bo'yicha axborot ehtiyojini aniqlash, manbalarni topish va ishonchlilik mezonlari bo'yicha saralash.",
    steps: [
      "Kasbiy vaziyat kartasini o'qing va qaror uchun kerak bo'ladigan 3 ta savolni yozing. Har savol yonida \"nima uchun kerak\" degan bir gap qo'shing.",
      "Har bir savol bo'yicha kamida 5 ta manba toping: kamida 2 tasi rasmiy (Stat.uz, davlat organi, xalqaro tashkilot), qolganlari boshqa (yangilik sayti, blog, tahliliy portal).",
      "Excel'da \"Manbalarni saralash jadvali\"ni to'ldiring: har manbani quyidagi 5 mezon bo'yicha 0, 1 yoki 2 ball bilan baholang (jami 10 ball).",
      "Eng ishonchli 2 ta manbani tanlang va nima uchun tanlaganingizni 2–3 gapda asoslang.",
    ],
    extra: ['Rasmiylik', 'Dolzarblik', 'Metodologiya (ma\'lumot qanday hisoblangani)', 'Tekshirilishi (boshqa manbada ham bormi)', 'Mustaqillik (reklama yoki manfaatdorlik bormi)'],
    extraTitle: 'Saralash mezonlari',
    result: "Axborot ehtiyoji varag'i va to'ldirilgan manbalarni saralash jadvali (Excel).",
  },
  {
    id: 'IAK-2',
    title: "Sun'iy intellekt javobini tekshirish (verifikatsiya)",
    meta: "3-bosqich · 3 soat · AI yordamchi, Stat.uz yoki World Bank Data, MS Excel, Looker Studio",
    goal: "AI bergan iqtisodiy ma'lumotni rasmiy manba bilan solishtirish, xatolarni aniqlash va tasniflash.",
    steps: [
      "AI vositasiga kasbiy vaziyatga oid so'rov bering (masalan, \"O'zbekistonda so'nggi 5 yilda yillik inflyatsiya darajasi qanday bo'lgan?\"). So'rovingiz va AI javobini faylga saqlang.",
      "AI javobidagi har bir raqam va da'voni Excel'da alohida satrga yozing.",
      "Har bir da'voni rasmiy manba bilan solishtiring va manba raqamini yonidagi ustunga yozing.",
      "Farqni hisoblang: =ABS(AI - manba) / manba. Farq 5 foizdan katta bo'lsa, \"xato\" deb belgilang (chegarani o'qituvchi o'zgartirishi mumkin).",
      "Har bir xatoni turi bo'yicha tasniflang.",
      "Looker Studio'da AI va rasmiy manba raqamlarini taqqoslovchi bitta grafik yarating.",
    ],
    extra: ["Raqam noto'g'ri", "Ma'lumot eskirgan", "Manba ko'rsatilmagan", "Mavjud bo'lmagan ma'lumot (uydirma)"],
    extraTitle: "Xato turlari",
    result: "Excel tahlil fayli (da'vo – manba – farq – xato turi) va Looker Studio grafigi.",
  },
  {
    id: 'IAK-3',
    title: 'Axborot asosida qaror qabul qilish va refleksiya',
    meta: "4-bosqich · 2 soat · Google Docs yoki MS Word, IAK-1 va IAK-2 natijalari",
    goal: "Tekshirilgan axborotga tayanib kasbiy qaror qabul qilish va o'z ishini baholash.",
    steps: [
      "IAK-1 va IAK-2 natijalaringizga tayanib qaror xulosasini yozing (1 bet): tavsiya, 3 ta dalil (har biri manba bilan), asosiy xavf va ishonchlilik darajasi (past, o'rta, yuqori).",
      "Xulosada AI'dan olingan qaysi ma'lumot tasdiqlanganini va qaysi biri chiqarib tashlanganini alohida ko'rsating.",
      "Refleksiya savollariga javob bering.",
      "Guruhda 3 daqiqalik himoya qiling va hamkasbingizdan bitta savol oling.",
    ],
    extra: ["Qaysi manba menga eng ko'p yordam berdi va nima uchun?", "AI javobida qanday xatoni topdim va uni qanday aniqladim?", "Qaror qabul qilishda qaysi axborot yetishmadi?", "Keyingi safar axborot bilan ishlashda nimani boshqacha qilaman?"],
    extraTitle: 'Refleksiya savollari',
    result: 'Qaror xulosasi (1 bet) va refleksiya.',
  },
]

const rubrika = [
  ['Motivatsion-qadriyatli', "Axborot ehtiyoji aniqlanmagan yoki vaziyatga mos emas.", "Ehtiyoj qisman aniq, \"nima uchun\" asoslanmagan.", "Ehtiyoj aniq, kasbiy ahamiyati asoslangan."],
  ['Axborot-kognitiv', "3 tadan kam manba; saralash yo'q.", "5 manba bor, saralash qisman.", "5 va undan ko'p manba, mezonlar bo'yicha to'liq saralash."],
  ['Intellektual-operatsion', "Tahlil noto'g'ri; AI xatolari topilmagan.", "Tahlil to'g'ri, xatolarning bir qismi topilgan.", "Tahlil to'g'ri, xatolar to'liq topilgan va tasniflangan."],
  ['Refleksiv-diagnostik', "Qaror asoslanmagan; refleksiya yuzaki.", "Qaror qisman asoslangan; refleksiya umumiy.", "Qaror dalillar bilan asoslangan; refleksiya aniq va tanqidiy."],
]

export default function IakModuli() {
  return (
    <div className='py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 bg-white text-black min-h-screen'>
      {/* Sarlavha */}
      <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-blue-100 pb-8 sm:pb-12'>
        <div className='space-y-3 sm:space-y-4 text-left'>
          <div className='inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none'>
            <span className='w-1.5 h-1.5 rounded-full bg-blue-600'></span>
            IAK moduli
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl text-blue-600 tracking-tight leading-[1.15] uppercase'>
            Iqtisodiy axborot kompetentligi
          </h2>
          <p className='text-blue-900/60 text-sm sm:text-[15px] max-w-2xl leading-relaxed font-medium'>
            Iqtisodiy axborotni izlash, saralash, ishonchliligini tekshirish, tahlil qilish va asosli qaror qabul qilish ko'nikmalarini rivojlantiradigan 4 bosqichli modul. Mavjud laboratoriya ishlariga qo'shimcha sifatida bajariladi.
          </p>
        </div>
        <div className='grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none'>
          {[
            { count: '4', name: 'Bosqich' },
            { count: '3', name: 'Topshiriq' },
            { count: '5', name: "Yo'nalish" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-blue-50/40 border border-blue-100 rounded-2xl p-4 sm:p-5 sm:min-w-[130px] flex flex-col justify-center ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <span className='text-xl sm:text-2xl font-black text-blue-950 tracking-tight'>{stat.count}</span>
              <span className='text-[10px] sm:text-[11px] font-bold text-blue-400 mt-0.5 uppercase tracking-wider'>{stat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 bosqich */}
      <section className='space-y-6 sm:space-y-8'>
        <div className='flex items-center gap-3 select-none'>
          <div className='w-1.5 h-6 bg-blue-600 rounded-full'></div>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight'>Modulning 4 bosqichi</h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stages.map((s) => (
            <div key={s.n} className='bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-blue-100 shadow-sm flex flex-col gap-3 text-left'>
              <div className='flex items-center justify-between select-none'>
                <span className='bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100'>{s.n}-bosqich</span>
                <span className='text-xl font-black text-blue-200'>0{s.n}</span>
              </div>
              <h4 className='text-lg font-bold text-blue-950 leading-snug'>{s.title}</h4>
              <p className='text-[11px] font-bold text-blue-500 uppercase tracking-wider'>{s.comp} komponent</p>
              <p className='text-sm text-blue-900/70 leading-relaxed'>{s.what}</p>
              <div className='mt-auto pt-3 border-t border-blue-100 text-xs text-blue-900/70 space-y-1'>
                <p><span className='font-bold text-blue-900'>Natija:</span> {s.out}</p>
                <p><span className='font-bold text-blue-900'>Mezon:</span> {s.crit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kasbiy vaziyat kartalari */}
      <section className='space-y-6 sm:space-y-8'>
        <div className='flex items-center gap-3 select-none'>
          <div className='w-1.5 h-6 bg-blue-600 rounded-full'></div>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight'>Kasbiy vaziyat kartalari</h3>
        </div>
        <p className='text-blue-900/60 text-sm sm:text-[15px] max-w-3xl font-medium'>O'z yo'nalishingiz kartasini tanlang. Barcha topshiriqlar shu vaziyat asosida bajariladi.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {vaziyatlar.map(([name, text]) => (
            <div key={name} className='bg-white rounded-2xl p-5 border border-blue-100 shadow-sm text-left'>
              <h4 className='font-bold text-blue-950 mb-2'>{name}</h4>
              <p className='text-sm text-blue-900/70 leading-relaxed'>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topshiriqlar */}
      <section className='space-y-6 sm:space-y-8'>
        <div className='flex items-center gap-3 select-none'>
          <div className='w-1.5 h-6 bg-blue-600 rounded-full'></div>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight'>Namunaviy topshiriqlar</h3>
        </div>
        <div className='space-y-4'>
          {tasks.map((t) => (
            <details key={t.id} className='group bg-blue-50/60 rounded-2xl sm:rounded-3xl border border-blue-100 shadow-sm overflow-hidden'>
              <summary className='list-none p-5 sm:p-6 cursor-pointer flex justify-between items-center gap-4 select-none text-left'>
                <div>
                  <span className='bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100'>{t.id}</span>
                  <h4 className='mt-2 text-base sm:text-lg font-bold text-blue-950'>{t.title}</h4>
                  <p className='text-xs text-blue-900/60 mt-1'>{t.meta}</p>
                </div>
                <svg className='w-5 h-5 text-blue-600 shrink-0 group-open:rotate-180 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5' d='M19 9l-7 7-7-7' />
                </svg>
              </summary>
              <div className='px-5 sm:px-6 pb-6 text-left space-y-4 text-sm text-blue-900/80 leading-relaxed'>
                <p><span className='font-bold text-blue-950'>Maqsad:</span> {t.goal}</p>
                <div>
                  <p className='font-bold text-blue-950 mb-1'>Topshiriq:</p>
                  <ol className='list-decimal pl-5 space-y-1.5'>
                    {t.steps.map((st, i) => <li key={i}>{st}</li>)}
                  </ol>
                </div>
                <div>
                  <p className='font-bold text-blue-950 mb-1'>{t.extraTitle}:</p>
                  <ul className='list-disc pl-5 space-y-1'>
                    {t.extra.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
                <p><span className='font-bold text-blue-950'>Natija:</span> {t.result}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Rubrika */}
      <section className='space-y-6 sm:space-y-8'>
        <div className='flex items-center gap-3 select-none'>
          <div className='w-1.5 h-6 bg-blue-600 rounded-full'></div>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight'>Baholash rubrikasi</h3>
        </div>
        <div className='overflow-x-auto rounded-2xl border border-blue-100'>
          <table className='w-full min-w-[720px] text-sm text-left'>
            <thead className='bg-blue-50 text-blue-950'>
              <tr>
                <th className='p-4 font-bold'>Mezon</th>
                <th className='p-4 font-bold'>0 ball (past)</th>
                <th className='p-4 font-bold'>1 ball (o'rta)</th>
                <th className='p-4 font-bold'>2 ball (yuqori)</th>
              </tr>
            </thead>
            <tbody>
              {rubrika.map((r) => (
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
        <div className='bg-blue-50/40 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900/80 leading-relaxed text-left space-y-2'>
          <p><span className='font-bold text-blue-950'>Integral indeks:</span> IAK = (M + K + O + R) / 8, bunda M, K, O, R har bir mezon bo'yicha ball (0–2). Indeks 0 dan 1 gacha qiymat oladi.</p>
          <p><span className='font-bold text-blue-950'>Darajalar:</span> 0,00–0,49 past; 0,50–0,74 o'rta; 0,75–1,00 yuqori.</p>
        </div>
      </section>

      {/* Interaktiv vositalar */}
      <IakVositalar />

      {/* Natijani topshirish */}
      <section className='p-5 sm:p-8 bg-blue-600 rounded-[2rem] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-left'>
        <div>
          <h3 className='text-lg sm:text-xl font-bold mb-1'>Natijani topshirish</h3>
          <p className='text-sm text-blue-100 max-w-xl'>Tayyor fayllaringizni (ehtiyoj varag'i, saralash jadvali, tahlil fayli, qaror xulosasi) o'qituvchi ko'rsatgan forma orqali yuboring. Talaba kodi va guruh kodingizni yozishni unutmang.</p>
        </div>
        {IAK_FORM_URL ? (
          <a href={IAK_FORM_URL} target='_blank' rel='noopener noreferrer' className='px-8 py-3.5 bg-white text-blue-600 rounded-xl font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-md'>
            Formani ochish
          </a>
        ) : (
          <span className='px-8 py-3.5 bg-white/20 text-white rounded-xl font-bold select-none'>Forma tez orada</span>
        )}
      </section>

      <div className='text-sm text-blue-900/60 text-left'>
        Modul haqida savollar bo'lsa, <Link href='/laboratoriya' className='text-blue-600 font-semibold underline'>laboratoriya ishlari</Link> sahifasidagi materiallar bilan birga ko'ring.
      </div>
    </div>
  )
}
