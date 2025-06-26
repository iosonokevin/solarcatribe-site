'use client';

import Image from "next/image";
import ButtonLink from './PrimaryButton';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function ContactBanner() {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white text-black py-20 px-6 sm:px-12 text-center">
      <div className="flex justify-center">
        <Image
          src="/logo_solarca.png"
          alt="Logo Solarca"
          width={300}
          height={300}
          className="w-64 h-auto"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">{language === 'ITA' ? 'Connettiti, condividi, cresci' : 'Connect, Share, Grow'}</h2>
      <ButtonLink text={language === 'ITA' ? 'Unisciti a noi' : 'Join Us'} href="/join-us" />
    </section>
  );
}
