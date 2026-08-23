import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RefreshCw, Sparkles, Terminal } from 'lucide-react';

interface SnakeAnimationProps {
  githubUsername: string;
}

export const SnakeAnimation: React.FC<SnakeAnimationProps> = ({ githubUsername }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [score, setScore] = useState(0);
  const [paletteMode, setPaletteMode] = useState<'cosmic' | 'ocean' | 'green'>('cosmic');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 52;
    const rows = 7;
    const cellSize = 12;
    const gap = 3.5;

    canvas.width = cols * (cellSize + gap) + gap;
    canvas.height = rows * (cellSize + gap) + gap;

    // Generate fixed random contribution matrix
    const matrix: number[][] = [];
    for (let r = 0; r < rows; r++) {
      const row: number[] = [];
      for (let c = 0; c < cols; c++) {
        const rand = Math.random();
        if (c > 45 && r > 2) {
          row.push(rand > 0.35 ? (rand > 0.75 ? 4 : rand > 0.5 ? 3 : 2) : 1);
        } else if (rand > 0.7) {
          row.push(rand > 0.9 ? 4 : rand > 0.82 ? 3 : rand > 0.76 ? 2 : 1);
        } else {
          row.push(0);
        }
      }
      matrix.push(row);
    }

    // Color palettes matching Platane/snk@v3 options
    const palettes = {
      cosmic: {
        bg: '#0a0e17',
        levels: ['#101726', '#1e3a8a', '#0284c7', '#06b6d4', '#38bdf8'],
        head: '#00f2fe',
        glow: '#00f2fe',
        body: ['#00d2ff', '#38bdf8', '#0ea5e9', '#0284c7'],
      },
      ocean: {
        bg: '#0b192c',
        levels: ['#1e3e62', '#008170', '#00adb5', '#38bdf8', '#00fff5'],
        head: '#ffb703',
        glow: '#fbbf24',
        body: ['#ff9800', '#f59e0b', '#d97706', '#b45309'],
      },
      green: {
        bg: '#0d1117',
        levels: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        head: '#39d353',
        glow: '#39d353',
        body: ['#26a641', '#10b981', '#059669', '#047857'],
      },
    };

    const currentPalette = palettes[paletteMode];

    // Snake initial state
    let snake = [
      { r: 3, c: 50 },
      { r: 3, c: 49 },
      { r: 3, c: 48 },
      { r: 3, c: 47 },
      { r: 3, c: 46 },
    ];
    let dir = { r: 0, c: 1 };
    let currentScore = 0;

    const step = () => {
      if (!isPlaying) return;

      // Pick next direction toward highest contribution cell nearby
      const head = snake[0];
      const possibleDirs = [
        { r: -1, c: 0 },
        { r: 1, c: 0 },
        { r: 0, c: -1 },
        { r: 0, c: 1 },
      ];

      // Filter valid directions
      const validDirs = possibleDirs.filter((d) => {
        const nr = head.r + d.r;
        const nc = head.c + d.c;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) return false;
        return !snake.slice(0, -1).some((s) => s.r === nr && s.c === nc);
      });

      if (validDirs.length > 0) {
        // Sort directions towards highest contribution dots
        validDirs.sort((a, b) => {
          const valA = matrix[head.r + a.r][head.c + a.c];
          const valB = matrix[head.r + b.r][head.c + b.c];
          return valB - valA;
        });

        // 80% follow best food dot, 20% random for natural winding path
        if (Math.random() < 0.85 && matrix[head.r + validDirs[0].r][head.c + validDirs[0].c] > 0) {
          dir = validDirs[0];
        } else {
          dir = validDirs[Math.floor(Math.random() * validDirs.length)];
        }
      }

      const newHead = { r: head.r + dir.r, c: head.c + dir.c };

      // Wrap boundaries smoothly
      if (newHead.r < 0) newHead.r = rows - 1;
      if (newHead.r >= rows) newHead.r = 0;
      if (newHead.c < 0) newHead.c = cols - 1;
      if (newHead.c >= cols) newHead.c = 0;

      // Eat contribution pixel if present
      if (matrix[newHead.r][newHead.c] > 0) {
        currentScore += matrix[newHead.r][newHead.c] * 10;
        setScore(currentScore);
        matrix[newHead.r][newHead.c] = 0; // eaten
        snake.unshift(newHead); // grow
        if (snake.length > 16) snake.pop();
      } else {
        snake.unshift(newHead);
        snake.pop();
      }

      // Clear canvas
      ctx.fillStyle = currentPalette.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw contribution matrix cells
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (cellSize + gap) + gap;
          const y = r * (cellSize + gap) + gap;
          ctx.fillStyle = currentPalette.levels[matrix[r][c]];
          ctx.beginPath();
          ctx.roundRect(x, y, cellSize, cellSize, 2.5);
          ctx.fill();
        }
      }

      // Draw glowing snake
      snake.forEach((segment, idx) => {
        const x = segment.c * (cellSize + gap) + gap;
        const y = segment.r * (cellSize + gap) + gap;

        if (idx === 0) {
          // Snake head (glowing neon)
          ctx.fillStyle = currentPalette.head;
          ctx.shadowColor = currentPalette.glow;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.roundRect(x, y, cellSize, cellSize, 3.5);
          ctx.fill();
        } else {
          // Snake body
          const colorIdx = Math.min(idx - 1, currentPalette.body.length - 1);
          ctx.fillStyle = currentPalette.body[colorIdx];
          ctx.shadowBlur = 4;
          ctx.shadowColor = currentPalette.glow;
          ctx.beginPath();
          ctx.roundRect(x, y, cellSize, cellSize, 2.5);
          ctx.fill();
        }
      });

      ctx.shadowBlur = 0;
    };

    const interval = setInterval(step, 130);
    return () => clearInterval(interval);
  }, [isPlaying, paletteMode]);

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0a0e17]/95 p-6 shadow-2xl backdrop-blur-xl flex flex-col items-center">
      {/* Header Info */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
          <span className="font-semibold text-slate-200">
            Contribution Grid Snake (@{githubUsername})
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
            Platane/snk@v3
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
            Score: {score}
          </span>
        </div>
      </div>

      {/* Snake Canvas */}
      <div className="overflow-x-auto max-w-full p-3 bg-[#060910] rounded-xl border border-slate-800 shadow-inner">
        <canvas ref={canvasRef} className="block mx-auto" />
      </div>

      {/* Controls & Theme Selectors */}
      <div className="mt-5 w-full flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-xs font-mono px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-[11px] font-mono">
            <button
              onClick={() => setPaletteMode('cosmic')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                paletteMode === 'cosmic'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cosmic Dark
            </button>
            <button
              onClick={() => setPaletteMode('ocean')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                paletteMode === 'ocean'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ocean
            </button>
            <button
              onClick={() => setPaletteMode('green')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                paletteMode === 'green'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Classic Green
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span className="text-[11px] text-cyan-400/80">⚡ Generates auto-synced SVGs for GitHub Profile</span>
        </div>
      </div>
    </div>
  );
};
