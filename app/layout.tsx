import { Metadata } from 'next'
import './globals.css'
import { alternates, multilingualKeywords } from './metadata'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export const metadata: Metadata = {
  metadataBase: new URL('https://statshubs.net'),
  title: {
    default: 'World Cup 2026 Tool Hub - Schedule, Bracket & Live Scores',
    template: '%s | World Cup 2026 Tool Hub'
  },
  description: 'Your comprehensive World Cup 2026 companion with timezone converter, bracket maker, live standings, printable schedules, and team information. Free tools for fans worldwide.',
  keywords: multilingualKeywords,
  authors: [{ name: 'StatsHubs Team' }],
  creator: 'StatsHubs',
  publisher: 'StatsHubs',
  alternates,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://statshubs.net',
    siteName: 'World Cup 2026 Tool Hub',
    title: 'World Cup 2026 Tool Hub',
    description: 'Comprehensive World Cup 2026 tools: timezone converter, bracket maker, live standings, printable schedules',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'World Cup 2026 Tool Hub'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Tool Hub',
    description: 'Your ultimate World Cup 2026 companion with free tools',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white">
        <header className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/" className="text-2xl font-bold">⚽ World Cup 2026 Hub</a>
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
              </div>
              <div className="hidden md:flex gap-6">
                <a href="/schedule" className="hover:underline">Schedule</a>
                <a href="/tools/timezone-converter" className="hover:underline">Time Zone</a>
                <a href="/tools/bracket-maker" className="hover:underline">Bracket</a>
                <a href="/tools/standings" className="hover:underline">Standings</a>
                <a href="/tools/teams" className="hover:underline">Teams</a>
                <a href="/news" className="hover:underline">News</a>
                <a href="/faq" className="hover:underline">FAQ</a>
              </div>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-slate-900 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Tools</h3>
                <ul className="space-y-2">
                  <li><a href="/tools/timezone-converter" className="hover:underline">Time Zone Converter</a></li>
                  <li><a href="/tools/bracket-maker" className="hover:underline">Bracket Maker</a></li>
                  <li><a href="/tools/standings" className="hover:underline">Standings Tracker</a></li>
                  <li><a href="/tools/schedule-generator" className="hover:underline">Print Schedule</a></li>
                  <li><a href="/tools/teams" className="hover:underline">Team Squads</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Information</h3>
                <ul className="space-y-2">
                  <li><a href="/schedule" className="hover:underline">Match Schedule</a></li>
                  <li><a href="/news" className="hover:underline">News & Analysis</a></li>
                  <li><a href="/downloads" className="hover:underline">Downloads</a></li>
                  <li><a href="/faq" className="hover:underline">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
                  <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                  <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Disclaimer</h3>
                <p className="text-sm text-gray-400">
                  This site provides tools and information only. We do not broadcast, stream, or provide any match coverage. All data is for informational purposes only.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
              <p>© 2026 World Cup 2026 Tool Hub. All rights reserved.</p>
              <p className="text-gray-400 mt-2">Not affiliated with FIFA. All trademarks belong to their respective owners.</p>
            </div>
          </div>
        </footer>

        {/* Ko-fi Donation Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://ko-fi.com/shuanghuz1gmailcom"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#29ABE0] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1a8ab8] transition-colors text-sm font-medium"
          >
            ☕ Buy us a coffee
          </a>
        </div>
      </body>
    </html>
  )
}
