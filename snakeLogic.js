export const DIRECTIONS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const OPPOSITES = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

export function createInitialState(size = 20) {
  const start = Math.floor(size / 2);
  const snake = [{ x: start, y: start }];
  return {
    size,
    snake,
    direction: "right",
    pendingDirection: "right",
    food: placeFood(size, snake),
    score: 0,
    gameOver: false,
  };
}

export function setDirection(state, nextDirection) {
  if (!DIRECTIONS[nextDirection]) return state;
  if (state.gameOver) return state;
  const current = state.pendingDirection ?? state.direction;
  if (OPPOSITES[current] === nextDirection) return state;
  if (current === nextDirection) return state;
  return { ...state, pendingDirection: nextDirection };
}

export function step(state, random = Math.random) {
  if (state.gameOver) return state;

  const direction = state.pendingDirection ?? state.direction;
  const vector = DIRECTIONS[direction];
  const head = state.snake[0];
  const nextHead = { x: head.x + vector.x, y: head.y + vector.y };

  if (isOutOfBounds(nextHead, state.size) || hitsSelf(nextHead, state.snake)) {
    return { ...state, direction, gameOver: true };
  }

  const ateFood = nextHead.x === state.food.x && nextHead.y === state.food.y;
  const nextSnake = ateFood
    ? [nextHead, ...state.snake]
    : [nextHead, ...state.snake.slice(0, -1)];

  return {
    ...state,
    snake: nextSnake,
    direction,
    pendingDirection: direction,
    food: ateFood ? placeFood(state.size, nextSnake, random) : state.food,
    score: ateFood ? state.score + 1 : state.score,
    gameOver: false,
  };
}

export function placeFood(size, snake, random = Math.random) {
  const occupied = new Set(snake.map((s) => `${s.x},${s.y}`));
  const openCells = [];

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const key = `${x},${y}`;
      if (!occupied.has(key)) openCells.push({ x, y });
    }
  }

  if (openCells.length === 0) {
    return snake[0];
  }

  const idx = Math.floor(random() * openCells.length);
  return openCells[idx];
}

function isOutOfBounds(point, size) {
  return point.x < 0 || point.y < 0 || point.x >= size || point.y >= size;
}

function hitsSelf(nextHead, snake) {
  for (let i = 0; i < snake.length; i += 1) {
    if (snake[i].x === nextHead.x && snake[i].y === nextHead.y) return true;
  }
  return false;
}
