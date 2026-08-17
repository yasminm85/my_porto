import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import { Sparkles, Code, Server, Palette, Terminal, Cpu } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const SkillsSection = () => {
  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Frontend & UI Craft':
        return Code;
      case 'Backend & Infrastructure':
        return Server;
      case 'Design & Creative Tools':
        return Palette;
      default:
        return Cpu;
    }
  };

  return (
    <div className="w-full flex flex-col p-3 sm:p-5 text-gray-100 font-sans-clean">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-5 bg-[#181d24] p-3 border-2 retro-shadow-sm">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-yellow-400" />
          <h3 className="font-bubble text-lg sm:text-xl font-bold text-white">
            Skills
          </h3>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.title);
          return (
            <div
              key={idx}
              className="bg-[#1f242d] border-2 border-black p-4 rounded-none retro-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-3 bg-[#151922] p-2 border">
                  <Icon className="w-4 h-4 text-[#e5a84b]" />
                  <h4 className="font-pixel text-xs font-bold text-white uppercase tracking-wider">
                    {cat.title}
                  </h4>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-gray-200 font-medium flex items-center gap-1.5">
                          <span>{skill.name}</span>
                          {skill.badge && (
                            <span className="text-[10px] bg-[#2563eb] text-white px-1 py-0.2 border border-black font-pixel">
                              {skill.badge}
                            </span>
                          )}
                        </span>
                      </div>

                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
