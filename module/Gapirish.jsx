"use client";
import React from "react";

const lectureTexts = [
  {
    id: 1,
    title: "1-ma'ruza. Axborot-kommunikatsiya texnologiyalarining iqtisodiyotdagi o‘rni va vazifalari",
    fileName: "1-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1sCLxEOsOAuVBK4ErxucM9pmeC1q35tbC/view",
  },
  {
    id: 2,
    title: "2-ma'ruza. Tizimli dasturiy ta'minot",
    fileName: "2-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1DI8DWVJJlm9-MBEXZGtl-4oECGLQQikx/view",
  },
  {
    id: 3,
    title: "3-ma'ruza. Ma'lumotlarni qayta ishlash",
    fileName: "3-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1LF8TPIw-8IDFI8vnDx1jiIcu1CBlfaac/view",
  },
  {
    id: 4,
    title: "4-ma'ruza. Tarmoq texnologiyalari",
    fileName: "4-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1qMazqSXd-xWHw5RVeSVw5ddASsnJxJaR/view",
  },
  {
    id: 5,
    title: "5-ma'ruza. Internet va uning xizmatlari",
    fileName: "5-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1N_EYxPXblyWS5YH-S8FtyVylTQ2b8Fbv/view",
  },
  {
    id: 6,
    title: "6-ma'ruza. Axborot xavfsizligi asoslari",
    fileName: "6-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1hkU-L_AjAiw3rIPytTyY29LoPvmkYDTc/view",
  },
  {
    id: 7,
    title: "7-ma'ruza. Ma'lumotlar bazasi tizimlari",
    fileName: "7-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/16TvIj3x1RZIOPA1GjILbRvdRVurkwJnR/view",
  },
  {
    id: 8,
    title: "8-ma'ruza. Bulutli texnologiyalar",
    fileName: "8-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1dAwJE8nb7PpCBsuqmx2I-aV35_i7yLPU/view",
  },
  {
    id: 9,
    title: "9-ma'ruza. Sun'iy intellektga kirish",
    fileName: "9-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1F5poX1_X75WsehigrRnqCbkuu6IhaQyh/view",
  },
  {
    id: 10,
    title: "10-ma'ruza. Raqamli iqtisodiyot texnologiyalari",
    fileName: "10-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/148nop2smdloloCA7iqaZNMIlCfNcvAmb/view",
  },
  {
    id: 11,
    title: "11-ma'ruza. Elektron hukumat tizimi",
    fileName: "11-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1N2IyHUrHpbsHpDQy-w7yHweu8i4ayh6u/view",
  },
  {
    id: 12,
    title: "12-ma'ruza. Algoritmlash asoslari",
    fileName: "12-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1uNZ8tQTyv_BJx92NgCLeVgdt4pll8G4d/view",
  },
  {
    id: 13,
    title: "13-ma'ruza. Web dasturlashga kirish",
    fileName: "13-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1LwXN_MCrvQaRqjVHn6b7vC48mQOMq7hC/view",
  },
  {
    id: 14,
    title: "14-ma'ruza. Elektron biznes va mobil tijorat",
    fileName: "14-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/1mcFckNhY9WCraSFDy2W1YRSN9s_H7mPc/view",
  },
  {
    id: 15,
    title: "15-ma'ruza. Zamonaviy AT tendensiyalari",
    fileName: "15-ma_ruza IAKTT.pdf",
    fileUrl: "https://drive.google.com/file/d/17r2zjmnQTAY5lAuKfbiIMCt06cOMUliQ/view",
  },
];

const lecturePresentations = [
  {
    id: 1,
    title: "1-ma'ruza taqdimoti. Kirish",
    fileName: "1-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/18thv58VinxxTDd1SsB0rNlfdyUraY4e7/view",
  },
  {
    id: 2,
    title: "2-ma'ruza taqdimoti. Shaxsiy kompyuterlar",
    fileName: "2-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1amYnAHpPt1crSNE_ySHMDY2yOOj92wsG/view",
  },
  {
    id: 3,
    title: "3-ma'ruza taqdimoti. Amaliy dasturlar",
    fileName: "3-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1IbB-eyNTu1xzEg_oApFAyeYHsbaM_gO-/view",
  },
  {
    id: 4,
    title: "4-ma'ruza taqdimoti. Tarmoqlar",
    fileName: "4-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1NuXORvXnlcN64ZFl64KWnM-6Ni9KQcyE/view",
  },
  {
    id: 5,
    title: "5-ma'ruza taqdimoti. Global tarmoq",
    fileName: "5-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/15f1VrBcbwWiBMNlqmCL3lvnfeN23H4nb/view",
  },
  {
    id: 6,
    title: "6-ma'ruza taqdimoti. Kriptografiya",
    fileName: "6-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1o3Vg-ZNhkI8XF1R6ixZao3-tCM6hiaRM/view",
  },
  {
    id: 7,
    title: "7-ma'ruza taqdimoti. SQL va MB",
    fileName: "7-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1VEzlKH3SHFu2njtnBbnXStYWGC_TCH2q/view",
  },
  {
    id: 8,
    title: "8-ma'ruza taqdimoti. Virtualizatsiya",
    fileName: "8-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1bRzXz20ctSa6uKlfbsTx7PMkYEVdk6jQ/view",
  },
  {
    id: 9,
    title: "9-ma'ruza taqdimoti. Neyron tarmoqlari",
    fileName: "9-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1UKKEH7pimSdHSfWZ1cdQaNM3SDz3AWax/view",
  },
  {
    id: 10,
    title: "10-ma'ruza taqdimoti. Blokcheyn texnologiyasi",
    fileName: "10-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1H6tpkZZ_8xgVzDCwx-lcdLL03wRi-9yA/view",
  },
  {
    id: 11,
    title: "11-ma'ruza taqdimoti. Davlat xizmatlari",
    fileName: "11-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1w-3zpPo6F9GRpEpwmezTMwmnvt9gAuAB/view",
  },
  {
    id: 12,
    title: "12-ma'ruza taqdimoti. Dasturlash tillari",
    fileName: "12-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1bb5gOMXhUYOl87f8Hdp1MEPOFBEsJ73a/view",
  },
  {
    id: 13,
    title: "13-ma'ruza taqdimoti. HTML, CSS va JS",
    fileName: "13-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1NoWnxC6y1Qj4vfaEpK3Aqief7_fGMqU_/view",
  },
  {
    id: 14,
    title: "14-ma'ruza taqdimoti. Elektron tijorat",
    fileName: "14-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1wHRkihZaGJ-WfwcAA--kBle6E96CVPyf/view",
  },
  {
    id: 15,
    title: "15-ma'ruza taqdimoti. Kelajak texnologiyalari",
    fileName: "15-ma_ruza.pptx",
    fileUrl: "https://drive.google.com/file/d/1jUgQvQDiR0m_lN2rPHukGZzo4ELZ9N3J/view",
  },
];

// ============================================================================
// 🚀 ASOSIY KOMPONENT
// ============================================================================
export default function Gapirish() {
  return (
    /* ✨ PX-20 OPTIMIZATSIYASI: 
       Katta ekranlarda yon masofalar `md:px-20` qilib kengaytirildi. 
       Mobil qurilmalarda qisilib qolmasligi uchun `px-6 sm:px-12` dinamik rejimi berildi.
    */
    <div className="py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen">
      
      {/* ---------------- 1. MA'RUZA MATNLARI BO'LIMI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.1] uppercase">
          Ma'ruza matnlari
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lectureTexts.map((item) => (
            <a
              key={item.id}
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative active:scale-[0.98]"
            >
              <div className="text-center flex-1 flex flex-col">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-5 border border-blue-100 overflow-hidden select-none">
                  <img
                    src="/imageee.png"
                    alt="PDF logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Sarlavha balandligi min-h orqali tekislandi */}
                <h3 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.4] mb-4 min-h-[56px] sm:min-h-[72px] flex items-center justify-center line-clamp-3">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-blue-100 mt-auto">
                <div className="flex flex-col text-left select-none">
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                    Fayl nomi
                  </span>
                  <span className="text-blue-900/80 font-medium text-[13px] truncate max-w-full">
                    {item.fileName}
                  </span>
                </div>

                <div className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 group-hover:bg-blue-700 transition-colors select-none">
                  <span>Hujjatni ochish</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- 2. MA'RUZA TAQDIMOTLARI BO'LIMI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.1] uppercase">
          Ma'ruza taqdimotlari
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lecturePresentations.map((item) => (
            <a
              key={item.id}
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-blue-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative active:scale-[0.98]"
            >
              <div className="text-center flex-1 flex flex-col">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-5 border border-blue-100 overflow-hidden select-none">
                  <img
                    src="/imagege.png"
                    alt="Presentation logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Sarlavha balandligi ma'ruzalarga mos ravishda tekislandi */}
                <h3 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.4] mb-4 min-h-[56px] sm:min-h-[72px] flex items-center justify-center line-clamp-3">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-blue-100 mt-auto">
                <div className="flex flex-col text-left select-none">
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                    Fayl nomi
                  </span>
                  <span className="text-blue-900/80 font-medium text-[13px] truncate max-w-full">
                    {item.fileName}
                  </span>
                </div>

                <div className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 group-hover:bg-blue-700 transition-colors select-none">
                  <span>Taqdimotni ko'rish</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}