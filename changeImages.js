import { img } from "./startGame.js";

export function changeImages(arrImage, counterIndex, input) {
  console.log(counterIndex);
  console.log(arrImage);
  img.setAttribute("src", arrImage[counterIndex]);
  imgWrapper.append(img);
  input.value = "";
}
