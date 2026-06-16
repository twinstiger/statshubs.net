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
    en: 'FIFA World Cup 2026 - Schedule, Bracket Maker & Live Standings | StatsHubs',
    es: 'Copa Mundial FIFA 2026 - Partidos, Horarios y Clasificaciones | StatsHubs',
    fr: 'Coupe du Monde FIFA 2026 - Calendrier, Résultats et Classements | StatsHubs',
    de: 'FIFA Fußball-Weltmeisterschaft 2026 - Spielplan, Ergebnisse & WM 2026 | StatsHubs',
    ja: 'FIFA ワールドカップ 2026 - 試合日程、スケジュール、順位表 | StatsHubs',
    pt: 'Copa do Mundo FIFA 2026 - Jogos, Resultados e Classificação | StatsHubs'
  }

  const descriptions: Record<string, string> = {
    en: 'FIFA World Cup 2026™ - Complete match schedule, timezone converter, bracket maker, live standings, team squads, USA vs Paraguay, Mexico vs South Africa. Follow Copa Mundial 2026.',
    es: 'Copa Mundial 2026™ - Partidos en vivo, horarios, convertidor de zona horaria, creación de pariilas, clasificaciones. España vs Cabo Verde, Brasil vs Marruecos.',
    fr: 'Coupe du Monde 2026™ - Calendrier complet, match Brazil vs Morocco, convertisseur fuseau horaire, créateur de tableau, classements en direct.',
    de: 'WM 2026™ - Fußball-Weltmeisterschaft mit Spielplan, Zeitzonenkonverter, Turnierbaum. Belgien vs Ägypten, WM 2026 Ergebnisse live.',
    ja: 'FIFA ワールドカップ 2026™ - 試合日程、タイムゾーン変換、ブラケットメーカー、順位表。グループステージから決勝まで対応。',
    pt: 'Copa do Mundo 2026™ - Jogos ao vivo, horários, conversor de fuso horário, pareo. Brasil x Marrocos, partidas da Copa do Mundo 2026.'
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
