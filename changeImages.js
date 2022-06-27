import { resultCounter } from "./index";
import { input } from "./index";
import { img } from "./index";

export function changeImages(arrImage) {
  img.setAttribute("src", arrImage[resultCounter()]);
  imgWrapper.append(img);
  input.value = "";
}
