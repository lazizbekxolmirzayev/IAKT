"use client"
import React from 'react';

// ============================================================================
// 📝 1. LABORATORIYA MASHG'ULOTLARI MATNLARI
// ============================================================================
const labTexts = [
  { id: "01", title: "1-Laboratoriya ishi", mavzu: "Iqtisodiy masalalarni yechishda qo‘llaniladigan dasturiy mahsulotlar va texnik ta’minotning tasnifi va vazifalari", dastur: "MS Office", muddat: "2 soat", link: "https://drive.google.com/file/d/1ke2EUqYQCo1EZFEUvri0jR4kNyZC4U0f/view" },
  { id: "02", title: "2-Laboratoriya ishi", mavzu: "Zamonaviy matn muharrirlarida iqtisodiyot sohasiga doir topshiriqlar bilan ishlash", dastur: "MS Word", muddat: "2 soat", link: "https://drive.google.com/file/d/1BOCm4E1W0Ywq_p1hkzeuNlNMPF2B2J3H/view" },
  { id: "03", title: "3-Laboratoriya ishi", mavzu: "Iqtisodiy masalalarni yechishda jadval muharrirlari matn, jadvallar, grafik obyektlar bilan ishlash vositalarining imkoniyatlarini o‘rganish", dastur: "MS Excel", muddat: "3 soat", link: "https://drive.google.com/file/d/1TXfV5Kb2dTQSAVgpHGC0ouTUnsbJLkDE/view" },
  { id: "04", title: "4-Laboratoriya ishi", mavzu: "Microsoft excel dasturida ma’lumotlarni ko‘rish, qayta ishlash va umumlashtirish vositalari", dastur: "MS Excel", muddat: "4 soat", link: "https://drive.google.com/file/d/1nsqP54SjEkY-2WRfeT1Ertjl1Lvx7ABy/view" },
  { id: "05", title: "5-Laboratoriya ishi", mavzu: "Microsoft excel dasturida iqtisodiyotga doir ma’lumotlarni tahlil qilish vositalari", dastur: "MS Excel", muddat: "3 soat", link: "https://drive.google.com/file/d/1RoEOcI4Vei1YwOHVod5FFoeGGCq-tID3/view" },
  { id: "06", title: "6-Laboratoriya ishi", mavzu: "Iqtisodiy axborotlarni tahlil qilish uchun ma’lumotlarni vizuallashtirish vositalaridan foydalanish", dastur: "Looker Studio", muddat: "3 soat", link: "https://drive.google.com/file/d/19UfGZmG6vAE9MUaJcQahBy0E3KffqQW9/view" },
  { id: "07", title: "7-Laboratoriya ishi", mavzu: "Zamonaviy taqdimot dasturida iqtisodiy sohaga tegishli materiallar asosida taqdimot yaratish", dastur: "MS PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1gcB9tnSPyG_USyy3e13Ryhv2UzlQaR6N/view" },
  { id: "08", title: "8-Laboratoriya ishi", mavzu: "Internet tarmoqida biznes jarayonlarini tashkil etish", dastur: "Brauzer (Internet)", muddat: "3 soat", link: "https://drive.google.com/file/d/1_YK-oNBSz4JOWtwZdBE3dUT5uYMFOJVA/view" },
  { id: "09", title: "9-Laboratoriya ishi", mavzu: "Iqtisodiy sohaga oid ma’lumotlar asosida ma’lumotlar bazasini shakllantirish", dastur: "MySQL Workbench", muddat: "3 soat", link: "https://drive.google.com/file/d/1jCSqIXZfqP995ZrLEiLjulp7zQKcHNKW/view" },
  { id: "10", title: "10-Laboratoriya ishi", mavzu: "Iqtisodiyotda big data texnologiyalari yordamida ma’lumotlarni tahlil qilish", dastur: "Python + Jupyter", muddat: "3 soat", link: "https://drive.google.com/file/d/11aGTCwv31BX5XriuvZXrFtyR7IpXi_vC/view" },
  { id: "11", title: "11-Laboratoriya ishi", mavzu: "Iqtisodiyotning turli tarmoqlarida axborot tizimlarining qo‘llanilishi", dastur: "Axborot tizimlari", muddat: "3 soat", link: "https://drive.google.com/file/d/1ih8QkC2qCEL0xEplt3PEKs-syk--9GAH/view" },
  { id: "12", title: "12-Laboratoriya ishi", mavzu: "Interaktiv xizmatlar va ular bilan ishlash", dastur: "Interaktiv xizmatlar", muddat: "3 soat", link: "https://drive.google.com/file/d/1oPMCyod6WiYnvEUwQKHafiijEBZE1bSt/view" },
  { id: "13", title: "13-Laboratoriya ishi", mavzu: "Google drive (bulutli xotira)da sohaga oid amaliy vazifalar bilan ishlash", dastur: "Google Drive", muddat: "3 soat", link: "https://drive.google.com/file/d/1jLx-9xaE3hXVa-_y-IR1pwqc4nz3Uvtg/view" },
  { id: "14", title: "14-Laboratoriya ishi", mavzu: "Internet-banking, internet-savdo, internet-sug‘urta, internet-marketing xizmatlari", dastur: "Onlayn xizmatlar", muddat: "3 soat", link: "https://drive.google.com/file/d/1tVoswv1bi9k2untFKSFB1R7Q84Mrgm2R/view" },
  { id: "15", title: "15-Laboratoriya ishi", mavzu: "Raqamli iqtisodiyotda axborot xavfsizligini ta’minlashning zamonaviy usullari va vositalari", dastur: "Xavfsizlik vositalari", muddat: "3 soat", link: "https://drive.google.com/file/d/1Ds5vQ8YYuBMA4n3Ic6qE4G2uvPDj9pcm/view" }

];

const labPresentations = [
  { id: "01", title: "1-Laboratoriya taqdimoti", mavzu: "Iqtisodiy masalalarni yechishda qo‘llaniladigan dasturiy mahsulotlar va texnik ta’minotning tasnifi va vazifalari", dastur: "PowerPoint", muddat: "2 soat", link: "https://drive.google.com/file/d/1ShF1WWWukAwbNQhidUsd13Iv0i3cDT7A/view" },
  { id: "02", title: "2-Laboratoriya taqdimoti", mavzu: "Zamonaviy matn muharrirlarida iqtisodiyot sohasiga doir topshiriqlar bilan ishlash", dastur: "PowerPoint", muddat: "2 soat", link: "#" },
  { id: "03", title: "3-Laboratoriya taqdimoti", mavzu: "Iqtisodiy masalalarni yechishda jadval muharrirlari vositalarining imkoniyatlarini o‘rganish", dastur: "PowerPoint", muddat: "3 soat", link: "#" },
  { id: "04", title: "4-Laboratoriya taqdimoti", mavzu: "Microsoft Excel dasturida ma’lumotlarni ko‘rish, qayta ishlash va umumlashtirish vositalari", dastur: "PowerPoint", muddat: "4 soat", link: "#" },
  { id: "05", title: "5-Laboratoriya taqdimoti", mavzu: "Microsoft excel dasturida iqtisodiyotga doir ma’lumotlarni tahlil qilish vositalari", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/10mmHU0s6Kt1Ocjp7_qVBJFIRJYUNiVzE/view" },
  { id: "06", title: "6-Laboratoriya taqdimoti", mavzu: "Iqtisodiy axborotlarni tahlil qilish uchun ma’lumotlarni vizuallashtirish vositalaridan", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1il8HCyNqtLVJo24acPm76xefOP_nJGSk/view" },
  { id: "07", title: "7-Laboratoriya taqdimoti", mavzu: "Zamonaviy taqdimot dasturida iqtisodiy sohaga tegishli materiallar asosida", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1Vevczkx0HGYdOO2YAyO8XheZIF4AqbRQ/view" },
  { id: "08", title: "8-Laboratoriya taqdimoti", mavzu: "Internet tarmog‘ida biznes jarayonlarini tashkil etish", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/19oSbA1_BulUA7qF6nDgch3vyNKCnGF1T/view" },
  { id: "09", title: "9-Laboratoriya taqdimoti", mavzu: "Business Intelligence va KPI vizual tahlili Iqtisodiyot sohasiga oid ma’lumotlar asosida ma’lumotlar bazasini shakllantirish", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1Pq282vZR764Ekj-eNpupaUI9dz8R7zbo/view" },
  { id: "10", title: "10-Laboratoriya taqdimoti", mavzu: "Laboratoriya mashg‘uloti iqtisodiyotda Big Data texnologiyalari yordamida ma’lumotlarni tahlil qilish", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/19Dr8A18bTnBOTVmcJbMLXlGZwNKX9WST/view" },
  { id: "11", title: "11-Laboratoriya taqdimoti", mavzu: "Iqtisodiyotning turli tarmoqlarida axborot tizimlarining qo‘llanilishi", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1pnRZOEkI9h1SwMYEhjEIs9Z-lsxEmnkf/view" },
  { id: "12", title: "12-Laboratoriya taqdimoti", mavzu: "Interaktiv xizmatlar va ular bilan ishlash", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1xUAtgk-OPIfoSk3iltxDXBKY0sL9gEWJ/view" },
  { id: "13", title: "13-Laboratoriya taqdimoti", mavzu: "Google Drive (bulutli xotira)da sohaga oid amaliy vazifalar bilan ishlash", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1R7nyBFiK2phCDHoTx9xO7Rqo1z5c44yL/view" },
  { id: "14", title: "14-Laboratoriya taqdimoti", mavzu: "Internet-banking, internet-savdo, internet-sug‘urta, internet-marketing xizmatlari", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/1wPvKP0n8i48K2riFQA1bgJspXtgX1Vc-/view" },
  { id: "15", title: "15-Laboratoriya taqdimoti", mavzu: "Raqamli iqtisodiyotda axborot xavfsizligini ta’minlashning zamonaviy usullari va vositalari", dastur: "PowerPoint", muddat: "3 soat", link: "https://drive.google.com/file/d/15bCcAIrmNx9ao8OjFONz_RFIN8fOubRD/view" },

];

export default  function LaboratoriyaPage() {
  return (

    <div className='py-10 sm:py-16 md:py-20 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto space-y-14 sm:space-y-20 md:space-y-24 bg-white text-black min-h-screen transition-all duration-300'>
      
      {/* 🌟 Yuqori Premium Sarlavha Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 border-b border-blue-100 pb-8 sm:pb-12">
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Amaliy Modul
          </div>
          <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 tracking-tight leading-[1.15] lg:leading-[1.1] uppercase'>
            Laboratoriya <br className="hidden sm:inline" /> mashg'ulotlari
          </h2>
          <p className="text-blue-900/60 text-sm sm:text-[15px] max-w-xl leading-relaxed font-medium">
            Iqtisodiyotda AKT fani doirasidagi barcha amaliy topshiriqlar matnlari va ularga tegishli o'quv slaydlarining yagona tizimi.
          </p>
        </div>

        {/* Minimalist Vidjetlar */}
        <div className="grid grid-cols-2 sm:flex sm:gap-5 gap-3 w-full lg:w-auto select-none">
          {[
            { count: String(labTexts.length), name: "Laboratoriya ishlari" },
            { count: String(labPresentations.filter((x) => x.link !== "#").length), name: "Tayyor taqdimotlar" },
            { count: "Google Drive", name: "Resurs manbai" }
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

      {/* ---------------- SECTION 1: MASHG'ULOT MATNLARI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Topshiriq matnlari va ko'rsatmalar
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labTexts.map((lab) => (
            <a
              key={lab.id}
              href={lab.link} target="_blank" rel="noopener noreferrer"
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    {lab.title}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-blue-200">
                    {lab.id}
                  </span>
                </div>
                {/* min-h- Orqali sarlavhalar tekislanib chiqildi */}
                <h4 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.4] mb-4 min-h-[48px] sm:min-h-[56px] flex items-center text-left line-clamp-2">
                  {lab.mavzu}
                </h4>
              </div>
              
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-auto">
                <div className="flex flex-wrap gap-1.5 text-[11px] sm:text-[12px] font-semibold text-blue-900/60 select-none">
                  <span className="bg-white border border-blue-100 px-2.5 py-1 rounded-md text-blue-700 whitespace-nowrap">🖥️ {lab.dastur}</span>
                  <span className="bg-white border border-blue-100 px-2.5 py-1 rounded-md whitespace-nowrap">⏱️ {lab.muddat}</span>
                </div>
                <div className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 group-hover:bg-blue-700 transition-colors select-none">
                  <span>Topshiriqni ochish</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- SECTION 2: MASHG'ULOT TAQDIMOTLARI ---------------- */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-center gap-3 select-none">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight">
            Mashg'ulot taqdimotlari
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labPresentations.map((lab) => (
            <a
              key={lab.id}
              href={lab.link === "#" ? undefined : lab.link} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (lab.link === "#") e.preventDefault(); }}
              className="group bg-blue-50/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-blue-100 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative active:scale-[0.99]"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5 select-none">
                  <span className="bg-white text-blue-700 text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-blue-100">
                    {lab.title}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-blue-200">
                    {lab.id}
                  </span>
                </div>
                <h4 className="text-base sm:text-[18px] font-bold text-blue-950 leading-[1.4] mb-4 min-h-[48px] sm:min-h-[56px] flex items-center text-left line-clamp-2">
                  {lab.mavzu}
                </h4>
              </div>
              
              <div className="space-y-4 pt-4 sm:pt-5 border-t border-blue-100 mt-auto">
                <div className="flex flex-wrap gap-1.5 text-[11px] sm:text-[12px] font-semibold text-blue-900/60 select-none">
                  <span className="bg-white border border-blue-100 px-2.5 py-1 rounded-md text-blue-700 whitespace-nowrap">📊 {lab.dastur}</span>
                  <span className="bg-white border border-blue-100 px-2.5 py-1 rounded-md whitespace-nowrap">⏱️ {lab.muddat}</span>
                </div>
                <div className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 group-hover:bg-blue-700 transition-colors select-none">
                  <span>{lab.link === "#" ? "Tez orada" : "Taqdimotni ko'rish"}</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- 🚨 ESLATMA PANELІ ---------------- */}
      <div className="p-5 sm:p-6 bg-blue-50/40 border border-blue-100 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 text-left">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 select-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-blue-950 text-xs sm:text-[13px] font-medium leading-relaxed">
            <strong className="text-blue-600 font-bold">Tizimli eslatma:</strong> Laboratoriya matnlari tarkibidagi barcha topshiriqlar dars davomida bajarilib, ko'rsatilgan taqdimot talablari asosida o'qituvchiga topshirilishi majburiydir.
          </p>
        </div>
        
        <div className="w-full md:w-auto text-center bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider whitespace-nowrap shadow-sm select-none">
          Majburiy Nazorat
        </div>
      </div>

    </div>
  );
}