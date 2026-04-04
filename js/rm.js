// ======================================
// RM (Kim Namjoon) Full Route - 5 Chapters
// 書店裡的知性邂逅
// ======================================

const RM_ROUTE = {
  // Chapter 1: 書店的詩集
  chapter1: {
    id: 'rm_ch1',
    title: '第一章：書店的詩集',
    subtitle: 'Chapter 1: The Poetry Book',
    requirement: { month: 2, fanLevel: 15 },
    triggerAction: 'korean',
    bgKey: 'bookstore',
    scenes: [
      {
        bg: 'bookstore',
        speaker: null,
        text: '弘大巷弄裡有一間藏在二樓的獨立書店，木質書架從地板延伸到天花板，空氣中飄著咖啡和舊書頁的香味。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '最近韓語進步了不少，想挑戰看看韓語詩集。指尖沿著書脊滑過——尹東柱、鄭玄宗、羅泰柱...',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '啊，找到了。尹東柱的《仰望星空的夜晚》，限定手寫復刻版。書架最高層只剩最後一本...',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '踮起腳尖伸手去拿的瞬間——另一隻修長的手，同時從旁邊伸了過來。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '指尖和指尖碰在一起。溫熱的觸感。\n\n我嚇了一跳，轉頭——',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '圓框眼鏡後面是一雙溫柔又深邃的眼睛。他比我高出很多，穿著米色針織衫和卡其色大衣，像是從文學雜誌裡走出來的人。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '然後他笑了。\n\n兩個深深的酒窩，像是在臉頰上按下了兩個小小的句號。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '???',
        text: '（酒窩微笑）아...미안해요. 你也想要這本？',
        charEmoji: '📚',
        charName: '高個子男生'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '等一下。這個聲音...這個酒窩...這個身高...\n\n不會吧。不會吧不會吧不會吧。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '金南俊。RM。BTS的Leader。\n\n正站在離我不到三十公分的距離，對我微笑。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '亮亮',
        text: '（大腦當機中）啊...那個...你、你先拿...！',
        charEmoji: '💜'
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（搖頭，把書遞給我）不，你先拿到的。而且...（歪頭看了看我手上的其他書）你手上拿的都是韓語詩集？',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（眼睛突然亮了起來）你不是韓國人吧？但是在讀韓語詩集...好厲害。你最喜歡尹東柱的哪一首？',
        charEmoji: '📚'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '📖「《數星星的夜晚》...因為每顆星都像是一個溫柔的約定。」（認真回答）',
            affinity: 10,
            next: 'literary'
          },
          {
            text: '💜「其實...是因為某位歌手推薦過，我才開始讀詩的。」（偷偷看他）',
            affinity: 5,
            next: 'honest'
          }
        ]
      },
      {
        id: 'literary',
        bg: 'bookstore',
        speaker: '南俊',
        text: '（眼睛瞬間亮得像星星）你...真的懂。大部分人都只知道《序詩》。\n那首詩的「약속」——約定那個意象，我一直覺得是東柱最溫柔的反抗。',
        charEmoji: '📚'
      },
      {
        id: 'honest',
        bg: 'bookstore',
        speaker: '南俊',
        text: '（愣了一秒，然後露出更深的酒窩）...是嗎？能讓人開始讀詩，那這位歌手一定很開心。',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '他的酒窩在午後的陽光裡好深好深。明明是那麼耀眼的人，站在書架之間卻像是最自然不過的風景。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '啊——等一下。',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '他轉身要去拿旁邊書架上的書，手肘不小心碰到了一疊雜誌——\n\n嘩啦啦啦——雜誌像瀑布一樣全塌了下來。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（手忙腳亂地蹲下撿）아아아 미안...我每次都...唉...（耳朵紅了）',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '傳說中的破壞王...是真的。BTS的天才Leader，在書店裡笨手笨腳地撿雜誌，耳朵紅到像要燒起來。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '太可愛了。反差感太可愛了。\n\n我蹲下來一起幫忙撿。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（不好意思地笑）謝謝...我身邊的人都說我是破壞神，碰到什麼壞什麼。\n但書是例外...書不會壞。書只會被翻開。',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（站起來，從口袋裡拿出一張書店的會員卡）這間書店我每週都來。\n如果你也喜歡詩的話...也許我們會再遇到。',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: '南俊',
        text: '（低頭看著我，酒窩很深很深）啊對了...我叫南俊。金南俊。',
        charEmoji: '📚'
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '他說出自己名字的時候，像是在交付一個很輕很輕的秘密。\n\n午後的書店，塵埃在陽光裡跳舞。我的心跳聲，比翻書頁的聲音還要大。',
        charEmoji: null
      },
      {
        bg: 'bookstore',
        speaker: null,
        text: '💕 南俊好感度 +15\n📖 獲得尹東柱詩集\n🌟 追星熱度大幅上升！\n\n【第一章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 15,
        cg: 'rm_ch1_real'
      }
    ]
  },

  // Chapter 2: 美術館的哲學課
  chapter2: {
    id: 'rm_ch2',
    title: '第二章：美術館的哲學課',
    subtitle: 'Chapter 2: Philosophy in the Gallery',
    requirement: { korean: 30, affinity: 15, month: 4 },
    triggerAction: 'korean',
    bgKey: 'gallery',
    scenes: [
      {
        bg: 'gallery',
        speaker: null,
        text: '手機亮了，是一個陌生號碼的訊息。\n\n「書店的詩集讀完了嗎？這週六MMCA有新展覽，想一起去嗎？——南俊」',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他...怎麼有我的號碼？\n\n往上翻——原來上次在書店，他借我的筆留電話時，我也在他的手機備忘錄裡打了自己的名字。\n\n完全忘了這件事...！',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '週六。國立現代美術館。\n\n他穿著黑色高領毛衣和長版大衣，戴著貝雷帽，手上拿著一本展覽手冊。\n整個人看起來像是美術館本身的一件作品。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（看到我就笑了，酒窩像兩個小月亮）你來了。今天的展覽主題是「存在與消逝」...很哲學吧？',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（推了推眼鏡）我每次看展覽都會想很多...可能會講太多話。如果無聊了就打我。',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '我們走進第一個展廳。巨大的白色空間裡，懸掛著一千隻紙鶴，每一隻上面都寫著不同的名字。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（仰頭看著紙鶴，聲音很輕）你看...一千個人的名字，一千個不同的人生。\n他們也許都不認識彼此，但在這一刻，他們的名字共存在同一個空間裡。',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '有時候我會想...所謂的「存在」，到底是被記住的那一刻，還是活著的每一秒？',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '（想了想）也許...是被某個人認真看見的那一刻？',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（猛地轉頭看我，眼睛裡像是有光在跳舞）......',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '你剛剛說的...我可以寫進歌詞裡嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他急忙從口袋掏出一本小筆記本——結果太急了，筆記本飛出去，啪的一聲掉在地上，\n裡面夾的便條紙散了一地。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（蹲下撿，又撞到旁邊的展覽說明牌）哎...又來了...（苦笑）',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '我忍不住笑了出來。他抬頭看我笑，自己也笑了，酒窩深得像要把所有溫柔都裝進去。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '我們繼續看展。走過裝置藝術、影像作品、抽象畫...\n\n他在每一件作品前都會停下來，認真地思考，然後分享他的想法。\n不是在炫耀知識，而是真的想要和我交流。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（站在一幅全黑的畫前）你覺得...黑暗裡有什麼？',
        charEmoji: '📚'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌟「星星。因為沒有黑暗的話，就看不見星光了。」',
            affinity: 15,
            next: 'poetic'
          },
          {
            text: '💜「可能性。因為什麼都看不見，所以什麼都可能存在。」',
            affinity: 10,
            next: 'philosophical'
          }
        ]
      },
      {
        id: 'poetic',
        bg: 'gallery',
        speaker: '南俊',
        text: '（看著我，嘴唇微微張開，像是被什麼擊中了）......你是詩人嗎？',
        charEmoji: '📚'
      },
      {
        id: 'philosophical',
        bg: 'gallery',
        speaker: '南俊',
        text: '（沉默了好幾秒，然後慢慢點頭）...嗯。「可能性」。我喜歡這個答案。',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '從美術館出來，外面下起了春雨。他只帶了一把傘。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（撐起傘，往我這邊傾斜，自己的肩膀露在雨裡）首爾的四月雨很溫柔的...你感受到了嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: '亮亮',
        text: '（看著他淋濕的肩膀）...南俊，你的肩膀濕了。',
        charEmoji: '💜'
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（低頭看了看自己的肩膀，然後笑了）啊...是嗎？我沒注意到。\n\n比起淋雨，我更不想讓你被雨淋到。',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '他說得很自然，像在陳述一個事實。但我的心跳卻完全不自然了。\n\n春雨打在傘面上的聲音，和他溫柔的呼吸聲混在一起。',
        charEmoji: null
      },
      {
        bg: 'gallery',
        speaker: '南俊',
        text: '（輕聲）今天...是我很久以來最開心的一天。謝謝你願意聽我說那麼多。',
        charEmoji: '📚'
      },
      {
        bg: 'gallery',
        speaker: null,
        text: '💕 南俊好感度 +20\n🎨 解鎖CG：春雨共傘\n📝 南俊的筆記本裡多了一句新的歌詞\n\n【第二章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'rm_ch2_real'
      }
    ]
  },

  // Chapter 3: 漢江邊的日落
  chapter3: {
    id: 'rm_ch3',
    title: '第三章：漢江邊的日落',
    subtitle: 'Chapter 3: Sunset by the Han River',
    requirement: { affinity: 35, month: 6 },
    triggerAction: 'any',
    bgKey: 'hanriver',
    scenes: [
      {
        bg: 'hanriver',
        speaker: null,
        text: '南俊傳了一張照片過來——漢江邊的單車租借站，旁邊停著兩台腳踏車。\n\n「天氣很好。出來騎車？我在盤浦大橋這邊等你。」',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '到的時候他已經在了。白色T恤、牛仔褲、棒球帽壓得低低的。\n但那個身高和酒窩，就算戴上面具也藏不住。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（揮手）這邊這邊！我租了兩台——啊。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他揮手揮得太大力，手肘直接撞到腳踏車的把手，兩台車像骨牌一樣倒了。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（扶起腳踏車，嘆氣）...我發誓我剛才把它們停好了的。重力跟我有仇。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '我們沿著漢江騎車。六月的風暖暖的，河面上鋪滿了金色的陽光碎片。\n\n他騎得不快，時不時回頭確認我有沒有跟上。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '在一棵大柳樹下停了下來。他買了兩杯冰美式，我們並肩坐在河堤上，腳懸在空中晃啊晃。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（看著遠方，摘下帽子讓風吹過頭髮）亮亮...我可以跟你說一些...平常不太說的話嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: '亮亮',
        text: '當然可以。',
        charEmoji: '💜'
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（沉默了一會兒）...當Leader這件事。有時候很重。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '成員們遇到困難的時候，我要是最堅強的那個人。粉絲失望的時候，我要找到正確的話來說。\n公司、媒體、全世界都在看著...我不能倒下。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（苦笑）但說實話...有些夜晚，我也會懷疑自己。\n「我真的配得上這個位置嗎？」\n「如果有一天我撐不住了怎麼辦？」',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他看著漢江，夕陽把他的側臉染成了金色。那個永遠站在最前面擋風的人，此刻看起來像個迷路的少年。',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🌅「你不需要永遠堅強。在我面前，你可以只是南俊。」（輕輕把頭靠在他肩上）',
            affinity: 15,
            next: 'gentle'
          },
          {
            text: '💪「你知道為什麼大家信任你嗎？不是因為你不會倒，而是因為你倒了還會站起來。」',
            affinity: 12,
            next: 'encouraging'
          }
        ]
      },
      {
        id: 'gentle',
        bg: 'hanriver',
        speaker: null,
        text: '他的身體輕輕一顫。然後，慢慢地，他的頭也靠了過來，靠在我的頭頂上。',
        charEmoji: null
      },
      {
        id: 'gentle',
        bg: 'hanriver',
        speaker: '南俊',
        text: '（聲音很輕很輕）...謝謝你。好久沒有人這樣跟我說了。',
        charEmoji: '📚'
      },
      {
        id: 'encouraging',
        bg: 'hanriver',
        speaker: '南俊',
        text: '（轉頭看著我，眼眶泛紅但在笑）...你怎麼每次都知道該說什麼。是偷偷讀了哲學書嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '夕陽慢慢沉入漢江的盡頭。天空從金色變成了橘紅色，再變成深紫色。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（突然站起來，指著天空）亮亮你看...日落的顏色。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '尹東柱寫過：「死去的日子裡，用最後的光填滿天空。」\n但我覺得...日落不是結束。是明天的約定。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他轉身看著我，逆光裡他的輪廓像是一首還沒寫完的詩。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: '南俊',
        text: '（伸出手）明天...也一起看日落吧？後天也是。\n\n只要你願意的話...以後的每一天都是。',
        charEmoji: '📚'
      },
      {
        bg: 'hanriver',
        speaker: '亮亮',
        text: '（握住他的手，笑了）好。約定。',
        charEmoji: '💜'
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '他的手掌很大很溫暖，卻微微在發抖。\n\n原來這個總是冷靜理性的人，也會緊張。\n\n好可愛。真的好可愛。',
        charEmoji: null
      },
      {
        bg: 'hanriver',
        speaker: null,
        text: '💕 南俊好感度 +20\n🌅 解鎖CG：漢江日落牽手\n💌 關係進展：曖昧期\n\n【第三章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'rm_ch3_real'
      }
    ]
  },

  // Chapter 4: 為你翻譯的情書
  chapter4: {
    id: 'rm_ch4',
    title: '第四章：為你翻譯的情書',
    subtitle: 'Chapter 4: A Love Letter Translated for You',
    requirement: { affinity: 55, month: 8 },
    triggerAction: 'any',
    bgKey: 'cafe',
    scenes: [
      {
        bg: 'cafe',
        speaker: null,
        text: '「今天教你寫韓語信吧？帶你去我的秘密基地。」\n\n南俊帶我來到三清洞巷弄裡一間很安靜的咖啡廳。角落的位置被書牆包圍，像一個小小的秘密房間。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（把一疊信紙和鋼筆放在桌上）韓語的美在於它的聲音。每一個字母都是嘴唇和舌頭的形狀。\n所以用韓語寫信的時候...就像是在紙上親吻。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他說「親吻」的時候，自己好像才意識到說了什麼，耳朵瞬間紅了。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（咳了一聲，推眼鏡）我、我是說...語言學上的意義啦。好，我們開始。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '先從基本的開始。「보고 싶다」——想見你。寫寫看？',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '我認真地在信紙上寫下那行字。他靠過來看我寫，距離近到能聞到他身上淡淡的松木香水味。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（指著我寫的字）這個ㅅ再圓潤一點...嗯，像這樣——（他的手蓋在我的手上，帶著我寫）',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他的手掌覆蓋著我的手背。溫暖的、修長的手指。心跳聲大得我怕他聽見。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '好，下一句。「네가 나의 우주야」——你是我的宇宙。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '（邊寫邊問）...這些句子，是在教我寫信，還是...你想對誰說的話？',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他的筆停住了。沉默了好幾秒鐘。咖啡廳裡只剩下輕柔的爵士樂和窗外的蟬鳴。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（低頭，聲音變得很低很溫柔）...如果我說，兩者都是呢？',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（拿起另一張信紙，開始寫）讓我...把剩下的話寫給你看。用我最擅長的方式。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他低著頭認真地寫，鋼筆在信紙上沙沙作響。寫了很長很長。\n\n寫到一半，他停下來笑了笑，把一個字塗掉重寫。\n\n然後又寫。又停下來。又改。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（把信紙推到我面前）...你的韓語程度，應該看得懂了吧？',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '我低頭看——是他工整的手寫韓文。旁邊還貼心地寫了中文翻譯。\n\n「亮亮，\n\n我寫過很多歌詞，在紙上安放過無數句子。\n但有些話，太重了，歌詞裝不下。\n\n從書店那天開始，你就住進了我腦海裡那個\n專門收藏美好事物的房間。\n\n你看世界的眼神讓我心動。\n你回答問題的方式讓我想成為更好的人。\n你笑的時候，我會忘記所有正在煩惱的事。\n\n我不知道這算不算情書。\n但如果是的話——\n這是我人生中第一封。」',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💌「南俊...我也想寫一封給你。用你教我的韓語。」（眼眶泛紅）',
            affinity: 15,
            next: 'write_back'
          },
          {
            text: '💕「你不需要寫得完美。這些字...已經是我收過最好的禮物了。」（握住他的手）',
            affinity: 15,
            next: 'accept'
          }
        ]
      },
      {
        id: 'write_back',
        bg: 'cafe',
        speaker: null,
        text: '我拿起鋼筆，在信紙上慢慢地、一筆一劃地寫下：\n\n「남준 오빠, 당신은 나의 별이에요.」\n南俊哥哥，你是我的星星。',
        charEmoji: null
      },
      {
        id: 'write_back',
        bg: 'cafe',
        speaker: '南俊',
        text: '（看完，深深吸了一口氣，然後笑了，酒窩裡好像有光）...我會把這封信收在最重要的地方。',
        charEmoji: '📚'
      },
      {
        id: 'accept',
        bg: 'cafe',
        speaker: '南俊',
        text: '（反握住我的手，拇指輕輕摩挲我的手背）...你知道嗎。寫這封信的時候，我改了十七次。\n我怕自己太笨拙...配不上你值得的浪漫。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '你的笨拙...就是最好的浪漫啊。',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '窗外的夕陽把咖啡廳染成了琥珀色。他手裡還握著我的手，拇指一下一下地輕輕畫著圈。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（突然想到什麼，從包裡拿出一本書）對了...這個給你。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '是尹東柱的《仰望星空的夜晚》——和書店裡那本一模一樣的限定版。\n翻開扉頁，上面有他的手寫字：\n\n「致我的星星。——南俊」',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '南俊',
        text: '（搔搔後頸）書店那本你先拿到了。但我一直覺得...我也該送你一本。\n這樣我們就各有一本了。你讀到好的段落，可以傳訊息告訴我頁數，我會翻到同一頁一起讀。',
        charEmoji: '📚'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '這個人。這個在四萬人面前可以侃侃而談的Leader。\n此刻在我面前，緊張得不停推眼鏡，耳朵紅得像燒起來。\n\n世界上最可愛的反差。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '💕 南俊好感度 +25\n📝 解鎖CG：咖啡廳情書\n💌 關係進展：心意相通\n📖 獲得南俊手寫簽名詩集\n\n【第四章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 25,
        cg: 'rm_ch4_real'
      }
    ]
  },

  // Chapter 5: Leader 的承諾
  chapter5: {
    id: 'rm_ch5',
    title: '第五章：Leader 的承諾',
    subtitle: 'Chapter 5: The Leader\'s Promise',
    requirement: { affinity: 75, month: 12, savings: 80000, korean: 60, fanLevel: 65 },
    triggerAction: 'concert',
    bgKey: 'concert',
    scenes: [
      {
        bg: 'concert',
        speaker: null,
        text: '十二月。首爾奧林匹克主競技場。\n\nBTS 世界巡迴「FOREVER YOUNG」最終場。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '回想這一年...從書店的偶遇開始，一切都像一首寫了好久的詩，\n每一個句子都在等待下一個，直到走到這裡。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '手機亮了，是南俊的訊息：\n\n「今天的ending ment...我準備了很久。你一定要聽到最後。」\n\n後面是一個酒窩笑臉的符號。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '場館裡八萬顆紫色的 ARMY BOMB 亮起，像是地上長出了一片星空。\n\n音樂響起。燈光亮起。他們從光裡走出來。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '南俊站在舞台中央。黑色西裝外套，裡面是白色襯衫，胸口別著一朵小小的乾燥花。\n\n他看起來既是Leader，又是詩人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '完美的舞台。磅礴的音樂。他的rap像是在和八萬人對話，每一個字都精準地落在節拍上。\n\n但在那些密密麻麻的歌詞裡，我聽到了幾個只有我才懂的詞——',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「書店」、「星星」、「日落的約定」。\n\n他把我們的故事，藏在了歌詞裡。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '安可曲結束後，燈光暗下來。\n\n全場安靜了。\n\n只剩一束聚光燈，打在舞台中央的南俊身上。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '（拿著麥克風，深深吸了一口氣）ARMY...今天是最後一場了。讓我說幾句話。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '大家知道嗎？我這個人很笨拙。在台上看起來很可靠，但私底下...碰什麼壞什麼。\n（觀眾笑了）\n連好好拿個麥克風架都會弄倒。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '但是有一件事...我從來沒有弄壞過。\n\n就是對你們的心意。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '全場歡呼。他等歡呼聲靜下來，然後——\n\n突然切換了語言。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '（用中文，一字一句）今天...有一個人在這裡。她從很遠的地方來，為了夢想...為了見到喜歡的人，努力了一整年。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '我的呼吸停住了。全場開始騷動。他在說...中文？',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '（中文，聲音微微發顫）她教會我...「存在」的意義。\n不是被全世界記住...而是被一個人，認真地看見。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '那是我在美術館說過的話。他記得。他全都記得。\n\n眼淚已經開始掉了。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '南俊',
        text: '（切回韓語）그리고...（然後...）\n\n（深深看向觀眾席的一個方向——我的方向）\n\n이 노래는, 너를 위해 썼어.\n這首歌...是為你而寫的。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '鋼琴前奏緩緩響起。他坐到舞台邊緣，雙腳垂在邊緣，就像在漢江邊一樣。\n\n然後他開始唱。不是rap，是唱。溫柔的、帶著沙啞的嗓音。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「在書頁之間遇見你\n在詩句之間愛上你\n你是我笨拙的手\n唯一不會弄壞的東西」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「所以讓我用所有學過的語言告訴你\n用韓語 사랑해\n用中文 我愛你\n用英語 I love you\n用沉默 ......\n用酒窩 （笑）」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '唱到最後一句的時候，他真的笑了。酒窩在聚光燈下，像兩顆小小的星星。\n\n八萬人的尖叫聲裡，我什麼都聽不見了。只看到他在笑，對著我笑。',
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
        text: '工作人員引導我穿過長長的後台走廊。牆壁上貼滿了演唱會的海報和行程表。\n\n走到盡頭，一扇門半開著。門上貼著一張便利貼：\n\n「별에게 ★」\n——致星星',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '推開門——\n\n他站在化妝鏡前，西裝外套脫了，白襯衫的袖子捲到手肘。\n額頭上還有汗，頭髮有些凌亂。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '看到我的瞬間，他的眼睛亮了。\n然後他急忙走過來——啪，撞倒了旁邊的衣架。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（完全不管倒下的衣架，直直走向我）亮亮。',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（站在我面前，很近很近）剛才台上的話...你聽到了嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（眼淚還掛在臉上）...你的中文...什麼時候練的？',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（露出害羞的笑容，酒窩好深好深）為了今天...偷偷練了三個月。\n每天在錄音室看中文教學影片...成員們都笑我了。',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（認真地）你為了我學了韓語。那我...也應該用你的語言，至少說一次最重要的話。',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他伸出手，輕輕擦掉我臉上的淚。手指有點笨拙，碰到了我的鼻子——',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（小聲）啊...抱歉，我手太大...精細動作真的不太行...',
        charEmoji: '📚'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜（踮起腳尖，雙手捧住他的臉）「金南俊，我愛你。用所有的語言，和所有的沉默。」',
            affinity: 20,
            next: 'confession_ending'
          },
          {
            text: '🌟（牽起他笨拙的大手，放在自己心口）「你聽...這就是我的回答。」',
            affinity: 20,
            next: 'heartbeat_ending'
          }
        ]
      },
      {
        id: 'confession_ending',
        bg: 'backstage',
        speaker: null,
        text: '他愣住了。圓圓的眼睛瞪得很大，嘴唇微微張開。\n\n然後他笑了。眼淚和笑容一起。酒窩裡裝滿了星光。',
        charEmoji: null
      },
      {
        id: 'confession_ending',
        bg: 'backstage',
        speaker: '南俊',
        text: '（雙手覆上我的手，聲音哽咽）你剛才...用了幾種語言？',
        charEmoji: '📚'
      },
      {
        id: 'confession_ending',
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑了）只有一種。但那是你教我的。',
        charEmoji: '💜'
      },
      {
        id: 'heartbeat_ending',
        bg: 'backstage',
        speaker: null,
        text: '他的手掌貼在我的心口。指尖隨著心跳的頻率微微顫動。',
        charEmoji: null
      },
      {
        id: 'heartbeat_ending',
        bg: 'backstage',
        speaker: '南俊',
        text: '（聲音沙啞）...跳得好快。',
        charEmoji: '📚'
      },
      {
        id: 'heartbeat_ending',
        bg: 'backstage',
        speaker: '亮亮',
        text: '從書店那天開始，每次見到你都是這樣。',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（低下頭，額頭輕輕抵著我的額頭）亮亮...我這個人很笨拙。\n我會撞倒東西、弄壞東西、找不到正確的時機...',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '但是...我會找到正確的詞。\n為你寫最好的歌詞。為你讀最美的詩。為你學你的語言。',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（輕聲，用中文）所以...你願意和這個笨手笨腳的Leader...一起走下去嗎？',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑著哭著用韓語回答）네. 영원히. 是的。永遠。',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他把我拉進懷裡。很緊很緊。像是要把所有笨拙的、說不出口的、寫不進歌裡的感情，\n全部通過這個擁抱傳遞給我。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '他的心跳聲透過胸膛傳來，和我的重疊在一起。\n\n兩個心跳，一個節奏。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '（在我耳邊輕聲唸）「仰望星空的夜晚，\n所有正在消逝的事物都令人懷念。」',
        charEmoji: '📚'
      },
      {
        bg: 'backstage',
        speaker: '南俊',
        text: '但你教會了我——正在閃耀的事物，更值得珍惜。',
        charEmoji: '📚'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '窗外的首爾夜空，紫色的煙火綻放在冬夜裡。\n\n這一年的追星之路，讓我遇見了最珍貴的人。\n\n他是Leader，是詩人，是哲學家，是破壞王。\n但對我來說，他只是——金南俊。\n\n那個在書店裡撞倒雜誌、在雨中淋濕肩膀、\n為我練習三個月中文的男人。\n\n我的星星。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '🎊 恭喜通關！南俊路線完成！\n\n💕 好感度 MAX\n🏆 獲得成就：書頁之間的永恆\n📖 解鎖：南俊手寫詩集完整版\n📸 解鎖：全部CG回憶\n\n✨ HAPPY ENDING ✨\n\n【第五章 · 完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        isFinalEnding: true,
        cg: 'rm_ch5_real'
      }
    ]
  }
};
