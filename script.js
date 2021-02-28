'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20; 
let highscore = [];

//DRY
const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        // document.querySelector('.message').textContent = "⛔ No number!";
        displayMessage("⛔ No number!");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = "30rem";

        if (score > highscore) {
            highscore.push(score); 
            document.querySelector('.highscore').textContent = highscore;          
        }
        
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "☝ Too High!" : "☝ Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("🤯 You lost the game!");
            document.querySelector('.score').textContent = 0;
        }

    } 
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "☝ Too Low!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "🤯 You lost the game!";
    //     }
    // } 
});

document.querySelector('.again').addEventListener('click', () => {

    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = "15rem";    
    document.querySelector('.guess').value = '';
});