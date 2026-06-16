export default function NewsLangPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Latest News</h1>
          <p className="text-gray-600">Stay updated with World Cup 2026 news and analysis</p>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold mb-4">News</h2>
          <p className="text-gray-600 mb-8">Read the latest World Cup news</p>
          <a
            href="/news"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Read News →
          </a>
        </div>
      </div>
    </div>
  )
}
