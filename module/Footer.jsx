import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Haqiqiy havolalarni shu yerga yozing. Bo'sh qoldirilsa, tegishli tugma ko'rsatilmaydi.
const TELEGRAM_URL = '';
const INSTAGRAM_URL = '';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 sm:pt-16 md:pt-20 sm:pb-10 border-t border-slate-800 transition-all duration-300">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
       
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link href="/" className="mb-5 sm:mb-6 group">
            <div className="relative w-[160px] h-[60px] sm:w-[180px] sm:h-[70px] flex items-center justify-start transition-transform group-hover:scale-105">
              <Image 
                src="/rasm.png" 
                alt="Logo" 
                fill
                className="object-contain invert brightness-0" 
                style={{ objectPosition: 'left center' }}
                priority
              />
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm sm:max-w-xs">
            Talabalarning iqtisodiy axborot kompetentligini rivojlantirish uchun yaratilgan zamonaviy elektron darslik-platforma.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="text-white font-bold mb-5 sm:mb-6 md:mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">
            Sahifalar
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
            <li><Link href="/Maruza" className="hover:text-blue-400 transition-colors block py-0.5">Ma'ruza matnlari</Link></li>
            <li><Link href="/laboratoriya" className="hover:text-blue-400 transition-colors block py-0.5">Laboratoriya</Link></li>
            <li><Link href="/iak-moduli" className="hover:text-blue-400 transition-colors block py-0.5">IAK moduli</Link></li>
            <li><Link href="/Nazorat" className="hover:text-blue-400 transition-colors block py-0.5">Nazorat testlari</Link></li>
            <li><Link href="/simulyatorlar" className="hover:text-blue-400 transition-colors block py-0.5">Iqtisodiy simulyator</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="text-white font-bold mb-5 sm:mb-6 md:mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">
            Manbalar
          </h4>
          <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
            <li><a href="https://lex.uz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors italic block py-0.5">Lex.uz Portali</a></li>
            <li><a href="https://stat.uz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors italic block py-0.5">Statistika qo'mitasi</a></li>
            <li><a href="https://tsue.uz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors block py-0.5">TDIU Rasmiy sayti</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
          <h4 className="text-white font-bold mb-5 sm:mb-6 md:mb-8 uppercase text-xs tracking-widest border-l-2 border-blue-500 pl-3">
            Bog'lanish
          </h4>
          <div className="space-y-3 sm:space-y-4 text-sm flex flex-col items-center sm:items-start max-w-xs sm:max-w-none">
            <div className="flex items-start gap-3 text-center sm:text-left justify-center sm:justify-start">
              <span className="text-blue-500 text-lg leading-none select-none">📍</span>
              <p className="leading-snug">Toshkent sh., Gavhar kochasi, 1-uy.</p>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="text-blue-500 text-lg leading-none select-none">📧</span>
              <a href="mailto:rajabovasliddin254@gmail.com" className="hover:text-blue-400 transition-colors">rajabovasliddin254@gmail.com</a>
            </div>
            {(TELEGRAM_URL || INSTAGRAM_URL) && (<div className="flex gap-3 pt-4 sm:pt-6">
              {TELEGRAM_URL && <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95">
                <span className="font-bold text-xs">TG</span>
              </a>}
              {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 active:scale-95">
                <span className="font-bold text-xs">IN</span>
              </a>}
            </div>)}
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
        <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <span>Tuzuvchi:</span> 
          <span className="text-slate-300 border-b border-blue-500 pb-0.5 mt-1 sm:mt-0 font-bold sm:font-semibold">
             Asliddin Rajabov Xolmirzayevich
          </span>
        </p>
      </div>
    </footer>
  );
}