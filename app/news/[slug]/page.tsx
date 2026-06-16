import Link from 'next/link'
import { allArticles } from '@/lib/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)

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
              {article.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={idx} className="ml-4 mb-2">{paragraph.replace('- ', '')}</li>
                }
                if (paragraph.trim()) {
                  return <p key={idx} className="mb-4">{paragraph}</p>
                }
                return null
              })}
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
