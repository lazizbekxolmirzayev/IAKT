import IakModuli from '@/module/IakModuli'
import React from 'react'

export const metadata = {
  title: 'IAK moduli',
  description:
    "Iqtisodiy axborot kompetentligini rivojlantirish moduli: 4 bosqichli topshiriqlar, kasbiy vaziyatlar, baholash rubrikasi va integral indeks.",
}

export default function page() {
  return (
    <div className='pt-20'>
      <IakModuli />
    </div>
  )
}
