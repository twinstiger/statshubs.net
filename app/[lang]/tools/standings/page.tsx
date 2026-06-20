'use client'

import { AdScript, AdBanner } from '@/components/ads/AdScript'

export default function StandingsLangPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Group Standings</h1>
            <p className="text-gray-600">Live tracking of all group stage results</p>
          </div>
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-bold mb-4">Standings</h2>
            <p className="text-gray-600 mb-8">View live group standings</p>
            <a
              href="/tools/standings"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View Standings →
            </a>
          </div>
        </div>
      </div>

      <AdBanner />

      <AdScript />
    </>
  )
}
