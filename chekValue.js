import { word } from "./index.js";


export function chekValue() {
    const input = document.getElementById("input");
    console.log(input.textContent);
    if (word.includes(input.value)) {
        span.textContent = item;;
    }else {
      console.log('нуеееее');
    }
  }
  