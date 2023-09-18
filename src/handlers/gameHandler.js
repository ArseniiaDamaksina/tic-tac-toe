import data from '../data.js';
import stepCrossHandler from './stepCrossHandler.js';
import stepZeroHandler from './stepZeroHandler.js';
import winHandler from './winHandler.js';

const gameHandler = (e) => {
  if (!data.step) {
      stepCrossHandler(e.target);
  } else {
      stepZeroHandler(e.target);
  }
  data.step = !data.step;
  winHandler();
};

export default gameHandler;