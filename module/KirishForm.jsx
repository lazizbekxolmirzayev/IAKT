"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setUser, useUser } from "@/module/auth";

export default function KirishForm() {
  const router = useRouter();
  const user = useUser();
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [error, setError] = useState("");

  // Allaqachon kirgan bo'lsa, bosh sahifaga o'tkazamiz
  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  function onSubmit(e) {
    e.preventDefault();
    if (ism.trim().length < 2 || familiya.trim().length < 2) {
      setError("Iltimos, ism va familiyangizni to'liq yozing.");
      return;
    }
    setUser(ism, familiya);
    router.replace("/");
  }

  const input =
    "w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-blue-950 placeholder:text-blue-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition";

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-blue-600 tracking-wider uppercase border border-blue-100 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          IAKT platformasi
        </div>
        <h1 className="mt-4 text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">Tizimga kirish</h1>
        <p className="mt-2 text-sm text-blue-900/60 font-medium">
          Davom etish uchun ism va familiyangizni yozing. Parol kerak emas. Ismingiz o'qituvchining kirishlar hisobotida qayd etiladi.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="ism" className="block text-sm font-bold text-blue-950 mb-1">Ism</label>
            <input id="ism" className={input} value={ism} onChange={(e) => setIsm(e.target.value)} placeholder="Masalan: Aziz" autoComplete="given-name" autoFocus />
          </div>
          <div>
            <label htmlFor="familiya" className="block text-sm font-bold text-blue-950 mb-1">Familiya</label>
            <input id="familiya" className={input} value={familiya} onChange={(e) => setFamiliya(e.target.value)} placeholder="Masalan: Karimov" autoComplete="family-name" />
          </div>
          {error ? <p className="text-sm text-red-600 font-medium">{error}</p> : null}
          <button type="submit" className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md">
            Kirish
          </button>
        </form>
      </div>
    </main>
  );
}
