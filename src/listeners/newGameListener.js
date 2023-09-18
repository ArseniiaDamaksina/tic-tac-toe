import dom from '../dom.js';
import newGameHandler from '../handlers/newGameHandler.js';

const newGameListener = () => {
    dom.btnGame.addEventListener('click', newGameHandler);
};

export default newGameListener;
