// ======================================
// Suga (Min Yoongi) Full Route - 5 Chapters
// Theme: 錄音室裡的深夜知己
// ======================================

const SUGA_ROUTE = {
  // Chapter 1: 深夜的知音
  chapter1: {
    id: 'sg_ch1',
    title: '第一章：深夜的知音',
    subtitle: 'Chapter 1: Late Night Kindred Spirit',
    requirement: { month: 2, fanLevel: 15 },
    triggerAction: 'work',
    bgKey: 'convenience',
    scenes: [
      {
        bg: 'convenience',
        speaker: null,
        text: '又加班到凌晨一點。整棟辦公大樓只剩我的螢幕還亮著，眼睛痠到快睜不開。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '走進公司旁的便利商店，耳機裡正好播到 Agust D 的「Daechwita」。\n跟著節奏小聲哼了起來，這首歌總能在加班的深夜給我力量。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '正在研究泡麵要選辣味還是原味的時候，旁邊有個人影靠了過來。\n黑色帽T、口罩遮住半張臉，瀏海染了一點薄荷綠的挑染。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '他也在看泡麵，手指修長而白皙，隨意地拿起一碗——跟我伸向同一碗的手撞在了一起。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '???',
        text: '......',
        charEmoji: '🐱',
        charName: '帽T男生'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '他沒說話，銳利的貓眼越過口罩邊緣掃了我一眼。\n然後——他似乎注意到了我耳機裡傳出的聲音。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '???',
        text: '（拉下口罩一角，嘴角微微上揚）這首歌的第二段 verse，bass line 其實有個隱藏版本。大部分人聽不出來。',
        charEmoji: '🐱',
        charName: '帽T男生'
      },
      {
        bg: 'convenience',
        speaker: '亮亮',
        text: '（愣住）咦？你是說第二段副歌前那段低頻的變化嗎？我有注意到！\n我覺得那裡像是故意用了復古的 808 鼓機音色...',
        charEmoji: '💜'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '他拉下口罩的動作停住了。那雙貓一樣銳利又慵懶的眼睛，突然認真地看向我。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '???',
        text: '......你聽得出 808？（沉默了兩秒）有意思。',
        charEmoji: '🐱',
        charName: '帽T男生'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '口罩完全拉下來的瞬間——削薄的下顎線、蒼白的膚色、還有那雙辨識度極高的貓眼...\n\n不會吧。閔玧其？SUGA？Agust D？！我耳機裡正在播的那個人就站在我面前？！',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '亮亮',
        text: '（差點把手裡的泡麵捏碎）你、你是——！',
        charEmoji: '💜'
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '（食指抵住嘴唇）噓。（環顧四周，確認沒人注意）......吵死了。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '明明是在叫我安靜，但他的眼神裡沒有不悅。\n反而像是......有點好奇？',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '這個時間在便利商店...也是加班到現在？',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: '亮亮',
        text: '嗯...趕一個截止日期，已經連續第三天了。',
        charEmoji: '💜'
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '（拿起那碗泡麵放進我的購物籃）三天？才三天就這副要死的表情。\n我錄音的時候連續一個禮拜沒出過錄音室。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '......這個人是在嘲諷我嗎？但為什麼又幫我拿泡麵？',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🎵「那你也是因為工作才這麼晚出現在這裡嗎？」（關心地問）',
            affinity: 10,
            next: 'caring'
          },
          {
            text: '😤「一個禮拜不出錄音室？那不是更需要吃東西嗎。」（把泡麵放回他籃裡）',
            affinity: 15,
            next: 'sassy'
          }
        ]
      },
      {
        id: 'caring',
        bg: 'convenience',
        speaker: '玧其',
        text: '（聳肩）跟新歌較勁。......不過，能在凌晨的便利商店遇到聽得出 808 的人，算是意外收穫。',
        charEmoji: '🐱'
      },
      {
        id: 'sassy',
        bg: 'convenience',
        speaker: '玧其',
        text: '（明顯愣了一下，然後嘴角勾起一個弧度）......哈。你膽子不小。第一次有人管我吃飯。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '他拿了兩碗泡麵、兩瓶美式咖啡，然後走向便利商店外面的小桌子坐下。\n回頭看了我一眼——',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '......不坐？反正你也還沒吃吧。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '二月的深夜，冷風刺骨。但坐在便利商店門口吃著泡麵的閔玧其，\n在橘黃色的燈光下看起來意外地......平凡而溫暖。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '（吃了一口泡麵，看向遠方）......音樂這種東西，就是要在最安靜的夜裡才能聽見。\n你剛才聽的那首歌，我寫的時候也是這樣的深夜。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: '玧其',
        text: '（站起來，把口罩戴回去）要回去錄音了。......泡麵錢不用還。\n（走了兩步又停下）你那個工作，今晚就別熬了。明天早點來做效率比較好。',
        charEmoji: '🐱'
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '他的背影消失在深夜的街道上，帽T的帽緣在路燈下投出一片陰影。\n\n我低頭看泡麵碗蓋——上面用原子筆寫了一行小字：\n「808 girl. 下次聽到新歌的隱藏版本再告訴我。」\n\n......旁邊還畫了一隻小貓。',
        charEmoji: null
      },
      {
        bg: 'convenience',
        speaker: null,
        text: '💕 玧其好感度 +15\n🐱 在深夜便利商店邂逅了天才製作人\n\n【第一章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 15,
        cg: 'sg_ch1_real'
      }
    ]
  },

  // Chapter 2: 錄音室的深夜
  chapter2: {
    id: 'sg_ch2',
    title: '第二章：錄音室的深夜',
    subtitle: 'Chapter 2: Late Night in the Studio',
    requirement: { korean: 25, affinity: 15, month: 4 },
    triggerAction: 'work',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '那天之後過了兩個月。我以為那只是深夜的一場夢。\n\n直到手機收到一則陌生號碼的訊息——',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「808 girl。新 demo 做好了。要不要來聽。」\n\n沒有問候、沒有自我介紹，連標點符號都很懶。\n但我一看就知道是誰。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他怎麼有我的號碼？......算了，他是閔玧其，什麼都有可能。\n\n按照他傳來的地址，我站在了 HYBE 大樓的錄音室門口。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '門半開著，裡面傳來低沉的 beat 聲。推門進去——\n\n昏暗的錄音室裡只有調音台的螢幕發出冷冷的藍光。\n閔玧其窩在一張大轉椅裡，面前散落著空的美式咖啡罐。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（頭也不回，手指還在鍵盤上敲）你來得比我預期的快。坐。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（看著地上的咖啡罐）......你今天喝了幾罐？',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（想了一下）......不記得了。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（嘆氣）你不是說過連續待一個禮拜的嗎，這次又幾天了？',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（終於轉過椅子看我，黑眼圈深得像畫上去的）......你是來聽歌的還是來唸我的？',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他嘴上這麼說，但眼神裡帶著一絲......像是被關心到有點不知所措的表情。\n我注意到他的外套搭在椅背上，袖口的毛邊都磨損了，是穿了很久的那種舊。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（轉回螢幕，按下播放鍵）別說話。聽。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '錄音室裡瞬間充滿了音樂——\n\n開頭是一段很輕很輕的鋼琴，像深夜裡有人在遠處彈奏。\n然後是他的聲音，低沉、沙啞、帶著某種脆弱的真誠。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「새벽 세시의 편의점에서\n널 만난 건 우연이 아닐지도」\n\n（凌晨三點的便利商店 / 遇見你也許不是偶然）',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '......這歌詞。是在寫那天晚上的事嗎？',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（音樂停下，背對著我）......怎麼樣。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「怎麼樣」三個字說得又輕又快，像是在假裝不在乎。\n但我看到他放在膝蓋上的手指微微收緊了。',
        charEmoji: null
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '🎵「副歌的鋼琴和 beat 的切換太漂亮了...但我更喜歡最後那段沒有伴奏的清唱。」（認真分析）',
            affinity: 15,
            next: 'analysis'
          },
          {
            text: '💜「這首歌...讓我想哭。你把深夜的孤獨寫得這麼溫柔。」（聲音微顫）',
            affinity: 10,
            next: 'emotional'
          }
        ]
      },
      {
        id: 'analysis',
        bg: 'studio',
        speaker: '玧其',
        text: '（緩緩轉過椅子，瞳孔微微放大）......你聽出來了？最後那段我重錄了十七次。\n（嘴角浮現一個極淡的笑）果然沒找錯人。',
        charEmoji: '🐱'
      },
      {
        id: 'emotional',
        bg: 'studio',
        speaker: '玧其',
        text: '（沉默了很久）......溫柔嗎。（輕輕嘆了口氣）大概是因為寫的時候，想到了那碗泡麵的溫度。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（突然站起來，把耳機遞給我）既然來了，就幫我聽完剩下的。\n我需要一個......不只是點頭說好聽的人。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '接下來的三個小時，我們窩在錄音室裡一首一首地聽他的新 demo。\n他會在我說出感想之前偷偷觀察我的表情，被我發現了又立刻假裝在看螢幕。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '不知不覺，窗外已經泛起魚肚白。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（看了一眼手機）......已經五點了。（揉了揉眼睛）你應該走了。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '你呢？你不也該休息了嗎？',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（攤手）我？我大概會再修一下第三首的混音......（看到我的表情）......好啦好啦，\n我等一下會睡。這沙發可以躺。別用那種眼神看我。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他送我到門口。清晨的走廊安安靜靜的。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（靠在門框上，聲音比平常更低更啞）......下次有新東西，我再找你。\n不是所有人都值得聽未完成的歌。（移開視線）你是第一個。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '💕 玧其好感度 +20\n🎧 成為天才製作人的第一個試聽者\n📱 獲得玧其的聯絡方式\n\n【第二章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'sg_ch2_real'
      }
    ]
  },

  // Chapter 3: 工作狂的一天假
  chapter3: {
    id: 'sg_ch3',
    title: '第三章：工作狂的一天假',
    subtitle: 'Chapter 3: A Workaholic\'s Day Off',
    requirement: { affinity: 35, month: 6 },
    triggerAction: 'any',
    bgKey: 'cafe',
    scenes: [
      {
        bg: 'cafe',
        speaker: null,
        text: '六月。首爾的天氣開始變得悶熱。\n\n手機響了——又是那種沒有寒暄的訊息。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '「明天有空嗎。被經紀人強制放假。無聊。」\n\n過了三秒，又來一則：\n「帶你去一個地方。不是錄音室。」',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '閔玧其......主動約我出門？而且不是去錄音室？\n這就像太陽從西邊出來一樣不可思議。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他帶我來的是弘大巷弄深處一間完全沒有招牌的咖啡廳。\n推開木門，裡面只有四張桌子，牆上掛滿了黑膠唱片。\n空氣裡瀰漫著咖啡豆和舊唱片的味道。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（摘下帽子，頭髮壓得亂七八糟）這裡的老闆以前是爵士樂手。\n不會有人認出我。我......偶爾需要一個這樣的地方。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他點了一杯美式，然後看了看我，替我點了一杯拿鐵。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '你怎麼知道我喝拿鐵？',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（翻著黑膠唱片，頭也不抬）那天在便利商店你拿了牛奶不是咖啡。\n怕苦但又想要咖啡因的人，通常喝拿鐵。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '......他連這種細節都記得嗎。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（把一張唱片放上唱片機）你聽過 Chet Baker 嗎？',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '慵懶的小號聲在小小的空間裡流淌。他靠在椅背上，閉上眼睛，\n陽光從百葉窗的縫隙灑進來，在他蒼白的臉上畫出一道道光影。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '我第一次看到他這麼放鬆的樣子。\n不是錄音室裡跟音樂較勁的 Agust D，不是舞台上冷酷的 SUGA。\n只是一個......在午後陽光裡瞇著眼睛聽爵士樂的人。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（突然開口，眼睛還閉著）......你知道為什麼找你嗎。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（睜開眼，那雙貓眼裡的銳利收斂了很多）因為你是唯一一個......\n不會叫我「去休息」的時候帶著那種「你好可憐」的眼神的人。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '你罵我不吃飯的時候，跟罵普通朋友一樣。我......需要這個。',
        charEmoji: '🐱'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '☕「因為你本來就是普通人啊。天才也要吃飯的。」（笑著推咖啡給他）',
            affinity: 15,
            next: 'natural'
          },
          {
            text: '🐱「那你以後無聊的時候都可以找我。不只是聽歌...什麼都可以。」（認真地說）',
            affinity: 12,
            next: 'sincere'
          }
        ]
      },
      {
        id: 'natural',
        bg: 'cafe',
        speaker: '玧其',
        text: '（盯著我看了好幾秒，然後移開視線，耳尖泛紅）......你真的很奇怪。\n（接過咖啡，喝了一口）......但我不討厭這種奇怪。',
        charEmoji: '🐱'
      },
      {
        id: 'sincere',
        bg: 'cafe',
        speaker: '玧其',
        text: '（手指無意識地敲了敲桌面，那是他緊張時的小動作）......什麼都可以？\n（輕哼一聲）小心我真的天天找你。煩死你。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '下午的時光在爵士樂和咖啡香裡慢慢流過。\n他難得地聊了很多——大邱的童年、偷偷學音樂的日子、\n在首爾當練習生時睡過的倉庫。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（看著窗外，聲音很輕）......我跟人說這些幹嘛。（揉了揉太陽穴）\n一定是今天太陽太大了，腦子燒壞了。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: '亮亮',
        text: '（笑了）玧其啊，你明明想說，幹嘛每次說完又要裝酷。',
        charEmoji: '💜'
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（被戳破，嘴角抽了一下）......吵死了。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '但他說「吵死了」的時候，聲音裡帶著笑意。\n\n離開的時候，他走在我前面半步。突然停下——',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: '玧其',
        text: '（背對著我）......今天。是我出道以來放假放得最久的一天。\n（低聲）也是最不想結束的一天。',
        charEmoji: '🐱'
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '他沒有回頭，但我看到他耳朵紅透了。\n\n夕陽把弘大的巷弄染成了橘色，我的心跳聲大到蓋過了遠處的街頭音樂。',
        charEmoji: null
      },
      {
        bg: 'cafe',
        speaker: null,
        text: '💕 玧其好感度 +20\n🌟 解鎖CG：午後咖啡廳的陽光\n💌 關係進展：從聽眾變成知己\n\n【第三章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        cg: 'sg_ch3_real'
      }
    ]
  },

  // Chapter 4: 為你寫的一首歌
  chapter4: {
    id: 'sg_ch4',
    title: '第四章：為你寫的一首歌',
    subtitle: 'Chapter 4: A Song Written for You',
    requirement: { affinity: 55, month: 8 },
    triggerAction: 'any',
    bgKey: 'studio',
    scenes: [
      {
        bg: 'studio',
        speaker: null,
        text: '八月。首爾的夜晚悶熱得像要融化。\n\n收到訊息的時候已經凌晨兩點：\n「來錄音室。有東西給你聽。急。」',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '推開錄音室的門，他坐在那張熟悉的轉椅裡。\n但今天有點不一樣——桌上沒有咖啡罐，地上也收拾得很乾淨。\n他甚至......換了一件沒有皺摺的黑色襯衫。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（看到我的瞬間，表情閃過一絲緊張，但立刻恢復淡漠）......坐。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '亮亮',
        text: '（坐下）你今天......好像不太一樣？',
        charEmoji: '💜'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（猛地轉回螢幕）哪裡不一樣。一樣的人一樣的錄音室。別廢話了，聽歌。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他按下播放鍵。\n\n和以前聽的 demo 完全不同。這不是 Agust D 的硬派說唱，\n也不是 SUGA 的舞台曲風。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '鋼琴旋律溫柔得像是在輕聲耳語。\n然後是他的聲音，不是 rap，而是唱——\n\n那個平時說話懶洋洋的人，唱起歌來聲音竟然這麼溫柔。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「深夜便利商店的燈光下\n你聽見了我藏在 bass line 裡的秘密\n\n比起四萬人的歡呼\n你一個人的安靜\n讓我更想寫歌」',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '「我不太會說好聽的話\n所以把想說的都寫成了旋律\n\n如果你聽得懂\n那這首歌就是我的——」',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: null,
        text: '歌在這裡突然停了。未完成的結尾，留下一片寂靜。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（背對著我，聲音異常平靜）......最後一句歌詞。我寫不出來。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（緩緩轉過身，那雙總是慵懶的貓眼此刻清醒得發亮）\n因為最後一句......不是寫出來的。是要親口說的。',
        charEmoji: '🐱'
      },
      {
        bg: 'studio',
        speaker: null,
        text: '他站起身，走到我面前。\n閔玧其離我很近。近到我能看見他睫毛的弧度，和貓眼裡映出的我的倒影。',
        charEmoji: null
      },
      {
        bg: 'studio',
        speaker: '玧其',
        text: '（聲音低得幾乎聽不見）......那首歌是寫給你的。\n你聽出來了嗎。808 girl。',
        charEmoji: '🐱'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜「我聽出來了...從第一個音符開始。」（眼眶泛紅，伸手碰他的手指）',
            affinity: 15,
            next: 'touch'
          },
          {
            text: '🎵「最後一句歌詞...讓我猜——是告白嗎？」（心跳快到快昏倒但還是笑了）',
            affinity: 15,
            next: 'tease'
          }
        ]
      },
      {
        id: 'touch',
        bg: 'studio',
        speaker: '玧其',
        text: '（低頭看著兩人碰在一起的手指，喉結滾動了一下）......第一個音符就聽出來了？\n（輕輕把手指穿進我的指縫裡）......你真的很煩。讓我完全無法專心做別的音樂。',
        charEmoji: '🐱'
      },
      {
        id: 'tease',
        bg: 'studio',
        speaker: '玧其',
        text: '（臉瞬間紅了，別過頭去）......你、別自作多情。\n（沉默了三秒，小聲）......但你猜對了。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他牽著我的手走上了 HYBE 大樓的天台。\n\n八月的首爾夜空，城市的光汙染把星星都藏了起來，\n但燈火萬家的夜景像是另一片銀河。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '玧其',
        text: '（靠在欄杆上，風吹亂了他的薄荷色瀏海）......我不擅長這些。\n約人出門、說好聽的話、表達感情。做音樂比這些簡單一萬倍。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: '玧其',
        text: '但是......（深吸一口氣）有個人讓我想要嘗試。\n一個會在凌晨的便利商店幫我數咖啡罐的笨蛋。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他轉過身看著我，夜風把他的聲音吹得很輕很輕——',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '玧其',
        text: '亮亮。你願不願意......繼續當我的深夜知己？\n不只是聽歌。是......所有的深夜。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: '亮亮',
        text: '（握緊他的手，笑著點頭）所有的深夜。還有白天也是。',
        charEmoji: '💜'
      },
      {
        bg: 'rooftop',
        speaker: '玧其',
        text: '（把帽子壓低遮住眼睛，但嘴角的弧度再也藏不住）......吵死了。\n（停頓很久）......謝謝。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '他把我的手拉過去，放在他的胸口。\n隔著黑色襯衫，我感覺到他的心跳——快得不像話。',
        charEmoji: null
      },
      {
        bg: 'rooftop',
        speaker: '玧其',
        text: '（極小聲）......看到了嗎。這就是你害的。還說什麼冷酷天才。全是騙人的。',
        charEmoji: '🐱'
      },
      {
        bg: 'rooftop',
        speaker: null,
        text: '💕 玧其好感度 +25\n🌟 解鎖CG：天台夜景下的心跳\n💌 關係進展：心意相通\n🎵 解鎖玧其專屬歌曲\n\n【第四章完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 25,
        cg: 'sg_ch4_real'
      }
    ]
  },

  // Chapter 5: Agust D 的告白
  chapter5: {
    id: 'sg_ch5',
    title: '第五章：Agust D 的告白',
    subtitle: 'Chapter 5: Agust D\'s Confession',
    requirement: { affinity: 75, month: 12, savings: 80000, korean: 55, fanLevel: 65 },
    triggerAction: 'concert',
    bgKey: 'concert',
    scenes: [
      {
        bg: 'concert',
        speaker: null,
        text: '十二月。首爾奧林匹克體操競技場。\n\n「Agust D WORLD TOUR : D-DAY」的巨幅海報在寒風中飄動。\n今天是 Agust D 世巡首爾安可場——也是我追了一整年才走到的終點。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '手機亮了，一則訊息：\n\n「今天坐第三排。不要遲到。」\n\n然後第二則：\n「......最後一首歌的時候，不要閉眼睛。」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '場館裡擠滿了揮舞 ARMY BOMB 的人海，紫色的光芒像是呼吸一樣此起彼伏。\n\n燈光驟暗——全場沸騰。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '舞台上的煙霧中，一個身影緩緩走出。\n\n黑色皮衣、銀色項鏈、眼線銳利得像要把世界劃開——\n這是 Agust D。不是便利商店裡吃泡麵的閔玧其，\n是站在萬人面前、用音樂征服世界的那個人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他的 rap 像子彈一樣掃過全場，每一個字都精準而炙熱。\n台下的尖叫聲震耳欲聾，但我只聽得見他的聲音。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「Daechwita」、「Agust D」、「People」......一首接一首，\n他在舞台上燃燒著，汗水在聚光燈下閃爍如星。\n\n然後——安可曲結束後，他沒有離開舞台。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '玧其',
        text: '（拿著麥克風，大口喘氣，聲音沙啞）......等一下。還有一首。',
        charEmoji: '🐱'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '全場安靜下來。他把麥克風架調低，坐到了舞台邊緣的鋼琴前。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '玧其',
        text: '（對著萬人說，但目光只看向一個方向——我的方向）\n這首歌......沒有收錄在任何專輯裡。只在錄音室裡放過一次。\n那天晚上聽到的人，現在就坐在台下。',
        charEmoji: '🐱'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '全場倒吸一口氣，然後爆發出驚天動地的尖叫。\n而我的心跳已經停了。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他的手指落在琴鍵上。\n\n是那首歌。那個八月的深夜，在錄音室裡為我唱的那首未完成的歌。\n\n但今天——有了最後一句。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '鋼琴旋律溫柔地流淌在偌大的場館裡，一萬多人安靜得像在做夢。\n\n他開始唱。不是 rap，是真的在唱。\n那個不擅長表達感情的人，把所有的溫柔都揉進了旋律裡。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '「深夜便利商店的燈光下\n你聽見了我藏在 bass line 裡的秘密\n\n比起四萬人的歡呼\n你一個人的安靜\n讓我更想寫歌」',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '然後——他從鋼琴前站起來。\n拿起麥克風，走到舞台最前方，在聚光燈下直直地看著我。\n\n開始 rap。但不是那種硬派的，而是一字一句、清清楚楚的告白：',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: '玧其',
        text: '「我不太會說漂亮的話\n所以讓我用我最擅長的方式\n\n你是我所有深夜的意義\n你是我寫不出歌詞時唯一的靈感\n你是讓閔玧其這個工作狂\n願意放下滑鼠走出錄音室的理由」',
        charEmoji: '🐱'
      },
      {
        bg: 'concert',
        speaker: '玧其',
        text: '「他們說 Agust D 是冷酷的\n他們說閔玧其不懂浪漫\n但你知道的——\n\n我只是把所有的溫柔\n都留給了一個人」',
        charEmoji: '🐱'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '全場的 ARMY BOMB 瘋狂搖晃，尖叫聲和哭聲此起彼伏。\n\n而我——眼淚早就止不住了。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '他在舞台上對著我的方向，做了一個只有我們懂的手勢——\n用手指點了點嘴唇。\n\n「噓。」\n\n和便利商店那天一模一樣。',
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
        text: '工作人員帶我穿過層層安保，走進後台的化妝間。\n\n門開了。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '閔玧其靠在化妝台旁邊。舞台妝還沒卸，眼線在汗水的暈染下有些模糊。\n黑色皮衣的拉鏈開了一半，裡面的黑T恤被汗水打濕，貼在鎖骨的線條上。\n\n他看到我的瞬間——那張冷酷的臉，裂開了。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（嘴唇動了動，聲音啞得不像話）......你哭了。',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（擦眼淚擦不完）你在台上說那些...你明明說你不擅長表達感情的...！',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（走過來，動作很慢，像是在克服什麼巨大的猶豫）\n......我確實不擅長。（停在我面前）所以我花了四個月寫那段 rap。\n改了三十七個版本。只為了......',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（聲音破碎了一瞬間）......只為了讓你聽懂。',
        charEmoji: '🐱'
      },
      {
        type: 'choice',
        speaker: null,
        text: '',
        choices: [
          {
            text: '💜（伸手摸他的臉）「我每一個版本都聽懂了。從第一個音符開始。」',
            affinity: 20,
            next: 'touch_ending'
          },
          {
            text: '🐱（撲進他懷裡）「閔玧其你這個笨蛋...我喜歡你。」',
            affinity: 20,
            next: 'hug_ending'
          }
        ]
      },
      {
        id: 'touch_ending',
        bg: 'backstage',
        speaker: '玧其',
        text: '（被我碰到臉的瞬間整個人僵住，然後慢慢閉上眼睛，睫毛在顫抖）\n......你知道嗎。我寫過幾百首歌。但沒有任何一首......比你這句話更動聽。',
        charEmoji: '🐱'
      },
      {
        id: 'hug_ending',
        bg: 'backstage',
        speaker: '玧其',
        text: '（身體劇烈一震，雙手懸在半空好幾秒，才慢慢地、用力地環住我的背）\n......笨蛋是你。（聲音在發抖）跑來首爾追一個工作狂的人才是笨蛋......',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: null,
        text: '後台的燈光昏暗而溫暖。遠處還能聽見散場的觀眾在走廊裡的歡呼聲。\n\n但在這個小小的空間裡，只有我們兩個人的心跳聲。',
        charEmoji: null
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（額頭抵著我的額頭，呼吸交錯）......我以前覺得音樂就是我的全部。\n錄音室、旋律、節拍，就是閔玧其活著的意義。',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '但是現在......（手指輕輕擦掉我臉上的淚痕）\n你讓我知道，錄音室的門是可以打開的。外面也有值得走出去的理由。',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（輕輕笑了，笑容溫柔得不像是 Agust D）\n\n亮亮。從今以後，我寫的每一首歌......第一個聽的人都是你。\n最後一首歌......也是為你寫的。\n\n......一直到最後。',
        charEmoji: '🐱'
      },
      {
        bg: 'backstage',
        speaker: '亮亮',
        text: '（笑著哭著，握住他的手）好。一直到最後。',
        charEmoji: '💜'
      },
      {
        bg: 'backstage',
        speaker: '玧其',
        text: '（把我的手拉起來放在唇邊，輕輕碰了一下）\n......吵死了。不准再哭了。\n\n（停頓很久，用氣音說）......사랑해。',
        charEmoji: '🐱'
      },
      {
        bg: 'concert',
        speaker: null,
        text: '窗外，十二月的首爾飄起了初雪。\n\n白色的雪花和紫色的應援棒光芒交錯，像是一場為我們而下的夢。\n\n這一年——從深夜便利商店的一碗泡麵開始，\n到萬人面前的一段 rap 告白結束。\n\n不是因為他是 Agust D。\n而是因為他是閔玧其。那個會在凌晨三點幫我買泡麵的人。',
        charEmoji: null
      },
      {
        bg: 'concert',
        speaker: null,
        text: '🎊 恭喜通關！玧其路線完成！\n\n💕 好感度 MAX\n🏆 獲得成就：深夜知己\n🎵 解鎖：玧其專屬主題曲完整版\n📸 解鎖：全部CG回憶\n\n✨ HAPPY ENDING ✨\n\n【第五章 · 完】',
        charEmoji: null,
        isEnding: true,
        affinityGain: 20,
        isFinalEnding: true,
        cg: 'sg_ch5_real'
      }
    ]
  }
};
