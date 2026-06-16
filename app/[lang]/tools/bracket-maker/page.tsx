'use client'

export default function BracketLangPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bracket Maker</h1>
          <p className="text-gray-600">Predict the tournament results</p>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold mb-4">Bracket</h2>
          <p className="text-gray-600 mb-8">Make your predictions</p>
          <a
            href="/tools/bracket-maker"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Make Predictions →
          </a>
        </div>
      </div>
    </div>
  )
}
