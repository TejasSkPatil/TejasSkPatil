import React from 'react';

interface SectionHeadingProps {
  icon: string | React.ReactNode;
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, title }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="inline-flex items-center overflow-hidden rounded-lg border border-slate-700/60 bg-[#0d121f]/80 shadow-md">
        <div className="flex items-center justify-center bg-slate-800/80 px-4 py-3 border-r border-slate-700/60 text-xl text-cyan-400">
          {icon}
        </div>
        <div className="px-6 py-3 font-bold text-lg md:text-xl text-white tracking-wide">
          <span className="border-b-2 border-slate-600 pb-0.5">{title}</span>
        </div>
      </div>
    </div>
  );
};
