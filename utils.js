import { img } from "./index.js";
function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

export function randomWords(list) {
  let word = list[mathRandom(list.length)].split("");
  return word;
}

export function showImageStart(arrImage, index) {
  img.setAttribute("src", arrImage[0]);
  imgWrapper.append(img);
}
export function restartGame() {
  // if(result){
  //   showImageStart(arrImage);
  // }
}
