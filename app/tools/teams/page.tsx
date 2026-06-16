import { Metadata } from 'next'
import Link from 'next/link'
import { teams } from '@/lib/data'
import { getGroupColor } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'World Cup 2026 Teams | All 48 Squads | Copa Mundial',
  description: 'All 48 World Cup 2026 teams with full squad lists. Copa Mundial 2026 team profiles, players, statistics, and match schedules. Argentina, Brazil, France, Germany rosters.',
  keywords: [
    'World Cup 2026 teams',
    'Copa Mundial 2026 squads',
    'Coupe du Monde 2026 teams',
    'FIFA ワールド カップ 2026 チーム',
    'cabo verde world cup',
    'argentina world cup 2026',
    'brazil world cup 2026',
    'france world cup 2026',
    'germany world cup 2026',
    'world cup 2026 rosters',
    'team squads',
    'player list'
  ],
  openGraph: {
    title: 'FIFA World Cup 2026 Teams | All 48 Squads',
    description: 'Complete list of all 48 World Cup 2026 teams with Copa Mundial squad information and player rosters.',
  }
}

export default function TeamsPage() {
  const groupedTeams = teams.reduce((acc, team) => {
    if (!acc[team.group]) acc[team.group] = []
    acc[team.group].push(team)
    return acc
  }, {} as Record<string, typeof teams>)

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">👥 World Cup 2026 Team Squads</h1>
          <p className="text-gray-600">
            Complete directory of all 48 participating teams with squad information, history, and analysis.
          </p>
        </div>

        {/* Quick Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="font-semibold mb-3">Filter by Group</h3>
          <div className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <Link
                key={group}
                href={`/tools/teams#group-${group}`}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${getGroupColor(group)} hover:opacity-80`}
              >
                Group {group}
              </Link>
            ))}
          </div>
        </div>

        {/* Teams by Group */}
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group} id={`group-${group}`}>
              <div className="bg-blue-900 text-white px-6 py-3 rounded-t-lg">
                <h2 className="text-xl font-bold">Group {group}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white rounded-b-lg p-6 shadow-sm">
                {groupedTeams[group]?.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/tools/teams/${team.slug}`}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{team.flag}</span>
                      <div>
                        <h3 className="font-bold">{team.name}</h3>
                        <p className="text-sm text-gray-600">FIFA Rank: #{team.ranking}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-gray-600">Manager:</span> {team.manager}</p>
                      <p><span className="text-gray-600">Best Result:</span> {team.history.bestResult}</p>
                      <p><span className="text-gray-600">World Cup Appearances:</span> {team.history.appearances}</p>
                    </div>
                    <div className="mt-3 text-blue-600 text-sm font-medium">
                      View Squad Details →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Complete World Cup 2026 Team Guide</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              The FIFA World Cup 2026 will feature 48 national teams from across the globe,
              the largest number in tournament history. This comprehensive guide provides detailed
              information about every participating nation, from historical powerhouses to debutants.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Team Profiles Include</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Squad Rosters:</strong> Complete player listings with positions and clubs</li>
              <li><strong>Manager Information:</strong> Coaching staff and tactical approach</li>
              <li><strong>Historical Performance:</strong> World Cup history and best results</li>
              <li><strong>FIFA Rankings:</strong> Current international standings</li>
              <li><strong>Key Players:</strong> Stars to watch in the tournament</li>
              <li><strong>Injury Updates:</strong> Latest squad availability news</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Favorites and Dark Horses</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold mb-2">🏆 Title Contenders</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Brazil - 5-time champions, strong squad</li>
                  <li>• Argentina - Defending champions</li>
                  <li>• France - 2018 winners, depth of talent</li>
                  <li>• Germany - Traditional powerhouse</li>
                  <li>• England - Strong generation of players</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🐎 Dark Horses</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Belgium - Golden generation's last chance</li>
                  <li>• Croatia - 2018 runners-up experience</li>
                  <li>• Netherlands - Strong defensive unit</li>
                  <li>• Portugal - Talented squad depth</li>
                  <li>• Morocco - 2022 semifinalists</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Group Stage Analysis</h3>
            <p className="mb-4">
              With the expansion to 48 teams and 8 groups of 6, the group stage format has changed significantly.
              Each team now plays 5 matches in the group stage (previously 3), giving more opportunities for
              teams to prove themselves and reducing the impact of a single bad result.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">📊 Qualification Format</h4>
              <p className="text-sm text-gray-700">
                From each group, the top 2 teams advance automatically, plus the 4 best third-place teams.
                This creates 24 teams in the knockout stage, maintaining the traditional bracket format
                from the 32-team era.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <a href="/tools/bracket-maker" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="font-semibold">Bracket Maker</h4>
            <p className="text-sm text-gray-600">Predict results</p>
          </a>
          <a href="/tools/standings" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold">Standings</h4>
            <p className="text-sm text-gray-600">Track groups</p>
          </a>
          <a href="/tools/timezone-converter" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h4 className="font-semibold">Time Zone</h4>
            <p className="text-sm text-gray-600">Match times</p>
          </a>
          <a href="/schedule" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-semibold">Schedule</h4>
            <p className="text-sm text-gray-600">All fixtures</p>
          </a>
        </div>
      </div>
    </div>
  )
}
