import React from 'react'
import Link from 'next/link'

const items = [
  { n: '01', t: 'Motivatsion-qadriyatli', d: "Kasbiy vaziyatda axborot nima uchun kerakligini anglash." },
  { n: '02', t: 'Axborot-kognitiv', d: "Manbalarni izlash va ishonchlilik mezonlari bo'yicha saralash." },
  { n: '03', t: 'Intellektual-operatsion', d: "Ma'lumotni tahlil qilish va sun'iy intellekt javobini tekshirish." },
  { n: '04', t: 'Refleksiv-diagnostik', d: "Asosli qaror qabul qilish va o'z natijasini baholash." },
]

export default function IakBlok() {
  return (
    <section className='py-12 sm:py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight'>Iqtisodiy axborot kompetentligi</h2>
          <p className='mt-3 text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto'>
            Platforma talabaning iqtisodiy axborot bilan ishlash kompetentligini 4 komponent bo'yicha rivojlantiradi.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {items.map((it) => (
            <div key={it.n} className='bg-blue-50/60 border border-blue-100 rounded-2xl p-5 text-left shadow-sm'>
              <span className='text-xl font-black text-blue-200'>{it.n}</span>
              <h3 className='mt-1 text-base font-bold text-blue-950'>{it.t}</h3>
              <p className='mt-2 text-sm text-blue-900/70 leading-relaxed'>{it.d}</p>
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link href='/iak-moduli' className='inline-block px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md'>
            IAK moduliga o'tish
          </Link>
        </div>
      </div>
    </section>
  )
}
