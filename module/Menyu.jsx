"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MainContent() {
  const router = useRouter();

  // ==========================================
  // 1. QUIZ (TEST) STATE-LARI VA TAYMER (15-soniya)
  // ==========================================
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [score, setScore] = useState(0)
  const [isQuizFinished, setIsQuizFinished] = useState(false)

  const quizQuestions = [
    {
      question: "IAKT iborasi iqtisodiyotda nimani anglatadi?",
      options: [
        "Axborot-Kommunikatsiya Texnologiyalari va Tizimlari",
        "Xalqaro Kompaniyalar va Tijorat Tarmog'i",
        "Aktivlar va Kapital Texnologiyalari"
      ],
      correct: 0
    },
    {
      question: "Katta hajmdagi ma'lumotlarni tahlil qilish texnologiyasi nima deyiladi?",
      options: ["Cloud Computing", "Big Data", "Blockchain"],
      correct: 1
    },
    {
      question: "Tranzaksiyalar xavfsizligini ta'minlovchi bloklar zanjiri nima?",
      options: ["Blockchain", "Data Mining", "E-Commerce"],
      correct: 0
    },
    {
      question: "Elektron davlat xizmatlarini ko'rsatish tizimi qanday nomlanadi?",
      options: ["E-Commerce", "E-Banking", "E-Hukumat (Elektron hukumat)"],
      correct: 2
    },
    {
      question: "Internet orqali masofaviy hisoblash resurslaridan foydalanish bu - ...",
      options: ["Shtrixli kodlash", "Bulutli (Cloud) texnologiyalar", "Lokal tarmoq"],
      correct: 1
    }
  ]

  useEffect(() => {
    let timer;
    if (isQuizOpen && !isQuizFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isQuizOpen && !isQuizFinished) {
      handleNextQuestion(false);
    }
    return () => clearInterval(timer);
  }, [isQuizOpen, timeLeft, isQuizFinished]);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(15);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setTimeLeft(15);
    setScore(0);
    setIsQuizFinished(false);
    setIsQuizOpen(false);
  };

  // ==========================================
  // 2. KATEGORIYALAR VA YON PANEL MAVZULARI
  // ==========================================
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    { 
      id: 1,
      title: "Raqamli iqtisodiyot", 
      icon: "📊", 
      color: "bg-blue-500",
      description: "Raqamli iqtisodiyotning makro va mikroiqtisodiy asoslari hamda global bozor tendensiyalari.",
      topics: [
        { id: "1-1", title: "1-mavzu: Raqamli iqtisodiyot nima?", desc: "Raqamli iqtisodiyot tushunchasi va an'anaviy iqtisodiyotdan farqlari." },
        { id: "1-2", title: "2-mavzu: Elektron biznes va raqamli bozorlar", desc: "E-commerce modellari va onlayn tijorat ekotizimi." },
        { id: "1-3", title: "3-mavzu: Raqamli transformatsiya va biznes", desc: "Biznes jarayonlarini raqamlashtirish va korporativ strategiyalar." }
      ]
    },
    { 
      id: 2,
      title: "Raqamli texnologiyalar", 
      icon: "💻", 
      color: "bg-purple-500",
      description: "Zamonaviy dasturiy ta'minot, bulutli texnologiyalar va kiberxavfsizlik.",
      topics: [
        { id: "2-1", title: "1-mavzu: Bulutli hisoblash texnologiyalari", desc: "Cloud Computing modellari va iqtisodiy foydalari." },
        { id: "2-2", title: "2-mavzu: Sun'iy intellekt va neyron tarmoqlar", desc: "AI va Machine Learning iqtisodiyot tarmoqlarida." },
        { id: "2-3", title: "3-mavzu: Axborot xavfsizligi asoslari", desc: "Kiberxavfsizlik va axborotni muhofaza qilish usullari." }
      ]
    },
    { 
      id: 3,
      title: "Ma'lumotlar bazasi", 
      icon: "🗄️", 
      color: "bg-green-500",
      description: "Relyatsion ma'lumotlar bazalarini loyihalash, SQL hamda Big Data analitikasi.",
      topics: [
        { id: "3-1", title: "1-mavzu: Relyatsion ma'lumotlar bazalari (DBMS)", desc: "Ma'lumotlar bazasini boshqarish tizimlari va tuzilishi." },
        { id: "3-2", title: "2-mavzu: Big Data tahlil usullari", desc: "Katta hajmdagi ma'lumotlarni qayta ishlash texnologiyalari." },
        { id: "3-3", title: "3-mavzu: SQL va NoSQL tizimlari", desc: "Zamonaviy so'rov tillari hamda ma'lumotlar bazasi turlari." }
      ]
    },
    { 
      id: 4,
      title: "Iqtisodiy jamiyat", 
      icon: "🌐", 
      color: "bg-orange-500",
      description: "Elektron tijorat, mobil tijorat hamda elektron hukumat tizimlari.",
      topics: [
        { id: "4-1", title: "1-mavzu: Elektron tijorat va to'lovlar", desc: "FinTech, elektron hamyonlar va onlayn to'lov infratuzilmasi." },
        { id: "4-2", title: "2-mavzu: Elektron hukumat (E-Gov)", desc: "Davlat xizmatlarini raqamlashtirish hamda e-hukumat." },
        { id: "4-3", title: "3-mavzu: Blockchain va kripto-aktivlar", desc: "Bloklar zanjiri, smart-kontraktlar va ularning xavfsizligi." }
      ]
    },
    { 
      id: 5,
      title: "Iqtisodiy statistika", 
      icon: "📈", 
      color: "bg-red-500",
      description: "Statistik ma'lumotlarni yig'ish va tahlil qilish.",
      topics: [
        { id: "5-1", title: "1-mavzu: Excel/SPSS dasturlarida tahlil", desc: "Jadval muharrirlarida statistik tahlil yuritish." },
        { id: "5-2", title: "2-mavzu: Ekonometrik modellashtirish", desc: "Iqtisodiy jarayonlar va korrelyatsiyani modellashtirish." },
        { id: "5-3", title: "3-mavzu: Ma'lumotlarni vizualizatsiya qilish", desc: "Grafik va diagrammalar orqali tahlillarni ko'rsatish." }
      ]
    },,{
      question: "Iqtisodiy ko'rsatkich bo'yicha eng ishonchli manba qaysi?",
      options: ["Anonim blog yozuvi", "Rasmiy statistika organi (masalan, Stat.uz)", "Ijtimoiy tarmoqdagi reklama"],
      correct: 1
    },{
      question: "Sun'iy intellekt bergan raqamni ishlatishdan oldin nima qilish kerak?",
      options: ["Darhol ishlatish", "Rasmiy manba bilan solishtirib tekshirish", "Raqamni yaxlitlash"],
      correct: 1
    },{
      question: "Manbaning dolzarbligini baholash nimani anglatadi?",
      options: ["Ma'lumot qachon e'lon qilinganini va yangilanib turishini tekshirish", "Sahifa dizaynini baholash", "Manba hajmini hisoblash"],
      correct: 0
    }
  ];

  return (
    <main className="pt-20 sm:pt-24 min-h-screen bg-gray-50 overflow-x-hidden relative">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-[1.2] tracking-tight">
            Iqtisodiyotda axborot-kommunikatsiya texnologiyalari va tizimlari  
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Talabalarning iqtisodiy axborot kompetentligini rivojlantirish uchun maxsus ishlab chiqilgan innovatsion platforma.
          </p>

          <button 
            onClick={() => { setIsQuizOpen(true); setTimeLeft(15); }}
            className="px-8 py-3.5 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-95 transform duration-200 cursor-pointer"
          >
            Boshlash →
          </button>
        </div>
        
        {/* KITOBLAR YELPIG'ICH EFFEKTI */}
        <div className="flex-1 flex justify-center items-center h-[320px] sm:h-[400px] relative w-full select-none mt-6 md:mt-0">
          <div className="relative w-48 h-72 sm:w-56 sm:h-80">
            <div className="absolute inset-0 bg-white shadow-xl rounded-xl origin-bottom transform -rotate-[20deg] sm:-rotate-[25deg] transition-all duration-500 border-4 border-white overflow-hidden opacity-70 hover:opacity-100 hover:z-30 hover:-rotate-[30deg]">
              <img src="/nimage.png" alt="Book 3" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-white shadow-2xl rounded-xl origin-bottom transform rotate-0 transition-all duration-500 border-4 border-white overflow-hidden opacity-90 hover:opacity-100 hover:z-30 hover:-translate-y-3">
              <img src="/kitob.png" alt="Book 2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-white shadow-2xl rounded-xl origin-bottom transform rotate-[20deg] sm:rotate-[25deg] transition-all duration-500 border-4 border-white overflow-hidden z-20 hover:opacity-100 hover:z-30 hover:scale-105 hover:rotate-[30deg]">
              <img src="/photo_5262687371721909779_w.jpg" alt="Book 1" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8 text-center md:text-left tracking-tight">
          IAKT fanidagi asosiy yo'nalishlar
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {categories.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedCategory(item)}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col items-center justify-center text-center active:scale-[0.98] h-full"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.color} text-white rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner shrink-0`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ QUIZ MODAL */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative border border-slate-100">
            
            <button 
              onClick={resetQuiz}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
            >
              ✕
            </button>

            {!isQuizFinished ? (
              <>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    Savol {currentQuestion + 1} / {quizQuestions.length}
                  </span>
                  
                  <div className={`flex items-center gap-1.5 font-mono font-bold text-sm px-3 py-1 rounded-full ${timeLeft <= 5 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
                    <span>⏱️</span>
                    <span>{timeLeft}s</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3 pt-2">
                  {quizQuestions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNextQuestion(idx === quizQuestions[currentQuestion].correct)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 text-slate-700 hover:text-blue-900 font-medium text-sm transition-all duration-200 active:scale-[0.99] flex items-center justify-between group"
                    >
                      <span>{option}</span>
                      <span className="opacity-0 group-hover:opacity-100 text-blue-600 transition">➔</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center space-y-5 py-4">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto border border-blue-100 shadow-inner">
                  {score >= 4 ? "🏆" : score >= 3 ? "⚡" : "📚"}
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Test Yakunlandi!</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Siz {quizQuestions.length} ta savoldan <strong className="text-blue-600 font-bold">{score} tasiga</strong> to'g'ri javob berdingiz.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl text-left border border-slate-100 text-xs space-y-1">
                  <p className="font-bold text-slate-800 flex items-center gap-1.5">
                    <span>🎯</span> Sizning darajangiz: 
                    <span className="text-blue-600 font-black">
                      {score <= 2 ? " Boshlang'ich" : score <= 4 ? " O'rta daraja" : " Yuqori (A'lo)"}
                    </span>
                  </p>
                  <p className="text-slate-600 leading-relaxed pt-1">
                    {score <= 2 
                      ? "Sizga 1-Mavzudan boshlashni tavsiya etamiz."
                      : score <= 4 
                      ? "Bilimingiz yaxshi! 2-Modul mavzularini tavsiya etamiz."
                      : "A'lo natija! Nazorat testlarini topshirishingiz mumkin."}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      if (score <= 2) {
                        router.push('/dinamic/1-1');
                      } else if (score <= 4) {
                        router.push('/dinamic/2-1');
                      } else {
                        router.push('/Nazorat');
                      }
                    }}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition shadow-md flex items-center justify-center gap-2 text-sm active:scale-95 cursor-pointer"
                  >
                    <span>
                      {score <= 2 
                        ? "1-Mavzuga o'tish ➔" 
                        : score <= 4 
                        ? "2-Modulga o'tish ➔" 
                        : "Nazorat testiga o'tish ➔"}
                    </span>
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="w-full py-2 text-slate-400 hover:text-slate-700 text-xs font-semibold transition"
                  >
                    Qayta topshirish
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* 📑 SLIDE-OVER DRAWER (YON PANEL) */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            onClick={() => setSelectedCategory(null)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
          />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedCategory.icon}</span>
                    <h3 className="font-bold text-xl text-slate-900">{selectedCategory.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedCategory.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                    Yo'nalishdagi mavzular:
                  </h4>
                  <div className="space-y-3">
                    {selectedCategory.topics.map((topic) => (
                      <div
                        key={topic.id}
                        onClick={() => {
                          setSelectedCategory(null);
                          router.push(`/dinamic/${topic.id}`);
                        }}
                        className="p-4 bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all duration-200 cursor-pointer group active:scale-[0.98] space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {topic.title}
                          </h5>
                          <span className="text-blue-600 text-xs font-bold group-hover:translate-x-1 transition-transform">
                            ➔
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {topic.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition text-xs"
                >
                  Yopish
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </main>
  );
}