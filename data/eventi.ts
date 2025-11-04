import eventoMartinaMamani from '@/public/images/evento_martina_mamani.webp';
import eventoVoiceOfFreedom from '@/public/images/evento_voice_of_freedom.webp';
import tribeAroundFire from '@/public/images/tribe_around_fire.webp';
import eventoCerimoniaHikuri from '@/public/images/evento_cerimonia_hikuri.webp';
import eventoParoleNative from '@/public/images/telo_filo_rosso.webp';

import eventoPalermo from '@/public/images/evento_palermo.jpg';
import eventoOttobre from '@/public/images/evento_ottobre.jpg';
import eventoNovembre from '@/public/images/evento_novembre.jpg';
import eventoCapanna from '@/public/images/evento_capanna.jpg';
import eventoOriente from '@/public/images/evento_oriente.jpg';

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

export const allEventsITA: EventData[] = [
  {
    slug: 'martina-mamani',
    title: 'Martina Mamani',
    image: eventoMartinaMamani,
    date: '31 maggio 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Luca Del Fuego Confortini'],
    description1: `Maestra di Medicina Quechua e Sacerdotessa Custode del Tempio di Viracocha a Cusco (Perù) 🇵🇪 Porta la sua tradizione andina con il Despacho (offerta) a Pachamama, la saggezza semplice del suo popolo, della narrazione orale degli Abuelos e la lettura foglie di coca di cui è tra le maggiori conoscitrici. `,
    active: false,
    registration:''
  },
    {
    slug: 'voice-of-freedom',
    title: 'Voice Of Freedom',
    image: eventoVoiceOfFreedom,
    date: '12 luglio 2025 11:20',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini', 'Samuele Zarantonello'],
    description1: `Impareremo a cantare nella lingua ancestrale dei Lakota, e comprenderemo come il canto possa manifestarsi in noi attraverso l’apertura del cuore e la connessione con il Grande Spirito.`,
    description2: `Il canto è una forma fondamentale di espressione all’interno delle strutture tribali dei popoli indigeni. La voce è una vibrazione che evoca gli spiriti superiori; è uno strumento capace di creare e sostenere azioni spirituali, rendendole manifeste nel mondo materiale. È la narrazione di storie ancestrali, il suono che nelle cerimonie guida, supporta, cura e trasforma.`,
    active: false,
    registration:'https://forms.gle/K1SxxJ6zPLxhNg9M6'
  },
  {
    slug: 'capanna-sudatoria-12-luglio',
    title: 'INIPI Capanna Sudatoria Lakota',
    image: tribeAroundFire,
    date: '12 luglio 2025 15:00 - 19:00',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `La Cerimonia fa parte di uno dei 7 riti sacri degli Indiani Americani (Nativi Americani) Lakota Sioux. Rappresenta la rinascita attraverso l'archetipo della Madre.`,
    description2: `La capanna rappresenta l'utero di Madre Terra che viene fecondato dalle pietre (spermatozoi) scaldate dall'elemento maschile, il Fuoco - per poi essere portato all'interno dell'utero-capanna e con l'Acqua, l'elemento femminile, attivate affinchè il calore si espanda all'intenro dello spazio e i canti e le parole vengano portate in alto sotto forma di vapore al Grande Spirito.`,
    active: false,
    registration:'https://forms.gle/6RN7HTiW7RYMeitg9'
  },
  {
    slug: 'capanna-sudatoria-13-luglio',
    title: 'INIPI Capanna Sudatoria Lakota',
    image: tribeAroundFire,
    date: '13 luglio 2025 10:00 - 14:00',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `La Cerimonia fa parte di uno dei 7 riti sacri degli Indiani Americani (Nativi Americani) Lakota Sioux. Rappresenta la rinascita attraverso l'archetipo della Madre.`,
    description2: `La capanna rappresenta l'utero di Madre Terra che viene fecondato dalle pietre (spermatozoi) scaldate dall'elemento maschile, il Fuoco - per poi essere portato all'interno dell'utero-capanna e con l'Acqua, l'elemento femminile, attivate affinchè il calore si espanda all'intenro dello spazio e i canti e le parole vengano portate in alto sotto forma di vapore al Grande Spirito.`,
    active: false,
    registration:'https://forms.gle/fsJa1E2Mi5uE3hoYA'
  },
  {
    slug: 'cerimonia-hikuri',
    title: 'Cerimonia Hikuri',
    image: eventoCerimoniaHikuri,
    date: '20-21 settembre 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Don Juan "Aguila" Ortiz De La Cruz'],
    description1: `Don Juan “Aguila” Ortiz de La Cruz è un marakame (“colui che canta e sogna”), sciamano tradizionale e leader spirituale del suo popolo: gli Wixárika, noti anche come Huicholes, del Messico.`,
    description2: `Nato nella tradizione Wixárika e completamente dedicato a essa e all’umanità, guida antiche cerimonie intorno al Fuoco (nonno Tatewari), che rappresentano una parte centrale della sua magnifica cultura e della sua grande famiglia spirituale.`,
    description3: `I suoi canti ancestrali in lingua Wixárika raccontano storie sulla creazione dell’universo, onorano gli elementi naturali e tutte le divinità che fanno parte di questa straordinaria cosmogonia. Attraverso la loro vibrazione, questi canti invocano lo Spirito del Cervo Blu (Kauyumari) e attivano il potere dell’hikuri, la medicina sacra per tutti i cuori umani.`,
    active: false,
    registration:'https://forms.gle/BUbxo89YopufmyXw5'
  },
  {
    slug: 'parole-native',
    title: 'Parole Native',
    image: eventoParoleNative,
    date: 'TBD',
    location1: 'Sala Kobain - Via Zannoni 29 - Bologna (BO)',
    members: ['Luca Del Fuego Confortini', 'Giovanni Letizia'],
    description1: `Con questo workshop hai l’opportunità di fare un salto evolutivo grazie a **PAROLE NATIVE**, un’esperienza unica che unisce l’antica saggezza dei Nativi Americani con la potenza della PNL (Programmazione Neuro-Linguistica).`,
    description2: `- Scopri il potere delle tradizioni millenarie.\n- Riprogramma la tua mente per l’evoluzione e il successo.\n- Attiva le tue risorse interiori e il tuo potenziale umano.\n- Vivi un profondo senso di connessione e consapevolezza.`,
    active: true,
    registration:'https://forms.gle/TE2YmaFqBjEYys1aA'
  },
  {
    slug: 'evento-palermo',
    title: 'Palermo Comic Convention',
    image: eventoPalermo,
    date: '11-14 settembre 2025',
    location1: 'Palermo',
    members: ['Luca Del Fuego Confortini'],
    description1: `Luca Del Fuego Confortini ha tenuto due conferenze + un podcast per la Palermo Comic Convention 2025.`,
    active: true,
    registration:''
  },
  {
    slug: 'evento-ottobre',
    title: 'Rituale del Samhain',
    image: eventoOttobre,
    date: '1 novembre 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Luca Del Fuego Confortini'],
    description1: `Nelle civiltà celtiche, Samhain è una festa periodica che simboleggia la fine della stagione del raccolto. Rappresenta anche l’inizio della “metà oscura” dell’anno, il giorno in cui il confine tra il mondo e l'”Altro Mondo” è più permeabile. La festa era un momento di contemplazione. Per i Celti morire con onore, vivere nella memoria della tribù ed essere ricordati nella grande festa che si sarebbe svolta la vigilia di Samhain era una cosa molto importante. Questo era il periodo più magico dell'anno: il giorno che non esisteva. Durante la notte il grande scudo di Scáthach veniva abbassato, eliminando le barriere fra i mondi e permettendo alle forze del caos di invadere i reami dell'ordine e al mondo dei morti di entrare in contatto con quello dei vivi. I morti avrebbero potuto ritornare nei luoghi che frequentavano mentre erano in vita, e celebrazioni gioiose erano tenute in loro onore. Da questo punto di vista le tribù erano un tutt'uno col loro passato e il loro futuro.`,
    active: true,
    registration:''
  },
  {
    slug: 'evento-novembre',
    title: 'Creatività e Spiritualità',
    image: eventoNovembre,
    date: '7 novembre 2025',
    location1: 'ore 21 Sala Napoleonica - Ville Ponti - Varese',
    members: ['Luca Del Fuego Confortini'],
    description1: `Hagam incontra Luca Confortini e Maccio Capatonda.`,
    active: true,
    registration:''
  },
  {
    slug: 'capanna-sudatoria-15-novembre',
    title: 'INIPI Capanna Sudatoria Lakota',
    image: eventoCapanna,
    date: '15-16 novembre 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Luca Del Fuego Confortini'],
    description1: `Chi percorre la Via Sciamanica osserva partecipando in ogni forma. La partecipazione è l’atto richiesto dal Grande Spirito per restare sul cammino del cuore. La saggezza sta nelle parole, l’esempio sta nell’azione, la guarigione evolutiva sta nella pratica cerimoniale. Lo Spirito muove la materia che lo contiene e realizza la manifestazione che essa proietta`,
    description2: `UNISCITI A NOI per esprimere nella forza del RITO l’unicità e la bellezza di ognuno nella creazione del Tutto.`,
    active: true,
    registration:''
  },
  {
    slug: 'evento_oriente',
    title: 'Oriente Day - Festival di Mente Corpo e Spirito',
    image: eventoOriente,
    date: '22-23 novembre 2025',
    location1: 'Spazio Fase- Bergamo - Alzano Lombardo',
    members: ['Luca Del Fuego Confortini'],
    description1: `CONFERENZE, LIBRI E MOMENTI ISPIRAZIONE. Esperti, scrittori, Maestri, studiosi e ospiti speciali portano le loro ricerche, presentano le loro pratiche e raccontano il mondo dell'Oriente in tutte le sue sfumature. Scopri il programma e preparati a lasciarti stupire e guidare tra libri e letture, meditazioni, sciamanesimo, naturopatia, spunti di riflessione e momenti di scoperta di nuove strade di consapevolezza.`,
    active: true,
    registration:''
  },
];

