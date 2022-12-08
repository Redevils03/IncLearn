/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
import Game from '../views/pages/game';
import { gameMenu, gameOption, speedTemplate } from '../views/templates/games-template';

let nomorSoal = 1;

const speedGame = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div id="gameMath"></div>
  `;
  content.innerHTML += gameOption;

  const initGame = () => {
    if (nomorSoal === 6) {
      nomorSoal += 1;
      document.querySelector('.checkSection').innerHTML += `
        <p class="gameSelesai" tabindex="0">Selamat anda telah menyelesaikan permainan!</p>
      `;
      return;
    }
    const board = document.getElementById('gameMath');
    board.innerHTML = speedTemplate(nomorSoal);
    nomorSoal += 1;

    const fruitItem = document.querySelectorAll('.addFruit');
    fruitItem.forEach((fruit) => fruit.addEventListener('click', (event) => {
      const section = document.querySelector('p').classList.contains('jawabSalah');
      if (section) { document.querySelector('.jawabSalah').remove(); }

      if (document.querySelectorAll('.minusFruit').length === 12) {
        document.getElementById('belanjaBox').innerHTML += `
          <p class="jawabSalah" tabindex="0">Maksimal 12 buah yang dapat dipilih!</p>
        `;
      } else {
        document.getElementById('belanjaBox').innerHTML += `<img class="firstNumber minusFruit ${event.target.alt}" src="./icons/fruits/${event.target.alt}.svg" alt="${event.target.alt}"  tabindex="0"></img>`;
      }

      const minusFruit = document.querySelectorAll('.minusFruit');
      minusFruit.forEach((minus) => minus.addEventListener('click', () => {
        const section1 = document.querySelector('p').classList.contains('jawabSalah');
        if (section1) { document.querySelector('.jawabSalah').remove(); }

        minus.remove();
      }));
    }));

    const initCheck = () => {
      const cekInputNumber = document.getElementById('cekInputNumber');
      const soal = document.querySelector('#gameMath h3').innerText.split(', ').sort().join(', ');

      cekInputNumber.addEventListener('click', () => {
        const fruits = ['Apel', 'Anggur', 'Jeruk', 'Pisang', 'Semangka', 'Stroberi'];
        const belanjaBox = [];

        fruits.forEach((x) => {
          const jumlah = document.querySelectorAll(`.${x}`).length;
          if (jumlah > 0) {
            belanjaBox.push(`${jumlah} ${x}`);
          }
        });
        belanjaBox.sort();

        if (soal === belanjaBox.join(', ')) {
          initGame();
        } else {
          const section = document.querySelector('p').classList.contains('jawabSalah');
          if (section) { document.querySelector('.jawabSalah').remove(); }
          document.querySelector('.checkSection').innerHTML += `
            <p class="jawabSalah" tabindex="0">Jumlah buah masih belum sesuai!</p>
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

    return speedGame();
  });

  startStopwatch();
};

export default speedGame;
