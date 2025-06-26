'use client';

import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function CloseButton({
  onClick,
  className = '',
  ariaLabel = 'Chiudi',
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-2xl font-bold ${className}`}
      aria-label={ariaLabel}
    >
      ×
    </button>
  );
}
