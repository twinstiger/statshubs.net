'use client'

export default function TeamToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Team Squads</h1>
          <p className="text-gray-600">Complete directory of all 48 participating teams</p>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">👥</div>
          <h2 className="text-2xl font-bold mb-4">Teams</h2>
          <p className="text-gray-600 mb-8">Browse all 48 World Cup teams</p>
          <a
            href="/tools/teams"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Teams →
          </a>
        </div>
      </div>
    </div>
  )
}
