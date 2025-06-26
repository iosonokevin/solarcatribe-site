'use client';

import React from 'react';
import SecondaryButton from './SecondaryButton';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface ImageBannerProps {
  backgroundImage?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  height?: string;
  overlayOpacity?: number;
  titleITA: string;
  titleENG: string;
  buttonTextITA: string;
  buttonTextENG: string;
}

export default function ImageBanner({
  backgroundImage,
  subtitle,
  buttonHref,
  height = '40vh',
  overlayOpacity = 0.4,
  titleITA,
  titleENG,
  buttonTextITA,
  buttonTextENG,
}: ImageBannerProps) {
  const hasImage = Boolean(backgroundImage);
  const { language } = useLanguage();

  return (
    <section
      className={`relative flex items-center justify-center text-white text-center ${
        hasImage ? 'bg-cover bg-center' : ''
      }`}
      style={{
        backgroundImage: hasImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: hasImage ? undefined : '#A4012F',
        height,
      }}
    >
      {hasImage && (
        <div
          className="absolute inset-0 bg-black z-0"
          style={{ opacity: overlayOpacity }}
        />
      )}
      <div className="relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          {language === 'ITA' ? titleITA : titleENG}
        </h2>
        {subtitle && <p className="mt-2 text-lg sm:text-xl">{subtitle}</p>}
        <div className="py-3">       
          {buttonHref && (
            <SecondaryButton 
            text={language === 'ITA' ? buttonTextITA : buttonTextENG}
            href={buttonHref}       
            />
          )} 
        </div>
      </div>
    </section>
  );
}
