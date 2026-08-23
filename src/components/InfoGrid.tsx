import React from 'react';
import { InfoBlock } from '../types';

interface InfoGridProps {
  blocks: InfoBlock[];
}

export const InfoGrid: React.FC<InfoGridProps> = ({ blocks }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0d121f]/90 overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
      {blocks.map((block, idx) => (
        <div 
          key={block.id || idx}
          className={`p-6 space-y-3 transition-colors hover:bg-slate-800/40 ${
            idx >= 3 ? 'md:border-t md:border-slate-800' : ''
          }`}
        >
          <div className="text-xl">{block.icon}</div>
          <h3 className="text-lg font-bold text-white tracking-tight">{block.title}</h3>
          <p className="text-sm text-slate-300/80 leading-relaxed font-normal">
            {block.description}
          </p>
        </div>
      ))}
    </div>
  );
};
