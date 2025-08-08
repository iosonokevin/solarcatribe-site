'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import ImageBanner from '@/components/common/ImageBanner';
import ImageTextSection from '@/components/common/ImageTextSection';
import { useLanguage } from '@/components/layout/LanguageProvider';
import Gallery from '@/components/common/Gallery';

{/*import { membersITA } from '@/data/membri';
import { membersENG } from '@/data/members';
import MembersList from '@/components/common/MembersList';*/}

import heroLivingMatter from '@/public/images/hero_living_matter.webp';
import standSolarca from '@/public/images/stand_solarca.webp';
import saraFulvioStand from '@/public/images/sara_fulvio_stand_solarca.webp';

import img1 from '@/public/images/borse_medicina.webp';
import img2 from '@/public/images/portachiavi_braciere.webp';
import img3 from '@/public/images/borse_medicina_2.webp';

export default function LivingMatter() {
  const { language } = useLanguage();

  const galleryData = [
    { src: img1, captionITA: "Strumenti medicina, custodi di suoni e preghiere", captionENG: "Medicine tools, keepers of sound and prayer" },
    { src: img2, captionITA: "Il bosco che offre, il cuore che ringrazia", captionENG: "The forest offers, the heart gives thanks" },
    { src: img3, captionITA: "Mani e spirito che chiamano la fiamma", captionENG: "Hands and spirit calling the flame" }
  ];

  {/*const selectedNames = [
    'Don Juan "Aguila" Ortiz De La Cruz',
    'Luca Del Fuego Confortini',
  ];

  const selectedMembers = (language === 'ITA' ? membersITA : membersENG).filter((member) =>
    selectedNames.includes(member.name)
  );

  const title = language === 'ITA' ? 'I Custodi dello Stand' : 'The Stand Keepers';*/} 

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">
      <Hero
        title={
          language === 'ITA' 
            ? "L’arte che vive, che respira" 
            : "Art that lives, that breathes"
        } 
        height="90vh"
        imageSrc={heroLivingMatter}
      />

      <ImageTextSection
        imageSrc={standSolarca}
        titleITA="Lo Stand di Solarca"
        titleENG="The Solarca Stand"
        paragraphsITA={[
          `Lo Stand di Solarca nasce dal desiderio di condividere un’arte che non si limita alla forma, ma che è espressione viva del cuore. Ogni oggetto, ogni creazione che abita questo spazio porta con sé una storia, un’emozione, un gesto autentico.`,
          `È un invito ad avvicinarsi, a toccare con mano ciò che nasce dal silenzio, dalla presenza, dalla connessione con la terra e con lo spirito.`,
          `Non è un semplice mercato: è un luogo sacro dove l’artigianato si fa preghiera, la materia si fa messaggio, e la bellezza diventa ponte tra anime.`,
        ]}
        paragraphsENG={[
          `The Stand of the Tribe of Solarca was born from the desire to share an art that goes beyond form — an art that is a living expression of the heart. Each object, each creation within this space carries a story, an emotion, an authentic gesture.`,
          `It is an invitation to come closer, to touch what is born from silence, presence, and a deep connection with the Earth and Spirit.`,
          `This is not a simple marketplace: it is a sacred space where craftsmanship becomes prayer, matter becomes message, and beauty becomes a bridge between souls.`,
        ]}
        reverse={true}
      />

      <ImageBanner
        titleITA="Il Cerchio di Solarca"
        titleENG="The Circle of Solarca"
        height="40vh"
        buttonTextITA="Esplora"
        buttonTextENG="Explore"
        buttonHref="/tribe"
        overlayOpacity={0.5}
      />

      <ImageTextSection
        imageSrc={saraFulvioStand}
        titleITA="Mani, Materia e Spirito"
        titleENG="Hands, Matter and Spirit"
        paragraphsITA={[
          `Allo Stand di Solarca si possono trovare creazioni artigianali uniche, realizzate con cura, intenzione e amore.`,
          `Ci sono oggetti in ceramica e legno, plasmati a mano con materiali naturali e spirito creativo. Trovi intrecci di macramè, acchiappasogni ispirati alle tradizioni native, e borse medicina. stampe artistiche e visioni illustrate, nate dal cuore e dalla connessione con il sacro.`,
          `Ogni pezzo racconta una storia, ogni dettaglio porta con sé la presenza di chi lo ha creato. È un artigianato che parla — e che ascolta.`,
        ]}
        paragraphsENG={[
          `At the Stand of Solarca, you will find unique handcrafted creations, made with care, intention, and love.`,
          `There are ceramic and wooden objects, shaped by hand with natural materials and a creative spirit. You'll find macramé weavings, dreamcatchers inspired by native traditions, and medicine bags. Artistic prints and illustrated visions, born from the heart and from a deep connection with the sacred, are also present.`,
          `Each piece tells a story, each detail carries the presence of the one who created it. This is a kind of craftsmanship that speaks — and listens.`,
        ]}
        reverse={false}
      />

      <Gallery
        galleryItems={galleryData}
      />

      {/*<MembersList members={selectedMembers}  title={title}/>*/}

      <ImageBanner
        titleITA="L’Arte di Chi Ascolta la Terra"
        titleENG="The Art of Those Who Listen to the Earth"
        height="40vh"
        buttonTextITA="Ascolta"
        buttonTextENG="Listen"
        buttonHref="/events"
        overlayOpacity={0.5}
      />

      <ContactBanner />
      <Footer />
    </div>
  );
}
