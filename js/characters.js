// ======================================
// BTS Star Chase - Character Definitions
// ======================================

const CHARACTERS = {
  jungkook: {
    id: 'jungkook',
    name: '田柾國',
    nameKr: '전정국 Jeon Jungkook',
    nameShort: '柾國',
    age: 27,
    position: 'Main Vocalist · Lead Dancer',
    emoji: '🦋',
    color: '#9B59B6',
    personality: ['黃金忙內', '運動健將', '害羞溫柔', '多才多藝', 'competitive'],
    visualDesc: '肌肉線條明顯、鹿眼、唇環、右臂刺青袖、暗色波浪髮',
    theme: '從粉絲到被看見的那個人',
    charmPoints: '健身時的認真、舞台上的爆發力、私下的害羞反差萌',
    locked: false,
    encounterAction: 'exercise',
    affinityItems: ['運動裝備', 'Iron Man周邊', '拍立得相片'],
    chapters: 5,
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  taehyung: {
    id: 'taehyung',
    name: '金泰亨',
    nameKr: '김태형 Kim Taehyung / V',
    nameShort: '泰亨',
    age: 28,
    position: 'Vocalist · Visual',
    emoji: '🐻',
    color: '#2ECC71',
    personality: ['藝術靈魂', '世界觀獨特', '深沉嗓音', '時尚icon'],
    visualDesc: '雕塑般五官、捲髮、文青穿搭、相機不離手',
    theme: '在美術館相遇的靈魂',
    charmPoints: '獨特的審美觀、低音殺、突然的深情凝視',
    locked: false,
    encounterAction: 'drama',
    affinityItems: ['復古相機', '美術畫冊', '香水'],
    chapters: 5,
    bgGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
  },

  jimin: {
    id: 'jimin',
    name: '朴智旻',
    nameKr: '박지민 Park Jimin',
    nameShort: '智旻',
    age: 28,
    position: 'Lead Vocalist · Main Dancer',
    emoji: '🌙',
    color: '#E74C3C',
    personality: ['完美主義舞者', '溫柔體貼', '月亮眼笑', '反差魅力'],
    visualDesc: '白金色髮、纖細但肌肉線條、絲質襯衫、優雅氣質',
    theme: '在練習室偶遇的舞蹈緣分',
    charmPoints: '眼笑殺、舞蹈時的專注、對人的細膩關懷',
    locked: false,
    encounterAction: 'dance',
    affinityItems: ['舞鞋', '護手霜', '月亮項鍊'],
    chapters: 5,
    bgGradient: 'linear-gradient(135deg, #f5576c 0%, #ff6b9d 100%)'
  },

  suga: {
    id: 'suga',
    name: '閔玧其',
    nameKr: '민윤기 Min Yoongi / Suga',
    nameShort: '玧其',
    age: 31,
    position: 'Lead Rapper · Producer',
    emoji: '🐱',
    color: '#3498DB',
    personality: ['天才製作人', '毒舌暖心', '貓系男友', '工作狂'],
    visualDesc: '黑髮薄荷挑染、貓眼、街頭風穿搭、耳機不離身',
    theme: '錄音室裡的深夜知己',
    charmPoints: '冷酷外表下的溫柔、對音樂的執著、冷幽默',
    locked: false,
    encounterAction: 'work',
    affinityItems: ['高級耳機', '黑咖啡', '貓咪周邊'],
    chapters: 5,
    bgGradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'
  },

  rm: {
    id: 'rm',
    name: '金南俊',
    nameKr: '김남준 Kim Namjoon / RM',
    nameShort: '南俊',
    age: 30,
    position: 'Leader · Main Rapper',
    emoji: '📚',
    color: '#F39C12',
    personality: ['知性leader', '哲學家', 'dimple殺', '破壞王'],
    visualDesc: '圓框眼鏡、高個子、大地色系穿搭、手拿書本',
    theme: '書店裡的知性邂逅',
    charmPoints: '酒窩微笑、深度對話、在小事上笨拙的反差',
    locked: false,
    encounterAction: 'korean',
    affinityItems: ['詩集', '哲學書', '手工藝品'],
    chapters: 5,
    bgGradient: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)'
  }
};

const PROTAGONIST = {
  name: '王亮亮',
  age: 24,
  job: '科技公司行銷助理',
  personality: '開朗、努力、有夢想、偶爾迷糊可愛',
  emoji: '💜'
};
