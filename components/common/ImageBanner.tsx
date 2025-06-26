'use client';

import React from 'react';
import Image from 'next/image';
import SecondaryButton from './SecondaryButton';
import { useLanguage } from '@/components/layout/LanguageProvider';
import { StaticImageData } from 'next/image';

interface ImageBannerProps {
  backgroundImage?: string | StaticImageData;
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
  const { language } = useLanguage();

  return (
    <section className="relative flex items-center justify-center text-white text-center" style={{ height }}>
      {backgroundImage ? (
        <>
          <div className="absolute inset-0 -z-10">
            {/* Usa next/image con fill e placeholder blur */}
            {typeof backgroundImage === 'string' ? (
              <Image
                src={backgroundImage}
                alt={language === 'ITA' ? titleITA : titleENG}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={backgroundImage} // se non hai blurDataURL usa l'immagine stessa
                priority
              />
            ) : (
              <Image
                src={backgroundImage}
                alt={language === 'ITA' ? titleITA : titleENG}
                fill
                className="object-cover"
                placeholder="blur"
                priority
              />
            )}
          </div>

          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#A4012F]" />
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
