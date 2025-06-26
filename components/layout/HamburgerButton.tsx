'use client';
import React from 'react';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerButton({ isOpen, toggleMenu }: Props) {
  return (
    <button
      className="group w-10 h-10 rounded-full border border-white bg-transparent hover:bg-white flex flex-col items-center justify-center space-y-1 transition-all duration-300 z-30 cursor-pointer"
      onClick={toggleMenu}
    >
      <span className={`w-5 h-0.5 bg-white group-hover:bg-black transition-colors duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
      <span className={`w-5 h-0.5 bg-white group-hover:bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`w-5 h-0.5 bg-white group-hover:bg-black transition-colors duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
    </button>
  );
}
