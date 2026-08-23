import React, { useState } from 'react';
import { TEJAS_PROFILE } from './data/defaultProfile';
import { HeaderBanner } from './components/HeaderBanner';
import { SectionHeading } from './components/SectionHeading';
import { InfoGrid } from './components/InfoGrid';
import { TechStackGrid } from './components/TechStackGrid';
import { SnakeAnimation } from './components/SnakeAnimation';
import { FeaturedProjects } from './components/FeaturedProjects';
import { MilestonesSection } from './components/MilestonesSection';
import { InspirationConnect } from './components/InspirationConnect';
import { Github, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { generateMarkdown } from './utils/markdownGenerator';

export default function App() {
  const profile = TEJAS_PROFILE;
  const [copied, setCopied] = useState(false);
  const [showWorkflowCode, setShowWorkflowCode] = useState(false);

  const markdownContent = generateMarkdown(profile);

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const workflowSnippet = `- uses: Platane/snk@v3
  with:
    # github user name to read the contribution graph from
    github_user_name: \${{ github.repository_owner }}
    outputs: |
      dist/github-snake.svg
      dist/github-snake-dark.svg?palette=github-dark
      dist/ocean.gif?color_snake=orange&color_dots=#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9&color_background=#aaaaaa
      dist/github-contribution-grid-snake.svg
      dist/github-contribution-grid-snake-dark.svg?palette=github-dark&color_snake=#00d2ff&color_dots=#0d1117,#161b22,#0052cc,#00d2ff,#58a6ff`;

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pb-24">
      
      {/* Sleek Cosmic Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* App Branding */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 shadow-lg shadow-cyan-500/20">
              <Github className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-extrabold text-white tracking-tight flex items-center gap-2">
                GitHub Profile README
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  @{profile.githubUsername}
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                {profile.fullName} • <span className="text-cyan-300">Dark Cosmic Edition</span>
              </p>
            </div>
          </div>

          {/* Quick Actions (Copy README & Workflow) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowWorkflowCode(!showWorkflowCode)}
              className="px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Snake Action</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied README!' : 'Copy README.md'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* GitHub Snake Workflow Modal / Drawer */}
      {showWorkflowCode && (
        <div className="max-w-4xl mx-auto px-4 mt-6 animate-fade-in">
          <div className="p-4 rounded-2xl border border-cyan-500/30 bg-[#0c1220] shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Terminal className="w-4 h-4" />
                <span>.github/workflows/snake.yml (Platane/snk@v3 config)</span>
              </div>
              <button
                onClick={() => setShowWorkflowCode(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
              >
                Close
              </button>
            </div>
            <pre className="mt-3 p-3 bg-[#070a12] rounded-xl text-xs font-mono text-cyan-200 overflow-x-auto border border-slate-800 leading-relaxed">
              {workflowSnippet}
            </pre>
          </div>
        </div>
      )}

      {/* Main Profile Canvas */}
      <main className="max-w-4xl mx-auto px-4 pt-8">
        
        <div className="space-y-8 animate-fade-in">
          
          {/* Header Glow Banner */}
          <HeaderBanner
            fullName={profile.fullName}
            tagline={profile.tagline}
            subtitle1={profile.subtitle1}
            subtitle2={profile.subtitle2}
            subtitle3={profile.subtitle3}
          />

          {/* Hi there greeting box */}
          <SectionHeading
            icon="👋"
            title={profile.greetingTitle}
          />

          {/* Vertical connector line */}
          <div className="flex justify-center -my-2">
            <div className="w-[1px] h-8 bg-gradient-to-b from-slate-700 via-slate-800 to-transparent" />
          </div>

          {/* About Me Section */}
          <SectionHeading
            icon="👤"
            title={profile.aboutMeTitle}
          />

          {/* 6 Info Cards Grid */}
          <InfoGrid blocks={profile.infoBlocks} />

          {/* Divider */}
          <div className="py-2">
            <img src="/assets/neon-divider.svg" alt="Neon Divider" className="w-full opacity-80" />
          </div>

          {/* Tech Stack Section */}
          <SectionHeading
            icon="🎛️"
            title="Tech Stack"
          />

          {/* Shields Badges Table */}
          <TechStackGrid categories={profile.techCategories} />

          {/* Divider */}
          <div className="py-2">
            <img src="/assets/circuit-divider.svg" alt="Circuit Divider" className="w-full opacity-80" />
          </div>

          {/* Snake Contribution Animation */}
          <SectionHeading
            icon="🐍"
            title="Contribution Snake"
          />

          <SnakeAnimation githubUsername={profile.githubUsername} />

          {/* Divider */}
          <div className="py-2">
            <img src="/assets/star-divider.svg" alt="Star Divider" className="w-full opacity-80" />
          </div>

          {/* Featured Projects Section */}
          <SectionHeading
            icon="📁"
            title="Featured Projects"
          />

          <FeaturedProjects projects={profile.featuredProjects} />

          {/* Divider */}
          <div className="py-2">
            <img src="/assets/glass-divider.svg" alt="Glass Divider" className="w-full opacity-80" />
          </div>

          {/* Achievements & Milestones Section */}
          <SectionHeading
            icon="🏆"
            title="Achievements & Milestones"
          />

          <MilestonesSection
            stats={profile.achievementStats}
            milestones={profile.milestones}
            activeMission={profile.activeMission}
          />

          {/* Divider */}
          <div className="py-2">
            <img src="/assets/wave-divider.svg" alt="Wave Divider" className="w-full opacity-80" />
          </div>

          {/* Daily Inspiration */}
          <SectionHeading
            icon="💬"
            title="Daily Inspiration"
          />

          {/* Inspiration & Let's Connect */}
          <InspirationConnect
            quote={profile.dailyQuote}
            socials={profile.socials}
            githubUsername={profile.githubUsername}
          />

        </div>

      </main>

    </div>
  );
}
