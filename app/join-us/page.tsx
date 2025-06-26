'use client';

import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import ContactSection from '@/components/common/ContactSection';
import ContactBanner from '@/components/common/ContactBanner';
import { useLanguage } from '@/components/layout/LanguageProvider';

import heroJoinUs from '@/public/images//hero_join_us.webp';

export default function JoinUs() {
  const { language } = useLanguage();

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">      
      <Hero 
        title={
            language === 'ITA' 
              ? "Comunità e connessione" 
              : "Community and Connection"
          } 
        height="90vh" 
        imageSrc={heroJoinUs} 
      />
      <ContactSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}




