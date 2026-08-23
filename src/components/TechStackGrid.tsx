import React from 'react';
import { TechCategory } from '../types';

interface TechStackGridProps {
  categories: TechCategory[];
}

export const TechStackGrid: React.FC<TechStackGridProps> = ({ categories }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0d121f]/90 overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody>
            {categories.map((cat, idx) => (
              <tr 
                key={cat.category}
                className={`border-b border-slate-800/80 last:border-b-0 hover:bg-slate-800/30 transition-colors`}
              >
                <td className="py-4 px-6 font-bold text-slate-200 text-sm whitespace-nowrap w-40 border-r border-slate-800/80 bg-slate-900/40">
                  {cat.category}
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {cat.items.map((item, itemIdx) => {
                      const bg = item.bgHex || '1e293b';
                      const textColor = item.textHex || 'white';
                      return (
                        <div
                          key={item.name + itemIdx}
                          style={{ backgroundColor: `#${bg}`, color: textColor }}
                          className="px-3 py-1.5 rounded text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform cursor-pointer border border-white/10"
                        >
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
