'use client'

import React, { useState } from 'react'
import KirishlarHisobot from '@/module/KirishlarHisobot'
import { LOOKER_REPORT_ID, GA_MEASUREMENT_ID, STATS_PIN_HASH, OWNER_EMAIL } from '@/module/statsConfig'
import { sha256Hex } from '@/module/sha256'

// Looker Studio embed manzilini tayyorlaymiz: to'liq URL bo'lsa shunday, aks holda ID'dan yasaymiz.
function buildEmbedUrl(value) {
  if (!value) return ''
  if (value.startsWith('http')) return value
  return `https://lookerstudio.google.com/embed/reporting/${value}/page/1?embed`
}

export default function Statistika() {
  const [unlocked, setUnlocked] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  const embedUrl = buildEmbedUrl(LOOKER_REPORT_ID)
  const isConfigured = Boolean(LOOKER_REPORT_ID)

  async function handleSubmit(e) {
    e.preventDefault()
    let hash = ''
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pin))
      hash = Array.from(new Uint8Array(bytes)).map((b) => b.toString(16).padStart(2, '0')).join('')
    } else {
      // http:// kabi xavfsiz bo'lmagan muhitda crypto.subtle yo'q -> zaxira
      hash = sha256Hex(pin)
    }
    if (hash === STATS_PIN_HASH) {
      setUnlocked(true)
      setError('')
    } else {
      setError("PIN noto'g'ri. Qayta urinib ko'ring.")
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {!unlocked ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-24 p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg"
          >
            <h1 className="text-xl font-semibold mb-1">Statistika</h1>
            <p className="text-sm opacity-70 mb-5">
              Bu sahifa faqat sayt egasi uchun. Davom etish uchun PIN kiriting.
            </p>
            <input
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN kod"
              className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 outline-none focus:border-blue-500"
            />
            {error ? <p className="text-sm text-red-500 mt-2">{error}</p> : null}
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Kirish
            </button>
          </form>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Sayt statistikasi</h1>
                <p className="text-sm opacity-70">
                  Umumiy tashriflar (faqat siz ko'rasiz)
                </p>
                <p className="text-xs opacity-60 mt-1">Ega hisobi: {OWNER_EMAIL}</p>
              </div>
              <a
                href="https://analytics.google.com/analytics/web/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition-colors"
              >
                GA dashboardni ochish
              </a>
            </div>

            <KirishlarHisobot />

            {GA_MEASUREMENT_ID ? (
              <>
                <div className="p-5 rounded-2xl border border-green-500/30 bg-green-500/10 text-sm">
                  <p className="font-semibold mb-1">Google Analytics ulangan.</p>
                  <p className="opacity-80">
                    Sayt tashriflari sanalyapti ({GA_MEASUREMENT_ID}). Umumiy sonni
                    ko'rish uchun pastdagi tugmani bosing — u Google hisobingizda
                    ochiladi.
                  </p>
                </div>
                <a
                  href="https://analytics.google.com/analytics/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                >
                  Tashriflar sonini ko'rish
                </a>

                {isConfigured ? (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <iframe
                      src={embedUrl}
                      title="Sayt statistikasi"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <p className="mt-6 text-xs opacity-60">
                    Ixtiyoriy: sonni shu sahifaning ichida ko'rmoqchi bo'lsangiz,
                    Looker Studio embed manzilini statsConfig.js ga qo'shing.
                    Bo'lmasa, yuqoridagi tugma orqali Google'da ko'rasiz.
                  </p>
                )}
              </>
            ) : (
              <div className="p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 text-sm leading-relaxed">
                <p className="font-semibold mb-2">Hali sozlanmagan.</p>
                <p className="mb-2">
                  Statistikani ko'rish uchun Google Analytics 4 o'lchov
                  identifikatorini (G-...) <code>module/statsConfig.js</code>{' '}
                  faylidagi <code>GA_MEASUREMENT_ID</code> ga joylashtiring.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
