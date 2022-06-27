import { chekValue } from "./chekValue.js";
import { img } from "./index.js";
// import { button } from "./index.js";
// import { input } from "./index.js";

function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

export function randomWords(list) {
  let word = list[mathRandom(list.length)].split("");
  return word;
}

export function showImageStart(arrImage) {
  img.setAttribute("src", arrImage[0]);
  imgWrapper.append(img);
}

export const addKey = function addKey(event) {
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    chekValue();
  }
};

export function counterImg() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}
