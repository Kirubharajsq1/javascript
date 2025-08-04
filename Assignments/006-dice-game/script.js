'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
let currentPlayer = currentScore0El;

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const resetGame = function () {
  currentPlayer = currentScore0El;
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add('hidden');
};

const rolldice = function () {
  const diceRollScore = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.setAttribute('src', `dice-${diceRollScore}.png`);
  if (diceRollScore != 1) {
    currentPlayer.textContent =
      Number(currentPlayer.textContent) + diceRollScore;
  } else {
    if (currentPlayer == currentScore0El) {
      score0El.textContent =
        Number(score0El.textContent) + Number(currentPlayer.textContent);
      if (Number(score0El.textContent) >= 100) {
        console.log('Current Player wins');
      }
      currentPlayer.textContent = 0;
      currentPlayer = currentScore1El;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      score1El.textContent =
        Number(score1El.textContent) + Number(currentPlayer.textContent);
      if (Number(score0El.textContent) >= 100) {
        console.log('Current Player wins');
      }
      currentPlayer.textContent = 0;
      currentPlayer = currentScore0El;
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    }
  }
};

const holdDice = function () {};

document.querySelector('.btn--new').addEventListener('click', resetGame);
document.querySelector('.btn--roll').addEventListener('click', rolldice);
document.querySelector('.btn--hold').addEventListener('click', holdDice);
