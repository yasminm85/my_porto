import React from 'react';
import { portfolioMeta } from '../../data/portfolioData';
import { Sparkles, MapPin, Coffee, ArrowRight, Award, Terminal } from 'lucide-react';
import { soundEffects } from '../../utils/soundEffects';
import ProfilePic from '../../assets/profile.jpg';

export const AboutSection = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col p-3 sm:p-5 text-gray-100 font-sans-clean">
      <div className="bg-[#1f242d] border-2 border-black p-4 sm:p-5 rounded-none retro-shadow relative overflow-hidden mb-5">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-[#2a303c] border-[3px] border-black p-1.5 retro-shadow-sm">
              <img
                src={ProfilePic}
                alt={portfolioMeta.name}
                className="w-full h-full object-cover grayscale-25 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#2563eb] text-white p-1 border border-black">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              </div>
            </div>
            <span className="mt-2 font-mono text-xs text-gray-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#f43f5e]" />
              {portfolioMeta.location}
            </span>
          </div>

          {/* Bio & Intro text */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-2.5">
            <div>
              <span className="font-pixel text-[11px] text-blue-400 uppercase">Hello</span>
              <h2 className="font-bubble text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                I&apos;m {portfolioMeta.name}.
              </h2>
              <p className="text-xs sm:text-sm text-yellow-300/90 font-mono mt-0.5">
                {portfolioMeta.title}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans-clean">
              {portfolioMeta.bio}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => {
                  soundEffects.click();
                  onNavigate('projects');
                }}
                className="px-3 py-1.5 bg-[#e5a84b] hover:bg-[#d49638] text-black font-pixel text-xs border border-black retro-shadow-sm flex items-center gap-1.5 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 font-bold"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  soundEffects.click();
                  onNavigate('contact');
                }}
                className="px-3 py-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-pixel text-xs border border-black retro-shadow-sm flex items-center gap-1.5 cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Contact</span>
                <Terminal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
