'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface Props {
  slug: string;
  title: string;
  date: string;
  location1?: string;
  location2?: string;
  image: string;
}

export default function EventCard({ slug, title, date, location1, location2, image }: Props) {
  const { language } = useLanguage();
  return (
    <Link
      href={`/events/${language}/event/${slug}`}
      className="group w-full aspect-square rounded-full overflow-hidden border border-black shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 relative text-center"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 py-3 space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{date}</p>
        {location1 && <p className="text-sm">{location1}</p>}
        {location2 && <p className="text-sm">{location2}</p>}
      </div>
    </Link>
  );
}

