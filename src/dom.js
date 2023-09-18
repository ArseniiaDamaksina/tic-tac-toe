const dom = {
    game: document.querySelector('.game'),
    result: document.querySelector('.result'),
    btnGame: document.querySelector('.new-game'),
    fields: document.querySelectorAll('.field'),
    circle: `<svg class="circle"> 
                <circle
                r="45"
                cx="58"
                cy="58"
                stroke="blue"
                stroke-width="10"
                fill="none"
                stroke-linecap="round"
                />
            </svg>`,
    cross: `<svg class="cross">
                <line
                class="first"
                x1="15"
                y1="15"
                x2="100"
                y2="100"
                stroke="red"
                stroke-width="10"
                stroke-linecap="round"
                />
                <line
                class="second"
                x1="100"
                y1="15"
                x2="15"
                y2="100"
                stroke="red"
                stroke-width="10"
                stroke-linecap="round"
                />
            </svg>`,
};

export default dom;
