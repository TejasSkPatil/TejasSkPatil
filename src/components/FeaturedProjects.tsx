import React from 'react';
import { FeaturedProject } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#0d121f]/95 p-6 flex flex-col justify-between hover:bg-slate-800/40 transition-colors group"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{project.icon}</span>
              <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300/80 leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-slate-800/60">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5 transform duration-150"
            >
              <span>➔ View Repository</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
