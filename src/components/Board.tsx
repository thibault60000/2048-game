import React from 'react';
import Tile from './Tile';
import { BoardType } from '../types';

interface BoardProps {
  board: BoardType;
  score: number;
}

export default function Board({ board, score }: BoardProps) {
  return (
    <div className="relative">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">2048</h1>
        <div className="bg-gray-700 rounded-lg px-4 py-2">
          <p className="text-white text-sm font-semibold">Score</p>
          <p className="text-white text-2xl font-bold">{score}</p>
        </div>
      </div>
      <div className="bg-gray-300 rounded-lg p-3">
        <div className="grid grid-cols-4 gap-3">
          {board.map((row, i) =>
            row.map((value, j) => (
              <Tile key={`${i}-${j}`} value={value} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}