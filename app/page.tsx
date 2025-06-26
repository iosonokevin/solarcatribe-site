'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import EventList from '@/components/common/EventList';
import Hero from '@/components/common/HeroSection';
import ImageTextSection from '@/components/common/ImageTextSection';
import ImageBanner from '@/components/common/ImageBanner';
import ImageCarousel from '@/components/common/ImageCarousel';
import { useLanguage } from '@/components/layout/LanguageProvider';


export default function Home() {
  const { language } = useLanguage();

  const images = [
    { src: '/tepee_inipi.jpg', alt: 'tepee inipi' },
    { src: '/bandiera_solarca_santa_sara.jpg', alt: 'bandiera solarca santa sara' },
    { src: '/sweat_lodge_in_winter.jpg', alt: 'sweat lodge in winter' },
    { src: '/solarca_colors.jpg', alt: 'solarca colors' },
  ];

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">       
      <Hero title="Solarca Tribe" videoSrc="/santa_sara_tribe_canto_2.mp4" />

      <EventList />

      <ImageTextSection
        imageSrc="/logo_solarca.png"
        titleITA="Il Sentiero Rosso"
        titleENG="The Red Path"
        paragraphsITA={["Un viaggio del cuore e dello spirito, abbracciando la sacra connessione tra tutti gli esseri."]}
        paragraphsENG={["A journey of heart and spirit, embracing the sacred connection among all beings."]}
        buttonTextITA="Cammina"
        buttonTextENG="Walk"
        buttonHref="/red-path"
      />

      <ImageBanner
        titleITA="Dalla tribù nasce l’unità"
        titleENG="From the tribe comes unity"
        buttonTextITA="Danza"
        buttonTextENG="Dance"
        buttonHref="/tribe"
        overlayOpacity={0.5}
      />

      <section className="w-full bg-white text-black py-10 px-6 sm:px-12 text-center">
        {language === 'ITA' ? (
          <h2 className="text-3xl font-bold">Il Potere del Cerchio</h2>
        ) : (
          <h2 className="text-3xl font-bold">The Power of the Circle</h2>
        )}      
      </section>

      <ImageCarousel images={images} />

      <ContactBanner />

      <Footer />



    </div>
  );
}




