"use client"
import React from 'react';

// ============================================================================
// 📚 FANGA OID ADABIYOTLAR MASSIVI (Optimizatsiya qilingan format)
// ============================================================================
const literatureBooks = [
  { id: 1, title: "Iqtisodiyotda axborot-kommunikatsiya texnologiyalari va tizimlar", author: "Rajabov Asliddin Xolmirzayevich", type: "O'quv qo'llanma", link: "#" },
  { id: 2, title: "Iqtisodiyotda axborot-kommunikatsiya texnologiyalari va tizimlar", author: "Shoaxmedova N.X., Abdullaeva I.M.", type: "O'quv qo'llanma", link: "https://drive.google.com/file/d/1GREoEyMF8wGtjGRTeq_Cbzn5Aec_9jCw/view" },
  { id: 3, title: "Raqamli iqtisodiyot va elektron tijoratda yangi texnologiyalar", author: "Ravshan Hamdamovich Ayupov", type: "O'quv qo'llanma", link: "https://drive.google.com/file/u/0/d/1LDapW7-SmIeODzXw1MMN7p5LjwbKoSCT/view" },
  { id: 4, title: "Iqtisodiyotda axborot texnologiyalari", author: "R.X.Alimov, B.A.Begalov, G.T.Yulchiyeva, Sh.Alishev", type: "Darslik", link: "https://drive.google.com/file/d/10j_cMxiIiABmsPeyJEQ7LrNhQqLsBDDM/view" },
  { id: 5, title: "Iqtisodiyotda axborot komplekslari va texnologiyalari", author: "Kafedra professor-o'qituvchilari", type: "Darslik", link: "https://drive.google.com/file/d/13GS6RFqtRZST5yGf8ufrLqT01UNSy2al/view" },
  { id: 6, title: "Iqtisodiyotda axborot texnologiyalari (Oliy o'quv yurtlari uchun)", author: "B.S. Axrarov", type: "Darslik", link: "https://drive.google.com/file/d/1ooXTdrGLxOTLFvQcfu96JvblbWCwxwy6/view" },
  { id: 7, title: "Iqtisodiyotda axborot-kommunikatsiya texnologiyalari va tizimlar (Uslubiy qo'llanma)", author: "R.A. Dadabayeva, N.X. Shoaxmedova, L.T. Ibragimova", type: "O'quv qo'llanma", link: "https://drive.google.com/file/d/1QNeTJJ7w_OSR0VMC-NoaCx_jHT3AXZGn/view" }
];

// ============================================================================
// 🚀 ASOSIY PROFESSIONAL ADABIYOTLAR SAHIFASI
// ============================================================================
export default function AdabiyotlarPage() {
  return (
    /* ✨ PX-20 OPTIMIZATSIYASI:
       Katta monitorlar va noutbuklar uchun `md:px-20` chekka masofasi o'rnatildi.
       Mobil va planshet ekranlarida chiroyli chekka bo'shliq bo'lishi uchun `px-6 sm:px-12` berildi.
    */
    <div className='py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen'>
      
      {/* 🌟 Yuqori Premium Sarlavha Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 border-b border-blue-100 pb-8 sm:pb-12">
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Kutubxona Moduli
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.15] lg:leading-[1.1] uppercase'>
            Fanga oid adabiyotlar
          </h2>
          <p className="text-blue-900/60 text-sm sm:text-[15px] max-w-xl leading-relaxed font-medium">
            Fan bo'yicha tavsiya etilgan asosiy darsliklar, o'quv va uslubiy qo'llanmalar hamda elektron resurslar bazasi.
          </p>
        </div>

        {/* Minimalist Vidjetlar */}
        <div className="grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none">
          {[
            { count: "06", name: "Jami Kitoblar" },
            { count: "PDF", name: "Format" },
            { count: "2026", name: "Yilgi Nashrlar" }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`bg-blue-50/40 border border-blue-100 rounded-2xl p-4 sm:p-5 sm:min-w-[130px] flex flex-col justify-center text-left sm:text-center ${
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">{stat.count}</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 mt-0.5 uppercase tracking-wider">{stat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- GRID QISMI: KITOB KARDLARI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Elektron darsliklar ro'yxati
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {literatureBooks.map((book) => (
            <a
              key={book.id}
              href={book.link === "#" ? undefined : book.link} onClick={(e) => { if (book.link === "#") e.preventDefault(); }}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    {book.type}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-blue-200">
                    {book.id < 10 ? `0${book.id}` : book.id}
                  </span>
                </div>

                {/* min-h-[] yordamida sarlavha va muallif qismlari vizual muvozanatga keltirildi */}
                <h4 className="text-base sm:text-[17px] font-bold text-blue-950 leading-[1.4] mb-2 group-hover:text-blue-600 transition-colors duration-300 text-left line-clamp-2 min-h-[48px] sm:min-h-[52px] flex items-center">
                  {book.title}
                </h4>
                
                <p className="text-xs sm:text-[13px] font-semibold text-blue-900/50 leading-[1.5] line-clamp-2 text-left min-h-[36px] sm:min-h-[40px] mt-1">
                  Muallif: {book.author}
                </p>
              </div>
              
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-5 sm:mt-6 mt-auto">
                <div className="w-full py-2.5 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors duration-300 select-none">
                  <span>Kitobni o'qish (PDF)</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 🚨 KUTUBXONA ESLATMASI */}
      <div className="p-5 sm:p-6 bg-blue-50/40 border border-blue-100 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-left">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 select-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <p className="text-blue-950 text-xs sm:text-[13px] font-medium leading-relaxed">
            <strong className="text-blue-600 font-bold">Mualliflik huquqi:</strong> Tizimdagi elektron adabiyotlar faqat talabalarning mustaqil ta'lim olishlari va fanni chuqurroq o'zlashtirishlari uchun mo'ljallangan bo'lib, ulardan tijoriy maqsadlarda foydalanish qat'iyan taqiqlanadi.
          </p>
        </div>
        
        <div className="w-full md:w-auto text-center bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider whitespace-nowrap shadow-sm select-none">
          Raqamli Kutubxona
        </div>
      </div>

    </div>
  );
}