import { wordContainer } from "./startGame.js";

function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

export function randomWords(arrWords) {
  let arrLetters = arrWords[mathRandom(arrWords.length)].split("");
  return arrLetters;
}

export function showImageStart(arrImage, img) {
  img.setAttribute("src", arrImage[0]);
  imgWrapper.append(img);
}

export function counter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

export function removePopup() {
  if (wordContainer.popup) {
    document.querySelector("#popuplose").remove();
    document.querySelector("#popupwin").remove();
  }
}


