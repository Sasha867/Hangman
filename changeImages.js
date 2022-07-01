import { img } from "./startGame.js";

export function changeImages(arrImage, counterIndex, input) {
  img.setAttribute("src", arrImage[counterIndex]);
  imgWrapper.append(img);
  input.value = "";
}
