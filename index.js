function generateWordRandom(words){
    const indexWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log (words[indexWord]);
}

generateWordRandom(words)