import { randomWords } from "./utils.js";
import { createLetters } from "./createElements.js";

export { word };

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

const word = randomWords(arrWords);
const wordContainer = document.getElementById("containerWordLine");
console.log(word);


createLetters();

