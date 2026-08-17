import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { projectsData } from '../../data/portfolioData';
import { soundEffects } from '../../utils/soundEffects';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles, Eye } from 'lucide-react';

export const ProjectsSection = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef(null);

  const categories = ['All', 'Frontend', 'Full-Stack', 'Backend', 'Blockchain'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
      gsap.fromTo(
        cards,
        { y: 15, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: 'power2.out' }
      );
    }
  }, [selectedCategory]);

  const handleFilterClick = (cat) => {
    soundEffects.click();
    setSelectedCategory(cat);
  };

  const handleInspect = (project) => {
    soundEffects.click();
    onSelectProject(project);
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col p-3 sm:p-5 text-gray-100 font-sans-clean"
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4 bg-[#181d24] p-2.5 border-2 border-black retro-shadow-sm">
        <div className="flex items-center gap-1.5 font-pixel text-xs text-yellow-400">
          <Layers className="w-3.5 h-3.5" />
          <span>FILTER PROJECTS:</span>
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-2.5 py-1 text-xs font-pixel border border-black cursor-pointer transition-all ${
                selectedCategory === cat
                  ? 'bg-[#e5a84b] text-black font-bold retro-shadow-sm'
                  : 'bg-[#28313e] text-gray-300 hover:bg-[#384355] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card bg-[#1f242d] border-2 border-black rounded-none retro-shadow flex flex-col justify-between overflow-hidden group hover:border-[#38bdf8] transition-colors"
          >
            <div className="bg-[#2a3442] border-b-2 border-black px-3 py-1.5 flex items-center justify-between font-pixel text-[11px]">
              <div className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-none bg-[#38bdf8] border border-black inline-block" />
                <span className="text-white truncate">{project.title}</span>
              </div>
              <span className="bg-[#12161c] px-1.5 py-0.5 text-[10px] text-yellow-400 border border-black shrink-0 font-mono">
                {project.category}
              </span>
            </div>

            <div className="relative aspect-video bg-black/40 overflow-hidden border-b-2 border-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2 left-2 right-2">
                <p className="font-mono text-xs text-white drop-shadow-md line-clamp-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={() => handleInspect(project)}
                className="absolute top-2 right-2 bg-[#2563eb]/90 hover:bg-[#2563eb] text-white p-1.5 border border-black retro-shadow-sm flex items-center gap-1 text-[10px] font-pixel cursor-pointer opacity-90 hover:opacity-100"
                title="Inspect Project Architecture"
              >
                <Eye className="w-3 h-3" />
                <span>View</span>
              </button>
            </div>

            {/* Card Body */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#151921] text-gray-300 font-mono text-[10px] sm:text-xs px-2 py-0.5 border border-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.metrics && (
                <div className="text-[11px] font-mono text-emerald-400 bg-[#0f2b1d] px-2 py-1 border border-emerald-800/60 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{project.metrics}</span>
                </div>
              )}
            </div>

            <div className="bg-[#181d24] border-t-2 border-black p-2.5 flex items-center justify-between gap-2 font-pixel text-xs">
              <button
                onClick={() => handleInspect(project)}
                className="text-xs text-yellow-400 hover:text-yellow-300 flex items-center gap-1 cursor-pointer font-bold"
              >
                <span>Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundEffects.click()}
                    className="p-1.5 bg-[#2a3442] hover:bg-[#3b4759] text-gray-200 border border-black"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundEffects.click()}
                    className="px-2.5 py-1 bg-[#e5a84b] hover:bg-[#d49638] text-black font-bold border border-black retro-shadow-sm flex items-center gap-1"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
