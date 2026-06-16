export default function ScheduleLangPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Match Schedule</h1>
          <p className="text-gray-600">Complete schedule of all World Cup 2026 matches</p>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-2xl font-bold mb-4">Schedule</h2>
          <p className="text-gray-600 mb-8">View complete match schedule</p>
          <a
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Schedule →
          </a>
        </div>
      </div>
    </div>
  )
}
