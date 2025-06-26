'use client';

import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import ImageBanner from '@/components/common/ImageBanner';
import ImageTextSection from '@/components/common/ImageTextSection';
import { useLanguage } from '@/components/layout/LanguageProvider';

import heroTribe from '@/public/images/hero_tribe.webp';
import solarcaColors from '@/public/images/solarca_colors.webp';
import bandieraSolarcaSantaSara from '@/public/images/bandiera_solarca_santa_sara.webp';
import fotoLuca from '@/public/images/foto_luca.webp'
import santaSaraLucaJeremy from '@/public/images/santa_sara_luca_jeremy.webp'

export default function Tribe() {
  const { language } = useLanguage();

  return (
    <div className="bg-black text-white font-[family-name:var(--font-geist-sans)] relative">      
      <Hero 
        title={
          language === 'ITA' 
            ? "Il respiro di Madre Terra si fa battito in ogni cuore" 
            : "Mother Earth's breath becomes a heartbeat in every heart"
        } 
        height="90vh" 
        imageSrc={heroTribe} 
      />

      <ImageTextSection
        imageSrc={solarcaColors} 
        titleITA="Solarca"
        titleENG="Solarca"
        paragraphsITA={[
          "La Tribù di Solarca nasce e si sviluppa nel Tempio in Natura di Solarca, in Val Chiusella, un luogo energeticamente potente e da sempre punto di riferimento per ricercatori spirituali, facilitatori, astrologi e guaritori. Non a caso, sorge in una zona che ospita anche Damanhur, la più antica comunità esoterica d’Italia e tra le più longeve d’Europa.",
          "Fondata nei primi anni 2000 dalla visione di Heloine — Donna di Medicina ed ex monaca di Damanhur — insieme al suo cerchio di donne, Solarca è cresciuta come spazio di accoglienza, cura, riflessione e crescita interiore.",
          "Frutto di anni di pratiche e sperimentazioni, Solarca non ha un’identità univoca, ma si nutre di molteplici influenze spirituali ed esoteriche: dalla tradizione Celtica e Druida al pensiero di Gurdjieff, in un continuo intreccio di culture e visioni."
        ]}
        paragraphsENG={[
          "The Solarca Tribe was born and developed in the Solarca Nature Temple, in Val Chiusella, a place energetically powerful and long a reference point for spiritual seekers, facilitators, astrologers, and healers. Not by chance, it rises in an area that also hosts Damanhur, the oldest esoteric community in Italy and among the longest-lived in Europe.",
          "Founded in the early 2000s by the vision of Heloine — Medicine Woman and former nun of Damanhur — along with her circle of women, Solarca has grown as a space for welcoming, care, reflection, and inner growth.",
          "The result of years of practices and experimentation, Solarca has no unique identity, but feeds on multiple spiritual and esoteric influences: from Celtic and Druid traditions to the thought of Gurdjieff, in a continuous intertwining of cultures and visions."
        ]}
        reverse={true}
      />

      <ImageBanner
        titleITA="Dalla condivisione nasce l’unità"
        titleENG="From sharing comes unity"
        height="40vh"
        buttonTextITA="Respira"
        buttonTextENG="Breathe"
        buttonHref="/red-path"
        overlayOpacity={0.5}
      />

      <ImageTextSection
        imageSrc={bandieraSolarcaSantaSara}
        titleITA="La Tribù"
        titleENG="The Tribe"
        paragraphsITA={[
          "Nel 2014 arriva Luca Del Fuego Confortini, e inizia a prendere forma, seguendo i codici delle comunità tribali native, l’idea di tribù che oggi caratterizza il popolo solarchiano, composto da oltre 130 persone.",
          "L’assetto tribale si basa su complicità e condivisione solidale degli spazi, degli intenti, della cura delle persone e del luogo, e su una costante ricerca della migliore versione di sé per sostenere la collettività, evitando che l’individualità prevalga.",
          "Si punta all’evoluzione di una connessione profonda tra le persone, che si traduce nel concetto dell’Uno e del Tutto: ogni individuo è al servizio degli altri nel ruolo più adatto, con la possibilità di scambiare i compiti, rendendo l’esperienza personale ampia, formativa, evolutiva e mai limitante."
        ]}
        paragraphsENG={[
          "In 2014 Luca Del Fuego Confortini arrived and began to take shape, following the codes of native tribal communities, the idea of tribe that today characterizes the Solarca people, composed of over 130 people.",
          "The tribal setup is based on complicity and solidarity sharing of spaces, intentions, care of people and place, and on a constant search for the best version of oneself to support the community, avoiding individuality prevailing.",
          "The goal is the evolution of a deep connection between people, which translates into the concept of One and All: each individual is at the service of others in the most suitable role, with the possibility to exchange duties, making the personal experience broad, formative, evolutionary and never limiting."
        ]}
        reverse={false}
      />

      <ImageBanner
        titleITA="Connessione, Guarigione, Appartenenza"
        titleENG="Connection, Healing, Belonging"
        height="40vh"
        buttonTextITA="Osserva"
        buttonTextENG="Observe"
        buttonHref="/events"
        overlayOpacity={0.5}
      />

      <ImageTextSection
        imageSrc={fotoLuca}
        titleITA="Luca Del Fuego Confortini"
        titleENG="Luca Del Fuego Confortini"
        paragraphsITA={[
          "Luca Del Fuego Confortini è un viaggiatore spirituale che da 15 anni percorre il Sentiero Rosso dei Nativi Americani. Ha viaggiato per oltre 50.000 miglia, da solo, attraverso le terre native.",
          "Dal 2012 è affiliato alla tribù Lakota Oglala di Pine Ridge (South Dakota) per concessione del Medicine Man Sidney Has No Horses. Ha vissuto in tepee con il popolo Crow del Montana, in occasione del Crow Fair, e dal 2016 sta seguendo l’iniziazione tribale Hopi, guidato da Roanna Red Tail Hawk Girl.",
          "Ha inoltre viaggiato attraverso le riserve degli Ute in Colorado, dei Tohono O’odham a Pima, nonché quelle degli Zuni, Apache, Laguna e Taos Pueblo."
        ]}
        paragraphsENG={[
          "Luca Del Fuego Confortini is a spiritual traveler who has been walking the Native American Red Path for 15 years. He has traveled over 50,000 miles alone through native lands.",
          "Since 2012, he has been affiliated with the Lakota Oglala tribe of Pine Ridge (South Dakota) by permission of Medicine Man Sidney Has No Horses. He has lived in tepees with the Crow people of Montana during the Crow Fair, and since 2016 has been undergoing Hopi tribal initiation, guided by Roanna Red Tail Hawk Girl.",
          "He has also traveled through the Ute reservations in Colorado, the Tohono O’odham in Pima, as well as those of the Zuni, Apache, Laguna, and Taos Pueblo."
        ]}
        reverse={true}
      />

      <ImageTextSection
        imageSrc={santaSaraLucaJeremy}
        titleITA=""
        titleENG=""
        paragraphsITA={[
          "Ha preso parte a cerimonie Inipi, Yuwipi, Danza del Sole, Hamblecheya, Danza del Serpente, Cerimonia del Grano e ad altre cerimonie sacre con i Lakota, i Dakota Yanktonwan e Mdewakanton, gli Hopi, i Navajo dell’Arizona, i Crow, i Pueblo Acoma, gli Arapaho e gli Shoshone del Wyoming.",
          "Dal 2014 ha ricevuto il titolo di “Chief” e il ruolo di Conduttore di Capanna Sudatoria da Heloine, Donna di Medicina. Da allora conduce principalmente cerimonie in Piemonte e in Lombardia. Organizza Cerchi di Condivisione, tiene conferenze sul Rito, sulla Guarigione dell’Anima e sul Sentiero Rosso, e celebra matrimoni sciamanici e purificazioni.",
          "Diplomato con borsa di studio come attore alla Quelli di Grock di Milano, lavora come personal manager per artisti, portando nella vita di tutti i giorni gli insegnamenti spirituali dello Stra-ordinario per integrare la pratica rituale con quella quotidiana. Ha recitato in teatro, al cinema e in televisione, principalmente con Maccio Capatonda."
        ]}
        paragraphsENG={[
          "He took part in Inipi, Yuwipi, Sun Dance, Hamblecheya, Snake Dance, Grain Ceremony and other sacred ceremonies with the Lakota, Dakota Yanktonwan and Mdewakanton, the Hopi, the Arizona Navajo, the Crow, the Acoma Pueblo, the Arapaho and the Wyoming Shoshone.",
          "Since 2014 he has received the title of 'Chief' and the role of Sweat Lodge Conductor from Heloine, Medicine Woman. Since then he mainly leads ceremonies in Piedmont and Lombardy. He organizes Sharing Circles, gives lectures on the Rite, Soul Healing and the Red Path, and celebrates shamanic weddings and purifications.",
          "Graduated with a scholarship as an actor at Quelli di Grock in Milan, he works as a personal manager for artists, bringing spiritual teachings of the Extraordinary into everyday life to integrate ritual practice with daily practice. He has acted in theater, cinema and television, mainly with Maccio Capatonda."
        ]}
        reverse={false}
      />

      <ContactBanner />
      <Footer />
    </div>
  );
}
