import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CrtMonitor } from '../components/CrtMonitor.jsx';
import { soundEffects } from '../utils/soundEffects.js';

import posterImg from '../assets/poster.png';
import windowImg from '../assets/window.png';
import keyboardImg from '../assets/keyboard.png';
import floorImg from '../assets/floor.png';

export default function PortfolioPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const monitorWrapperRef = useRef(null);

  useEffect(() => {
    if (monitorWrapperRef.current) {
      gsap.to(monitorWrapperRef.current, {
        scale: isZoomed ? 1.15 : 1,
        y: isZoomed ? -20 : 0,
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [isZoomed]);

  return (
    <div
      className="relative w-full bg-[#f6ebd3] overflow-hidden select-none"
      style={{ aspectRatio: '1366 / 768' }}
    >
      <img
        src={posterImg}
        alt="Poster"
        className="absolute drop-shadow-md hidden sm:block pointer-events-none z-0"
        style={{ left: '6%', top: '-2%', width: '80%' }}
      />
      <img
        src={windowImg}
        alt="Window"
        className="absolute pointer-events-none hidden sm:block z-0"
        style={{ right: 0, top: 0, width: '90%' }}
      />

      <div
        ref={monitorWrapperRef}
        className="absolute z-40 pointer-events-auto"
        style={{ left: '17%', top: '4%', width: '52%' }}
      >
        <CrtMonitor isZoomed={isZoomed} onToggleZoom={() => setIsZoomed(!isZoomed)} />
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 z-0 border-t-4 border-black pointer-events-none"
        style={{ height: '18%' }}
      >
        <img src={floorImg} alt="Floor" className="w-full h-full object-cover object-bottom" />
      </div>
    </div>
  );
}