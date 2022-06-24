import { randomWords } from "./utils.js";
import { createLetters } from "./createElements.js";
import { chekValue } from "./chekValue.js";
import { showImageStart } from "./utils.js";
import { restartGame } from "./utils.js";
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
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
];
export const input = document.getElementById("input");
export const word = randomWords(arrWords);
export const wordContainer = document.getElementById("containerWordLine");
export const img = document.createElement("img");
console.log(word);

createLetters(word);
showImageStart(arrImage);

const buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener("click", restartGame);
const button = document.getElementById("button");
button.addEventListener("click", chekValue);
