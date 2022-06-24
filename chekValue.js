import { arrImage, word } from "./index.js";
import { showLetter } from "./functionsShowElemets.js";
// import { changeImages } from "./functionsShowElemets.js";
import { input } from "./index.js";
import { img } from "./index.js";


// export let counter = 0;

export function chekValue() {
  if (word.includes(input.value)) {
    showLetter(word);
  } else {
    // counter++;
    // result()
    changeImages(arrImage);
  }
}


function counterImg(){
  let counter = 0;
  return  function counterCreator(){
    return ++counter
  }
}

const result = counterImg();
 function changeImages(arrImage) {
  img.setAttribute("src", arrImage[result()]);
  imgWrapper.append(img);
}



