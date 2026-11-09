/* ═══════════════════════════════════════════════
   TypeMaster – App Logic
   LessonManager · TypingEngine · KeyboardRenderer
   UIController · ProgressTracker · SoundEngine
═══════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════
   1. CURRICULUM DATA
══════════════════════════════════════ */
const CURRICULUM = [
  {
    id: 'beginner',
    title: 'Beginner',
    icon: '🌱',
    badge: '🌱 Beginner',
    lessons: [
      {
        id: 'home-row-asdf',
        title: 'Home Row – Left Hand',
        desc: 'Master ASDF and the left-hand home row keys. The foundation of touch typing.',
        icon: '👋',
        duration: '~3 min',
        keys: 'A S D F',
        text: 'aaa sss ddd fff asd fds adf sdf afa dad sad fad add ass fads dads asks flask flasks salads'
      },
      {
        id: 'home-row-jkl',
        title: 'Home Row – Right Hand',
        desc: 'Master JKL; and the right-hand home row keys.',
        icon: '✋',
        duration: '~3 min',
        keys: 'J K L ;',
        text: 'jjj kkk lll ;;; jkl lkj jlk kjl jjkk llkk jkjk lkjl jklk lll jkl; ;lkj kljl jklj lklj'
      },
      {
        id: 'home-row-full',
        title: 'Home Row – Both Hands',
        desc: 'Combine both hands on the home row. Build muscle memory.',
        icon: '🤝',
        duration: '~4 min',
        keys: 'ASDF JKL;',
        text: 'ask jade fall shall dark lark sash dash glad flask shall dark jade ask fall lads lass jades asks dashes flasks'
      },
      {
        id: 'top-row-qwerty',
        title: 'Top Row – QWERTY',
        desc: 'Reach up to the top row: Q W E R T and Y U I O P.',
        icon: '⬆️',
        duration: '~4 min',
        keys: 'Q W E R T Y U I O P',
        text: 'we two out your quite power tower write quote upper pretty output require poetry troupe petite'
      },
      {
        id: 'bottom-row',
        title: 'Bottom Row – ZXCVBNM',
        desc: 'Reach down to the bottom row. Complete the full keyboard.',
        icon: '⬇️',
        duration: '~4 min',
        keys: 'Z X C V B N M',
        text: 'can man big van box mix zinc verb blank comb zinc vex brave clam nexus exam blank combo cabin'
      },
      {
        id: 'numbers-row',
        title: 'Numbers Row',
        desc: 'Type digits 1 through 0 with precision.',
        icon: '🔢',
        duration: '~3 min',
        keys: '1 2 3 4 5 6 7 8 9 0',
        text: '1 2 3 4 5 6 7 8 9 0 10 20 30 42 56 78 90 100 2025 1984 365 7 14 21 100 999 2048 1234 5678 9012'
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    icon: '🚀',
    badge: '🚀 Intermediate',
    lessons: [
      {
        id: 'common-words-1',
        title: 'Common Words I',
        desc: 'Type the 100 most common English words to build fluency.',
        icon: '📝',
        duration: '~5 min',
        keys: 'All Keys',
        text: 'the and for are but not you all can her was one our out day had his how its now see set she too use was'
      },
      {
        id: 'common-words-2',
        title: 'Common Words II',
        desc: 'More high-frequency words for better typing rhythm.',
        icon: '📝',
        duration: '~5 min',
        keys: 'All Keys',
        text: 'people water could after above place right large great still found every never under small start light begin'
      },
      {
        id: 'sentences-1',
        title: 'Easy Sentences',
        desc: 'Practice typing complete sentences with spaces and punctuation.',
        icon: '💬',
        duration: '~5 min',
        keys: 'All + Punctuation',
        text: 'The quick brown fox jumps over the lazy dog. She sells sea shells by the sea shore. How much wood would a woodchuck chuck?'
      },
      {
        id: 'sentences-2',
        title: 'Intermediate Sentences',
        desc: 'Longer sentences to push your speed and accuracy.',
        icon: '💬',
        duration: '~6 min',
        keys: 'All + Punctuation',
        text: 'Learning to type faster takes practice and patience. Every expert was once a beginner who never gave up. The more you practice, the better you become at typing.'
      },
      {
        id: 'punctuation',
        title: 'Punctuation Mastery',
        desc: 'Practice commas, periods, apostrophes, and more.',
        icon: '❕',
        duration: '~4 min',
        keys: '. , ! ? \' " :',
        text: "Hello, world! Don't stop. Are you ready? She said, \"Yes!\" It's a great day. Wait... really? Here: take it. Go, now! Stop."
      },
      {
        id: 'capitals',
        title: 'Shift & Capitals',
        desc: 'Practice using the Shift key for capital letters.',
        icon: '⬆️',
        duration: '~4 min',
        keys: 'Shift + All',
        text: 'The Sun rises in the East. Paris is the Capital of France. Albert Einstein, Marie Curie, and Isaac Newton changed Science forever.'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    icon: '⚡',
    badge: '⚡ Advanced',
    lessons: [
      {
        id: 'paragraphs-1',
        title: 'Speed Paragraph I',
        desc: 'Push your WPM with a full paragraph of flowing prose.',
        icon: '📖',
        duration: '~6 min',
        keys: 'All',
        text: 'Touch typing is a method of typing without looking at the keyboard. By using all ten fingers and placing them on the home row keys, typists can achieve much higher speeds. Practice makes perfect, and with enough dedication, anyone can type over 60 words per minute.'
      },
      {
        id: 'paragraphs-2',
        title: 'Speed Paragraph II',
        desc: 'A longer passage to test your endurance and consistency.',
        icon: '📖',
        duration: '~7 min',
        keys: 'All',
        text: 'The art of fast typing comes down to muscle memory. When your fingers know exactly where each key is without conscious thought, your mind is free to focus on the words themselves. This is the state every typist strives to achieve through countless hours of patient, deliberate practice.'
      },
      {
        id: 'code-typing',
        title: 'Code Snippet Typing',
        desc: 'Type real code with symbols, brackets, and operators.',
        icon: '💻',
        duration: '~5 min',
        keys: 'All + Symbols',
        text: 'function hello(name) { return "Hello, " + name + "!"; } const greet = hello("World"); console.log(greet);'
      },
      {
        id: 'speed-burst-1',
        title: 'Speed Burst – 60 WPM',
        desc: 'A timed challenge. Can you hit 60 WPM with 95% accuracy?',
        icon: '⚡',
        duration: '~3 min',
        keys: 'All',
        text: 'Speed is built through consistent repetition. Type quickly but accurately. Every mistake costs you time so think before you press. Focus on rhythm not raw speed and the words will flow naturally.'
      },
      {
        id: 'speed-burst-2',
        title: 'Speed Burst – 80 WPM',
        desc: 'Push yourself to elite level. 80 WPM is the goal!',
        icon: '🏆',
        duration: '~3 min',
        keys: 'All',
        text: 'Elite typists make it look effortless because they have internalized the keyboard layout completely. At this level the gap between thought and text narrows to almost nothing and typing becomes a transparent medium for your ideas.'
      }
    ]
  }
];

/* ══════════════════════════════════════
   2. KEYBOARD LAYOUT
══════════════════════════════════════ */
const KB_ROWS = [
  [
    {k:'`',f:'pinky-l'}, {k:'1',f:'pinky-l'}, {k:'2',f:'ring-l'}, {k:'3',f:'middle-l'}, {k:'4',f:'index-l'}, {k:'5',f:'index-l'},
    {k:'6',f:'index-r'}, {k:'7',f:'index-r'}, {k:'8',f:'middle-r'}, {k:'9',f:'ring-r'}, {k:'0',f:'pinky-r'}, {k:'-',f:'pinky-r'}, {k:'=',f:'pinky-r'},
    {k:'Backspace', f:'pinky-r', wide:'wide-175', label:'←'}
  ],
  [
    {k:'Tab',f:'pinky-l',wide:'wide-15',label:'Tab'}, {k:'q',f:'pinky-l'}, {k:'w',f:'ring-l'}, {k:'e',f:'middle-l'}, {k:'r',f:'index-l'}, {k:'t',f:'index-l'},
    {k:'y',f:'index-r'}, {k:'u',f:'index-r'}, {k:'i',f:'middle-r'}, {k:'o',f:'ring-r'}, {k:'p',f:'pinky-r'}, {k:'[',f:'pinky-r'}, {k:']',f:'pinky-r'},
    {k:'\\',f:'pinky-r',wide:'wide-15',label:'\\'}
  ],
  [
    {k:'CapsLock',f:'pinky-l',wide:'wide-175',label:'Caps'}, {k:'a',f:'pinky-l',home:true}, {k:'s',f:'ring-l',home:true}, {k:'d',f:'middle-l',home:true}, {k:'f',f:'index-l',home:true},
    {k:'g',f:'index-l'}, {k:'h',f:'index-r'}, {k:'j',f:'index-r',home:true}, {k:'k',f:'middle-r',home:true}, {k:'l',f:'ring-r',home:true}, {k:';',f:'pinky-r',home:true}, {k:'\'',f:'pinky-r'},
    {k:'Enter',f:'pinky-r',wide:'wide-225',label:'Enter'}
  ],
  [
    {k:'Shift',f:'pinky-l',wide:'wide-275',label:'⇧ Shift'}, {k:'z',f:'pinky-l'}, {k:'x',f:'ring-l'}, {k:'c',f:'middle-l'}, {k:'v',f:'index-l'}, {k:'b',f:'index-l'},
    {k:'n',f:'index-r'}, {k:'m',f:'index-r'}, {k:',',f:'middle-r'}, {k:'.',f:'ring-r'}, {k:'/',f:'pinky-r'},
    {k:'Shift',f:'pinky-r',wide:'wide-275',label:'⇧ Shift'}
  ],
  [
    {k:' ',f:'thumb',wide:'wide-space',label:'Space'}
  ]
];

/* finger label lookup */
const FINGER_LABELS = {
  'pinky-l':'Left Pinky','ring-l':'Left Ring','middle-l':'Left Middle','index-l':'Left Index',
  'pinky-r':'Right Pinky','ring-r':'Right Ring','middle-r':'Right Middle','index-r':'Right Index',
  'thumb':'Thumb'
};

/* ══════════════════════════════════════
   3. PROGRESS TRACKER
══════════════════════════════════════ */
const ProgressTracker = {
  KEY: 'typemaster_progress',

  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch { return {}; }
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {}
  },

  getLesson(lessonId) {
    const data = this.load();
    return data[lessonId] || null;
  },

  saveLesson(lessonId, result) {
    const data = this.load();
    const prev = data[lessonId];
    data[lessonId] = {
      completed: true,
      wpm:      Math.max(result.wpm,      prev?.wpm      || 0),
      accuracy: Math.max(result.accuracy, prev?.accuracy || 0),
      stars:    Math.max(result.stars,    prev?.stars    || 0),
      attempts: (prev?.attempts || 0) + 1,
      lastPlayed: Date.now()
    };
    // history
    if (!data.__history) data.__history = [];
    data.__history.unshift({ lessonId, ...result, ts: Date.now() });
    if (data.__history.length > 50) data.__history.pop();
    this.save(data);
    return data[lessonId];
  },

  getHistory() {
    return this.load().__history || [];
  },

  getStats() {
    const data = this.load();
    const lessons = Object.entries(data).filter(([k]) => k !== '__history').map(([,v]) => v);
    if (!lessons.length) return null;
    return {
      done:    lessons.length,
      bestWpm: Math.max(...lessons.map(l => l.wpm)),
      avgAcc:  Math.round(lessons.reduce((s,l) => s + l.accuracy, 0) / lessons.length)
    };
  }
};

/* ══════════════════════════════════════
   4. SOUND ENGINE
══════════════════════════════════════ */
const SoundEngine = (() => {
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }
  function playTone(freq, dur, type = 'sine', vol = 0.06) {
    try {
      const c = getCtx();
      const o = c.createOscillator();
      const g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type; o.frequency.setValueAtTime(freq, c.currentTime);
      g.gain.setValueAtTime(vol, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
      o.start(c.currentTime); o.stop(c.currentTime + dur);
    } catch {}
  }
  return {
    correct() { playTone(880, 0.05, 'sine', 0.04); },
    error()   { playTone(180, 0.12, 'sawtooth', 0.08); },
    complete(){ playTone(660, 0.1); setTimeout(() => playTone(880, 0.1), 100); setTimeout(() => playTone(1100, 0.25), 200); }
  };
})();

/* ══════════════════════════════════════
   5. KEYBOARD RENDERER
══════════════════════════════════════ */
const KeyboardRenderer = {
  keyElements: {},
  fingerMap: {},

  init() {
    const kb = document.getElementById('virtual-keyboard');
    kb.innerHTML = '';
    this.keyElements = {};
    this.fingerMap = {};

    KB_ROWS.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'kb-row';
      row.forEach(({ k, f, wide, label, home }) => {
        const el = document.createElement('div');
        el.className = 'kb-key' + (wide ? ' ' + wide : '');
        el.dataset.key = k;
        el.dataset.finger = f;
        el.textContent = label || k.toUpperCase();
        if (home) el.classList.add('home-key');
        rowEl.appendChild(el);

        const keyLower = k.toLowerCase();
        this.keyElements[keyLower] = this.keyElements[keyLower] || el;
        if (k !== keyLower) this.keyElements[k] = this.keyElements[k] || el;
        this.keyElements[k.toLowerCase()] = el;
        this.fingerMap[k.toLowerCase()] = f;
      });
      kb.appendChild(rowEl);
    });
  },

  highlight(char) {
    // Remove all highlights
    Object.values(this.keyElements).forEach(el => el.classList.remove('highlight'));
    const key = char === ' ' ? ' ' : char.toLowerCase();
    const el = this.keyElements[key];
    if (el) el.classList.add('highlight');

    // Update hint
    const nextKeyDisplay = document.getElementById('next-key-display');
    const fingerHint = document.getElementById('finger-hint');
    nextKeyDisplay.textContent = char === ' ' ? 'Space' : char;
    const finger = this.fingerMap[char.toLowerCase()] || this.fingerMap[' '];
    fingerHint.textContent = finger ? '→ ' + FINGER_LABELS[finger] : '';
    // color the finger hint
    fingerHint.style.color = '';
    const colorMap = {'pinky-l':'#c084fc','ring-l':'#60a5fa','middle-l':'#34d399','index-l':'#fb923c',
                      'pinky-r':'#c084fc','ring-r':'#60a5fa','middle-r':'#34d399','index-r':'#fb923c','thumb':'#94a3b8'};
    if (finger && colorMap[finger]) fingerHint.style.color = colorMap[finger];

    // Hand guide active finger
    document.querySelectorAll('.finger').forEach(f => f.classList.remove('active-finger'));
    if (finger) {
      const fEl = document.querySelector(`.finger[data-finger="${finger}"]`);
      if (fEl) fEl.classList.add('active-finger');
    }
  },

  flashKey(char, correct) {
    const key = char === ' ' ? ' ' : char.toLowerCase();
    const el = this.keyElements[key];
    if (!el) return;
    el.classList.remove('highlight', 'pressed', 'correct-pressed', 'wrong-pressed');
    el.classList.add(correct ? 'correct-pressed' : 'wrong-pressed');
    setTimeout(() => {
      el.classList.remove('correct-pressed', 'wrong-pressed');
    }, 200);
  },

  clearAll() {
    Object.values(this.keyElements).forEach(el =>
      el.classList.remove('highlight', 'pressed', 'correct-pressed', 'wrong-pressed'));
    document.getElementById('next-key-display').textContent = '—';
    document.getElementById('finger-hint').textContent = '';
    document.querySelectorAll('.finger').forEach(f => f.classList.remove('active-finger'));
  }
};

/* ══════════════════════════════════════
   6. TYPING ENGINE
══════════════════════════════════════ */
const TypingEngine = {
  text: '',
  charEls: [],
  typed: [],
  errors: {},
  currentIndex: 0,
  startTime: null,
  timerInterval: null,
  isRunning: false,
  isDone: false,

  init(lessonText) {
    this.text = lessonText;
    this.typed = [];
    this.errors = {};
    this.currentIndex = 0;
    this.startTime = null;
    this.isRunning = false;
    this.isDone = false;
    clearInterval(this.timerInterval);

    this.renderText();
    this.updateStats();
    KeyboardRenderer.highlight(this.text[0]);

    const input = document.getElementById('typing-input');
    input.value = '';
    input.classList.remove('has-error');
    input.removeEventListener('input', this._boundInput);
    input.removeEventListener('keydown', this._boundKeydown);
    this._boundInput = this.onInput.bind(this);
    this._boundKeydown = this.onKeydown.bind(this);
    input.addEventListener('input', this._boundInput);
    input.addEventListener('keydown', this._boundKeydown);
  },

  renderText() {
    const display = document.getElementById('typing-display');
    display.innerHTML = '';
    this.charEls = [];
    for (let i = 0; i < this.text.length; i++) {
      const span = document.createElement('span');
      span.className = 'char pending' + (this.text[i] === ' ' ? ' space-char' : '');
      span.textContent = this.text[i];
      display.appendChild(span);
      this.charEls.push(span);
    }
    this.updateActiveChar();
  },

  updateActiveChar() {
    this.charEls.forEach((el, i) => {
      el.classList.remove('active');
      if (i === this.currentIndex) el.classList.add('active');
    });
    // scroll into view
    if (this.charEls[this.currentIndex]) {
      this.charEls[this.currentIndex].scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  },

  start() {
    this.startTime = Date.now();
    this.isRunning = true;
    this.timerInterval = setInterval(() => this.updateStats(), 300);
    document.getElementById('start-prompt').classList.add('hidden');
  },

  onKeydown(e) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      this.handleBackspace();
    }
    if (!this.isRunning && e.key.length === 1) {
      this.start();
    }
  },

  onInput(e) {
    const input = document.getElementById('typing-input');
    const val = input.value;
    if (!val.length) return;
    const char = val[val.length - 1];
    input.value = '';
    this.processChar(char);
  },

  processChar(char) {
    if (this.isDone || this.currentIndex >= this.text.length) return;

    const expected = this.text[this.currentIndex];
    const correct = char === expected;

    if (correct) {
      this.charEls[this.currentIndex].className = 'char correct' + (expected === ' ' ? ' space-char' : '');
      this.typed.push({ char, correct: true });
      SoundEngine.correct();
    } else {
      this.charEls[this.currentIndex].className = 'char incorrect' + (expected === ' ' ? ' space-char' : '');
      this.typed.push({ char, correct: false, expected });
      this.errors[expected] = (this.errors[expected] || 0) + 1;
      SoundEngine.error();
      // Shake display
      const display = document.getElementById('typing-display');
      display.classList.remove('shake');
      void display.offsetWidth;
      display.classList.add('shake');
      document.getElementById('typing-input').classList.add('has-error');
      setTimeout(() => document.getElementById('typing-input').classList.remove('has-error'), 300);
    }

    KeyboardRenderer.flashKey(char, correct);
    this.currentIndex++;

    if (this.currentIndex < this.text.length) {
      this.updateActiveChar();
      KeyboardRenderer.highlight(this.text[this.currentIndex]);
    } else {
      this.finish();
    }

    this.updateStats();
  },

  handleBackspace() {
    if (this.currentIndex === 0) return;
    this.currentIndex--;
    const prev = this.typed.pop();
    if (prev && !prev.correct) {
      const expected = this.text[this.currentIndex];
      if (this.errors[expected]) this.errors[expected] = Math.max(0, this.errors[expected] - 1);
    }
    this.charEls[this.currentIndex].className = 'char pending' + (this.text[this.currentIndex] === ' ' ? ' space-char' : '');
    this.updateActiveChar();
    KeyboardRenderer.highlight(this.text[this.currentIndex]);
    this.updateStats();
  },

  getStats() {
    const elapsed = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
    const correctChars = this.typed.filter(t => t.correct).length;
    const totalTyped = this.typed.length;
    const wpm = elapsed > 0 ? Math.round((correctChars / 5) / (elapsed / 60)) : 0;
    const accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;
    const progress = this.text.length > 0 ? Math.round((this.currentIndex / this.text.length) * 100) : 0;
    const errorsCount = totalTyped - correctChars;
    return { wpm, accuracy, progress, elapsed, errorsCount, correctChars, totalTyped };
  },

  updateStats() {
    const { wpm, accuracy, progress, elapsed, errorsCount } = this.getStats();
    document.getElementById('ls-wpm').textContent = wpm;
    document.getElementById('ls-acc').textContent = accuracy + '%';
    document.getElementById('ls-errors').textContent = errorsCount;
    document.getElementById('lp-fill').style.width = progress + '%';
    document.getElementById('lp-label').textContent = progress + '%';

    const secs = Math.floor(elapsed);
    const mm = String(Math.floor(secs / 60)).padStart(1,'0');
    const ss = String(secs % 60).padStart(2,'0');
    document.getElementById('ls-time').textContent = mm + ':' + ss;

    // WPM color
    const wpmEl = document.getElementById('ls-wpm');
    wpmEl.classList.remove('fast','medium');
    if (wpm >= 50) wpmEl.classList.add('fast');
    else if (wpm >= 25) wpmEl.classList.add('medium');
  },

  finish() {
    this.isDone = true;
    this.isRunning = false;
    clearInterval(this.timerInterval);
    this.updateActiveChar();
    KeyboardRenderer.clearAll();
    SoundEngine.complete();

    const stats = this.getStats();
    // stars: 3 = wpm>=50 & acc>=95, 2 = acc>=85, 1 = completed
    let stars = 1;
    if (stats.accuracy >= 85) stars = 2;
    if (stats.wpm >= 50 && stats.accuracy >= 95) stars = 3;

    const result = { wpm: stats.wpm, accuracy: stats.accuracy, stars, time: Math.round(stats.elapsed) };
    setTimeout(() => UIController.showResults(result, this.errors), 600);
  },

  stop() {
    clearInterval(this.timerInterval);
    this.isRunning = false;
    const input = document.getElementById('typing-input');
    if (this._boundInput) input.removeEventListener('input', this._boundInput);
    if (this._boundKeydown) input.removeEventListener('keydown', this._boundKeydown);
    KeyboardRenderer.clearAll();
  }
};

/* ══════════════════════════════════════
   7. CONFETTI ENGINE
══════════════════════════════════════ */
const Confetti = {
  particles: [],
  canvas: null, ctx: null,
  raf: null,

  start(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvas.width = canvas.offsetWidth;
    this.canvas.height = canvas.offsetHeight;
    this.particles = [];
    const colors = ['#7c3aed','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899'];
    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        r: Math.random() * 6 + 3,
        d: Math.random() * 120,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngle: 0,
        tiltAngleIncrement: (Math.random() * 0.07) + 0.05,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 3 + 2,
        angle: Math.random() * 360
      });
    }
    this.draw();
  },

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      this.ctx.save();
      this.ctx.translate(p.x + p.tilt + p.r, p.y);
      this.ctx.rotate(p.angle * Math.PI / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = 0.85;
      this.ctx.fillRect(-p.r / 2, -p.r, p.r, p.r * 1.6);
      this.ctx.restore();
      p.y += p.vy;
      p.x += p.vx;
      p.angle += 3;
      p.tiltAngle += p.tiltAngleIncrement;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      if (p.y > this.canvas.height) { p.y = -10; p.x = Math.random() * this.canvas.width; }
    });
    this.raf = requestAnimationFrame(() => this.draw());
  },

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

/* ══════════════════════════════════════
   8. UI CONTROLLER
══════════════════════════════════════ */
let currentLessonData = null;
let allLessons = [];

const UIController = {

  init() {
    KeyboardRenderer.init();
    this.buildCurriculum();
    this.updateHeaderStats();
    this.bindNav();
    this.bindLessonActions();
    allLessons = CURRICULUM.flatMap(s => s.lessons);
  },

  /* ─── Views ─── */
  showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('view-' + id).classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-btn[data-view="${id}"]`);
    if (navBtn) navBtn.classList.add('active');
  },

  /* ─── Nav ─── */
  bindNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view === 'stats') this.buildStatsPage();
        this.showView(view);
        if (view === 'dashboard') this.buildCurriculum();
      });
    });
    document.getElementById('logo-btn').addEventListener('click', () => {
      TypingEngine.stop();
      Confetti.stop();
      this.buildCurriculum();
      this.showView('dashboard');
    });
  },

  /* ─── Dashboard ─── */
  buildCurriculum() {
    const container = document.getElementById('curriculum');
    container.innerHTML = '';
    const progress = ProgressTracker.load();

    CURRICULUM.forEach(section => {
      const sec = document.createElement('div');
      sec.className = 'curriculum-section slide-in-up';
      sec.innerHTML = `
        <div class="section-header">
          <span class="section-badge">${section.badge}</span>
          <h2 class="section-title">${section.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="lessons-grid" id="grid-${section.id}"></div>
      `;
      container.appendChild(sec);

      const grid = sec.querySelector('.lessons-grid');
      section.lessons.forEach(lesson => {
        const saved = progress[lesson.id];
        const card = this.buildLessonCard(lesson, saved);
        grid.appendChild(card);
      });
    });

    this.updateHeaderStats();
    this.updateHeroMetrics();
  },

  buildLessonCard(lesson, saved) {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    if (saved?.completed) card.classList.add('completed');

    let statusHTML = '';
    if (saved?.completed) {
      statusHTML = `<span class="card-status done">✓ Done</span>`;
    } else {
      statusHTML = `<span class="card-status new">New</span>`;
    }

    const bestWpm = saved?.wpm ? `<span class="card-best">🏆 ${saved.wpm} WPM</span>` : '';
    const starsStr = saved?.stars ? '⭐'.repeat(saved.stars) : '';
    const progressPct = saved?.completed ? 100 : 0;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-icon">${lesson.icon}</span>
        <div style="display:flex;align-items:center;gap:6px">${starsStr}${statusHTML}</div>
      </div>
      <div class="card-body">
        <div class="card-title">${lesson.title}</div>
        <div class="card-desc">${lesson.desc}</div>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="meta-tag">⏱ ${lesson.duration}</span>
          <span class="meta-tag">⌨ ${lesson.keys}</span>
        </div>
        ${bestWpm}
      </div>
      <div class="card-progress-bar">
        <div class="card-progress-fill" style="width:${progressPct}%"></div>
      </div>
    `;

    card.addEventListener('click', () => this.startLesson(lesson));
    return card;
  },

  /* ─── Lesson ─── */
  startLesson(lesson) {
    currentLessonData = lesson;
    document.getElementById('lesson-category-badge').textContent =
      CURRICULUM.find(s => s.lessons.includes(lesson))?.title || 'Lesson';
    document.getElementById('lesson-title-text').textContent = lesson.title;

    this.showView('lesson');
    Confetti.stop();

    // Reset UI
    document.getElementById('start-prompt').classList.remove('hidden');
    document.getElementById('typing-display').classList.remove('shake');

    // Init engine
    TypingEngine.init(lesson.text);

    // Focus input
    setTimeout(() => document.getElementById('typing-input').focus(), 100);
  },

  bindLessonActions() {
    document.getElementById('lesson-back-btn').addEventListener('click', () => {
      TypingEngine.stop();
      this.buildCurriculum();
      this.showView('dashboard');
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      if (currentLessonData) this.startLesson(currentLessonData);
    });

    // Click on typing container focuses input
    document.getElementById('typing-container') || document.querySelector('.typing-container')
    document.querySelector('.typing-container').addEventListener('click', () => {
      document.getElementById('typing-input').focus();
      if (!TypingEngine.isRunning && !TypingEngine.isDone) {
        document.getElementById('start-prompt').classList.remove('hidden');
      }
    });

    // Keypress anywhere in lesson focuses input
    document.addEventListener('keydown', (e) => {
      const view = document.getElementById('view-lesson');
      if (!view.classList.contains('hidden') && e.key.length === 1) {
        document.getElementById('typing-input').focus();
      }
    });
  },

  /* ─── Results ─── */
  showResults(result, errorMap) {
    // Save progress
    const saved = ProgressTracker.saveLesson(currentLessonData.id, result);

    // Stars
    for (let i = 1; i <= 3; i++) {
      const star = document.getElementById('star-' + i);
      star.classList.remove('earned');
      if (i <= result.stars) {
        setTimeout(() => star.classList.add('earned'), 300 + (i - 1) * 200);
      }
    }

    // Title & subtitle
    const titles = ['', 'Good effort!', 'Well done!', 'Outstanding! 🎉'];
    const subtitles = ['Keep practicing — every keystroke counts!',
      'You\'re building great habits!',
      'Excellent accuracy and speed!',
      'You\'re crushing it! Elite performance!'];
    document.getElementById('results-title').textContent = titles[result.stars] || 'Lesson Complete!';
    document.getElementById('results-subtitle').textContent = subtitles[result.stars - 1] || '';

    // Animated circles
    this.animateCircle('wpm-arc', result.wpm, 120);
    this.animateCircle('acc-arc', result.accuracy, 100);

    document.getElementById('result-wpm').textContent = result.wpm;
    document.getElementById('result-acc').textContent = result.accuracy;
    document.getElementById('result-time').textContent = result.time;

    // Breakdown
    const br = document.getElementById('breakdown-rows');
    br.innerHTML = '';
    const rows = [
      { label: 'Speed', val: result.wpm + ' WPM', pct: Math.min(100, result.wpm / 1.2), color: 'var(--accent-1)' },
      { label: 'Accuracy', val: result.accuracy + '%', pct: result.accuracy, color: 'var(--accent-green)' },
      { label: 'Time', val: result.time + 's', pct: Math.min(100, 100 - result.time / 2), color: 'var(--accent-2)' }
    ];
    rows.forEach(r => {
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <span class="br-label">${r.label}</span>
        <div class="br-bar-wrap"><div class="br-bar" style="width:0%;background:${r.color}"></div></div>
        <span class="br-val">${r.val}</span>
      `;
      br.appendChild(row);
      setTimeout(() => { row.querySelector('.br-bar').style.width = r.pct + '%'; }, 100);
    });

    // Error keys
    const errorKeysEl = document.getElementById('error-keys');
    errorKeysEl.innerHTML = '';
    const errEntries = Object.entries(errorMap).sort((a,b) => b[1]-a[1]);
    if (errEntries.length === 0) {
      const noErrMsg = document.createElement('p');
      noErrMsg.className = 'no-errors';
      noErrMsg.textContent = 'No errors! Perfect run! 🎉';
      errorKeysEl.appendChild(noErrMsg);
    } else {
      errEntries.slice(0, 8).forEach(([ch, count]) => {
        const chip = document.createElement('div');
        chip.className = 'error-key-chip';
        chip.innerHTML = `${ch === ' ' ? 'Space' : ch}<span class="error-key-count">${count}×</span>`;
        errorKeysEl.appendChild(chip);
      });
    }

    // Next lesson button
    const nextBtn = document.getElementById('next-lesson-btn');
    const idx = allLessons.indexOf(currentLessonData);
    if (idx < allLessons.length - 1) {
      nextBtn.style.display = '';
      nextBtn.onclick = () => {
        Confetti.stop();
        this.startLesson(allLessons[idx + 1]);
      };
    } else {
      nextBtn.style.display = 'none';
    }

    document.getElementById('retry-btn').onclick = () => {
      Confetti.stop();
      this.startLesson(currentLessonData);
    };

    this.showView('results');

    // Confetti for 2+ stars
    if (result.stars >= 2) {
      setTimeout(() => Confetti.start(document.getElementById('confetti-canvas')), 400);
      setTimeout(() => Confetti.stop(), 5000);
    }

    this.updateHeaderStats();
  },

  animateCircle(id, value, max) {
    const el = document.getElementById(id);
    const circumference = 2 * Math.PI * 42;
    el.style.strokeDasharray = circumference;
    el.style.strokeDashoffset = circumference;
    setTimeout(() => {
      const pct = Math.min(value / max, 1);
      el.style.strokeDashoffset = circumference * (1 - pct);
    }, 200);
  },

  /* ─── Stats page ─── */
  buildStatsPage() {
    const stats = ProgressTracker.getStats();
    const grid = document.getElementById('overall-stats-grid');
    grid.innerHTML = '';

    const cards = [
      { icon: '✅', value: stats?.done || 0, label: 'Lessons Done' },
      { icon: '🚀', value: stats?.bestWpm ? stats.bestWpm + ' WPM' : '—', label: 'Best Speed' },
      { icon: '🎯', value: stats?.avgAcc ? stats.avgAcc + '%' : '—', label: 'Avg Accuracy' },
      { icon: '📚', value: allLessons.length, label: 'Total Lessons' }
    ];
    cards.forEach(c => {
      const card = document.createElement('div');
      card.className = 'overall-stat-card slide-in-up';
      card.innerHTML = `<span class="osc-icon">${c.icon}</span><span class="osc-value">${c.value}</span><span class="osc-label">${c.label}</span>`;
      grid.appendChild(card);
    });

    const history = ProgressTracker.getHistory();
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    if (!history.length) {
      historyList.innerHTML = '<p class="empty-state">Complete some lessons to see your history here!</p>';
    } else {
      history.slice(0, 20).forEach(h => {
        const lesson = allLessons.find(l => l.id === h.lessonId);
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
          <div class="hi-title">${lesson?.icon || '⌨️'} ${lesson?.title || h.lessonId}</div>
          <div class="hi-stat"><span class="hi-val">${h.wpm}</span><span class="hi-key">WPM</span></div>
          <div class="hi-stat"><span class="hi-val">${h.accuracy}%</span><span class="hi-key">Acc</span></div>
          <div class="hi-stat"><span class="hi-val">${h.time}s</span><span class="hi-key">Time</span></div>
          <div class="hi-stars">${'⭐'.repeat(h.stars)}</div>
        `;
        historyList.appendChild(item);
      });
    }
  },

  /* ─── Header stats ─── */
  updateHeaderStats() {
    const stats = ProgressTracker.getStats();
    const bestWpm = stats?.bestWpm || '—';
    document.getElementById('header-best-wpm').textContent = bestWpm;
    document.getElementById('hero-best-wpm').textContent = bestWpm;
  },

  updateHeroMetrics() {
    const stats = ProgressTracker.getStats();
    document.getElementById('hero-lessons-done').textContent = stats?.done || 0;
    document.getElementById('hero-best-wpm').textContent = stats?.bestWpm || '—';
    document.getElementById('hero-avg-acc').textContent = stats?.avgAcc ? stats.avgAcc + '%' : '—';
  }
};

/* ══════════════════════════════════════
   9. BOOTSTRAP
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  UIController.init();
  UIController.showView('dashboard');
});
