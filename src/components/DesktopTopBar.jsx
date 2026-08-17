import React, { useState, useEffect } from 'react';
import {
  User,
  FolderGit2,
  Briefcase,
  Wrench,
  Mail,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export const DesktopTopBar = ({
  activeSection,
  onSelectSection,
  isZoomed,
  onToggleZoom,
}) => {

  const navItems = [
    { id: 'about', label: 'ABOUT', icon: User, color: '#f59e0b' },
    { id: 'projects', label: 'PROJECTS', icon: FolderGit2, color: '#38bdf8' },
    { id: 'experience', label: 'EXP', icon: Briefcase, color: '#4ade80' },
    { id: 'skills', label: 'SKILLS', icon: Wrench, color: '#fbbf24' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: '#f43f5e' },
  ];

  return (
    <header className="w-full bg-[#20252e] border-b-2 border-black px-2 py-1.5 flex items-center justify-between select-none z-30 shrink-0">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundEffects.tabSwitch();
                  onSelectSection(item.id);
                }}
                className={`flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs font-pixel border border-black cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#e5a84b] text-black font-bold retro-shadow-sm -translate-y-0.5'
                    : 'bg-[#2a303c] text-gray-300 hover:bg-[#374050] hover:text-white'
                }`}
                title={`Jump to ${item.label}`}>
                <Icon
                  className="w-3 h-3"
                  style={{ color: isActive ? '#000000' : item.color }}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-1.5 text-gray-300 font-pixel text-[11px]">
        <button
          onClick={onToggleZoom}
          className="hidden md:flex p-1 bg-[#2a303c] hover:bg-[#374050] text-gray-200 border border-black retro-shadow-sm cursor-pointer"
          title={isZoomed ? 'Zoom out to Room' : 'Focus Monitor Screen'}>
          {isZoomed ? (
            <Minimize2 className="w-3 h-3 text-blue-400" />
          ) : (
            <Maximize2 className="w-3 h-3 text-blue-400" />
          )}
        </button>
      </div>
    </header>
  );
};
