/* eslint-disable linebreak-style */
/* eslint-disable quotes */

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

  // mixedCard += `\n
  //   <h2 id="timer-memory">00:00</h2>
  //   <button id="reset-memory">Reset</button>
  // `;

  return mixedCard;
};

export {
  memoryTemplate,
};
