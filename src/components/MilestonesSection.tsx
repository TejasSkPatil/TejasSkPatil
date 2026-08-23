import React from 'react';
import { AchievementStat, MilestoneItem } from '../types';
import { Check, Clock, Circle } from 'lucide-react';

interface MilestonesSectionProps {
  stats: AchievementStat[];
  milestones: MilestoneItem[];
  activeMission: {
    status: string;
    progressPercent: number;
    systemsBuilt: number;
    nextGoal: string;
  };
}

export const MilestonesSection: React.FC<MilestonesSectionProps> = ({
  stats,
  milestones,
  activeMission,
}) => {
  return (
    <div className="space-y-8">
      {/* 6 Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#0d121f]/95 p-6 space-y-2 hover:bg-slate-800/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-white font-mono">
                {stat.number}
              </span>
            </div>
            <h4 className="font-bold text-slate-100 text-sm">{stat.title}</h4>
            <p className="text-xs text-slate-400 font-normal">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Milestone Journey Checklist Box */}
      <div className="max-w-2xl mx-auto rounded-xl border border-slate-800 bg-[#0d121f]/90 overflow-hidden shadow-xl">
        <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <span>📍</span> Milestone Journey
          </h3>
          <span className="text-xs text-cyan-400 font-mono">Tracking Growth</span>
        </div>

        <div className="divide-y divide-slate-800">
          {milestones.map((m) => {
            const isCompleted = m.status === 'completed';
            const isInProgress = m.status === 'in_progress';

            return (
              <div key={m.id} className="p-4 flex items-start gap-4 hover:bg-slate-800/20 transition-colors">
                <div
                  className={`mt-0.5 w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold ${
                    isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : isInProgress
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 animate-pulse'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : isInProgress ? (
                    <Clock className="w-3.5 h-3.5" />
                  ) : (
                    <Circle className="w-3 h-3" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-1.5 py-0.2 rounded font-semibold ${
                        isCompleted
                          ? 'text-emerald-400'
                          : isInProgress
                          ? 'text-cyan-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Future'}
                    </span>
                    <h4 className="font-bold text-sm text-white">{m.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300/80">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Mission Bar */}
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-800 bg-[#0d121f]/90 p-4 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-800/80">
          <div className="space-y-1 p-2">
            <span className="text-lg">🚀</span>
            <p className="text-xs font-bold text-white leading-snug">
              {activeMission.status}
            </p>
          </div>

          <div className="space-y-1 p-2">
            <span className="text-lg">🎯</span>
            <p className="text-sm font-extrabold text-cyan-400 font-mono">
              {activeMission.progressPercent}% Progress
            </p>
          </div>

          <div className="space-y-1 p-2">
            <span className="text-lg">💻</span>
            <p className="text-sm font-extrabold text-purple-300 font-mono">
              {activeMission.systemsBuilt} Systems Built
            </p>
          </div>

          <div className="space-y-1 p-2">
            <span className="text-lg">💡</span>
            <p className="text-xs font-bold text-amber-300">
              {activeMission.nextGoal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
