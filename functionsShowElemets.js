
export function showLetter(arrLetters, arrNodes, input) {
  console.log(55, arrLetters);
  const indexLetters = arrLetters.reduce((acc, el, index) => {
    if (el === input.value.toLowerCase()) {
      acc.push(index);
    }
    return acc;
  }, []);
  for (let i = 0; i < indexLetters.length; i++) {
    const wordContainerChild = arrNodes[indexLetters[i]];
    wordContainerChild.textContent = input.value.toLowerCase();
  }
  input.value = "";
}
