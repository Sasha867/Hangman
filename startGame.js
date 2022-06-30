import { createLetters, createLosePopup } from "./createElements.js";
import { chekEnterValue } from "./chekValue.js";
import { showImageStart, counter, randomWords, removePopup } from "./utils.js";
import { arrImage, arrWords } from "./index.js";

export const input = document.getElementById("input");
export const wordContainer = document.getElementById("containerWordLine");
export const arrNodes = wordContainer.childNodes;
export const img = document.createElement("img");
export const button = document.getElementById("button");
// export const arrLetters = randomWords(arrWords);

export function startNewGame() {
  input.value = "";
  wordContainer.textContent = "";
  const resultCounter = counter();
  const buttonStartNewGame = document.getElementById("buttonStart");

  const arrLetters = randomWords(arrWords);
  createLetters(arrLetters);
  showImageStart(arrImage, img);
  console.log(arrLetters);

  button.addEventListener("click", stepInTheGame);
  input.addEventListener("keydown", stepInTheGame);
  buttonStartNewGame.addEventListener("click", startNewGame);
  buttonStartNewGame.addEventListener("click", removePopup);

  function stepInTheGame(event) {
    let counterAttemps = 0;
    const keyMouseName = event.pointerType;
    const keyName = event.code;
    if (keyName === "Enter" || keyMouseName === "mouse") {
      counterAttemps = chekEnterValue(resultCounter, arrLetters);
    }
    console.log(counterAttemps);
    if (counterAttemps >= 4) {
      button.removeEventListener("click", stepInTheGame);
      input.removeEventListener("keydown", stepInTheGame);
      createLosePopup();
    }
  }
}
