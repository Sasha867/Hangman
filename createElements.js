export {createLetters}

const wordContainer = document.getElementById('containerWordLine');

function createLetters(){
    const wordContainer = document.getElementById('containerWordLine');
    // const arrWord = secretWord.split('');
    arrWord.forEach((item)=>{
        const span = document.createElement('span');
        wordContainer.append(span);
        // span.textContent = item;
    })
}

createLetters()