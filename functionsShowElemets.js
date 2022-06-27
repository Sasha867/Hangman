import { wordContainer } from "./index.js";
import { input } from "./index.js";

export function showLetter(arr) {
  const arrNodes = wordContainer.childNodes;
  let indexLetter = arr
    .map((el, index) => (el === input.value ? index : ""))
    .filter((e) => e !== "");
  for (let i = 0; i < indexLetter.length; i++) {
    let wordContainerChild = arrNodes[indexLetter[i]];
    wordContainerChild.textContent = input.value;
    // console.log(indexLetter);
  }
  input.value = "";
}
