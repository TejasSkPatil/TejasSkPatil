import React from 'react';

interface HeaderBannerProps {
  fullName: string;
  tagline: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  fullName,
  subtitle1,
  subtitle2,
  subtitle3,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-500/15 bg-[#080c17] p-8 md:p-14 text-center shadow-2xl backdrop-blur-md">
      {/* Ambient background glow left & right */}
      <div className="absolute top-1/4 -left-12 w-72 h-72 bg-cyan-600/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/6 -right-12 w-72 h-72 bg-purple-600/15 blur-3xl pointer-events-none rounded-full" />

      {/* Floating code symbol decorations */}
      <div className="absolute top-8 left-12 text-slate-700/50 text-xl font-mono select-none pointer-events-none hidden sm:block">
        {`{ }`}
      </div>
      <div className="absolute top-8 right-16 text-slate-700/50 text-xl font-mono select-none pointer-events-none hidden sm:block">
        {`[ ]`}
      </div>
      <div className="absolute bottom-10 left-16 text-slate-700/50 text-lg font-mono select-none pointer-events-none hidden sm:block">
        {`( )`}
      </div>
      <div className="absolute bottom-10 right-20 text-slate-700/50 text-lg font-mono select-none pointer-events-none hidden sm:block">
        {`</>`}
      </div>

      {/* Center Large Code Chevron Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[160px] font-mono font-bold text-slate-800/25 tracking-tighter select-none pointer-events-none z-0">
        {`</>`}
      </div>

      {/* Top right corner badge */}
      <div className="absolute top-4 right-5 px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-500 hover:text-slate-300 transition-colors text-xs font-mono select-none">
        {`</>`}
      </div>

      {/* Main Full Name Heading */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold tracking-tight bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#39d353] bg-clip-text text-transparent drop-shadow-md mb-4">
          {fullName}
        </h1>

        {/* Subtitle lines */}
        <div className="space-y-1 text-sm sm:text-base text-slate-400 font-mono tracking-wide max-w-xl mx-auto">
          <p>{subtitle1}</p>
          <p>{subtitle2}</p>
          <p className="text-[#38bdf8] font-semibold pt-1">{subtitle3}</p>
        </div>

        {/* Subtle bottom divider */}
        <div className="mt-8 w-64 h-[1px] mx-auto bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      </div>
    </div>
  );
};
