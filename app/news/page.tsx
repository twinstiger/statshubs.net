'use client'

import Link from 'next/link'
import { allArticles } from '@/lib/data'
import { useState } from 'react'

// World Cup venue images for featured articles
const venueImages = [
  'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800', // Stadium aerial
  'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', // Stadium field
  'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800', // Soccer field
]

// Team flag/colors mapping for team articles
const teamImages: Record<string, string> = {
  argentina: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
  brazil: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
  france: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400',
  germany: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400',
  spain: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400',
  portugal: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
  england: 'https://images.unsplash.com/photo-1514714750792-0b838cff0684?w=400',
  italy: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400',
  netherlands: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400',
  belgium: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400',
  croatia: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400',
  uruguay: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400',
  mexico: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400',
  usa: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
  canada: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
  japan: 'https://images.unsplash.com/photo-1474224017046-182eecd1d5d5?w=400',
  'south-korea': 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400',
  australia: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400',
  morocco: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
  senegal: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
  default: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
}

const getArticleImage = (slug: string, index: number): string => {
  // Only first article (featured) uses venue images
  if (index === 0) {
    return venueImages[0]
  }

  // Team articles use team-specific images
  for (const [team, imageUrl] of Object.entries(teamImages)) {
    if (slug.toLowerCase().includes(team)) {
      return imageUrl
    }
  }

  return teamImages.default
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Category-based gradients and icons for consistent card appearance
  const categoryStyles: Record<string, { gradient: string; icon: string }> = {
    preview: { gradient: 'from-blue-800 to-blue-600', icon: '⚽' },
    analysis: { gradient: 'from-purple-800 to-purple-600', icon: '📊' },
    guide: { gradient: 'from-green-800 to-green-600', icon: '📋' },
    recap: { gradient: 'from-orange-800 to-orange-600', icon: '🏅' },
    fan: { gradient: 'from-pink-800 to-pink-600', icon: '👏' },
  }

  const getCategoryStyle = (category: string) => {
    return categoryStyles[category] || categoryStyles.guide
  }

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'preview', label: 'Match Previews' },
    { value: 'analysis', label: 'Team Analysis' },
    { value: 'guide', label: 'Tournament Guide' },
    { value: 'fan', label: 'Fan Guide' },
  ]

  const filteredArticles = selectedCategory === 'all'
    ? allArticles
    : allArticles.filter(a => a.category === selectedCategory)

  const categoryColors: Record<string, string> = {
    preview: 'bg-blue-100 text-blue-800',
    analysis: 'bg-purple-100 text-purple-800',
    guide: 'bg-green-100 text-green-800',
    recap: 'bg-orange-100 text-orange-800',
    fan: 'bg-pink-100 text-pink-800',
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">📰 World Cup 2026 News & Analysis</h1>
          <p className="text-gray-600">
            Expert analysis, match previews, tournament guides, and fan resources. {allArticles.length} articles available.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="md:flex">
                <div className={`md:w-1/3 h-64 bg-gradient-to-br ${getCategoryStyle(filteredArticles[0].category).gradient} relative overflow-hidden`}>
                  <img
                    src={getArticleImage(filteredArticles[0].slug, 0)}
                    alt="World Cup 2026"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-3xl z-10">
                    {getCategoryStyle(filteredArticles[0].category).icon}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[filteredArticles[0].category]}`}>
                      {filteredArticles[0].category.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{filteredArticles[0].readTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold mt-2 mb-3">
                    <Link href={`/news/${filteredArticles[0].slug}`} className="hover:text-blue-600">
                      {filteredArticles[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{filteredArticles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>By {filteredArticles[0].author}</span>
                    <span>•</span>
                    <span>{filteredArticles[0].publishedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article, idx) => {
            const style = getCategoryStyle(article.category)
            const imageIndex = idx + 1
            return (
              <article key={article.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-40 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
                  <img
                    src={getArticleImage(article.slug, imageIndex)}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3 text-3xl z-10">
                    {style.icon}
                  </div>
                </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime} min</span>
                </div>
                <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2">
                  <Link href={`/news/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.publishedAt}</span>
                  <Link href={`/news/${article.slug}`} className="text-blue-600 hover:underline font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
              </article>
            )
          })}
        </div>

        {/* Load More */}
        {filteredArticles.length > 12 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl mb-2">📭 No articles found</p>
            <p>Try selecting a different category</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-blue-600">{allArticles.length}</p>
            <p className="text-sm text-gray-600">Total Articles</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-green-600">{allArticles.filter(a => a.category === 'analysis').length}</p>
            <p className="text-sm text-gray-600">Analysis</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-purple-600">{allArticles.filter(a => a.category === 'guide').length}</p>
            <p className="text-sm text-gray-600">Guides</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-3xl font-bold text-pink-600">{allArticles.filter(a => a.category === 'fan').length}</p>
            <p className="text-sm text-gray-600">Fan Content</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">📬 Stay Updated</h3>
            <p className="mb-6 text-blue-100">
              Subscribe for daily World Cup updates, match previews, and exclusive analysis.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
