'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import EventList from '@/components/common/EventList';
import Hero from '@/components/common/HeroSection';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function Events() {
  const { language } = useLanguage();

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">      
      <Hero 
        title={
            language === 'ITA' 
              ? "Ad ogni battito, Madre Terra canta in noi" 
              : "At every beat, Mother Earth sings in us"
          } 
        height="90vh" 
        imageSrc="/hero_eventi.jpg" 
      />
      <EventList />
      <ContactBanner />
      <Footer />
    </div>
  );
}




