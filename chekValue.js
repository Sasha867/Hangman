import { arrImage, word } from "./index.js";
import { showLetter } from "./functionsShowElemets.js";
import { changeImages } from "./functionsShowElemets.js";
import { input } from "./index.js";

export function chekValue() {
  if (word.includes(input.value)) {
    showLetter(word);
  } else {
    changeImages(arrImage);
  }
}
