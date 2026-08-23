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
    <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-[#0d121f]/90 p-8 md:p-12 text-center shadow-2xl backdrop-blur-md">
      {/* Background radial glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-purple-600/15 to-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Floating code symbol decorations */}
      <div className="absolute top-6 left-8 text-slate-700/40 text-xl font-mono select-none pointer-events-none">{`{ }`}</div>
      <div className="absolute top-6 right-8 text-slate-700/40 text-xl font-mono select-none pointer-events-none">{`[ ]`}</div>
      <div className="absolute bottom-8 left-12 text-slate-700/40 text-xl font-mono select-none pointer-events-none">{`( )`}</div>
      <div className="absolute top-4 right-6 p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer text-xs font-mono">
        {`</>`}
      </div>

      {/* Main Full Name Heading */}
      <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm mb-4">
        {fullName}
      </h1>

      {/* Subtitle lines */}
      <div className="relative space-y-1 text-sm md:text-base text-slate-300/90 font-mono tracking-wide max-w-xl mx-auto">
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
        <p className="text-cyan-400/90 font-medium">{subtitle3}</p>
      </div>

      {/* Subtle bottom divider */}
      <div className="relative mt-8 w-48 h-[1px] mx-auto bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
};
