'use client';

import React from 'react';
import CloseButton from './CloseButton';
import Image from 'next/image';

interface MemberOverlayProps {
  name: string;
  bio: string;
  imageSrc: string;
  onClose: () => void;
}

export default function MemberOverlay({ name, bio, imageSrc, onClose }: MemberOverlayProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white text-black max-w-xl w-full rounded-lg shadow-lg relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={onClose}
          className="absolute top-4 right-4 z-50"
        />
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 mb-4 relative">
            <Image
              src={imageSrc}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-base leading-relaxed text-left">{bio}</p>
        </div>
      </div>
    </div>
  );
}

