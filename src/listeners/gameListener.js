import dom from '../dom.js';
import gameHandler from '../handlers/gameHandler.js';

const gameListener = () => {
    dom.game.addEventListener('click',gameHandler);
};

export default gameListener;
