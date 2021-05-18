let canvas = document.getElementById("game-canvas")
canvas.height = BLOCK_SIZE * 20
canvas.width = BLOCK_SIZE * 10
let scoreboard = document.getElementById("scoreboard")
let ctx = canvas.getContext("2d")
ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
let model = new GameModel(ctx)

let score = 0;

const resizeScale = () => {
  BLOCK_SIZE = Math.floor(Math.min(window.innerHeight / 20 * .8, window.innerWidth/10))
  canvas.height = BLOCK_SIZE * 20
  canvas.width = BLOCK_SIZE * 10
  ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
}

let newGameState = () => {
  fullSend()
  if (model.fallingPiece === null) {
    const rand = Math.floor(Math.random() * 7)
    const nextPiece = new Piece(SHAPES[rand], ctx)
    model.fallingPiece = nextPiece
    model.moveDown()
  } else {
    model.moveDown()
  }
}

const fullSend = () => {
  const allFilled = (row) => {
    for (let x of row) {
      if (x === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < model.grid.length; i++) {
    if (allFilled(model.grid[i])) {
      score += SCORE_WORTH
      model.grid.splice(i, 1)
      model.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }
  scoreboard.innerHTML = "Score: " + String(score)
}

gameLoop = () => {
  NEW_GAME = setTimeout(() => {
    newGameState()
    GAME_CLOCK = Math.max(250, GAME_CLOCK -= 2)
    gameLoop()
  }, GAME_CLOCK)
}

startGame = () => {
  GAME_CLOCK = 1000
  gameLoop()
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      model.rotate()
      break
    case "ArrowDown":
      e.preventDefault();
      model.moveDown()
      break
    case "ArrowRight":
      e.preventDefault();
      model.move(true)
      break
    case "ArrowLeft":
      e.preventDefault();
      model.move(false)
      break
    case " ":
      e.preventDefault();
      model.rotate()
      break
    case "Meta":
    case "Alt":
    case "Control":
    case "Shift":
    case "Enter":
    case "r":
      break;
    default:
      console.log(e.key);
      alert(`
      ________Controls________
      - Left arrow: move left
      - Right arrow: move right
      - Up Arrow or Space bar: rotate
      - Down Arrow: Move down
      `)
  }
})

startGame();