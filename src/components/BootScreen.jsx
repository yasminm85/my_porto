import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { soundEffects } from '../utils/soundEffects';

export const BootScreen = ({ onBootComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading');
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    soundEffects.bootChime();

    if (logoRef.current) {
      const letters = logoRef.current.querySelectorAll('.bubble-letter');
      gsap.fromTo(
        letters,
        { y: -30, opacity: 0, scale: 0.7 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(2.2)',
        }
      );
    }

    const steps = [
      { p: 15, text: 'Loading memory blocks...' },
      { p: 35, text: 'Mounting YasminOS ...' },
      { p: 60, text: 'Initializing engine...' },
      { p: 85, text: 'Loading creative portfolio...' },
      { p: 100, text: 'Ready!' },
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setProgress(steps[stepIndex].p);
        setStatusText(steps[stepIndex].text);
        soundEffects.click();
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          handleFinish();
        }, 400);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const handleFinish = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: onBootComplete,
      });
    } else {
      onBootComplete();
    }
  };

  const totalBlocks = 10;
  const activeBlocks = Math.round((progress / 100) * totalBlocks);

  const letters = [
    { char: 'P', color: '#ffb300' },
    { char: 'O', color: '#1e3a8a' },
    { char: 'R', color: '#e11d48' },
    { char: 'T', color: '#f97316' },
    { char: 'F', color: '#0284c7' },
    { char: 'O', color: '#3b82f6' },
    { char: 'L', color: '#1d4ed8' },
    { char: 'I', color: '#f59e0b' },
    { char: 'O', color: '#2563eb' },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-[#2d3139] flex flex-col items-center justify-center p-6 text-white select-none z-20"
    >
      <div className="absolute inset-0 bg-radial from-transparent via-[#202329]/60 to-[#121417]/90 pointer-events-none" />

      <div ref={logoRef} className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 mb-8">
        {letters.map((item, idx) => {
          const archOffsets = [12, 6, 2, 0, 0, 2, 6, 10, 16];
          const yOffset = archOffsets[idx] || 0;
          return (
            <span
              key={idx}
              className="bubble-letter inline-block font-bubble font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight transition-transform"
              style={{
                color: item.color,
                transform: `translateY(${yOffset}px)`,
                textShadow: `
                  2px 2px 0px #000000,
                  -2px -2px 0px rgba(255,255,255,0.4),
                  4px 4px 0px rgba(0,0,0,0.8)
                `,
              }}
            >
              {item.char}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] bg-[#9ca3af] p-1 border-[3px] border-black shadow-[3px_3px_0px_#000000]">
        <div className="bg-[#4b5563] h-7 sm:h-9 flex items-center gap-1 p-1">
          {Array.from({ length: totalBlocks }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-full transition-all duration-150 border border-black/40 ${
                i < activeBlocks
                  ? 'bg-[#1d4ed8] shadow-[inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-2px_0_rgba(0,0,0,0.4)]'
                  : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-5 flex flex-col items-center gap-2">
        <p className="font-pixel text-sm sm:text-base tracking-widest text-[#f3f4f6] uppercase flex items-center gap-2">
          {statusText}
          <span className="inline-block w-2 h-4 bg-white animate-pulse" />
        </p>

        <button
          onClick={handleFinish}
          className="mt-4 text-xs font-pixel text-[#9ca3af] hover:text-white underline cursor-pointer transition-colors"
        >
          [ Click to Skip Boot ]
        </button>
      </div>
    </div>
  );
};
