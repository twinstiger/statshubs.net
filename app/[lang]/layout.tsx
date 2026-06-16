import { Metadata } from 'next'
import { languages } from '@/lib/i18n'

interface LangLayoutProps {
  children: React.ReactNode
  params: { lang: string }
}

export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code,
  }))
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const lang = params.lang
  const langConfig = languages.find(l => l.code === lang) || languages[0]

  const titles: Record<string, string> = {
    en: 'World Cup 2026 Tool Hub - Schedule, Bracket & Live Scores',
    es: 'Copa Mundial 2026 - Herramientas, Horarios y Resultados',
    fr: 'Coupe du Monde 2026 - Outils, Calendrier et Résultats',
    de: 'WM 2026 - Werkzeuge, Spielplan und Ergebnisse',
    ja: 'ワールドカップ 2026 - ツール、スケジュール、結果',
    pt: 'Copa do Mundo 2026 - Ferramentas, Calendário e Resultados'
  }

  const descriptions: Record<string, string> = {
    en: 'Your comprehensive World Cup 2026 companion with timezone converter, bracket maker, live standings, printable schedules, and team information.',
    es: 'Tu compañero completo de la Copa Mundial 2026 con convertidor de zona horaria, creador de parrilla, clasificaciones en vivo.',
    fr: 'Votre compagnon complet de la Coupe du Monde 2026 avec convertisseur de fuseau horaire, créateur de tableau et classements en direct.',
    de: 'Ihr umfassender WM 2026 Begleiter mit Zeitzonenkonverter, Turnierbaum und Live-Tabellen.',
    ja: 'タイムゾーン変換、ブラケットメーカー、ライブスコアを備えたFIFAワールドカップ2026の完全なコンパニオン。',
    pt: 'Seu companheiro completo da Copa do Mundo 2026 com conversor de fuso horário, montador de pareo e classificações em tempo real.'
  }

  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: {
      canonical: `https://statshubs.net/${lang === 'en' ? '' : lang}`,
      languages: {
        'en-US': 'https://statshubs.net',
        'es-ES': 'https://statshubs.net/es',
        'fr-FR': 'https://statshubs.net/fr',
        'de-DE': 'https://statshubs.net/de',
        'ja-JP': 'https://statshubs.net/ja',
        'pt-BR': 'https://statshubs.net/pt',
      },
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      locale: langConfig.hreflang,
    }
  }
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  return children
}
