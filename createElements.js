export { createLetters };
import { word } from "./index.js";

const wordContainer = document.getElementById('containerWordLine');

function createLetters() {
  const wordContainer = document.getElementById("containerWordLine");
  word.forEach((item) => {
    const span = document.createElement("span");
    wordContainer.append(span);
    // span.textContent = item;
  });

}
