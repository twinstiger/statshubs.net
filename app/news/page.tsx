'use client'

import Link from 'next/link'
import { allArticles } from '@/lib/data'
import { useState } from 'react'
import { AdScript, AdBanner } from '@/components/ads/AdScript'

// World Cup venue images for featured articles
const venueImages = [
  'https://picsum.photos/seed/worldcup1/800/400',
  'https://picsum.photos/seed/worldcup2/800/400',
  'https://picsum.photos/seed/worldcup3/800/400',
]

// Team logos from 163.com
const teamLogos: Record<string, string> = {
  // Group A
  mexico: 'http://cms-bucket.ws.126.net/2022/1018/19a82fe6p00rjyaf7000cc000dw00dwc.png',
  'south-korea': 'http://cms-bucket.ws.126.net/2022/1018/7b9a82dfp00rjya4m000cc000dw00dwc.png',
  czech: 'https://cms-bucket.ws.126.net/2026/0521/7cb3c4cep00tfd6870005c000dw00dwc.png',
  'south-africa': 'https://cms-bucket.ws.126.net/2026/0521/ae441587p00tfd4s80006c000dw00dwc.png',
  // Group B
  switzerland: 'http://cms-bucket.ws.126.net/2022/1018/abc24152p00rjyayh0005c000e800e8c.png',
  canada: 'http://cms-bucket.ws.126.net/2022/1018/e7c3d3b5p00rjyasg0008c000dw00dwc.png',
  qatar: 'http://cms-bucket.ws.126.net/2022/1018/30fbb812p00rjya7w0008c000dw00dwc.png',
  bosnia: 'https://cms-bucket.ws.126.net/2026/0521/40725046p00tfd69u000ac000dw00dwc.png',
  // Group C
  scotland: 'https://cms-bucket.ws.126.net/2026/0521/be1528f6p00tfddbg000ac000dw00dwc.png',
  morocco: 'http://cms-bucket.ws.126.net/2022/1018/ceec89a3p00rjyasu0006c000dw00dwc.png',
  brazil: 'http://cms-bucket.ws.126.net/2022/1018/9f96465ap00rjyaxi000ec000dw00dwc.png',
 haiti: 'https://cms-bucket.ws.126.net/2026/0521/6460aed7p00tfd66i000dc000dw00dwc.png',
  // Group D
  usa: 'http://cms-bucket.ws.126.net/2022/1018/92881c9bp00rjyabb0009c000dw00dwc.png',
  australia: 'http://cms-bucket.ws.126.net/2022/1018/bd2234e0p00rjyajn0008c000dw00dwc.png',
  turkey: 'https://cms-bucket.ws.126.net/2026/0521/c7289b60p00tfd4oj0008c000dw00dwc.png',
  paraguay: 'https://cms-bucket.ws.126.net/2026/0521/50c13509p00tfd4we000bc000dw00dwc.png',
  // Group E
  germany: 'http://cms-bucket.ws.126.net/2022/1018/8bbe1959p00rjyanq0004c000dw00dwc.png',
  'ivory-coast': 'https://cms-bucket.ws.126.net/2026/0521/9c82f046p00tfd6970005c000dw00dwc.png',
  ecuador: 'http://cms-bucket.ws.126.net/2022/1018/1ffcf962p00rjya8b000lc000dw00dwc.png',
  curacao: 'https://cms-bucket.ws.126.net/2026/0521/be81553ap00tfddjx0008c000dw00dwc.png',
  // Group F
  sweden: 'http://cms-bucket.ws.126.net/2026/0521/e18456b0p00tfdvzu000bc000dw00dwc.png',
  japan: 'http://cms-bucket.ws.126.net/2022/1018/1774148dp00rjyao50009c000dw00dwc.png',
  netherlands: 'http://cms-bucket.ws.126.net/2022/1018/8b6cd9e2p00rjya9a0004c000dw00dwc.png',
  tunisia: 'http://cms-bucket.ws.126.net/2022/1018/d677c0a5p00rjyajf0009c000dw00dwc.png',
  // Group G
  'new-zealand': 'https://cms-bucket.ws.126.net/2026/0521/35aef810p00tfd6480008c000dw00dwc.png',
  iran: 'http://cms-bucket.ws.126.net/2022/1018/7fa2062dp00rjyaav000bc000dw00dwc.png',
  belgium: 'http://cms-bucket.ws.126.net/2022/1202/150b1e84p00rm94y20005c000dw00dwc.png',
  egypt: 'https://cms-bucket.ws.126.net/2026/0521/6486403ap00tfd676000cc000dw00dwc.png',
  // Group H
  uruguay: 'http://cms-bucket.ws.126.net/2022/1018/21a31855p00rjyb2s000hc000dw00dwc.png',
  'saudi-arabia': 'http://cms-bucket.ws.126.net/2022/1018/4860aa7ep00rjyaem000ic000dw00dwc.png',
  spain: 'http://cms-bucket.ws.126.net/2022/1018/8d1d3c8bp00rjyan9000hc000dw00dwc.png',
  'cape-verde': 'https://cms-bucket.ws.126.net/2026/0521/ece2f2d0p00tfd6aw0009c000dw00dwc.png',
  // Group I
  france: 'http://cms-bucket.ws.126.net/2022/1018/ebfe3909p00rjyaiy0005c000dw00dwc.png',
  senegal: 'http://cms-bucket.ws.126.net/2022/1018/c70fec10p00rjya780007c000dw00dwc.png',
  iraq: 'https://cms-bucket.ws.126.net/2026/0521/ed0392ffp00tfd6620008c000dw00dwc.png',
  norway: 'https://cms-bucket.ws.126.net/2026/0521/70c50ce7p00tfd63i0005c000dw00dwc.png',
  // Group J
  argentina: 'http://cms-bucket.ws.126.net/2022/1018/d68743e5p00rjyae0000ec000dw00dwc.png',
  algeria: 'https://cms-bucket.ws.126.net/2026/0521/1e86835ap00tfd6bi000ac000dw00dwc.png',
  austria: 'https://cms-bucket.ws.126.net/2026/0521/124016c4p00tfd6bz0004c000dw00dwc.png',
  jordan: 'https://cms-bucket.ws.126.net/2026/0521/046907b2p00tfd65g0006c000dw00dwc.png',
  // Group K
  portugal: 'http://cms-bucket.ws.126.net/2022/1018/090ad241p00rjyb1p000mc000dw00dwc.png',
  'dr-congo': 'https://cms-bucket.ws.126.net/2026/0521/1efef2eap00tfd67n0008c000dw00dwc.png',
  uzbekistan: 'https://cms-bucket.ws.126.net/2026/0521/39d79a7bp00tfd4nl0007c000dw00dwc.png',
  colombia: 'https://cms-bucket.ws.126.net/2026/0521/ddbf87c3p00tfd68q0004c000dw00dwc.png',
  // Group L
  england: 'http://cms-bucket.ws.126.net/2022/1018/123eb1e8p00rjya440002c000740074c.png',
  croatia: 'http://cms-bucket.ws.126.net/2022/1202/651c1a70p00rm950n000cc000dw00dwc.png',
  ghana: 'http://cms-bucket.ws.126.net/2022/1018/171c3af3p00rjyb250006c000dw00dwc.png',
  panama: 'https://cms-bucket.ws.126.net/2026/0521/6e14eb7fp00tfd62o0008c000dw00dwc.png',
  default: 'https://picsum.photos/seed/football/400/300',
}

const getArticleImage = (slug: string, index: number): string => {
  // First 3 articles use World Cup venue images
  if (index < 3) {
    return venueImages[index]
  }

  // Team articles use team logos from 163.com
  const slugLower = slug.toLowerCase()
  for (const [team, logoUrl] of Object.entries(teamLogos)) {
    if (slugLower.includes(team)) {
      return logoUrl
    }
  }

  return teamLogos.default
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
    <>
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
                <div className="md:w-1/3 h-72 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={getArticleImage(filteredArticles[0].slug, 0)}
                    alt="World Cup 2026"
                    className="max-h-full max-w-full object-contain"
                  />
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.slice(1).map((article, idx) => {
            const style = getCategoryStyle(article.category)
            const imageIndex = idx + 1
            return (
              <article key={article.slug} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={getArticleImage(article.slug, imageIndex)}
                    alt={article.title}
                    className="max-h-full max-w-full object-contain"
                  />
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

    <AdBanner />

    <AdScript />
    </>
  )
}
