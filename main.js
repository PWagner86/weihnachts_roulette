const leftNumber = document.querySelector('[data-id="left_number"]');
const leftBtn = document.querySelector('[data-id="left_button"]');
const rightNumber = document.querySelector('[data-id="right_number"]');
const rightBtn = document.querySelector('[data-id="right_button"]');

const MAX_NUMBER = 7;
const RIGHT_NUMBERS = [];
const LEFT_NUMBERS = [];

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

const checkForGameOver = (leftArray, rightArray) => {
  return leftArray.length == 0 && rightArray.length == 0;
}

const clearNumbers = () => {
  leftNumber.innerHTML = "";
  rightNumber.innerHTML = "";
}

fillInTheNumbers();

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearNumbers();
  rightBtn.disabled = false;
  const left = getRandomNumberFromArray(LEFT_NUMBERS);
  leftNumber.innerHTML = left.number;
  removeIndexFromArray(LEFT_NUMBERS, left.index);
  console.log(LEFT_NUMBERS);
  leftBtn.disabled = true;
  console.log(checkForGameOver(LEFT_NUMBERS, RIGHT_NUMBERS));
  if (checkForGameOver(LEFT_NUMBERS, RIGHT_NUMBERS)) {
    leftBtn.disabled = true;
    rightBtn.disabled = true;
    return;
  }
});


rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  leftBtn.disabled = false;
  const right = getRandomNumberFromArray(RIGHT_NUMBERS);
  rightNumber.innerHTML = right.number;
  removeIndexFromArray(RIGHT_NUMBERS, right.index);
  console.log(RIGHT_NUMBERS);
  rightBtn.disabled = true;
  console.log(checkForGameOver(LEFT_NUMBERS, RIGHT_NUMBERS));
  if (checkForGameOver(LEFT_NUMBERS, RIGHT_NUMBERS)) {
    leftBtn.disabled = true;
    rightBtn.disabled = true;
    return;
  }
});
