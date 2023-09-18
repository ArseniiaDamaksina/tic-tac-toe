import data from '../data.js';
import dom from '../dom.js';
import gameHandler from './gameHandler.js';

const winHandler = () => {

  for (let i = 0; i < data.comb.length; i++) {
      if (
          dom.fields[data.comb[i][0]].classList.contains('x') &&
          dom.fields[data.comb[i][1]].classList.contains('x') &&
          dom.fields[data.comb[i][2]].classList.contains('x')
      ) {
          setTimeout(() => {
              dom.fields[data.comb[i][0]].classList.add('active');
              dom.fields[data.comb[i][1]].classList.add('active');
              dom.fields[data.comb[i][2]].classList.add('active');
              dom.result.innerText = 'X wins!';
          }, 1500);
          dom.game.removeEventListener('click', gameHandler);
      } else if (
          dom.fields[data.comb[i][0]].classList.contains('o') &&
          dom.fields[data.comb[i][1]].classList.contains('o') &&
          dom.fields[data.comb[i][2]].classList.contains('o')
      ) {
          setTimeout(() => {
              dom.fields[data.comb[i][0]].classList.add('active');
              dom.fields[data.comb[i][1]].classList.add('active');
              dom.fields[data.comb[i][2]].classList.add('active');
              dom.result.innerText = 'O wins!';
          }, 1500);
          dom.game.removeEventListener('click', gameHandler);
      } else if (data.count == 9) {
          dom.result.innerText = 'Draw!';
      }
  }
};

export default winHandler;