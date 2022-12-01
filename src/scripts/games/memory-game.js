/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import Game from '../views/pages/game';
import { gameMenu, gameOption, memoryTemplate } from '../views/templates/games-template';

const memoryGame = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div id="game">
    </div>
  `;

  const board = document.getElementById('game');
  board.innerHTML = memoryTemplate();

  content.innerHTML += gameOption;

  const backButton = document.getElementById('backToMenu');
  backButton.addEventListener('click', () => {
    content.innerHTML = gameMenu;
    Game.afterRender();
  });

  const cards = document.querySelectorAll('.memory-card');

  let cardFlipped = false;
  let closeAllCard = false;
  const allSameCard = [];
  let matchCard = 0;
  let cardOne;
  let cardTwo;

  const resetBoard = () => {
    [cardFlipped, closeAllCard] = [false, false];
    [cardOne, cardTwo] = [null, null];
  };

  const disableCards = () => {
    allSameCard.push(cardOne.dataset.fruit);
    allSameCard.push(cardTwo.dataset.fruit);

    matchCard += 1;
    resetBoard();
  };

  const unflipCards = () => {
    closeAllCard = true;

    setTimeout(() => {
      cardOne.classList.remove('flip');
      cardTwo.classList.remove('flip');

      resetBoard();
    }, 500);
  };

  const sameCardCheck = () => {
    const checkCard = cardOne.dataset.fruit === cardTwo.dataset.fruit;
    checkCard ? disableCards() : unflipCards();
  };

  const cardEvent = (cardItem) => {
    cardItem.forEach((card) => card.addEventListener('click', () => {
      if (allSameCard.includes(card.dataset.fruit) || closeAllCard) { return; }

      card.classList.add('flip');
      if (card === cardOne) { return; }

      if (!cardFlipped) {
        cardOne = card;
        cardFlipped = true;
        return;
      }

      cardTwo = card;
      sameCardCheck();
    }));

    cardItem.forEach((card) => card.addEventListener('keydown', (e) => {
      const keyDown = e.key !== undefined ? e.key : e.keyCode;
      if ((keyDown === 'Enter' || keyDown === 13) || (['Spacebar', ' '].indexOf(keyDown) >= 0 || keyDown === 32)) {
        e.preventDefault();
        card.click();
      }
    }));
  };
  cardEvent(cards);

  const elapsedTimeText = document.getElementById('timer');
  const resetButton = document.getElementById('reset');
  let elapsedTimeIntervalRef;
  let startTime;
  let elapsedTimeWhenPaused;

  const setStartTime = () => {
    if (elapsedTimeWhenPaused) {
      startTime = new Date();
      startTime.setMinutes(startTime.getMinutes() - elapsedTimeWhenPaused.minutes);
      startTime.setSeconds(startTime.getSeconds() - elapsedTimeWhenPaused.seconds);
    } else {
      startTime = new Date();
    }
  };

  const getElapsedTime = (startTimes) => {
    if (matchCard === 6) {
      const brokenDownElapsedTime = elapsedTimeText.innerText.split(':');
      return `${brokenDownElapsedTime[0]}:${brokenDownElapsedTime[1]}`;
    }

    const endTime = new Date();
    let timeDiff = (endTime.getTime() - startTimes.getTime()) / 1000;

    const seconds = Math.floor(timeDiff % 60);
    const secondsAsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    timeDiff = Math.floor(timeDiff / 60);
    const minutes = timeDiff % 60;

    const minutesAsString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${minutesAsString}:${secondsAsString}`;
  };

  const startStopwatch = () => {
    setStartTime();

    elapsedTimeIntervalRef = setInterval(() => {
      elapsedTimeText.innerText = getElapsedTime(startTime);
    }, 1000);
  };

  resetButton.addEventListener('click', () => {
    if (typeof elapsedTimeIntervalRef !== 'undefined') {
      clearInterval(elapsedTimeIntervalRef);
      elapsedTimeIntervalRef = undefined;
    }

    elapsedTimeWhenPaused = undefined;
    elapsedTimeText.innerText = '00:00';

    return memoryGame();
  });

  startStopwatch();
};

export default memoryGame;
