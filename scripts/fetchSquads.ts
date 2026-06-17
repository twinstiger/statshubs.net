// Script to fetch all team squad data from 163.com API
// Run this script with: npx ts-node scripts/fetchSquads.ts
// Or copy the API calls to browser console

import * as fs from 'fs'
import * as path from 'path'

// Team IDs mapping
const teamIds: Record<string, number> = {
  // Group A
  'mexico': 11764,
  'south-korea': 10586,
  'czech': 10979,
  'south-africa': 10310,
  // Group B
  'switzerland': 10871,
  'canada': 11138,
  'qatar': 11289,
  'bosnia': 10478,
  // Group C
  'scotland': 10868,
  'morocco': 11763,
  'brazil': 10477,
  'haiti': 11089,
  // Group D
  'usa': 13611,
  'australia': 13832,
  'turkey': 13337,
  'paraguay': 13449,
  // Group E
  'germany': 11746,
  'ivory-coast': 11141,
  'ecuador': 11082,
  'curacao': 33203,
  // Group F
  'sweden': 10869,
  'japan': 14529,
  'netherlands': 10870,
  'tunisia': 13613,
  // Group G
  'new-zealand': 14400,
  'iran': 14298,
  'belgium': 10316,
  'egypt': 13464,
  // Group H
  'uruguay': 13447,
  'saudi-arabia': 10584,
  'spain': 14227,
  'cape-verde': 11083,
  // Group I
  'senegal': 13365,
  'iraq': 11288,
  'norway': 13820,
  // Group J
  'algeria': 23383,
  'austria': 13226,
  'jordan': 11267,
  // Group K
  'portugal': 13152,
  'dr-congo': 11142,
  'uzbekistan': 10582,
  'colombia': 10476,
  // Group L
  'england': 11079,
  'croatia': 11606,
  'ghana': 11017,
  'panama': 12064,
}

// API URL template
const apiUrl = (teamId: number) =>
  `https://gw.m.163.com/base/worldCup/qatar/teamLineupInfo?teamId=${teamId}`

// Print all URLs for fetching
console.log('=== Copy these URLs to browser console or Postman ===\n')

Object.entries(teamIds).forEach(([slug, id]) => {
  console.log(`${slug}: ${apiUrl(id)}`)
})

console.log('\n=== Or use browser console script ===\n')

const script = `
// Fetch all squads
const teams = ${JSON.stringify(teamIds, null, 2)};

async function fetchAllSquads() {
  const results = {};
  for (const [slug, id] of Object.entries(teams)) {
    try {
      const res = await fetch(\`https://gw.m.163.com/base/worldCup/qatar/teamLineupInfo?teamId=\${id}\`);
      const data = await res.json();
      results[slug] = data;
      console.log(\`✓ \${slug}: fetched\`);
    } catch (e) {
      console.error(\`✗ \${slug}: \${e.message}\`);
    }
  }
  // Download as JSON
  const blob = new Blob([JSON.stringify(results, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'squads_raw.json';
  a.click();
}
fetchAllSquads();
`

console.log(script)

// If running in Node with https module
async function fetchSquads() {
  const https = require('https')

  const results: Record<string, any> = {}

  for (const [slug, id] of Object.entries(teamIds)) {
    const url = new URL(apiUrl(id))

    try {
      const data = await new Promise<string>((resolve, reject) => {
        https.get(url.toString(), { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
          let data = ''
          res.on('data', (chunk) => (data += chunk))
          res.on('end', () => resolve(data))
          res.on('error', reject)
        }).on('error', reject)
      })

      results[slug] = JSON.parse(data)
      console.log(`✓ ${slug}: fetched`)
    } catch (e: any) {
      console.error(`✗ ${slug}: ${e.message}`)
    }
  }

  // Save to file
  const outputPath = path.join(__dirname, '..', 'data', 'squads_raw.json')
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2))
  console.log(`\nSaved to ${outputPath}`)
}

// Uncomment to run:
// fetchSquads()
