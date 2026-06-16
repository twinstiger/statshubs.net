'use client'

import { useState } from 'react'
import { Language } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface GalleryClientProps {
  lang: Language
}

// Mock gallery data
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800', category: 'venues', alt: 'Stadium aerial view' },
  { id: 2, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', category: 'matches', alt: 'Football match action' },
  { id: 3, src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800', category: 'matches', alt: 'Players celebrating' },
  { id: 4, src: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', category: 'teams', alt: 'National team flag' },
  { id: 5, src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', category: 'matches', alt: 'Goal celebration' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800', category: 'fans', alt: 'Crowd cheering' },
  { id: 7, src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800', category: 'venues', alt: 'Stadium at night' },
  { id: 8, src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800', category: 'fans', alt: 'Fans with face paint' },
  { id: 9, src: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800', category: 'moments', alt: 'Trophy lift' },
  { id: 10, src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800', category: 'venues', alt: 'Soccer field' },
  { id: 11, src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800', category: 'moments', alt: 'Golden trophy' },
  { id: 12, src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800', category: 'fans', alt: 'World Cup fans' },
]

const categories = [
  { key: 'all', icon: '🖼️' },
  { key: 'matches', icon: '⚽' },
  { key: 'teams', icon: '👥' },
  { key: 'venues', icon: '🏟️' },
  { key: 'fans', icon: '👏' },
  { key: 'moments', icon: '🏆' },
]

export default function GalleryClient({ lang }: GalleryClientProps) {
  const t = getTranslations(lang)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory
    const matchesSearch = img.alt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryLabel = (key: string) => {
    switch (key) {
      case 'all': return t.allPhotos
      case 'matches': return t.matchHighlights
      case 'teams': return t.teamsLabel
      case 'venues': return t.venuesLabel
      case 'fans': return t.fansLabel
      case 'moments': return t.topMoments
      default: return key
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.photoGallery}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t.hdImages}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.icon} {getCategoryLabel(cat.key)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPhotos}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <span>{t.showing} {filteredImages.length} {t.totalPhotos}</span>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(img => (
              <div
                key={img.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                  <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-all">
                    <p className="text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h2 className="text-2xl font-bold mb-2">{t.noPhotosFound}</h2>
            <p className="text-gray-600">{t.addPhotosGuide}</p>
          </div>
        )}

        {/* Add Photos Guide (shown when no images) */}
        {filteredImages.length === 0 && (
          <div className="mt-8 bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">{t.howToAddPhotos}</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <p className="font-medium">{t.findFreeImages}</p>
                  <p className="text-sm text-gray-600">Use Unsplash, Pexels, or Pixabay for free World Cup images</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <p className="font-medium">{t.step2}</p>
                  <p className="text-sm text-gray-600">Add image URLs to galleryImages array in GalleryClient.tsx</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage.src.replace('w=800', 'w=1920')}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{selectedImage.alt}</p>
            <p className="text-sm text-gray-300">{t.highQuality}</p>
          </div>
        </div>
      )}
    </div>
  )
}