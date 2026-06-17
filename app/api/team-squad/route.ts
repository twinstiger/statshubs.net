// API Route for fetching team squad data
// This avoids CORS issues by fetching from the server

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const teamId = searchParams.get('teamId')
  const teamSlug = searchParams.get('slug')

  if (!teamId && !teamSlug) {
    return NextResponse.json(
      { code: 400, message: 'Missing teamId or slug parameter' },
      { status: 400 }
    )
  }

  try {
    let id = teamId

    // If slug provided, get ID from mapping
    if (!id && teamSlug) {
      const { teamIds } = await import('@/lib/teamData')
      id = teamIds[teamSlug]?.toString()
    }

    if (!id) {
      return NextResponse.json(
        { code: 404, message: 'Team not found' },
        { status: 404 }
      )
    }

    // Fetch from 163.com API
    const apiUrl = `https://gw.m.163.com/base/worldCup/qatar/teamLineupInfo?teamId=${id}`
    console.log('Fetching team data from:', apiUrl)

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; statshubs/1.0)',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error fetching team data:', error)
    return NextResponse.json(
      { code: 500, message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
