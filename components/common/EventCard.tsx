'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface Props {
  slug: string;
  title: string;
  date: string;
  location1?: string;
  location2?: string;
  image: StaticImageData;
  priority?: boolean;
}

export default function EventCard({
  slug,
  title,
  date,
  location1,
  location2,
  image,
  priority = false,
}: Props) {
  const { language } = useLanguage();

  return (
    <Link
      href={`/events/${language}/event/${slug}`}
      className="group w-full aspect-square rounded-full overflow-hidden border border-black shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 relative text-center"
    >
      <div className="relative w-full h-full bg-transparent">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          placeholder="blur"
          priority={priority}
        />
      </div>

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 py-3 space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{date}</p>
        {location1 && <p className="text-sm">{location1}</p>}
        {location2 && <p className="text-sm">{location2}</p>}
      </div>
    </Link>
  );
}