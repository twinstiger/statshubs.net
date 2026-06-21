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
import Image from 'next/image'

export function ProductCard({ product, lang = 'en' }: { product: AffiliateProduct, lang?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-50 p-4 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          unoptimized
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
      asin: 'B0BSHDWR8K',
      name: 'Adidas World Cup 2026 Official Match Ball',
      description: 'Official FIFA World Cup match ball',
      price: '$149.99',
      image: 'https://m.media-amazon.com/images/I/61JvNbHLWQL._AC_SL1500_.jpg'
    },
    {
      id: 'fifa-ps5',
      asin: 'B0B14F5KLM',
      name: 'EA Sports FC 25 - World Cup Edition',
      description: 'Official video game with World Cup mode',
      price: '$69.99',
      image: 'https://m.media-amazon.com/images/I/81MTv5eRLNL._AC_SL1500_.jpg'
    },
    {
      id: 'worldcup-flag-set',
      asin: 'B09V3KXJPB',
      name: 'World Cup 2026 Flag Set - 48 Teams',
      description: 'Mini flags for all participating nations',
      price: '$19.99',
      image: 'https://m.media-amazon.com/images/I/71FHrB8vSEL._AC_SL1500_.jpg'
    },
    {
      id: 'streaming-device',
      asin: 'B09JFCF7V3',
      name: 'Fire TV Stick 4K Max - Stream World Cup',
      description: '4K streaming for watching matches online',
      price: '$54.99',
      image: 'https://m.media-amazon.com/images/I/51MFEJVrRcL._AC_SL1500_.jpg'
    },
    {
      id: 'tv-soundbar',
      asin: 'B08M2CL8BK',
      name: 'Sonos Ray Soundbar - Game Day Audio',
      description: 'Premium soundbar for immersive match audio',
      price: '$279.00',
      image: 'https://m.media-amazon.com/images/I/71DhG6x5XpL._AC_SL1500_.jpg'
    },
    {
      id: 'hd-projector',
      asin: 'B08TFS8Q6L',
      name: 'BenQ HD Projector - Big Screen Viewing',
      description: 'Projector for watching games on a giant screen',
      price: '$649.00',
      image: 'https://m.media-amazon.com/images/I/71vZ6W2GJEL._AC_SL1500_.jpg'
    },
    {
      id: 'worldcup-jersey',
      asin: 'B0B4XZH7KM',
      name: 'World Cup Premium Jersey - Your Team',
      description: 'Official replica national team jersey',
      price: '$79.99',
      image: 'https://m.media-amazon.com/images/I/71X3V3L+qOL._AC_SL1500_.jpg'
    },
    {
      id: 'worldcup-cap',
      asin: 'B09R6J9KLM',
      name: 'World Cup 2026 Official Cap',
      description: 'Official tournament baseball cap',
      price: '$24.99',
      image: 'https://m.media-amazon.com/images/I/61xgZC3VKYL._AC_SL1500_.jpg'
    }
  ],
  es: [
    {
      id: 'pelota-mundial',
      asin: 'B0BSHDWR8K',
      name: 'Adidas Balón Oficial Copa Mundial 2026',
      description: 'Balón oficial del partido para la Copa Mundial FIFA 2026',
      price: '$149.99',
      image: 'https://m.media-amazon.com/images/I/61JvNbHLWQL._AC_SL1500_.jpg'
    },
    {
      id: 'fifa-juego',
      asin: 'B0B14F5KLM',
      name: 'EA Sports FC 25 - Edición Copa Mundial',
      description: 'Videojuego oficial con modo Copa Mundial',
      price: '$69.99',
      image: 'https://m.media-amazon.com/images/I/81MTv5eRLNL._AC_SL1500_.jpg'
    },
    {
      id: 'banderas-mundial',
      asin: 'B09V3KXJPB',
      name: 'Pack Banderas Copa Mundial 2026 - 48 Equipos',
      description: 'Mini banderas para todas las naciones participantes',
      price: '$19.99',
      image: 'https://m.media-amazon.com/images/I/71FHrB8vSEL._AC_SL1500_.jpg'
    }
  ],
  fr: [
    {
      id: 'ballon-mondial',
      asin: 'B0BSHDWR8K',
      name: 'Adidas Ballon Officiel Coupe du Monde 2026',
      description: 'Ballon officiel pour la Coupe du Monde FIFA 2026',
      price: '€149.99',
      image: 'https://m.media-amazon.com/images/I/61JvNbHLWQL._AC_SL1500_.jpg'
    },
    {
      id: 'fifa-jeu',
      asin: 'B0B14F5KLM',
      name: 'EA Sports FC 25 - Édition Coupe du Monde',
      description: 'Jeu vidéo officiel avec mode Coupe du Monde',
      price: '€69.99',
      image: 'https://m.media-amazon.com/images/I/81MTv5eRLNL._AC_SL1500_.jpg'
    },
    {
      id: 'drapeaux-mondial',
      asin: 'B09V3KXJPB',
      name: 'Pack Drapeaux Coupe du Monde 2026 - 48 Équipes',
      description: 'Mini drapeaux pour toutes les nations participantes',
      price: '€19.99',
      image: 'https://m.media-amazon.com/images/I/71FHrB8vSEL._AC_SL1500_.jpg'
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

// 产品展示区域组件
export function AffiliateSection({ lang = 'en', title = 'Recommended Products' }: { lang?: string, title?: string }) {
  const products = affiliateProducts[lang] || affiliateProducts.en

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} lang={lang} />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">
        * We may earn a commission from qualifying purchases made through our affiliate links. Prices may vary.
      </p>
    </div>
  )
}
