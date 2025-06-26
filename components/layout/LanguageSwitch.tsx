'use client';
import React from 'react';

interface Props {
  language: 'ITA' | 'ENG';
  toggleLanguage: () => void;
}

export default function LanguageSwitch({ language, toggleLanguage }: Props) {
  return (
    <div
      className="w-[90px] h-[36px] border border-white rounded-full flex items-center cursor-pointer relative"
      onClick={toggleLanguage}
    >
      <div
        className={`absolute top-0 left-0 w-1/2 h-full rounded-full transition-all duration-300 ${
          language === 'ITA' ? 'translate-x-0 bg-white' : 'translate-x-full bg-white'
        }`}
      />
      <div className="flex justify-between w-full z-10 text-xs font-medium px-2">
        <span className={language === 'ITA' ? 'text-black' : 'text-white'}>ITA</span>
        <span className={language === 'ENG' ? 'text-black' : 'text-white'}>ENG</span>
      </div>
    </div>
  );
}
