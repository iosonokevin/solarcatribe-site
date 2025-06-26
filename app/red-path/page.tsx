'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import ImageBanner from '@/components/common/ImageBanner';
import ImageTextSection from '@/components/common/ImageTextSection';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function RedPath() {
  const { language } = useLanguage();

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">
      <Hero
        title={
          language === 'ITA' 
            ? "Impariamo a fluire, ad adattarci e ad abbracciare il viaggio" 
            : "We learn to flow, adapt, and embrace the journey"
        } 
        height="90vh"
        imageSrc="/cerchio_di_canti.JPG"
      />

      <ImageTextSection
        imageSrc="/sweat_lodge_in_winter.jpg"
        titleITA="La Strada Rossa"
        titleENG="The Red Road"
        paragraphsITA={[
          `La "Strada Rossa" è il sentiero che conduce al vero vivere in coscienza illuminata e in luce diffusa attraverso il nostro cuore e il nostro corpo luminoso, che solo si può acquisire se resta acceso quel senso di unità e di armonia col Tutto. Che si coglie, si nutre e si evolve attraverso la pratica costante - nelle cerimonie ma anche nella vita di tutti i giorni - portando lo stra-ordinario nell’ordinario.`,
          `Frank Fools Crow, il grande "wicasa wakan", "uomo sacro" dei Lakota, del secolo scorso, spiegava tale concetto con le parole: "vedere con la mente, toccare con gli occhi, decidere col cuore". Usare la mente per vedere oltre il nostro sguardo, oltre la natura di ciò che abbiamo di fronte che è spesso illusoria, così da comprendere veramente la realtà che ci circonda.`,
          `Toccare ogni cosa con gli occhi così da riuscire a esprimere il sentimento della dolcezza e dell'amore: piangere per la sorte di un nostro simile così da comprendere cose che altrimenti le parole non saprebbero esprimere.`,
        ]}
        paragraphsENG={[
          `The "Red Road" is the path that leads to truly living in enlightened consciousness and widespread light through our heart and our luminous body, which can only be acquired if that sense of unity and harmony with the Whole remains alive. It is grasped, nourished, and evolved through constant practice—both in ceremonies and in everyday life—bringing the extraordinary into the ordinary.`,
          `Frank Fools Crow, the great "wicasa wakan" (holy man) of the Lakota from the last century, explained this concept with the words: "see with the mind, touch with the eyes, decide with the heart." Using the mind to see beyond our gaze, beyond the nature of what we face, which is often illusory, to truly understand the reality around us.`,
          `Touch everything with your eyes to express the feeling of gentleness and love: to weep for the fate of a fellow being, so as to understand things that words otherwise could not express.`,
        ]}
        reverse={true}
      />

      <ImageBanner
        titleITA="Guarigione ed equilibrio"
        titleENG="Healing and Balance"
        height="40vh"
        buttonTextITA="Ascolta"
        buttonTextENG="Listen"
        buttonHref="/events"
        overlayOpacity={0.5}
      />

      <ImageTextSection
        imageSrc="/tepee_inipi.jpg"
        titleITA="La Via del Cuore"
        titleENG="The Way of the Heart"
        paragraphsITA={[
          `La "Strada Rossa" si ottiene vivendo con umiltà, rispetto, generosità e amore verso ogni forma di vita, con un senso del sacro che il nostro modo di vivere ha perduto da tanto tempo. È in particolare imparando a stare nella Verità.`,
          `“Preghiera” in Lakota si traduce "wacekiya", "parlare coi parenti", visto che ogni aspetto della Creazione è "imparentato" con l'altro; alla fine di ogni preghiera vengono pronunciate le parole "mitakuye oyasin", "a tutti i miei parenti o relazioni": non solo gli esseri umani ma, ogni forma che discende dalla grande creazione, dalla creazione del Grande Mistero, il Grande Spirito che permea l’Universo e di cui noi possediamo la sua radice animica.`,
          `Noi abbiamo una parte divina che è lo spirito, oltre alle 3 parti mortali, mente-corpo-cuore. Così siamo in relazione parentale con i quadrupedi, gli "alati", gli esseri striscianti, gli insetti, i pesci, la vegetazione, il mare, il vento, le nuvole... insomma, l'intera Creazione, di cui noi esseri umani siamo uno degli infiniti anelli.`,
        ]}
        paragraphsENG={[
          `The "Red Road" is attained by living with humility, respect, generosity, and love towards every form of life, with a sense of the sacred that our way of living has long lost. It is particularly by learning to stand in Truth.`,
          `"Prayer" in Lakota translates as "wacekiya," "talking with relatives," since every aspect of Creation is "related" to the other; at the end of every prayer the words "mitakuye oyasin" are pronounced, meaning "to all my relatives or relations": not only humans but every form that descends from the great creation, from the creation of the Great Mystery, the Great Spirit permeating the Universe and of which we possess its animic root.`,
          `We have a divine part which is the spirit, besides the 3 mortal parts, mind-body-heart. Thus we are in a parental relationship with quadrupeds, "alati" (winged beings), creeping beings, insects, fish, vegetation, the sea, the wind, clouds... in short, the entire Creation, of which we humans are one of the infinite links.`,
        ]}
        reverse={false}
      />

      <ContactBanner />
      <Footer />
    </div>
  );
}
