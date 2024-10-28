import { BoardType } from '../types';

export const GRID_SIZE = 4;

export const createEmptyBoard = (): BoardType => 
  Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));

export const addRandomTile = (board: BoardType): void => {
  const emptyCells = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board[i][j] === 0) {
        emptyCells.push({ i, j });
      }
    }
  }
  if (emptyCells.length > 0) {
    const { i, j } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[i][j] = Math.random() < 0.9 ? 2 : 4;
  }
};

export const canMove = (board: BoardType): boolean => {
  // Check for empty cells
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (board[i][j] === 0) return true;
    }
  }

  // Check for possible merges
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (
        (i < GRID_SIZE - 1 && board[i][j] === board[i + 1][j]) ||
        (j < GRID_SIZE - 1 && board[i][j] === board[i][j + 1])
      ) {
        return true;
      }
    }
  }

  return false;
};

export const rotateBoard = (matrix: BoardType): BoardType => {
  const N = matrix.length;
  return matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j - 1][i])
  );
};