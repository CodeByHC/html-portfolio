'use strict';

let number = Math.floor(Math.random() * 20) + 1; // Number from 1-20
let score = 20; 
let highScore = 0; 

document.querySelector('#check').addEventListener('click', function () {
    const guess = Number(document.querySelector('#numberInput').value);

    if (!guess) {
        document.querySelector('#message').textContent = '🚫 No number inputted!';
    } else if (guess < 1 || guess > 20) {
        document.querySelector('#message').textContent = '🚫 Number must be between 1 and 20!'
    } else if (score >= 1 && guess === number) {
        document.querySelector('#message').textContent = '✅ Correct number!';
        document.querySelector('body').style.backgroundColor = '#50C878';
        document.querySelector('#square').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('#highscore').textContent = highScore;
        }
    } else {
        document.querySelector('body').style.backgroundColor = '#EE4B2B';
        if (score > 1) {
            document.querySelector('#message').textContent = (guess > number) ? '📈 Too high!' : '📉 Too low!';
            score--;
            document.querySelector('#score').textContent = score;
        } else {
            document.querySelector('#message').textContent = '😔 You lost!';
            score = 0;
            document.querySelector('#score').textContent = score;
        }
    }
});

document.querySelector('#reset').addEventListener('click', function () {
    number = Math.floor(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = '#3f3f3f';
    document.querySelector('#message').textContent = 'Start guessing...';
    document.querySelector('#score').textContent = score;
    document.querySelector('#square').textContent = '?';
    document.querySelector('#numberInput').value = '';

});