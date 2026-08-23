import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, HelpCircle } from 'lucide-react';

interface MarkdownOutputProps {
  markdownCode: string;
  githubUsername: string;
}

export const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdownCode, githubUsername }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownCode], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-800 bg-[#0d121f]/90 shadow-xl">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <span>📄</span> Generated GitHub README.md Code
          </h2>
          <p className="text-xs text-slate-400">
            Formatted specifically for GitHub Profile Markdown parsing
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" /> Download README.md
          </button>

          <button
            onClick={handleCopy}
            className={`px-5 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-lg ${
              copied
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied to Clipboard!' : 'Copy Raw Markdown'}
          </button>
        </div>
      </div>

      {/* Code Textarea Box */}
      <div className="relative rounded-xl border border-slate-800 bg-[#090d16] overflow-hidden shadow-2xl">
        <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-slate-300">README.md</span>
          </div>
          <span>{markdownCode.length} characters</span>
        </div>

        <pre className="p-6 text-xs font-mono text-cyan-300/90 leading-relaxed overflow-x-auto max-h-[500px] select-all whitespace-pre-wrap">
          {markdownCode}
        </pre>
      </div>

      {/* Step by step GitHub Setup Guide */}
      <div className="rounded-xl border border-indigo-500/20 bg-[#0d121f]/90 p-6 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-indigo-400" /> How to Feed & Use This on Your GitHub Profile
        </h3>

        <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 font-sans leading-relaxed">
          <li>
            Go to <a href={`https://github.com/new`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">GitHub New Repository</a>.
          </li>
          <li>
            Name the repository <b>EXACTLY</b> as your GitHub username: <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">{githubUsername}</code>.
          </li>
          <li>
            Make sure the repository is marked <b>Public</b> and check <b>"Add a README file"</b>.
          </li>
          <li>
            Edit the created <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">README.md</code>, paste the copied Markdown above, and click <b>Commit Changes</b>.
          </li>
          <li>
            ✨ Your profile will instantly display the exact dark cosmic appearance!
          </li>
        </ol>
      </div>
    </div>
  );
};
