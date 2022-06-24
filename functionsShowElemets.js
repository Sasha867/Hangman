import { wordContainer } from "./index.js";
import { input } from "./index.js";
import { showImageStart } from "./utils.js";
// import { img } from "./index.js";
// import { counter } from "./chekValue.js";
// import { word } from "./index.js";
// const imgWrapper = document.getElementById("imgWrapper");
// const arrImage = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"];

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


// export function changeImages(arrImage) {
//       let counter = 0;
//       img.setAttribute("src", arrImage[counter]);
//       imgWrapper.append(img);
//     return  function counter(){
//         return counter++
//       }

// const result = changeImages();

