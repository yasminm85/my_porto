import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { BootScreen } from './BootScreen.jsx';
import { DesktopTopBar } from './DesktopTopBar.jsx';
import { AboutSection } from './sections/AboutSection.jsx';
import { ProjectsSection } from './sections/ProjectsSection.jsx';
import { ExperienceSection } from './sections/ExperienceSection.jsx';
import { SkillsSection } from './sections/SkillsSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';
import { ProjectDetailModal } from './ProjectDetailModal.jsx';
import { soundEffects } from '../utils/soundEffects.js';

export const CrtMonitor = ({ isZoomed, onToggleZoom }) => {
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [isBooting, setIsBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollContainerRef = useRef(null);
  const crtBezelRef = useRef(null);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleTogglePower = (e) => {
    if (e) e.stopPropagation();
    soundEffects.click?.();
    if (!isPoweredOn) {
      setIsPoweredOn(true);
      setIsBooting(true);
    } else {
      setIsPoweredOn(false);
    }
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    let targetEl = null;
    if (sectionId === 'about') targetEl = aboutRef.current;
    else if (sectionId === 'projects') targetEl = projectsRef.current;
    else if (sectionId === 'experience') targetEl = experienceRef.current;
    else if (sectionId === 'skills') targetEl = skillsRef.current;
    else if (sectionId === 'contact') targetEl = contactRef.current;

    if (targetEl && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: targetEl.offsetTop - 10,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollPos = scrollContainerRef.current.scrollTop + 140;

    const sections = [
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'experience', ref: experienceRef },
      { id: 'skills', ref: skillsRef },
      { id: 'contact', ref: contactRef },
    ];

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = sections[i].ref.current;
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    if (crtBezelRef.current && isPoweredOn) {
      gsap.fromTo(
        crtBezelRef.current,
        { filter: 'brightness(2.2) contrast(1.8)' },
        { filter: 'brightness(1) contrast(1)', duration: 0.35, ease: 'power3.out' }
      );
    }
  }, [isPoweredOn, isBooting]);

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full bg-[#d5cfc1] border-[4px] border-black p-2.5 sm:p-4 shadow-[8px_8px_0px_#000000]">
          
          <div className="w-full h-2 bg-[#ece7db] border-b border-black/30 mb-2" />

          <div
            ref={crtBezelRef}
            className="relative w-full bg-[#111317] border-[4px] border-black p-1.5 sm:p-2.5 overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] h-[380px] sm:h-[440px] md:h-[480px] flex flex-col"
          >
            {!isPoweredOn ? (
              <div className="w-full h-full bg-[#0d0f12] flex flex-col items-center justify-center text-gray-500 font-pixel text-xs z-50 pointer-events-auto">
                <p className="mb-2">[ MONITOR POWERED OFF ]</p>
                <button
                  type="button"
                  onClick={handleTogglePower}
                  className="mt-2 px-3 py-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-pixel border border-black cursor-pointer active:scale-95"
                >
                  PRESS TO POWER ON
                </button>
              </div>
            ) : isBooting ? (
              <BootScreen onBootComplete={() => setIsBooting(false)} />
            ) : (
              <div className="relative w-full h-full flex flex-col bg-[#14171d] overflow-hidden min-h-0">
                <DesktopTopBar
                  activeSection={activeSection}
                  onSelectSection={handleSectionClick}
                  isZoomed={isZoomed}
                  onToggleZoom={onToggleZoom}
                  onTogglePower={handleTogglePower}
                  isPoweredOn={isPoweredOn}
                />

                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex-1 h-0 min-h-0 overflow-y-auto retro-scroll relative scroll-smooth bg-[#12151b] z-20 pointer-events-auto"
                >
                  <div ref={aboutRef} id="about" className="scroll-mt-2">
                    <AboutSection onNavigate={handleSectionClick} />
                  </div>
                  <div ref={projectsRef} id="projects" className="scroll-mt-2">
                    <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
                  </div>
                  <div ref={experienceRef} id="experience" className="scroll-mt-2">
                    <ExperienceSection />
                  </div>
                  <div ref={skillsRef} id="skills" className="scroll-mt-2">
                    <SkillsSection />
                  </div>
                  <div ref={contactRef} id="contact" className="scroll-mt-2">
                    <ContactSection />
                  </div>
                </div>

                <ProjectDetailModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-24 sm:w-36 h-3.5 bg-[#8b8474] border-2 border-black flex items-center justify-between px-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                <div className="w-2 h-1 bg-black/60" />
                <div className={`w-1.5 h-1.5 rounded-full ${isPoweredOn ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              </div>
              <span className="hidden sm:inline font-pixel text-[10px] text-gray-600">3.5&quot; DRIVE</span>
            </div>

            <div className="flex items-center gap-2.5 relative z-50">
              <div className="flex items-center gap-1">
                <span
                  className={`w-2.5 h-2.5 rounded-full border border-black ${
                    isPoweredOn ? 'bg-[#22c55e] shadow-[0_0_8px_#22c55e]' : 'bg-[#ef4444]'
                  }`}
                />
                <span className="font-pixel text-[10px] text-gray-600 uppercase">
                  {isPoweredOn ? 'PWR' : 'OFF'}
                </span>
              </div>

              <button
                type="button"
                onClick={handleTogglePower}
                className="w-8 h-5 bg-[#374151] hover:bg-[#4b5563] border-2 border-black retro-shadow-sm flex items-center justify-center cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                title="Toggle Physical Power Switch"
              >
                <div className={`w-3.5 h-1.5 ${isPoweredOn ? 'bg-emerald-400' : 'bg-red-400'}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center -mt-1 w-full max-w-[420px]">
          <div className="w-48 h-5 bg-[#b6ae9d] border-x-[4px] border-black flex items-center justify-center">
            <div className="w-10 h-2.5 bg-black border border-[#555]" />
          </div>
          <div className="w-full h-10 bg-[#cfcbbd] border-[4px] border-black shadow-[6px_6px_0px_#000000]">
            <div className="w-full h-2 bg-[#ece7db] border-b border-black/30" />
          </div>
        </div>
      </div>
    </div>
  );
};