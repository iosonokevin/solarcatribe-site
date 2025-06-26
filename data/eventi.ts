export interface EventData {
  slug: string;
  title: string;
  image: string;
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
    image: '/evento_martina_mamani.jpg',
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
    image: '/evento_voice_of_freedom.png',
    date: '12 luglio 2025 11:20',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini', 'Samuele Zarantonello'],
    description1: `Impareremo a cantare nella lingua ancestrale dei Lakota, e comprenderemo come il canto possa manifestarsi in noi attraverso l’apertura del cuore e la connessione con il Grande Spirito.`,
    description2: `Il canto è una forma fondamentale di espressione all’interno delle strutture tribali dei popoli indigeni. La voce è una vibrazione che evoca gli spiriti superiori; è uno strumento capace di creare e sostenere azioni spirituali, rendendole manifeste nel mondo materiale. È la narrazione di storie ancestrali, il suono che nelle cerimonie guida, supporta, cura e trasforma.`,
    active: true,
    registration:'https://forms.gle/K1SxxJ6zPLxhNg9M6'
  },
  {
    slug: 'capanna-sudatoria-12-luglio',
    title: 'INIPI Capanna Sudatoria Lakota',
    image: '/tribe_around_fire.jpg',
    date: '12 luglio 2025 15:00 - 19:00',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `La Cerimonia fa parte di uno dei 7 riti sacri degli Indiani Americani (Nativi Americani) Lakota Sioux. Rappresenta la rinascita attraverso l'archetipo della Madre.`,
    description2: `La capanna rappresenta l'utero di Madre Terra che viene fecondato dalle pietre (spermatozoi) scaldate dall'elemento maschile, il Fuoco - per poi essere portato all'interno dell'utero-capanna e con l'Acqua, l'elemento femminile, attivate affinchè il calore si espanda all'intenro dello spazio e i canti e le parole vengano portate in alto sotto forma di vapore al Grande Spirito.`,
    active: true,
    registration:'https://forms.gle/6RN7HTiW7RYMeitg9'
  },
  {
    slug: 'capanna-sudatoria-13-luglio',
    title: 'INIPI Capanna Sudatoria Lakota',
    image: '/tribe_around_fire.jpg',
    date: '13 luglio 2025 10:00 - 14:00',
    location1: 'Festival Nazionale dello Sciamanesimo',
    location2: 'Bosco Eremo Locatelli - Corbetta (MI)',
    members: ['Luca Del Fuego Confortini'],
    description1: `La Cerimonia fa parte di uno dei 7 riti sacri degli Indiani Americani (Nativi Americani) Lakota Sioux. Rappresenta la rinascita attraverso l'archetipo della Madre.`,
    description2: `La capanna rappresenta l'utero di Madre Terra che viene fecondato dalle pietre (spermatozoi) scaldate dall'elemento maschile, il Fuoco - per poi essere portato all'interno dell'utero-capanna e con l'Acqua, l'elemento femminile, attivate affinchè il calore si espanda all'intenro dello spazio e i canti e le parole vengano portate in alto sotto forma di vapore al Grande Spirito.`,
    active: true,
    registration:'https://forms.gle/fsJa1E2Mi5uE3hoYA'
  },
  {
    slug: 'cerimonia-hikuri',
    title: 'Cerimonia Hikuri',
    image: '/evento_cerimonia_hikuri.jpg',
    date: '21-22 settembre 2025',
    location1: 'Val Chiusella (TO)',
    members: ['Luca Del Fuego Confortini'],
    description1: `Don Juan “Aguila” Ortiz de La Cruz è un marakame (“colui che canta e sogna”), sciamano tradizionale e leader spirituale del suo popolo: gli Wixárika, noti anche come Huicholes, del Messico.`,
    description2: `Nato nella tradizione Wixárika e completamente dedicato a essa e all’umanità, guida antiche cerimonie intorno al Fuoco (nonno Tatewari), che rappresentano una parte centrale della sua magnifica cultura e della sua grande famiglia spirituale.`,
    description3: `I suoi canti ancestrali in lingua Wixárika raccontano storie sulla creazione dell’universo, onorano gli elementi naturali e tutte le divinità che fanno parte di questa straordinaria cosmogonia. Attraverso la loro vibrazione, questi canti invocano lo Spirito del Cervo Blu (Kauyumari) e attivano il potere dell’hikuri, la medicina sacra per tutti i cuori umani.`,
    active: true,
    registration:'https://forms.gle/BUbxo89YopufmyXw5'
  },
  {
    slug: 'parole-native',
    title: 'Parole Native',
    image: '/evento_parole_native.png',
    date: '4-5 ottobre 2025',
    members: ['Luca Del Fuego Confortini'],
    description1: `Con questo workshop hai l’opportunità di fare un salto evolutivo grazie a **PAROLE NATIVE**, un’esperienza unica che unisce l’antica saggezza dei Nativi Americani con la potenza della PNL (Programmazione Neuro-Linguistica).`,
    description2: `- Scopri il potere delle tradizioni millenarie.\n- Riprogramma la tua mente per l’evoluzione e il successo.\n- Attiva le tue risorse interiori e il tuo potenziale umano.\n- Vivi un profondo senso di connessione e consapevolezza.`,
    active: true,
    registration:'https://forms.gle/TE2YmaFqBjEYys1aA'
  },
];

