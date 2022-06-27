import { arrImage, word } from "./index.js";
import { showLetter } from "./functionsShowElemets.js";
import { input } from "./index.js";
import { changeImages } from "./changeImages.js";

export function chekValue() {
  if (word.includes(input.value)) {
    showLetter(word);
  } else {
    changeImages(arrImage);
  }
}

// function counterImg() {
//   let counter = 0;
//   return function counterCreator() {
//     return ++counter;
//   };
// }

// const result = counterImg();
// function changeImages(arrImage) {
//   img.setAttribute("src", arrImage[resultCounter()]);
//   imgWrapper.append(img);
//   input.value = "";
// }
