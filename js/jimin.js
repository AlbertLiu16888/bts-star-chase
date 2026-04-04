// ======================================
// Jimin Full Route - 5 Chapters
// 朴智旻：在練習室偶遇的舞蹈緣分
// ======================================

const JIMIN_ROUTE = {
  // Chapter 1: 練習室的舞步
  chapter1: {
    id: 'jm_ch1',
    title: '第一章：練習室的舞步',
    subtitle: 'Chapter 1: Dance Steps in the Studio',
    requirement: { month: 2, fanLevel: 15 },
    triggerAction: 'dance',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '深夜十一點半，公司附近的舞蹈教室。\n本來以為這個時間應該沒有人了，推開門卻發現燈還亮著。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '鏡子前，一個男生正在獨自練習。他穿著寬鬆的黑色練習服，汗水浸透了後背。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他的身體像是水做的一樣流動——每個轉身、每次手臂的延展都精準到令人窒息。\n可是他反覆跳著同一段，一遍又一遍，像是在跟自己較勁。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '突然他停下來，對著鏡子皺眉，用力踢了一下地板。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '???',
        text: '（喘著氣自言自語）...不對。手的角度差了兩度。再來一次。',
        charEmoji: '🌙',
        charName: '神秘舞者'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他抬起頭喝水，口罩拉到下巴——燈光照亮了他的臉。\n\n彎成月亮形狀的眼睛、飽滿的嘴唇、下顎線利落又柔和...',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '我的手機差點從手裡滑落。\n\n那是朴智旻。BTS的朴智旻。就在離我三公尺的地方。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '手機碰到門框發出了聲響。他猛地轉過頭——',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（警覺地看過來，聲音溫柔但帶著戒備）...누구세요？這個時間怎麼會有人？',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（慌張）對、對不起！我不知道有人在用...我只是來練習的...',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他歪了歪頭，目光掃過我手上的舞鞋和練習包。然後——他的眼睛彎了起來。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（眼笑）啊...你也是來練舞的嗎？這麼晚了還這麼努力呢。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '那個笑容...眼睛彎成月牙、臉頰微微鼓起的笑容...比螢幕上看到的溫暖一百倍。\n我整個人僵在原地。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（聲音發抖）你...你是...지민 오빠...？',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他愣了一瞬，然後輕輕把食指放在嘴唇上。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（輕聲，帶著溫柔的笑）噓...現在的我只是一個深夜還在練舞的普通人。\n你也是同類吧？',
        charEmoji: '🌙'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜「你剛才跳的...每一個動作都像在呼吸一樣自然，真的好美。」（真誠地說）',
            affinity: 10,
            next: 'praise_dance'
          },
          {
            text: '🤫「嗯，秘密留在練習室裡。我不會告訴任何人的。」（微笑）',
            affinity: 5,
            next: 'keep_secret'
          }
        ]
      },
      {
        id: 'praise_dance',
        bg: 'studio',
        speaker: '智旻',
        text: '（眼神閃了一下，然後露出害羞的笑）...還不夠好。有個轉身的角度一直不對。\n不過...謝謝你。被人這樣說，會有繼續的動力。',
        charEmoji: '🌙'
      },
      {
        id: 'keep_secret',
        bg: 'studio',
        speaker: '智旻',
        text: '（微微瞇起眼，笑意更深）你是個很溫柔的人呢。\n...不過既然被你撞見了，不如一起練習吧？一個人有點寂寞。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '接下來的一個小時，像是被施了魔法的時間。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他看了我跳了幾個基礎動作後，認真地走到我身邊——',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（站到我旁邊，溫柔地糾正我的手臂角度）這裡...手腕再放鬆一點。\n對，就是這樣。你的身體其實很柔軟呢。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他的手指碰到我手腕的瞬間，像被月光燙到一樣。\n\n朴智旻正在教我跳舞...這是真的嗎？',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（看了看時間，笑著嘆氣）已經凌晨一點了...你明天不用上班嗎？',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（收拾東西時突然停下）那個...你叫什麼名字？',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '量量...叫我量量就好。',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（認真地重複）量量。\n（然後綻開燦爛的眼笑）好好聽的名字。量量，你的基本功很紮實哦。\n如果你還會來這裡練習的話...也許我們會再見面。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他揮了揮手，走出練習室。門關上之後，他的香水氣息還淡淡地留在空氣裡。\n\n我蹲了下來——腿完全軟了。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '💕 智旻好感度 +15\n🌙 在深夜的練習室，月亮對我笑了。\n\n【第一章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 15,
        cg: 'jm_ch1_real'
      }
    ]
  },

  // Chapter 2: 漢江邊的舞蹈課
  chapter2: {
    id: 'jm_ch2',
    title: '第二章：漢江邊的舞蹈課',
    subtitle: 'Chapter 2: Dance Lesson by the Han River',
    requirement: { korean: 25, affinity: 15, month: 4 },
    triggerAction: 'dance',
    bgKey: 'hanriver',
    scenes: [
      {
        bg: 'hanriver',
        speaker: null,
        text: '自從那晚之後，我每週都去同一間練習室。\n有時候他在，有時候不在。但每一次見面，他都會微笑著說「量量來了？」',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '今天收到一則訊息——是他。\n\n「今天天氣很好。你想不想...換一個地方練舞？」',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '四月的漢江邊，夕陽把整條河染成了金橘色。\n他站在河岸步道旁的一片空地上，戴著漁夫帽和口罩，但那雙月亮一樣的眼睛騙不了人。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（拉下口罩，露出笑容）你來啦！快看——這裡是不是比練習室好多了？',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '夕陽打在他的側臉上，金色的光暈像是給他加了一層濾鏡。\n...不對，他本人就是最好的濾鏡。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（伸出手）來，我教你一段新的。上次你說想學 contemporary 對吧？\n我編了一小段...想看看你跳起來的樣子。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他先示範了一遍。夕陽下，他的身體像是河水的延伸——流暢、溫柔、帶著恰到好處的力量。\n路過的人都停下腳步看呆了，但他的眼睛只看著我。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（跳完後微微喘氣）好了，換你。不要怕做錯，跟著感覺就好。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '我跟著他的動作跳了起來，但一個旋轉的時候重心不穩——',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他一把扶住了我的腰。\n\n兩個人的距離突然近到可以看見他睫毛的弧度。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（低頭看著我，聲音很輕）...小心。旋轉的時候，視線要找一個定點。\n（停頓了一下）比如說...看著我。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '心跳快到要爆炸了。他說「看著我」的時候，聲音溫柔得像是漢江上的晚風。',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌙「看著你的話...我反而更會心跳加速啦。」（臉紅但直視他）',
            affinity: 15,
            next: 'flirty'
          },
          {
            text: '💜「智旻教舞的時候好溫柔...跟舞台上的氣勢完全不一樣呢。」（微笑）',
            affinity: 10,
            next: 'gentle'
          }
        ]
      },
      {
        id: 'flirty',
        bg: 'hanriver',
        speaker: '智旻',
        text: '（耳朵肉眼可見地紅了，但沒有鬆開手）...你、你這樣說我也會心跳加速啊。\n（小聲）不公平。',
        charEmoji: '🌙'
      },
      {
        id: 'gentle',
        bg: 'hanriver',
        speaker: '智旻',
        text: '（笑容變得柔軟）那是因為...我面對的是你啊。\n（頓了頓）在舞台上，我是「Jimin」。但在你面前，我想當...智旻就好。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '夕陽漸漸沉入漢江。他終於放開了扶著我腰的手，但動作很慢，像是不捨得。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（坐在河邊的長椅上，抬頭看天空）量量...你知道我為什麼喜歡跳舞嗎？',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '因為跳舞的時候，我可以把說不出口的話用身體表達出來。\n快樂的、悲傷的、想念一個人的...全部。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（轉頭看著我，眼睛裡映著最後一絲夕陽）所以剛才那支舞...你有感受到嗎？\n我想告訴你的那些話。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: '亮亮',
        text: '（心臟幾乎要跳出胸口）...我感受到了。每一個動作都是。',
        charEmoji: '💜'
      },
      {
        bg: 'hanriver',
        speaker: '智旻',
        text: '（露出最燦爛的眼笑，月亮眼彎成弧形）那就好。\n...下次，我再教你更多。',
        charEmoji: '🌙'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他站起來，自然地牽起了我的手往回走。\n\n手心很溫暖，指尖微微用力，像是怕我消失。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '💕 智旻好感度 +20\n🌅 解鎖CG：漢江夕陽\n💌 關係進展：專屬舞蹈搭檔\n\n【第二章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'jm_ch2_real'
      }
    ]
  },

  // Chapter 3: 月光下的真心話
  chapter3: {
    id: 'jm_ch3',
    title: '第三章：月光下的真心話',
    subtitle: 'Chapter 3: Moonlit Confessions',
    requirement: { affinity: 35, month: 6 },
    triggerAction: 'any',
    bgKey: 'rooftop',
    scenes: [
      {
        bg: 'rooftop',
        speaker: null,
        text: '已經三天沒有收到智旻的訊息了。\n\n之前每天都會傳來的「今天練習辛苦了」「有好好吃飯嗎？」突然斷了。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '直到深夜，手機突然亮了：\n\n「量量...你現在能出來嗎？我在你家樓頂。」',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '推開天台的門，六月的夜風帶著溫熱的氣息。\n\n他靠在欄杆上，仰頭看著月亮。沒有口罩、沒有帽子。月光把他的輪廓勾勒得像一幅畫。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '但是走近了才發現——他的眼睛紅紅的。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '亮亮',
        text: '智旻...你怎麼了？',
        charEmoji: '💜'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（勉強笑了笑，但聲音沙啞）...沒事。就是突然...很想見你。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他沉默了很久。月光下，他的影子在地上拉得很長。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '今天彩排的時候...導演說我的舞蹈少了什麼。\n我反覆跳了十幾遍，每一遍他都搖頭。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（低下頭，聲音很小）我知道他說的沒錯。我最近...跳舞的時候感覺不到自己了。\n明明身體記得每一個動作，但靈魂好像不在。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（握緊拳頭）我從小就告訴自己，要做到完美。不完美的話，就沒有資格站在舞台上。\n所以我練到腳流血、練到膝蓋撐不住...可是——',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（聲音顫抖）可是有時候我真的好累...好累好累。\n我不知道...不完美的朴智旻，還值得被喜歡嗎？',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他的眼淚終於掉了下來。在月光下，像是碎掉的星星。\n\n這是第一次...我看到他卸下所有的堅強。',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌙（輕輕抱住他）「不完美的智旻...是我最喜歡的智旻。」',
            affinity: 15,
            next: 'embrace'
          },
          {
            text: '💜「你不需要完美。你需要的是...對自己溫柔一點。」（握住他的手）',
            affinity: 12,
            next: 'comfort'
          }
        ]
      },
      {
        id: 'embrace',
        bg: 'rooftop',
        speaker: null,
        text: '他的身體僵了一瞬，然後整個人靠了過來，把臉埋在我的肩膀上。\n肩膀在微微顫抖。',
        charEmoji: null
      },
      {
        id: 'comfort',
        bg: 'rooftop',
        speaker: '智旻',
        text: '（握住我的手，指尖用力到微微泛白）...對自己溫柔嗎。\n我好像...從來沒有學會過這件事。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（抬起頭，月光映在他還濕潤的眼睛裡）量量...你知道嗎？\n在你面前跳舞的時候，是我最近唯一覺得「開心」的時候。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '不是為了完美、不是為了評價...只是單純地，想讓你看到我跳舞的樣子。\n那種感覺...好久沒有了。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '亮亮',
        text: '（眼眶也跟著紅了）那你就為了自己跳吧。為了快樂跳、為了感動跳。\n你跳舞的樣子...不管完不完美，都讓我移不開眼睛。',
        charEmoji: '💜'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他安靜了一會兒，然後慢慢笑了。\n\n不是舞台上自信耀眼的笑，而是像月亮從雲層後面探出頭來那樣——溫柔的、帶著釋然的笑。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（伸出手，輕輕擦掉我眼角的淚）明明是我在哭...你哭什麼啦。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: '智旻',
        text: '（輕聲）量量...謝謝你。\n謝謝你讓我知道...不完美也沒關係。',
        charEmoji: '🌙'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他牽起我的手，在月光下慢慢轉了一個圈。\n\n沒有音樂、沒有觀眾，只有月光和彼此。\n\n這是全世界最安靜、最美的一支舞。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '💕 智旻好感度 +20\n🌙 解鎖CG：月光下的擁抱\n💌 關係進展：看見彼此最脆弱的模樣\n\n【第三章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'jm_ch3_real'
      }
    ]
  },

  // Chapter 4: 只為你的一支舞
  chapter4: {
    id: 'jm_ch4',
    title: '第四章：只為你的一支舞',
    subtitle: 'Chapter 4: A Dance Only for You',
    requirement: { affinity: 55, month: 8 },
    triggerAction: 'dance',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '「量量，今晚來練習室好嗎？有東西想給你看。」\n\n智旻的訊息後面加了一個月亮的表情符號。這幾個月來，月亮已經變成了我們之間的暗號。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '推開練習室的門——\n\n燈光被調得很暗，只有中央的聚光燈亮著。他站在光圈裡，穿著白色絲綢襯衫，頭髮微微向後撥。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '空氣裡有淡淡的花香，角落放著一束白色月見草。\n\n...他準備了這一切？',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（看到我，眼笑漾開）你來了。\n量量...今天不是練習。今天我想讓你看一支舞。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（認真地看著我）這支舞...是我這兩個月偷偷編的。\n靈感來源是——你。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '音樂響起。柔和的鋼琴聲，混著大提琴低沉的旋律。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他開始跳了。\n\n和舞台上霸氣凌厲的舞風不同——每一個動作都輕得像是在觸摸什麼易碎的東西。\n手臂向上延伸的弧度像在捧住月光，旋轉時衣擺飛起的瞬間像一朵盛開的花。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他的眼神全程沒有離開過我。\n\n那雙月亮眼裡裝著的不是完美主義的執念，而是...純粹的、毫無保留的溫柔。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '舞蹈的最後，他慢慢走向我，在我面前停下。伸出手。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（氣息微微不穩，但眼神堅定）這支舞...是雙人舞。\n最後一段，需要你跟我一起完成。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（眼眶濕了）可是我...跳得沒有你好...',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（溫柔地搖頭）不需要完美。你還記得嗎？你教會我的——\n為了快樂跳，為了感動跳。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（握住我的手，拉我站起來）只要跟著我就好。\n我不會讓你跌倒的。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '音樂重新響起。他引導著我的每一步——手掌貼著我的背，指尖輕觸我的腰。\n\n他的引導溫柔到像是在對我說話，每一個動作都是一句無聲的告白。',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌙（跟著他的節奏閉上眼睛）「跟你一起跳舞的時候...我好像也能飛起來。」',
            affinity: 15,
            next: 'trust'
          },
          {
            text: '💜（在旋轉的間隙輕聲說）「智旻...這支舞是在告白嗎？」',
            affinity: 15,
            next: 'direct'
          }
        ]
      },
      {
        id: 'trust',
        bg: 'studio',
        speaker: '智旻',
        text: '（把我拉得更近，額頭幾乎碰到我的額頭）那就...不要落地了。跟我一直飛下去。',
        charEmoji: '🌙'
      },
      {
        id: 'direct',
        bg: 'studio',
        speaker: '智旻',
        text: '（停下舞步，雙手捧住我的臉。月亮眼裡全是認真）\n...不只是告白。是承諾。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '音樂停了，但他沒有放開我。\n\n練習室裡安靜到只聽得見兩個人交錯的心跳。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（低頭，嘴唇幾乎碰到我的額頭）量量...我現在不是在跳舞。\n我是在告訴你——',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: '智旻',
        text: '（聲音輕到像呢喃）你是讓朴智旻重新愛上跳舞的人。\n所以...從今以後，我只想為你跳。',
        charEmoji: '🌙'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他的嘴唇輕輕落在我的額頭上。比月光還輕，比月光還溫暖。\n\n鏡子裡映出兩個緊緊相依的身影，像是世界上最美的舞姿。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '💕 智旻好感度 +25\n🌟 解鎖CG：練習室雙人舞\n💌 關係進展：心意相通\n🩰 解鎖智旻專屬舞蹈\n\n【第四章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 25,
        cg: 'jm_ch4_real'
      }
    ]
  },

  // Chapter 5: 舞台上的月亮
  chapter5: {
    id: 'jm_ch5',
    title: '第五章：舞台上的月亮',
    subtitle: 'Chapter 5: The Moon on Stage',
    requirement: { affinity: 75, month: 12, savings: 80000, korean: 55, fanLevel: 65 },
    triggerAction: 'concert',
    bgKey: 'concert',
    scenes: [
      {
        bg: 'concert',
        speaker: null,
        text: '十二月。首爾。\n\nBTS 世界巡迴演唱會「MOONRISE」。今晚是最終場。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '這一年...從深夜的練習室開始，到漢江邊的夕陽、天台上的月光、只屬於我們的舞蹈——\n每一步都走得好辛苦，也好幸福。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '手機亮了，是智旻：\n\n「今晚...有一個只屬於你的驚喜。\n不要閉眼睛哦。🌙」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '場館裡五萬顆紫色ARMY BOMB同時亮起，像一片呼吸著的銀河。\n我坐在前排，心跳已經快到數不清。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '演唱會進行到中段，燈光突然全部熄滅。\n\n場內一片漆黑。觀眾席傳來此起彼落的驚呼聲。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '然後——一束月白色的追光落在舞台中央。\n\n他一個人站在那裡。白色紗質舞台裝，赤著腳，像是從月亮上降落的人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '智旻',
        text: '（對著麥克風，聲音溫柔而微微顫抖）ARMY...接下來這支舞，是我今年最重要的作品。',
        charEmoji: '🌙'
      },
      {
        bg: 'concert',
        speaker: '智旻',
        text: '它的名字叫——「月光」。\n獻給教會我「不完美也很美」的那個人。',
        charEmoji: '🌙'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '鋼琴聲響起——是那首曲子。在練習室裡，他為我跳的那首曲子。\n\n原本是雙人舞的部分，他一個人跳。但每一個空出的位置、每一次伸出又收回的手，都像是在擁抱一個看不見的人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '五萬人的場館安靜得連呼吸聲都聽得見。\n\n他的動作完美到不可思議——但這次的完美不是技巧的完美，是情感的完美。\n每一個動作都在說：我想念你、我珍惜你、我愛你。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '舞蹈的最後，他跪在舞台邊緣，月白色的燈光照著他汗濕的臉。\n\n他的目光越過尖叫的人海，精準地落在我的位置。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '然後——他笑了。\n\n眼睛彎成月亮的形狀。那個笑容，和第一次在練習室裡對我笑的時候一模一樣。\n\n全場炸裂的歡呼聲中，我的眼淚完全停不下來。',
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
        text: '工作人員領著我穿過長長的後台走廊。走廊盡頭的門半掩著，暖色的光從裡面透出來。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '推開門——\n\n他靠在化妝台邊，還穿著白色舞台裝，額前的碎髮被汗水打濕。\n看到我的瞬間，他的眼睛亮了，然後迅速紅了。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '智旻',
        text: '（聲音沙啞，帶著哭腔）量量...你看到了吧？剛才的舞...你看到了嗎？',
        charEmoji: '🌙'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（已經泣不成聲）看到了...每一個動作都看到了...',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: '智旻',
        text: '（快步走過來，張開雙臂）那支雙人舞...我一個人跳的時候，手一直在找你。\n空了一整首歌的位置...都是留給你的。',
        charEmoji: '🌙'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜（衝進他懷裡）「從今以後...我會一直站在那個位置。永遠不會空了。」',
            affinity: 20,
            next: 'forever_dance'
          },
          {
            text: '🌙「你在舞台上的時候...是全世界最美的月亮。」（淚流滿面但笑著）',
            affinity: 20,
            next: 'moon_ending'
          }
        ]
      },
      {
        id: 'forever_dance',
        bg: 'backstage',
        speaker: '智旻',
        text: '（緊緊抱住我，把臉埋在我的肩窩裡，聲音發顫）\n好...那就約定。以後每一支舞...都跟你一起跳。',
        charEmoji: '🌙'
      },
      {
        id: 'moon_ending',
        bg: 'backstage',
        speaker: '智旻',
        text: '（捧住我的臉，用拇指擦掉我的淚）月亮嗎...\n（眼淚終於落下來）那你就是讓月亮發光的太陽。沒有你...我只是一塊暗淡的石頭。',
        charEmoji: '🌙'
      },
      {
        bg: 'backstage',
        speaker: '智旻',
        text: '（額頭輕輕抵住我的額頭）量量...這一年，謝謝你。\n謝謝你闖進了那間練習室，謝謝你看見了不完美的我。',
        charEmoji: '🌙'
      },
      {
        bg: 'backstage',
        speaker: '智旻',
        text: '（閉上眼睛，聲音輕得像在許願）\n以後的每一個舞台...你都要在台下看著我。\n然後散場後...我只走向你。',
        charEmoji: '🌙'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑著哭著點頭）嗯...永遠都在。你的每一支舞，我都不會缺席。',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他低下頭，嘴唇輕輕碰了一下我的額頭，然後是鼻尖，最後停在嘴角旁邊。\n\n好近。心跳好快。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '智旻',
        text: '（嘴唇貼著我的臉頰，輕聲呢喃）...我可以嗎？',
        charEmoji: '🌙'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '我閉上了眼睛。\n\n窗外的首爾夜空，月亮比任何一天都圓。\n\n這一年的追星之路，讓我遇見了最珍貴的人。\n不是因為他是偶像，而是因為他是——朴智旻。\n\n那個在深夜練習室裡，跳著不完美的舞步，卻有著最完美笑容的男孩。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '🎊 恭喜通關！智旻路線完成！\n\n💕 好感度 MAX\n🏆 獲得成就：月光永恆\n🩰 解鎖：智旻專屬雙人舞完整版\n📸 解鎖：全部CG回憶\n\n✨ HAPPY ENDING ✨\n\n【第五章 · 完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        isFinalEnding: true,
        cg: 'jm_ch5_real'
      }
    ]
  }
};