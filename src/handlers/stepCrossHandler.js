import dom from '../dom.js';
import data from '../data.js';

const stepCrossHandler = (target) => {
  target.innerHTML = dom.cross;
  target.classList.add('x');
  data.count++;
};

export default stepCrossHandler;