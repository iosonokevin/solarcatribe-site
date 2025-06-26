'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

interface ImageCarouselProps {
  images: { src: string; alt?: string }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({ loop: true })
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const slidePrev = () => instanceRef.current?.prev()
  const slideNext = () => instanceRef.current?.next()

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="flex items-center justify-center w-full h-full sm:gap-6">
        <button
          onClick={slidePrev}
          aria-label="Previous slide"
          className="carousel-arrow group absolute left-4 sm:static z-10 flex items-center justify-center cursor-pointer text-black transition-all duration-300 sm:w-12 sm:h-12 sm:border-2 sm:border-black sm:rounded-full group"
        >
          <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6 text-black group-hover:sm:text-white transition-colors" />
        </button>

        <div
          ref={sliderRef}
          className="keen-slider relative w-full h-full sm:!w-[500px] sm:!h-[500px] sm:rounded-full overflow-hidden shadow-2xl"
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="keen-slider__slide relative flex items-center justify-center cursor-pointer group w-full h-full"
              onClick={() => setFullscreenImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt ?? `Slide ${idx + 1}`}
                fill
                className="object-cover object-center sm:rounded-full"
                priority
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center sm:rounded-full">
                <p className="text-white text-sm font-medium text-center px-2 hidden sm:block">
                  Clicca per vedere l’immagine intera
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={slideNext}
          aria-label="Next slide"
          className="carousel-arrow group absolute right-4 sm:static z-10 flex items-center justify-center cursor-pointer text-black transition-all duration-300 sm:w-12 sm:h-12 sm:border-2 sm:border-black sm:rounded-full group"
        >
          <ChevronRight className="w-8 h-8 sm:w-6 sm:h-6 text-black group-hover:sm:text-white transition-colors" />
        </button>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen"
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors cursor-pointer"
            aria-label="Close fullscreen"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}
