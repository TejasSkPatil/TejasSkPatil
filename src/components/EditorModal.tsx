import React, { useState } from 'react';
import { ProfileData, FeaturedProject, TechCategory, MilestoneItem, InfoBlock } from '../types';
import { X, Sparkles, Plus, Trash2, Check, RefreshCw } from 'lucide-react';

interface EditorModalProps {
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onClose: () => void;
}

export const EditorModal: React.FC<EditorModalProps> = ({ profile, onSave, onClose }) => {
  const [formData, setFormData] = useState<ProfileData>(JSON.parse(JSON.stringify(profile)));
  const [activeTab, setActiveTab] = useState<'basic' | 'info' | 'tech' | 'projects' | 'milestones'>('basic');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiNotice, setAiNotice] = useState('');

  const handleTextChange = (field: keyof ProfileData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInfoChange = (index: number, key: keyof InfoBlock, val: string) => {
    const updated = [...formData.infoBlocks];
    updated[index] = { ...updated[index], [key]: val };
    setFormData((prev) => ({ ...prev, infoBlocks: updated }));
  };

  const handleProjectChange = (index: number, key: keyof FeaturedProject, val: any) => {
    const updated = [...formData.featuredProjects];
    if (key === 'tags') {
      updated[index] = { ...updated[index], tags: val.split(',').map((s: string) => s.trim()) };
    } else {
      updated[index] = { ...updated[index], [key]: val };
    }
    setFormData((prev) => ({ ...prev, featuredProjects: updated }));
  };

  const addProject = () => {
    const newProj: FeaturedProject = {
      id: 'proj-' + Date.now(),
      title: 'New Project',
      repoName: `${formData.githubUsername}/new-repo`,
      repoUrl: `https://github.com/${formData.githubUsername}/new-repo`,
      description: 'A brief description of this new repository.',
      tags: ['React', 'Node.js'],
      icon: '⚡'
    };
    setFormData((prev) => ({ ...prev, featuredProjects: [...prev.featuredProjects, newProj] }));
  };

  const removeProject = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      featuredProjects: prev.featuredProjects.filter((_, i) => i !== index)
    }));
  };

  // AI enhancement via server endpoint
  const enhanceWithAi = async (promptText: string, targetType: 'project' | 'bio', callback: (resText: string) => void) => {
    setIsAiLoading(true);
    setAiNotice('');
    try {
      const res = await fetch('/api/ai-enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText, type: targetType })
      });
      const data = await res.json();
      if (data.text) {
        callback(data.text);
        setAiNotice('✨ AI Enhancement applied successfully!');
      } else if (data.error) {
        setAiNotice(`⚠️ ${data.error}`);
      }
    } catch (err: any) {
      setAiNotice('⚠️ Could not connect to Gemini AI.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#0f172a] border border-slate-700 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono text-sm border border-indigo-500/20">⚙️</span>
            <div>
              <h2 className="text-lg font-bold text-white">Profile Content Customizer</h2>
              <p className="text-xs text-slate-400">Edit README details for @{formData.githubUsername}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950 px-6 gap-2 overflow-x-auto">
          {[
            { id: 'basic', label: '👤 Basic & Socials' },
            { id: 'info', label: '🚀 Info Blocks' },
            { id: 'tech', label: '🎛️ Tech Stack' },
            { id: 'projects', label: '📁 Featured Projects' },
            { id: 'milestones', label: '📍 Milestones' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 text-xs font-mono font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300 bg-slate-900/50'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {aiNotice && (
            <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 text-xs font-mono flex items-center justify-between">
              <span>{aiNotice}</span>
              <button type="button" onClick={() => setAiNotice('')} className="text-indigo-400 hover:text-white">✕</button>
            </div>
          )}

          {/* BASIC TAB */}
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">GitHub Username</label>
                  <input
                    type="text"
                    value={formData.githubUsername}
                    onChange={(e) => handleTextChange('githubUsername', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleTextChange('fullName', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Greeting Title</label>
                <input
                  type="text"
                  value={formData.greetingTitle}
                  onChange={(e) => handleTextChange('greetingTitle', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-slate-400">Header Subtitle Lines</label>
                <input
                  type="text"
                  value={formData.subtitle1}
                  onChange={(e) => handleTextChange('subtitle1', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  placeholder="Line 1"
                />
                <input
                  type="text"
                  value={formData.subtitle2}
                  onChange={(e) => handleTextChange('subtitle2', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  placeholder="Line 2"
                />
                <input
                  type="text"
                  value={formData.subtitle3}
                  onChange={(e) => handleTextChange('subtitle3', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-cyan-300"
                  placeholder="Line 3"
                />
              </div>

              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 mb-3">Social Connections</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">GitHub URL</label>
                    <input
                      type="text"
                      value={formData.socials.github}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, github: e.target.value }
                        }))
                      }
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">LinkedIn URL</label>
                    <input
                      type="text"
                      value={formData.socials.linkedin}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, linkedin: e.target.value }
                        }))
                      }
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 mb-1">Email</label>
                    <input
                      type="text"
                      value={formData.socials.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, email: e.target.value }
                        }))
                      }
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INFO BLOCKS TAB */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Customize the 6 Info Cards rendered on your profile grid:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.infoBlocks.map((block, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={block.icon}
                        onChange={(e) => handleInfoChange(idx, 'icon', e.target.value)}
                        className="w-10 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-sm text-white"
                      />
                      <input
                        type="text"
                        value={block.title}
                        onChange={(e) => handleInfoChange(idx, 'title', e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-1 text-sm text-white font-bold"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={block.description}
                      onChange={(e) => handleInfoChange(idx, 'description', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-slate-300 resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEATURED PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">Manage Featured Repositories (AgriGenius, AgriTech, plant-store, todo-list-mern, etc.):</p>
                <button
                  type="button"
                  onClick={addProject}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Repository
                </button>
              </div>

              <div className="space-y-4">
                {formData.featuredProjects.map((proj, idx) => (
                  <div key={proj.id || idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3 relative">
                    <button
                      type="button"
                      onClick={() => removeProject(idx)}
                      className="absolute top-3 right-3 text-slate-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Title & Icon</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={proj.icon}
                            onChange={(e) => handleProjectChange(idx, 'icon', e.target.value)}
                            className="w-10 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-center text-sm"
                          />
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-1 text-xs text-white font-bold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Repo Full Path</label>
                        <input
                          type="text"
                          value={proj.repoName}
                          onChange={(e) => {
                            handleProjectChange(idx, 'repoName', e.target.value);
                            handleProjectChange(idx, 'repoUrl', `https://github.com/${e.target.value}`);
                          }}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1 text-xs text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">Tags (comma separated)</label>
                        <input
                          type="text"
                          value={proj.tags.join(', ')}
                          onChange={(e) => handleProjectChange(idx, 'tags', e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1 text-xs text-cyan-300 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[11px] font-mono text-slate-400">Description</label>
                        <button
                          type="button"
                          disabled={isAiLoading}
                          onClick={() =>
                            enhanceWithAi(
                              `Enhance description for repository ${proj.title}: ${proj.description}`,
                              'project',
                              (resText) => handleProjectChange(idx, 'description', resText)
                            )
                          }
                          className="text-[10px] font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" /> AI Polish
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-slate-300 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TECH STACK & MILESTONES */}
          {activeTab === 'tech' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Active Tech Stack Categories & Badges:</p>
              {formData.techCategories.map((cat, cIdx) => (
                <div key={cat.category} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                  <h4 className="font-bold text-sm text-cyan-400">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, iIdx) => (
                      <span key={item.name + iIdx} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700">
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'milestones' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">Milestone Journey Items:</p>
              <div className="space-y-3">
                {formData.milestones.map((m, idx) => (
                  <div key={m.id} className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center gap-3">
                    <select
                      value={m.status}
                      onChange={(e) => {
                        const updated = [...formData.milestones];
                        updated[idx].status = e.target.value as any;
                        setFormData((prev) => ({ ...prev, milestones: updated }));
                      }}
                      className="bg-slate-950 border border-slate-700 text-xs text-white rounded p-1"
                    >
                      <option value="completed">Completed</option>
                      <option value="in_progress">In Progress</option>
                      <option value="future">Future</option>
                    </select>
                    <input
                      type="text"
                      value={m.title}
                      onChange={(e) => {
                        const updated = [...formData.milestones];
                        updated[idx].title = e.target.value;
                        setFormData((prev) => ({ ...prev, milestones: updated }));
                      }}
                      className="flex-1 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-xs text-white font-bold"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-xs font-mono hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Check className="w-4 h-4" /> Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};
