/* eslint-disable linebreak-style */
/* eslint-disable no-eval */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable quotes */

const gameMenu = `
  <button class="game-item" id="memory-start">Kartu Memori</button>
  <button class="game-item" id="math-start">Ayo Berhitung</button>
`;

const gameOption = `
  <div class="gameOption">
    <h2 id="timer" tab-index="0">00:00</h2>
    <button id="reset">Reset</button>
    <button id="backToMenu">Kembali</button>
  </div>
`;

const memoryTemplate = () => {
  // eslint-disable-next-line prefer-const
  let mixedCard = ``;
  const fruits = ['Apel', 'Apel', 'Anggur', 'Anggur', 'Jeruk', 'Jeruk', 'Pisang', 'Pisang', 'Semangka', 'Semangka', 'Stroberi', 'Stroberi'];
  const mixedFruits = fruits.sort(() => Math.random() - 0.5);

  mixedFruits.forEach((fruit) => {
    mixedCard += (`\n
    <div class="memory-card" data-fruit="${fruit}" tabindex="0" role="button">
      <img class="front-face" src="./icons/fruits/${fruit}.svg" alt="${fruit}">
      <img class="back-face" src="./images/inclearn-logo.png" alt="Kartu Memori">
    </div>
  `);
  });

  return mixedCard;
};

const randomNumber = (symbol) => {
  let firstNumber;
  let secondNumber;

  if (symbol === 'bagi') {
    secondNumber = Math.floor(Math.random() * 3) + 1;
    firstNumber = (Math.floor(Math.random() * 3) + 1) * secondNumber;
  } else {
    [firstNumber, secondNumber] = [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1];
    if (firstNumber < secondNumber) { [firstNumber, secondNumber] = [secondNumber, firstNumber]; }
  }

  return [firstNumber, secondNumber];
};

const mathTemplate = (nomorSoal) => {
  const fruits = ['Apel', 'Anggur', 'Jeruk', 'Pisang', 'Semangka', 'Stroberi'];
  const symbols = ['bagi', 'tambah', 'kurang', 'kali'];

  const symbol = symbols[Math.floor(Math.random() * symbols.length)];

  let firstNumber;
  let secondNumber;
  [firstNumber, secondNumber] = randomNumber(symbol);

  const firstFruit = fruits[Math.floor(Math.random() * fruits.length)];
  const secondFruit = fruits[Math.floor(Math.random() * fruits.length)];
  let firstSection = `<div class="firstSection">`;
  let secondSection = `<div class="secondSection">`;
  let equation = `<h2 tab-index="0">Soal ${nomorSoal} / 5</h2>`;

  for (let i = 0; i < firstNumber; i++) {
    firstSection += `
      <img class="firstNumber" src="./icons/fruits/${firstFruit}.svg" alt="${firstFruit}" tab-index="0">
    `;
    if (i === firstNumber - 1) {
      firstSection += `</div>`;
      equation += firstSection;
    }
  }

  equation += `<img class="symbol" src="./icons/maths/${symbol}.svg" alt="${symbol}" tab-index="0">`;

  for (let i = 0; i < secondNumber; i++) {
    secondSection += `
      <img class="secondNumber" src="./icons/fruits/${secondFruit}.svg" alt="${secondFruit}">
    `;
    if (i === secondNumber - 1) {
      secondSection += `</div>`;
      equation += secondSection;
    }
  }

  equation += `
    <div class="inputNumberSection">
      <h2 tab-index="0">Berapakah Hasil Dari Perhitungan Buah Tersebut?</h2>
      <input type="number" min="0" value="0" id="inputNumber">
      <button id="cekInputNumber">Cek Jawaban</button>
    </div>
  `;

  return equation;
};

export {
  gameMenu,
  gameOption,
  memoryTemplate,
  mathTemplate,
};
