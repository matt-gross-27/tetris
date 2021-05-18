const body = document.querySelector('body');
const ROWS = 20;
const COLS = 10;
const SCORE_WORTH = 10;
let NEW_GAME;
let GAME_CLOCK = 1000;
let BLOCK_SIZE = Math.floor(Math.min(window.innerHeight / 20 * .8, window.innerWidth/10))

const SHAPES = [
  [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
  ],
  [
    [2,0,0],
    [2,2,2],
    [0,0,0],
  ],
  [
    [0,0,3],
    [3,3,3],
    [0,0,0],
  ],
  [
    [4,4],
    [4,4],
  ],
  [
    [0,5,5],
    [5,5,0],
    [0,0,0],
  ],
  [
    [6,6,0],
    [0,6,6],
    [0,0,0],
  ],
  [
    [7,7,7],
    [0,7,0],
    [0,0,0],
  ],
];

const COLORS = [
  '#000000',
  '#CC99C9',
  '#9EC1CF',
  '#9EE09E',
  '#FDFD97',
  '#FEB144',
  '#FF6663',
  '#f8f8ff',
];