'use client'

import { useEffect } from 'react'

interface AdsterraConfig {
  zoneId?: string
  format?: 'banner' | 'interstitial' | 'native'
}

export function useAdsterra(config: AdsterraConfig = {}) {
  useEffect(() => {
    // Adsterra 集成说明：
    // 1. 注册 Adsterra 账号: https://adsterra.com/
    // 2. 创建广告位获取 Zone ID
    // 3. 在 Adsterra 后台获取你的发布者 ID 和广告代码

    // 示例集成代码（需要替换为你的实际代码）:
    // const adsterraScript = document.createElement('script')
    // adsterraScript.src = '//ads.adsterra.com/display.php?zoneid=YOUR_ZONE_ID'
    // adsterraScript.async = true
    // document.body.appendChild(adsterraScript)

    console.log('Adsterra SDK ready - configure with your Zone ID')
  }, [config.zoneId])
}

// 预定义的广告位组件
export function AdsterraBanner() {
  return (
    <div className="w-full max-w-[728px] mx-auto">
      {/* 替换此占位符为 Adsterra 提供的实际广告代码 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center border border-gray-200">
        <p className="text-gray-500 text-sm">Adsterra Banner Ad</p>
        <p className="text-gray-400 text-xs mt-1">728x90</p>
      </div>
    </div>
  )
}

export function AdsterraInterstitial() {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4">
        <p className="text-gray-500 text-sm text-center">Adsterra Interstitial Ad</p>
      </div>
    </div>
  )
}
