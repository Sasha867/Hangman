import { wordContainer } from "./index.js";

export function createLetters(arr) {
  arr.forEach((item) => {
    const span = document.createElement("span");
    wordContainer.append(span);
  });
}
