import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface RulesProps {
  onBack: () => void;
}

export default function Rules({ onBack }: RulesProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Game
      </button>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Play 2048</h1>
      
      <div className="space-y-4 text-gray-600">
        <p className="leading-relaxed">
          2048 is a sliding tile puzzle game. The goal is to combine tiles with the same numbers
          to create a tile with the number 2048.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800 mb-2">Game Rules:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use arrow keys to move tiles in any direction (up, down, left, right)</li>
            <li>When two tiles with the same number touch, they merge into one tile with their sum</li>
            <li>After each move, a new tile with a value of 2 or 4 appears</li>
            <li>The game ends when you either:
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>Create a tile with 2048 (You win!)</li>
                <li>Fill the board with no possible moves left (Game Over)</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800 mb-2">Tips:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Try to keep your highest value tile in a corner</li>
            <li>Build a sequence of decreasing values from your highest tile</li>
            <li>Plan your moves ahead to avoid getting stuck</li>
          </ul>
        </div>
      </div>
    </div>
  );
}