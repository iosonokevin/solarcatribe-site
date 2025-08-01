'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import EventList from '@/components/common/EventList';
import Hero from '@/components/common/HeroSection';
import { useLanguage } from '@/components/layout/LanguageProvider';

import heroEventi from '@/public/images/hero_eventi.webp';

export default function Events() {
  const { language } = useLanguage();

  return (
    <div className="bg-transparent text-white font-[family-name:var(--font-geist-sans)] relative">      
      <Hero 
        title={
            language === 'ITA' 
              ? "Ad ogni battito, Madre Terra canta in noi" 
              : "At every beat, Mother Earth sings in us"
          } 
        height="90vh" 
        imageSrc={heroEventi} 
      />
      <EventList />
      <ContactBanner />
      <Footer />
    </div>
  );
}




