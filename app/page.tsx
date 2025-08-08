'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import EventList from '@/components/common/EventList';
import Hero from '@/components/common/HeroSection';
import ImageTextSection from '@/components/common/ImageTextSection';
import ImageBanner from '@/components/common/ImageBanner';

import img1 from '@/public/images/banchetto_medicina_solarca.webp';
import img2 from '@/public/images/fulvio_mirtilli.webp';
import img3 from '@/public/images/luca_piccolo_fuoco_festival_sciamanesimo.webp';
import img4 from '@/public/images/portachiavi_fuoco.webp';
import img5 from '@/public/images/sara_fulvio.webp';
import img6 from '@/public/images/tamburi_fuoco.webp';
import img7 from '@/public/images/tramonto_solarca.webp';
import img8 from '@/public/images/sara_luca_solarca.webp';
import img9 from '@/public/images/vista_solarca.webp';

import logoSolarca from '@/public/images/logo_solarca.webp';
import Gallery from '@/components/common/Gallery';

export default function Home() {
  const galleryData = [
    { src: img1, captionITA: "Strumenti medicina, custodi di suoni e preghiere", captionENG: "Medicine tools, keepers of sound and prayer" },
    { src: img2, captionITA: "Il bosco che offre, il cuore che ringrazia", captionENG: "The forest offers, the heart gives thanks" },
    { src: img3, captionITA: "Mani e spirito che chiamano la fiamma", captionENG: "Hands and spirit calling the flame" },
    { src: img4, captionITA: "Mani che scelgono, cuore che riceve: tra brace e medicine sacre", captionENG: "Hands that choose, heart that accepts: between embers and sacred medicines" },
    { src: img5, captionITA: "Due cuori, un’unica intenzione: accogliere", captionENG: "Two hearts, one intention: to welcome" },
    { src: img6, captionITA: "Il fuoco li scalda, il cuore li farà suonare", captionENG: "The fire warms them, the heart will make them sing" },
    { src: img7, captionITA: "Solarca, nel silenzio dorato del tramonto", captionENG: "Solarca, in the golden silence of sunset" },
    { src: img8, captionITA: "La gioia semplice di riconoscersi", captionENG: "The simple joy of recognising each other" },
    { src: img9, captionITA: "L’orizzonte di Solarca abbraccia le cime", captionENG: "Solarca’s horizon embraces the peaks" },
  ];

  return (
    <div className="bg-transparent text-white font-[family-name:var(--font-geist-sans)] relative">       
      <Hero title="Solarca Tribe" videoSrc="/santa_sara_tribe_canto_2.mp4" />

      <EventList />

      <ImageBanner
        titleITA="Dalla tribù nasce l’unità"
        titleENG="From the tribe comes unity"
        buttonTextITA="Danza"
        buttonTextENG="Dance"
        buttonHref="/tribe"
        overlayOpacity={0.5}
      />

      <ImageTextSection
        imageSrc={logoSolarca}
        titleITA="Il Sentiero Rosso"
        titleENG="The Red Path"
        paragraphsITA={["Un viaggio del cuore e dello spirito, abbracciando la sacra connessione tra tutti gli esseri."]}
        paragraphsENG={["A journey of heart and spirit, embracing the sacred connection among all beings."]}
        buttonTextITA="Cammina"
        buttonTextENG="Walk"
        buttonHref="/red-path"
      />

      <ImageBanner
        titleITA="Dalla Terra alle Mani, al Cuore"
        titleENG="From the Earth to the Hands, to the Heart"
        buttonTextITA="Tocca"
        buttonTextENG="Touch"
        buttonHref="/tribe"
        overlayOpacity={0.5}
      />

      <Gallery
        titleITA="Il Potere del Cerchio"
        titleENG="The Power of the Circle"
        galleryItems={galleryData}
      />

      <ContactBanner />

      <Footer />
    </div>
  );
}




