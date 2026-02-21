import { createInitialState, setDirection, step } from "./snakeLogic.js";

const GRID_SIZE = 20;
const TICK_MS = 120;

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");
const pauseBtn = document.getElementById("pauseBtn");
const controls = document.querySelector(".controls");
const cellSize = canvas.width / GRID_SIZE;

let state = createInitialState(GRID_SIZE);
let timer = null;
let paused = false;

const KEY_TO_DIR = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  w: "up",
  a: "left",
  s: "down",
  d: "right",
  W: "up",
  A: "left",
  S: "down",
  D: "right",
};

function start() {
  if (timer) clearInterval(timer);
  timer = setInterval(tick, TICK_MS);
  paused = false;
  pauseBtn.textContent = "Pause";
  render();
}

function tick() {
  state = step(state);
  render();
  if (state.gameOver) {
    clearInterval(timer);
    timer = null;
  }
}

function restart() {
  state = createInitialState(GRID_SIZE);
  statusEl.textContent = "Use Arrow Keys or WASD to move.";
  start();
}

function togglePause() {
  if (state.gameOver) return;
  paused = !paused;

  if (paused) {
    if (timer) clearInterval(timer);
    timer = null;
    pauseBtn.textContent = "Resume";
    statusEl.textContent = "Paused.";
    return;
  }

  statusEl.textContent = "Use Arrow Keys or WASD to move.";
  start();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  drawFood();
  drawSnake();
  scoreEl.textContent = String(state.score);

  if (state.gameOver) {
    statusEl.textContent = `Game Over. Final score: ${state.score}. Press Restart to play again.`;
  }
}

function drawGrid() {
  ctx.strokeStyle = "#d6d6d6";
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID_SIZE; i += 1) {
    const p = i * cellSize;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, p);
    ctx.lineTo(canvas.width, p);
    ctx.stroke();
  }
}

function drawSnake() {
  ctx.fillStyle = "#205c20";
  for (const segment of state.snake) {
    ctx.fillRect(
      segment.x * cellSize + 1,
      segment.y * cellSize + 1,
      cellSize - 2,
      cellSize - 2
    );
  }
}

function drawFood() {
  ctx.fillStyle = "#b22222";
  ctx.fillRect(
    state.food.x * cellSize + 2,
    state.food.y * cellSize + 2,
    cellSize - 4,
    cellSize - 4
  );
}

function handleDirectionChange(direction) {
  state = setDirection(state, direction);
}

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    togglePause();
    return;
  }
  const direction = KEY_TO_DIR[event.key];
  if (!direction) return;
  event.preventDefault();
  handleDirectionChange(direction);
});

controls.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const direction = target.dataset.dir;
  if (!direction) return;
  handleDirectionChange(direction);
});

restartBtn.addEventListener("click", restart);
pauseBtn.addEventListener("click", togglePause);

start();
