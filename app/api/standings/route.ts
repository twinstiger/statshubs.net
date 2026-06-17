// API Route for fetching World Cup 2026 standings
import { NextResponse } from 'next/server'
import { standings2026 } from '@/data/standings'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const group = searchParams.get('group')

  try {
    if (group) {
      // Return specific group
      const groupStanding = standings2026.find((g) => g.group === group)
      if (!groupStanding) {
        return NextResponse.json(
          { code: 404, message: 'Group not found' },
          { status: 404 }
        )
      }
      return NextResponse.json({
        code: 0,
        data: groupStanding,
      })
    }

    // Return all standings
    return NextResponse.json({
      code: 0,
      data: standings2026,
    })
  } catch (error: any) {
    console.error('Error fetching standings:', error)
    return NextResponse.json(
      { code: 500, message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
