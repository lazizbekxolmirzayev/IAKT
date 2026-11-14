"use client"
import React from 'react';
import Link from 'next/link';

// ============================================================================
// 📊 NAZORAT TESTLARI MASSIVI (Tuzatilgan va optimallashtirilgan variant)
// ============================================================================
const quizTasks = [
  { id: 1, title: "IAKT 1-mavzu bo'yicha test", mavzu: "Kommunikatsiya texnologiyalarining iqtisodiyotdagi o'rni va vazifalari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSelXre48T41NrcU8e1Tdjl4k88ECPI0FqRYLQEyVRjx8Qk3Kw/viewform" },
  { id: 2, title: "IAKT 2-mavzu bo'yicha test", mavzu: "Axborot texnologiyalarining infratuzilmasi.", link: "https://docs.google.com/forms/d/e/1FAIpQLScx4gsAvUKzTjPBPGdOGicwIAzNuzXWDAjDoU-xsSdpsHlLpg/viewform" },
  { id: 3, title: "IAKT 3-mavzu bo'yicha test", mavzu: "Dasturiy ta'minot va uning rivojlanish tendensiyalari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfCFSaR97AGn9ZJaQh3ZyqhS5ivJUXDxLF0r9xdbYYxGB5pDA/viewform" },
  { id: 4, title: "IAKT 4-mavzu bo'yicha test", mavzu: "Iqtisodiy masalalarni yechishda jadval muharrirlaridan foydalanish.", link: "https://docs.google.com/forms/d/e/1FAIpQLSeX-yRvJ0VCCAjUQ3MrHNfOHWwODZvQt4H7P_roIVOfWrBTqg/viewform" },
  { id: 5, title: "IAKT 5-mavzu bo'yicha test", mavzu: "Taqdimotlarni ishlab chiqishning instrumental vositalari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfwPoZa-QJP9xPaOUy8znRt_CfbUouUUFb77HmIJAU7Y2PJbg/viewform" },
  { id: 6, title: "IAKT 6-mavzu bo'yicha test", mavzu: "Iqtisodiyot sohalarida tarmoq texnologiyalaridan foydalanish.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfUEsbfappD_zwC9LxhOhWzvPKWYYwoWGr4QDz2APYxp3e0AA/viewform" },
  { id: 7, title: "IAKT 7-mavzu bo'yicha test", mavzu: "Ma'lumotlar bazasi va undan foydalanish tizimlari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSe25_P-7Qp4VCax-CKeZQ6dHhy1IhE5OPEffnhYMT6Z_khVCw/viewform" },
  { id: 8, title: "IAKT 8-mavzu bo'yicha test", mavzu: "Big Data (Katta ma'lumotlar) bilan ishlash texnologiyalari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSdcn7cWEdxVzUW1FT_fo_VFZURknz7YqZFKsDPx8WrRziPU3w/viewform" },
  { id: 9, title: "IAKT 9-mavzu bo'yicha test", mavzu: "Axborot tizimlari va ularning iqtisodiy tahlildagi roli.", link: "https://docs.google.com/forms/d/e/1FAIpQLSc38hRPQCAlbFg2lkDcTzLUPHKjIGlPshCtKztmxWBpKFakCQ/viewform" },
  { id: 10, title: "IAKT 10-mavzu bo'yicha test", mavzu: "Elektron hukumat tizimi va uning iqtisodiy asoslari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSe2cBJR5eIYZoZuTp5o76cDGRdZe5wMp1jzjIxnfZAsCaTkHg/viewform" },
  { id: 11, title: "IAKT 11-mavzu bo'yicha test", mavzu: "Bulutli texnologiyalar va ma'lumotlarni masofaviy saqlash.", link: "https://docs.google.com/forms/d/e/1FAIpQLSdFAWUvIS2aBmD08iy9PZHmLAAJNt1IofCxFy46GC7Gw5AO6Q/viewform" },
  { id: 12, title: "IAKT 12-mavzu bo'yicha test", mavzu: "Blockchain texnologiyasi va raqamli xavfsizlik.", link: "https://docs.google.com/forms/d/e/1FAIpQLSeOIG4NSJ2U4HDwg6cA9-i9JuuL4vlIUwYDa2lyVx459zv5Cg/viewform" },
  { id: 13, title: "IAKT 13-mavzu bo'yicha test", mavzu: "Sun'iy intellekt texnologiyalari va ularning rivojlanishi.", link: "https://docs.google.com/forms/d/e/1FAIpQLSe5dZgXgsqHY8yyDIWVMF6xXU_kKyPcuWhmIuqkHhB46qCF5Q/viewform" },
  { id: 14, title: "IAKT 14-mavzu bo'yicha test", mavzu: "Elektron tijorat va onlayn biznesni yuritish asoslari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSc_Iky8s3v2TaY43beB-DXtOefWRmIXX-fFaTq5PV3aLwxM1Q/viewform" },
  { id: 15, title: "IAKT 15-mavzu bo'yicha test", mavzu: "Axborot xavfsizligi va kibermahandislik asoslari.", link: "https://docs.google.com/forms/d/e/1FAIpQLSdYGn8M9GyDFWnz8YVQVm_OXTAF2AnIUPLV8bGg4LRwDhzhKQ/viewform" }
];

// ============================================================================
// 🚀 ASOSIY PROFESSIONAL NAZORAT SAHIFASI
// ============================================================================
export default function NazoratPage() {
  return (
    /* ✨ PX-20 OPTIMIZATSIYASI:
       Katta monitorlar uchun `md:px-20` masofasi qo'shildi.
       Planshet va mobil qurilmalarda kontent chekkalarga yopishib qolmasligi uchun `px-6 sm:px-12` berildi.
    */
    <div className='py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen'>
      
      {/* 🌟 Yuqori Premium Sarlavha Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 border-b border-blue-100 pb-8 sm:pb-12">
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Nazorat Moduli
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.15] lg:leading-[1.1] uppercase'>
            Nazorat testlari
          </h2>
          <p className="text-blue-900/60 text-sm sm:text-[15px] max-w-xl leading-relaxed font-medium">
            Iqtisodiyotda AKT fani doirasida o'tilgan barcha 15 ta mavzu bo'yicha bilimlarni onlayn tekshirish va nazorat tizimi.
          </p>
        </div>

        {/* Minimalist Vidjetlar */}
        <div className="grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none">
          {[
            { count: "15", name: "Jami Testlar" },
            { count: "Onlayn", name: "Format" },
            { count: "Google Form", name: "Tizim" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`bg-blue-50/40 border border-blue-100 rounded-2xl p-4 sm:p-5 sm:min-w-[130px] flex flex-col justify-center ${
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">{stat.count}</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 mt-0.5 uppercase tracking-wider">{stat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- GRID QISMI: 15 TA NAZORAT TESTI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Mavzulashtirilgan test topshiriqlari
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizTasks.map((quiz) => (
            <a
              key={quiz.id}
              href={quiz.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    Mavzu {quiz.id}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-blue-200">
                    {quiz.id < 10 ? `0${quiz.id}` : quiz.id}
                  </span>
                </div>

                <h4 className="text-base sm:text-[17px] font-bold text-blue-950 leading-[1.4] mb-3 group-hover:text-blue-600 transition-colors duration-300 min-h-[44px] flex items-center text-left">
                  {quiz.title}
                </h4>
                
                {/* min-h-[] Tekislikni saqlaydi */}
                <p className="text-xs sm:text-[13px] font-medium text-blue-900/60 leading-[1.5] line-clamp-3 text-left min-h-[58px]">
                  {quiz.mavzu}
                </p>
              </div>
              
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-5 sm:mt-6 mt-auto">
                <div className="w-full py-2.5 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors duration-300 select-none">
                  <span>Testni boshlash</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Eslatma: test mavzulari tartibi */}
      <div className="p-5 sm:p-6 bg-blue-50/40 border border-blue-100 rounded-2xl text-left text-sm text-blue-900/80 leading-relaxed">
        <strong className="text-blue-600 font-bold">Eslatma:</strong> test mavzulari fan dasturi tartibida berilgan, shuning uchun ularning tartibi ma'ruza va laboratoriya mashg'ulotlari tartibidan farq qilishi mumkin. Iqtisodiy axborot bilan ishlash ko'nikmalari <Link href="/iak-moduli" className="text-blue-600 font-semibold underline">IAK moduli</Link> topshiriqlari orqali baholanadi.
      </div>

     
    </div>
  );
}