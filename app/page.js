import Menyu from '@/module/Menyu'
import React from 'react'
import ModulePage from '@/module/ModulePage'
import Faq from '@/module/Faq'
import IakBlok from '@/module/IakBlok'

export default function page() {
  return (
    <div>
      <Menyu/>
      <ModulePage/>
      <IakBlok/>
      <Faq/>
    </div>
  )
}
