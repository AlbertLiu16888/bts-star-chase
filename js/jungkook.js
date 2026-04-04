// ======================================
// Jungkook Full Route - 5 Chapters
// ======================================

const JUNGKOOK_ROUTE = {
  // Chapter 1: 命運的相遇
  chapter1: {
    id: 'jk_ch1',
    title: '第一章：命運的相遇',
    subtitle: 'Chapter 1: Fateful Meeting',
    requirement: { month: 2, fanLevel: 15 },
    triggerAction: 'exercise',
    bgKey: 'gym',
    scenes: [
      {
        bg: 'gym',
        speaker: null,
        text: '今天下班後來健身房運動，想著要維持好體力才能追星啊...',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '隔壁跑步機上有個戴著棒球帽和口罩的男生，身材...也太好了吧？',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '寬闊的肩膀、結實的手臂線條在運動背心下若隱若現...不行不行不能一直偷看！',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '突然，他的無線耳機掉落，滾到了我的跑步機旁邊。',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '我撿起來的瞬間，手機螢幕亮了——正在播放的是 BTS 的「Dynamite」！',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: '亮亮',
        text: '（心跳加速）這、這首歌...！',
        charEmoji: '💜'
      },
      {
        bg: 'gym',
        speaker: '???',
        text: '啊...謝謝。',
        charEmoji: '🦋',
        charName: '神秘男生'
      },
      {
        bg: 'gym',
        speaker: null,
        text: '他低下頭接過耳機，帽沿下露出的眼睛——圓圓的、像小鹿一樣的眼睛...',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '等等...這雙眼睛...這個下顎線...還有手臂上若隱若現的刺青...不會吧？！',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: '亮亮',
        text: '（聲音顫抖）那個...你、你是不是...정국...？',
        charEmoji: '💜'
      },
      {
        bg: 'gym',
        speaker: null,
        text: '他猛地抬頭，眼神閃過一絲驚慌，隨即變成了溫柔的笑意。',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: '柾國',
        text: '噓——（食指放在嘴唇上）被發現了呢。你是 ARMY 嗎？',
        charEmoji: '🦋'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜「是的！我是你的超級粉絲！」（興奮但壓低聲音）',
            affinity: 5,
            next: 'enthusiastic'
          },
          {
            text: '🤫「嗯...我會保密的，請放心。」（冷靜微笑）',
            affinity: 10,
            next: 'calm'
          }
        ]
      },
      {
        id: 'enthusiastic',
        bg: 'gym',
        speaker: '柾國',
        text: '（露出兔子笑）謝謝你喜歡我們的音樂。但是...可以幫我保密嗎？我難得可以安靜運動...',
        charEmoji: '🦋'
      },
      {
        id: 'calm',
        bg: 'gym',
        speaker: '柾國',
        text: '（眼睛亮了起來）真的嗎？太好了...難得遇到這麼冷靜的 ARMY。你常來這間健身房嗎？',
        charEmoji: '🦋'
      },
      {
        bg: 'gym',
        speaker: '亮亮',
        text: '（心臟要跳出來了）對...我、我下班後常來...',
        charEmoji: '💜'
      },
      {
        bg: 'gym',
        speaker: '柾國',
        text: '（搓了搓後頸，有點害羞）那...說不定我們會再遇到。我這幾天都在台北拍攝。',
        charEmoji: '🦋'
      },
      {
        bg: 'gym',
        speaker: '柾國',
        text: '對了——你的跑步姿勢...膝蓋角度可以再調整一下，這樣比較不會受傷。（認真指導）',
        charEmoji: '🦋'
      },
      {
        bg: 'gym',
        speaker: null,
        text: '全世界最受歡迎的偶像，正在教我怎麼跑步...這是真實的嗎？',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: '柾國',
        text: '（戴回耳機前停頓）...ARMY啊，謝謝你沒有尖叫。下次見。',
        charEmoji: '🦋'
      },
      {
        bg: 'gym',
        speaker: null,
        text: '他露出了那個招牌的兔子微笑，然後轉身繼續運動。\n\n我的心跳...完全停不下來。',
        charEmoji: null
      },
      {
        bg: 'gym',
        speaker: null,
        text: '💕 柾國好感度 +15\n🌟 追星熱度大幅上升！\n\n【第一章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 15,
        cg: 'jk_ch1_real'
      }
    ]
  },

  // Chapter 2: 再次相遇
  chapter2: {
    id: 'jk_ch2',
    title: '第二章：再次相遇',
    subtitle: 'Chapter 2: Meeting Again',
    requirement: { korean: 30, affinity: 20, month: 4 },
    triggerAction: 'fansign',
    bgKey: 'fansign',
    scenes: [
      {
        bg: 'fansign',
        speaker: null,
        text: '存了好久的錢，終於買到首爾簽售會的名額了！雙手緊握著專輯，排在長長的隊伍中...',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '心跳隨著隊伍前進越來越快。前面的粉絲們有的在哭，有的笑得好幸福...',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '終於...輪到我了。坐在桌子對面的柾國穿著白色襯衫，袖子捲起露出手臂的刺青...',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: '柾國',
        text: '（禮貌微笑）안녕하세요~ 名字怎麼寫呢？',
        charEmoji: '🦋'
      },
      {
        bg: 'fansign',
        speaker: '亮亮',
        text: '（用練習已久的韓語）저는...량량이에요. 만나서 반가워요, 정국 오빠.',
        charEmoji: '💜'
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '柾國簽名的手突然停住了。他慢慢抬起頭，圓眼睜大——',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: '柾國',
        text: '...等一下。量量？那天在台北健身房的...是你吧？',
        charEmoji: '🦋'
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '全場的空氣似乎凝結了一秒。他記得我...？田柾國記得我？！',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: '柾國',
        text: '（身體不自覺前傾，壓低聲音）真的是你...你跑來首爾了？韓語也學會了？',
        charEmoji: '🦋'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜「為了這一天，我努力了好幾個月呢。」（眼眶微紅）',
            affinity: 10,
            next: 'emotional'
          },
          {
            text: '😊「因為有想見的人在這裡啊。」（大膽對視）',
            affinity: 15,
            next: 'bold'
          }
        ]
      },
      {
        id: 'emotional',
        bg: 'fansign',
        speaker: '柾國',
        text: '（眼神變得很溫柔，握住我的手）...你真的很努力呢。我都看到了。',
        charEmoji: '🦋'
      },
      {
        id: 'bold',
        bg: 'fansign',
        speaker: '柾國',
        text: '（耳朵瞬間紅了，嘴角忍不住上揚）...你、你說什麼啊...（但手握得更緊了）',
        charEmoji: '🦋'
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '工作人員示意時間到了。柾國卻還握著我的手不放...',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: '柾國',
        text: '（快速在專輯內頁寫了什麼）回去再看。不要給別人看哦。',
        charEmoji: '🦋'
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '回到飯店，顫抖著翻開專輯——\n\n除了簽名，角落還寫著一行小字和一串號碼：\n「健身房的ARMY，下次用韓語跟我聊天吧 ☺」',
        charEmoji: null
      },
      {
        bg: 'fansign',
        speaker: null,
        text: '💕 柾國好感度 +20\n📱 獲得神秘聯絡方式！\n\n【第二章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'jk_ch2_real'
      }
    ]
  },

  // Chapter 3: 只屬於我們的秘密
  chapter3: {
    id: 'jk_ch3',
    title: '第三章：只屬於我們的秘密',
    subtitle: 'Chapter 3: Our Little Secret',
    requirement: { affinity: 40, month: 6 },
    triggerAction: 'any',
    bgKey: 'hanriver',
    scenes: [
      {
        bg: 'hanriver',
        speaker: null,
        text: '手機震動——是柾國的訊息。\n\n「今晚有空嗎？想帶你去一個地方。」',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '傍晚的漢江邊，他穿著oversized帽T和棒球帽，在便利商店門口等我。\n手裡提著滿滿兩袋零食和泡麵。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '（看到我就露出笑容）來了？我買了好多...不知道你喜歡什麼口味，就每種都拿了。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '我們找了一個安靜的河邊草地坐下，他幫我泡好泡麵，還仔細地打開筷子遞給我。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '（看著夜景，輕嘆一口氣）你知道嗎...我很久沒有這樣，像普通人一樣坐在漢江邊了。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '每次出門都要偽裝，走路都要低著頭...有時候會忘記，首爾的夜景這麼美。',
        charEmoji: '🦋'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌙「那以後我陪你來看。我幫你記住這些美好的瞬間。」',
            affinity: 15,
            next: 'sweet'
          },
          {
            text: '💫「在我眼裡，不管是舞台上的柾國還是現在的你，都很耀眼。」',
            affinity: 12,
            next: 'sincere'
          }
        ]
      },
      {
        id: 'sweet',
        bg: 'hanriver',
        speaker: '柾國',
        text: '（轉頭看著我，眼睛在城市燈光下閃爍）...你每次都說讓我心跳加速的話。',
        charEmoji: '🦋'
      },
      {
        id: 'sincere',
        bg: 'hanriver',
        speaker: '柾國',
        text: '（愣了一下，然後低頭笑了）...耀眼嗎？被你這樣說，好像比站在舞台上還緊張。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '涼風吹過，我不自覺打了個寒顫。下一秒，一件溫暖的帽T蓋到了我肩上。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '（只剩黑色T恤，手臂上的刺青在月光下清晰可見）晚上漢江邊很涼的，笨蛋。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他的帽T很大，帶著他身上淡淡的香水味和溫度...心跳好快。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '（摘下口罩，深深看著我）在你面前...我想當普通的田柾國就好。不是偶像，只是...柾國。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '量量...你能不能不要只把我當偶像？',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: '亮亮',
        text: '（心臟快要爆炸）我...從在台北遇到你的那天起，就不只是把你當偶像了。',
        charEmoji: '💜'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '月光灑在漢江上，他伸出手，小心翼翼地牽住了我的手指。\n\n好溫暖。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '柾國',
        text: '（輕聲）這是只屬於我們的秘密。',
        charEmoji: '🦋'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '💕 柾國好感度 +20\n🌙 解鎖CG：漢江月夜\n💌 關係進展：曖昧期\n\n【第三章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'jk_ch3_real'
      }
    ]
  },

  // Chapter 4: 心動的瞬間
  chapter4: {
    id: 'jk_ch4',
    title: '第四章：心動的瞬間',
    subtitle: 'Chapter 4: Heart-Racing Moment',
    requirement: { affinity: 60, month: 8 },
    triggerAction: 'any',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '「我想讓你聽一首歌。」\n\n柾國的訊息很簡短，但我知道對他來說，音樂就是他的語言。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '走進HYBE大樓的錄音室，他坐在調音台前，穿著簡單的白T和運動褲。\n頭髮有點亂，像是已經工作了很長時間。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '柾國',
        text: '（眼睛下面有淡淡的黑眼圈，但看到我就笑了）你來了。坐這裡。',
        charEmoji: '🦋'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他讓我坐在旁邊的椅子上，遞給我一副耳機。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '柾國',
        text: '這首歌...還沒完成。但我想讓你先聽。你是第一個聽到的人。',
        charEmoji: '🦋'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '音樂響起——溫柔的吉他前奏，然後是他獨特的、像絲綢一樣的嗓音。\n\n歌詞是韓語，但我現在聽得懂了...',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「在無數的星星中\n我只看見你的光\n在擁擠的世界裡\n你是我唯一想停留的地方」',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「你為了我跨越了海洋\n學會了我的語言\n所以這首歌\n是我對你說的——」',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '唱到一半，他突然停下來。摘下耳機，轉過身看著我。\n\n他的眼睛...好認真。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '柾國',
        text: '（聲音微微發顫）這首歌...其實是寫給一個讓我很在意的人。',
        charEmoji: '🦋'
      },
      {
        bg: 'studio',
        speaker: '柾國',
        text: '一個從台北的健身房開始，就一直讓我忘不了的人。',
        charEmoji: '🦋'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💕「柾國...我也是。從那天起，你就是我最特別的存在。」（眼淚快掉下來）',
            affinity: 15,
            next: 'emotional4'
          },
          {
            text: '🎵「這首歌...是我聽過最美的告白。」（握住他的手）',
            affinity: 15,
            next: 'musical'
          }
        ]
      },
      {
        id: 'emotional4',
        bg: 'rooftop',
        speaker: '柾國',
        text: '（站起來，輕輕擦掉我眼角的淚）笨蛋...不要哭啊。不然我也會...（眼眶紅了）',
        charEmoji: '🦋'
      },
      {
        id: 'musical',
        bg: 'rooftop',
        speaker: '柾國',
        text: '（緊緊回握我的手）那就...讓我把這首歌唱完給你聽。只給你一個人。',
        charEmoji: '🦋'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他帶我到了大樓的天台。首爾的夜空被城市的光染成了溫暖的橘紫色。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '柾國',
        text: '（背靠欄杆，月光照在他的臉上）量量...我不知道我們的未來會怎樣。\n偶像和粉絲...這條路很難。',
        charEmoji: '🦋'
      },
      {
        bg: 'rooftop',
        speaker: '柾國',
        text: '但是...（深吸一口氣）但是我不想因為害怕就放棄認識你的機會。',
        charEmoji: '🦋'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他張開雙臂——',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '柾國',
        text: '可以...抱一下嗎？',
        charEmoji: '🦋'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '我走進他的懷裡。他的手臂很溫暖、很有力，像是要把我整個人包覆住。\n\n在首爾的星空下，時間靜止了。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '柾國',
        text: '（在我耳邊輕聲說）謝謝你...來到我的世界。',
        charEmoji: '🦋'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '💕 柾國好感度 +25\n🌟 解鎖CG：天台擁抱\n💌 關係進展：心意相通\n🎵 解鎖柾國專屬歌曲\n\n【第四章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 25,
        cg: 'jk_ch4_real'
      }
    ]
  },

  // Chapter 5: 演唱會的約定
  chapter5: {
    id: 'jk_ch5',
    title: '第五章：演唱會的約定',
    subtitle: 'Chapter 5: Concert Promise',
    requirement: { affinity: 80, month: 12, savings: 80000, korean: 60, fanLevel: 70 },
    triggerAction: 'concert',
    bgKey: 'concert',
    scenes: [
      {
        bg: 'concert_ext',
        speaker: null,
        text: '十二月。首爾。\n\n這一天終於來了——BTS 世界巡迴演唱會「FOREVER YOUNG」。',
        charEmoji: null
      },
      {
        bg: 'concert_ext',
        speaker: null,
        text: '回想這一年...拼命工作、學韓語學到半夜、追完所有韓劇、\n存下每一分錢...全都是為了這個瞬間。',
        charEmoji: null
      },
      {
        bg: 'concert_ext',
        speaker: null,
        text: '手機亮了，是柾國的訊息：\n\n「今天...不要眨眼哦。」\n後面加了一個緊張的表情符號。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '場館裡四萬顆紫色的 ARMY BOMB 同時亮起，像一片紫色的銀河。\n\n音樂響起的那一刻，全場沸騰了。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '柾國站在舞台中央，穿著黑色皮革舞台裝，燈光打在他身上，\n他就像是從光裡走出來的人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '完美的舞步、震撼的高音、汗水飛濺的側臉...\n這就是我追了一整年的那道光。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '演唱會進入最後一首歌——一首從未發表的新歌。\n\n場內突然安靜下來。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '柾國',
        text: '（拿著麥克風，聲音有點沙啞）ARMY...這首歌是我寫的。\n獻給一個人。那個人現在就在這裡。',
        charEmoji: '🦋'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '全場尖叫聲中，熟悉的吉他前奏響起——\n是那首在錄音室裡，他唱給我聽的歌。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「在無數的星星中 我只看見你的光」\n\n他的目光穿過四萬人的海洋，精準地落在我的位置——',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '然後，他笑了。\n\n那個只屬於我的、兔子一樣的微笑。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他舉起手，對著我的方向比了一個心。\n\n眼淚再也止不住了。',
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
        text: '工作人員帶我走過長長的後台走廊。心跳聲大到我以為全世界都聽得到。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '門打開的瞬間——\n\n他站在那裡。還穿著舞台裝，額頭上還有汗珠，但笑得像個孩子。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '柾國',
        text: '（張開雙臂，眼眶紅紅的）量量...你真的來了。',
        charEmoji: '🦋'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜（衝進他的懷裡）「我答應過你的...我做到了。」',
            affinity: 20,
            next: 'hug_ending'
          },
          {
            text: '🌟「你剛才在台上...是全世界最耀眼的人。」（眼淚止不住）',
            affinity: 20,
            next: 'praise_ending'
          }
        ]
      },
      {
        id: 'hug_ending',
        bg: 'backstage',
        speaker: '柾國',
        text: '（緊緊抱住我，聲音哽咽）笨蛋...我才是。\n一整年...每天都在等你出現在我的演唱會上。',
        charEmoji: '🦋'
      },
      {
        id: 'praise_ending',
        bg: 'backstage',
        speaker: '柾國',
        text: '（擦去我的眼淚，自己卻也哭了）不要只看我...你為了走到這裡付出的努力，\n在我眼中才是最耀眼的。',
        charEmoji: '🦋'
      },
      {
        bg: 'backstage',
        speaker: '柾國',
        text: '（捧起我的臉，認真地看著我）量量...謝謝你為了見我努力了一整年。',
        charEmoji: '🦋'
      },
      {
        bg: 'backstage',
        speaker: '柾國',
        text: '接下來...換我守護你了。',
        charEmoji: '🦋'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他低下頭，額頭輕輕抵著我的額頭。\n\n呼吸交錯的距離，時間再次靜止。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '柾國',
        text: '（輕聲）下一場巡迴...和之後的每一場...都有你在，對吧？',
        charEmoji: '🦋'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑著哭著點頭）嗯。永遠都在。',
        charEmoji: '💜'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '窗外的首爾夜空，紫色的煙火綻放。\n\n這一年的追星之路，讓我遇見了最珍貴的人。\n\n不是因為他是偶像，而是因為他是——田柾國。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '🎊 恭喜通關！柾國路線完成！\n\n💕 好感度 MAX\n🏆 獲得成就：紫色永恆\n🎵 解鎖：柾國專屬主題曲完整版\n📸 解鎖：全部CG回憶\n\n✨ HAPPY ENDING ✨\n\n【第五章 · 完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        isFinalEnding: true,
        cg: 'jk_ch5_real'
      }
    ]
  }
};

// Encounter scenes for locked characters
const LOCKED_ENCOUNTERS = {
  taehyung: {
    id: 'v_encounter',
    title: '美術館的邂逅',
    requirement: { fanLevel: 20 },
    triggerAction: 'drama',
    bgKey: 'gallery',
    scenes: [
      {
        bg: 'gallery',
        speaker: null,
        text: '在首爾偶然走進一間小型攝影展覽。安靜的空間裡，只有我和一個拿著底片相機的高個子男生。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他的側臉像是畫裡走出來的人...捲髮、高挺的鼻樑、專注的眼神。\n他對著一幅作品按下了快門——\n等等，那個方向不是作品，是...我？',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '泰亨',
        text: '（低沉磁性的嗓音）啊...미안해요。但是你站在那幅畫前面的角度真的很美。\n可以...讓我保留這張照片嗎？',
        charEmoji: '🐻'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '這個聲音...這張臉...是V...金泰亨...！\n\n💔 此路線需要付費解鎖才能繼續\n🔒 解鎖泰亨完整路線（5章）',
        charEmoji: null,
        isEnding: true,
        isLocked: true,
        affinityGain: 5
      }
    ]
  },

  jimin: {
    id: 'jm_encounter',
    title: '練習室的舞步',
    requirement: { stamina: 50 },
    triggerAction: 'dance',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '舞蹈教室的深夜課程結束後，我留下來加練。以為只剩我一個人了...',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '鏡子裡突然出現一個身影。白金色的頭髮在燈光下發光，\n纖細的身體開始隨音樂流動——每個動作都像水一樣柔軟又有力。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（月亮一樣的眼笑）你的舞...有自己的故事在裡面呢。我喜歡這樣的舞者。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '那個眼笑...是朴智旻...！！\n\n💔 此路線需要付費解鎖才能繼續\n🔒 解鎖智旻完整路線（5章）',
        charEmoji: null,
        isEnding: true,
        isLocked: true,
        affinityGain: 5
      }
    ]
  },

  suga: {
    id: 'sg_encounter',
    title: '深夜的知音',
    requirement: {},
    triggerAction: 'work',
    bgKey: 'convenience',
    scenes: [
      {
        bg: 'convenience',
        speaker: null,
        text: '加班到深夜，走進公司附近的便利商店買宵夜。\n耳機裡放著 Agust D 的新專輯。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '隔壁正在挑飲料的男生突然轉過頭——\n黑色帽T、薄荷色挑染的瀏海、銳利的貓眼...',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '（嘴角微微上揚）這首歌的 bass line...其實有個隱藏版本。大部分人聽不出來。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '等等...Agust D 本人在告訴我他歌的秘密？！\n\n💔 此路線需要付費解鎖才能繼續\n🔒 解鎖玧其完整路線（5章）',
        charEmoji: null,
        isEnding: true,
        isLocked: true,
        affinityGain: 5
      }
    ]
  },

  rm: {
    id: 'rm_encounter',
    title: '書店的詩集',
    requirement: { korean: 40 },
    triggerAction: 'korean',
    bgKey: 'bookstore',
    scenes: [
      {
        bg: 'bookstore',
        speaker: null,
        text: '在弘大附近的獨立書店找韓語詩集。伸手去拿架上的尹東柱詩集時——\n另一隻手同時伸了過來。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '手指尖碰在一起的瞬間，我抬頭——\n圓框眼鏡、溫暖的酒窩、還有異常高大的身材...',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（酒窩深深的笑容）你也喜歡尹東柱？\n...能用韓語唸一段最喜歡的詩給我聽嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '金南俊...RM...在邀請我讀詩...？！\n\n💔 此路線需要付費解鎖才能繼續\n🔒 解鎖南俊完整路線（5章）',
        charEmoji: null,
        isEnding: true,
        isLocked: true,
        affinityGain: 5
      }
    ]
  }
};
