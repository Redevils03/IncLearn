/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
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
  <button class="game-item" id="math-start-2">Berhitung Cepat</button>
  <button class="game-item" id="speed-start">Membeli Buah Bersama</button>
  <button class="game-item" id="speed-start-2">Membeli Buah Cepat</button>
`;

const gameOption = `
  <div class="gameOption">
    <h2 id="timer" tabindex="0">00:00</h2>
    <button id="reset">Reset</button>
    <button id="backToMenu">Kembali</button>
  </div>
`;

const gameOption2 = `
  <div class="gameOption">
    <h2 id="timer" tabindex="0">01:00</h2>
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
  let equation = `<h2 id="nomor_soal" tabindex="0">Soal ${nomorSoal} / 5</h2>`;

  for (let i = 0; i < firstNumber; i++) {
    firstSection += `
      <img class="firstNumber" src="./icons/fruits/${firstFruit}.svg" alt="${firstFruit}" tabindex="0">
    `;
    if (i === firstNumber - 1) {
      firstSection += `</div>`;
      equation += firstSection;
    }
  }

  equation += `<img class="symbol" src="./icons/maths/${symbol}.svg" alt="${symbol}" tabindex="0">`;

  for (let i = 0; i < secondNumber; i++) {
    secondSection += `
      <img class="secondNumber" src="./icons/fruits/${secondFruit}.svg" alt="${secondFruit}"  tabindex="0">
    `;
    if (i === secondNumber - 1) {
      secondSection += `</div>`;
      equation += secondSection;
    }
  }

  equation += `
    <div class="inputNumberSection">
      <h2 tabindex="0">Berapakah Hasil Dari Perhitungan Buah Tersebut?</h2>
      <input type="number" min="0" value="0" id="inputNumber">
      <button id="cekInputNumber">Cek Jawaban</button>
    </div>
  `;

  return equation;
};

const speedTemplate = (nomorSoal) => {
  let fruits = ['Apel', 'Anggur', 'Jeruk', 'Pisang', 'Semangka', 'Stroberi'];
  const daftarBelanja = [];
  let jumlahBelanja = Math.floor(Math.random() * 8) + 5;
  let notes = `
    <h2 id="nomor_soal" tabindex="0">Soal ${nomorSoal} / 5</h2>
    <div id="belanjaBox"></div>
  `;

  while (jumlahBelanja !== 0) {
    const temp = Math.floor(Math.random() * jumlahBelanja) + 1;
    jumlahBelanja -= temp;

    const fruitsIndex = Math.floor(Math.random() * fruits.length);
    daftarBelanja.push(`${temp} ${fruits[fruitsIndex]}`);
    fruits.splice(fruitsIndex, 1);
  }
  notes += `<h3 tabindex="0">${daftarBelanja.join(', ')}</h3>`;

  fruits = ['Apel', 'Anggur', 'Jeruk', 'Pisang', 'Semangka', 'Stroberi'];
  for (let i = 0; i < fruits.length; i++) {
    notes += `<img class="firstNumber addFruit" src="./icons/fruits/${fruits[i]}.svg" alt="${fruits[i]}"  tabindex="0">`;
  }

  notes += `
  <div class="checkSection">
    <h2 tabindex="0">Pilih Buah Sesuai Keterangan</h2>
    <button id="cekInputNumber">Cek Jawaban</button>
  </div>
`;

  return notes;
};

export {
  gameMenu,
  gameOption,
  gameOption2,
  memoryTemplate,
  mathTemplate,
  speedTemplate,
};
