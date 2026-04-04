// ======================================
// Taehyung (V) Full Route - 5 Chapters
// ======================================

const TAEHYUNG_ROUTE = {
  // Chapter 1: 美術館的邂逅
  chapter1: {
    id: 'v_ch1',
    title: '第一章：美術館的邂逅',
    subtitle: 'Chapter 1: Gallery Encounter',
    requirement: { month: 2, fanLevel: 15 },
    triggerAction: 'drama',
    bgKey: 'gallery',
    scenes: [
      {
        bg: 'gallery',
        speaker: null,
        text: '二月的首爾還帶著冬天的寒意。聽說三清洞有一間很特別的攝影展，趁休假來看看。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '展覽的主題是「看不見的風景」——用底片相機拍攝的日常瞬間。\n安靜的展廳裡，只有我的腳步聲。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '一幅作品讓我停下了腳步——是一張逆光的照片，陽光穿過舊窗戶灑在空蕩的房間裡。\n明明什麼都沒有，卻讓人覺得很溫暖。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '「咔嚓——」\n\n身後傳來快門聲。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '我回頭——一個高個子的男生正舉著一台銀色的底片相機，鏡頭對準的方向是...我？',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他穿著一件oversize的米色大衣，裡面是深色高領毛衣。\n捲髮凌亂地落在額前，像是某本時尚雜誌裡走出來的人。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '???',
        text: '（低沉磁性的嗓音）啊...미안해요。',
        charEmoji: '🐻',
        charName: '神秘男生'
      },
      {
        bg: 'gallery',
        speaker: '???',
        text: '你站在那幅畫前面的樣子...光影剛好落在你的側臉上。\n太美了，身體就自動按下快門了。',
        charEmoji: '🐻',
        charName: '神秘男生'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他放下相機，露出完整的臉——\n\n深邃的眼睛、高挺的鼻樑、像是雕塑般完美的臉部線條...',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '等等...這張臉...這個聲音...這個氣質...\n\n是V...金泰亨...！？',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '（心臟狂跳，聲音微顫）那個...你、你是...태형 오빠...？',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他微微歪頭，像一隻被叫到名字的大型犬。然後，嘴角慢慢揚起一個帶著酒窩的方形笑容。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（把食指豎在嘴唇前，笑容像個淘氣的孩子）噓——今天的我只是一個喜歡攝影的普通人哦。',
        charEmoji: '🐻'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '📷「那張照片...可以讓我看看嗎？」（好奇地湊近）',
            affinity: 10,
            next: 'curious'
          },
          {
            text: '🤫「那我就當作不知道。繼續看展吧。」（微笑轉回畫作）',
            affinity: 5,
            next: 'composed'
          }
        ]
      },
      {
        id: 'curious',
        bg: 'gallery',
        speaker: '泰亨',
        text: '（眼睛亮了起來，開心地翻出相機螢幕）你看...這個角度，光剛好勾勒出你的輪廓。\n像是一幅文藝復興時期的肖像畫。',
        charEmoji: '🐻'
      },
      {
        id: 'composed',
        bg: 'gallery',
        speaker: '泰亨',
        text: '（愣了一下，然後笑得更深了）你是第一個不尖叫的人呢。\n...那我可以繼續陪你看展嗎？我想聽聽你對這些作品的想法。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '接下來的一個小時，我們並肩走過每一幅作品。\n他在每幅照片前都會停很久，像是在和作品對話。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（指著一張模糊的街景照）你覺得這張在講什麼？',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '好像...是關於記憶。越想抓住的東西越模糊，但那份感覺是真實的。',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（停下腳步，認真地看著我）...你很特別。大部分人看照片只看「漂不漂亮」，\n但你看到的是「感覺」。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（低頭看著手中的相機，聲音更低沉了）其實這個展...有幾張是我拍的。用匿名的方式投稿的。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '（驚訝）真的嗎？是哪幾張...？',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（神秘地笑了笑）秘密。但如果你猜對了...下次我再帶你去看更有趣的地方。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '展覽結束，他在門口停下來，把圍巾繞高，遮住了半張臉。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（深深看了我一眼）今天很開心。好久沒有遇到能一起「看見」的人了。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '對了——你剛才站在光裡的那張照片，我會好好保存的。\n（揮了揮手）다음에 또 만나요。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他轉身走進首爾二月的冷空氣裡，大衣的下擺被風吹起。\n\n明明只是短短一個小時，心裡卻像是多了一整座美術館的溫度。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '💕 泰亨好感度 +15\n🎨 解鎖CG：美術館的邂逅\n\n【第一章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 15,
        cg: 'v_ch1_real'
      }
    ]
  },

  // Chapter 2: 咖啡廳的重逢
  chapter2: {
    id: 'v_ch2',
    title: '第二章：咖啡廳的重逢',
    subtitle: 'Chapter 2: Cafe Reunion',
    requirement: { korean: 25, affinity: 15, month: 4 },
    triggerAction: 'drama',
    bgKey: 'cafe',
    scenes: [
      {
        bg: 'cafe',
        speaker: null,
        text: '四月的弘大，櫻花剛開始飄落。\n朋友推薦了一間隱藏在巷弄裡的復古咖啡廳，說裝潢很有味道。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '推開木門，咖啡的香氣混著老唱片的爵士樂流洩出來。\n牆上掛滿了舊電影海報和手繪插畫，暖黃的燈光讓一切像褪了色的夢。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '角落靠窗的位置，一個戴著貝雷帽的男生正低頭畫著什麼。\n他面前攤開一本素描簿，手指沾著一點炭筆的黑。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '那個側臉的線條...那個專注的神情...\n\n是泰亨。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他像是察覺到什麼，突然抬起頭——\n四目相對的瞬間，他的表情從專注變成驚喜，方形笑容瞬間綻放。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（猛地站起來，椅子差點倒了）是你！美術館的...！你怎麼在這裡？',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '（用韓語回答）어...우연이에요. 정말 신기하다...！',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（坐下來，撐著下巴看我）哇...你會說韓語了？上次在美術館的時候還只會說幾個單字呢。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（拉開旁邊的椅子）坐這裡。我幫你點我最喜歡的——這裡的手沖咖啡是首爾最好的。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '坐下後，目光不自覺落在他的素描簿上。\n是一幅畫到一半的風景——好像是某個歐洲小鎮的街角。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（發現我在看，有點不好意思地用手蓋住）啊...這個還沒畫完。是我去巴黎時記憶裡的畫面。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '我習慣把記憶畫下來。照片能記錄看到的東西，但畫畫能記錄「感受到的」東西。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他拿起炭筆，手指修長而靈巧，在紙上輕輕添了幾筆陰影。\n認真畫畫的他，和舞台上耀眼的V好像是完全不同的人。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（突然抬頭，眼神閃過一絲認真）對了...美術館那天的問題，你猜到了嗎？\n我拍的是哪幾張照片？',
        charEmoji: '🐻'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🎨「是那張逆光的空房間...還有那張雨天的窗戶。因為它們都有一種溫柔的孤獨感。」',
            affinity: 15,
            next: 'insightful'
          },
          {
            text: '😊「老實說...我猜不到。但每一張都讓我想更了解拍攝者的內心世界。」',
            affinity: 10,
            next: 'honest'
          }
        ]
      },
      {
        id: 'insightful',
        bg: 'cafe',
        speaker: '泰亨',
        text: '（手中的炭筆停住，眼睛慢慢睜大）...你怎麼知道的？',
        charEmoji: '🐻'
      },
      {
        id: 'honest',
        bg: 'cafe',
        speaker: '泰亨',
        text: '（嘴角微揚，目光變得溫暖）想了解我的內心世界...嗎？那可是很深很深的地方哦。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（翻開素描簿的新一頁，開始快速畫著什麼）你知道嗎...上次你走之後，\n我把那張照片沖洗出來了。放在我房間的牆上。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '（臉微微發熱）欸？為什麼...？',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（不抬頭，繼續畫著）因為那是我今年拍過最好的一張照片啊。\n一個人站在光裡，看著看不見的風景...那個畫面一直留在我腦海裡。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他畫完了，把素描簿轉過來給我看——\n\n是一幅速寫。畫的是一個女孩坐在咖啡廳裡，窗外有櫻花飄落。\n\n那個女孩...是我。就是此刻的我。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（把那一頁撕下來遞給我，露出孩子般的笑容）送你。\n當作我們第二次相遇的紀念。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: '泰亨',
        text: '（在紙的角落寫下一串號碼）這個...是我的私人號碼。\n想看畫展、想聊藝術、或是...想聽我的聲音的時候，都可以打給我。',
        charEmoji: '🐻'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他低沉的嗓音說出最後那句話的時候，耳朵微微泛紅。\n\n窗外的櫻花瓣飄進了咖啡廳，落在他的素描簿上。\n這個瞬間，好想永遠停留。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '💕 泰亨好感度 +20\n📱 獲得泰亨的私人號碼！\n🎨 獲得泰亨的手繪速寫\n\n【第二章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'v_ch2_real'
      }
    ]
  },

  // Chapter 3: 星空下的秘密
  chapter3: {
    id: 'v_ch3',
    title: '第三章：星空下的秘密',
    subtitle: 'Chapter 3: Secrets Under the Stars',
    requirement: { affinity: 35, month: 6 },
    triggerAction: 'any',
    bgKey: 'rooftop',
    scenes: [
      {
        bg: 'rooftop',
        speaker: null,
        text: '手機響了，是泰亨的語音訊息。\n\n低沉的聲音帶著一點興奮：\n「今晚的天空很特別。你現在有空嗎？我想帶你去一個地方。」',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '六月的首爾夜晚終於不再寒冷。他開著車來接我，\n車裡放著 Frank Sinatra 的老歌，他跟著輕輕哼唱。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（一邊開車一邊笑）你有沒有想過，如果能把星星的顏色畫下來，需要用幾種顏料？',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: '亮亮',
        text: '嗯...白色和黃色？',
        charEmoji: '💜'
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（搖頭）不對。星星有藍色、橘色、紅色，甚至有紫色的。\n人們只是太習慣用「白色」來想像星星了。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '車停在一棟舊公寓前。他帶我走上狹窄的樓梯，一路爬到了頂樓。\n\n推開鐵門的瞬間——',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '天台上鋪著一條格紋毯子，旁邊放著一台天文望遠鏡、一瓶紅酒、兩個玻璃杯。\n還有他的底片相機和一盒水彩顏料。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（張開雙臂，像是在展示自己的秘密基地）歡迎來到我的屋頂。\n這是首爾唯一能看到一點點星星的地方。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '我們躺在毯子上，他調好望遠鏡讓我看。透過鏡頭，真的能看到幾顆閃爍的星星。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（躺在旁邊，手枕在腦後，看著天空）你知道嗎...我小時候在大邱，每天晚上都能看到整片星空。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '來首爾以後，星星就看不到了。練習室的天花板、宿舍的牆壁...取代了天空。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（聲音變得很輕，像是在自言自語）有時候...我覺得自己像是活在一個很漂亮的玻璃箱裡。\n所有人都能看到我，但沒有人真的「看見」我。',
        charEmoji: '🐻'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌌「我看見了。不是舞台上的V，而是現在躺在星空下、想念大邱星星的金泰亨。」',
            affinity: 15,
            next: 'deep'
          },
          {
            text: '💫「那就打破玻璃箱吧。至少在我面前，你不需要任何框架。」',
            affinity: 12,
            next: 'brave'
          }
        ]
      },
      {
        id: 'deep',
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（慢慢轉頭看著我，月光照在他的眼睛裡，像是有星星碎在裡面）\n...你真的看見了嗎？',
        charEmoji: '🐻'
      },
      {
        id: 'brave',
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（沉默了幾秒，然後輕輕笑了，笑容裡有一點心疼）\n打破玻璃箱...你是第一個這樣跟我說的人。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他慢慢坐起來，從旁邊拿起水彩盤和畫筆。\n沾了幾種深深淺淺的藍色，開始在速寫本上畫起來。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（一邊畫一邊說）我一直在想...如果有一個人，能和我一起看到同樣的世界、\n感受到同樣的顏色...那該有多好。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（放下畫筆，轉過身，離我很近很近）量量...你好像就是那個人。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '夜風吹過，他伸出手，輕輕把被風吹亂的頭髮從我臉上撥開。\n\n他的手指微涼，但觸碰到臉頰的瞬間，像是有電流通過。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（低沉的嗓音在夜風裡特別清晰）我畫了很多東西...風景、建築、夢裡的場景。\n但最近...腦海裡一直浮現的只有你的臉。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: '亮亮',
        text: '（心跳快得快要窒息）泰亨...',
        charEmoji: '💜'
      },
      {
        bg: 'rooftop',
        speaker: '泰亨',
        text: '（輕輕握住我的手，把我的手指放在他的胸口）你聽...這裡。\n在你面前的時候，它總是跳得特別快。\n\n這是...只有你知道的秘密。',
        charEmoji: '🐻'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '首爾的星星很少，但此刻，他的眼睛裡有整片銀河。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '💕 泰亨好感度 +20\n🌙 解鎖CG：星空下的凝視\n💌 關係進展：曖昧期\n\n【第三章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'v_ch3_real'
      }
    ]
  },

  // Chapter 4: 美術館的私人導覽
  chapter4: {
    id: 'v_ch4',
    title: '第四章：美術館的私人導覽',
    subtitle: 'Chapter 4: Private Gallery Tour',
    requirement: { affinity: 55, month: 8 },
    triggerAction: 'any',
    bgKey: 'gallery',
    scenes: [
      {
        bg: 'gallery',
        speaker: null,
        text: '泰亨的訊息來得很突然。\n\n「明天下午三點，我來接你。穿你最喜歡的衣服。」\n\n沒有多餘的解釋，一如他總是充滿神秘感的風格。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他開車帶我穿過首爾的巷弄，最後停在一棟改建過的老倉庫前。\n灰色的外牆上沒有招牌，只有一扇厚重的鐵門。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（從口袋裡掏出鑰匙，臉上帶著期待的笑容）歡迎來到我的秘密基地。\n除了成員們...你是第一個來的人。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '門打開的瞬間，我屏住了呼吸——\n\n是一間私人藝廊。挑高的空間裡，四面牆上掛滿了畫作和攝影作品。\n有油畫、水彩、炭筆素描，還有一整面牆的底片照片。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（張開雙臂，在空間裡轉了一圈）這裡是我的小宇宙。\n所有我不知道怎麼用語言說出口的東西...都在這些畫裡。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他一幅一幅地帶我看。每張畫都有一個故事——\n練習生時期在宿舍窗邊畫的月亮、巡迴時在飯店畫的城市天際線、\n低潮期時畫的一片漆黑中一點螢火蟲般的光。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（站在一幅深藍色的抽象畫前）這張...是我最難過的時候畫的。\n那時候覺得全世界都很吵，只有顏料是安靜的。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（低下頭，聲音很輕）做偶像的這些年...有很多時候，笑容是練出來的。\n但畫畫的時候不用假裝。每一筆都是真的我。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '（眼眶微紅）謝謝你...願意讓我看到這些。看到真正的你。',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '走到藝廊的最深處，有一面白牆，上面只掛著一幅畫。\n被一塊深紅色的布蓋著。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（站在那幅畫前，背對我。聲音微微發顫）最後這一幅...是我最近才完成的。\n花了三個月。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（轉過身，深深看著我的眼睛）量量...在揭開之前，我想先告訴你一件事。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '從美術館遇見你的那天起，我的世界裡就多了一種顏色。\n一種我以前從來沒辦法調出來的顏色。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他輕輕拉下那塊紅布——\n\n是一幅油畫。畫的是一個女孩站在美術館裡，逆光的側臉被金色的光暈包圍。\n她的眼睛看著遠方，嘴角帶著一抹不自覺的微笑。\n\n那個女孩...是我。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '每一筆都細膩得像是在撫摸。光影的處理讓人物像是要從畫裡走出來。\n背景的美術館漸漸模糊，只有那個站在光裡的身影，清晰而溫柔。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '畫的右下角，用銀色的字寫著：\n\n「나의 빛 / 我的光 — TH」',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💕（眼淚掉了下來）「泰亨...這是我收過最珍貴的禮物。」',
            affinity: 15,
            next: 'tears'
          },
          {
            text: '🎨「你的眼睛裡...原來我是這個樣子的嗎？」（走近他）',
            affinity: 15,
            next: 'closeness'
          }
        ]
      },
      {
        id: 'tears',
        bg: 'gallery',
        speaker: '泰亨',
        text: '（走過來，用拇指輕輕擦掉我臉上的淚水）不要哭...不然我也會忍不住。',
        charEmoji: '🐻'
      },
      {
        id: 'closeness',
        bg: 'gallery',
        speaker: '泰亨',
        text: '（眼眶微紅，聲音沙啞）不...比這更美。\n但不管我怎麼畫，都畫不出你真正的樣子。\n因為你在我心裡的樣子...太耀眼了。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '陽光從天窗灑進來，金色的光灑在那幅畫上，也灑在他的臉上。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（輕輕牽起我的手，十指交扣）量量...我不擅長用語言表達。\n但這幅畫...就是我想對你說的所有話。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（額頭輕輕抵著我的額頭，閉上眼睛）讓我...就這樣靠近你一下。',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '在他的私人宇宙裡，被他的畫包圍著，感受著他的呼吸和心跳。\n\n原來被一個人看見、被一個人畫進畫裡——是這麼溫暖的事。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '💕 泰亨好感度 +25\n🌟 解鎖CG：畫中的告白\n💌 關係進展：心意相通\n🎨 解鎖泰亨專屬畫作\n\n【第四章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 25,
        cg: 'v_ch4_real'
      }
    ]
  },

  // Chapter 5: 永恆的一幅畫
  chapter5: {
    id: 'v_ch5',
    title: '第五章：永恆的一幅畫',
    subtitle: 'Chapter 5: An Eternal Painting',
    requirement: { affinity: 75, month: 12, savings: 80000, korean: 55, fanLevel: 65 },
    triggerAction: 'concert',
    bgKey: 'concert',
    scenes: [
      {
        bg: 'concert_ext',
        speaker: null,
        text: '十二月。首爾。\n\nBTS 年末演唱會「COLORS OF SOUL」。\n整整一年的追星之路，所有的努力都匯聚到了這一天。',
        charEmoji: null
      },
      {
        bg: 'concert_ext',
        speaker: null,
        text: '學韓語學到凌晨三點、拼命打工存機票錢、在美術館裡泡了無數個下午...\n\n全都是為了更靠近他的世界一點。',
        charEmoji: null
      },
      {
        bg: 'concert_ext',
        speaker: null,
        text: '手機亮了，是泰亨的訊息：\n\n「今天的演唱會...有一個驚喜是給你的。\n不要移開視線哦。🐻」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '場館裡的紫色ARMY BOMB亮起，像是一整片紫色的海洋。\n\n燈光暗下，音樂響起——全場尖叫聲震耳欲聾。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '泰亨站在舞台上，穿著一套深紫色的絲絨西裝，\n裡面是黑色襯衫，領口微微敞開。\n\n他在聚光燈下，像一幅最華麗的畫。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他的低音炮在整個場館裡迴盪，每一個音符都像是從靈魂深處湧出來的。\n他的眼神、他的舞步、他的每一個表情——都是藝術品。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '演唱會進入中段，燈光突然全部暗了下來。\n場內一片寂靜。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '巨大的LED螢幕亮了起來——\n\n播放的是一段VCR。畫面裡，泰亨坐在那間熟悉的私人藝廊裡。\n他的面前，是那幅畫——那幅畫著我的畫。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '泰亨',
        text: '（VCR裡的聲音，低沉而溫柔）\nARMY...今天我想跟大家分享一個故事。',
        charEmoji: '🐻'
      },
      {
        bg: 'concert',
        speaker: '泰亨',
        text: '（VCR）今年二月，我在一間美術館遇到了一個人。\n她站在一幅畫前面，光落在她的側臉上...那個瞬間，我按下了快門。',
        charEmoji: '🐻'
      },
      {
        bg: 'concert',
        speaker: '泰亨',
        text: '（VCR）從那天開始...我的世界多了一種顏色。\n一種我用盡所有顏料都調不出來的顏色。',
        charEmoji: '🐻'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '畫面緩緩放大那幅油畫——逆光中的女孩，溫柔的側臉，還有角落那行銀色的字：\n\n「나의 빛 / 我的光」\n\n全場四萬人的驚嘆聲此起彼落。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '泰亨',
        text: '（VCR，對著鏡頭微笑，眼眶微紅）\n如果你現在在看...我想讓全世界知道，你是我最美的作品。\n不——你是我的靈感。沒有你，就沒有這幅畫。',
        charEmoji: '🐻'
      },
      {
        bg: 'concert',
        speaker: null,
        text: 'VCR結束。全場還沉浸在感動中。\n\n然後——舞台中央亮起一束柔和的聚光燈。泰亨獨自站在那裡，手裡拿著麥克風。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '泰亨',
        text: '（對著四萬人的海洋，但目光穿過所有人，精準地停在我的位置）\n這首歌...是我寫給那幅畫裡的人。',
        charEmoji: '🐻'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '鋼琴前奏響起，溫柔而深沉。然後是他獨特的低音——\n\n「在色彩失去意義的日子裡\n你走進了我的畫框\n用你的存在為我的世界上色\n讓我相信 美好是真實的」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「如果我的人生是一座美術館\n那你就是牆上唯一的永久收藏\n不會被借走 不會被替換\n永遠掛在最靠近心臟的位置」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他唱完最後一個音，全場安靜了一秒——然後爆發出雷鳴般的掌聲和哭聲。\n\n而我的眼淚，從第一句就沒有停過。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '—— 散場後 ——',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '工作人員帶我穿過後台長長的走廊。每一步都覺得不真實。\n\n在走廊盡頭的門前，她停下腳步，輕輕推開門。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他站在房間中央。\n還穿著那套深紫色的西裝，頭髮微微被汗打濕，\n但眼神比舞台上任何一刻都要溫柔、都要認真。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '房間裡擺滿了畫——全部都是他畫的。\n有星空、有咖啡廳、有屋頂的月亮...全都是我們共同的記憶。\n\n最中間，是那幅「我的光」。真跡。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '泰亨',
        text: '（走向我，每一步都很慢，像是在確認這不是夢）\n量量...你來了。',
        charEmoji: '🐻'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜（衝進他的懷裡）「你剛才在台上...我哭了整場。金泰亨...你太犯規了。」',
            affinity: 20,
            next: 'embrace_ending'
          },
          {
            text: '🎨「那幅畫裡的人...想永遠留在你的世界裡。可以嗎？」（含淚微笑）',
            affinity: 20,
            next: 'art_ending'
          }
        ]
      },
      {
        id: 'embrace_ending',
        bg: 'backstage',
        speaker: '泰亨',
        text: '（緊緊抱住我，把臉埋在我的頭髮裡，低沉的聲音在耳邊震動）\n犯規的是你...為了走到我面前，你才是最勇敢的那個人。',
        charEmoji: '🐻'
      },
      {
        id: 'art_ending',
        bg: 'backstage',
        speaker: '泰亨',
        text: '（眼淚終於掉了下來，但嘴角是笑的）可以...當然可以。\n（捧起我的臉）你不是留在我的世界裡...你就是我的世界。',
        charEmoji: '🐻'
      },
      {
        bg: 'backstage',
        speaker: '泰亨',
        text: '（雙手捧著我的臉，用拇指擦去我的淚水）\n量量...我不會用華麗的語言告白。但我會用一輩子的時間畫你。',
        charEmoji: '🐻'
      },
      {
        bg: 'backstage',
        speaker: '泰亨',
        text: '每一天的你都不一樣。笑的你、哭的你、發呆的你、認真的你...\n我想把每一個瞬間都留下來。',
        charEmoji: '🐻'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他低下頭，額頭輕輕抵著我的額頭。\n呼吸交錯，距離近得能數清他的睫毛。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '泰亨',
        text: '（閉上眼睛，低沉的嗓音像是最溫柔的大提琴）\n사랑해...我的光。\n讓我成為你的永恆收藏，好嗎？',
        charEmoji: '🐻'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑著流淚，把他抱得更緊）好。永遠都好。',
        charEmoji: '💜'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '窗外的首爾夜空綻放著紫色的煙火。\n\n這一年的追星之路，讓我走進了一座最美的美術館。\n在那裡，有一幅畫，畫的是我們的故事。\n\n而這個故事...才剛開始。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '🎊 恭喜通關！泰亨路線完成！\n\n💕 好感度 MAX\n🏆 獲得成就：永恆的畫作\n🎨 解鎖：泰亨專屬主題曲完整版\n📸 解鎖：全部CG回憶\n\n✨ HAPPY ENDING ✨\n\n【第五章 · 完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        isFinalEnding: true,
        cg: 'v_ch5_real'
      }
    ]
  }
};
