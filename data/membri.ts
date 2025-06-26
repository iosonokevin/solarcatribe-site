import fotoLuca from '@/public/images/foto_luca.webp';
import fotoSamuele from '@/public/images/foto_samuele.webp';
import { StaticImageData } from 'next/image';

export interface Member {
  name: string;
  imageSrc: StaticImageData;
  bio: string;
}


export const membersITA: Member[] = [
  {
    name: 'Luca Del Fuego Confortini',
    imageSrc: fotoLuca,
    bio: 'Luca Del Fuego Confortini è un viaggiatore spirituale che da oltre 15 anni segue il Sentiero Rosso dei Nativi Americani, partecipando a cerimonie tradizionali con i Lakota, Hopi, Crow, Navajo e altre tribù. Affiliato alla tribù Lakota Oglala, ha ricevuto il titolo di “Chief” e il ruolo di Conduttore di Capanna Sudatoria nel 2014. Da allora guida cerimonie sacre, cerchi di condivisione, purificazioni e matrimoni sciamanici, portando la saggezza delle tradizioni native in percorsi di guarigione spirituale. Opera principalmente in Piemonte e Lombardia, con l’intento di integrare il sacro nella vita quotidiana attraverso il rito e la connessione profonda con la natura e lo spirito.',
  },
  {
    name: 'Samuele Zarantonello',
    imageSrc: fotoSamuele,
    bio: 'Samuele Zarantonello è un cantante e ricercatore spirituale, profondamente radicato nella semplicità e nella bellezza della vita. Da molti anni percorre un cammino interiore fatto di ascolto, presenza e connessione con il sacro. La sua voce, dolce e intensa, accompagna cerimonie e momenti di guarigione, portando vibrazioni che toccano il cuore. Amante della terra, coltiva con amore il suo orto, trovando nel contatto con la natura una via di centratura e armonia. Chi lo incontra percepisce immediatamente la sua sensibilità, la dolcezza dei suoi gesti e la cura autentica che rivolge a ogni essere umano. Samuele porta con sé uno spazio di silenzio e verità, dove ciascuno può sentirsi accolto.',
  }
];
