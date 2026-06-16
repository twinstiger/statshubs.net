import Link from 'next/link'
import { allArticles } from '@/lib/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticleDetailPage({ params }: PageProps) {
  const article = allArticles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  const categoryColors: Record<string, string> = {
    preview: 'bg-blue-100 text-blue-800',
    analysis: 'bg-purple-100 text-purple-800',
    guide: 'bg-green-100 text-green-800',
    recap: 'bg-orange-100 text-orange-800',
    fan: 'bg-pink-100 text-pink-800',
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/news" className="text-blue-600 hover:underline">
            ← Back to News
          </Link>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <span className="text-8xl">⚽</span>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
                {article.category.toUpperCase()}
              </span>
              <span className="text-sm text-gray-500">
                {article.readTime} min read
              </span>
              <span className="text-sm text-gray-500">
                {article.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              <span>By {article.author}</span>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="mb-4">
                The FIFA World Cup 2026 promises to be one of the most exciting tournaments in football history.
                With the expansion to 48 teams and matches spread across three host countries, fans around the
                world are eagerly anticipating what promises to be a historic celebration of football.
              </p>
              <p className="mb-4">
                This comprehensive guide provides all the information you need to follow your favorite teams
                and players throughout the tournament. From understanding the new format to tracking match times
                across different time zones, we've got you covered.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Key Information</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Tournament Dates</p>
                    <p className="font-semibold">June 11 - July 19, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Host Countries</p>
                    <p className="font-semibold">USA, Canada, Mexico</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Participating Teams</p>
                    <p className="font-semibold">48 Teams</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Matches</p>
                    <p className="font-semibold">104 Matches</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Main Content</h2>
              <p className="mb-4">
                The 2026 World Cup represents a new era for international football. The expansion from 32 to
                48 teams means more nations than ever will have the opportunity to compete on the world's
                biggest stage. This change brings both opportunities and challenges for teams, players, and fans alike.
              </p>
              <p className="mb-4">
                For fans, the tournament offers more matches to watch, more teams to follow, and more
                opportunities to engage with the beautiful game. The new format ensures that even teams
                that don't advance from their groups will have played a full five matches, providing
                more value for supporters who travel to watch their teams.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Analysis & Insights</h2>
              <p className="mb-4">
                Looking at the tournament from a tactical perspective, the expanded group stage means teams
                will need to manage their squads more carefully. With five matches in the group stage alone,
                player rotation and fitness management will be crucial factors in determining success.
              </p>
              <p className="mb-4">
                The knockout stage format remains similar to previous tournaments, with 24 teams advancing
                from the group stage to compete in the Round of 16, Quarterfinals, Semifinals, and ultimately
                the Final on July 19, 2026.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="mb-4">
                As we approach the start of the 2026 World Cup, excitement continues to build across the globe.
                Whether you're rooting for a traditional powerhouse or a newcomer to the tournament, this World Cup
                promises to deliver unforgettable moments and historic achievements.
              </p>
              <p>
                Stay tuned to our website for the latest updates, match previews, and comprehensive coverage
                throughout the tournament. Use our timezone converter to never miss a match, track live standings
                as the competition progresses, and share your predictions with friends using our bracket maker.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-gray-600">
                Content team member specializing in World Cup analysis and statistics.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/news/${related.slug}`}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-medium mb-2 line-clamp-2">{related.title}</h4>
                  <p className="text-sm text-gray-500">{related.readTime} min read</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tools CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Enhance Your World Cup Experience</h3>
          <p className="mb-6">
            Check out our free tools to make the most of the tournament
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/tools/timezone-converter" className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20">
              <div className="text-3xl mb-2">🌍</div>
              <p className="font-medium">Time Zone Converter</p>
            </Link>
            <Link href="/tools/bracket-maker" className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20">
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-medium">Bracket Maker</p>
            </Link>
            <Link href="/tools/standings" className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-medium">Standings Tracker</p>
            </Link>
            <Link href="/tools/teams" className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20">
              <div className="text-3xl mb-2">👥</div>
              <p className="font-medium">Team Squads</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
