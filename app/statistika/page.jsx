import React from 'react'
import Statistika from '@/module/Statistika'

export const metadata = { title: 'Statistika', robots: { index: false, follow: false } }

// Maxfiy sahifa: menyuda va footer'da havola qilinmagan.
// Parol yo'q: sahifa faqat tashriflar sonini ko'rish uchun, URL orqali ochiladi.
export default function StatistikaPage() {
  return (
    <div className="pt-20">
      <Statistika />
    </div>
  )
}
