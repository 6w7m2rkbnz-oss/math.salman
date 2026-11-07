// ==================== بيانات محتوى الدروس الشاملة (صفحات الدروس) ====================
const lessonsData = {
    'term1_1': {
        title: "المعادلات الخطية متعددة الخطوات",
        term: 1,
        content: `
            <p><strong>المفهوم الأساسي:</strong> حل المعادلة الخطية يتطلب تبسيط الطرفين واستخدام العمليات العكسية لعزل المتغير في طرف لوحده.</p>
            <div class="formula-box">الخطوات: تخلص من الأقواس ⬅ اجمع الحدود المتشابهة ⬅ تخلص من الثوابت ⬅ اقسم على معامل المتغير</div>
            <h3>مثال محلول خطوة بخطوة:</h3>
            <div class="example-box">
                <p><strong>حل المعادلة:</strong> <code>3(س + 2) - 5 = 10</code></p>
                <ol>
                    <li>استخدام خاصية التوزيع لإزالة الأقواس: <code>3س + 6 - 5 = 10</code></li>
                    <li>تبسيط الطرف الأيمن: <code>3س + 1 = 10</code></li>
                    <li>طرح 1 من الطرفين: <code>3س = 9</code></li>
                    <li>القسمة على 3: <strong>س = 3</strong></li>
                </ol>
            </div>
            <p><strong>تمرين تدريبي سريع:</strong> حاول حل المعادلة <code>2(س - 1) + 4 = 12</code> وستجد أن الناتج هو <code>س = 5</code>.</p>
        `
    },
    'term1_2': {
        title: "العلاقات والدوال ومعدل التغير والميل",
        term: 1,
        content: `
            <p><strong>المفهوم الأساسي:</strong> العلاقة هي ارتباط بين قيم المدخلات (المجال) وقيم المخرجات (المدى). والدوال هي علاقات ترتبط فيها كل مدخلة بمخرجة واحدة فقط.</p>
            <div class="formula-box">قانون الميل (م) = (ص₂ - ص₁) / (س₂ - س₁)</div>
            <h3>أمثلة وقوانين أساسية:</h3>
            <ul>
                <li><strong>صيغة الميل والمقطع:</strong> <code>ص = م س + ب</code> (حيث م هو الميل، ب هو المقطع الصادي).</li>
                <li><strong>الميل الموجب:</strong> الخط يتجه لأعلى من اليسار لليمين.</li>
                <li><strong>الميل السالب:</strong> الخط يتجه لأسفل.</li>
            </ul>
            <div class="example-box">
                <strong>مثال محلول:</strong>
                <p>أوجد ميل المستقيم المار بالنقطتين (1، 2) و (3، 8):</p>
                <p>الميل م = (8 - 2) / (3 - 1) = 6 / 2 = <strong>3</strong></p>
            </div>
        `
    },
    'term1_3': {
        title: "المتباينات الخطية ومتباينات القيمة المطلقة",
        term: 1,
        content: `
            <p><strong>المفهوم الأساسي:</strong> المتباينة جملة رياضية تتضمن إشارة تباين (<, >, ≤, ≥). حلها يعني إيجاد مجموعة القيم التي تجعلها صحيحة.</p>
            <div class="example-box" style="border-right-color: var(--wrong);">
                <strong>⚠️ تنبيه هام جداً في المتباينات:</strong>
                <p>عند ضرب أو قسمة طرفي المتباينة على عدد <strong>سالب</strong>، يجب قلب اتجاه إشارة المتباينة فوراً!</p>
            </div>
            <h3>مثال محلول:</h3>
            <div class="example-box">
                <p>حل المتباينة: <code>-2س + 4 < 10</code></p>
                <ol>
                    <li>طرح 4 من الطرفين: <code>-2س < 6</code></li>
                    <li>القسمة على (-2) وقلب الإشارة: <code>س > -3</code></li>
                </ol>
            </div>
        `
    },
    'term2_1': {
        title: "أنظمة المعادلات الخطية (التعويض والحذف)",
        term: 2,
        content: `
            <p><strong>المفهوم الأساسي:</strong> نظام المعادلات هو مجموعة معادلتين أو أكثر بمتغيرين، وحل النظام يعني إيجاد الزوج المرتب (س، ص) الذي يحقق المعادلتين معاً.</p>
            <h3>طرق الحل الرئيسية:</h3>
            <ul>
                <li><strong>التعويض:</strong> عزل متغير في إحدة المعادلتين وتعويضه في الأخرى.</li>
                <li><strong>الحذف بالجمع أو الطرح:</strong> التخلص من أحد المتغيرين مباشرة إذا كانت معاملاته متعاكسة.</li>
                <li><strong>الحذف بالضرب:</strong> ضرب إحدى المعادلتين بعدد لتوليد معاملات متعاكسة.</li>
            </ul>
            <div class="example-box">
                <strong>مثال محلول (بالحذف):</strong>
                <p>النظام: <br>س + ص = 5<br>س - ص = 1</p>
                <p>بجمع المعادلتين: <code>2س = 6</code> ⬅ <strong>س = 3</strong></p>
                <p>بالتعويض في الأولى: <code>3 + ص = 5</code> ⬅ <strong>ص = 2</strong></p>
            </div>
        `
    },
    'term2_2': {
        title: "كثيرات الحدود وتحليلها (الفرق بين مربعين)",
        term: 2,
        content: `
            <p><strong>المفهوم الأساسي:</strong> التحليل هو كتابة كثيرات الحدود على صورة حاصل ضرب عواملها الأولية.</p>
            <div class="formula-box">قانون الفرق بين مربعين: س² - أ² = (س - أ)(س + أ)</div>
            <div class="formula-box">قانون المربع الكامل: (س + أ)² = س² + 2أ س + أ²</div>
            <div class="example-box">
                <strong>مثال محلول:</strong>
                <p>حلل كثير الحدود الآتي تحليلاً كاملاً: <code>س² - 25</code></p>
                <p>بما أن 25 هو مربع للعدد 5، إذن التحليل هو: <strong>(س - 5)(س + 5)</strong></p>
            </div>
        `
    },
    'term2_3': {
        title: "الدوال التربيعية والقانون العام",
        term: 2,
        content: `
            <p><strong>المفهوم الأساسي:</strong> الصورة القياسية للدالة التربيعية هي <code>أ س² + ب س + جـ = 0</code>.</p>
            <div class="formula-box">القانون العام لحل المعادلة التربيعية:<br>س = [ -ب ± √(ب² - 4أجـ) ] / (2أ)</div>
            <p><strong>المميز (ب² - 4أجـ):</strong> يحدد عدد وطبيعة الحلول (موجب = حلان، صفر = حل واحد، سالب = لا توجد حلول حقيقية).</p>
            <div class="example-box">
                <strong>مثال محلول على المميز:</strong>
                <p>أوجد قيمة مميز المعادلة <code>س² - 4س + 4 = 0</code></p>
                <p>المميز = (-4)² - 4(1)(4) = 16 - 16 = <strong>0</strong> (إذن يوجد حل حقيقي مكرر).</p>
            </div>
        `
    },
    'term3_1': {
        title: "العبارات الجذرية ونظرية فيثاغورس",
        term: 3,
        content: `
            <p><strong>المفهوم الأساسي:</strong> تبسيط العبارات الجذرية يعتمد على تحليل العدد إلى عوامل مربعة كاملة وإخراجها خارج الجذر.</p>
            <div class="formula-box">في المثلث قائم الزاوية: جـ² = أ² + ب² (حيث جـ هو الوتر)</div>
            <div class="example-box">
                <strong>مثال محلول لتبسيط الجذور:</strong>
                <p>بسط العبارة الجذرية: <code>√50</code></p>
                <p>√50 = √(25 × 2) = √25 × √2 = <strong>5√2</strong></p>
            </div>
        `
    },
    'term3_2': {
        title: "النسب المثلثية (sin / cos / tan)",
        term: 3,
        content: `
            <p><strong>المفهوم الأساسي:</strong> النسب المثلثية تربط بين أطوال أضلاع المثلث القائم الزاوية وزواياه الحادة.</p>
            <ul>
                <li><strong>الجيب (Sin):</strong> المقابل ÷ الوتر</li>
                <li><strong>جيب التمام (Cos):</strong> المجاور ÷ الوتر</li>
                <li><strong>الظل (Tan):</strong> المقابل ÷ المجاور</li>
            </ul>
            <div class="formula-box">قاعدة الذاكرة الشهيرة: جاها (مقابل/وتر) - جتاها (مجاور/وتر) - ظاها (مقابل/مجاور)</div>
        `
    },
    'term3_3': {
        title: "الاحتمالات والتباديل والتوافيق",
        term: 3,
        content: `
            <p><strong>المفهوم الأساسي:</strong> حساب عدد النواتج الممكنة باستخدام مبدأ العد الأساسي والفرق بين الترتيب المهتم (التباديل) وغير المهتم (التوافيق).</p>
            <ul>
                <li><strong>التباديل <sup>ن</sup>ل<sub>ر</sub>:</strong> الترتيب فيها مهم جداً (مثل تحديد المراكز: الأول، الثاني).</li>
                <li><strong>التوافيق <sup>ن</sup>ق<sub>ر</sub>:</strong> الترتيب غير مهم أبداً (مثل اختيار لجنة أو مجموعة طلاب).</li>
            </ul>
        `
    }
};

// التنقل بين صفحات الدروس
function filterTermLessons(termNum, element) {
    document.querySelectorAll('.lessons-term-container').forEach(tc => tc.classList.remove('active'));
    document.querySelectorAll('.term-btn').forEach(tb => tb.classList.remove('active'));
    
    document.getElementById(`lessons-term-${termNum}`).classList.add('active');
    element.classList.add('active');
}

function openLesson(lessonKey) {
    const lesson = lessonsData[lessonKey];
    if (!lesson) return;

    document.getElementById('lessons-home').classList.add('hidden');
    const detailBox = document.getElementById('lesson-detail-view');
    detailBox.classList.remove('hidden');

    document.getElementById('lesson-content-box').innerHTML = `
        <span class="lesson-badge">الفصل الدراسي ${lesson.term}</span>
        <h2>${lesson.title}</h2>
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 15px 0;">
        ${lesson.content}
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToLessonsHome() {
    document.getElementById('lesson-detail-view').classList.add('hidden');
    document.getElementById('lessons-home').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==================== بنك الأسئلة الشامل (مع عشوائية الخيارات) ====================
let defaultQuestions = [
    // الفصل الأول
    { term: 1, question: "حل المعادلة: 2س + 4 = 10 هو:", options: ["س = 3", "س = 4", "س = 2", "س = 5"], answerIndex: 0, explain: "نطرح 4 من الطرفين: 2س = 6، ثم نقسم على 2: س = 3." },
    { term: 1, question: "ميل الخط المستقيم المار بالنقطتين (0،0) و (2،4) يساوي:", options: ["2", "4", "0.5", "1"], answerIndex: 0, explain: "الميل = (4 - 0) / (2 - 0) = 4 / 2 = 2." },
    { term: 1, question: "حل المتباينة: -3س < 9 هو:", options: ["س > -3", "س < -3", "س > 3", "س < 3"], answerIndex: 0, explain: "عند القسمة على عدد سالب (-3) نبدل إشارة المتباينة من < إلى >." },

    // الفصل الثاني
    { term: 2, question: "تحليل س² - 9 إلى عوامل هو:", options: ["(س - 3)(س + 3)", "(س - 3)²", "(س + 3)²", "س(س - 9)"], answerIndex: 0, explain: "هذا فرق بين مربعين: س² - 3² = (س - 3)(س + 3)." },
    { term: 2, question: "قيمة مميز المعادلة س² - 4س + 4 = 0 تساوي:", options: ["0", "16", "8", "-4"], answerIndex: 0, explain: "المميز = ب² - 4أجـ = (-4)² - 4(1)(4) = 16 - 16 = 0 (حل مكرر)." },
    { term: 2, question: "ناتج ضرب (س + 2)(س + 3) هو:", options: ["س² + 5س + 6", "س² + 6س + 5", "س² + 5", "س² + 6"], answerIndex: 0, explain: "س×س + 3س + 2س + 6 = س² + 5س + 6." },

    // الفصل الثالث
    { term: 3, question: "تبسيط العبارة الجذرية √50 هو:", options: ["5√2", "2√5", "25√2", "10"], answerIndex: 0, explain: "√50 = √(25 × 2) = √25 × √2 = 5√2." },
    { term: 3, question: "في مثلث قائم، الأضلاع 3 سم، 4 سم. طول الوتر يساوي:", options: ["5 سم", "6 سم", "7 سم", "25 سم"], answerIndex: 0, explain: "حسب فيثاغورس: جـ² = 3² + 4² = 9 + 16 = 25 ⬅ الوتر = √25 = 5." },
    { term: 3, question: "قيمة النسب المثلثية ظا(45°) تساوي:", options: ["1", "0", "0.5", "√2"], answerIndex: 0, explain: "ظا(45°) = المقابل / المجاور = 1." }
];

let allQuestions = JSON.parse(localStorage.getItem('custom_questions')) || defaultQuestions;

// دالة التنقل بين التبويبات الرئيسية
function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    if (tabId === 'teacher') {
        // إذا كان المعلم قد سجل دخولاً مسبقاً في الجلسة، نعرض لوحة التحكم مباشرة
        if (sessionStorage.getItem('teacher_logged_in') === 'true') {
            document.getElementById('teacher-login-box').classList.add('hidden');
            document.getElementById('teacher-dashboard-box').classList.remove('hidden');
            renderQuestionsManagementList();
        } else {
            document.getElementById('teacher-login-box').classList.remove('hidden');
            document.getElementById('teacher-dashboard-box').classList.add('hidden');
        }
    }
}

// ==================== حماية قسم الأستاذ بكلمة مرور (math1) ====================
function verifyTeacherPassword() {
    const passInput = document.getElementById('teacher-password-input').value;
    const errorMsg = document.getElementById('login-error-msg');

    if (passInput === 'math1') {
        sessionStorage.setItem('teacher_logged_in', 'true');
        errorMsg.classList.add('hidden');
        document.getElementById('teacher-password-input').value = '';
        document.getElementById('teacher-login-box').classList.add('hidden');
        document.getElementById('teacher-dashboard-box').classList.remove('hidden');
        renderQuestionsManagementList();
    } else {
        errorMsg.classList.remove('hidden');
    }
}

function lockTeacherDashboard() {
    sessionStorage.removeItem('teacher_logged_in');
    document.getElementById('teacher-dashboard-box').classList.add('hidden');
    document.getElementById('teacher-login-box').classList.remove('hidden');
}


// ==================== محرك الاختبار الذاتي (مع خيارات عشوائية صحيحة) ====================
let currentQuizList = [];
let quizIndex = 0;
let score = 0;
let timerInterval;
let secondsElapsed = 0;

function startQuiz() {
    allQuestions = [...defaultQuestions, ...(JSON.parse(localStorage.getItem('custom_questions')) || [])];
    const selectedTerm = document.getElementById('quiz-term-select').value;
    const count = parseInt(document.getElementById('quiz-count-select').value);

    if (selectedTerm === 'all') {
        currentQuizList = [...allQuestions];
    } else {
        currentQuizList = allQuestions.filter(q => q.term == selectedTerm);
    }

    currentQuizList.sort(() => Math.random() - 0.5);
    currentQuizList = currentQuizList.slice(0, count);

    if (currentQuizList.length === 0) {
        alert("لا توجد أسئلة كافية لهذا الفصل حالياً.");
        return;
    }

    quizIndex = 0;
    score = 0;
    secondsElapsed = 0;

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');

    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        secondsElapsed++;
        let m = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        let s = (secondsElapsed % 60).toString().padStart(2, '0');
        document.getElementById('quiz-timer').innerHTML = `<i class="fa-regular fa-clock"></i> ${m}:${s}`;
    }, 1000);
}

function renderQuestion() {
    const q = currentQuizList[quizIndex];
    document.getElementById('quiz-progress').innerText = `السؤال ${quizIndex + 1} من ${currentQuizList.length}`;
    document.getElementById('progress-bar').style.width = `${((quizIndex + 1) / currentQuizList.length) * 100}%`;
    document.getElementById('question-text').innerText = q.question;
    
    document.getElementById('explanation-box').classList.add('hidden');

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // عشوائية ترتيب الخيارات مع تتبع الإجابة الصحيحة بدقة
    let optionsWithMeta = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: (idx === (q.answerIndex !== undefined ? q.answerIndex : 0))
    }));

    // خلط الخيارات عشوائياً
    optionsWithMeta.sort(() => Math.random() - 0.5);

    optionsWithMeta.forEach((optObj) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = optObj.text;
        btn.onclick = () => checkAnswer(optObj.isCorrect, q.explain, btn, optionsWithMeta);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(isCorrect, explainText, btnElement, optionsWithMeta) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((b, idx) => {
        b.disabled = true;
        // تلوين الإجابة الصحيحة بالخضراء دائماً للإفادة
        if (optionsWithMeta[idx].isCorrect) {
            b.classList.add('correct');
        }
    });

    if (isCorrect) {
        score++;
    } else {
        btnElement.classList.add('wrong');
    }

    document.getElementById('explanation-text').innerText = explainText;
    document.getElementById('explanation-box').classList.remove('hidden');
}

function nextQuestion() {
    quizIndex++;
    if (quizIndex < currentQuizList.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('quiz-box').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    document.getElementById('final-score').innerText = score;
    document.getElementById('total-score').innerText = currentQuizList.length;

    let msg = score === currentQuizList.length ? "ممتاز! إجابات كاملة وصحيحة." : "أداء جيد، ينصح بمراجعة قسم الدروس والشرح لرفع مستواك.";
    document.getElementById('result-message').innerText = msg;
}

function resetQuiz() {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
}


// ==================== تحدي السرعة الحسابي ====================
let speedTimer;
let speedTimeLeft = 30;
let speedScore = 0;
let speedCombo = 1;
let currentAnswer = 0;
let highScore = localStorage.getItem('speed_high_score') || 0;

document.getElementById('high-score-val').innerText = highScore;

function startSpeedGame() {
    speedTimeLeft = 30;
    speedScore = 0;
    speedCombo = 1;
    
    document.getElementById('speed-score').innerText = speedScore;
    document.getElementById('speed-combo').innerText = speedCombo;
    document.getElementById('speed-start-screen').classList.add('hidden');
    document.getElementById('speed-game-screen').classList.remove('hidden');

    speedTimer = setInterval(() => {
        speedTimeLeft--;
        document.getElementById('speed-timer').innerText = speedTimeLeft;
        if (speedTimeLeft <= 0) {
            endSpeedGame();
        }
    }, 1000);

    generateSpeedProblem();
}

function generateSpeedProblem() {
    const ops = ['+', '-', '×', '÷'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let n1, n2;

    if (op === '+') {
        n1 = Math.floor(Math.random() * 40) + 1;
        n2 = Math.floor(Math.random() * 40) + 1;
        currentAnswer = n1 + n2;
    } else if (op === '-') {
        n1 = Math.floor(Math.random() * 50) + 10;
        n2 = Math.floor(Math.random() * n1);
        currentAnswer = n1 - n2;
    } else if (op === '×') {
        n1 = Math.floor(Math.random() * 12) + 1;
        n2 = Math.floor(Math.random() * 10) + 1;
        currentAnswer = n1 * n2;
    } else {
        n2 = Math.floor(Math.random() * 9) + 2;
        currentAnswer = Math.floor(Math.random() * 10) + 1;
        n1 = n2 * currentAnswer;
    }

    document.getElementById('speed-num1').innerText = n1;
    document.getElementById('speed-op').innerText = op;
    document.getElementById('speed-num2').innerText = n2;

    let opts = [currentAnswer];
    while (opts.length < 4) {
        let wrongOpt = currentAnswer + (Math.floor(Math.random() * 10) - 5);
        if (wrongOpt >= 0 && !opts.includes(wrongOpt)) opts.push(wrongOpt);
    }
    opts.sort(() => Math.random() - 0.5);

    const container = document.getElementById('speed-options');
    container.innerHTML = '';
    opts.forEach(val => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = val;
        btn.onclick = () => checkSpeedAnswer(val);
        container.appendChild(btn);
    });
}

function checkSpeedAnswer(val) {
    if (val === currentAnswer) {
        speedScore += 10 * speedCombo;
        speedCombo++;
        speedTimeLeft += 2; // +2 ثواني إضافية للإجابة الصحيحة
    } else {
        speedCombo = 1;
    }
    document.getElementById('speed-score').innerText = speedScore;
    document.getElementById('speed-combo').innerText = speedCombo;
    generateSpeedProblem();
}

function endSpeedGame() {
    clearInterval(speedTimer);
    if (speedScore > highScore) {
        highScore = speedScore;
        localStorage.setItem('speed_high_score', highScore);
        document.getElementById('high-score-val').innerText = highScore;
        alert(`رائع جداً! حققت رقماً قياسياً جديداً: ${speedScore} نقطة`);
    } else {
        alert(`انتهى الوقت! مجموع نقاطك: ${speedScore}`);
    }

    document.getElementById('speed-game-screen').classList.add('hidden');
    document.getElementById('speed-start-screen').classList.remove('hidden');
}

// ==================== إدارة الأسئلة في لوحة المعلم ====================
let customQuestions = JSON.parse(localStorage.getItem('custom_questions')) || [];

function saveCustomQuestion(e) {
    e.preventDefault();
    const correctOpt = document.getElementById('new-opt-correct').value;
    const wrong1 = document.getElementById('new-opt-1').value;
    const wrong2 = document.getElementById('new-opt-2').value;
    const wrong3 = document.getElementById('new-opt-3').value;

    const newQ = {
        id: Date.now(),
        term: parseInt(document.getElementById('new-q-term').value),
        question: document.getElementById('new-q-text').value,
        options: [correctOpt, wrong1, wrong2, wrong3],
        answerIndex: 0, // الخيار الأول دائماً هو الإجابة الصحيحة المدخلة قبل الخلط العشوائي
        explain: document.getElementById('new-q-explain').value
    };

    customQuestions.push(newQ);
    localStorage.setItem('custom_questions', JSON.stringify(customQuestions));
    alert("تم حفظ السؤال في بنك الأسئلة بنجاح!");
    document.getElementById('add-question-form').reset();
    renderQuestionsManagementList();
}

function renderQuestionsManagementList() {
    const listContainer = document.getElementById('custom-questions-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    let currentCustom = JSON.parse(localStorage.getItem('custom_questions')) || [];
    if (currentCustom.length === 0) {
        listContainer.innerHTML = '<p>لا توجد أسئلة مخصصة مضافة حالياً.</p>';
        return;
    }

    currentCustom.forEach(q => {
        const item = document.createElement('div');
        item.className = 'q-item-row';
        item.innerHTML = `
            <div>
                <strong>[الفصل ${q.term}]</strong> ${q.question}
            </div>
            <button class="btn btn-danger" onclick="deleteCustomQuestion(${q.id})"><i class="fa-solid fa-trash"></i> حذف</button>
        `;
        listContainer.appendChild(item);
    });
}

function deleteCustomQuestion(id) {
    customQuestions = customQuestions.filter(q => q.id !== id);
    localStorage.setItem('custom_questions', JSON.stringify(customQuestions));
    renderQuestionsManagementList();
}

function generatePrintPaper() {
    const term = document.getElementById('print-term-select').value;
    allQuestions = [...defaultQuestions, ...(JSON.parse(localStorage.getItem('custom_questions')) || [])];
    const questions = allQuestions.filter(q => q.term == term);

    if(questions.length === 0) {
        alert("لا توجد أسئلة لهذا الفصل.");
        return;
    }

    let printWindow = window.open('', '_blank');
    let html = `
        <html dir="rtl">
        <head>
            <title>ورقة اختبار مادة الرياضيات</title>
            <style>
                body { font-family: sans-serif; padding: 20px; }
                .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
                .q-item { margin-bottom: 20px; }
                .options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 5px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>اختبار مادة الرياضيات - الصف الثالث المتوسط</h2>
                <p>اسم الطالب: ..................................... | الفصل: ......... | الدرجة: ...../10</p>
            </div>
    `;

    questions.forEach((q, idx) => {
        html += `
            <div class="q-item">
                <p><strong>س${idx + 1}:</strong> ${q.question}</p>
                <div class="options">
                    <div>أ) ${q.options[0]}</div>
                    <div>ب) ${q.options[1]}</div>
                    <div>ج) ${q.options[2]}</div>
                    <div>د) ${q.options[3]}</div>
                </div>
            </div>
        `;
    });

    html += `</body></html>`;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
}
