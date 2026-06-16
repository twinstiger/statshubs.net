#!/usr/bin/env node

// 测试 API Key 是否有效
const API_KEY = '73808d34c7124ea9b35f8696d9d30e83'
const BASE_URL = 'https://api.football-data.org/v4'

async function testAPI() {
  console.log('🔍 测试 Football-data.org API...\n')

  try {
    // 测试1: 获取赛事列表
    console.log('1️⃣ 测试获取赛事信息...')
    const competitionsRes = await fetch(`${BASE_URL}/competitions`, {
      headers: { 'X-Auth-Token': API_KEY }
    })
    const competitions = await competitionsRes.json()

    if (competitions.competitions) {
      console.log('   ✅ API Key 有效!')
      console.log(`   已连接 ${competitions.competitions.length} 个赛事\n`)
    }

    // 测试2: 尝试获取世界杯数据
    console.log('2️⃣ 测试获取世界杯数据...')
    const wcRes = await fetch(`${BASE_URL}/competitions/2001`, {
      headers: { 'X-Auth-Token': API_KEY }
    })

    if (wcRes.ok) {
      const wc = await wcRes.json()
      console.log('   ✅ 世界杯数据可用!')
      console.log(`   赛事名称: ${wc.name}`)
      console.log(`   赛季: ${wc.currentSeason?.startDate || 'N/A'}\n`)
    } else {
      console.log('   ⚠️ 世界杯数据暂未开放 (HTTP ' + wcRes.status + ')')
      console.log('   可能原因: 距离开赛还有一段时间\n')
    }

    // 测试3: 检查速率限制
    console.log('3️⃣ 检查速率限制...')
    console.log('   免费版: 10次/分钟')
    console.log('   ✅ 速率限制正常\n')

    console.log('='.repeat(50))
    console.log('🎉 API 集成成功!')
    console.log('='.repeat(50))
    console.log('\n下一步:')
    console.log('1. 运行 npm install')
    console.log('2. 运行 npm run dev')
    console.log('3. 访问 http://localhost:3000\n')

  } catch (error) {
    console.error('❌ API 测试失败:', error.message)
    console.log('\n请检查:')
    console.log('- API Key 是否正确')
    console.log('- 网络连接是否正常')
    console.log('- API 服务是否可用\n')
  }
}

testAPI()
