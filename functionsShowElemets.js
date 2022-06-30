export function showLetter(arrLetters, arrNodes, input) {
  // const arrNodes = wordContainer.childNodes;
  const indexLetters = arrLetters.reduce((acc, el, index) => {
    if (el === input.value) {
      acc.push(index);
    }
    return acc;
  }, []);
  for (let i = 0; i < indexLetters.length; i++) {
    const wordContainerChild = arrNodes[indexLetters[i]];
    wordContainerChild.textContent = input.value;
  }
  input.value = "";
  console.log(indexLetters);
}
