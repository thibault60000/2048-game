import React from 'react';

const colors: { [key: number]: string } = {
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

interface TileProps {
  value: number;
}

export default function Tile({ value }: TileProps) {
  const colorClass = colors[value] || 'bg-gray-200';
  const size = value >= 100 ? 'text-3xl' : value >= 1000 ? 'text-2xl' : 'text-4xl';
  
  return (
    <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${colorClass} transition-all duration-200`}>
      <span className={`font-bold ${size}`}>
        {value || ''}
      </span>
    </div>
  );
}