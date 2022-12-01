/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
import Game from '../views/pages/game';
import { gameMenu, gameOption, mathTemplate } from '../views/templates/games-template';

let nomorSoal = 1;

const mathGame = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div id="gameMath"></div>
  `;
  content.innerHTML += gameOption;

  const initGame = () => {
    if (nomorSoal === 6) {
      nomorSoal += 1;
      document.querySelector('.inputNumberSection').innerHTML += `
        <p class="gameSelesai">Selamat anda telah menyelesaikan permainan!</p>
      `;
      return;
    }
    const board = document.getElementById('gameMath');
    board.innerHTML = mathTemplate(nomorSoal);
    nomorSoal += 1;

    const symbol = document.querySelector('.symbol').alt;
    const mathSymbol = (symbol === 'bagi') ? '/' : (symbol === 'tambah') ? '+' : (symbol === 'kurang') ? '-' : '*';

    const firstNumber = document.querySelectorAll('.firstNumber').length;
    const secondNumber = document.querySelectorAll('.secondNumber').length;
    const mathEquation = firstNumber.toString() + mathSymbol + secondNumber.toString();

    const initCheck = () => {
      const cekInputNumber = document.getElementById('cekInputNumber');
      cekInputNumber.addEventListener('click', () => {
        const inputNumber = document.getElementById('inputNumber');
        if (parseInt(inputNumber.value, 10) === eval(mathEquation)) {
          initGame();
        } else {
          const section = document.querySelector('p').classList.contains('jawabSalah');
          if (section) { document.querySelector('.jawabSalah').remove(); }
          document.querySelector('.inputNumberSection').innerHTML += `
            <p class="jawabSalah">Jawaban Salah!</p>
          `;
          initCheck();
        }
      });
    };
    initCheck();
  };
  initGame();

  const backButton = document.getElementById('backToMenu');
  backButton.addEventListener('click', () => {
    content.innerHTML = gameMenu;
    nomorSoal = 1;
    Game.afterRender();
  });

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
    if (nomorSoal === 7) {
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
    nomorSoal = 1;

    return mathGame();
  });

  startStopwatch();
};

export default mathGame;
