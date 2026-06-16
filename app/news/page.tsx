'use client'

import Link from 'next/link'
import { allArticles } from '@/lib/data'
import { useState } from 'react'

// World Cup venue images for featured articles
const venueImages = [
  'https://picsum.photos/seed/worldcup1/800/400',
  'https://picsum.photos/seed/worldcup2/800/400',
  'https://picsum.photos/seed/worldcup3/800/400',
]

// Team-specific images using picsum with unique seeds
const teamImages: Record<string, string> = {
  argentina: 'https://picsum.photos/seed/argentina/400/300',
  brazil: 'https://picsum.photos/seed/brazil/400/300',
  france: 'https://picsum.photos/seed/france/400/300',
  germany: 'https://picsum.photos/seed/germany/400/300',
  spain: 'https://picsum.photos/seed/spain/400/300',
  portugal: 'https://picsum.photos/seed/portugal/400/300',
  england: 'https://picsum.photos/seed/england/400/300',
  italy: 'https://picsum.photos/seed/italy/400/300',
  netherlands: 'https://picsum.photos/seed/netherlands/400/300',
  belgium: 'https://picsum.photos/seed/belgium/400/300',
  croatia: 'https://picsum.photos/seed/croatia/400/300',
  uruguay: 'https://picsum.photos/seed/uruguay/400/300',
  mexico: 'https://picsum.photos/seed/mexico/400/300',
  usa: 'https://picsum.photos/seed/usa/400/300',
  canada: 'https://picsum.photos/seed/canada/400/300',
  japan: 'https://picsum.photos/seed/japan/400/300',
  'south-korea': 'https://picsum.photos/seed/southkorea/400/300',
  australia: 'https://picsum.photos/seed/australia/400/300',
  morocco: 'https://picsum.photos/seed/morocco/400/300',
  senegal: 'https://picsum.photos/seed/senegal/400/300',
  default: 'https://picsum.photos/seed/football/400/300',
}

const getArticleImage = (slug: string, index: number): string => {
  // First 3 articles use World Cup venue images
  if (index < 3) {
    return venueImages[index]
  }

  // Team articles use team-specific images
  const slugLower = slug.toLowerCase()
  for (const [team, imageUrl] of Object.entries(teamImages)) {
    if (slugLower.includes(team)) {
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
