'use client'

import Link from 'next/link'

interface AffiliateCardProps {
  title: string
  description: string
  affiliateUrl: string
  imageUrl?: string
  price?: string
}

export default function AffiliateCard({ title, description, affiliateUrl, imageUrl, price }: AffiliateCardProps) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl">🛒</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          {price && <span className="font-bold text-lg">${price}</span>}
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            View on Amazon →
          </a>
        </div>
      </div>
    </div>
  )
}
