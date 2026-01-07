// Game constants and variables :

let inputDir = { x: 0, y: 0 };
let gameStarted = false;

const foodSound = new Audio("./assets/Music/food.mp3");
const gameOverSound = new Audio("./assets/Music/gameover.mp3");
const moveSound = new Audio("./assets/Music/move.mp3");
const musicSound = new Audio("./assets/Music/music.mp3");
musicSound.loop = true;

const MAX_SNAKE_LENGTH = 18;
let Score = 0;

// Accessing High Score :

let highScore = parseInt(localStorage.getItem("snakeHighScore")) || 0;
let highScoreElement = document.querySelector("#high-score");
highScoreElement.innerText = highScore;

let Board = document.querySelector(".board");
let scoreElement = document.querySelector("#score");

// Time related variables :

let speed = 5;
let lastPaintTime = 0;

// Snake and Food varaibles :

let SnakeArr = [{ x: 13, y: 15 }];
let Food = generateFoodPosition(SnakeArr);

// Main Game logic starts here :

function main(ctime) {
  if (!musicSound.currentTime) musicSound.play();

  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) return;

  lastPaintTime = ctime;
  gameEngine();
}

window.requestAnimationFrame(main);

// If collide itself and collision :

function isCollide(snake) {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  if (
    snake[0].x < 1 ||
    snake[0].x > 18 ||
    snake[0].y < 1 ||
    snake[0].y > 18
  ) {
    return true;
  }

  return false;
}

// After eating the food generate new food :

function generateFoodPosition(snake) {
  let a = 2;
  let b = 16;
  let newFood;

  do {
    newFood = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));

  return newFood;
}

// Game Engine starts here :
function gameEngine() {
  // When eating food and then increament the score and then high score :
  if (SnakeArr[0].x === Food.x && SnakeArr[0].y === Food.y) {
    foodSound.play();
    Score++;
    scoreElement.innerText = Score;

    if (Score > highScore) {
      highScore = Score;
      highScoreElement.innerText = highScore;
      localStorage.setItem("snakeHighScore", highScore);
    }

    if (Score % 5 === 0) {
      speed = Math.min(speed + 1, 15);
    }

    if (SnakeArr.length < MAX_SNAKE_LENGTH) {
      SnakeArr.unshift({ ...SnakeArr[0] });
    }

    Food = generateFoodPosition(SnakeArr);
  }

  if (gameStarted) {
    for (let i = SnakeArr.length - 2; i >= 0; i--) {
      SnakeArr[i + 1] = { ...SnakeArr[i] };
    }

    SnakeArr[0].x += inputDir.x;
    SnakeArr[0].y += inputDir.y;
  }

  // Collision :
  if (gameStarted && isCollide(SnakeArr)) {
    gameOverSound.play();
    musicSound.pause();

    alert("Game Over. Press any key to play again!");

    SnakeArr = [{ x: 13, y: 15 }];
    Food = generateFoodPosition(SnakeArr);
    inputDir = { x: 0, y: 0 };
    gameStarted = false;

    Score = 0;
    scoreElement.innerText = Score;
    speed = 5;

    musicSound.currentTime = 0;
    musicSound.play();
    return;
  }

  // Draw Board :
  Board.innerHTML = "";

  SnakeArr.forEach((seg, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = seg.y;
    snakeElement.style.gridColumnStart = seg.x;
    snakeElement.classList.add(index === 0 ? "head" : "snake");
    Board.appendChild(snakeElement);
  });

  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = Food.y;
  foodElement.style.gridColumnStart = Food.x;
  foodElement.classList.add("food");
  Board.appendChild(foodElement);
}
// Arrow keys functionalty :
window.addEventListener("keydown", e => {
  let newDir;

  switch (e.key) {
    case "ArrowUp":
      newDir = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      newDir = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      newDir = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      newDir = { x: 1, y: 0 };
      break;
    default:
      return;
  }

  if (
    !gameStarted ||
    newDir.x !== -inputDir.x ||
    newDir.y !== -inputDir.y
  ) {
    inputDir = newDir;
    gameStarted = true;
    moveSound.currentTime = 0;
    moveSound.play();
  }

  document.querySelector(".controls-note").style.opacity = "0";
});

// Touch Controls :
document.querySelectorAll(".touch-arrow").forEach(btn => {
  btn.addEventListener("touchstart", e => {
    e.preventDefault();
    const dir = JSON.parse(btn.dataset.dir);

    if (
      !gameStarted ||
      dir.x !== -inputDir.x ||
      dir.y !== -inputDir.y
    ) {
      inputDir = dir;
      gameStarted = true;
      moveSound.currentTime = 0;
      moveSound.play();
    }

    document.querySelector(".controls-note").style.opacity = "0";
  });
});
