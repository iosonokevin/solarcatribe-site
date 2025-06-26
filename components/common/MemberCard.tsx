'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface MemberCardProps {
  name: string;
  imageSrc: StaticImageData;
  onClick: () => void;
}

export default function MemberCard({ name, imageSrc, onClick }: MemberCardProps) {
  return (
    <div className="text-center cursor-pointer" onClick={onClick}>
      <div
        className="w-60 h-60 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <Image
          src={imageSrc}
          alt={name}
          width={240}
          height={240}
          className="object-cover w-full h-full"
          placeholder="blur"
        />
      </div>
      <p className="mt-4 text-lg font-medium text-black transition-colors duration-300 hover:text-gray-700">
        {name}
      </p>
    </div>
  );
}
