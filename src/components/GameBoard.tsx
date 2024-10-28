import React from 'react';
import { BoardType } from '../types';

const tileColors: Record<number, string> = {
  2: 'bg-[#eee4da] text-[#776e65]',
  4: 'bg-[#ede0c8] text-[#776e65]',
  8: 'bg-[#f2b179] text-white',
  16: 'bg-[#f59563] text-white',
  32: 'bg-[#f67c5f] text-white',
  64: 'bg-[#f65e3b] text-white',
  128: 'bg-[#edcf72] text-white',
  256: 'bg-[#edcc61] text-white',
  512: 'bg-[#edc850] text-white',
  1024: 'bg-[#edc53f] text-white',
  2048: 'bg-[#edc22e] text-white'
};

type GameBoardProps = {
  board: BoardType;
};

export default function GameBoard({ board }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-3 bg-[#bbada0] p-3 rounded-lg">
      {board.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold
              ${cell === 0 ? 'bg-[#cdc1b4]' : tileColors[cell] || 'bg-[#3c3a32] text-white'}`}
          >
            {cell !== 0 && cell}
          </div>
        ))
      )}
    </div>
  );
}