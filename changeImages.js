import { chekValue } from "./chekValue.js";
import { resultCounter } from "./index.js";
import { input } from "./index.js";
import { img } from "./index.js";
import { addKey } from "./utils.js";

export function changeImages(arrImage) {
  const counter = resultCounter();
  img.setAttribute("src", arrImage[counter]);
  imgWrapper.append(img);
  input.value = "";
  console.log(counter);
  if (counter >= 4) {
    button.removeEventListener("click", chekValue);
    input.removeEventListener("keydown", addKey);
  }
}
