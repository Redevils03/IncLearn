/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
import Game from '../views/pages/game';
import { gameMenu, gameOption2, speedTemplate } from '../views/templates/games-template';

let jawabanBenar = 0;
let countdownTimer = 59;

const speedGame2 = () => {
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
    board.innerHTML = speedTemplate(0);
    document.getElementById('nomor_soal').innerText = `Jawaban Benar : ${jawabanBenar}`;

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
        if (countdownTimer > 1) {
          if (soal === belanjaBox.join(', ')) {
            jawabanBenar += 1;
            initGame();
          } else {
            const section = document.querySelector('p').classList.contains('jawabSalah');
            if (section) { document.querySelector('.jawabSalah').remove(); }
            document.querySelector('.checkSection').innerHTML += `
              <p class="jawabSalah" tabindex="0">Jumlah buah masih belum sesuai!</p>
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
      document.querySelector('.checkSection').innerHTML += `
        <p class="gameSelesai" tabindex="0">Selamat anda menjawab benar ${jawabanBenar} soal!</p>
      `;
    }
  };

  setTimeout(initTimer, 1000);

  resetButton.addEventListener('click', () => {
    jawabanBenar = 0;
    countdownTimer = 59;
    return speedGame2();
  });
};

export default speedGame2;
