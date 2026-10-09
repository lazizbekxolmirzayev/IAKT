"use client"
import React from 'react';

const pdfPlans = [
  {
    id: 1,
    title: "Iqtisodiyot yo'nalishi o'quv rejasi",
    pdfUrl: "https://drive.google.com/file/d/1RVJ6N3fzwH2P_XL3SdMf5v0Vo5DrGAWf/view"
  },
  {
    id: 2,
    title: "Buxgalteriya hisobi yo'nalishi o'quv reja",
    pdfUrl: "https://drive.google.com/file/d/1Pc5qUBu_yVMgjm03g0yy-3Zb7uytW5WU/view"
  },
  {
    id: 3,
    title: "Soliq va soliqqa tortish yo'nalishi o'quv rejasi",
    pdfUrl: "https://drive.google.com/file/d/1Mtkj87jGnpFLFqWIK25bHqpZsbVt20-Z/view"
  },
  {
    id: 4,
    title: "Moliya va moliyaviy texnologiyalari yo'nalishi o'quv rejasi",
    pdfUrl: "https://drive.google.com/file/d/1dsO66AXkL_2M1KDYGc2gt6zDq5Dk1XK0/view"
  },
  {
    id: 5,
    title: "Bank ishi yo'nalishi o'quv rejasi",
    pdfUrl: "https://drive.google.com/file/d/1Y3k2jrpMkjIRYp3YTGaIv9B9UE7jGNj4/view"
  }
];

// ============================================================================
// 🚀 ASOSIY PREMIUM O'QUV REJALARI SAHIFASI
// ============================================================================
export default function OquvReja() {
  return (
    /* ✨ PX-20 OPTIMIZATSIYASI:
      Katta ekranlarda (md:) ikki yondan masofa `px-20` qilindi. 
      Kichik mobil ekranlarda kontent qisilib qolmasligi uchun `px-6` va `sm:px-12` silliq o'tishlari saqlandi.
    */
    <div className='py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen'>
      
      {/* 🌟 Yuqori Premium Sarlavha Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 border-b border-blue-100 pb-8 sm:pb-12">
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Rejalashtirish Moduli
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.15] lg:leading-[1.1]'>
            Fanning <br className="hidden sm:inline" /> o'quv rejalari
          </h2>
          <p className="text-blue-900/60 text-sm sm:text-[15px] max-w-xl leading-relaxed font-medium">
            Iqtisodiyotda AKT va tizimlari fani doirasida tasdiqlangan haftalik dars rejalari, sillabuslar hamda elektron hujjatlar majmuasi.
          </p>
        </div>

        {/* Vidjetlar */}
        <div className="grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none">
          {[
            { count: "05", name: "Jami Rejalar" },
            { count: "PDF", name: "Hujjat Turi" },
            { count: "2026", name: "O'quv Yili" }
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

      {/* ---------------- GRID QISMI: O'QUV REJA KARDLARI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Tasdiqlangan dasturlar ro'yxati
          </h3>
        </div>

        {/* Kardlar Grid tizimi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfPlans.map((item) => (
            <a
              key={item.id}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    Modul #{item.id}
                  </span>
                  
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-blue-50 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <h4 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.35] mb-3 group-hover:text-blue-600 transition-colors duration-300 min-h-[48px] sm:min-h-[52px] flex items-center text-left line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-xs sm:text-[13px] font-medium text-blue-900/60 leading-[1.6] line-clamp-3 text-left flex-grow mb-5">
                  {item.description}
                </p>
              </div>
              
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-auto">
                <div className="flex items-center justify-between gap-2 select-none">
                  <span className="text-blue-900/40 text-[11px] sm:text-xs font-semibold whitespace-nowrap">
                    Format: <span className="text-blue-600 font-bold">PDF</span>
                  </span>
                  
                  <div className="flex items-center bg-blue-600 text-white px-3.5 sm:px-4 py-2 rounded-xl font-bold text-[11px] sm:text-xs group-hover:bg-blue-700 transition-all duration-300 shadow-sm whitespace-nowrap">
                    <span>Rejani ko'rish</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}