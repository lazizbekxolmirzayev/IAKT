import React from 'react'

// Next.js static export uchun dinamik sahifalarda yaratiladigan yo'nalishlar.
export function generateStaticParams() {
  return [
    { id: '1-1' },
    { id: '1-2' },
    { id: '1-3' },
    { id: '2-1' },
    { id: '2-2' },
    { id: '2-3' },
    { id: '3-1' },
    { id: '3-2' },
    { id: '3-3' },
    { id: '4-1' },
    { id: '4-2' },
    { id: '4-3' },
    { id: '5-1' },
    { id: '5-2' },
    { id: '5-3' },
  ]
}

export default async function DynamicContentPage({ params }) {
  const { id } = await params

  // BARCHA 15 TA MAVZU BO'YICHA KONTENTLAR BAZASI
  const topicsContent = {
    // ------------------ 1-KATEGORIYA ------------------
    "1-1": {
      title: "1-mavzu: Raqamli iqtisodiyotning asosiy tushunchalari",
      category: "Raqamli iqtisodiyot",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-blue-50/80 rounded-3xl border border-blue-100 text-slate-800 font-medium">
            <strong>Raqamli iqtisodiyot</strong> — raqamli texnologiyalar, internet va zamonaviy axborot tizimlaridan foydalanishga asoslangan iqtisodiy faoliyat tizimidir. Bugungi kunda texnologiyalarning rivojlanishi natijasida biznes, savdo, bank va xizmat ko‘rsatish sohalarida katta o‘zgarishlar yuz bermoqda.
          </div>

          <p>
            Raqamli iqtisodiyotda internet-do‘konlar, elektron to‘lovlar, mobil ilovalar, onlayn xizmatlar va turli raqamli platformalardan keng foydalaniladi. Bu texnologiyalar ish jarayonlarini tezlashtirish va xizmatlardan foydalanishni qulaylashtirishga yordam beradi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">⏱️</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Vaqtni tejash</h4>
              <p className="text-xs text-slate-500 mt-1">Jarayonlar tez va navbatlarsiz bajariladi</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">💰</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Xarajatlarni kamaytirish</h4>
              <p className="text-xs text-slate-500 mt-1">Ortiqcha resurs va qog'ozbozlik tejaladi</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🚀</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Tezkor xizmatlar</h4>
              <p className="text-xs text-slate-500 mt-1">Onlayn va masofaviy xizmat ko'rsatish</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-3xl mb-2">📈</span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Biznes imkoniyatlari</h4>
              <p className="text-xs text-slate-500 mt-1">Yangi raqamli bozorlar va auditoriya</p>
            </div>
          </div>

          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-blue-600">
            🎯 <strong>Asosiy fikr:</strong> Raqamli iqtisodiyot texnologiyalar yordamida iqtisodiy jarayonlarni yanada tez, qulay va samarali tashkil qilish imkonini beradi.
          </div>
        </div>
      )
    },

    "1-2": {
      title: "2-mavzu: Raqamli iqtisodiyotning makro va mikroiqtisodiy asoslari",
      category: "Raqamli iqtisodiyot",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p className="font-medium text-slate-800">
            Raqamli iqtisodiyotni tushunishda mikroiqtisodiyot va makroiqtisodiyot muhim o‘rin tutadi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50/80 rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-purple-800 text-lg flex items-center gap-2">
                <span>🏬</span> Mikroiqtisodiyot
              </h3>
              <p className="text-sm text-slate-600">
                Alohida korxonalar, tadbirkorlar va iste’molchilarning iqtisodiy faoliyatini o‘rganadi.
              </p>
              <div className="bg-white p-4 rounded-2xl text-xs sm:text-sm space-y-1.5 shadow-sm text-slate-700">
                <p className="font-bold text-purple-700">Masalan, internet-do‘kon:</p>
                <p>• Mahsulot narxini belgilashi;</p>
                <p>• Mijozlar talabini o‘rganishi;</p>
                <p>• Xarajatlarni kamaytirishi;</p>
                <p>• Foyda olish jarayonlari.</p>
              </div>
            </div>

            <div className="p-6 bg-blue-50/80 rounded-3xl border border-blue-100 space-y-3">
              <h3 className="font-bold text-blue-800 text-lg flex items-center gap-2">
                <span>🌍</span> Makroiqtisodiyot
              </h3>
              <p className="text-sm text-slate-600">
                Butun mamlakat iqtisodiyotini o‘rganadi.
              </p>
              <div className="bg-white p-4 rounded-2xl text-xs sm:text-sm space-y-1.5 shadow-sm text-slate-700">
                <p className="font-bold text-blue-700">Raqamli texnologiyalarning ta'siri:</p>
                <p>• Mamlakat YaIMiga (YAMM);</p>
                <p>• Bandlik va ish o'rinlariga;</p>
                <p>• Ishlab chiqarish va investitsiyalarga;</p>
                <p>• Umumiqtisodiy o‘sishga.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-amber-50 rounded-3xl border border-amber-200 text-slate-800 text-sm sm:text-base">
            📌 <strong>Qisqa eslab qolish:</strong><br/>
            <strong>Mikroiqtisodiyot</strong> — korxona va iste’molchilar darajasini,<br/>
            <strong>Makroiqtisodiyot</strong> esa butun mamlakat iqtisodiyotini o‘rganadi.
          </div>
        </div>
      )
    },

    "1-3": {
      title: "3-mavzu: Global bozor tendensiyalari",
      category: "Raqamli iqtisodiyot",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong>Global bozor tendensiyalari</strong> — dunyo iqtisodiyotida yuz berayotgan asosiy o‘zgarishlar va yangi rivojlanish yo‘nalishlaridir. Raqamli texnologiyalarning rivojlanishi global bozorning ishlash usulini sezilarli darajada o‘zgartirmoqda.
          </p>

          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
            <h4 className="font-bold text-slate-900 text-base">🌐 Asosiy global yo'nalishlar:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>🛒</span> Elektron tijorat
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>🤖</span> Sun’iy intellekt
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>💳</span> Fintech va raqamli to'lovlar
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>☁️</span> Bulutli texnologiyalar
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>🏡</span> Masofaviy ish va avtomatlashtirish
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span>📲</span> Raqamli xizmatlar
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base">
            Kompaniyalar internet orqali boshqa mamlakatlardagi mijozlarga ham mahsulot va xizmatlarini taklif qilish imkoniyatiga ega bo‘lmoqda. Texnologiyalardan samarali foydalanadigan kompaniyalar xalqaro bozorda raqobat qilish uchun ko‘proq imkoniyatga ega bo‘ladi.
          </p>

          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-blue-600">
            🎯 <strong>Asosiy fikr:</strong> Global bozor tobora ko‘proq internet, raqamli texnologiyalar va xalqaro elektron xizmatlarga bog‘lanib bormoqda.
          </div>
        </div>
      )
    },

    // ------------------ 2-KATEGORIYA ------------------
    "2-1": {
      title: "1-mavzu: Zamonaviy dasturiy ta’minot",
      category: "Raqamli texnologiyalar",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-purple-50/80 rounded-3xl border border-purple-100 text-slate-800">
            <strong>Zamonaviy dasturiy ta’minot</strong> — kompyuter, smartfon va boshqa raqamli qurilmalarning ishlashini ta’minlaydigan dasturlar va tizimlar majmuasidir.
          </div>
          <p>
            Dasturiy ta’minot yordamida ma’lumotlarni qayta ishlash, hujjatlar yaratish, internetdan foydalanish, biznes jarayonlarini boshqarish va turli xizmatlarni avtomatlashtirish mumkin.
          </p>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Asosiy yo'nalishlar va misollar:</h4>
            <p className="text-sm text-slate-600">
              Web-ilovalar, mobil ilovalar, biznes dasturlari va sun’iy intellektga asoslangan tizimlar foydalanuvchilarga qulay interfeys, yuqori tezlik va xavfsizlikni ta’minlashga qaratilgan.
            </p>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-purple-600">
            🎯 <strong>Asosiy fikr:</strong> Zamonaviy dasturiy ta’minot raqamli texnologiyalarning asosiy qismi bo‘lib, ish jarayonlarini tezlashtirish va avtomatlashtirishda muhim ahamiyatga ega.
          </div>
        </div>
      )
    },
    "2-2": {
      title: "2-mavzu: Bulutli texnologiyalar",
      category: "Raqamli texnologiyalar",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong>Bulutli texnologiyalar</strong> — ma’lumotlarni va dasturlarni foydalanuvchining qurilmasida emas, balki internet orqali ulaniladigan maxsus serverlarda saqlash va ulardan foydalanish imkonini beruvchi texnologiyalardir.
          </p>
          <div className="p-6 bg-sky-50 rounded-3xl border border-sky-100 space-y-3">
            <h4 className="font-bold text-sky-900 text-base">📁 Ommabop misollar:</h4>
            <p className="text-sm text-slate-600">Google Drive, OneDrive va Dropbox kabi xizmatlarda fayllarni internet orqali saqlash va istalgan qurilmadan ochish mumkin.</p>
          </div>
          <div className="p-5 bg-emerald-50 rounded-3xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-1 text-base">✨ Asosiy afzalliklari:</h4>
            <p className="text-sm text-slate-600">Ma’lumotlarga tezkor kirish, resurslarni tejash, qulaylik hamda moslashuvchanlik.</p>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-sky-600">
            🎯 <strong>Asosiy fikr:</strong> Bulutli texnologiyalar ma’lumotlarni saqlash va raqamli xizmatlardan foydalanish jarayonini ancha qulay va samarali qiladi.
          </div>
        </div>
      )
    },
    "2-3": {
      title: "3-mavzu: Kiberxavfsizlik",
      category: "Raqamli texnologiyalar",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-red-50/80 rounded-3xl border border-red-100 text-slate-800">
            <strong>Kiberxavfsizlik</strong> — kompyuter tizimlari, tarmoqlar, dasturlar va raqamli ma’lumotlarni turli kiberxavflardan himoya qilishga qaratilgan choralar va texnologiyalar majmuasidir.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 text-base mb-2">🔒 Himoya vositalari:</h4>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Kuchli parollar;</li>
                <li>Ikki bosqichli autentifikatsiya;</li>
                <li>Antivirus dasturlari;</li>
                <li>Ma’lumotlarni shifrlash.</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-amber-900 text-base mb-2">⚠️ Muhim qoidalar:</h4>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Noma’lum havolalarni ochmang;</li>
                <li>Shubhali fayllarni yuklamang;</li>
                <li>Parollarni begonalarga bermang.</li>
              </ul>
            </div>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-red-600">
            🎯 <strong>Asosiy fikr:</strong> Kiberxavfsizlik raqamli dunyoda ma’lumotlar va tizimlarni himoya qilishning muhim vositasi hisoblanadi.
          </div>
        </div>
      )
    },

    // ------------------ 3-KATEGORIYA ------------------
    "3-1": {
      title: "1-mavzu: Relyatsion ma’lumotlar bazalarini loyihalash",
      category: "Ma'lumotlar bazasi",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong>Relyatsion ma’lumotlar bazasi</strong> — ma’lumotlarni jadvallar ko‘rinishida saqlash va ular o‘rtasidagi bog‘lanishlarni tashkil qilishga asoslangan ma’lumotlar bazasi turidir.
          </p>
          <div className="p-6 bg-green-50/80 rounded-3xl border border-green-100">
            <h4 className="font-bold text-green-900 text-base mb-2">📐 Baza loyihalash jarayoni:</h4>
            <p className="text-sm text-slate-600">
              Avvalo qanday ma’lumotlar saqlanishi va ular qanday bog‘lanishi aniqlanadi. Masalan: internet-do‘konda foydalanuvchilar, mahsulotlar, buyurtmalar va to‘lovlar uchun alohida jadvallar yaratiladi.
            </p>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-green-600">
            🎯 <strong>Asosiy fikr:</strong> Relyatsion ma’lumotlar bazasini to‘g‘ri loyihalash ma’lumotlarni tartibli, ishonchli va samarali boshqarish imkonini beradi.
          </div>
        </div>
      )
    },
    "3-2": {
      title: "2-mavzu: SQL",
      category: "Ma'lumotlar bazasi",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-slate-800">
            <strong>SQL (Structured Query Language)</strong> — ma’lumotlar bazasidagi ma’lumotlarni yaratish, o‘zgartirish, qidirish va boshqarish uchun ishlatiladigan maxsus so‘rovlar tilidir.
          </div>
          <p className="text-sm sm:text-base">
            SQL yordamida ma’lumotlar bazasida yangi jadval yaratish, unga ma’lumot qo‘shish, mavjud ma’lumotlarni o‘zgartirish yoki o‘chirish mumkin.
          </p>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-emerald-600">
            🎯 <strong>Asosiy fikr:</strong> SQL ma’lumotlar bazasidagi ma’lumotlarni boshqarish va ulardan kerakli axborotni olish uchun ishlatiladi.
          </div>
        </div>
      )
    },
    "3-3": {
      title: "3-mavzu: Big Data analitikasi",
      category: "Ma'lumotlar bazasi",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong>Big Data</strong> — juda katta hajmdagi, tezlik bilan hosil bo‘ladigan va turli shakldagi ma’lumotlar to‘plamidir.
          </p>
          <div className="p-6 bg-teal-50 rounded-3xl border border-teal-100 text-slate-800">
            <strong>Big Data analitikasi</strong> — katta hajmdagi ma’lumotlarni yig‘ish, qayta ishlash va tahlil qilish orqali foydali xulosalar olish jarayonidir.
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-teal-600">
            🎯 <strong>Asosiy fikr:</strong> Big Data analitikasi katta hajmdagi ma’lumotlardan foydali axborot olish va samarali qarorlar qabul qilishga yordam beradi.
          </div>
        </div>
      )
    },

    // ------------------ 4-KATEGORIYA ------------------
    "4-1": {
      title: "1-mavzu: Elektron tijorat (E-commerce)",
      category: "Iqtisodiy jamiyat",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 text-slate-800">
            <strong>Elektron tijorat (E-commerce)</strong> — tovar va xizmatlarni internet orqali sotish va sotib olish jarayonidir.
          </div>
          <p>
            Internet-do‘konlar orqali foydalanuvchilar mahsulotlarni ko‘rish, narxlarini solishtirish, buyurtma berish va elektron to‘lovlarni amalga oshirishlari mumkin.
          </p>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-orange-600">
            🎯 <strong>Asosiy fikr:</strong> Elektron tijorat savdo jarayonlarini internet orqali amalga oshirish va xaridor hamda sotuvchilar o‘rtasidagi aloqani soddalashtirish imkonini beradi.
          </div>
        </div>
      )
    },
    "4-2": {
      title: "2-mavzu: Mobil tijorat",
      category: "Iqtisodiy jamiyat",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 text-slate-800">
            <strong>Mobil tijorat (M-commerce)</strong> — mobil qurilmalar, ya’ni smartfon va planshetlar orqali tovar va xizmatlarni sotish yoki sotib olish jarayonidir.
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-base mb-1">⚡ Asosiy afzalligi:</h4>
            <p className="text-sm text-slate-600">Qulaylik va tezkorlik. Foydalanuvchi kompyuterga ehtiyoj sezmasdan, faqat smartfon orqali xizmatlardan foydalanadi.</p>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-amber-600">
            🎯 <strong>Asosiy fikr:</strong> Mobil tijorat elektron savdoni smartfon va boshqa mobil qurilmalar orqali amalga oshirish imkonini beradigan zamonaviy yo‘nalishdir.
          </div>
        </div>
      )
    },
    "4-3": {
      title: "3-mavzu: Elektron hukumat tizimlari",
      category: "Iqtisodiy jamiyat",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 text-slate-800">
            <strong>Elektron hukumat (E-government)</strong> — davlat xizmatlarini zamonaviy axborot va raqamli texnologiyalar yordamida aholiga elektron shaklda taqdim etish tizimidir.
          </div>
          <p>
            Elektron hukumat tizimlari davlat xizmatlarini tezroq, qulayroq va shaffofroq ko‘rsatishga yordam beradi. Shuningdek, ortiqcha qog‘ozbozlikni kamaytiradi.
          </p>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-blue-600">
            🎯 <strong>Asosiy fikr:</strong> Elektron hukumat raqamli texnologiyalar orqali davlat va fuqarolar o‘rtasidagi xizmatlar va aloqalarni yanada qulaylashtiradi.
          </div>
        </div>
      )
    },

    // ------------------ 5-KATEGORIYA ------------------
    "5-1": {
      title: "1-mavzu: Statistik ma’lumotlarni yig‘ish",
      category: "Iqtisodiy statistika",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <div className="p-6 bg-red-50 rounded-3xl border border-red-100 text-slate-800">
            <strong>Statistik ma’lumotlarni yig‘ish</strong> — iqtisodiy va ijtimoiy jarayonlar haqida kerakli ma’lumotlarni tartibli ravishda to‘plash jarayonidir.
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-base mb-1">📊 Yig'ish usullari:</h4>
            <p className="text-sm text-slate-600">So‘rovnomalar o‘tkazish, kuzatish, hisobotlardan foydalanish va mavjud ma’lumotlarni o‘rganish.</p>
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-red-600">
            🎯 <strong>Asosiy fikr:</strong> Statistik ma’lumotlarni to‘g‘ri va ishonchli yig‘ish iqtisodiy jarayonlarni aniq o‘rganish uchun asos bo‘lib xizmat qiladi.
          </div>
        </div>
      )
    },
    "5-2": {
      title: "2-mavzu: Statistik ma’lumotlarni tahlil qilish",
      category: "Iqtisodiy statistika",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong>Statistik ma’lumotlarni tahlil qilish</strong> — yig‘ilgan ma’lumotlarni o‘rganish, ularni taqqoslash va ular asosida muhim xulosalar chiqarish jarayonidir.
          </p>
          <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 text-slate-800">
            Tahlil davomida ma’lumotlarning o‘rtacha qiymati, o‘zgarishi, o‘sish yoki kamayish darajasi aniqlanadi. Ma’lumotlarni jadval, diagramma va grafiklar yordamida ko‘rsatish tushunishni osonlashtiradi.
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-rose-600">
            🎯 <strong>Asosiy fikr:</strong> Statistik tahlil katta hajmdagi ma’lumotlardan foydali axborot olish va asoslangan xulosalar chiqarishga imkon beradi.
          </div>
        </div>
      )
    },
    "5-3": {
      title: "3-mavzu: Statistik ma’lumotlardan foydalanish",
      category: "Iqtisodiy statistika",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            Statistik ma’lumotlar iqtisodiy qarorlar qabul qilish va turli jarayonlarni baholashda keng qo‘llaniladi. Davlat tashkilotlari, korxonalar va tadqiqotchilar statistik ko‘rsatkichlardan foydalanidilar.
          </p>
          <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200">
             Davlat iqtisodiy o‘sish, inflyatsiya, aholi daromadlari va ishsizlik kabi ko‘rsatkichlarni tahlil qilib, kelajakdagi iqtisodiy siyosatni belgilaydi.
          </div>
          <div className="p-5 bg-slate-100 rounded-3xl font-semibold text-slate-800 text-sm sm:text-base border-l-4 border-slate-700">
            🎯 <strong>Asosiy fikr:</strong> Statistik ma’lumotlar iqtisodiy jarayonlarni tushunish, kelajakni rejalashtirish va to‘g‘ri qarorlar qabul qilish uchun muhim vositadir.
          </div>
        </div>
      )
    }
  };

  const currentData = topicsContent[id] || {
    title: `${id}-mavzu materiallari`,
    category: "IAKT Fani",
    content: (
      <div className="text-center py-8 space-y-3">
        <span className="text-4xl">📝</span>
        <p className="text-slate-500 font-medium">Ushbu mavzu bo'yicha ma'lumotlar tayyorlanmoqda.</p>
      </div>
    )
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-2 sm:px-6 max-w-6xl mx-auto space-y-6">
      
      {/* Ortga qaytish tugmasi */}
      <a
        href="/"
        className="text-xs font-bold text-slate-600 hover:text-blue-600 transition flex items-center gap-2 cursor-pointer bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-sm w-fit active:scale-95"
      >
        <span>⬅️</span>
        <span>Asosiy sahifaga qaytish</span>
      </a>

      {/* Asosiy Kartochka */}
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-md space-y-6 w-full">
        
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full">
            {currentData.category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
          {currentData.title}
        </h1>

        <hr className="border-slate-100" />

        <div className="w-full">
          {currentData.content}
        </div>

      </div>
    </main>
  );
}