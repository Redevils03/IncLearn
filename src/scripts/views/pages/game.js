/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import memoryGame from '../../games/memory-game';
import mathGame from '../../games/math-game';
import mathGame2 from '../../games/math-game-2';
import speedGame from '../../games/speed-game';
import speedGame2 from '../../games/speed-game-2';
import { gameMenu } from '../templates/games-template';

const Game = {
  async render() {
    return gameMenu;
  },

  async afterRender() {
    const memoryButton = document.getElementById('memory-start');
    memoryButton.addEventListener('click', memoryGame);

    const mathButton = document.getElementById('math-start');
    mathButton.addEventListener('click', mathGame);

    const mathButton2 = document.getElementById('math-start-2');
    mathButton2.addEventListener('click', mathGame2);

    const speedButton = document.getElementById('speed-start');
    speedButton.addEventListener('click', speedGame);

    const speedButton2 = document.getElementById('speed-start-2');
    speedButton2.addEventListener('click', speedGame2);
  },
};

export default Game;
