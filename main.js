import Canvas from "./canvas.js";

const leftNumber = document.querySelector('[data-id="left_number"]');
const leftBtn = document.querySelector('[data-id="left_button"]');
const rightNumber = document.querySelector('[data-id="right_number"]');
const rightBtn = document.querySelector('[data-id="right_button"]');
const santa = document.querySelector('[data-id="santa"]');
const gameOverScreen = document.querySelector('[data-id="game-over_screen"]');
const santaSound = new Audio("./utils/sound/santa.wav");

const MAX_NUMBER = 7;
const RIGHT_NUMBERS = [];
const LEFT_NUMBERS = [];

const CANVAS = new Canvas(window.innerWidth, window.innerHeight);

const fillInTheNumbers = () => {
  for (let i = 1; i <= MAX_NUMBER; i++) {
    RIGHT_NUMBERS.push(i);
    LEFT_NUMBERS.push(i);
  };
}

const getRandomNumberFromArray = (array) => {
  const randomIndex = Math.floor((Math.random() * array.length));
  return {
    number: array[randomIndex],
    index: randomIndex
  };
}

const removeIndexFromArray = (array, index) => {
  array.splice(index, 1);
}

const checkForGameOver = () => {
  if (LEFT_NUMBERS.length == 0 && RIGHT_NUMBERS.length == 0) {
    leftBtn.disabled = true;
    rightBtn.disabled = true;
    rightBtn.classList.remove("button__clear");
    gameOverScreen.classList.add("game-over__screen--on");
  }
}

const clearNumbers = () => {
  leftNumber.innerHTML = "";
  rightNumber.innerHTML = "";
}

const moveSanta = () => {
   santa.classList.add("move_to_right");
  setTimeout(() => {
    santa.classList.remove("move_to_right");
  }, 3000)
}

const disableButtonWhileAnimation = (button) => {
  setTimeout(() => {
    button.disabled = false;
    setButtonColor(button);
    checkForGameOver();
  }, 5000);
}

const setButtonColor = (button) => {
  switch(button) {
    case leftBtn:
      leftBtn.classList.add("button__clear");
      rightBtn.classList.remove("button__clear");
      break;
    case rightBtn:
      rightBtn.classList.add("button__clear");
      leftBtn.classList.remove("button__clear");
  };
}

const setGameOverScreen = () => {

}

CANVAS.init();

fillInTheNumbers();

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  santaSound.play();
  clearNumbers();
  moveSanta();
  disableButtonWhileAnimation(rightBtn);
  const left = getRandomNumberFromArray(LEFT_NUMBERS);
  setTimeout(() => leftNumber.innerHTML = left.number, 1000);
  removeIndexFromArray(LEFT_NUMBERS, left.index);
  console.log(LEFT_NUMBERS);
  leftBtn.disabled = true;
});


rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  santaSound.play();
  moveSanta();
  disableButtonWhileAnimation(leftBtn);
  const right = getRandomNumberFromArray(RIGHT_NUMBERS);
  setTimeout(() => rightNumber.innerHTML = right.number, 2000);
  removeIndexFromArray(RIGHT_NUMBERS, right.index);
  console.log(RIGHT_NUMBERS);
  rightBtn.disabled = true;
});
