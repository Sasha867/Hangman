const words = [
    'truck',
    'pencil',
    'rain',
    'banana',
    'potato',
    'car',
    'mountain',
    'bike',
    'house',
    'elephant'
]

function generateWordRandom(words){
    const indexWord = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log (words[indexWord]);
}

generateWordRandom(words)