'use client';

import { useState, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface GalleryItem {
  src: StaticImageData;
  captionITA: string;
  captionENG: string;
}

interface GalleryProps {
  titleITA?: string;
  titleENG?: string;
  galleryItems: GalleryItem[];
}

export default function Gallery({ titleITA, titleENG, galleryItems }: GalleryProps) {
  const { language } = useLanguage();

  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">
      <section className="bg-white text-black px-4 md:px-12 py-12">
        { (language === 'ITA' && titleITA) || (language !== 'ITA' && titleENG) ? (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {language === 'ITA' ? titleITA : titleENG}
          </h2>
        ) : null }

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map(({ src, captionITA, captionENG }, index) => (
            <div key={index} className="flex flex-col">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${
                  !isMobile ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (!isMobile) setSelectedImage(src);
                }}
              >
                <Image
                  src={src}
                  alt={language === 'ITA' ? captionITA : captionENG}
                  layout="fill"
                  objectFit="cover"
                  className="sm:hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-center text-black text-sm sm:text-base">
                {language === 'ITA' ? captionITA : captionENG}
              </p>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full px-4">
            <Image
              src={selectedImage}
              alt="Enlarged image"
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
