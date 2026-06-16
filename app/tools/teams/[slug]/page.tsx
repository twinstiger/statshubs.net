import Link from 'next/link'
import { teams } from '@/lib/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }))
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { slug } = await params
  const team = teams.find((t) => t.slug === slug)

  if (!team) {
    notFound()
  }

  const samplePlayers = [
    { id: '1', name: 'Top Scorer', position: 'Forward', age: 28, number: 9, club: 'Top European Club', goals: 12, caps: 45 },
    { id: '2', name: 'Captain', position: 'Midfielder', age: 30, number: 8, club: 'Top European Club', goals: 8, caps: 72 },
    { id: '3', name: 'Star Defender', position: 'Defender', age: 27, number: 4, club: 'Top European Club', goals: 2, caps: 38 },
    { id: '4', name: 'Goalkeeper', position: 'Goalkeeper', age: 29, number: 1, club: 'Top European Club', goals: 0, caps: 52 },
    { id: '5', name: 'Winger', position: 'Forward', age: 24, number: 11, club: 'Top European Club', goals: 15, caps: 28 },
    { id: '6', name: 'Midfield Anchor', position: 'Midfielder', age: 26, number: 6, club: 'Top European Club', goals: 3, caps: 35 },
    { id: '7', name: 'Center Back', position: 'Defender', age: 25, number: 3, club: 'Top European Club', goals: 1, caps: 22 },
    { id: '8', name: 'Playmaker', position: 'Midfielder', age: 23, number: 10, club: 'Top European Club', goals: 10, caps: 18 },
    { id: '9', name: 'Full Back', position: 'Defender', age: 26, number: 2, club: 'Top European Club', goals: 2, caps: 30 },
    { id: '10', name: 'Striker', position: 'Forward', age: 22, number: 7, club: 'Top European Club', goals: 20, caps: 15 },
  ]

  const displayPlayers = team.squad.length > 0 ? team.squad : samplePlayers

  const groupTeams = teams.filter((t) => t.group === team.group && t.slug !== team.slug)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/tools/teams" className="text-blue-600 hover:underline">
            ← Back to Teams
          </Link>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white">
            <div className="flex items-center gap-6">
              <span className="text-8xl">{team.flag}</span>
              <div>
                <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
                <div className="flex gap-6 text-blue-100">
                  <span>🏆 FIFA Rank: #{team.ranking}</span>
                  <span>📅 Manager: {team.manager}</span>
                  <span>🌍 Group {team.group}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Team Overview</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{team.history.appearances}</p>
                  <p className="text-sm text-gray-600">World Cup Appearances</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{team.history.titles}</p>
                  <p className="text-sm text-gray-600">World Cup Titles</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">#{team.ranking}</p>
                  <p className="text-sm text-gray-600">FIFA Ranking</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Best World Cup Result</h3>
                <p className="text-gray-700">{team.history.bestResult}</p>
              </div>
            </div>

            {/* Squad */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Squad Roster</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-sm font-semibold">#</th>
                      <th className="px-4 py-3 text-sm font-semibold">Name</th>
                      <th className="px-4 py-3 text-sm font-semibold">Position</th>
                      <th className="px-4 py-3 text-sm font-semibold">Age</th>
                      <th className="px-4 py-3 text-sm font-semibold">Club</th>
                      <th className="px-4 py-3 text-sm font-semibold">Caps</th>
                      <th className="px-4 py-3 text-sm font-semibold">Goals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayPlayers.map((player, idx) => (
                      <tr key={player.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold">{player.number}</td>
                        <td className="px-4 py-3 font-medium">{player.name}</td>
                        <td className="px-4 py-3 text-gray-600">{player.position}</td>
                        <td className="px-4 py-3">{player.age}</td>
                        <td className="px-4 py-3 text-gray-600">{player.club || '-'}</td>
                        <td className="px-4 py-3">{player.caps ?? '-'}</td>
                        <td className="px-4 py-3 font-bold text-green-600">{player.goals ?? '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Tournament Analysis</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  <strong>{team.name}</strong> enters the 2026 FIFA World Cup with high expectations
                  following their impressive performance in recent international competitions.
                  Led by experienced manager {team.manager}, the team combines veteran leadership
                  with exciting young talent.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Key Strengths</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Strong defensive unit with experienced center-backs</li>
                  <li>Creative midfield capable of controlling possession</li>
                  <li>Clinical finishing from multiple attacking options</li>
                  <li>Excellent squad depth across all positions</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6 mb-3">Tournament Prospects</h3>
                <p className="mb-4">
                  In Group {team.group}, {team.name} will face competition from {groupTeams.map(t => t.name).join(', ')}.
                  The team is expected to advance comfortably and make a deep run into the knockout stages.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Group Standings */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Group {team.group} Teams</h3>
              <div className="space-y-3">
                {groupTeams.map((t, idx) => (
                  <Link
                    key={t.slug}
                    href={`/tools/teams/${t.slug}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl">{t.flag}</span>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-gray-500">Rank #{t.ranking}</p>
                    </div>
                  </Link>
                ))}
                <Link
                  href={`/tools/teams/${team.slug}`}
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200"
                >
                  <span className="text-2xl">{team.flag}</span>
                  <div>
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-blue-600">Current Team</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/tools/bracket-maker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  🏆 Create Your Bracket
                </Link>
                <Link href="/tools/standings" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  📊 View Standings
                </Link>
                <Link href="/tools/timezone-converter" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  🌍 Match Times
                </Link>
                <Link href="/schedule" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  📅 Full Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
