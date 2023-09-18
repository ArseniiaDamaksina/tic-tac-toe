import dom from '../dom.js';
import data from '../data.js';

const stepZeroHandler = (target) => {
  target.innerHTML = dom.circle;
  target.classList.add('o');
  data.count++;
};

export default stepZeroHandler;