'use client';

import Header from './Header';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import SidebarMenu from '../layout/SidebarMenu';

interface HeroSectionProps {
  title: string;
  videoSrc?: string;
  imageSrc?: string | StaticImageData;
  overlayOpacity?: number;
  height?: string;
  showLanguageSwitch?: boolean;
}

export default function HeroSection({
  title,
  videoSrc,
  imageSrc,
  overlayOpacity = 0.3,
  height = '100vh',
  showLanguageSwitch = true,
}: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        toggleMenu={() => setIsMenuOpen(prev => !prev)}
        isMenuOpen={isMenuOpen}
        showLanguageSwitch={showLanguageSwitch}
      />
      <SidebarMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />

      <section
        className="relative flex items-center justify-center px-8 sm:px-20 text-center overflow-hidden bg-transparent"
        style={{ height }}
      >
        {videoSrc ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-transparent">
            <Image
              src={imageSrc}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : null}
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
        <h1 className="text-4xl font-bold text-white relative z-20">
          {title}
        </h1>
      </section>
    </>
  );
}
