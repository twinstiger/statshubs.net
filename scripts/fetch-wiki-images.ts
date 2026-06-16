import fs from 'fs'

// 从 Wikipedia 获取世界杯图片
const WC2026_IMAGES = [
  // FIFA官方图片
  { title: 'FIFA World Cup Trophy', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Blatter_%26_Zidane_%282006_Final%29.jpg/800px-Blatter_%26_Zidane_%282006_Final%29.jpg', tags: ['trophy', 'fifa', 'worldcup'] },
  { title: 'World Cup Stadium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Campos_%28World_Cup_2014%29.jpg/1200px-Campos_%28World_Cup_2014%29.jpg', tags: ['stadium', 'venue', 'worldcup'] },
  { title: 'Football Match', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FIFA_World_Cup_2018_Match_Belgium_vs_Panama.jpg/1200px-FIFA_World_Cup_2018_Match_Belgium_vs_Panama.jpg', tags: ['match', 'football', 'game'] },
  { title: 'Soccer Stadium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Stade_de_Suisse_Wankdorf_01.jpg/1200px-Stade_de_Suisse_Wankdorf_01.jpg', tags: ['stadium', 'soccer', 'football'] },
  { title: 'World Cup Celebration', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/FIFA_World_Cup_2018_-_FINAL_-_France_-_Croatia_14.jpg/1200px-FIFA_World_Cup_2018_-_FINAL_-_France_-_Croatia_14.jpg', tags: ['celebration', 'final', 'worldcup'] },
  { title: 'Football Field', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Grass_and_football.jpg/1200px-Grass_and_football.jpg', tags: ['field', 'grass', 'pitch'] },
  { title: 'World Cup Poster', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2026_FIFA_World_Cup.svg/800px-2026_FIFA_World_Cup.svg.png', tags: ['poster', '2026', 'worldcup'] },
  { title: 'Goal Celebration', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Germany_1-0_Iran_%2832450988906%29.jpg/1200px-Germany_1-0_Iran_%2832450988906%29.jpg', tags: ['goal', 'celebration', 'score'] },
  { title: 'Stadium Lights', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Night_match_at_Lusail_Stadium.jpg/1200px-Night_match_at_Lusail_Stadium.jpg', tags: ['lights', 'night', 'stadium'] },
  { title: 'Team Flag', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_Brazil_%28bordered%29.svg/1200px-Flag_of_Brazil_%28bordered%29.svg.png', tags: ['brazil', 'flag', 'team'] },
  { title: 'Argentina Team', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Argentina_1994_World_Cup.jpg/1200px-Argentina_1994_World_Cup.jpg', tags: ['argentina', 'team', 'national'] },
  { title: 'World Cup Trophy', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/FIFA_Trophy_Brazil_2014.jpg/1200px-FIFA_Trophy_Brazil_2014.jpg', tags: ['trophy', 'fifa', 'gold'] },
]

// 生成 gallery 数据
const galleryImages = WC2026_IMAGES.map((img, index) => ({
  id: `wiki_${index + 1}`,
  title: img.title,
  description: `World Cup 2026 related image - ${img.title}`,
  url: img.url,
  thumbnail: img.url,
  category: 'matches',
  tags: img.tags,
}))

console.log(`Generated ${galleryImages.length} images from Wikipedia`)
console.log(JSON.stringify(galleryImages, null, 2))
