import React from 'react'

export default function Faq() {
  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Ko'p beriladigan savollar
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto">
              Platforma va o'quv jarayoni bo'yicha eng ko'p beriladigan savollarga javoblar
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "Ushbu platforma kimlar uchun mo'ljallangan?",
                a: "Platforma iqtisodiyot yo'nalishida tahsil olayotgan talabalar, magistrlar va raqamli iqtisodiyot sohasiga qiziquvchi mustaqil o'rganuvchilar uchun mo'ljallangan."
              },
              {
                q: "Test natijalari saqlanib qoladimi?",
                a: "Nazorat testlari Google Form orqali topshiriladi. Javoblar test tuzuvchining Google Form natijalar jadvalida qayd etiladi, platformaning o'zi esa natijalarni saqlamaydi. Natijangizni test yakunida ko'rib, screenshot qilib olishingiz mumkin."
              },
              {
                q: "Ma'ruza matnlarini yuklab olish imkoniyati bormi?",
                a: "Ha, har bir modul sahifasida o'sha mavzuga oid to'liq ma'ruza matni va taqdimotni PDF formatida yuklab olish tugmasi mavjud."
              },
              {
                q: "Laboratoriya ishlari uchun qanday dasturlar kerak?",
                a: "Laboratoriya ishlarida mavzuga qarab MS Word, MS Excel, MS PowerPoint, Looker Studio, MySQL Workbench va Python (Jupyter) ishlatiladi. Har bir ishning kartasida kerakli dastur ko'rsatilgan."
              },
              {
                q: "IAK moduli nima?",
                a: "IAK moduli iqtisodiy axborot kompetentligini rivojlantiradigan 4 bosqichli topshiriqlar to'plami: muammoni aniqlash, axborotni izlash va saralash, ma'lumotni tekshirish va tahlil qilish (sun'iy intellekt javobini ham), natijani talqin qilib qaror qabul qilish. Batafsil ma'lumot \"IAK moduli\" sahifasida."
              },
              {
                q: "Platforma yangilanib turadimi?",
                a: "Ushbu platforma o'quv-metodik qo'llanmaning elektron versiyasi bo'lib, o'quv dasturi o'zgarganda ma'lumotlar yangilanadi."
              }
            ].map((item, index) => (
              <details 
                key={index} 
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <summary className="list-none p-5 sm:p-6 md:p-8 cursor-pointer flex justify-between items-center select-none">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 pr-4 leading-snug">
                    {item.q}
                  </h3>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-300">
                    <svg 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                
                <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="pt-2 sm:pt-3 border-t border-slate-100">
                    {item.a}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8 md:p-10 bg-blue-600 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-xl shadow-blue-100">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Savolingizga javob topmadingizmi?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-5 sm:mb-6 max-w-md mx-auto">
              Biz bilan bog'laning, sizga yordam berishdan xursandmiz.
            </p>
            <a href="mailto:rajabovasliddin254@gmail.com" className="inline-block w-full sm:w-auto px-8 py-3.5 bg-white text-blue-600 rounded-xl sm:rounded-2xl font-bold hover:bg-yellow-400 hover:text-blue-900 active:scale-95 transition-all duration-200 shadow-md">
              Aloqaga chiqish
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}