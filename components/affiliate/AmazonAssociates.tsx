'use client'

import Link from 'next/link'

// Amazon Associates 联盟链接配置
const AMAZON_TAGS = {
  en: 'statshubs-20',
  es: 'statshubs-20',
  fr: 'statshubs-20',
  de: 'statshubs-20',
  ja: 'statshubs-20',
  pt: 'statshubs-20',
}

interface AffiliateProduct {
  id: string
  asin: string
  name: string
  description: string
  price?: string
  image: string
}

// 生成 Amazon 联盟链接
export function generateAmazonLink(asin: string, lang: string = 'en'): string {
  const tag = AMAZON_TAGS[lang as keyof typeof AMAZON_TAGS] || AMAZON_TAGS.en
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`
}

// Amazon 联盟链接组件
export function AmazonLink({ asin, lang = 'en', children, className = '', newTab = true }: {
  asin: string
  lang?: string
  children: React.ReactNode
  className?: string
  newTab?: boolean
}) {
  const link = generateAmazonLink(asin, lang)

  return (
    <a
      href={link}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  )
}

// 产品卡片组件
export function ProductCard({ product, lang = 'en' }: { product: AffiliateProduct, lang?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
        {product.price && (
          <p className="text-lg font-bold text-blue-600 mb-2">{product.price}</p>
        )}
        <AmazonLink asin={product.asin} lang={lang} className="block">
          <span className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-center text-sm font-semibold py-2 px-4 rounded transition-colors">
            Buy on Amazon
          </span>
        </AmazonLink>
      </div>
    </div>
  )
}

// 足球/世界杯相关产品
export const affiliateProducts: Record<string, AffiliateProduct[]> = {
  en: [
    {
      id: 'worldcup-ball-2026',
      asin: 'B09V3KXJPB',
      name: 'Adidas Al Rihla - Official World Cup 2026 Ball',
      description: 'Official match ball for FIFA World Cup 2026',
      price: '$165.00',
      image: 'https://m.media-amazon.com/images/I/51H0x6qN0XL._AC_SL1500_.jpg'
    },
    {
      id: 'jersey-generic',
      asin: 'B08XZH3ZKK',
      name: 'World Cup Team Jersey - Premium Replica',
      description: 'Official replica national team jersey',
      price: '$89.99',
      image: 'https://m.media-amazon.com/images/I/71X3V3L+qOL._AC_SL1500_.jpg'
    }
  ]
}

// 产品推荐组件
export function ProductRecommendation({ lang = 'en' }: { lang?: string }) {
  const link = generateAmazonLink('B09V3KXJPB', lang)

  return (
    <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center border">
          <span className="text-4xl">⚽</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Official World Cup 2026 Ball</h3>
          <p className="text-sm text-gray-600 mb-2">Adidas Al Rihla - Official Match Ball</p>
          <p className="text-lg font-bold text-blue-600 mb-3">$165.00</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Buy on Amazon →
          </a>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        * We may earn a commission from qualifying purchases made through our affiliate links.
      </p>
    </div>
  )
}
