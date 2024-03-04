'use strict';

//Select Buttons
const rolDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

//Select Scores
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

//Select Players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Select dice
const dice = document.querySelector('.dice');

//Create VAriables for game
let activePlayer = 0;
let currentScore = 0;
let gameActive = true;

//Function for rendering
function rendering() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//----------------------------------------------------------------

//Click on Dice button
rolDice.addEventListener('click', () => {
  if (gameActive) {
    var randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `/img/dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      rendering();
    }
  }
});

//Click on hold button
btnHold.addEventListener('click', () => {
  if (gameActive) {
    let mainNum = Number(
      document.getElementById(`score--${activePlayer}`).textContent
    );
    mainNum += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = mainNum;
    rendering();
    if (mainNum >= 50) {
      activePlayer = activePlayer === 0 ? 1 : 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent =
        'Winner!!!';
      gameActive = false;
    }
  }
});

//Click on new game button
btnNew.addEventListener('click', () => {
  document.location.reload();
});

//----------------------------------------------------------------
