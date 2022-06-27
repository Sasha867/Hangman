import { arrImage, word } from "./index.js";
import { showLetter } from "./functionsShowElemets.js";
import { input } from "./index.js";
import { changeImages } from "./changeImages.js";
// import { arrNodes } from "./index.js";

export const chekValue = function chekValue() {
  if (word.includes(input.value)) {
    showLetter(word);
  } else {
    changeImages(arrImage);
  }
};
