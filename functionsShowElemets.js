import { wordContainer } from "./index.js";
import { input } from "./index.js";
import { showImageStart } from "./utils.js";
import { img } from "./index.js";
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

export function changeImages(arrImage) {
  const imgWrapper = document.getElementById("imgWrapper");
  const imgWrapperNode = imgWrapper.childNodes;
  console.log(imgWrapper.childNodes);
  let number = 0;
  // let result = number;
  for (let i = 1; i < arrImage.length; i++) {
    if (arrImage[number] !== arrImage[i]) {
      number++;
      img.setAttribute("src", arrImage[i]);
      imgWrapper.append(img);
      // }

      //   imgWrapperNode.forEach((el) => {
      //     if (df) {
      //     }
      //   });
    }
  }
}
// showImageStart(arrImage, result);
// let img = document.createElement("img");
// img.setAttribute("src", arrImage[index]);
// imgWrapper.append(img);
// let index = 0;
// img.setAttribute("src", arrImage[index]);
// let img = document.createElement("img");
// imgWrapper.append(img);
// do {
//  return index++;
// } while (index < 4);
// arrImage.forEach((el) => {
//   let img = document.createElement("img");
//   img.setAttribute("src", el);
//   if (){
//     imgWrapper.append(img);
//   }
//   // imgWrapper.append(img);
// });
// arrImage.find((el) => {
//   // let img = document.createElement("img");
//   // img.setAttribute("src", el);
//   if (arrImage !== el) {
//     let img = document.createElement("img");
//     img.setAttribute("src", el);
//     imgWrapper.append(img);
//   }
//   // imgWrapper.append(img);
// });
// }
