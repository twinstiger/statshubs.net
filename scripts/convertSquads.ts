// Script to convert qiuyuan.txt JSON data to TypeScript squads format
// Run with: npx ts-node scripts/convertSquads.ts

import * as fs from 'fs'
import * as path from 'path'

// Read the raw data file
const rawData = fs.readFileSync(path.join(__dirname, '..', 'downloads', 'qiuyuan.txt'), 'utf-8')

// Split by JSON objects (lines starting with {"code":0)
const jsonBlocks = rawData.split(/\n\n+/).filter(s => s.trim().startsWith('{"code"'))

console.log(`Found ${jsonBlocks.length} JSON blocks`)

// Team mapping based on line numbers from qiuyuan.txt
// Line 39: Turkey, 41: Paraguay, 43: Germany, 45: Ivory Coast, 59: Ecuador
// Line 66: Curacao, 69: Sweden, 73: Japan, 76: Netherlands, 80: Tunisia, 85: New Zealand, 88: Iran
const teamOrder = [
  'turkey', 'paraguay', 'germany', 'ivory-coast', 'ecuador',
  'curacao', 'sweden', 'japan', 'netherlands', 'tunisia',
  'new-zealand', 'iran'
]

// The qiuyuan.txt file also contains data for teams already in squads.ts
// These are at the beginning: Canada, Qatar, Bosnia, Scotland, Morocco, Brazil, Haiti, USA, Australia
// So we skip those first 9 entries
const skipCount = 9

const entries = jsonBlocks.slice(skipCount, skipCount + 12)
console.log(`Processing ${entries.length} teams: ${teamOrder.join(', ')}`)

interface RawPlayer {
  playerId: number
  nameEn: string
  nameZh: string
  age: number
  height: number
  weight: number
  shirtNumber: string
  nationality: string
  goals: number
  assists: number
  yellowCards: number
  redCards: number
  attPenGoal: number
  logo: string
}

interface RawManager {
  nameEn: string
  nameZh: string
  logo: string
  playerId: string | number
}

interface RawTeamData {
  back: RawPlayer[]
  forward: RawPlayer[]
  goalkeeper: RawPlayer[]
  manager: RawManager
  midfield: RawPlayer[]
}

function fixJson(str: string): string {
  // Remove Chinese characters that corrupt the JSON
  // Replace patterns like "国籍":"xxx" with proper field names
  return str
    .replace(/"国籍":"([^"]+)"/g, '"nationality":"$1"')
    .replace(/"身高":(\d+)/g, '"height":$1')
    .replace(/"体重":(\d+)/g, '"weight":$1')
    .replace(/"目标":(\d+)/g, '"goals":$1')
    .replace(/"助政":(\d+)/g, '"assists":$1')
    .replace(/"黄牌":(\d+)/g, '"yellowCards":$1')
    .replace(/"红牌":(\d+)/g, '"redCards":$1')
    .replace(/"球表号码":"([^"]+)"/g, '"shirtNumber":"$1"')
    .replace(/"队标":"([^"]+)"/g, '"logo":"$1"')
    .replace(/"身高":(\d+)/g, '"height":$1')
    .replace(/"年龄":(\d+)/g, '"age":$1')
    .replace(/"身體":(\d+)/g, '"weight":$1')
    .replace(/"球表号":(\d+)/g, '"shirtNumber":"$1"')
    .replace(/"标志":"([^"]+)"/g, '"logo":"$1"')
    .replace(/"目标数":(\d+)/g, '"goals":$1')
    .replace(/"助政数":(\d+)/g, '"assists":$1')
    .replace(/"黄牌数":(\d+)/g, '"yellowCards":$1')
    .replace(/"红牌数":(\d+)/g, '"redCards":$1')
    .replace(/"球员ID":(\d+)/g, '"playerId":$1')
    .replace(/"英文姓名":"([^"]+)"/g, '"nameEn":"$1"')
    .replace(/"中文姓名":"([^"]+)"/g, '"nameZh":"$1"')
    .replace(/"国籍":"([^"]+)"/g, '"nationality":"$1"')
    .replace(/"筝球数":(\d+)/g, '"attPenGoal":$1')
    .replace(/"筝球":(\d+)/g, '"attPenGoal":$1')
    .replace(/"球表码":"([^"]+)"/g, '"shirtNumber":"$1"')
    .replace(/"球员ID":(\d+)/g, '"playerId":$1')
    // Fix escaped quotes
    .replace(/\\"/g, '"')
    .replace(/"/g, '"')
    .replace(/,\}/g, '}')
    .replace(/,\]/g, ']')
}

function parseTeamData(jsonStr: string, teamSlug: string): string {
  try {
    // Try to fix the JSON
    let fixed = fixJson(jsonStr)

    // Extract the data object
    const match = fixed.match(/"data":\s*(\{[\s\S]*\})\s*[,}]?\s*"?message"?/)
    if (!match) {
      console.log(`Failed to extract data from ${teamSlug}`)
      return ''
    }

    let data: RawTeamData
    try {
      data = JSON.parse(match[1])
    } catch (e) {
      // Try alternative parsing
      const altMatch = fixed.match(/data\s*:\s*(\{[\s\S]*\})\s*[,}]/)
      if (!altMatch) {
        console.log(`Failed to parse JSON for ${teamSlug}`)
        return ''
      }
      data = JSON.parse(altMatch[1])
    }

    const convertPlayer = (p: RawPlayer) => ({
      playerId: p.playerId,
      nameEn: p.nameEn || '',
      nameZh: p.nameZh || '',
      age: p.age || 0,
      height: p.height || 0,
      weight: p.weight || 0,
      shirtNumber: String(p.shirtNumber || ''),
      nationality: p.nationality || '',
      goals: p.goals || 0,
      assists: p.assists || 0,
      yellowCards: p.yellowCards || 0,
      redCards: p.redCards || 0,
      attPenGoal: p.attPenGoal || 0,
      logo: p.logo || '',
    })

    const convertManager = (m: RawManager) => ({
      nameEn: m.nameEn || '',
      nameZh: m.nameZh || '',
      logo: m.logo || '',
      playerId: typeof m.playerId === 'string' ? m.playerId : String(m.playerId),
    })

    const result = `  '${teamSlug}': {
    manager: ${JSON.stringify(convertManager(data.manager), null, 4).replace(/\n/g, '\n    ').replace(/    \}$/, '    }')},
    goalkeeper: ${JSON.stringify((data.goalkeeper || []).map(convertPlayer), null, 4).replace(/\n/g, '\n    ').replace(/    \]$/, '    ]')},
    back: ${JSON.stringify((data.back || []).map(convertPlayer), null, 4).replace(/\n/g, '\n    ').replace(/    \]$/, '    ]')},
    midfield: ${JSON.stringify((data.midfield || []).map(convertPlayer), null, 4).replace(/\n/g, '\n    ').replace(/    \]$/, '    ]')},
    forward: ${JSON.stringify((data.forward || []).map(convertPlayer), null, 4).replace(/\n/g, '\n    ').replace(/    \]$/, '    ]')},
  },`

    return result
  } catch (e) {
    console.log(`Error processing ${teamSlug}: ${e}`)
    return ''
  }
}

// Process each team
entries.forEach((block, i) => {
  const teamSlug = teamOrder[i]
  if (!teamSlug) return

  const result = parseTeamData(block, teamSlug)
  if (result) {
    console.log(`\n=== ${teamSlug} ===`)
    console.log(result.substring(0, 200) + '...')
  }
})
