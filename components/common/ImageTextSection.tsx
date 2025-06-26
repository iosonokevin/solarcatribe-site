'use client';

import Image from 'next/image';
import ButtonLink from './PrimaryButton';
import React from 'react';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface ImageTextSectionProps {
  imageSrc: string;
  buttonHref?: string;
  reverse?: boolean;
  centerButton?: boolean;
  smallTitle?: boolean;
  titleITA: string;
  titleENG: string;
  paragraphsITA: string[];
  paragraphsENG: string[];
  buttonTextITA?: string;
  buttonTextENG?: string;
}

export default function ImageTextSection({
  imageSrc,
  buttonHref,
  reverse = false,
  centerButton = false,
  smallTitle = false,
  titleITA,
  titleENG,
  paragraphsITA,
  paragraphsENG,
  buttonTextITA,
  buttonTextENG,
}: ImageTextSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-20 px-6 sm:px-12">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={imageSrc}
              alt={language === 'ITA' ? titleITA : titleENG}
              width={400}
              height={400}
              className="rounded-full object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            />
          </div>

          <div className="w-full md:w-1/2 text-black space-y-4 text-center md:text-left">
          <h2 className={`${smallTitle ? 'text-2xl' : 'text-3xl'} font-bold`}>
            {language === 'ITA' ? titleITA : titleENG}
          </h2>
          {(language === 'ITA' ? paragraphsITA : paragraphsENG).map((p, i) => (
          <p key={i} className="mb-3">
            {p}
          </p>
        ))}
          {buttonHref && (language === 'ITA' ? buttonTextITA : buttonTextENG) && (
            <div
              className={`flex justify-center ${
                centerButton ? 'md:justify-center' : 'md:justify-start'
              }`}
            >
              <ButtonLink
                text={language === 'ITA' ? buttonTextITA! : buttonTextENG!} // ! perché sai che esiste
                href={buttonHref}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

