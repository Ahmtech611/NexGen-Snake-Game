// Game constants and variables :
let inputDir = {x : 0, y : 0};
const foodSound = new Audio("./assets/Music/food.mp3");
const gameOverSound = new Audio("./assets/Music/gameover.mp3");
const moveSound = new Audio("./assets/Music/move.mp3");
const musicSound = new Audio("./assets/Music/music.mp3");
musicSound.loop = true;  // ADDED: Prevents music restart spam
let Score = 0;

//  High score variables :
let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
let highScoreElement = document.querySelector("#high-score");
highScoreElement.innerText = highScore;

let Board = document.querySelector('.board');
let scoreElement = document.querySelector("#score");

//Time related variables :
let speed = 5;
let lastPaintTime = 0;

//Snake Array :
let SnakeArr = [
    {x : 13, y : 15}
]

//Food variable :
Food = generateFoodPosition(SnakeArr);

// Game functions :
function main(ctime){
    //Play music ONLY ONCE :
    if (!musicSound.currentTime) musicSound.play();
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

// If Collide :
function isCollide(snaker){
    for(let i = 1; i < SnakeArr.length; i++){
      if(snaker[i].x === snaker[0].x && snaker[i].y === snaker[0].y){
        return true;
      }
    }
    if(snaker[0].x < 1 || snaker[0].x > 18 || snaker[0].y < 1 || snaker[0].y > 18){
      return true;
    }
    return false;
}

// generateFoodPosition :
function generateFoodPosition(snake) {
  let a = 2;
  let b = 16;
  let newFood;

  do {
    newFood = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random())
    };
  } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));

  return newFood;
}

function gameEngine(){
    // Updated eat block with high score + optional speed boost :
    if(SnakeArr[0].y === Food.y && SnakeArr[0].x === Food.x){
      foodSound.play();
      Score += 1;
      scoreElement.innerText = Score;
      
      // High score update :
      if (Score > highScore) {
        highScore = Score;
        highScoreElement.innerText = highScore;
        localStorage.setItem('snakeHighScore', highScore);
      }
      
      // Speed up after every 5 :
      if (Score % 5 === 0) {
        speed = Math.min(speed + 1, 15);
      }
      
      SnakeArr.unshift({x : SnakeArr[0].x + inputDir.x, y: SnakeArr[0].y + inputDir.y});
      Food = generateFoodPosition(SnakeArr);
    }

    // Moving the snake :
    for (let i = SnakeArr.length - 2; i >= 0; i--){
      SnakeArr[i+1] = {...SnakeArr[i]};
    }

    SnakeArr[0].x += inputDir.x;
    SnakeArr[0].y += inputDir.y;

    // Part 1 : Updating the Snake Array & Food :
    if(isCollide(SnakeArr)){
      gameOverSound.play();
      musicSound.pause();
      inputDir = {x : 0, y : 0};
      alert("Game Over. Press any key to play again!")
      SnakeArr = [{x : 13, y : 15}];
      Food = generateFoodPosition(SnakeArr);
      // Restart music cleanly :
      musicSound.currentTime = 0;  
      musicSound.play();
      Score = 0;
      scoreElement.innerText = Score;
      // Reset speed on restart :
      speed = 5;  
      return;
    }

    // Part 2 : Display the Snake and Food :
    Board.innerHTML = "";
    SnakeArr.forEach((e, index)=>{
       let snakeElement = document.createElement('div');  // FIXED: Added 'let' (was missing, caused errors/no display)
       snakeElement.style.gridRowStart = e.y;
       snakeElement.style.gridColumnStart = e.x;

      if(index === 0){
        snakeElement.classList.add('head');
      }
      else{
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

let hasMoved = false;

window.addEventListener('keydown', e => {
    // Your existing keydown code...

    if (!hasMoved && (e.key.startsWith('Arrow'))) {
        hasMoved = true;
        document.querySelector('.controls-note').style.opacity = '0';
    }
});

// Main logic starts here :
window.requestAnimationFrame(main); 

window.addEventListener('keydown', e => {  
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

  if ((newDir.x !== -inputDir.x) || (newDir.y !== -inputDir.y)) {
    inputDir = newDir;
    moveSound.play();
  }
});