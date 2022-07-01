import { wordContainer } from "./startGame.js";

export function createLetters(arrLetters) {
  arrLetters.forEach((item) => {
    const span = document.createElement("span");
    wordContainer.append(span);
  });
}

export function createWinPopup() {
  const popup = document.createElement("div");
  popup.innerHTML = `<div id="popupwin">Congratulations you win, 
  enter "Start new game" !!!</div>`;
  wordContainer.append(popup);
  // document.body.appendChild(popup);
  // const odm = document.getElementById("popupwin");
  // const content = document.createElement("div");
  // odm.appendChild(content);
}

export function createLosePopup() {
  const popup = document.createElement("div");
  popup.innerHTML = `<div id="popuplose"> You lose, enter "Start new game" !!!</div>`;
  wordContainer.append(popup);
}
