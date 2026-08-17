import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export const ProjectDetailModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (project && modalRef.current && backdropRef.current) {
      soundEffects.tabSwitch();
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'back.out(1.7)' }
      );
    }
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    soundEffects.click();
    if (modalRef.current && backdropRef.current) {
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.15 });
      gsap.to(modalRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 15,
        duration: 0.2,
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 z-50 select-none"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl max-h-[90%] bg-[#1f242d] border-[3px] border-black text-gray-100 font-sans-clean rounded-none retro-shadow-xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#28313e] border-b-2 border-black px-3 py-2 flex items-center justify-between font-pixel text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-yellow-400 border border-black inline-block" />
            <span className="text-white truncate">PROJECT_INSPECTOR: {project.title}.exe</span>
          </div>

          <button
            onClick={handleClose}
            className="w-6 h-6 bg-[#d94b3c] hover:bg-[#b9382b] text-white flex items-center justify-center border border-black font-bold text-xs cursor-pointer transition-colors"
            title="Close window"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto retro-scroll space-y-4 text-xs sm:text-sm">
          <div className="relative aspect-video bg-black border-2 border-black overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 left-2 bg-[#2563eb] text-white text-[10px] font-pixel px-2 py-0.5 border border-black retro-shadow-sm font-bold">
              {project.category}
            </div>
          </div>

          <div>
            <h3 className="font-bubble text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-yellow-400 font-mono mt-0.5">
              {project.tagline}
            </p>
          </div>

          <div className="bg-[#14181f] p-3.5 border border-black text-gray-200 leading-relaxed text-xs sm:text-sm">
            {project.description}
          </div>

          <div>
            <h4 className="font-pixel text-xs text-yellow-300 uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Architectural Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#181d24] p-2 border border-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-xs text-gray-400 uppercase mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#2a3442] text-cyan-300 font-mono text-xs px-2 py-1 border border-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.metrics && (
            <div className="bg-[#12161c] p-2.5 border-l-4 border-emerald-400 text-xs font-mono text-emerald-300">
              <strong>Impact:</strong> {project.metrics}
            </div>
          )}
        </div>

        <div className="bg-[#181d24] border-t-2 border-black p-3 flex items-center justify-between gap-3 font-pixel text-xs">
          <button
            onClick={handleClose}
            className="px-3 py-1.5 bg-[#2d3748] hover:bg-[#3d4a61] text-gray-200 border border-black"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.click()}
                className="px-3 py-1.5 bg-[#2d3748] hover:bg-[#3d4a61] text-gray-100 border border-black flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.click()}
                className="px-3.5 py-1.5 bg-[#e5a84b] hover:bg-[#d49638] text-black font-bold border border-black retro-shadow-sm flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Launch</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
