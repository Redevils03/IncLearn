/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
import Game from '../views/pages/game';
import { gameMenu, gameOption2, mathTemplate } from '../views/templates/games-template';

let jawabanBenar = 0;
let countdownTimer = 59;

const mathGame2 = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div id="gameMath"></div>
  `;
  content.innerHTML += gameOption2;

  const initGame = () => {
    if (countdownTimer < 1) {
      return;
    }
    const board = document.getElementById('gameMath');
    board.innerHTML = mathTemplate(0);
    document.getElementById('nomor_soal').innerText = `Jawaban Benar : ${jawabanBenar}`;

    const symbol = document.querySelector('.symbol').alt;
    const mathSymbol = (symbol === 'bagi') ? '/' : (symbol === 'tambah') ? '+' : (symbol === 'kurang') ? '-' : '*';

    const firstNumber = document.querySelectorAll('.firstNumber').length;
    const secondNumber = document.querySelectorAll('.secondNumber').length;
    const mathEquation = firstNumber.toString() + mathSymbol + secondNumber.toString();

    const initCheck = () => {
      const cekInputNumber = document.getElementById('cekInputNumber');
      cekInputNumber.addEventListener('click', () => {
        const inputNumber = document.getElementById('inputNumber');
        if (countdownTimer > 1) {
          if (parseInt(inputNumber.value, 10) === eval(mathEquation)) {
            jawabanBenar += 1;
            initGame();
          } else {
            const section = document.querySelector('p').classList.contains('jawabSalah');
            if (section) { document.querySelector('.jawabSalah').remove(); }
            document.querySelector('.inputNumberSection').innerHTML += `
              <p class="jawabSalah" tabindex="0">Jawaban Salah!</p>
            `;
            initCheck();
          }
        }
      });
    };
    initCheck();
  };
  initGame();

  const backButton = document.getElementById('backToMenu');
  backButton.addEventListener('click', () => {
    content.innerHTML = gameMenu;
    jawabanBenar = 0;
    countdownTimer = 59;
    Game.afterRender();
  });

  const elapsedTimeText = document.getElementById('timer');
  const resetButton = document.getElementById('reset');

  const initTimer = () => {
    if (countdownTimer > 9) {
      elapsedTimeText.innerText = `00:${countdownTimer}`;
    } else {
      elapsedTimeText.innerText = `00:0${countdownTimer}`;
    }

    if (countdownTimer > 0) {
      setTimeout(initTimer, 1000);
      countdownTimer -= 1;
    } else {
      document.querySelector('.inputNumberSection').innerHTML += `
        <p class="gameSelesai" tabindex="0">Selamat anda menjawab benar ${jawabanBenar} soal!</p>
      `;
    }
  };

  setTimeout(initTimer, 1000);

  resetButton.addEventListener('click', () => {
    jawabanBenar = 0;
    countdownTimer = 59;
    return mathGame2();
  });
};

export default mathGame2;
