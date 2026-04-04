// ======================================
// BTS Star Chase - Game Engine
// ======================================

const Game = {
  // Game State
  state: {
    month: 1,
    week: 1,
    actionsLeft: 2,
    savings: 15000,
    korean: 5,
    fanLevel: 10,
    stamina: 80,
    affinity: {
      jungkook: 0,
      taehyung: 0,
      jimin: 0,
      suga: 0,
      rm: 0
    },
    // Story progress (per-character chapter tracker)
    chapterProgress: {
      jungkook: 0,
      taehyung: 0,
      jimin: 0,
      suga: 0,
      rm: 0
    },
    jungkookChapter: 0, // kept for backward compatibility
    encountersSeen: {},
    unlockedCGs: [],
    currentScene: null,
    sceneIndex: 0,
    choiceBranch: null,
    gameStarted: false,
    gameEnded: false,
    // News / events log
    newsLog: [],
    // Flags
    hasJKContact: false,
    concertReady: false
  },

  // Month names
  monthNames: [
    '', '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ],

  // Background configs with real images
  backgrounds: {
    gym: { img: 'assets/images/bg_gym.png', color: '#2c3e50', name: '健身房' },
    fansign: { img: 'assets/images/bg_fansign.png', color: '#8e44ad', name: '簽售會場' },
    hanriver: { img: 'assets/images/bg_hanriver.png', color: '#1a3a4a', name: '漢江河畔' },
    studio: { img: 'assets/images/bg_studio.png', color: '#1a1a2e', name: '錄音室' },
    rooftop: { img: 'assets/images/bg_rooftop.png', color: '#0c0c1d', name: '天台' },
    concert: { img: 'assets/images/bg_concert.png', color: '#1a0033', name: '演唱會場' },
    concert_ext: { img: 'assets/images/bg_concert_ext.png', color: '#2d1b4e', name: '場館外' },
    backstage: { img: 'assets/images/bg_backstage.png', color: '#1a1a1a', name: '後台' },
    gallery: { img: 'assets/images/bg_cafe.png', color: '#2c2c3e', name: '美術館' },
    convenience: { img: 'assets/images/bg_convenience.png', color: '#1a2a1a', name: '便利商店' },
    bookstore: { img: 'assets/images/bg_bookstore.png', color: '#3e2c1a', name: '書店' },
    cafe: { img: 'assets/images/bg_cafe.png', color: '#3e2a1a', name: '咖啡廳' },
    room: { img: 'assets/images/bg_room.png', color: '#2a1a3e', name: '亮亮的房間' },
    office: { img: 'assets/images/bg_office.png', color: '#2c3e50', name: '辦公室' },
    classroom: { img: 'assets/images/bg_classroom.png', color: '#2e4a3e', name: '韓語教室' },
    airport: { img: 'assets/images/bg_airport.png', color: '#34495e', name: '機場' },
    seoul: { img: 'assets/images/bg_seoul.png', color: '#1a2a3e', name: '首爾街頭' }
  },

  // Character images
  charImages: {
    jungkook: {
      default: 'assets/images/char_jk_default.png',
      workout: 'assets/images/char_jk_workout.png',
      stage: 'assets/images/char_jk_stage.png',
      cafe: 'assets/images/char_jk_cafe.png',
      night: 'assets/images/char_jk_night.png',
      cooking: 'assets/images/char_jk_cooking.png',
      beach: 'assets/images/char_jk_beach.png',
      singing: 'assets/images/char_jk_singing.png'
    },
    taehyung: {
      default: 'assets/images/char_v_default.png',
      gallery: 'assets/images/char_v_gallery.png'
    },
    jimin: {
      default: 'assets/images/char_jimin_default.png',
      dance: 'assets/images/char_jimin_dance.png'
    },
    suga: {
      default: 'assets/images/char_suga_default.png',
      studio: 'assets/images/char_suga_studio.png'
    },
    rm: {
      default: 'assets/images/char_rm_default.png',
      bookstore: 'assets/images/char_rm_bookstore.png'
    },
    liangliang: {
      default: 'assets/images/char_liangliang.png',
      work: 'assets/images/char_liangliang_work.png',
      concert: 'assets/images/char_liangliang_concert.png'
    }
  },

  // CG images
  cgImages: {
    concert_finale: 'assets/images/cg_concert_finale.png',
    jk_fansign: 'assets/images/cg_jk_fansign.png',
    jk_rooftop: 'assets/images/cg_jk_rooftop.png',
    jk_rain: 'assets/images/cg_jk_rain.png',
    jk_backhug: 'assets/images/cg_jk_backhug.png',
    jk_ch1_real: 'assets/images/cg_jk_ch1_real.png',
    jk_ch2_real: 'assets/images/cg_jk_ch2_real.png',
    jk_ch3_real: 'assets/images/cg_jk_ch3_real.png',
    jk_ch4_real: 'assets/images/cg_jk_ch4_real.png',
    jk_ch5_real: 'assets/images/cg_jk_ch5_real.png',
    v_ch1_real: 'assets/images/cg_v_ch1_real.png',
    v_ch2_real: 'assets/images/cg_v_ch2_real.png',
    v_ch3_real: 'assets/images/cg_v_ch3_real.png',
    v_ch4_real: 'assets/images/cg_v_ch4_real.png',
    v_ch5_real: 'assets/images/cg_v_ch5_real.png',
    jm_ch1_real: 'assets/images/cg_jm_ch1_real.png',
    jm_ch2_real: 'assets/images/cg_jm_ch2_real.png',
    jm_ch3_real: 'assets/images/cg_jm_ch3_real.png',
    jm_ch4_real: 'assets/images/cg_jm_ch4_real.png',
    jm_ch5_real: 'assets/images/cg_jm_ch5_real.png',
    sg_ch1_real: 'assets/images/cg_sg_ch1_real.png',
    sg_ch2_real: 'assets/images/cg_sg_ch2_real.png',
    sg_ch3_real: 'assets/images/cg_sg_ch3_real.png',
    sg_ch4_real: 'assets/images/cg_sg_ch4_real.png',
    sg_ch5_real: 'assets/images/cg_sg_ch5_real.png',
    rm_ch1_real: 'assets/images/cg_rm_ch1_real.png',
    rm_ch2_real: 'assets/images/cg_rm_ch2_real.png',
    rm_ch3_real: 'assets/images/cg_rm_ch3_real.png',
    rm_ch4_real: 'assets/images/cg_rm_ch4_real.png',
    rm_ch5_real: 'assets/images/cg_rm_ch5_real.png'
  },

  // Actions definition
  actions: [
    {
      id: 'news', icon: '📱', name: '追星聞',
      desc: '瀏覽BTS最新消息',
      effects: { fanLevel: [5, 10], stamina: [-3, -5] },
      encounter: null
    },
    {
      id: 'work', icon: '💼', name: '加班工作',
      desc: '努力存演唱會基金',
      effects: { savings: [5000, 8000], stamina: [-12, -18] },
      encounter: 'suga'
    },
    {
      id: 'korean', icon: '📖', name: '學韓語',
      desc: '한국어 공부하기!',
      effects: { korean: [5, 10], stamina: [-8, -12] },
      encounter: 'rm'
    },
    {
      id: 'drama', icon: '📺', name: '追韓劇',
      desc: '邊追劇邊練聽力',
      effects: { fanLevel: [2, 4], korean: [1, 3], stamina: [-3, -5] },
      encounter: 'taehyung'
    },
    {
      id: 'exercise', icon: '🏋️', name: '運動健身',
      desc: '鍛鍊體力追星本錢',
      effects: { stamina: [15, 25] },
      encounter: 'jungkook'
    },
    {
      id: 'dance', icon: '💃', name: '學跳舞',
      desc: '學習BTS舞蹈',
      effects: { fanLevel: [4, 7], stamina: [-8, -12] },
      encounter: 'jimin'
    },
    {
      id: 'travel', icon: '✈️', name: '旅遊規劃',
      desc: '計劃首爾行程',
      effects: { savings: [-2000, -3500], fanLevel: [8, 12] },
      encounter: null
    },
    {
      id: 'merch', icon: '🛍️', name: '買周邊',
      desc: '購入應援物品',
      effects: { savings: [-1500, -2500], fanLevel: [6, 10] },
      encounter: null
    }
  ],

  // Random news events
  newsEvents: [
    { text: '📰 BTS 宣布年底世界巡迴演唱會「FOREVER YOUNG」！首爾場12月開唱！', fanLevel: 5 },
    { text: '📸 柾國更新了Instagram！健身房自拍...那個手臂肌肉線條...', fanLevel: 3 },
    { text: '🎵 BTS 新專輯預告公開！概念照帥到犯規！', fanLevel: 4 },
    { text: '📺 V 出演新韓劇預告釋出！演技太好了吧！', fanLevel: 3 },
    { text: '💜 ARMY 全球應援企劃啟動！集資為BTS送生日禮物', fanLevel: 5 },
    { text: '🏆 BTS 再次獲得音樂節目一位！ARMY 太驕傲了！', fanLevel: 4 },
    { text: '🎤 Jimin 直播唱歌！那個高音...天使的聲音...', fanLevel: 3 },
    { text: '🎹 Suga 發布新製作歌曲預告！Agust D 回歸！', fanLevel: 4 },
    { text: '📚 RM 推薦了新書單！果然是知性leader', fanLevel: 2 },
    { text: '🏋️ 柾國直播健身過程！ARMY集體暴動！', fanLevel: 5 },
    { text: '💜 BTS 演唱會門票開售日期確定了！要搶票！！', fanLevel: 8 },
    { text: '🌐 BTS 世界巡迴新增亞洲場次！離我們更近了！', fanLevel: 6 }
  ],

  // Initialize
  init() {
    this.preloadImages(() => {
      this.bindEvents();
      this.showScreen('title-screen');
      this.createStars();
      this.loadGame();
    });
  },

  // Image Preloader
  preloadImages(callback) {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');
    const loadingBar = document.getElementById('loading-bar-fill');

    // Collect all image URLs
    const urls = [];
    Object.values(this.backgrounds).forEach(bg => { if (bg.img) urls.push(bg.img); });
    Object.values(this.charImages).forEach(poses => {
      Object.values(poses).forEach(url => urls.push(url));
    });
    Object.values(this.cgImages).forEach(url => urls.push(url));
    urls.push('assets/images/action_bg_armybomb.png');

    if (urls.length === 0) {
      loadingScreen.style.display = 'none';
      callback();
      return;
    }

    let loaded = 0;
    const total = urls.length;

    const onLoad = () => {
      loaded++;
      const pct = Math.round((loaded / total) * 100);
      loadingBar.style.width = pct + '%';
      loadingText.textContent = `載入資源中... ${loaded}/${total}`;

      if (loaded >= total) {
        loadingText.textContent = '準備就緒！';
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            callback();
          }, 400);
        }, 300);
      }
    };

    urls.forEach(url => {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad; // Don't block on failed images
      img.src = url;
    });

    // Fallback timeout: if loading takes too long, proceed anyway
    setTimeout(() => {
      if (loaded < total) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          callback();
        }, 400);
      }
    }, 15000);
  },

  // Event binding
  bindEvents() {
    // Title buttons
    document.getElementById('btn-new-game').addEventListener('click', () => this.startNewGame());
    document.getElementById('btn-continue').addEventListener('click', () => this.continueGame());
    document.getElementById('btn-characters').addEventListener('click', () => this.showCharacterSelect());

    // Intro
    document.getElementById('btn-start-journey').addEventListener('click', () => {
      this.state.gameStarted = true;
      this.saveGame();
      this.showGameplay();
    });

    // Rest button
    document.getElementById('btn-rest').addEventListener('click', () => this.performRest());

    // VN screen click to advance
    document.getElementById('vn-screen').addEventListener('click', (e) => {
      if (e.target.classList.contains('vn-choice')) return;
      this.advanceDialog();
    });

    // Result overlay
    document.getElementById('result-ok-btn').addEventListener('click', () => {
      this.hideResult();
    });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.state.gameStarted) {
          this.showGameplay();
        } else {
          this.showScreen('title-screen');
        }
      });
    });
  },

  // Screen management
  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  },

  // Create starry background
  createStars() {
    const bg = document.querySelector('.title-bg');
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
      star.style.animationDelay = Math.random() * 3 + 's';
      bg.appendChild(star);
    }
    // Floating lightsticks
    const sticks = ['💜', '🔮', '✨', '💫', '🦋', '💜', '✨'];
    sticks.forEach((emoji, i) => {
      const el = document.createElement('div');
      el.className = 'lightstick';
      el.textContent = emoji;
      el.style.left = (10 + Math.random() * 80) + '%';
      el.style.top = (10 + Math.random() * 80) + '%';
      el.style.setProperty('--dur', (4 + Math.random() * 4) + 's');
      el.style.animationDelay = Math.random() * 3 + 's';
      bg.appendChild(el);
    });
  },

  // New game
  startNewGame() {
    this.state = {
      month: 1, week: 1, actionsLeft: 2,
      savings: 15000, korean: 5, fanLevel: 10, stamina: 80,
      affinity: { jungkook: 0, taehyung: 0, jimin: 0, suga: 0, rm: 0 },
      chapterProgress: { jungkook: 0, taehyung: 0, jimin: 0, suga: 0, rm: 0 },
      jungkookChapter: 0,
      encountersSeen: {},
      unlockedCGs: [],
      currentScene: null, sceneIndex: 0, choiceBranch: null,
      gameStarted: false, gameEnded: false,
      newsLog: [], hasJKContact: false, concertReady: false
    };
    this.showScreen('intro-screen');
  },

  // Continue game
  continueGame() {
    if (this.state.gameStarted) {
      this.showGameplay();
    } else {
      this.notify('還沒有存檔，請開始新遊戲！');
    }
  },

  // Show gameplay
  showGameplay() {
    this.showScreen('gameplay-screen');
    this.updateStatusBar();
    this.renderActions();
  },

  // Update status bar
  updateStatusBar() {
    const s = this.state;
    document.getElementById('month-display').textContent =
      `${this.monthNames[s.month]} 第${s.week}週`;

    // Stats
    document.getElementById('stat-savings').textContent = `$${s.savings.toLocaleString()}`;
    document.getElementById('fill-savings').style.width = Math.min(100, s.savings / 1000) + '%';

    document.getElementById('stat-korean').textContent = s.korean;
    document.getElementById('fill-korean').style.width = s.korean + '%';

    document.getElementById('stat-fan').textContent = s.fanLevel;
    document.getElementById('fill-fan').style.width = s.fanLevel + '%';

    document.getElementById('stat-stamina').textContent = s.stamina;
    document.getElementById('fill-stamina').style.width = s.stamina + '%';
  },

  // Render action cards — 3×3 grid with 8 actions + rest
  renderActions() {
    const grid = document.getElementById('action-grid');
    grid.innerHTML = '';
    const left = this.state.actionsLeft;

    // Render 8 action buttons
    this.actions.forEach(action => {
      const card = document.createElement('div');
      card.className = 'action-card';

      // Check if stamina enough
      const minStamina = action.effects.stamina ? Math.abs(action.effects.stamina[0]) : 0;
      const cantAfford = action.effects.savings && action.effects.savings[0] < 0 &&
        this.state.savings < Math.abs(action.effects.savings[0]);

      if ((this.state.stamina < minStamina && action.effects.stamina && action.effects.stamina[0] < 0) || cantAfford) {
        card.classList.add('disabled');
      }
      if (left <= 0) {
        card.classList.add('disabled');
      }

      card.innerHTML = `
        <div class="icon">${action.icon}</div>
        <div class="name">${action.name}</div>
      `;

      card.addEventListener('click', () => {
        if (!card.classList.contains('disabled')) {
          this.performAction(action);
        }
      });

      grid.appendChild(card);
    });

    // 9th card: Rest (always visible in grid)
    const restCard = document.createElement('div');
    restCard.className = 'action-card rest-card';
    if (left <= 0 || this.state.stamina >= 95) {
      restCard.classList.add('disabled');
    }
    restCard.innerHTML = `
      <div class="icon">😴</div>
      <div class="name">休息</div>
    `;
    restCard.addEventListener('click', () => {
      if (!restCard.classList.contains('disabled')) {
        this.performRest();
      }
    });
    grid.appendChild(restCard);

    // Actions left display
    const actionsLeftEl = document.getElementById('actions-left');
    actionsLeftEl.textContent = `剩餘：${left} / 2`;
    actionsLeftEl.style.background = left > 0 ? 'var(--primary-light)' : 'rgba(231,76,60,0.15)';
    actionsLeftEl.style.color = left > 0 ? 'var(--primary-dark)' : 'var(--danger)';

    // Footer: next week button
    const restBtn = document.getElementById('btn-rest');
    const nextBtn = document.getElementById('next-week-btn');
    restBtn.style.display = 'none'; // Rest is now in the grid
    nextBtn.style.display = left <= 0 ? 'block' : 'none';
    nextBtn.onclick = () => this.advanceWeek();
  },

  // Rest action (uses 1 action to recover stamina)
  performRest() {
    if (this.state.actionsLeft <= 0) return;
    this.state.actionsLeft--;

    const recovery = 20 + Math.floor(Math.random() * 15);
    this.state.stamina = Math.min(100, this.state.stamina + recovery);

    this.showResult(
      { icon: '😴', name: '休息' },
      { stamina: recovery },
      null, null
    );
    this.updateStatusBar();
    this.renderActions();
    this.saveGame();
  },

  // Perform action
  performAction(action) {
    if (this.state.actionsLeft <= 0) return;
    this.state.actionsLeft--;

    const results = {};
    const effectKeys = Object.keys(action.effects);

    effectKeys.forEach(key => {
      const [min, max] = action.effects[key];
      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      results[key] = value;

      // Apply
      if (key === 'savings') {
        this.state.savings = Math.max(0, this.state.savings + value);
      } else if (key === 'korean') {
        this.state.korean = Math.min(100, Math.max(0, this.state.korean + value));
      } else if (key === 'fanLevel') {
        this.state.fanLevel = Math.min(100, Math.max(0, this.state.fanLevel + value));
      } else if (key === 'stamina') {
        this.state.stamina = Math.min(100, Math.max(0, this.state.stamina + value));
      }
    });

    // Random news event for 'news' action
    let newsEvent = null;
    if (action.id === 'news') {
      newsEvent = this.newsEvents[Math.floor(Math.random() * this.newsEvents.length)];
      this.state.fanLevel = Math.min(100, this.state.fanLevel + newsEvent.fanLevel);
      this.state.newsLog.push(newsEvent.text);
    }

    // Check for encounter
    let encounter = null;
    if (action.encounter) {
      encounter = this.checkEncounter(action);
    }

    // Show result
    this.showResult(action, results, newsEvent, encounter);
    this.updateStatusBar();
    this.renderActions();
    this.saveGame();
  },

  // Route map — maps character ID to their route data
  getRouteData(charId) {
    const routeMap = {
      jungkook: typeof JUNGKOOK_ROUTE !== 'undefined' ? JUNGKOOK_ROUTE : null,
      taehyung: typeof TAEHYUNG_ROUTE !== 'undefined' ? TAEHYUNG_ROUTE : null,
      jimin: typeof JIMIN_ROUTE !== 'undefined' ? JIMIN_ROUTE : null,
      suga: typeof SUGA_ROUTE !== 'undefined' ? SUGA_ROUTE : null,
      rm: typeof RM_ROUTE !== 'undefined' ? RM_ROUTE : null
    };
    return routeMap[charId] || null;
  },

  // Check encounter — works for all characters
  checkEncounter(action) {
    const charId = action.encounter;
    const char = CHARACTERS[charId];
    const s = this.state;

    // Base rate 15%, +1% per fanLevel above 20, +1% per korean above 20
    let rate = 0.15;
    if (s.fanLevel > 20) rate += (s.fanLevel - 20) * 0.01;
    if (s.korean > 20) rate += (s.korean - 20) * 0.005;
    rate = Math.min(0.6, rate);

    // All characters use the chapter system now
    const route = this.getRouteData(charId);
    if (route) {
      const chapter = this.getNextChapter(charId, route);
      if (chapter && Math.random() < rate) {
        return { type: 'chapter', charId, chapter };
      }
    }

    return null;
  },

  // Get next available chapter for any character
  getNextChapter(charId, route) {
    const s = this.state;
    const progress = s.chapterProgress[charId] || (charId === 'jungkook' ? s.jungkookChapter : 0);

    for (let i = 1; i <= 5; i++) {
      const chKey = 'chapter' + i;
      if (!route[chKey]) continue;
      if (progress >= i) continue;

      const req = route[chKey].requirement;
      let met = true;
      if (req.month && s.month < req.month) met = false;
      if (req.fanLevel && s.fanLevel < req.fanLevel) met = false;
      if (req.korean && s.korean < req.korean) met = false;
      if (req.affinity && (s.affinity[charId] || 0) < req.affinity) met = false;
      if (req.savings && s.savings < req.savings) met = false;

      if (met) return { key: chKey, num: i };
      break; // Must be sequential
    }
    return null;
  },

  // Show action result
  showResult(action, results, newsEvent, encounter) {
    const overlay = document.getElementById('result-overlay');
    const title = document.getElementById('result-title');
    const stats = document.getElementById('result-stats');
    const encounterDiv = document.getElementById('result-encounter');

    title.textContent = `${action.icon} ${action.name}`;

    // Build stats display
    let statsHTML = '';
    const labels = {
      savings: '💰 存款', korean: '📚 韓語', fanLevel: '🌟 追星熱度', stamina: '💪 體力'
    };

    Object.keys(results).forEach(key => {
      const val = results[key];
      const sign = val >= 0 ? '+' : '';
      const cls = val >= 0 ? 'positive' : 'negative';
      const display = key === 'savings' ? `${sign}$${Math.abs(val).toLocaleString()}` : `${sign}${val}`;
      statsHTML += `
        <div class="result-stat">
          <span>${labels[key]}</span>
          <span class="change ${cls}">${display}</span>
        </div>`;
    });

    if (newsEvent) {
      statsHTML += `
        <div class="result-stat" style="margin-top:8px; background:rgba(243,156,18,0.15);">
          <span style="font-size:0.8rem; line-height:1.4;">${newsEvent.text}</span>
        </div>`;
    }

    stats.innerHTML = statsHTML;

    // Encounter
    if (encounter) {
      const char = CHARACTERS[encounter.charId];
      encounterDiv.innerHTML = `
        <div class="encounter-alert">
          ${char.emoji} 觸發邂逅事件！與${char.name}的相遇！
        </div>`;
      encounterDiv.style.display = 'block';

      // Override OK button to start VN
      document.getElementById('result-ok-btn').onclick = () => {
        this.hideResult();
        this.startEncounter(encounter);
      };
    } else {
      encounterDiv.style.display = 'none';
      document.getElementById('result-ok-btn').onclick = () => this.hideResult();
    }

    overlay.classList.add('active');
  },

  hideResult() {
    document.getElementById('result-overlay').classList.remove('active');
  },

  // Start encounter / VN scene
  startEncounter(encounter) {
    if (encounter.type === 'chapter') {
      const route = this.getRouteData(encounter.charId);
      if (route) {
        const chapterData = route[encounter.chapter.key];
        this.startVNScene(chapterData.scenes, chapterData.title, encounter.charId, encounter.chapter.num);
      }
    }
  },

  // VN Scene Engine
  startVNScene(scenes, title, charId, chapterNum) {
    this.state.currentScene = scenes;
    this.state.sceneIndex = 0;
    this.state.choiceBranch = null;
    this._vnCharId = charId;
    this._vnChapterNum = chapterNum;
    this._vnTitle = title;
    this._typingInterval = null;
    this._isTyping = false;
    this._currentFullText = '';

    this._endingApplied = false;
    this.showScreen('vn-screen');

    // Show chapter title briefly
    this.showChapterTitle(title, () => {
      this.renderVNScene();
    });
  },

  showChapterTitle(title, callback) {
    const vnBg = document.getElementById('vn-bg');
    const vnDialog = document.getElementById('vn-dialog-box');
    const vnChar = document.getElementById('vn-character');

    vnBg.style.background = 'var(--gradient-night)';
    vnChar.style.display = 'none';
    vnDialog.style.display = 'none';

    // Create title overlay
    let titleEl = document.getElementById('chapter-title-overlay');
    if (!titleEl) {
      titleEl = document.createElement('div');
      titleEl.id = 'chapter-title-overlay';
      titleEl.style.cssText = `
        position:absolute; top:0; left:0; width:100%; height:100%;
        display:flex; flex-direction:column; justify-content:center; align-items:center;
        z-index:10; color:white; text-align:center;
      `;
      document.getElementById('vn-screen').appendChild(titleEl);
    }

    titleEl.innerHTML = `
      <div style="font-family:'Noto Serif TC',serif; font-size:1.8rem; margin-bottom:0.5rem;
                  animation: fadeInUp 1s ease forwards; opacity:0;">
        ${title}
      </div>
      <div style="font-size:0.9rem; color:rgba(255,255,255,0.5); letter-spacing:4px;
                  animation: fadeInUp 1s ease 0.3s forwards; opacity:0;">
        點擊繼續
      </div>
    `;
    titleEl.style.display = 'flex';

    const handler = () => {
      titleEl.style.display = 'none';
      document.getElementById('vn-screen').removeEventListener('click', handler);
      callback();
    };

    setTimeout(() => {
      document.getElementById('vn-screen').addEventListener('click', handler, { once: false });
    }, 500);
  },

  renderVNScene() {
    const scenes = this.state.currentScene;
    let idx = this.state.sceneIndex;

    // Skip scenes with branch IDs if not matching current choice branch
    if (this.state.choiceBranch) {
      // We just made a choice, find the matching branch scene
      while (idx < scenes.length) {
        const scene = scenes[idx];
        if (scene.id === this.state.choiceBranch) {
          this.state.choiceBranch = null; // consume
          break;
        }
        idx++;
      }
    } else {
      // Normal flow: skip any scene that has a branch id (it belongs to a choice)
      while (idx < scenes.length && scenes[idx].id && !scenes[idx].type) {
        idx++;
      }
    }

    if (idx >= scenes.length) {
      this.endVNScene();
      return;
    }

    this.state.sceneIndex = idx;
    const scene = scenes[idx];

    const vnBg = document.getElementById('vn-bg');
    const vnDialog = document.getElementById('vn-dialog-box');
    const vnSpeaker = document.getElementById('vn-speaker');
    const vnText = document.getElementById('vn-text');
    const vnChoices = document.getElementById('vn-choices');
    const vnChar = document.getElementById('vn-character');
    const vnContinue = document.getElementById('vn-continue');

    vnDialog.style.display = 'block';

    // Background
    if (scene.bg && this.backgrounds[scene.bg]) {
      const bg = this.backgrounds[scene.bg];
      if (bg.img) {
        vnBg.style.background = `url('${bg.img}') center/cover no-repeat`;
      } else {
        vnBg.style.background = `radial-gradient(ellipse at center bottom, ${bg.color}, #0a0a1a)`;
      }
    }

    // CG override (full screen event image)
    if (scene.cg && this.cgImages[scene.cg]) {
      vnBg.style.background = `url('${this.cgImages[scene.cg]}') center/cover no-repeat`;
    }

    // Character image display
    if (scene.charEmoji && this._vnCharId) {
      const charImgs = this.charImages[this._vnCharId];
      const charImg = charImgs ? (charImgs[scene.charPose] || charImgs.default) : null;

      if (charImg) {
        vnChar.style.display = 'block';
        vnChar.textContent = '';
        vnChar.style.cssText = `
          position:absolute; bottom:180px; left:50%; transform:translateX(-50%);
          width:280px; height:350px; border-radius:20px; overflow:hidden;
          filter:drop-shadow(0 0 30px rgba(155,89,182,0.5));
          transition: all 0.5s ease;
          background: url('${charImg}') center/cover no-repeat;
        `;
      } else {
        vnChar.style.display = 'flex';
        vnChar.textContent = scene.charEmoji;
        vnChar.style.cssText = `
          position:absolute; bottom:200px; left:50%; transform:translateX(-50%);
          font-size:6rem; filter:drop-shadow(0 0 30px rgba(155,89,182,0.5));
          transition: all 0.5s ease;
        `;
      }
    } else if (scene.speaker === '亮亮') {
      const llImg = this.charImages.liangliang;
      if (llImg) {
        vnChar.style.display = 'block';
        vnChar.textContent = '';
        vnChar.style.cssText = `
          position:absolute; bottom:180px; left:50%; transform:translateX(-50%);
          width:250px; height:320px; border-radius:20px; overflow:hidden;
          filter:drop-shadow(0 0 20px rgba(155,89,182,0.4));
          transition: all 0.5s ease;
          background: url('${llImg.default}') center/cover no-repeat;
        `;
      }
    } else {
      vnChar.style.display = 'none';
    }

    // Handle choices
    if (scene.type === 'choice') {
      vnSpeaker.textContent = '';
      vnText.textContent = '請選擇...';
      vnContinue.style.display = 'none';
      vnChoices.innerHTML = '';
      vnChoices.style.display = 'flex';

      scene.choices.forEach(choice => {
        const btn = document.createElement('div');
        btn.className = 'vn-choice';
        btn.textContent = choice.text;
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          // Apply affinity
          if (choice.affinity) {
            this.state.affinity[this._vnCharId] += choice.affinity;
          }
          this.state.choiceBranch = choice.next;
          this.state.sceneIndex++;
          vnChoices.style.display = 'none';
          this.renderVNScene();
        });
        vnChoices.appendChild(btn);
      });
      return;
    }

    // Normal dialog
    vnChoices.style.display = 'none';

    // Speaker
    if (scene.speaker) {
      vnSpeaker.textContent = scene.speaker === '亮亮' ? '💜 亮亮' :
        scene.charName ? `${scene.charEmoji || ''} ${scene.charName}` :
        `${scene.charEmoji || ''} ${scene.speaker}`;
    } else {
      vnSpeaker.textContent = '';
    }

    // Typewriter text
    this._currentFullText = scene.text;
    this._isTyping = true;
    vnText.innerHTML = '';
    vnContinue.style.display = 'none';

    let charIdx = 0;
    clearInterval(this._typingInterval);
    this._typingInterval = setInterval(() => {
      if (charIdx < this._currentFullText.length) {
        vnText.textContent = this._currentFullText.substring(0, charIdx + 1);
        charIdx++;
      } else {
        clearInterval(this._typingInterval);
        this._isTyping = false;
        vnContinue.style.display = 'block';

        // Handle ending scene
        if (scene.isEnding && !this._endingApplied) {
          this._endingApplied = true;
          if (scene.affinityGain) {
            this.state.affinity[this._vnCharId] += scene.affinityGain;
            this.showAffinityPopup(scene.affinityGain);
          }
          if (this._vnChapterNum > 0) {
            if (this._vnCharId) {
              this.state.chapterProgress[this._vnCharId] = this._vnChapterNum;
            }
            this.state.jungkookChapter = this._vnChapterNum;
          }
        }
      }
    }, 35);
  },

  advanceDialog() {
    if (this._isTyping) {
      // Skip typing, show full text
      clearInterval(this._typingInterval);
      this._isTyping = false;
      document.getElementById('vn-text').textContent = this._currentFullText;
      document.getElementById('vn-continue').style.display = 'block';
      return;
    }

    if (!this.state.currentScene) return;
    const scenes = this.state.currentScene;
    const currentScene = scenes[this.state.sceneIndex];

    if (currentScene && currentScene.isEnding) {
      // Apply ending effects if not already applied by typewriter callback
      if (!this._endingApplied) {
        this._endingApplied = true;
        if (currentScene.affinityGain && this._vnCharId) {
          this.state.affinity[this._vnCharId] += currentScene.affinityGain;
          this.showAffinityPopup(currentScene.affinityGain);
        }
        if (this._vnChapterNum > 0) {
          this.state.jungkookChapter = this._vnChapterNum;
        }
      }
      this.endVNScene();
      return;
    }

    this.state.sceneIndex++;
    this.renderVNScene();
  },

  endVNScene() {
    this.state.currentScene = null;
    this.saveGame();
    this.showGameplay();

    // Check if game should end — any character route completed
    const anyRouteComplete = Object.values(this.state.chapterProgress).some(ch => ch >= 5) || this.state.jungkookChapter >= 5;
    if (this.state.month >= 12 && anyRouteComplete) {
      this.showEnding(true);
    }
  },

  showAffinityPopup(amount) {
    const popup = document.createElement('div');
    popup.className = 'affinity-popup';
    popup.textContent = `💕 +${amount}`;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1500);
  },

  // Advance week/month
  advanceWeek() {
    const s = this.state;

    // Natural stamina recovery
    s.stamina = Math.min(100, s.stamina + 10);

    if (s.week < 4) {
      s.week++;
    } else {
      // End of month
      s.week = 1;
      s.month++;

      if (s.month > 12) {
        this.checkFinalEnding();
        return;
      }

      this.showMonthTransition();
      return;
    }

    s.actionsLeft = 2;
    this.updateStatusBar();
    this.renderActions();
    this.saveGame();
  },

  showMonthTransition() {
    const s = this.state;

    // Check concert readiness
    const ready = s.savings >= 80000 && s.korean >= 60 && s.fanLevel >= 70;
    s.concertReady = ready;

    // If month 12 and any character chapter 5 is available, auto-trigger
    if (s.month === 12 && ready) {
      const charIds = ['jungkook', 'taehyung', 'jimin', 'suga', 'rm'];
      for (const cid of charIds) {
        const progress = s.chapterProgress[cid] || (cid === 'jungkook' ? s.jungkookChapter : 0);
        const route = this.getRouteData(cid);
        if (route && route.chapter5 && progress === 4) {
          const req = route.chapter5.requirement;
          if ((s.affinity[cid] || 0) >= (req.affinity || 0)) {
            this.startVNScene(route.chapter5.scenes, route.chapter5.title, cid, 5);
            return;
          }
        }
      }
    }

    const overlay = document.getElementById('result-overlay');
    const title = document.getElementById('result-title');
    const stats = document.getElementById('result-stats');
    const encounterDiv = document.getElementById('result-encounter');

    title.textContent = `📅 ${this.monthNames[s.month]} 開始了！`;

    let goalProgress = '';
    if (s.month >= 6) {
      goalProgress = `
        <div style="margin-top:12px; padding:12px; background:rgba(155,89,182,0.1); border-radius:8px; font-size:0.85rem; line-height:1.6;">
          <strong>🎯 演唱會目標進度</strong><br>
          存款：${s.savings >= 80000 ? '✅' : '❌'} $${s.savings.toLocaleString()} / $80,000<br>
          韓語：${s.korean >= 60 ? '✅' : '❌'} ${s.korean} / 60<br>
          追星熱度：${s.fanLevel >= 70 ? '✅' : '❌'} ${s.fanLevel} / 70<br>
          ${Object.entries(s.affinity).filter(([,v]) => v > 0).map(([k,v]) => {
            const name = CHARACTERS[k]?.nameShort || k;
            return `${name}好感：${v >= 75 ? '✅' : '❌'} ${v}`;
          }).join('<br>') || '尚未觸發角色路線'}
        </div>`;
    }

    stats.innerHTML = `
      <div class="result-stat">
        <span>💰 存款</span><span>$${s.savings.toLocaleString()}</span>
      </div>
      <div class="result-stat">
        <span>📚 韓語</span><span>${s.korean}</span>
      </div>
      <div class="result-stat">
        <span>🌟 追星熱度</span><span>${s.fanLevel}</span>
      </div>
      <div class="result-stat">
        <span>💕 柾國好感</span><span>${s.affinity.jungkook}</span>
      </div>
      ${goalProgress}
    `;

    encounterDiv.style.display = 'none';

    document.getElementById('result-ok-btn').onclick = () => {
      this.hideResult();
      this.state.actionsLeft = 2;
      this.updateStatusBar();
      this.renderActions();
      this.saveGame();
    };

    overlay.classList.add('active');
  },

  checkFinalEnding() {
    const s = this.state;
    const anyComplete = Object.values(s.chapterProgress).some(ch => ch >= 5) || s.jungkookChapter >= 5;
    if (anyComplete) {
      this.showEnding(true);
    } else if (s.concertReady) {
      this.showEnding(false); // Normal ending, went to concert but no romance
    } else {
      this.showEnding(null); // Bad ending, couldn't go
    }
  },

  showEnding(type) {
    this.state.gameEnded = true;
    this.showScreen('ending-screen');

    const content = document.getElementById('ending-content');
    if (type === true) {
      // Find which routes were completed
      const completedRoutes = Object.entries(this.state.chapterProgress)
        .filter(([, ch]) => ch >= 5)
        .map(([id]) => CHARACTERS[id]?.name || id);
      if (this.state.jungkookChapter >= 5 && !completedRoutes.includes('田柾國')) {
        completedRoutes.push('田柾國');
      }
      const routeNames = completedRoutes.join('、') || '田柾國';

      content.innerHTML = `
        <h2>🌟 HAPPY ENDING 🌟</h2>
        <h3 style="color:var(--primary-light); margin-bottom:1rem;">紫色永恆 — ${routeNames} 路線完成</h3>
        <p>
          一年的追星之旅，從台北到首爾，<br>
          從粉絲到他心中特別的存在。<br><br>
          你用努力證明了——<br>
          追星不只是追逐，更是成為更好的自己。<br><br>
          而在這條路上，你找到了最珍貴的人。<br><br>
          💜 보라해 — I Purple You 💜
        </p>
        <div style="margin:2rem 0;">
          <div class="route-progress">
            ${[1,2,3,4,5].map(i => `<div class="route-chapter completed">${i}</div>`).join('')}
          </div>
        </div>
        <button class="btn btn-primary" onclick="Game.startNewGame()">重新開始</button>
        <button class="btn btn-secondary" onclick="Game.showCharacterSelect()" style="margin-top:1rem;">角色總覽</button>
      `;
    } else if (type === false) {
      content.innerHTML = `
        <h2>🎵 NORMAL ENDING 🎵</h2>
        <h3 style="color:var(--primary-light); margin-bottom:1rem;">演唱會之夜</h3>
        <p>
          你成功抵達了首爾演唱會！<br>
          在四萬人的紫色海洋中，你感受到了追星的感動。<br><br>
          雖然沒有走進他的世界更深處，<br>
          但這段旅程讓你成長了很多。<br><br>
          也許...下次會有不同的故事。
        </p>
        <button class="btn btn-primary" onclick="Game.startNewGame()">再來一次</button>
      `;
    } else {
      content.innerHTML = `
        <h2>💔 未完成的夢</h2>
        <p>
          這一年過得好快...<br>
          雖然沒能達成所有目標去看演唱會，<br>
          但追星的路上，你並不孤單。<br><br>
          明年...一定可以的！
        </p>
        <button class="btn btn-primary" onclick="Game.startNewGame()">重新挑戰</button>
      `;
    }
  },

  // Character select screen
  showCharacterSelect() {
    this.showScreen('character-screen');
    this.renderCharacters();
  },

  renderCharacters() {
    const grid = document.getElementById('char-grid');
    grid.innerHTML = '';

    Object.values(CHARACTERS).forEach(char => {
      const card = document.createElement('div');
      card.className = `char-card ${char.locked ? 'locked' : ''}`;

      const affinity = this.state.affinity[char.id] || 0;
      const chapterProgress = this.state.chapterProgress[char.id] || (char.id === 'jungkook' ? this.state.jungkookChapter : 0);

      const charImg = this.charImages[char.id] ? this.charImages[char.id].default : null;
      card.innerHTML = `
        <div class="char-avatar" style="background:${charImg ? `url('${charImg}') center/cover no-repeat` : char.bgGradient};">
          ${charImg ? '' : char.emoji}
        </div>
        <div class="char-name">${char.name}</div>
        <div class="char-name-kr">${char.nameKr}</div>
        <div class="char-role">${char.position}</div>
        <div class="char-theme">「${char.theme}」</div>
        <div class="char-affinity">
          💕 好感度
          <div class="char-affinity-bar">
            <div class="char-affinity-fill" style="width:${affinity}%"></div>
          </div>
          ${affinity}
        </div>
        <div class="route-progress" style="margin-top:12px;">
          ${[1,2,3,4,5].map(i =>
            `<div class="route-chapter ${i <= chapterProgress ? 'completed' : i === chapterProgress + 1 ? 'current' : ''}">${i}</div>`
          ).join('')}
        </div>
      `;

      card.addEventListener('click', () => {
        if (this.state.gameStarted) this.showGameplay();
      });

      grid.appendChild(card);
    });
  },

  // Notification
  notify(text) {
    let notif = document.getElementById('game-notification');
    if (!notif) {
      notif = document.createElement('div');
      notif.id = 'game-notification';
      notif.className = 'notification';
      document.body.appendChild(notif);
    }
    notif.textContent = text;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
  },

  // Save/Load
  saveGame() {
    try {
      localStorage.setItem('bts_starchase_save', JSON.stringify(this.state));
    } catch (e) { /* ignore */ }
  },

  loadGame() {
    try {
      const saved = localStorage.getItem('bts_starchase_save');
      if (saved) {
        const data = JSON.parse(saved);
        this.state = { ...this.state, ...data };
        if (this.state.gameStarted) {
          document.getElementById('btn-continue').classList.remove('btn-locked');
          document.getElementById('btn-continue').classList.add('btn-secondary');
        }
      }
    } catch (e) { /* ignore */ }
  }
};

// Start when DOM ready
document.addEventListener('DOMContentLoaded', () => Game.init());
