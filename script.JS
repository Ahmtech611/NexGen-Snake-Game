// Game constants and variables :
let inputDir = {x: 0, y: 0};
const foodSound = new Audio("./assets/Music/food.mp3");
const gameOverSound = new Audio("./assets/Music/gameover.mp3");
const moveSound = new Audio("./assets/Music/move.mp3");
const musicSound = new Audio("./assets/Music/music.mp3");
musicSound.loop = true;
const MAX_SNAKE_LENGTH = 18;
let Score = 0;

// High score variables :
let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
let highScoreElement = document.querySelector("#high-score");
highScoreElement.innerText = highScore;

let Board = document.querySelector('.board');
let scoreElement = document.querySelector("#score");

// Time related variables :
let speed = 5;
let lastPaintTime = 0;

// Snake Array :
let SnakeArr = [{x: 13, y: 15}];

// Food variable :
let Food = generateFoodPosition(SnakeArr);

// Game functions :
function main(ctime) {
    // Play music only once
    if (musicSound.paused || musicSound.currentTime === 0) {
        musicSound.play().catch(() => {}); // Autoplay policy
    }

    window.requestAnimationFrame(main);

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

// Collision check
function isCollide(snaker) {
    for (let i = 1; i < SnakeArr.length; i++) {
        if (snaker[i].x === snaker[0].x && snaker[i].y === snaker[0].y) {
            return true;
        }
    }
    if (snaker[0].x < 1 || snaker[0].x > 18 || snaker[0].y < 1 || snaker[0].y > 18) {
        return true;
    }
    return false;
}

// Generate food not on snake
function generateFoodPosition(snake) {
    let newFood;
    do {
        newFood = {
            x: Math.round(2 + (16 - 2) * Math.random()),
            y: Math.round(2 + (16 - 2) * Math.random())
        };
    } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
    return newFood;
}

function gameEngine() {
    // Eat food
    if (SnakeArr[0].y === Food.y && SnakeArr[0].x === Food.x) {
        foodSound.play();
        Score += 1;
        scoreElement.innerText = Score;

        // High score update
        if (Score > highScore) {
            highScore = Score;
            highScoreElement.innerText = highScore;
            localStorage.setItem('snakeHighScore', highScore);
        }

        // Speed increase every 5 points
        if (Score % 5 === 0) {
            speed = Math.min(speed + 1, 15);
        }

        // Grow only if under max length
        if (SnakeArr.length < MAX_SNAKE_LENGTH) {
            SnakeArr.unshift({x: SnakeArr[0].x, y: SnakeArr[0].y});
        }

        // New food
        Food = generateFoodPosition(SnakeArr);
    }

    // Move snake body
    for (let i = SnakeArr.length - 2; i >= 0; i--) {
        SnakeArr[i + 1] = {...SnakeArr[i]};
    }

    // Move head
    SnakeArr[0].x += inputDir.x;
    SnakeArr[0].y += inputDir.y;

    // Check collision
    if (isCollide(SnakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over. Press OK to play again!");
        SnakeArr = [{x: 13, y: 15}];
        Food = generateFoodPosition(SnakeArr);
        musicSound.currentTime = 0;
        musicSound.play();
        Score = 0;
        scoreElement.innerText = Score;
        speed = 5;
        return;
    }

    // Render snake and food
    Board.innerHTML = "";
    SnakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        Board.appendChild(snakeElement);
    });

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = Food.y;
    foodElement.style.gridColumnStart = Food.x;
    foodElement.classList.add('food');
    Board.appendChild(foodElement);
}

// Keyboard controls
window.addEventListener('keydown', e => {
    let newDir;

    switch (e.key) {
        case "ArrowUp":
            newDir = {x: 0, y: -1};
            break;
        case "ArrowDown":
            newDir = {x: 0, y: 1};
            break;
        case "ArrowLeft":
            newDir = {x: -1, y: 0};
            break;
        case "ArrowRight":
            newDir = {x: 1, y: 0};
            break;
        default:
            return;
    }

    // Prevent reverse unless snake is length 1
    if (SnakeArr.length === 1 || newDir.x !== -inputDir.x || newDir.y !== -inputDir.y) {
        inputDir = newDir;
        moveSound.currentTime = 0;
        moveSound.play();
    }

    // Hide controls note after first move
    document.querySelector('.controls-note').style.opacity = '0';
});

// Mobile touch controls - FINAL WORKING VERSION
document.querySelectorAll('.touch-arrow').forEach(btn => {
    const dir = JSON.parse(btn.dataset.dir);

    btn.addEventListener('touchstart', e => {
        e.preventDefault();
        e.stopPropagation();
        changeDirection(dir);
    });

    btn.addEventListener('touchend', e => {
        e.preventDefault();
        e.stopPropagation();
    });

    // Prevent Google Lens / context menu popup
    btn.addEventListener('contextmenu', e => {
        e.preventDefault();
        e.stopPropagation();
    });
});

// Direction change function
function changeDirection(newDir) {
    // Prevent reverse
    if (SnakeArr.length > 1 && newDir.x === -inputDir.x && newDir.y === -inputDir.y) {
        return;
    }

    if (newDir.x !== inputDir.x || newDir.y !== inputDir.y) {
        inputDir = newDir;
        moveSound.currentTime = 0;
        moveSound.play();
    }
}

// Start the game
window.requestAnimationFrame(main);