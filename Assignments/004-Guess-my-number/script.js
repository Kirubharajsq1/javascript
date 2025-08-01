'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 15;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateMessageText = (txt) =>
  (document.querySelector('.message').textContent = txt);

const updateScore = (scr) =>
  (document.querySelector('.score').textContent = scr);

const updateBodyBgColor = (color) =>
  (document.querySelector('body').style.backgroundColor = color);

const updateNumber = (txt) =>
  (document.querySelector('.number').textContent = txt);

const updateGuessNumber = () => (document.querySelector('.guess').value = '');

const checkScore = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (typeof guess != 'number' && !guess) {
    updateMessageText('Not valid number ❌');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    updateMessageText('🎉 Correct Number!');
    updateBodyBgColor('#60b347');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? updateMessageText('📈 Too high!')
        : updateMessageText('📉 Too Low!');
      score--;
      updateScore(score);
    } else {
      updateMessageText('💥 You lose the game!');
    }
    updateBodyBgColor('#222');
  }
};

const resetGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateBodyBgColor('#222');
  updateMessageText('Start Guessing ...');
  updateScore(score);
  updateNumber('?');
  updateGuessNumber();
};

document.querySelector('.check').addEventListener('click', checkScore);
document.querySelector('.again').addEventListener('click', resetGame);
