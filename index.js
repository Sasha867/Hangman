import {
  randomWords,
  showImageStart,
  restartGame,
  addKey,
  counterImg,
} from "./utils.js";
import { createLetters } from "./createElements.js";
import { chekValue } from "./chekValue.js";

const arrWords = [
  "truck",
  "pencil",
  "rain",
  "banana",
  "potato",
  "car",
  "mountain",
  "bike",
  "house",
  "elephant",
];

export const arrImage = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/pngtree-game-over.jpg",
];

export const input = document.getElementById("input");
export const word = randomWords(arrWords);
export const wordContainer = document.getElementById("containerWordLine");
export const arrNodes = wordContainer.childNodes;
export const img = document.createElement("img");
export const resultCounter = counterImg();
export const button = document.getElementById("button");

console.log(word);
createLetters(word);
showImageStart(arrImage);
button.addEventListener("click", chekValue);
input.addEventListener("keydown", addKey);

// const buttonReStart = document.getElementById("buttonReStart");
// buttonReStart.addEventListener("click", restartGame);
// export const input = document.getElementById("input");
// export const word = randomWords(arrWords);
// export const wordContainer = document.getElementById("containerWordLine");
// export const img = document.createElement("img");
// export const resultCounter = counterImg();
// export const button = document.getElementById("button");

// function startGame() {
//   resultCounter = counterImg();
//   let word = randomWords(arrWords);
//   console.log(resultCounter(true));
//   console.log(word);

//   showImageStart(arrImage);

//   const wordContainer = getElementwordContainer();
//   const buttonReStart = document.getElementById("buttonReStart");
//   createLetters(word, wordContainer);
//   buttonReStart.addEventListener("click", restartGame);
//   button.addEventListener("click", chekValue);
//   input.addEventListener("keydown", addKey);
// }
// startGame();
