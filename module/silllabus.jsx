"use client";

import React from "react";

// ============================================================================
// SILLABUSLAR DATA
// ============================================================================
const syllabusData = [
  {
    id: 1,
    title: "IAKT fan sillabusi",
    year: "2022-2023 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1qb_wQFzJ2Xv7IPHX_73EP9beuucBO586/view",
  },
  {
    id: 2,
    title: "IAKT fan dasturi",
    year: "2022-2023 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1jPqgCWd4l8Rik4F1241lNETCar0GeWdS/view",
  },
  {
    id: 3,
    title: "IAKT fan dasturi",
    year: "2023-2024 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1Q5MY1nzvHj4A8K2g0HxOVTS0fefKRMpJ/view",
  },
  {
    id: 4,
    title: "IAKT fani fan dasturi",
    year: "2024-2025 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1wD14FIpWN-quOAsYL96pnOpnXDcB_b8w/view",
  },
  {
    id: 5,
    title: "IAKT fan sillabusi",
    year: "2024-2025 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1FYkNsR8eJpDI2CnGTiFI2XSov_HRF5Tb/view",
  },
  {
    id: 6,
    title: "IAKT fani fan dasturi",
    year: "2025-2026 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1RrHseUxUqsgnCpXLMR2Y3memzHfLSTPB/view",
  },
  {
    id: 7,
    title: "IAKT fan sillabusi",
    year: "2025-2026 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1XPQ74GUyVTKHM-qQjdOl0dzNzoxVuTj4/view",
  },
  {
    id: 8,
    title: "IAKT fan sillabusi",
    year: "2023-2024 o'quv yili",
    pdfUrl:
      "https://drive.google.com/file/d/1ic-60Ij36TYmF1Y2dfWjJCc8FdMms33X/view",
  },
];

// ============================================================================
// ASOSIY SILLABUSLAR SAHIFASI
// ============================================================================
export default function Sillabuslar() {
  return (
    <div className="py-16 sm:py-24 md:py-28 px-6 sm:px-12 md:px-20 max-w-[1440px] mx-auto bg-white min-h-screen">

      {/* SAHIFA SARLAVHASI */}
      <div className="pb-8 sm:pb-12 border-b border-blue-100 mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-7 bg-blue-600 rounded-full"></div>

          <span className="text-[10px] sm:text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
            O'quv materiallari
          </span>
        </div>

        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-950 tracking-tight text-left leading-[1.2] lg:leading-[1.1] uppercase">
          Fan dasturlari va{" "}
          <span className="text-blue-600">sillabuslar</span>
        </h2>

        <p className="mt-4 text-blue-900/60 text-sm sm:text-[15px] max-w-2xl leading-relaxed font-medium">
          IAKT faniga oid fan dasturlari va sillabuslarning elektron
          to'plami. Kerakli hujjatni tanlab, PDF shaklida ko'rishingiz mumkin.
        </p>
      </div>

      {/* SILLABUSLAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {syllabusData.map((item) => (
          <a
            key={item.id}
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-blue-50/60
              rounded-2xl
              sm:rounded-[30px]
              p-6
              sm:p-8
              min-h-[280px]
              sm:min-h-[320px]
              flex
              flex-col
              justify-between
              border
              border-blue-100
              shadow-sm
              hover:shadow-xl
              hover:bg-blue-50
              hover:-translate-y-1.5
              hover:border-blue-200
              transition-all
              duration-500
              cursor-pointer
              relative
              active:scale-[0.99]
            "
          >

            {/* CARD YUQORI QISMI */}
            <div className="flex-grow">

              {/* PDF ICON */}
              <div
                className="
                  w-12
                  h-12
                  sm:w-16
                  sm:h-16
                  bg-white
                  rounded-xl
                  sm:rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-6
                  sm:mb-8
                  shadow-sm
                  border
                  border-blue-100
                  group-hover:bg-blue-600
                  group-hover:border-blue-600
                  transition-all
                  duration-300
                  select-none
                "
              >
                <svg
                  className="
                    w-6
                    h-6
                    sm:w-8
                    sm:h-8
                    text-blue-600
                    group-hover:text-white
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9h1.5m1.5 0H13m-4 4h4m-4 4h4"
                  />
                </svg>
              </div>

              {/* CARD SARLAVHASI */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-[26px]
                  font-extrabold
                  leading-[1.25]
                  text-blue-950
                  mb-4
                  text-left
                  line-clamp-2
                  min-h-[56px]
                  sm:min-h-[66px]
                "
              >
                {item.title}
              </h3>
            </div>

            {/* CARD PASTKI QISMI */}
            <div
              className="
                mt-6
                sm:mt-8
                flex
                flex-col
                sm:flex-row
                sm:items-end
                justify-between
                gap-4
                sm:gap-2
                border-t
                border-blue-100
                pt-4
                sm:pt-5
              "
            >

              {/* O'QUV DAVRI */}
              <div className="flex flex-col text-left select-none">
                <span
                  className="
                    text-blue-400
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-widest
                    mb-0.5
                    sm:mb-1
                    font-bold
                  "
                >
                  O'quv davri
                </span>

                <span
                  className="
                    text-blue-600
                    font-black
                    text-base
                    sm:text-lg
                    whitespace-nowrap
                  "
                >
                  {item.year}
                </span>
              </div>

              {/* PDF KO'RISH TUGMASI */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  bg-white
                  px-4
                  py-2
                  sm:py-2.5
                  rounded-full
                  text-blue-950
                  font-bold
                  text-xs
                  sm:text-sm
                  group-hover:bg-blue-600
                  group-hover:text-white
                  transition-all
                  duration-300
                  select-none
                  shadow-sm
                  active:scale-95
                  whitespace-nowrap
                  border
                  border-blue-100
                  group-hover:border-blue-600
                "
              >
                <span>PDF Ko'rish</span>

                <svg
                  className="
                    w-3.5
                    h-3.5
                    ml-1.5
                    sm:ml-2
                    group-hover:translate-x-1
                    transition-transform
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* PASTKI ESLATMA */}
      <div
        className="
          mt-10
          sm:mt-14
          p-5
          sm:p-6
          bg-blue-50/50
          border
          border-blue-100
          rounded-2xl
          flex
          flex-col
          sm:flex-row
          items-start
          sm:items-center
          justify-between
          gap-4
        "
      >
        <div className="flex items-start gap-3 text-left">
          <svg
            className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>

          <p className="text-blue-950 text-xs sm:text-[13px] font-medium leading-relaxed">
            <strong className="text-blue-600 font-bold">
              Eslatma:
            </strong>{" "}
            Hujjatlarni ko'rish uchun kerakli sillabus yoki fan dasturi
            kartasini tanlang.
          </p>
        </div>

        <div
          className="
            w-full
            sm:w-auto
            text-center
            bg-blue-600
            text-white
            text-[10px]
            font-black
            px-4
            py-2
            rounded-lg
            uppercase
            tracking-wider
            whitespace-nowrap
            shadow-sm
          "
        >
          PDF Hujjatlar
        </div>
      </div>

    </div>
  );
}