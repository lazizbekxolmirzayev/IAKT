"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { REQUIRE_LOGIN, useUser } from "@/module/auth";

// Kirish sahifasida menyu va footer ko'rsatilmaydi; boshqa sahifalarda,
// agar kirish majburiy bo'lsa va foydalanuvchi ism kiritmagan bo'lsa, /kirish ga yo'naltiradi.
export default function AuthGate({ nav, footer, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useUser();
  const onLogin = pathname === "/kirish" || pathname === "/kirish/";

  useEffect(() => {
    if (REQUIRE_LOGIN && user === null && !onLogin) router.replace("/kirish");
  }, [user, onLogin, router]);

  if (onLogin) return <>{children}</>;
  if (REQUIRE_LOGIN && !user) return null; // tekshirilmoqda yoki yo'naltirilmoqda

  return (
    <>
      {nav}
      {children}
      {footer}
    </>
  );
}
