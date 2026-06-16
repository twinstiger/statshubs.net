import { format, parseISO } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatMatchDate(dateStr: string, timeStr: string, timezone: string = 'UTC') {
  try {
    const dateTime = `${dateStr}T${timeStr}:00`
    return formatInTimeZone(parseISO(dateTime), timezone, 'EEE, MMM d, yyyy h:mm a')
  } catch {
    return `${dateStr} ${timeStr}`
  }
}

export function formatDate(dateStr: string, timezone: string = 'UTC') {
  try {
    return formatInTimeZone(parseISO(dateStr), timezone, 'MMMM d, yyyy')
  } catch {
    return dateStr
  }
}

export function formatTime(timeStr: string, timezone: string = 'UTC') {
  try {
    const [hours, minutes] = timeStr.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return format(date, 'h:mm a')
  } catch {
    return timeStr
  }
}

export function convertToTimezone(dateStr: string, timeStr: string, fromTz: string, toTz: string) {
  try {
    const dateTime = `${dateStr}T${timeStr}:00`
    return formatInTimeZone(parseISO(dateTime), toTz, 'h:mm a')
  } catch {
    return timeStr
  }
}

export function generateMatchId(home: string, away: string, date: string) {
  return `${home}-vs-${away}-${date}`.toLowerCase().replace(/\s+/g, '-')
}

export function getTeamSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export function getDaysUntil(dateStr: string) {
  const target = parseISO(dateStr)
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export function getStatusColor(status: string) {
  switch (status) {
    case 'live':
      return 'text-red-600 bg-red-100'
    case 'finished':
      return 'text-gray-600 bg-gray-100'
    default:
      return 'text-blue-600 bg-blue-100'
  }
}

export function getGroupColor(group: string) {
  const colors: Record<string, string> = {
    'A': 'bg-red-100 text-red-800',
    'B': 'bg-blue-100 text-blue-800',
    'C': 'bg-green-100 text-green-800',
    'D': 'bg-yellow-100 text-yellow-800',
    'E': 'bg-purple-100 text-purple-800',
    'F': 'bg-pink-100 text-pink-800',
    'G': 'bg-indigo-100 text-indigo-800',
    'H': 'bg-orange-100 text-orange-800',
  }
  return colors[group] || 'bg-gray-100 text-gray-800'
}

export function calculateAdvancement(teams: Array<{ points: number; goalDifference: number; goalsFor: number }>) {
  return teams
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
      return b.goalsFor - a.goalsFor
    })
    .slice(0, 2)
}

export function getReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}
