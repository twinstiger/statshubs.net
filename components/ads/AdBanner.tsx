'use client'

interface AdBannerProps {
  size: '728x90' | '300x250' | '160x600'
  className?: string
}

export default function AdBanner({ size, className = '' }: AdBannerProps) {
  const dimensions = {
    '728x90': { width: 728, height: 90, max: 'max-w-[728px]' },
    '300x250': { width: 300, height: 250, max: 'max-w-[300px]' },
    '160x600': { width: 160, height: 600, max: 'max-w-[160px]' },
  }

  const { width, height, max } = dimensions[size]

  return (
    <div className={`${max} mx-auto ${className}`}>
      {/* Adsterra/Monetag 广告位容器 */}
      <div
        id={`adsterra-${size}-${Math.random().toString(36).substr(2, 9)}`}
        data-width={width}
        data-height={height}
        className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        style={{ minHeight: `${height}px` }}
      >
        {/* 实际集成时替换为 Adsterra/Monetag 的脚本 */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center text-gray-400 p-4">
            <div className="text-2xl mb-2">📢</div>
            <p className="text-sm font-medium">Advertisement</p>
            <p className="text-xs mt-1">{width}x{height}</p>
            <p className="text-xs mt-2 text-gray-400">Adsterra/Monetag</p>
          </div>
        </div>
      </div>
    </div>
  )
}
