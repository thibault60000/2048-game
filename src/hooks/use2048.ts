import { useState, useEffect, useCallback } from 'react';
import { BoardType } from '../types';
import { GRID_SIZE, createEmptyBoard, addRandomTile, canMove, rotateBoard } from '../utils/gameUtils';

export default function use2048() {
  const createInitialBoard = () => {
    const newBoard = createEmptyBoard();
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    return newBoard;
  };

  const [board, setBoard] = useState<BoardType>(createInitialBoard);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const moveLeft = (currentBoard: BoardType): { moved: boolean; score: number } => {
    let moved = false;
    let newScore = 0;
    
    for (let i = 0; i < GRID_SIZE; i++) {
      let row = currentBoard[i].filter(cell => cell !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          if (row[j] === 2048) setWon(true);
          row.splice(j + 1, 1);
          moved = true;
        }
      }
      const newRow = row.concat(Array(GRID_SIZE - row.length).fill(0));
      if (JSON.stringify(currentBoard[i]) !== JSON.stringify(newRow)) moved = true;
      currentBoard[i] = newRow;
    }
    
    return { moved, score: newScore };
  };

  const move = useCallback((direction: string) => {
    if (gameOver || won) return;

    const newBoard = JSON.parse(JSON.stringify(board));
    let moved = false;
    let additionalScore = 0;

    switch (direction) {
      case 'left': {
        const result = moveLeft(newBoard);
        moved = result.moved;
        additionalScore = result.score;
        break;
      }
      case 'right': {
        newBoard.forEach(row => row.reverse());
        const result = moveLeft(newBoard);
        moved = result.moved;
        additionalScore = result.score;
        newBoard.forEach(row => row.reverse());
        break;
      }
      case 'down': {
        let rotated = rotateBoard(newBoard);
        const result = moveLeft(rotated);
        moved = result.moved;
        additionalScore = result.score;
        for (let i = 0; i < 3; i++) rotated = rotateBoard(rotated);
        for (let i = 0; i < GRID_SIZE; i++) {
          for (let j = 0; j < GRID_SIZE; j++) {
            newBoard[i][j] = rotated[i][j];
          }
        }
        break;
      }
      case 'up': {
        let rotated = rotateBoard(newBoard);
        rotated.forEach(row => row.reverse());
        const result = moveLeft(rotated);
        moved = result.moved;
        additionalScore = result.score;
        rotated.forEach(row => row.reverse());
        for (let i = 0; i < 3; i++) rotated = rotateBoard(rotated);
        for (let i = 0; i < GRID_SIZE; i++) {
          for (let j = 0; j < GRID_SIZE; j++) {
            newBoard[i][j] = rotated[i][j];
          }
        }
        break;
      }
    }

    if (moved) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(prevScore => prevScore + additionalScore);
      
      if (!canMove(newBoard)) {
        setGameOver(true);
      }
    }
  }, [board, gameOver, won]);

  const initializeBoard = useCallback(() => {
    const newBoard = createInitialBoard();
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setWon(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        move(e.key.slice(5).toLowerCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move]);

  return {
    board,
    score,
    gameOver,
    won,
    initializeBoard,
    move,
  };
}