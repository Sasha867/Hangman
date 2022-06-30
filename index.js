import { startNewGame } from "./startGame.js";
import { randomWords } from "./utils.js";

export const arrWords = [
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
// export const arrLetters = randomWords(arrWords);
// console.log(arrLetters);
export const arrImage = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/pngtree-game-over.jpg",
];

startNewGame();
