"use client"
import React from 'react';

// ============================================================================
// 🎯 INTERFAOL METODLAR MASSIVI (Rasmda keltirilgan 7 ta metod)
// ============================================================================
const interactiveMethods = [
  { id: 1, title: "\"Loyiha\" metodi", tavsif: "Ta'lim oluvchilarning mustaqil yoki guruhda belgilangan vaqt davomida muammoni tadqiq etish va natija ko'rsatish metodi.", link: "https://drive.google.com/file/d/1l9J5p0VipmUrst_k_NptM4gxfa9LGQrC/view" },
  { id: 2, title: "\"Aqliy hujum\" metodi", tavsif: "Biror muammo bo'yicha qatnashchilar tomonidan bildirilgan g'oya va fikrlarni erkin yig'ish va tahlil qilish metodi.", link: "https://drive.google.com/file/d/1MO4aJKeu7zxHINNW3OiONyQTk4cUNlGq/view" },
  { id: 3, title: "\"Bahs-munozara\" metodi", tavsif: "Biror mavzu yoki muammo yuzasidan o'quvchilar o'rtasida o'zaro fikr almashish va munozara tashkil etish usuli.", link: "https://drive.google.com/file/d/1y-9RQB2JGnAnC9Ctz6vzkQ3-nMYFrZEu/view" },
  { id: 4, title: "\"Baliq skleti\" metodi (Ishikawa)", tavsif: "Muammoning kelib chiqish sabablari va oqibatlarini vizual tarzda tahlil qilish va zanjir hosil qilish tizimi.", link: "https://drive.google.com/file/d/1nmQuUb7veFidGjPnkmmzYn0bM-7BkDq9/view" },
  { id: 5, title: "\"Davra suhbati\" metodi", tavsif: "Aylana stol atrofida berilgan muammo yoki savollar yuzasidan barcha o'quvchilarning teng fikr almashish metodi.", link: "https://drive.google.com/file/d/1GJ_339c9BB3PQUKDl2On8ePQcQDaX31G/view" },
  { id: 6, title: "\"Klaster\" metodi", tavsif: "Mavzuga oid tushunchalar va ma'lumotlar o'rtasidagi aloqalarni tarmoqlash (zanjir) shaklida vizualizatsiya qilish.", link: "https://drive.google.com/file/d/1W0WJKpYaTGpP5iD76zW_MqCwZ5m50BqI/view" },
  { id: 7, title: "\"Muammoli vaziyat\" metodi", tavsif: "Ta'lim oluvchilarda muammoli vaziyatlarni tahlil qilish, sabab-oqibatni topish va yechim ko'nikmalarini shakllantirish.", link: "https://drive.google.com/file/d/1rq6rRaVCM-XczaKwlu8M-AwIWdLWIil4/view" }
];

// ============================================================================
// 🚀 ASOSIY PROFESSIONAL INTERFAOL METODLAR SAHIFASI (OXIRGI PAGE)
// ============================================================================
export default function InterfaolMetodlarPage() {
  return (
    /* ✨ PX-20 OPTIMIZATSIYASI:
       Katta monitorlar uchun `md:px-20` masofasi muvaffaqiyatli integratsiya qilindi.
       Planshet va mobil ekranlar uchun `px-6 sm:px-12` moslashuvchanlik xavfsizligini ta'minlaydi.
    */
    <div className='py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen'>
      
      {/* 🌟 Yuqori Premium Sarlavha Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 border-b border-blue-100 pb-8 sm:pb-12">
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Metodik Modul
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.15] lg:leading-[1.1] uppercase'>
            Interfaol metodlar
          </h2>
          <p className="text-blue-900/60 text-sm sm:text-[15px] max-w-xl leading-relaxed font-medium">
            Ta'lim jarayonida dars samaradorligini va talabalarning faolligini oshirish uchun qo'llaniladigan zamonaviy pedagogik texnologiyalar.
          </p>
        </div>

        {/* Minimalist Vidjetlar */}
        <div className="grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none">
          {[
            { count: "07", name: "Jami Metodlar" },
            { count: "Pedagogik", name: "Yo'nalish" },
            { count: "Interfaol", name: "Format" }
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

      {/* ---------------- GRID QISMI: METOD KARDLARI (LOGOLARSIZ) ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Tavsiya etilgan metodik qo'llanmalar
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactiveMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    Metodika {method.id}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-blue-200">
                    {method.id < 10 ? `0${method.id}` : method.id}
                  </span>
                </div>

                {/* Sarlavha simmetriyasi (min-h-[50px]) */}
                <h4 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.4] mb-3 group-hover:text-blue-600 transition-colors duration-300 min-h-[50px] flex items-center text-left">
                  {method.title}
                </h4>
                
                {/* Tavsif simmetriyasi (min-h-[84px]) */}
                <p className="text-xs sm:text-[13px] font-medium text-blue-900/60 leading-[1.6] line-clamp-4 text-left min-h-[84px]">
                  {method.tavsif}
                </p>
              </div>
              
              {/* Tugma doimo kard tubida bir xil tekislikda joylashadi */}
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-6 sm:mt-8 mt-auto select-none">
                <div className="w-full py-2.5 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors duration-300">
                  <span>Metodikani ochish</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 🚨 METODIK ESLATMA PANELІ */}
      <div className="p-5 sm:p-6 bg-blue-50/40 border border-blue-100 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-left">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 select-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <p className="text-blue-950 text-xs sm:text-[13px] font-medium leading-relaxed">
            <strong className="text-blue-600 font-bold">Interfaol ta'lim:</strong> Tizimga yuklangan barcha metodlar Iqtisodiyotda AKT fani darslari davomida talabalarning mustaqil fikrlash hamda jamoaviy ishlash ko'nikmalarini amaliy tahlil qilish orqali oshirishga xizmat qiladi.
          </p>
        </div>
        
        <div className="w-full md:w-auto text-center bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider whitespace-nowrap shadow-sm select-none">
          Pedagogik Texnologiya
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-blue-50/40 border border-blue-100 rounded-2xl text-left text-sm text-blue-900/80 leading-relaxed">
        <strong className="text-blue-600 font-bold">IAK modulida qo'llanishi:</strong> muammoli vaziyat va loyiha usullari 1-bosqichda (muammoni aniqlash), klaster va baliq skleti 2-bosqichda (izlash va saralash), aqliy hujum va bahs-munozara 3-bosqichda (verifikatsiya va tahlil), davra suhbati esa 4-bosqichda (talqin va qaror) ishlatiladi. Batafsil: <a href="/iak-moduli" className="text-blue-600 font-semibold underline">IAK moduli</a>.
      </div>

    </div>
  );
}