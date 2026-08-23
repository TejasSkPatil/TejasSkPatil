import React, { useState } from 'react';

interface InspirationConnectProps {
  quote: {
    quote: string;
    author: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  githubUsername: string;
}

const SAMPLE_QUOTES = [
  { quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { quote: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  { quote: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Technology is best when it brings people together.', author: 'Matt Mullenweg' },
  { quote: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
];

export const InspirationConnect: React.FC<InspirationConnectProps> = ({
  quote: initialQuote,
  socials,
  githubUsername,
}) => {
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const handleNewQuote = () => {
    const next = SAMPLE_QUOTES[Math.floor(Math.random() * SAMPLE_QUOTES.length)];
    setCurrentQuote(next);
  };

  return (
    <div className="space-y-12">
      {/* Daily Inspiration Quote Card */}
      <div className="max-w-2xl mx-auto rounded-xl border border-slate-800 bg-[#0d121f]/90 p-8 text-center space-y-3 shadow-xl relative group">
        <p className="text-base md:text-lg font-serif italic text-slate-200">
          "{currentQuote.quote}"
        </p>
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
          — {currentQuote.author}
        </p>

        <button
          onClick={handleNewQuote}
          className="mt-2 text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          🎲 Refresh Quote
        </button>
      </div>

      {/* Social Buttons */}
      <div className="text-center space-y-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-xl border border-slate-800 bg-[#0d121f]/90 shadow-xl">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#181717] hover:bg-slate-800 text-white font-mono text-sm font-bold flex items-center gap-2 border border-slate-700 transition-transform hover:scale-105"
          >
            🐙 <span>GitHub</span>
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#0077B5] hover:bg-blue-600 text-white font-mono text-sm font-bold flex items-center gap-2 border border-blue-400/30 transition-transform hover:scale-105"
          >
            💼 <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="px-5 py-2.5 rounded-lg bg-[#D14836] hover:bg-red-600 text-white font-mono text-sm font-bold flex items-center gap-2 border border-red-400/30 transition-transform hover:scale-105"
          >
            ✉️ <span>Email</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 font-medium">
          Open to collaborations, discussions, and new opportunities.
        </p>
      </div>

      {/* Footer & Visitor Counter */}
      <div className="pt-8 border-t border-slate-800/80 text-center space-y-4">
        <h3 className="text-lg font-extrabold text-white">Thanks for visiting.</h3>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Visitors</span>
          <span className="bg-cyan-500 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[11px]">
            109
          </span>
        </div>

        <p className="text-xs text-slate-400 italic">Crafted with code and curiosity</p>
      </div>
    </div>
  );
};
