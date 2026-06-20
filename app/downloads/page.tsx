import Script from 'next/script'
import AffiliateProductsSection from '@/components/affiliate/AffiliateProductsSection'

export default function DownloadsPage() {
  const downloads = [
    {
      id: 1,
      title: 'Complete World Cup 2026 Schedule',
      description: 'All 104 matches in a printable PDF format with dates, times, venues, and timezone conversion charts.',
      size: '2.4 MB',
      format: 'PDF',
      icon: '📅',
      sections: ['Group Stage (48 matches)', 'Round of 16 (8 matches)', 'Quarterfinals', 'Semifinals', 'Third Place & Final'],
    },
    {
      id: 2,
      title: 'Blank Tournament Bracket',
      description: 'Empty bracket template to fill in your predictions. Perfect for office pools and friendly competitions.',
      size: '850 KB',
      format: 'PDF',
      icon: '🏆',
      sections: ['48-team bracket layout', 'Group stage grid', 'Knockout stage tree', 'Score tracking areas'],
    },
    {
      id: 3,
      title: 'Group Standings Tracker',
      description: 'Printable spreadsheet to track all group stage results and calculate standings manually.',
      size: '1.1 MB',
      format: 'XLSX',
      icon: '📊',
      sections: ['8 group sheets', 'Auto-calculating standings', 'Goal difference formulas', 'Tiebreaker tracking'],
    },
    {
      id: 4,
      title: 'Team Squad List',
      description: 'Complete list of all 48 team squads with player names, positions, and jersey numbers.',
      size: '3.2 MB',
      format: 'PDF',
      icon: '👥',
      sections: ['All 48 nations', 'Full squad rosters', 'Player positions', 'Manager information'],
    },
    {
      id: 5,
      title: 'World Cup Facts & Statistics',
      description: 'Comprehensive guide with historical statistics, records, and tournament facts.',
      size: '1.8 MB',
      format: 'PDF',
      icon: '📚',
      sections: ['Tournament history', 'Record holders', 'Top scorers', 'Venue information'],
    },
    {
      id: 6,
      title: 'Match Day Checklist',
      description: 'Printable checklist for organizing World Cup watch parties and game day preparations.',
      size: '450 KB',
      format: 'PDF',
      icon: '✅',
      sections: ['Food & drinks', 'Seating arrangement', 'Tech setup', 'Decorations'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">📥 Free World Cup 2026 Downloads</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download free resources to enhance your World Cup experience. Schedules, brackets, checklists,
            and more - all completely free with no watermarks.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold">No Registration</h3>
            <p className="text-sm text-gray-600">Instant downloads, no sign-up required</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold">100% Free</h3>
            <p className="text-sm text-gray-600">All resources available at no cost</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-3xl mb-2">🖨️</div>
            <h3 className="font-semibold">Print Ready</h3>
            <p className="text-sm text-gray-600">Optimized for high-quality printing</p>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((download) => (
            <div key={download.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">{download.icon}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {download.format}
                  </span>
                  <span className="text-xs text-gray-500">{download.size}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{download.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{download.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">INCLUDES:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {download.sections.map((section, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Download Free
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Section */}
        <AffiliateProductsSection />

        {/* Request Section */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-gray-600 mb-6">
            We're always adding new resources. Contact us and let us know what you'd like to see next!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Request a Resource →
          </a>
        </div>
      </div>
      {/* Advertisement */}
      <Script
        id="adsterra-invoke"
        async
        dangerouslySetInnerHTML={{
          __html: `
            var _pop = _pop || [];
            _pop.push(['place', '728x90']);
            (function() {
              var s = document.createElement('script');
              s.src = '//pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js';
              s.async = true;
              document.head.appendChild(s);
            })();
          `
        }}
      />
      <Script
        id="adsterra-secondary"
        src="https://pl29763342.effectivecpmnetwork.com/76/24/27/762427d2c49841bf978fdff5e81cd616.js"
        async
      />
    </div>
  )
}
