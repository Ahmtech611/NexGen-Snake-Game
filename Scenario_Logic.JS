// Translation System
const translations = {
    en: {
        welcome: "Welcome to NexGen Snake",
        provideInfo: "Please provide your information to continue",
        name: "Name:",
        age: "Age:",
        password: "Password:",
        enterName: "Enter your name",
        agePlaceholder: "Must be 18 or older",
        enterPassword: "Enter password",
        ageWarning: "⚠️ You must be 18 or older to play",
        startGame: "Start Game",
        score: "Score",
        highScore: "High Score",
        arrowKeys: "Arrow Keys to Move",
        eatFood: "Eat the food to grow longer!",
        gameOver: "Game Over!",
        yourScore: "Your Score",
        pressKey: "Press any key to play again.",
        errorName: "Please enter your name!",
        errorAge: "Please enter a valid age!",
        errorAgeLimit: "You must be 18 or older to play this game!",
        errorPassword: "Please enter a valid password (at least 3 characters)!",
        errorWrongPassword: "Incorrect password! Please enter the correct password for this player.",
        errorPasswordSave: "Failed to save password. Please try again."
    },
    es: {
        welcome: "Bienvenido a NexGen Snake",
        provideInfo: "Por favor proporciona tu información para continuar",
        name: "Nombre:",
        age: "Edad:",
        password: "Contraseña:",
        enterName: "Ingresa tu nombre",
        agePlaceholder: "Debe ser mayor de 18 años",
        enterPassword: "Ingresa la contraseña",
        ageWarning: "⚠️ Debes tener 18 años o más para jugar",
        startGame: "Iniciar Juego",
        score: "Puntuación",
        highScore: "Puntuación Máxima",
        arrowKeys: "Teclas de Flecha para Mover",
        eatFood: "¡Come la comida para crecer más!",
        gameOver: "¡Juego Terminado!",
        yourScore: "Tu Puntuación",
        pressKey: "Presiona cualquier tecla para jugar de nuevo.",
        errorName: "¡Por favor ingresa tu nombre!",
        errorAge: "¡Por favor ingresa una edad válida!",
        errorAgeLimit: "¡Debes tener 18 años o más para jugar este juego!",
        errorPassword: "¡Por favor ingresa una contraseña válida (al menos 3 caracteres)!",
        errorWrongPassword: "¡Contraseña incorrecta! Por favor ingresa la contraseña correcta para este jugador.",
        errorPasswordSave: "Error al guardar la contraseña. Por favor intenta de nuevo."
    },
    fr: {
        welcome: "Bienvenue à NexGen Snake",
        provideInfo: "Veuillez fournir vos informations pour continuer",
        name: "Nom:",
        age: "Âge:",
        password: "Mot de passe:",
        enterName: "Entrez votre nom",
        agePlaceholder: "Doit avoir 18 ans ou plus",
        enterPassword: "Entrez le mot de passe",
        ageWarning: "⚠️ Vous devez avoir 18 ans ou plus pour jouer",
        startGame: "Démarrer le Jeu",
        score: "Score",
        highScore: "Meilleur Score",
        arrowKeys: "Flèches pour Déplacer",
        eatFood: "Mangez la nourriture pour grandir!",
        gameOver: "Jeu Terminé!",
        yourScore: "Votre Score",
        pressKey: "Appuyez sur n'importe quelle touche pour rejouer.",
        errorName: "Veuillez entrer votre nom!",
        errorAge: "Veuillez entrer un âge valide!",
        errorAgeLimit: "Vous devez avoir 18 ans ou plus pour jouer à ce jeu!",
        errorPassword: "Veuillez entrer un mot de passe valide (au moins 3 caractères)!",
        errorWrongPassword: "Mot de passe incorrect! Veuillez entrer le mot de passe correct pour ce joueur.",
        errorPasswordSave: "Échec de l'enregistrement du mot de passe. Veuillez réessayer."
    },
    de: {
        welcome: "Willkommen bei NexGen Snake",
        provideInfo: "Bitte geben Sie Ihre Informationen ein, um fortzufahren",
        name: "Name:",
        age: "Alter:",
        password: "Passwort:",
        enterName: "Geben Sie Ihren Namen ein",
        agePlaceholder: "Muss 18 Jahre oder älter sein",
        enterPassword: "Passwort eingeben",
        ageWarning: "⚠️ Sie müssen 18 Jahre oder älter sein, um zu spielen",
        startGame: "Spiel Starten",
        score: "Punkte",
        highScore: "Höchstpunktzahl",
        arrowKeys: "Pfeiltasten zum Bewegen",
        eatFood: "Iss das Essen, um länger zu werden!",
        gameOver: "Spiel Vorbei!",
        yourScore: "Ihre Punktzahl",
        pressKey: "Drücken Sie eine beliebige Taste, um erneut zu spielen.",
        errorName: "Bitte geben Sie Ihren Namen ein!",
        errorAge: "Bitte geben Sie ein gültiges Alter ein!",
        errorAgeLimit: "Sie müssen 18 Jahre oder älter sein, um dieses Spiel zu spielen!",
        errorPassword: "Bitte geben Sie ein gültiges Passwort ein (mindestens 3 Zeichen)!",
        errorWrongPassword: "Falsches Passwort! Bitte geben Sie das richtige Passwort für diesen Spieler ein.",
        errorPasswordSave: "Fehler beim Speichern des Passworts. Bitte versuchen Sie es erneut."
    },
    hi: {
        welcome: "NexGen Snake में आपका स्वागत है",
        provideInfo: "कृपया जारी रखने के लिए अपनी जानकारी प्रदान करें",
        name: "नाम:",
        age: "उम्र:",
        password: "पासवर्ड:",
        enterName: "अपना नाम दर्ज करें",
        agePlaceholder: "18 वर्ष या अधिक होना चाहिए",
        enterPassword: "पासवर्ड दर्ज करें",
        ageWarning: "⚠️ खेलने के लिए आपकी उम्र 18 वर्ष या अधिक होनी चाहिए",
        startGame: "गेम शुरू करें",
        score: "स्कोर",
        highScore: "उच्च स्कोर",
        arrowKeys: "चलने के लिए तीर कुंजियाँ",
        eatFood: "लंबा होने के लिए भोजन खाएं!",
        gameOver: "गेम समाप्त!",
        yourScore: "आपका स्कोर",
        pressKey: "फिर से खेलने के लिए कोई भी कुंजी दबाएं।",
        errorName: "कृपया अपना नाम दर्ज करें!",
        errorAge: "कृपया एक वैध उम्र दर्ज करें!",
        errorAgeLimit: "इस गेम को खेलने के लिए आपकी उम्र 18 वर्ष या अधिक होनी चाहिए!",
        errorPassword: "कृपया एक वैध पासवर्ड दर्ज करें (कम से कम 3 वर्ण)!",
        errorWrongPassword: "गलत पासवर्ड! कृपया इस खिलाड़ी के लिए सही पासवर्ड दर्ज करें।",
        errorPasswordSave: "पासवर्ड सहेजने में विफल। कृपया पुनः प्रयास करें।"
    },
    zh: {
        welcome: "欢迎来到 NexGen Snake",
        provideInfo: "请提供您的信息以继续",
        name: "姓名:",
        age: "年龄:",
        password: "密码:",
        enterName: "输入您的姓名",
        agePlaceholder: "必须年满18岁",
        enterPassword: "输入密码",
        ageWarning: "⚠️ 您必须年满18岁才能游戏",
        startGame: "开始游戏",
        score: "分数",
        highScore: "最高分",
        arrowKeys: "方向键移动",
        eatFood: "吃食物来变长！",
        gameOver: "游戏结束！",
        yourScore: "您的分数",
        pressKey: "按任意键再次游戏。",
        errorName: "请输入您的姓名！",
        errorAge: "请输入有效年龄！",
        errorAgeLimit: "您必须年满18岁才能玩这个游戏！",
        errorPassword: "请输入有效密码（至少3个字符）！",
        errorWrongPassword: "密码错误！请输入此玩家的正确密码。",
        errorPasswordSave: "保存密码失败。请重试。"
    },
    ar: {
        welcome: "مرحباً بك في NexGen Snake",
        provideInfo: "يرجى تقديم معلوماتك للمتابعة",
        name: "الاسم:",
        age: "العمر:",
        password: "كلمة المرور:",
        enterName: "أدخل اسمك",
        agePlaceholder: "يجب أن يكون 18 عاماً أو أكثر",
        enterPassword: "أدخل كلمة المرور",
        ageWarning: "⚠️ يجب أن تكون 18 عاماً أو أكثر للعب",
        startGame: "بدء اللعبة",
        score: "النقاط",
        highScore: "أعلى نقاط",
        arrowKeys: "أزرار الأسهم للتحرك",
        eatFood: "كل الطعام لتنمو أطول!",
        gameOver: "انتهت اللعبة!",
        yourScore: "نقاطك",
        pressKey: "اضغط على أي مفتاح للعب مرة أخرى.",
        errorName: "يرجى إدخال اسمك!",
        errorAge: "يرجى إدخال عمر صالح!",
        errorAgeLimit: "يجب أن تكون 18 عاماً أو أكثر للعب هذه اللعبة!",
        errorPassword: "يرجى إدخال كلمة مرور صالحة (3 أحرف على الأقل)!",
        errorWrongPassword: "كلمة مرور خاطئة! يرجى إدخال كلمة المرور الصحيحة لهذا اللاعب.",
        errorPasswordSave: "فشل حفظ كلمة المرور. يرجى المحاولة مرة أخرى."
    },
    ja: {
        welcome: "NexGen Snakeへようこそ",
        provideInfo: "続行するには情報を入力してください",
        name: "名前:",
        age: "年齢:",
        password: "パスワード:",
        enterName: "名前を入力",
        agePlaceholder: "18歳以上である必要があります",
        enterPassword: "パスワードを入力",
        ageWarning: "⚠️ プレイするには18歳以上である必要があります",
        startGame: "ゲーム開始",
        score: "スコア",
        highScore: "ハイスコア",
        arrowKeys: "矢印キーで移動",
        eatFood: "食べ物を食べて長くなろう！",
        gameOver: "ゲームオーバー！",
        yourScore: "あなたのスコア",
        pressKey: "任意のキーを押して再プレイ。",
        errorName: "名前を入力してください！",
        errorAge: "有効な年齢を入力してください！",
        errorAgeLimit: "このゲームをプレイするには18歳以上である必要があります！",
        errorPassword: "有効なパスワードを入力してください（3文字以上）！",
        errorWrongPassword: "パスワードが間違っています！このプレイヤーの正しいパスワードを入力してください。",
        errorPasswordSave: "パスワードの保存に失敗しました。もう一度お試しください。"
    }
};

// Current language (with security validation)
let storedLang = secureGetItem('nexGenSnakeLanguage') || 'en';
let currentLanguage = validateLanguageCode(storedLang) ? storedLang : 'en';
let currentPlayer = null;
let highScore = 0;

// Game constants & variables :
let inputDir = {x : 0, y : 0};
const foodSound = new Audio("Music/food.mp3");
const gameOverSound = new Audio("Music/gameover.mp3");
const moveSound = new Audio("Music/move.mp3");
const musicSound = new Audio("Music/music.mp3");
let Score = 0;
let gameStarted = false; // Track if game has started after form submission

let Board = document.querySelector('.board');
let scoreDisplay = document.getElementById('scoreDisplay');
let highScoreDisplay = document.getElementById('highScoreDisplay');

// Translation function (with XSS protection)
function translate(key) {
    if (!key || typeof key !== 'string') return '';
    // Validate key exists in translations
    if (!translations[currentLanguage] || !translations[currentLanguage][key]) {
        return translations['en'][key] || escapeHtml(key);
    }
    return escapeHtml(translations[currentLanguage][key]);
}

// Update all text elements with translations (with security)
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && typeof key === 'string') {
            // Use textContent to prevent XSS (not innerHTML)
            element.textContent = translate(key);
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (key && typeof key === 'string') {
            // Escape placeholder to prevent XSS
            element.placeholder = escapeHtml(translate(key));
        }
    });
}

// ==================== SECURITY FUNCTIONS ====================

// XSS Protection - HTML Escape function
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Sanitize input - Remove potentially dangerous characters
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    // Remove script tags, event handlers, and other dangerous patterns
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/data:text\/html/gi, '')
        .trim();
}

// Validate player name - Only allow alphanumeric, spaces, and basic punctuation
function validatePlayerName(name) {
    if (!name || typeof name !== 'string') return false;
    // Allow letters, numbers, spaces, hyphens, underscores, and basic unicode
    // Max length: 50 characters
    const nameRegex = /^[a-zA-Z0-9\s\-_\.]{1,50}$/;
    return nameRegex.test(name) && name.length >= 1 && name.length <= 50;
}

// Validate age - Must be a valid number within reasonable range
function validateAge(age) {
    if (typeof age !== 'number' || isNaN(age) || !isFinite(age)) return false;
    return age >= 18 && age <= 120; // Reasonable age range
}

// Validate password - Basic security requirements
function validatePassword(password) {
    if (!password || typeof password !== 'string') return false;
    // Min 3 chars, max 100 chars, no script tags
    if (password.length < 3 || password.length > 100) return false;
    // Check for dangerous patterns
    const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /data:text\/html/i
    ];
    return !dangerousPatterns.some(pattern => pattern.test(password));
}

// Secure storage key validation
function validateStorageKey(key) {
    if (!key || typeof key !== 'string') return false;
    // Only allow alphanumeric, underscore, and hyphen
    const keyRegex = /^[a-zA-Z0-9_\-]+$/;
    return keyRegex.test(key) && key.length <= 100;
}

// Rate limiting for form submissions
let lastSubmissionTime = 0;
const MIN_SUBMISSION_INTERVAL = 1000; // 1 second between submissions

function checkRateLimit() {
    const now = Date.now();
    if (now - lastSubmissionTime < MIN_SUBMISSION_INTERVAL) {
        return false;
    }
    lastSubmissionTime = now;
    return true;
}

// Secure localStorage operations with validation
function secureSetItem(key, value) {
    if (!validateStorageKey(key)) {
        console.error('Invalid storage key');
        return false;
    }
    try {
        // Validate value is a number for scores
        if (key.includes('HighScore')) {
            const numValue = parseInt(value);
            if (isNaN(numValue) || numValue < 0 || numValue > 1000000) {
                console.error('Invalid score value');
                return false;
            }
            localStorage.setItem(key, numValue.toString());
        } else {
            // For other values, escape and limit length
            const safeValue = escapeHtml(String(value)).substring(0, 1000);
            localStorage.setItem(key, safeValue);
        }
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

function secureGetItem(key) {
    if (!validateStorageKey(key)) {
        return null;
    }
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error('Storage read error:', e);
        return null;
    }
}

// Validate language code to prevent injection
function validateLanguageCode(lang) {
    const allowedLanguages = ['en', 'es', 'fr', 'de', 'hi', 'zh', 'ar', 'ja'];
    return allowedLanguages.includes(lang);
}

// ==================== END SECURITY FUNCTIONS ====================

// Simple password hashing function (for client-side security)
function hashPassword(password) {
    if (!password || typeof password !== 'string') return '';
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    // Add salt based on password length and first char
    const salt = password.length * 31 + (password.charCodeAt(0) || 0);
    return Math.abs(hash + salt).toString(16);
}

// Store player password hash securely
function savePlayerPassword(playerName, password) {
    if (!playerName || !validatePlayerName(playerName)) return false;
    if (!password || !validatePassword(password)) return false;
    const sanitizedName = sanitizeInput(playerName);
    const passwordHash = hashPassword(password);
    const key = `nexGenSnakePassword_${sanitizedName}`;
    return secureSetItem(key, passwordHash);
}

// Verify player password
function verifyPlayerPassword(playerName, password) {
    if (!playerName || !validatePlayerName(playerName)) return false;
    if (!password || !validatePassword(password)) return false;
    const sanitizedName = sanitizeInput(playerName);
    const key = `nexGenSnakePassword_${sanitizedName}`;
    const storedHash = secureGetItem(key);
    if (!storedHash) return false;
    const inputHash = hashPassword(password);
    return storedHash === inputHash;
}

// Check if player exists
function playerExists(playerName) {
    if (!playerName || !validatePlayerName(playerName)) return false;
    const sanitizedName = sanitizeInput(playerName);
    const key = `nexGenSnakePassword_${sanitizedName}`;
    return secureGetItem(key) !== null;
}

// Load player-specific high score (with password verification)
function loadPlayerHighScore(playerName, password) {
    if (!playerName || !validatePlayerName(playerName)) return 0;
    
    // If password provided, verify it
    if (password && !verifyPlayerPassword(playerName, password)) {
        return 0; // Wrong password, don't return high score
    }
    
    const sanitizedName = sanitizeInput(playerName);
    const key = `nexGenSnakeHighScore_${sanitizedName}`;
    if (!validateStorageKey(key)) return 0;
    const stored = secureGetItem(key);
    if (!stored) return 0;
    const score = parseInt(stored);
    return (isNaN(score) || score < 0) ? 0 : score;
}

// Save player-specific high score (with security)
function savePlayerHighScore(playerName, score) {
    if (!playerName || !validatePlayerName(playerName)) return false;
    if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 1000000) return false;
    const sanitizedName = sanitizeInput(playerName);
    const key = `nexGenSnakeHighScore_${sanitizedName}`;
    return secureSetItem(key, score);
}

//Time related variables :
let speed = 5;
let lastPaintTime = 0;

//Snake Array :
let SnakeArr = [
    {x : 13, y : 15}
]

//Food variable : (will be set to a position not on snake after initialization)
let Food = {x : 5, y : 10};

// Initialize food position to ensure it's not on snake
function initializeFoodPosition() {
    Food = generateFoodPosition(SnakeArr);
}

// Function to check if a position overlaps with snake body
function isPositionOnSnake(x, y, snakeArray) {
    if (!snakeArray || snakeArray.length === 0) return false;
    for (let i = 0; i < snakeArray.length; i++) {
        if (snakeArray[i].x === x && snakeArray[i].y === y) {
            return true;
        }
    }
    return false;
}

// Function to generate food at a position not occupied by snake
function generateFoodPosition(snakeArray) {
    let newFood = {x: 0, y: 0};
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loop
    
    do {
        let a = 1;
        let b = 18;
        newFood.x = Math.round(a + (b - a) * Math.random());
        newFood.y = Math.round(a + (b - a) * Math.random());
        attempts++;
        
        // If we can't find a free spot after many attempts, break to avoid infinite loop
        if (attempts >= maxAttempts) {
            console.warn('Could not find free position for food after many attempts');
            break;
        }
    } while (isPositionOnSnake(newFood.x, newFood.y, snakeArray));
    
    return newFood;
}


// Game functions :
 function main(ctime){
    // Only start game if form has been submitted
    if(!gameStarted){
        window.requestAnimationFrame(main);
        return;
    }
    
    musicSound.play();
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }

    lastPaintTime = ctime;
    gameEngine();

 }
 // If Collide :
 function isCollide(snaker){
    // Check collision with snake body
    for(let i = 1; i < SnakeArr.length; i++){
      if(snaker[i].x === snaker[0].x && snaker[i].y === snaker[0].y){
        return true;
      }
    }
    // Check collision with walls
    // Grid is 18x18, valid positions are 1-18 (1-indexed for CSS grid)
    // Snake hits wall if x or y is less than 1 or greater than 18
    if(snaker[0].x < 1 || snaker[0].x > 18 || snaker[0].y < 1 || snaker[0].y > 18){
      return true;
    }
    return false;
 }

 function gameEngine(){
    // Part 1 : Updating the Snake Array & Food :
    if(isCollide(SnakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x : 0, y : 0};
        
        // Update player-specific high score if current score is higher
        if(currentPlayer && Score > highScore){
            highScore = Score;
            savePlayerHighScore(currentPlayer, highScore);
            if(highScoreDisplay) highScoreDisplay.textContent = highScore;
        }
        
        const gameOverMsg = `${translate('gameOver')}\n${translate('yourScore')}: ${Score}\n${translate('highScore')}: ${highScore}\n\n${translate('pressKey')}`;
        alert(gameOverMsg);
        SnakeArr = [{x : 13, y : 15}];
        // Regenerate food at a position not on snake
        Food = generateFoodPosition(SnakeArr);
        musicSound.play();
        Score = 0;
        updateScoreDisplay();
    }

    // If you have eaten the food, then increament the score and regenerate the food :
    if(SnakeArr[0].y === Food.y && SnakeArr[0].x === Food.x){
      SnakeArr.unshift({x : SnakeArr[0].x + inputDir.x, y: SnakeArr[0].y + inputDir.y});
      foodSound.play();
      // Secure score increment with validation
      const newScore = (typeof Score === 'number' && !isNaN(Score)) ? Score + 10 : 10;
      Score = (newScore >= 0 && newScore <= 1000000) ? newScore : Score;
      updateScoreDisplay();
      // Generate food at a position not occupied by snake
      Food = generateFoodPosition(SnakeArr);
    }

    // Moving the snake :-
    for (let i = SnakeArr.length - 2; i >= 0; i--){
      SnakeArr[i+1] = {...SnakeArr[i]};
    }

    SnakeArr[0].x += inputDir.x;
    SnakeArr[0].y += inputDir.y;


    // Part 2 : Display the Snake & Food :
    Board.innerHTML = "";
    SnakeArr.forEach((e, index)=>{
       snakeElement = document.createElement('div');
       snakeElement.style.gridRowStart = e.y;
       snakeElement.style.gridColumnStart = e.x;

      if(index === 0){
        snakeElement.classList.add('head');
    }
      else{
        snakeElement.classList.add('snake');
    }
    Board.appendChild(snakeElement);
    })
       
       
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = Food.y;
    foodElement.style.gridColumnStart = Food.x;
    Board.appendChild(foodElement);
    foodElement.classList.add('food');
}













// Function to update score display
function updateScoreDisplay(){
    if(scoreDisplay) {
        // Validate score before displaying
        const safeScore = (typeof Score === 'number' && !isNaN(Score) && Score >= 0) ? Score : 0;
        scoreDisplay.textContent = safeScore;
    }
}

// Modal and Form Handling :
const modal = document.getElementById('infoModal');
const infoForm = document.getElementById('infoForm');
const errorMessage = document.getElementById('errorMessage');
const playerNameInput = document.getElementById('playerName');
const playerAgeInput = document.getElementById('playerAge');
const playerPasswordInput = document.getElementById('playerPassword');

// Show modal on page load
// Language selector
const languageSelect = document.getElementById('languageSelect');

// Initialize language selector
if(languageSelect) {
    languageSelect.value = currentLanguage;
    
    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        // Validate language code before setting
        if (validateLanguageCode(selectedLang)) {
            currentLanguage = selectedLang;
            secureSetItem('nexGenSnakeLanguage', currentLanguage);
            updateTranslations();
        } else {
            // Reset to default if invalid
            e.target.value = currentLanguage;
            console.error('Invalid language code');
        }
    });
}

// Real-time input validation and sanitization
function setupInputSecurity() {
    // Name input protection
    if(playerNameInput) {
        playerNameInput.addEventListener('input', (e) => {
            let value = e.target.value;
            // Remove dangerous characters in real-time
            value = sanitizeInput(value);
            // Limit length
            if(value.length > 50) {
                value = value.substring(0, 50);
            }
            e.target.value = value;
        });
        
        playerNameInput.addEventListener('paste', (e) => {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const sanitized = sanitizeInput(paste).substring(0, 50);
            e.target.value = sanitized;
        });
    }
    
    // Age input protection
    if(playerAgeInput) {
        playerAgeInput.addEventListener('input', (e) => {
            let value = e.target.value;
            // Only allow numbers
            value = value.replace(/[^0-9]/g, '');
            // Limit to reasonable range
            if(value && parseInt(value) > 120) {
                value = '120';
            }
            e.target.value = value;
        });
    }
    
    // Password input protection
    if(playerPasswordInput) {
        playerPasswordInput.addEventListener('input', (e) => {
            let value = e.target.value;
            // Remove dangerous patterns
            value = sanitizeInput(value);
            // Limit length
            if(value.length > 100) {
                value = value.substring(0, 100);
            }
            e.target.value = value;
        });
        
        playerPasswordInput.addEventListener('paste', (e) => {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const sanitized = sanitizeInput(paste).substring(0, 100);
            e.target.value = sanitized;
        });
    }
}

// Security: Validate score integrity periodically
function validateScoreIntegrity() {
    if (typeof Score !== 'number' || isNaN(Score) || Score < 0 || Score > 1000000) {
        console.warn('Score integrity check failed, resetting score');
        Score = 0;
        updateScoreDisplay();
    }
}

// Run integrity check periodically
setInterval(validateScoreIntegrity, 5000); // Every 5 seconds

// Load last player's name on page load (high score only shown after password verification)
function loadLastPlayerHighScore() {
    const lastPlayer = secureGetItem('nexGenSnakeLastPlayer');
    if (lastPlayer && validatePlayerName(lastPlayer)) {
        // Pre-fill the name field only (password required for high score)
        if (playerNameInput) {
            playerNameInput.value = escapeHtml(lastPlayer);
        }
        
        // Don't load high score without password verification
        // High score will be loaded after form submission with correct password
        if (highScoreDisplay) {
            highScoreDisplay.textContent = '0';
        }
        
        console.log(`Loaded last player name: ${lastPlayer} (password required for high score)`);
    }
}

// Initialize translations on page load
window.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    setupInputSecurity();
    loadLastPlayerHighScore(); // Load last player's high score
    initializeFoodPosition(); // Ensure initial food is not on snake
    modal.classList.remove('hidden');
    
    // Additional security: Prevent right-click context menu (optional)
    document.addEventListener('contextmenu', (e) => {
        // Allow in development, disable in production if needed
        // e.preventDefault();
    });
    
    // Prevent F12 and common dev tools shortcuts (optional, can be bypassed)
    document.addEventListener('keydown', (e) => {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.key === 'U') {
            e.preventDefault();
            return false;
        }
    });
});

// Form submission handler (with comprehensive security)
infoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!checkRateLimit()) {
        showError(translate('errorRateLimit') || 'Please wait before submitting again.');
        return;
    }
    
    // Get and sanitize inputs
    const rawName = playerNameInput.value;
    const rawAge = playerAgeInput.value;
    const rawPassword = playerPasswordInput.value;
    
    // Sanitize all inputs
    const sanitizedName = sanitizeInput(rawName).trim();
    const sanitizedPassword = sanitizeInput(rawPassword).trim();
    
    // Parse and validate age
    const age = parseInt(rawAge);
    
    // Reset error message
    errorMessage.classList.remove('show');
    
    // Security validation
    if(!sanitizedName || !validatePlayerName(sanitizedName)){
        showError(translate('errorName'));
        playerNameInput.value = '';
        return;
    }
    
    if(!validateAge(age)){
        showError(translate('errorAge'));
        playerAgeInput.value = '';
        return;
    }
    
    if(!validatePassword(sanitizedPassword)){
        showError(translate('errorPassword'));
        playerPasswordInput.value = '';
        return;
    }
    
    // Additional length checks
    if(sanitizedName.length > 50){
        showError(translate('errorNameLength') || 'Name is too long (max 50 characters)');
        return;
    }
    
    if(sanitizedPassword.length > 100){
        showError(translate('errorPasswordLength') || 'Password is too long (max 100 characters)');
        return;
    }
    
    // Check if player exists
    const playerExistsCheck = playerExists(sanitizedName);
    
    if (playerExistsCheck) {
        // Existing player - verify password
        const storedPasswordHash = secureGetItem(`nexGenSnakePassword_${sanitizeInput(sanitizedName)}`);
        const inputPasswordHash = hashPassword(sanitizedPassword);
        
        if (storedPasswordHash !== inputPasswordHash) {
            // Wrong password
            showError(translate('errorWrongPassword') || 'Incorrect password! Please enter the correct password for this player.');
            playerPasswordInput.value = '';
            playerPasswordInput.focus();
            return;
        }
        // Password correct - if they entered a different password (new one), update it
        // But since we verified it matches, password stays the same
        // Password is already correct, no need to update
    } else {
        // New player - save password
        if (!savePlayerPassword(sanitizedName, sanitizedPassword)) {
            showError(translate('errorPasswordSave') || 'Failed to save password. Please try again.');
            return;
        }
    }
    
    // Set current player (sanitized) and load their high score (only if password verified)
    currentPlayer = sanitizedName;
    
    // Store player name in localStorage for future sessions
    secureSetItem('nexGenSnakeLastPlayer', currentPlayer);
    
    // Load player's high score (password already verified above)
    highScore = loadPlayerHighScore(currentPlayer, sanitizedPassword);
    if(highScoreDisplay) {
        highScoreDisplay.textContent = highScore;
    }
    
    // Clear password from memory (security best practice)
    playerPasswordInput.value = '';
    
    // All validations passed - hide modal and start game
    modal.classList.add('hidden');
    gameStarted = true;
    window.requestAnimationFrame(main);
    
    // Log player info (sanitized, no password)
    console.log(`Player: ${currentPlayer}, Age: ${age}, High Score: ${highScore}, Returning Player: ${playerExistsCheck}`);
});

function showError(message) {
    // Escape HTML to prevent XSS
    errorMessage.textContent = escapeHtml(message);
    errorMessage.classList.add('show');
}

// Main logic starts here :
window.requestAnimationFrame(main); //Alternative time interval event functionality :
window.addEventListener('keydown', e =>{
    // Only allow game controls if game has started
    if(!gameStarted) return;
    
    inputDir = {x : 0 , y : 1};
    moveSound.play();
     
    switch(e.key){
      case "ArrowUp":
        console.log("ArrowUp");
        inputDir.x = 0;
        inputDir.y = -1;
        break;
      case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x = 0;
        inputDir.y = 1;
        break;
      case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x = -1;
        inputDir.y = 0;
        break;
      case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x = 1;
        inputDir.y = 0; 
        break;
      default:
        break;
    }
});