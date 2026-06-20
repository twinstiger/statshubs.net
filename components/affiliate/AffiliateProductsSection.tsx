'use client'

import { AffiliateSection } from '@/components/affiliate/AmazonAssociates'

export default function AffiliateProductsSection() {
  return (
    <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">🎁 Official World Cup Merchandise</h2>
      <p className="text-center text-gray-600 mb-6">
        Support your team with official World Cup merchandise from Amazon.
      </p>
      <AffiliateSection lang="en" title="Recommended Products" />
    </div>
  )
}
