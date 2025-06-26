'use client';

import React from 'react';

interface FullHeightTextSectionProps {
  title?: string;
  description: string;
  height?: string;
}

export default function CentralTextSection({
  title,
  description,
  height = 'min-h-screen',
}: FullHeightTextSectionProps) {
  return (
    <section
      className={`w-full bg-white text-black px-6 sm:px-12 text-center flex flex-col justify-center py-20 ${height}`}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-base leading-relaxed mb-6">{description}</p>
    </section>
  );
}
