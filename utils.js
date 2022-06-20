export { randomWords };

function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

function randomWords(list) {
  let word = list[mathRandom(list.length)];
  return word.split("");
}

