export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'pt'

export interface LanguageConfig {
  code: Language
  name: string
  nativeName: string
  flag: string
  hreflang: string
  direction: 'ltr' | 'rtl'
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', hreflang: 'en-US', direction: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', hreflang: 'es-ES', direction: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', hreflang: 'fr-FR', direction: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', hreflang: 'de-DE', direction: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', hreflang: 'ja-JP', direction: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', hreflang: 'pt-BR', direction: 'ltr' }
]

export const defaultLanguage: Language = 'en'

export function getLanguageConfig(code: Language): LanguageConfig {
  return languages.find(l => l.code === code) || languages[0]
}
