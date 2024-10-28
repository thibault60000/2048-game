import React from 'react';
import use2048 from './hooks/use2048';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

export default function App() {
  const { board, score, gameOver, won, initializeBoard, move } = use2048();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">2048</h1>
          <p className="text-lg font-semibold text-gray-600">Score: {score}</p>
        </div>

        {(gameOver || won) && (
          <div className="text-center font-bold text-xl text-gray-800 mb-4">
            {won ? 'You Won! 🎉' : 'Game Over!'}
          </div>
        )}

        <GameBoard board={board} />
        <GameControls
          move={move}
          initializeBoard={initializeBoard}
          gameOver={gameOver}
          won={won}
        />

        <div className="text-sm text-gray-600 text-center">
          Use arrow keys or buttons to move tiles
        </div>
      </div>
    </div>
  );
}