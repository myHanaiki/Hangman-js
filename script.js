const words = ["Javascript","hangman", "coding", "developer", "react", "Machine Learning", "Leadership", "Seals",];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let wordDisplay = Array(chosenWord.length).fill(" ");
let wrongGuesses = 0;
const maxGuesses = 6;
document.getElementById("word-display").innerText = wordDisplay.join(" ");

function createKeyboard() {
    const keyboardDiv = document.getElementById("keyboard");
    keyboardDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i).toLowerCase();
        let btn = document.createElement("button");
        btn.innerText = letter;
        btn.onclick = () => guessLetter(letter, btn);
        keyboardDiv.appendChild(btn);
    }
}
function guessLetter(letter,button) {
    button.disabled = true;

    if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
           if (chosenWord[i] === letter) {
            wordDisplay[i]  === letter 
           }
        }
    } else {
        wrongGuesses++;
        document.getElementById("wrong-guesses").innerText = wrongGuesses;
    }
    
    document.getElementById("word-display").innerText = wordDisplay.join(" ");

    checkGameOver();
}

function checkGameOver() {
    if (wordDisplay.join("") === chosenWord) {
        document.getElementById("message").innerText = "🎉 You Win!";
        disableAllButtons();
    } else if (wrongGuesses >= maxGuesses) {
        document.getElementById("message").innerText = `💀 You Lose! The word was: ${chosenWord}`;
        disableAllButtons();
    }
}
function disableAllButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
createKeyboard();
