import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';

export const ExperienceSection = () => {
  return (
    <div className="w-full flex flex-col p-3 sm:p-5 text-gray-100 font-sans-clean">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-5 bg-[#181d24] p-3 border-2 retro-shadow-sm">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-emerald-400" />
          <h3 className="font-bubble text-lg sm:text-xl font-bold text-white">
            Experience
          </h3>
        </div>
      </div>

      <div className="space-y-4">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1f242d] border-2 border-black p-4 sm:p-5 rounded-none retro-shadow relative overflow-hidden"
          >
            {/* Top Row: Role & Company */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-700 pb-3 mb-3">
              <div>
                <h4 className="font-bubble text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>{item.role}</span>
                  <span className="text-xs font-pixel bg-[#2563eb] text-white px-2 py-0.5 border border-black font-normal">
                    {item.type}
                  </span>
                </h4>
                <div className="text-yellow-400 font-mono text-xs sm:text-sm font-semibold mt-0.5">
                  @ {item.company}
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1 bg-[#14181f] px-2 py-0.5 border border-black">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#f43f5e]" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Role highlights & contributions */}
            <div className="space-y-2 mb-4">
              {item.description.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                  <span className="leading-relaxed">{desc}</span>
                </div>
              ))}
            </div>

            {/* Key Milestone Highlight Banner if present */}
            {item.highlight && (
              <div className="mb-4 bg-[#141b24] p-2.5 border-l-4 border-yellow-400 flex items-center gap-2 text-xs font-mono text-yellow-300">
                <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                <span><strong>Key Achievement:</strong> {item.highlight}</span>
              </div>
            )}

            {/* Skills & Technologies Pills */}
            <div className="pt-2 border-t border-gray-800 flex items-center flex-wrap gap-1.5">
              <span className="text-[11px] font-pixel text-gray-400 mr-1">STACK:</span>
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#161a22] text-cyan-300 font-mono text-[11px] px-2 py-0.5 border border-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
