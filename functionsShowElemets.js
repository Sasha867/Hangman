import { input } from "./index.js";
import { wordContainer } from "./index.js";

export function showLetter(word) {
  const arrNodes = wordContainer.childNodes;
  let indexLetters = word.reduce((acc, el, index) => {
    if (el === input.value) {
      acc.push(index);
    }
    return acc;
  }, []);
  for (let i = 0; i < indexLetters.length; i++) {
    let wordContainerChild = arrNodes[indexLetters[i]];
    wordContainerChild.textContent = input.value;
    // console.log(wordContainerChild);
  }
  input.value = "";
  // winImage(arrNodes);
}
