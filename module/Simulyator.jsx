"use client";
import React from "react";
import IchkiSimulyatorlar from "@/module/IchkiSimulyatorlar";

// ============================================================================
// 📊 IQTISODIY SIMULYATORLAR MASSIVI (tashqi xalqaro platformalar)
// ============================================================================
const simulyatorlarData = [
  {
    id: 1,
    name: "Sim Companies",
    type: "Iqtisodiy biznes simulyatori",
    desc: "O'z kompaniyangizni qurish, ishlab chiqarish va bozor bilan savdo qilishni o'rgatuvchi ko'p foydalanuvchili simulyator.",
    link: "https://www.simcompanies.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    tagColor: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: 2,
    name: "Virtonomics",
    type: "Kompaniya boshqarish simulyatori",
    desc: "Ushbu simulyator orqali talabalar bozor strategiyasi, ishlab chiqarish va marketing qarorlarini amalda o'rganadilar.",
    link: "https://virtonomics.com/",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80",
    tagColor: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    id: 3,
    name: "Economics Games",
    type: "Mikroiqtisodiy o'yinlar",
    desc: "Mikroiqtisodiyot, raqobat va bozor nazariyasini onlayn o'yinlar hamda tajribalar orqali o'rganish uchun mo'ljallangan platforma.",
    link: "https://economics-games.com/",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    id: 4,
    name: "NGPF Finance Arcade",
    type: "Moliyaviy savodxonlik simulyatori",
    desc: "Bu yerda talabalar byudjet, kredit, investitsiya va sug'urta bo'yicha qiziqarli iqtisodiy o'yinlarni o'ynashlari mumkin.",
    link: "https://www.ngpf.org/arcade/",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&q=80",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    id: 5,
    name: "Startup Wars",
    type: "Startup simulyatori",
    desc: "Talabalarga haqiqiy biznes muhitida startap yaratish, marketing, moliya va strategik qarorlar qabul qilishni o'rgatadi.",
    link: "https://startupwars.com/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
    tagColor: "bg-rose-100 text-rose-700 border-rose-200",
  },
  {
    id: 6,
    name: "Simformer",
    type: "Biznes strategiya simulyatori",
    desc: "Biznes muhitini simulyatsiya qilish orqali tadbirkorlik va biznes boshqaruvi bo'yicha amaliy ko'nikmalarni shakllantiradi.",
    link: "https://simformer.com/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
    tagColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
  },
  {
    id: 11,
    name: "MarketWatch Virtual Stock Exchange",
    type: "Birja va investitsiya simulyatori",
    desc: "Talabalarga real vaqt rejimidagi aksiyalar bozori bilan virtual pullar orqali savdo qilishni va investitsiya kiritishni o'rgatadi.",
    link: "https://www.marketwatch.com/game",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&q=80",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    id: 12,
    name: "Venture Valley",
    type: "Tadbirkorlik va raqobat",
    desc: "O'z biznesini ochish, xodimlarni boshqarish, narx siyosati va raqobatchilar bilan kurashishni o'rgatuvchi qiziqarli strategik o'yin.",
    link: "https://venturevalleygame.com/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80",
    tagColor: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  },
  {
    id: 14,
    name: "Forio Simulate",
    type: "Siyosat va makroiqtisodiyot",
    desc: "Davlat iqtisodiyoti, soliq tizimi va global inqirozlarni modellashtirish hamda bashorat qilish uchun ishlatiladigan akademik simulyatsiya platformasi.",
    link: "https://forio.com/simulate/",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80",
    tagColor: "bg-lime-100 text-lime-700 border-lime-200",
  },
];

export default function Simulyatorlar() {
  return (
    <section className="py-12 sm:py-20 md:py-28 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SAHIFA SARLAVHASI */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 select-none">
            Amaliy Mashg'ulotlar
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 uppercase tracking-tight leading-tight">
            Iqtisodiy Simulyatorlar
          </h1>
          <p className="text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Iqtisodiyotda axborot kompetentligini rivojlantirishda qo'llaniladigan sayt ichidagi o'zbekcha mini-simulyatorlar va xalqaro biznes simulyatorlari.
          </p>
        </div>

        <IchkiSimulyatorlar />

        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-blue-600 tracking-tight">Tashqi xalqaro simulyatorlar</h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base font-medium">Quyidagi platformalar boshqa saytlarda va asosan ingliz tilida ishlaydi. Ba'zilari ro'yxatdan o'tishni talab qiladi.</p>
        </div>

        {/* SIMULYATORLAR GRIDI - Ustunlar mukammal holatga keltirildi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {simulyatorlarData.map((sim) => (
            <a
              key={sim.id}
              href={sim.link}
              target="_blank"
              rel="noopener noreferrer"
              // Butun boshli kard havola (a) tegi qilib o'zgartirildi
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group active:scale-[0.99]"
            >
              {/* Rasm qismi */}
              <div className="relative w-full h-44 sm:h-48 bg-slate-200 overflow-hidden select-none">
                <img
                  src={sim.image}
                  alt={sim.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm border ${sim.tagColor}`}
                >
                  {sim.type}
                </span>
              </div>

              {/* Kontent qismi */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* min-h sarlavha balandligini muvozanatlaydi */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors text-left line-clamp-1 min-h-[28px] sm:min-h-[32px]">
                    {sim.name}
                  </h3>
                  {/* line-clamp va min-h tugmalarni bir xil chiziqqa tekislaydi */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 text-left line-clamp-3 min-h-[54px] sm:min-h-[60px]">
                    {sim.desc}
                  </p>
                </div>

                {/* Dizayndagi tugma (Kliklash inklyuzivligi uchun div yordamida imitatsiya qilindi) */}
                <div className="w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl text-center font-bold text-xs sm:text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 select-none">
                  Simulyatorga o'tish →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div className="p-5 sm:p-6 bg-blue-50/60 border border-blue-100 rounded-2xl text-left text-sm text-blue-900/80 leading-relaxed">
          <strong className="text-blue-600 font-bold">Topshiriq:</strong> simulyatorda olgan natijangizni rasmiy manba (Stat.uz, World Bank Data) bilan solishtiring va xulosangizni yozing. Batafsil ko'rsatma <a href="/iak-moduli" className="text-blue-600 font-semibold underline">IAK moduli</a> sahifasida.
        </div>
      </div>
    </section>
  );
}