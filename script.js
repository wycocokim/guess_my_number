'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').innerHTML = message;
};

const displayScore = score => {
  document.querySelector('.score').innerHTML = score;
};

//Guess click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    //Guess valitadion
    if (!guess || guess > 20) {
      displayMessage('Enter a # between 1 and 20');
      //Guess is correct
    } else if (guess === secretNumber) {
      displayMessage('Correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').innerHTML = secretNumber;
      document.querySelector('.guess').disabled = true;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').innerHTML = highScore;
      }
      //Guess is wrong
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    }
  } else {
    displayScore(0);
    displayMessage('You lost the game!');
  }
});

//Reset game click event
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerHTML = '?';
  score = 20;
  displayScore(score);
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
});
