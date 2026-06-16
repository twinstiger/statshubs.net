'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { languages, Language } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = languages.find(l => pathname.startsWith(`/${l.code}`))?.code || 'en'

  const switchLanguage = (langCode: Language) => {
    // Remove current language prefix if exists
    let newPath = pathname
    languages.forEach(l => {
      if (pathname.startsWith(`/${l.code}/`)) {
        newPath = pathname.replace(`/${l.code}`, '')
      }
    })

    // Add new language prefix
    if (langCode === 'en') {
      router.push(newPath || '/')
    } else {
      router.push(`/${langCode}${newPath || ''}`)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
      >
        <span className="text-lg">
          {languages.find(l => l.code === currentLang)?.flag}
        </span>
        <span className="text-sm hidden md:inline">
          {languages.find(l => l.code === currentLang)?.nativeName}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  currentLang === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <div>
                  <div className="font-medium">{lang.nativeName}</div>
                  <div className="text-xs text-gray-500">{lang.name}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
