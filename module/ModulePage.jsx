"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ModulePage({
  title = "Kommunikatsiya texnologiyalarining iqtisodiyotdagi o'rni va vazifalari",
}) {
  const [activeSection, setActiveSection] = useState("kirish");

  /*
   * ============================================================
   * BO'LIMLARNI SCROLL QILGANDA ACTIVE QILISH
   * ============================================================
   */
  useEffect(() => {
    const sections = [
      "kirish",
      "nazariya",
      "amaliyot",
      "xulosa",
    ];

    const handleScroll = () => {
      /*
       * Navbar taxminan 100-110px.
       * 130px qoldirib tekshiramiz.
       */
      const scrollPosition = window.scrollY + 150;

      let currentSection = "kirish";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

          if (scrollPosition >= sectionTop) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ============================================================
   * MUNDARIJA LINKINI BOSGANDA
   * ============================================================
   */
  const handleSectionClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    /*
     * Navbar ostida qolmasligi uchun
     * 130px yuqoridan joy qoldiramiz.
     */
    const navbarOffset = 130;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    /*
     * URL hashni ham o'zgartiramiz.
     */
    window.history.replaceState(null, "", `#${id}`);
  };

  /*
   * ============================================================
   * MUNDARIJA LINK CLASSLARI
   * ============================================================
   */
  const getMenuItemClass = (id) => {
    const isActive = activeSection === id;

    return `
      flex items-center gap-2
      text-sm
      p-2
      rounded-xl
      transition-all
      duration-200
      ${
        isActive
          ? "text-blue-600 font-semibold bg-blue-50/80"
          : "text-slate-600 font-medium hover:text-blue-600 hover:bg-slate-50"
      }
    `;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 sm:pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-8 lg:gap-12 py-6 sm:py-10">

        {/* =====================================================
            YON MENU — MUNDARIJA
        ====================================================== */}
        <aside className="w-full md:w-64 shrink-0">

          <div className="md:sticky md:top-32 p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-5">

            {/* Mundarija sarlavhasi */}
            <div className="flex items-center gap-2">

              <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div>

              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Mundarija
              </h3>

            </div>

            {/* =================================================
                MUNDARIJA
            ================================================== */}
            <nav className="space-y-2">

              {/* 1. KIRISH */}
              <a
                href="#kirish"
                onClick={(e) =>
                  handleSectionClick(e, "kirish")
                }
                className={getMenuItemClass("kirish")}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    activeSection === "kirish"
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                ></span>

                <span>1. Kirish</span>
              </a>

              {/* 2. NAZARIYA */}
              <a
                href="#nazariya"
                onClick={(e) =>
                  handleSectionClick(e, "nazariya")
                }
                className={getMenuItemClass("nazariya")}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    activeSection === "nazariya"
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                ></span>

                <span>
                  2. AKT va Iqtisodiy o'sish
                </span>
              </a>

              {/* 3. AMALIYOT */}
              <a
                href="#amaliyot"
                onClick={(e) =>
                  handleSectionClick(e, "amaliyot")
                }
                className={getMenuItemClass("amaliyot")}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    activeSection === "amaliyot"
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                ></span>

                <span>3. Amaliy ahamiyati</span>
              </a>

              {/* 4. XULOSA */}
              <a
                href="#xulosa"
                onClick={(e) =>
                  handleSectionClick(e, "xulosa")
                }
                className={getMenuItemClass("xulosa")}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    activeSection === "xulosa"
                      ? "bg-blue-600"
                      : "bg-slate-300"
                  }`}
                ></span>

                <span>4. Xulosa</span>
              </a>

            </nav>

            {/* Ajratuvchi chiziq */}
            <hr className="border-slate-100" />

            {/* Test tugmasi */}
            <Link
              href="/Nazorat"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs font-bold shadow-sm transition-all inline-flex items-center justify-center text-center cursor-pointer active:scale-95"
            >
              Testni topshirish
            </Link>

          </div>
        </aside>

        {/* =====================================================
            ASOSIY KONTENT
        ====================================================== */}
        <main className="flex-1 min-w-0 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">

          {/* =================================================
              BREADCRUMB
          ================================================== */}
          <nav className="text-xs text-slate-400 flex items-center gap-2 select-none font-medium">

            <Link
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Asosiy
            </Link>

            <span>/</span>

            <span className="text-slate-900 font-bold truncate">
              {title}
            </span>

          </nav>

          {/* =================================================
              SARLAVHA
          ================================================== */}
          <div className="space-y-3 border-b border-slate-100 pb-6">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-slate-500 text-sm sm:text-base font-medium">
              1-Modul: Axborot-kommunikatsiya texnologiyalarining
              makro va mikroiqtisodiy jarayonlardagi o'rni va
              nazariy asoslari.
            </p>

          </div>

          {/* =================================================
              MAQOLA
          ================================================== */}
          <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg font-normal">

            {/* =================================================
                1. KIRISH
            ================================================== */}
            <section
              id="kirish"
              className="space-y-3"
              style={{
                scrollMarginTop: "130px",
              }}
            >

              <h2 className="text-xl font-bold text-slate-900">
                1. Kirish
              </h2>

              <p className="leading-8">
                Zamonaviy iqtisodiyot sharoitida
                axborot-kommunikatsiya texnologiyalari (AKT)
                milliy iqtisodiyotning barcha tarmoqlarini
                rivojlantirishda va unumdorlikni oshirishda
                hal qiluvchi omilga aylandi.
                Kommunikatsiya vositalari ma'lumotlarni yig'ish,
                qayta ishlash, saqlash va tezkor uzatish orqali
                biznes jarayonlarini tubdan o'zgartirmoqda.
              </p>

            </section>

            {/* =================================================
                IQTIBOS
            ================================================== */}
            <blockquote className="bg-blue-50/50 border-l-4 border-blue-600 p-6 rounded-r-2xl my-6">

              <p className="italic font-medium text-blue-950 text-base sm:text-lg leading-relaxed">
                "Raqamli iqtisodiyotda axborot-kommunikatsiya
                texnologiyalari nafaqat xizmat ko'rsatish vositasi,
                balki yangi qiymat yaratuvchi asosiy resursdir."
              </p>

            </blockquote>

            {/* =================================================
                2. NAZARIYA
            ================================================== */}
            <section
              id="nazariya"
              className="space-y-3 pt-4"
              style={{
                scrollMarginTop: "130px",
              }}
            >

              <h2 className="text-xl font-bold text-slate-900">
                2. AKT va Iqtisodiy o'sish
              </h2>

              <p className="leading-8">
                Kommunikatsiya texnologiyalarining iqtisodiyotdagi
                asosiy vazifalariga operatsion xarajatlarni kamaytirish,
                bozor qatnashchilari o'rtasidagi axborot
                nomutanosibligini (asimmetriyasini) bartaraf etish
                hamda korxonalar o'rtasidagi raqobatbardoshlikni
                oshirish kiradi.
              </p>

              <p className="leading-8">
                Korporativ tarmoqlar va global Internet infratuzilmasi
                orqali moliyaviy va savdo bitimlarini sekundlar ichida
                amalga oshirish imkoniyati yaratildi.
              </p>

            </section>

            {/* =================================================
                3. AMALIY AHAMIYATI
            ================================================== */}
            <section
              id="amaliyot"
              className="space-y-3 pt-4"
              style={{
                scrollMarginTop: "130px",
              }}
            >

              <h2 className="text-xl font-bold text-slate-900">
                3. Amaliy ahamiyati
              </h2>

              <p className="leading-8">
                Amaliyotda AKT vositalarining joriy etilishi
                elektron tijorat (E-commerce), banking va davlat
                xizmatlari (E-government) kabi yo'nalishlarning
                jadal rivojlanishiga olib keldi.
              </p>

              <p className="leading-8">
                Bu esa, o'z navbatida, qog'ozbozlik va inson omili
                bilan bog'liq xatoliklarni keskin kamaytiradi.
              </p>

            </section>

            {/* =================================================
                4. XULOSA
            ================================================== */}
            <section
              id="xulosa"
              className="space-y-3 pt-4"
              style={{
                scrollMarginTop: "130px",
              }}
            >

              <h2 className="text-xl font-bold text-slate-900">
                4. Xulosa
              </h2>

              <p className="leading-8">
                Xulosa qilib aytganda, kommunikatsiya
                texnologiyalarisiz zamonaviy iqtisodiy tizimni
                tasavvur etib bo'lmaydi.
              </p>

              <p className="leading-8">
                Ular resurslarni samarali boshqarish, yangi
                bozorlarni egallash hamda raqamli transformatsiyani
                ta'minlashning eng asosiy ustunidir.
              </p>

            </section>

            {/* =================================================
                MA'RUZALARGA O'TISH
            ================================================== */}
            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">

              <div className="space-y-1">

                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-blue-400/20">
                  Nazariy Material
                </span>

                <h4 className="text-lg font-bold text-white pt-1">
                  Barcha ma'ruzalar ro'yxati
                </h4>

                <p className="text-slate-300 text-xs sm:text-sm max-w-md">
                  Fanning boshqa mavzulari va elektron darsliklari
                  bilan tanishish uchun ma'ruzalar bo'limiga o'ting.
                </p>

              </div>

              <Link
                href="/Maruza"
                className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
              >

                <span>Ma'ruzalarga o'tish</span>

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>

              </Link>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}