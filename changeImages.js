import { resultCounter } from "./index.js";
import { input } from "./index.js";
import { img } from "./index.js";

export function changeImages(arrImage) {
  img.setAttribute("src", arrImage[resultCounter()]);
  imgWrapper.append(img);
  input.value = "";
}
