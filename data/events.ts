import eventoMartinaMamani from '@/public/images/evento_martina_mamani.webp';
import eventoVoiceOfFreedom from '@/public/images/evento_voice_of_freedom.webp';
import tribeAroundFire from '@/public/images/tribe_around_fire.webp';
import eventoCerimoniaHikuri from '@/public/images/evento_cerimonia_hikuri.webp';
import eventoParoleNative from '@/public/images/telo_filo_rosso.webp';
import { StaticImageData } from 'next/image';

export interface EventData {
  slug: string;
  title: string;
  image: StaticImageData;
  date: string;
  location1?: string;
  location2?: string;
  members: string[];
  description1?: string;
  description2?: string;
  description3?: string;
  active: boolean;
  registration: string;
}

export const allEventsENG: EventData[] = [
  {
    slug: 'martina-mamani',
    title: 'Martina Mamani',
    image: eventoMartinaMamani,
    date: '31 May 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Luca Del Fuego Confortini'],
    description1: `Quechua Medicine Teacher and Priestess Guardian of the Viracocha Temple in Cusco (Peru) 🇵🇪 She brings her Andean tradition with the Despacho (offering) to Pachamama, the simple wisdom of her people, the oral storytelling of the Abuelos, and the coca leaf reading, of which she is one of the greatest experts.`,
    active: false,
    registration:''
  },
  {
    slug: 'voice-of-freedom',
    title: 'Voice Of Freedom',
    image: eventoVoiceOfFreedom,
    date: '12 July 2025 11:20',
    location1: 'National Shamanism Festival',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini', 'Samuele Zarantonello'],
    description1: `We will learn to sing in the ancestral language of the Lakota, and understand how singing can manifest in us through the opening of the heart and connection with the Great Spirit.`,
    description2: `Singing is a fundamental form of expression within the tribal structures of indigenous peoples. The voice is a vibration that evokes higher spirits; it is an instrument capable of creating and sustaining spiritual actions, making them manifest in the material world. It is the narration of ancestral stories, the sound that in ceremonies guides, supports, heals, and transforms.`,
    active: false,
    registration:'https://forms.gle/K1SxxJ6zPLxhNg9M6'
  },
  {
    slug: 'sweat-lodge-12-july',
    title: 'INIPI Lakota Sweat Lodge',
    image: tribeAroundFire,
    date: '12 July 2025 15:00 - 19:00',
    location1: 'National Shamanism Festival',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `The Ceremony is part of one of the 7 sacred rites of the Native American (Lakota Sioux) people. It represents rebirth through the archetype of the Mother.`,
    description2: `The lodge represents the womb of Mother Earth, fertilized by the stones (spermatozoa) heated by the masculine element, Fire — then brought inside the womb-lodge and activated with Water, the feminine element, so that the heat spreads inside the space and the songs and words are carried upwards as steam to the Great Spirit.`,
    active: false,
    registration:'https://forms.gle/6RN7HTiW7RYMeitg9'
  },
  {
    slug: 'sweat-lodge-13-july',
    title: 'INIPI Lakota Sweat Lodge',
    image: tribeAroundFire,
    date: '13 July 2025 10:00 - 14:00',
    location1: 'National Shamanism Festival',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `The Ceremony is part of one of the 7 sacred rites of the Native American (Lakota Sioux) people. It represents rebirth through the archetype of the Mother.`,
    description2: `The lodge represents the womb of Mother Earth, fertilized by the stones (spermatozoa) heated by the masculine element, Fire — then brought inside the womb-lodge and activated with Water, the feminine element, so that the heat spreads inside the space and the songs and words are carried upwards as steam to the Great Spirit.`,
    active: false,
    registration:'https://forms.gle/fsJa1E2Mi5uE3hoYA'
  },
  {
    slug: 'cerimonia-hikuri',
    title: 'Hikuri Ceremony',
    image: eventoCerimoniaHikuri,
    date: '21-22 September 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Don Juan "Aguila" Ortiz De La Cruz'],
    description1: `Don Juan “Aguila” Ortiz de La Cruz is a marakame (“he who sings and dreams”), traditional shaman and spiritual leader of his people: the Wixárika, also known as Huicholes, from Mexico.`,
    description2: `Born into the Wixárika tradition and fully dedicated to it and humanity, he leads ancient ceremonies around the Fire (grandfather Tatewari), which represent a central part of his magnificent culture and great spiritual family.`,
    description3: `His ancestral songs in the Wixárika language tell stories about the creation of the universe, honor natural elements and all the deities that are part of this extraordinary cosmogony. Through their vibration, these songs invoke the Spirit of the Blue Deer (Kauyumari) and activate the power of hikuri, the sacred medicine for all human hearts.`,
    active: true,
    registration:'https://forms.gle/BUbxo89YopufmyXw5'
  },
  {
    slug: 'parole-native',
    title: 'Native Words',
    image: eventoParoleNative,
    date: '18-19 October 2025',
    members: ['Luca Del Fuego Confortini', 'Giovanni Letizia'],
    description1: `With this workshop, you have the opportunity to take an evolutionary leap thanks to **NATIVE WORDS**, a unique experience that combines the ancient wisdom of Native Americans with the power of NLP (Neuro-Linguistic Programming).`,
    description2: `- Discover the power of millennia-old traditions.\n- Reprogram your mind for evolution and success.\n- Activate your inner resources and human potential.\n- Experience a deep sense of connection and awareness.`,
    active: true,
    registration:'https://forms.gle/TE2YmaFqBjEYys1aA'
  },
];


