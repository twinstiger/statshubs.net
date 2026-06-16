'use client'

import { useEffect, useRef } from 'react'

interface AdProps {
  size?: '728x90' | '300x250' | 'sidebar'
  containerId?: string
}

export function Adsterra728x90() {
  return <AdUnit size="728x90" containerId="container-c0bc28dc211ef406e670391da00e9e1a" />
}

export function Adsterra300x250() {
  return <AdUnit size="300x250" containerId="container-300x250" />
}

export function AdsterraSidebar() {
  return <AdUnit size="sidebar" containerId="container-sidebar" />
}

function AdUnit({ size, containerId }: AdProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Script 1: Main ad script
    const script1 = document.createElement('script')
    script1.async = true
    script1.setAttribute('data-cfasync', 'false')
    script1.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js'
    script1.id = `script-invoke-${containerId}`

    // Script 2: Additional ad script
    const script2 = document.createElement('script')
    script2.src = 'https://pl29763342.effectivecpmnetwork.com/76/24/27/762427d2c49841bf978fdff5e81cd616.js'
    script2.id = `script-extra-${containerId}`

    // Clean up existing scripts
    const existingScript1 = document.getElementById(`script-invoke-${containerId}`)
    const existingScript2 = document.getElementById(`script-extra-${containerId}`)
    if (existingScript1) existingScript1.remove()
    if (existingScript2) existingScript2.remove()

    if (containerRef.current) {
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(script1)
      containerRef.current.appendChild(script2)
    }
  }, [containerId])

  const dimensions = {
    '728x90': { width: 728, height: 90 },
    '300x250': { width: 300, height: 250 },
    'sidebar': { width: '100%', height: 250 }
  }

  const dim = dimensions[size as keyof typeof dimensions] || dimensions['728x90']

  return (
    <div className={`w-full max-w-[${typeof dim.width === 'number' ? dim.width + 'px' : dim.width}] mx-auto my-6`}>
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div
        ref={containerRef}
        id={containerId}
        className="bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          minHeight: typeof dim.height === 'number' ? dim.height : 90,
          width: '100%',
          maxWidth: typeof dim.width === 'number' ? dim.width : '100%'
        }}
      />
    </div>
  )
}