'use client'

import { useEffect } from 'react'

// Adsterra 广告组件
export function Adsterra728x90() {
  useEffect(() => {
    // Load Adsterra script
    const script = document.createElement('script')
    script.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[src*="effectivecpmnetwork"]')
      if (existingScript && !document.querySelectorAll('script[src*="effectivecpmnetwork"]')[1]) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="w-full max-w-[728px] mx-auto my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}

export function Adsterra300x250() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div className="w-full max-w-[300px] mx-auto my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}

export function AdsterraSidebar() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div className="w-full my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}
