import data from '../data.js';
import dom from '../dom.js';
import gameHandler from './gameHandler.js';

const newGameHandler = () => {
  data.step = false;
  data.count = 0;
  dom.result.innerText = '';
  dom.fields.forEach((item) => {
      item.innerHTML = '';
      item.classList.remove('x', 'o', 'active');
  });
  dom.game.addEventListener('click', gameHandler);
};

export default newGameHandler;