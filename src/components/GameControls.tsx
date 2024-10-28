import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, RotateCcw } from 'lucide-react';
import { GameControls as GameControlsType } from '../types';

type GameControlsProps = GameControlsType & {
  gameOver: boolean;
  won: boolean;
};

export default function GameControls({ move, initializeBoard, gameOver, won }: GameControlsProps) {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
        <div className="col-start-2">
          <button
            onClick={() => move('up')}
            className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            disabled={gameOver || won}
          >
            <ArrowUp size={24} />
          </button>
        </div>
        <button
          onClick={() => move('left')}
          className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          disabled={gameOver || won}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => move('down')}
          className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          disabled={gameOver || won}
        >
          <ArrowDown size={24} />
        </button>
        <button
          onClick={() => move('right')}
          className="p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          disabled={gameOver || won}
        >
          <ArrowRight size={24} />
        </button>
      </div>
      
      <button
        onClick={initializeBoard}
        className="flex items-center gap-2 mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        <RotateCcw size={20} />
        New Game
      </button>
    </div>
  );
}