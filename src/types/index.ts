export type BoardType = number[][];

export type GameState = {
  board: BoardType;
  score: number;
  gameOver: boolean;
  won: boolean;
};

export type GameControls = {
  initializeBoard: () => void;
  move: (direction: string) => void;
};