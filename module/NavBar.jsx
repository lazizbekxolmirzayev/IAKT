"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUser, clearUser, REQUIRE_LOGIN } from "@/module/auth";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUser();
  const logout = () => {
    clearUser();
    router.replace("/kirish");
  };
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Mobil menyu ichidagi qismlarni ochib yopish uchun holatlar
  const [mobileOquvOpen, setMobileOquvOpen] = useState(false);
  const [mobileExtraOpen, setMobileExtraOpen] = useState(false);

  const activeLink = "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1";
  const normalLink = "text-white/90 hover:text-white hover:scale-105 transition-all duration-200 pb-1";

  // Mobil menyuni to'liq yopish funksiyasi
  const closeAllMenus = () => {
    setMenuOpen(false);
    setMobileOquvOpen(false);
    setMobileExtraOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-800/90 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
        
        {/* LOGO QISMI */}
        <div className="flex items-center">
          <Link href="/" className="group block" onClick={closeAllMenus}>
            <div className="relative w-[160px] h-[60px] sm:w-[180px] sm:h-[70px] md:w-[220px] md:h-[80px] flex items-center justify-start shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/rasm.png"
                alt="Logo"
                fill
                priority
                sizes="(max-w-768px) 160px, 220px"
                className="object-contain invert brightness-0" 
                style={{ objectPosition: 'left center' }}
              />
            </div>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center text-sm font-medium">
          <Link className={pathname === "/" ? activeLink : normalLink} href="/">
            Bosh sahifa
          </Link>

          {/* O'quv reja Dropdown */}
          <div className="relative group">
            <span className={`cursor-pointer flex items-center gap-1 py-4 transition-colors ${
              pathname === "/oquv-reja" || pathname === "/sillabus" ? "text-yellow-400 font-bold" : "text-white/90 group-hover:text-white"
            }`}>
              O'quv reja 
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <div className="absolute left-0 hidden group-hover:block pt-0 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="h-2 bg-transparent w-full"></div> 
              <div className="bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 overflow-hidden mt-1">
                <Link href="/oquv-reja" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                  O‘quv reja
                </Link>
                <Link href="/sillabus" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors border-t border-gray-50">
                  Fan dasturi va sillabus
                </Link>
              </div>
            </div>
          </div>

          <Link className={pathname === "/Maruza" ? activeLink : normalLink} href="/Maruza">Ma'ruza</Link>
          <Link className={pathname === "/simulyatorlar" ? activeLink : normalLink} href="/simulyatorlar">Simulyatorlar</Link>
          <Link className={pathname === "/laboratoriya" ? activeLink : normalLink} href="/laboratoriya">Laboratoriya</Link>
          <Link className={pathname === "/iak-moduli" ? activeLink : normalLink} href="/iak-moduli">IAK moduli</Link>
          <Link className={pathname === "/Nazorat" ? activeLink : normalLink} href="/Nazorat">Nazorat</Link>

          {/* Qo'shimcha Dropdown */}
          <div className="relative group">
            <span className={`cursor-pointer flex items-center gap-1 py-4 transition-colors ${
              ["/adabiyotlar", "/videolar", "/metodlar"].includes(pathname) ? "text-yellow-400 font-bold" : "text-white/90 group-hover:text-white"
            }`}>
              Qo'shimcha 
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            <div className="absolute left-0 hidden group-hover:block pt-0 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="h-2 bg-transparent w-full"></div>
              <div className="bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 overflow-hidden mt-1">
                <Link href="/adabiyotlar" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                  Fanga oid adabiyotlar
                </Link>
                <Link href="/videolar" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors border-t border-gray-50">
                  Fanga oid video ma'lumotlar
                </Link>
                <Link href="/metodlar" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors border-t border-gray-50">
                  Interfaol metodlar
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FOYDALANUVCHI (kompyuter) */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {user ? (
            <>
              <span className="text-white/90 font-medium max-w-[160px] truncate">{user.ism} {user.familiya}</span>
              <button onClick={logout} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Chiqish</button>
            </>
          ) : !REQUIRE_LOGIN ? (
            <Link href="/kirish" className="px-3 py-1.5 rounded-lg bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 transition-colors">Kirish</Link>
          ) : null}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all text-xl" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* Telefonlarda barcha sahifalarga kirish imkoniyati qo'shildi */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-6 pt-2 bg-blue-800 border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href="/" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>Bosh sahifa</Link>
          
          {/* Mobil O'quv reja Akkordeon */}
          <div className="border-b border-white/5 py-1">
            <button 
              onClick={() => setMobileOquvOpen(!mobileOquvOpen)} 
              className="w-full flex justify-between items-center text-base py-2 text-white font-medium text-left"
            >
              <span>O'quv reja</span>
              <svg className={`w-4 h-4 transition-transform ${mobileOquvOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {mobileOquvOpen && (
              <div className="pl-4 pb-2 flex flex-col gap-2.5 pt-1 text-sm text-white/80">
                <Link href="/oquv-reja" onClick={closeAllMenus}>O‘quv reja</Link>
                <Link href="/sillabus" onClick={closeAllMenus}>Fan dasturi va sillabus</Link>
              </div>
            )}
          </div>

          <Link href="/Maruza" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>Ma'ruza</Link>
          <Link href="/simulyatorlar" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>Simulyatorlar</Link>
          <Link href="/laboratoriya" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>Laboratoriya</Link>
          <Link href="/iak-moduli" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>IAK moduli</Link>
          <Link href="/Nazorat" className="text-base py-2.5 border-b border-white/5 text-white font-medium" onClick={closeAllMenus}>Nazorat</Link>

          {/* Mobil Qo'shimcha Akkordeon */}
          <div className="border-b border-white/5 py-1">
            <button 
              onClick={() => setMobileExtraOpen(!mobileExtraOpen)} 
              className="w-full flex justify-between items-center text-base py-2 text-white font-medium text-left"
            >
              <span>Qo'shimcha</span>
              <svg className={`w-4 h-4 transition-transform ${mobileExtraOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {mobileExtraOpen && (
              <div className="pl-4 pb-2 flex flex-col gap-2.5 pt-1 text-sm text-white/80">
                <Link href="/adabiyotlar" onClick={closeAllMenus}>Fanga oid adabiyotlar</Link>
                <Link href="/videolar" onClick={closeAllMenus}>Fanga oid video ma'lumotlar</Link>
                <Link href="/metodlar" onClick={closeAllMenus}>Interfaol metodlar</Link>
              </div>
            )}
          </div>
          <div className="pt-3 mt-1 border-t border-white/10 text-sm text-white/90">
            {user ? (
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium truncate">{user.ism} {user.familiya}</span>
                <button onClick={() => { closeAllMenus(); logout(); }} className="px-3 py-1.5 rounded-lg bg-white/10 font-semibold">Chiqish</button>
              </div>
            ) : !REQUIRE_LOGIN ? (
              <Link href="/kirish" onClick={closeAllMenus} className="inline-block px-3 py-1.5 rounded-lg bg-yellow-400 text-blue-900 font-bold">Kirish</Link>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}