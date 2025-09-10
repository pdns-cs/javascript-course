'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);
//messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector('.score');
console.log('Score Element:', scoreEl);
//scoreEl.textContent = '50';

const numberEl = document.querySelector('.number');
//numberEl.textContent = '15';

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = '100';

const guessEl = document.querySelector('.guess');
//guessEl.value = 12; // Input Element = .value

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

// Track the current score
let score = 20;
let highscore = 0;

// Change the value of score dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
console.log('Game state initialized!');

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  // Once check button is click, to this:
  console.log('Check button is clicked!');
  const guess = Number(document.querySelector('.guess').value);

  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'YOU HAVE WON!!! 🥳';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too High! 🤯';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low! 😟';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press "Again!". ❌';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New Secret Number:', secretNumber);
  // Restart message display
  document.querySelector('.message').textContent = 'Start guessing...';
  // Restart question mark
  document.querySelector('.number').textContent = '?';
  // Update score in UI
  document.querySelector('.score').textContent = score;
  // Restart guess input value
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
