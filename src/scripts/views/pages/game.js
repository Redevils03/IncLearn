/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import mathGame from '../../games/math-game';
import memoryGame from '../../games/memory-game';
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
  },
};

export default Game;
