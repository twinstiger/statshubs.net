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
      id: 'panini-stickers-2026',
      asin: 'B0G3Y89LW9',
      name: '2026 Panini FIFA World Cup Sticker Collection Box - 50 Packs',
      description: 'Official FIFA World Cup trading stickers, collect and trade to complete your album',
      price: '$99.97',
      image: 'https://m.media-amazon.com/images/I/61fAVB2noeL._AC_UL320_.jpg'
    },
    {
      id: 'tripact-training-ball',
      asin: 'B0F9NNK4XB',
      name: 'Tripact 2026 World Flag Pattern Training Outdoor Football Size 5',
      description: 'Training football with world flag design, perfect for practice and tournaments',
      price: '$19.99',
      image: 'https://m.media-amazon.com/images/I/71zAlzxQ5HL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-ballers-zuru',
      asin: 'B0FJJ9KFBC',
      name: 'FIFA 2026 World Cup Ballers Series 1 Twin Pack by ZURU',
      description: 'Officially licensed, surprise unboxing soccer collectibles',
      price: '$18.87',
      image: 'https://m.media-amazon.com/images/I/81swiGCPoYL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-official-guide',
      asin: '1035439220',
      name: '2026 FIFA World Cup: The Official Guide',
      description: 'Official comprehensive guide to the 2026 World Cup tournament',
      price: '$20.14',
      image: 'https://m.media-amazon.com/images/I/81EIE4EXEML._AC_UL320_.jpg'
    },
    {
      id: 'exun-gift-basket',
      asin: 'B0G93DF8CJ',
      name: 'Exun 2026 Football Fan Gift Basket Set - 9 Pieces',
      description: 'Sports accessories combo including thermos, towel, keychain, hat, wristband and metal badge',
      price: '$29.99',
      image: 'https://m.media-amazon.com/images/I/81tIJw81t8L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-cards-legendary',
      asin: 'B0FHMW277V',
      name: 'Soccer Cards - 32 Unique Legendary Players',
      description: 'Fun for the whole family! Each pack contains different soccer cards for unforgettable moments',
      price: '$14.95',
      image: 'https://m.media-amazon.com/images/I/61a32wQhcvL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-poster-2026',
      asin: 'B0GY7N733C',
      name: '2026 World Cup Super Schedule Poster - 48 Teams Tournament Calendar',
      description: 'Large schedule poster with all 48 teams, perfect for home, office, bar and party decorations',
      price: '$22.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-tattoos',
      asin: 'B0GKX5847Z',
      name: 'Awinmay 45pcs Soccer Tattoo Stickers - World Cup Temporary Tattoos',
      description: 'World Cup themed temporary tattoos for kids, adults and teens, perfect party favors',
      price: '$8.99',
      image: 'https://m.media-amazon.com/images/I/813LjISRBIL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-hat-2026',
      asin: 'B0FYDPY2YF',
      name: '2026 World Cup Soccer Hat - Adjustable Baseball Cap',
      description: 'Officially licensed World Cup 2026 baseball cap, perfect accessory for fans',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/81Rd+2tL+eL._AC_UL320_.jpg'
    },
    {
      id: 'monopoly-fifa-deal',
      asin: 'B0FHL12F97',
      name: 'Monopoly Deal FIFA World Cup 2026 Edition',
      description: 'Officially licensed FIFA World Cup card game for 2-5 players, 15 minutes playtime',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    }
  ],
  es: [
    {
      id: 'panini-stickers-2026',
      asin: 'B0G3Y89LW9',
      name: 'Colección de Pegatinas Copa Mundial FIFA 2026 Panini - 50 Paquetes',
      description: 'Pegatinas oficiales de intercambio FIFA, colecciona e intercambia para completar tu álbum',
      price: '$99.97',
      image: 'https://m.media-amazon.com/images/I/61fAVB2noeL._AC_UL320_.jpg'
    },
    {
      id: 'tripact-training-ball',
      asin: 'B0F9NNK4XB',
      name: 'Tripact 2026 Balón de Entrenamiento con Patrón de Banderas Mundiales',
      description: 'Balón de entrenamiento con diseño de banderas del mundo, perfecto para práctica',
      price: '$19.99',
      image: 'https://m.media-amazon.com/images/I/71zAlzxQ5HL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-ballers-zuru',
      asin: 'B0FJJ9KFBC',
      name: 'FIFA 2026 Copa Mundial Ballers Serie 1 Doble Paquete by ZURU',
      description: 'Coleccionables de fútbol con licencia oficial, sorpresa y apertura',
      price: '$18.87',
      image: 'https://m.media-amazon.com/images/I/81swiGCPoYL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-official-guide',
      asin: '1035439220',
      name: 'Copa Mundial FIFA 2026: La Guía Oficial',
      description: 'Guía completa oficial del torneo Copa Mundial 2026',
      price: '$20.14',
      image: 'https://m.media-amazon.com/images/I/81EIE4EXEML._AC_UL320_.jpg'
    },
    {
      id: 'exun-gift-basket',
      asin: 'B0G93DF8CJ',
      name: 'Exun 2026 Cesta de Regalo de Aficionado al Fútbol - 9 Piezas',
      description: 'Combo de accesorios deportivos incluye termo, toalla, llavero, gorra, pulsera y insignia',
      price: '$29.99',
      image: 'https://m.media-amazon.com/images/I/81tIJw81t8L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-cards-legendary',
      asin: 'B0FHMW277V',
      name: 'Tarjetas de Fútbol - 32 Jugadores Legendarios Únicos',
      description: '¡Diversión para toda la familia! Cada paquete contiene diferentes tarjetas de fútbol',
      price: '$14.95',
      image: 'https://m.media-amazon.com/images/I/61a32wQhcvL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-poster-2026',
      asin: 'B0GY7N733C',
      name: 'Póster Extra Grande Calendario Copa Mundial 2026 - 48 Equipos',
      description: 'Póster de horario con los 48 equipos, perfecto para hogar, oficina y fiestas',
      price: '$22.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-tattoos',
      asin: 'B0GKX5847Z',
      name: 'Awinmay 45pcs Pegatinas de Tatuaje de Fútbol - Tatuajes Temporales Copa Mundial',
      description: 'Tatuajes temporales temáticos de Copa Mundial para niños, adultos y adolescentes',
      price: '$8.99',
      image: 'https://m.media-amazon.com/images/I/813LjISRBIL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-hat-2026',
      asin: 'B0FYDPY2YF',
      name: 'Gorra de Fútbol Copa Mundial 2026 - Gorra Béisbol Ajustable',
      description: 'Gorra oficial con licencia Copa Mundial 2026, accesorio perfecto para aficionados',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/81Rd+2tL+eL._AC_UL320_.jpg'
    },
    {
      id: 'monopoly-fifa-deal',
      asin: 'B0FHL12F97',
      name: 'Monopoly Deal FIFA Copa Mundial 2026 Edición',
      description: 'Juego de cartas FIFA Copa Mundial con licencia oficial para 2-5 jugadores',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    }
  ],
  fr: [
    {
      id: 'panini-stickers-2026',
      asin: 'B0G3Y89LW9',
      name: 'Collection de Stickers Coupe du Monde FIFA 2026 Panini - 50 Paquets',
      description: 'Stickers officiels FIFA, collectionnez et échangez pour compléter votre album',
      price: '$99.97',
      image: 'https://m.media-amazon.com/images/I/61fAVB2noeL._AC_UL320_.jpg'
    },
    {
      id: 'tripact-training-ball',
      asin: 'B0F9NNK4XB',
      name: 'Tripact 2026 Ballon d\'Entraînement Drapeaux Monde Size 5',
      description: 'Ballon d\'entraînement avec motif drapeaux mondiaux, parfait pour la pratique',
      price: '$19.99',
      image: 'https://m.media-amazon.com/images/I/71zAlzxQ5HL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-ballers-zuru',
      asin: 'B0FJJ9KFBC',
      name: 'FIFA 2026 Coupe du Monde Ballers Série 1 Paquet Double by ZURU',
      description: 'Collectibles de football sous licence officielle, surprise et déballage',
      price: '$18.87',
      image: 'https://m.media-amazon.com/images/I/81swiGCPoYL._AC_UL320_.jpg'
    },
    {
      id: 'fifa-official-guide',
      asin: '1035439220',
      name: 'Coupe du Monde FIFA 2026: Le Guide Officiel',
      description: 'Guide complet officiel du tournoi Coupe du Monde 2026',
      price: '$20.14',
      image: 'https://m.media-amazon.com/images/I/81EIE4EXEML._AC_UL320_.jpg'
    },
    {
      id: 'exun-gift-basket',
      asin: 'B0G93DF8CJ',
      name: 'Exun 2026 Panier Cadeau Aficionado du Football - 9 Pièces',
      description: 'Combo d\'accessoires sportifs incluant thermos, serviette, porte-clés, casquette',
      price: '$29.99',
      image: 'https://m.media-amazon.com/images/I/81tIJw81t8L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-cards-legendary',
      asin: 'B0FHMW277V',
      name: 'Cartes de Football - 32 Joueurs Légendaires Uniques',
      description: 'Fun pour toute la famille! Chaque paquet contient différentes cartes de football',
      price: '$14.95',
      image: 'https://m.media-amazon.com/images/I/61a32wQhcvL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-poster-2026',
      asin: 'B0GY7N733C',
      name: 'Grande Affiche Calendrier Coupe du Monde 2026 - 48 Équipes',
      description: 'Affiche calendrier avec les 48 équipes, parfaite pour maison, bureau et fiestas',
      price: '$22.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    },
    {
      id: 'soccer-tattoos',
      asin: 'B0GKX5847Z',
      name: 'Awinmay 45pcs Tatouages Temporaires Football - Coupe du Monde',
      description: 'Tatouages temporaires à thème Coupe du Monde pour enfants, adultes et adolescents',
      price: '$8.99',
      image: 'https://m.media-amazon.com/images/I/813LjISRBIL._AC_UL320_.jpg'
    },
    {
      id: 'worldcup-hat-2026',
      asin: 'B0FYDPY2YF',
      name: 'Casquette Football Coupe du Monde 2026 - Casquette Baseball Ajustable',
      description: 'Casquette sous licence officielle Coupe du Monde 2026, accessoire parfait pour fans',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/81Rd+2tL+eL._AC_UL320_.jpg'
    },
    {
      id: 'monopoly-fifa-deal',
      asin: 'B0FHL12F97',
      name: 'Monopoly Deal FIFA Coupe du Monde 2026 Édition',
      description: 'Jeu de cartes FIFA Coupe du Monde sous licence officielle pour 2-5 joueurs',
      price: '$9.99',
      image: 'https://m.media-amazon.com/images/I/71YCYJ8OF4L._AC_UL320_.jpg'
    }
  ]
}

// 产品推荐组件
export function ProductRecommendation({ lang = 'en' }: { lang?: string }) {
  const link = generateAmazonLink('B0G3Y89LW9', lang)

  return (
    <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center border overflow-hidden">
          <img src="https://m.media-amazon.com/images/I/61fAVB2noeL._AC_UL320_.jpg" alt="World Cup Stickers" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">2026 Panini FIFA World Cup Sticker Collection</h3>
          <p className="text-sm text-gray-600 mb-2">Official FIFA licensed - 50 sticker packs with exclusive orange parallel cards</p>
          <p className="text-lg font-bold text-blue-600 mb-3">$99.97</p>
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
