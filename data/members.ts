import fotoLuca from '@/public/images/foto_luca.webp';
import fotoSamuele from '@/public/images/foto_samuele.webp';
import { StaticImageData } from 'next/image';

export interface Member {
  name: string;
  imageSrc: StaticImageData;
  bio: string;
}

export const membersENG: Member[] = [
  {
    name: 'Luca Del Fuego Confortini',
    imageSrc: fotoLuca,
    bio: `Luca Del Fuego Confortini is a spiritual traveler who for over 15 years has followed the Red Path of Native Americans, participating in traditional ceremonies with the Lakota, Hopi, Crow, Navajo, and other tribes. Affiliated with the Lakota Oglala tribe, he received the title of “Chief” and the role of Sweat Lodge Conductor in 2014. Since then, he has been leading sacred ceremonies, sharing circles, purifications, and shamanic weddings, bringing the wisdom of native traditions into spiritual healing paths. He mainly operates in Piedmont and Lombardy, with the intention of integrating the sacred into everyday life through ritual and a deep connection with nature and spirit.`,
  },
  {
    name: 'Samuele Zarantonello',
    imageSrc: fotoSamuele,
    bio: 'Samuele Zarantonello is a singer and spiritual seeker, deeply rooted in the simplicity and beauty of life. For many years, he has walked an inner path of listening, presence, and connection with the sacred. His voice, gentle yet powerful, accompanies ceremonies and healing moments, bringing vibrations that touch the heart. A lover of the earth, he lovingly tends to his garden, finding in the relationship with nature a way to center and harmonize himself. Those who meet him are immediately touched by his sensitivity, the sweetness of his presence, and the genuine care he offers to every human being. Samuele carries a space of silence and truth, where each person can feel truly welcomed.',
  }
];

