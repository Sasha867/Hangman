import { wordContainer } from "./index.js";


export function createLetters(word) {
  word.forEach((item) => {
    const span = document.createElement("span");
    wordContainer.append(span);
  });
}
