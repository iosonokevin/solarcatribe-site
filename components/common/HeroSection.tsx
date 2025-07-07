'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Header from './Header';
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoLoaded, setVideoLoaded] = useState(!videoSrc);
  const [imageLoaded, setImageLoaded] = useState(!imageSrc);

  useEffect(() => {
    if (!videoRef.current) return;

    const handleCanPlay = () => setVideoLoaded(true);

    const video = videoRef.current;
    video.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [videoSrc]);

  useEffect(() => {
    if (videoLoaded && imageLoaded) {
      window.dispatchEvent(new Event('media-loaded'));
    }
  }, [videoLoaded, imageLoaded]);

  return (
    <>
      <Header
        toggleMenu={() => setIsMenuOpen((prev) => !prev)}
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
            ref={videoRef}
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
              onLoadingComplete={() => setImageLoaded(true)}
            />
          </div>
        ) : null}
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
        <h1 className="text-4xl font-bold text-white relative z-20">{title}</h1>
      </section>
    </>
  );
}
