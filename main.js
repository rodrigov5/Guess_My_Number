'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

const msg = document.querySelector('.msg');
const scoreValue = document.querySelector('.score');
const highScoreValue = document.querySelector('.highscore');
const numberBox = document.querySelector('.number');



let check = document.querySelector('.check');
check.addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    msg.textContent = 'No number!🚫';

    // when player wins
  } else if (guess === secretNumber) {
    msg.textContent = 'Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';

    numberBox.style.width = '30rem';
    numberBox.textContent = secretNumber;
    highScoreValue.textContent = score;

    // when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      msg.textContent = 'Too High📈';
      score--;
      scoreValue.textContent = score;
    } else {
      msg.textContent = 'You lost the game, try again!';
      scoreValue.textContent = 0;
    }

    // when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      msg.textContent = 'Too Low📉';
      score--;
      scoreValue.textContent = score;
    } else {
      msg.textContent = 'You lost the game, try again!';
      scoreValue.textContent = 0;
    }
  }
});

let again = document.querySelector('.again');
again.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  numberBox.style.width = '15rem';
  score = 20
  scoreValue.textContent = score;
  msg.textContent = 'Start guessing...';
  numberBox.textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
