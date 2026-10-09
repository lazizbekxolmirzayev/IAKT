"use client";

import React, { useState, useEffect } from "react";

// ============================================================================
// 🎥 FANGA OID VIDEO DARSLAR MASSIVI (12 ta element)
// ============================================================================
const videoMalumotlarData = [
  {
    id: 1,
    title: "Raqamli iqtisodiyotda bulutli hisoblash va katta ma’lumotlar",
    speaker: "Raqamli iqtisodiyot va axborot texnologiyalari",
    videoId: "zGOzRjFn1zE",
    duration: "18:12",
    category: "Raqamli Iqtisodiyot",
  },
  {
    id: 2,
    title: "Informatika va axborot texnologiyalari fani haqida umumiy tushuncha",
    speaker: "Baxodirjon Mullajonov",
    videoId: "mwxWLZ8e7jg",
    duration: "18:30",
    category: "Asosiy Tushunchalar",
  },
  {
    id: 3,
    title: "Kompyuterning texnik va dasturiy ta'minoti (Hardware & Software)",
    speaker: "Keyingi Bekat",
    videoId: "NnQ8cH-33ZQ",
    duration: "16:28",
    category: "Texnik Ta'minot",
  },
  {
    id: 4,
    title: "Excel dasturida 0 dan boshlab professional darajada ishlash",
    speaker: "Baxodirjon Mullajonov",
    videoId: "4hv_WmSq_Fs",
    duration: "21:15",
    category: "Amaliyot",
  },
  {
    id: 5,
    title: "MS Power Point dasturida mukammal va professional taqdimot yaratish",
    speaker: "Baxodirjon Mullajonov",
    videoId: "YU2oqiwP1EE",
    duration: "19:23",
    category: "Amaliyot",
  },
  {
    id: 6,
    title: "Tarmoqqa kirish, IP manzillarni hisoblash, LAN va WAN tushunchasi",
    speaker: "Murodali Narzullaev",
    videoId: "hGUi37lLsso",
    duration: "16:03",
    category: "Tarmoqlar",
  },
  {
    id: 7,
    title: "Ma'lumotlar bazasi (Database) asoslari: MySQL darslari",
    speaker: "Jahongir Dustqulov",
    videoId: "9A6bqFUtUz8",
    duration: "12:45",
    category: "Database",
  },
  {
    id: 8,
    title: "BIG DATA nima? Axborot asrida katta hajmli ma'lumotlar tahlili",
    speaker: "Samarqandim Jurnali",
    videoId: "emPxT1RscAE",
    duration: "22:11",
    category: "Big Data",
  },
  {
    id: 9,
    title: "Axborot tizimlari va Microsoft Access dasturi asoslari",
    speaker: "Rasuljon Atamuratov",
    videoId: "UbilPfH8v5E",
    duration: "14:50",
    category: "Axborot Tizimi",
  },
  {
    id: 10,
    title: "Elektron Hukumat: Mobile-ID orqali ro'yxatdan o'tish qo'llanmasi",
    speaker: "YIDXP / ЕПИГУ",
    videoId: "-4Ubi_B_J5Q",
    duration: "01:32",
    category: "Davlat Tizimlari",
  },
  {
    id: 11,
    title: "Bitcoin nima? Blockchain (Blokcheyn) texnologiyasi nima?",
    speaker: "Texnoplov",
    videoId: "-5cmcfv-WEM",
    duration: "08:12",
    category: "Blockchain",
  },
  {
    id: 12,
    title: "Sun'iy Intellekt asoslari va kirish darslari",
    speaker: "Musulmon Lolayev",
    videoId: "bVxdpW8Q9Go",
    duration: "10:20",
    category: "Sun'iy Intellekt",
  },
];

export default function VideoMalumotlar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔒 UX Optimizatsiya: Modal oyna ochilganda orqa fondagi skrolni muzlatish
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  const filteredVideos = videoMalumotlarData.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 sm:py-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider select-none">
            MEDIA KUTUBXONA
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 sm:mt-5 uppercase tracking-tight">
            Fanga oid video ma'lumotlar
          </h1>

          <p className="text-slate-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Zamonaviy texnologiyalar va iqtisodiy axborot tizimlariga oid foydali video darslar to'plami.
          </p>
        </div>

        {/* SEARCH BAR - Premium ko'rinish va Ikonka qo'shildi */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="relative group">
            <input
              type="text"
              placeholder="Mavzu yoki rukn bo'yicha qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3.5 sm:py-4 pl-12 pr-10 rounded-2xl border border-slate-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 shadow-sm bg-white transition-all text-sm sm:text-base"
            />
            {/* Qidiruv kattalashtiruvchi oynasi (Magnifier) */}
            <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-red-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {/* Matn mavjud bo'lsa, uni oson o'chirish tugmasi */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* VIDEO GRID */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-slate-100"
              >
                {/* IMAGE & PLAY LAYER */}
                <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden select-none">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  />

                  {/* PLAY BUTTON HOVER ANIMATION */}
                  <button
                    onClick={() => setSelectedVideo(video.videoId)}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300"
                    aria-label="Videoni ijro etish"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300 transform">
                      <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  {/* CATEGORY TAG */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-100 px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold shadow-sm text-slate-800">
                    {video.category}
                  </div>

                  {/* DURATION TAG */}
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold tracking-wide">
                    {video.duration}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Sarlavhalarni tekislash uchun min-h qo'shildi */}
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition duration-300 text-left min-h-[48px] sm:min-h-[56px] leading-snug">
                      {video.title}
                    </h2>

                    {/* Ma'ruzachilar nomi bitta chiziqda qolishi ta'minlandi */}
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 text-left line-clamp-1 min-h-[18px] sm:min-h-[20px]">
                      {video.speaker}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(video.videoId)}
                    className="mt-5 sm:mt-6 w-full bg-slate-50 border border-slate-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 text-slate-700 transition-all duration-300 py-3 rounded-xl font-bold text-xs sm:text-sm active:scale-[0.98]"
                  >
                    Videoni ko'rish
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* QIDIRUVDA ELEMENT TOPILMAGANDA */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto">
            <p className="text-slate-400 font-medium text-sm sm:text-base">Kechirasiz, bunday kalit so'z bilan video topilmadi.</p>
          </div>
        )}

        {/* PREMIUM VIDEO MODAL (POPUP) */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm transition-all duration-300">
            <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              
              {/* CLOSE BUTTON - Yaxshilangan dizayn */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-50 bg-red-600 hover:bg-red-700 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition shadow-lg font-bold text-sm active:scale-90 select-none"
                title="Yopish"
              >
                ✕
              </button>

              {/* IFRAME ASPECT RATIO */}
              <div className="aspect-video w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}